import axios from "axios";
import React, { useState, useEffect } from "react";
import Posts from "./Posts";

const GetPost = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("api/posts/getPost")
        .then((res) => {
          setList(res.data);
        })
        .catch((err) => console.log("Error Getting Post",err));
    };
    getData();
  }, [list]);
  return (
    <div>
      <h1>POSTS</h1>
      {list.map((item) => {
        return (
        <Posts key={item.id} item={item} />
        );
      })}
    </div>
  );
};

export default GetPost;
