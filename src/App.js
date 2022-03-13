import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/SinglePost"
import Error from "./pages/Error"


function App() {
  return (
   <BrowserRouter>
   <Header /> 
   <Routes>
     <Route exact path="/" element={<Homepage />}>
      
     </Route>
     <Route path="/blog/:slug" element={<SinglePost />}>      
     </Route>
     <Route path="/blog" element={<Blog />}>      
     </Route>
     <Route path="*" element={<Error />}>      
     </Route>
     </Routes>   
   </BrowserRouter>
  );
}

export default App;
