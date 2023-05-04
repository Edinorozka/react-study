import './App.css';
import React from "react";
import PostCard from "./card/PostCard";
import {Navbar} from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Posts} from "./PostsPage/Posts";
import {PostPage} from "./PostPage/PostPage";
import {useDispatch} from "react-redux";
import {Login} from "./Login/Login";
import Exit from "./Exit/Exit";
import {Registration} from "./Registration/Registration";

function App() {


    const Home = () => {
        const [users, setUsers] = React.useState([])
        //const {loading, success, posts: users} = useSelector((state => state.posts))
        const [posts, setPosts] = React.useState([])
        const dispatch = useDispatch()
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
          <div>
              <h1 style={{textAlign: "center", fontSize: 56}}>Users</h1>
              <div style={{margin: 50, display: "flex", gap: 16, flexWrap: "wrap"}}>
                  {
                      users && users.length > 0 && users.map(user => {
                          const text = posts.find(post => {
                              if(post.userId === user.id) {return post}
                              return []
                          })
                          try {
                              return <PostCard key = {user.id} title = {user.name} email = {user.email}
                                               phone = {user.phone} postTitle = {text.title} postBody = {text.body}/>
                          } catch (error){
                              console.log("error get", error);
                          }
                      })
                  }
              </div>
          </div>
      )
    }

    const NotFoud = () => {
      return(
          <><h1>Page not found!</h1></>
      )
    }
  return (
    <Navbar>
        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/posts'} element={<Posts />}/>
            <Route path={'/post/:id'} element={<PostPage />}/>
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/registration'} element={<Registration />}/>
            <Route path={'/exit'} element={<Exit />}/>
            <Route path={'*'} element={<NotFoud />}/>
        </Routes>

    </Navbar>
  );
}

export default App;
