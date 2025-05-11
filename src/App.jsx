import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import PostListProvider from './Store/post-list-store'

function App() {

  const [SelectedPost,setSelectedPost] = useState("Home")

  return (

    <PostListProvider>
    <div className='app-container'>
    <Sidebar SelectedPost={SelectedPost} setSelectedPost={setSelectedPost}></Sidebar>
    <div className='content'>
      <Header ></Header>
      {SelectedPost==='Home'? <PostList></PostList>:<CreatePost></CreatePost>}
    <Footer></Footer>
    </div>
    </div></PostListProvider>
      
  )
}

export default App
