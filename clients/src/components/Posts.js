import React from 'react'
import Comment from './Comment'

const Posts = ({item}) => {
  return (
    <div className="post" key={item.id}>
    <h4 > {item.post}</h4>  <p><span>Author: </span>{item.author}</p> <p className="image">Article: {item.desc}</p>
      <Comment item={item} />
  </div>
  )
}

export default Posts
