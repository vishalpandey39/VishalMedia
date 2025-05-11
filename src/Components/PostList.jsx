
import { useContext } from "react";
import Post from "./Post";
import { Postlist as postlistData } from "../Store/post-list-store";
const PostList = () =>{

  const {postList}= useContext(postlistData)

  return <>
    {postList.map((post)=><Post key={post.id} post={post}/>)}
  </>

}

export default PostList;