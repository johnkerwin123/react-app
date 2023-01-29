import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {

  const{currentUser} = useContext(AuthContext);

  // temporary
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.unsplash.com/photo-1674649206998-dfa81167bc36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.unsplash.com/photo-1674771217089-a2cc4cda2d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.unsplash.com/photo-1674813878273-71d20543554a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://plus.unsplash.com/premium_photo-1663126411734-78e1905d106c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="stories">
        <div className="story">
               <img src={currentUser.profilePic} alt=""/>
               <span>{currentUser.name}</span>
               <button>+</button>
        </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
               <img src={story.img} alt=""/>
               <span>{story.name}</span>
              
            </div>
        ))}
    </div>
  )
}

export default Stories
