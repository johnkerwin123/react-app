import "./posts.scss";
import Post from "../post/Post";


const Posts = () => {

 
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://images.unsplash.com/photo-1674594430972-c3b9e6589e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      desc: "Note that the development build is not optimized",
      img: "https://plus.unsplash.com/premium_photo-1672281090698-f0ccbb189e8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic: "https://images.unsplash.com/photo-1674809669778-f3120e8febfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      desc: "Note that the development build is not optimized ",
    },
  ];

  return <div className="posts">
    {posts.map(post =>(
      <Post post = {post} key= {post.id}/>
    ))}
  </div>;

  
};

export default Posts;
