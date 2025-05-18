import { useContext, useRef } from "react";
import { Postlist } from "../Store/post-list-store";


const CreatePost = () =>{

 const {addPost} =useContext(Postlist)

  const useridElement=useRef();
  const TitleElement=useRef();
  const ContentElement=useRef();
  const ReactionsElement=useRef();
  const HashtagsElement=useRef();

  const handlesubmit = (event) =>{
     event.preventDefault();
     const userid= useridElement.current.value;
     const title= TitleElement.current.value;
     const content= ContentElement.current.value;
     const reactions= ReactionsElement.current.value;
     const hashtags= HashtagsElement.current.value.split(" ");

    useridElement.current.value="";
    TitleElement.current.value="";
    ContentElement.current.value="";
    ReactionsElement.current.value="";
    HashtagsElement.current.value="";



     addPost(userid,title,content,reactions,hashtags);
  }




 return <form className="create-post" onSubmit={handlesubmit}>
  <div className="mb-3">
   <label htmlFor="Userid" className="form-label">Enter ID</label>
   <input type="text" ref={useridElement} className="form-control" id="Userid" placeholder="Id please"/>
 </div>
 <div className="mb-3">
   <label htmlFor="Title" className="form-label">Title</label>
   <input type="text" ref={TitleElement} className="form-control" id="Title" placeholder="Please enter the title"/>
 </div>
 <div className="mb-3">
   <label htmlFor="Content" className="form-label">Post Content</label>
   <textarea rows="4" ref={ContentElement} type="text" className="form-control" id="Content" placeholder="Write Something"/>
 </div>
 <div className="mb-3">
   <label htmlFor="reactions" className="form-label">People Reacted</label>
   <input type="text" ref={ReactionsElement} className="form-control" id="reactions" placeholder="People reacted on this post"/>
 </div>

 <div className="mb-3">
   <label htmlFor="tags" className="form-label">Hashtags</label>
   <input type="text" ref={HashtagsElement} className="form-control" id="tags" placeholder="Enter Hashtags here"/>
 </div>

 <button type="submit" className="btn btn-primary">POST</button>
 </form>
};

export default CreatePost;
 
 