import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useFetch(url, cred) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadPost = async () => {
      // console.log("hello");
      // Till the data is fetched using API
      // the Loading page will show.
      setLoading(true);

      // Await make wait until that
      // promise settles and return its reult
      const response = await axios.get(url, {
        withCredentials: cred,
      });
      // console.log(response.data);
      // After fetching data, stored it in posts state.
      setData(response.data);
      // Closed the loading page
      setLoading(false);
    };

    // Call the function
    loadPost();
  }, []);
  return [loading, data];
}
