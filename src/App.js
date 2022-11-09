import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./cards";
import "./App.css";

function App() {
  const [post, setPost] = useState({});

  function newPost() {
    let body = {
      title: "hello",
      id: "101",
      body: "hello world 1",
      userId: 1,
    };
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/101", body)
      .then((res) => {
        console.log(res);
      });
  }

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    setPost(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <button onClick={() => newPost()}>Post</button>
      <Card id={post.id} title={post.title} />
    </div>
  );
}

export default App;
