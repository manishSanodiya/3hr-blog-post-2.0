import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Comment = ({item}) => {

  const [c,setc] = useState('')
  const [list,setList] = useState([]);

  const postId = item.id;

  const com = {
    comment: c,
    postId: postId
  }
  const submitHandler = async(e)=>{
      e.preventDefault();
      try{
        console.log(c)
        const res = await axios.post(`api/comments/addComment`,com)
        getComment()
      }catch(err){
        console.log("Error while adding comment",err)
      }
  
  }
  const getComment =async()=>{
    try{
      const res = await axios.get(`api/comments/getComment/${postId}`)
      const data = await res.data
      setList(data);
    } catch (err){
      console.log('Error Getting Comments',err)
    }
   
  } 

  const deleteComments = async(id)=>{
   try{
    console.log(id);
    const res = await axios.delete(`api/comments/deleteComment/${id}`)
    
  }catch (err){
    console.log('Error Deleting Comments',err);
  }
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
