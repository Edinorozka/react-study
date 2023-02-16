import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import PostCard from "./card/PostCard";

function App() {
  const [users, setUsers] = React.useState([])
  const [posts, setPosts] = React.useState([])
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
          if (res && Array.isArray(res) && res.length > 0) {
            setUsers(res)
          }
        })
  }

  const getPost = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => {
              if (res && Array.isArray(res) && res.length > 0) {
                  setPosts(res)
              }
          })
  }

  React.useEffect(()=>{
    getData();
    getPost();
  }, [])

  return (
    <ChakraProvider>
      <h1 style={{textAlign: "center", fontSize: 56}}>Users</h1>
      <div style={{margin: 50, display: "flex", gap: 16, flexWrap: "wrap"}}>
        {
         users.length > 0 && users.map(user => {
             const text = posts.find(post => {
                 if(post.userId === user.id) {return post}
                 return []
             })
                return <PostCard key = {user.id} title = {user.name} email = {user.email}
                             phone = {user.phone} postTitle = {text.title} postBody = {text.body}/>
            })
        }
      </div>
    </ChakraProvider>
  );
}

export default App;
