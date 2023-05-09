import { useState } from "react";
import "./Home.css";
import useFetchHome from "./useFetchHome";

function Home() {
  const [favourites, playlists, recentlyAdded, recentlyPlayed] = useFetchHome();

  return (
    <div className="home">
      <h2>Favourites</h2>
      <div className="favourites">
        {favourites.slice(0, 5).map((track) => {
          return <Track track_name={track} key={`track_${track.id}`} />;
        })}
      </div>

      <h2>Playlists</h2>
      <div className="playlists">
        {playlists.slice(0, 5).map((track) => {
          return <Track track_name={track} key={`track_${track.id}`} />;
        })}
      </div>

      <h2>Recently Added</h2>
      <div className="recently_added">
        {favourites.slice(0, 5).map((track) => {
          return <Track track_name={track} key={`track_${track.id}`} />;
        })}
      </div>

      <h2>Recently Played</h2>
      <div className="recently_played">
        {favourites.slice(0, 5).map((track) => {
          return <Track track_name={track} key={`track_${track.id}`} />;
        })}
      </div>
    </div>
  );
}

export default Home;

export function Track({ coverArtURL, artist, track_name }) {
  return (
    <div className="track_card">
      <img src="" className="track_card__cover_art" />
      <div className="track_card__artist_name"></div>
      <div className="track_card__track_name"></div>
    </div>
  );
}
