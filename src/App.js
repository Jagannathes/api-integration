import {useState, useEffect} from "react"
import axios from 'axios'
import Card from './cards'
import './App.css';

function App() {
   const [post, setPost] = useState({})
   
   
   function newPost(){
    let body = {
      title:"hello",
      id:"101",
      body:"hello world",
      userId:1
    }

   }

   const getPosts = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
      setPost(res.data)
      console.log(res.data)
     })
   }
    
   getPosts()
   useEffect(
     ()=>{
     
     }
     ,[]
   )

  return (
    <div className="App">
     <button onClick={()=>newPost()}>Post</button>
     <Card id = {post.id} title={post.title} />
    </div>
  );
}

export default App;
