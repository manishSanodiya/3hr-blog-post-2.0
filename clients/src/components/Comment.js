import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Comment = ({item}) => {

  const [c,setc] = useState('')
  const [list,setList] = useState([]);

  const postId = item.id;
// console.log(list)
  const com = {
    comment: c,
    postId: postId
  }
  const submitHandler = async(e)=>{
      e.preventDefault();
     console.log(c)
     const res = await axios.post(`api/comments/addComment`,com)
     getComment()
  }
  const getComment =async()=>{
    const res = await axios.get(`api/comments/getComment/${postId}`)
    const data = await res.data
    setList(data);
  } 

  const deleteComments = async(id)=>{
    console.log(id);
    const res = await axios.delete(`api/comments/deleteComment/${id}`)
    
  }
  useEffect(()=>{

    getComment()
  },[postId,deleteComments])
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='comment' onChange={(e)=>{setc(e.target.value)}}/>
        <button type='submit'>add comment</button>
      </form>
      <div className='comment'>
        <h3>Comments</h3>
      {list && list.map((item)=>{
      return <p key={item.id}>{item.comment} <button onClick={()=>{deleteComments(item.id)}}>delete</button></p>
    })}
      </div>
  
    </div>
  )
}

export default Comment
