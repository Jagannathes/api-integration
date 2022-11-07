import {useState, useEffect} from "react"
import axios from 'axios'
import './App.css';

function App() {
   const [post, setPost] = useState({})
   const [posts, setPosts] = useState([]) 
   
   function newPost(){
    
   }
    
   useEffect(
     ()=>{
      
     }
     ,[]
   )

  return (
    <div className="App">
     <button onClick={()=>newPost()}>Post</button>
     {post.title}
    </div>
  );
}

export default App;
