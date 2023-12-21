
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const Comment = ({ item }) => {
  const [c, setC] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const postId = item.id;

  const com = {
    comment: c,
    postId: postId,
  };

  const submitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        await axios.post(`api/comments/addComment`, com);
        setC(''); // Reset input field after submission
        getComment();
      } catch (err) {
        console.log("Error while adding comment", err);
      } finally {
        setLoading(false);
      }
    },
    [com]
  );

  const getComment = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`api/comments/getComment/${postId}`);
      const data = await res.data;
      setList(data);
    } catch (err) {
      console.log('Error Getting Comments', err);
    } finally {
      setLoading(false);
    }
  }, [postId]);

  const deleteComments = useCallback(
    async (id) => {
      try {
        setLoading(true);
        await axios.delete(`api/comments/deleteComment/${id}`);
        getComment();
      } catch (err) {
        console.log('Error Deleting Comment', err);
      } finally {
        setLoading(false);
      }
    },
    [getComment]
  );

  useEffect(() => {
    getComment();
  }, [getComment]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="comment" value={c} onChange={(e) => setC(e.target.value)} />
        <button type="submit">Add comment</button>
      </form>
      <div className="comment">
        <h3>Comments</h3>
        {loading && <p>Loading...</p>}
        {list &&
          list.map((item) => {
            return (
              <p key={item.id}>
                {item.comment}{' '}
                <button onClick={() => deleteComments(item.id)}>Delete</button>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
