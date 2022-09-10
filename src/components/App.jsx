import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
// import ContactThanks from "./ContactThanks";
// import Contact from "./Contact";
import Explore from "./Explore";
import Animecard from "./Animecard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./ContactPage";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import Search from "./Search";
import Signup from "./Signup";
// import { UserContext } from "./UserContext";
import Library from "./Library";
import Home from "./Home";
import axios from "axios";
import { useCountRenders } from "./useCountRenders";
import { UserProvider } from "./UserContext";
function App() {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [links, setLinks] = useState({});
  // const userRef = useRef();
  // const response = null;
  
  
  // useEffect(() => {
  //   const loadPost = async () => {
        
        // console.log("hello");
        // Till the data is fetched using API 
        // the Loading page will show.
        // setLoading(true);
        // Await make wait until that 
        // promise settles and return its reult

        // const response = await axios.get("/auth/user", {withCredentials:true});
        
        // console.log(response.data);
        // After fetching data, stored it in posts state.

        // useCallback(
        //   () => {
        //     setUser(response.data);
        //   },
        //   [setUser],
        // )
      
      
        // if (response.data) {
          
        //   setUser(response.data);
        // }
      
      
        // Closed the loading page
        // setLoading(false);
      // }
      
      // Call the function
      // loadPost();
    // }, []);
    // console.log("user: ",user);
    // useCountRenders();
  return (<>
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/categories/:catId" element={<Category />} />
          <Route path="/anime/:animeId" element={<Animecard />} />
          <Route path="/search/:searchId" element={<Search />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/library" element={<Library />}></Route>
        </Routes>
      </UserProvider>
        <Footer />
    </BrowserRouter>
        </>
  );
}

export default React.memo(App);
