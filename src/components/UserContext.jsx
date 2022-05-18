import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";
const UserContext = createContext(null);

export const useProfile = () => {
  return useContext(UserContext);
};  

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user]);
  useEffect(() => {
    const loadPost = async () => {
      // console.log("hello");
      // Till the data is fetched using API
      // the Loading page will show.
      // setLoading(true);

      // Await make wait until that
      // promise settles and return its reult
      const response = await axios.get("/auth/user", { withCredentials: true });
      // console.log(response.data);
      // After fetching data, stored it in posts state.

      // useCallback(
      //   () => {
      //     setUser(response.data);
      //   },
      //   [setUser],
      // )
      if (response.data) {
        setUser(response.data);
      }
      // Closed the loading page
      // setLoading(false);
    };

    // Call the function
    loadPost();
  }, []);
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

