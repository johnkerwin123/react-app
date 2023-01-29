import { createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState (
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // to do
    setCurrentUser ({id:1, name:"John Doe", profilePic:"https://images.unsplash.com/photo-1674413145062-af85d82616d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"})
  };

  useEffect (() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  },[currentUser]);

  return (
    <AuthContext.Provider value = {{currentUser, login }} >
      {children}
    </AuthContext.Provider>
  )
};