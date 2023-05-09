import { useEffect, useState } from "react";

function useFetchHome() {
  const [favourites, setFavourites] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    const dummyURL = "/MOCK_DATA.json";
    const getFavourites = async () => {
      const url = "http://localhost:5958/getFavourites";
      const payload = {};
      try {
        const response = await fetch(dummyURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        setFavourites(result);
        // console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const getPlaylists = async () => {
      const url = "http://localhost:5958/getPlaylists";
      const payload = {};
      try {
        const response = await fetch(dummyURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        setPlaylists(result);
        // console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const getRecentlyAdded = async () => {
      const url = "http://localhost:5958/getRecentlyAdded";
      const payload = {};
      try {
        const response = await fetch(dummyURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        setRecentlyAdded(result);
        // console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const getRecentlyPlayed = async () => {
      const url = "http://localhost:5958/getRecentlyPlayed";
      const payload = {};
      try {
        const response = await fetch(dummyURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        setRecentlyPlayed(result);
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getFavourites();
    getPlaylists();
    getRecentlyAdded();
    getRecentlyPlayed();
  }, []);
  return [favourites, playlists, recentlyAdded, recentlyPlayed];
}

export default useFetchHome;
