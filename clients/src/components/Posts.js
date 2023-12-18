import React from 'react'

const Posts = ({item}) => {
  return (
    <div className="post" key={item.id}>
    <h4 >{item.post}</h4>  <p>{item.author}</p> <p className="image">{item.desc}</p>
   
    comments
    <input type="text" onChange={(e)=> {}}/>
  </div>
  )
}

export default Posts
