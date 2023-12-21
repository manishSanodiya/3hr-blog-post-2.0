
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

const AddPost = () => {
  const [post, setPost] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setDesc] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('api/posts/getPost');
      setList(res.data);
    } catch (err) {
      console.log('Error Getting Posts', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const posts = {
    post,
    author,
    desc,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post('api/posts/addPost', posts);
      setPost('');
      setAuthor('');
      setDesc('');
      getData();
    } catch (err) {
      console.log('Error Adding The Post', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="input"
          placeholder="enter post link"
          value={post}
          onChange={(e) => {
            setPost(e.target.value);
          }}
        />
        <input
          type="text"
          className="input"
          placeholder="enter author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          className="input"
          placeholder="description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button type="submit">Add Post</button>
      </form>
      <div>
        <h1>POSTS</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          list.map((item) => {
            return <Posts key={item.id} item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default AddPost;