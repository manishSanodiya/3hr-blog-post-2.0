import React, { useState } from 'react'
import axios from 'axios';

const AddPost = () => {
    const [post,setPost] = useState('');
    const [author,setAuthor] = useState('');
    const [desc,setDesc] = useState('');


    const posts = {
        post,
        author,
        desc
    }
    const SubmitHandler = async(e)=>{
        e.preventDefault()
        try{
          const res = await axios.post('api/posts/addPost',posts)
        }catch(err){
          console.log('Error Adding The Post',err)
        }
     
    }
  return (
    <div>
        <form onSubmit={SubmitHandler}>
            <input type='text' className='input' placeholder='enter post link' onChange={(e)=>{setPost(e.target.value)}}  />
            <input type='text' className='input' placeholder='enter post link' onChange={(e)=>{setAuthor(e.target.value)}}  />
            <input type='text' className='input' placeholder='description' onChange={(e)=>{setDesc(e.target.value)}}   />
            <button type='submit'>Add Post</button>
        </form>
    </div>
  )
}

export default AddPost