import axios from "axios";
import React, { useState, useEffect } from "react";

const GetPost = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("api/posts/getPost")
        .then((res) => {
          setList(res.data);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);
  return (
    <div>
      <h1>POSTS</h1>
      {list.map((item) => {
        return (
          <div className="post" key={item.id}>
            <h4 className="image">{item.post}</h4> <p>{item.desc}</p>
            comments
            <input type="text" onChange={(e)=> {}}/>
          </div>
        );
      })}
    </div>
  );
};

export default GetPost;
