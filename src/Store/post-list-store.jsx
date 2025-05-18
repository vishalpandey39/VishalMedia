import { createContext, useReducer} from "react";


export const Postlist = createContext({
  postList:[],
  addPost: () => {},
  deletePost: () => {},
});

const postlistReducer = (currPostList, action)=>{
  let newPostList= currPostList;
  if(action.type==="DELETE_POST"){
    newPostList= currPostList.filter((post)=>post.id !== action.payload.postId);
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList];

  }

  return newPostList;

}

const PostListProvider = ({children}) => {

   const [postList,dispatchPostList] = useReducer(postlistReducer,Default_Post_List)

   const addPost= (userid,title,content,reactions,hashtags) =>{
    console.log(`${userid} `)
    dispatchPostList({
      type:"ADD_POST",
      payload: {
        id :Date.now(),
        title : title,
        body : content,
        reactions : reactions,
        userId : userid,
        tags : hashtags
      }
    })

   }

   const deletePost= (postId) =>{
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
   };

  return <Postlist.Provider value ={{
    postList,
    addPost,
    deletePost,
}}>{children}</Postlist.Provider>;

};

const Default_Post_List = [{
  id :"1",
  title : "Going To Delhi",
  body : "finally going to delhi now so happy today.",
  reactions : 2,
  userId : "user-9",
  tags : ["Delhi","Vacation","Holidays"],

},
{
  id :"2",
  title : "Going To gym",
  body : "Aaj gym me khoob mehnat karna hai uske baad protein requirement bhi poora karna hai.",
  reactions : 15,
  userId : "user-8",
  tags : ["Fitness","MuscleGaining","GYM"]
}

]


export default PostListProvider;