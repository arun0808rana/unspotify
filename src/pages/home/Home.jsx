import { useState } from "react";
import "./Home.css";
import useFetchHome from "./useFetchHome";

function Home() {
  const [favourites, playlists, recentlyAdded, recentlyPlayed] = useFetchHome();
  console.log('favourites', favourites)
  return (
    <div className="home">
      <div className="favourites">
        <h3 className="home_headings">Favourites</h3>
        <div className="favourites__card_container">
          {favourites.slice(0, 5).map((track) => {
            return <Track track={track} key={`track_card_id_${track.id}`} />;
          })}
        </div>
      </div>


      <div className="playlists">
        <h3 className="home_headings">Playlists</h3>
        <div className="playlists__card_container">
          {playlists.slice(0, 5).map((track) => {
            return <Track track={track} key={`track_card_id_${track.id}`} />;
          })}
        </div>
      </div>


      <div className="recently_added">
        <h3 className="home_headings">Recently Added</h3>
        <div className="recently_added__card_container">
          {favourites.slice(0, 5).map((track) => {
            return <Track track={track} key={`track_card_id_${track.id}`} />;
          })}
        </div>
      </div>


      <div className="recently_played">
        <h3 className="home_headings">Recently Played</h3>
        <div className="recently_played__card_container">
          {favourites.slice(0, 5).map((track) => {
            return <Track track={track} key={`track_card_id_${track.id}`} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

export function Track({ track }) {
  const { thumbnail_url: coverArtURL, artist, track_name } = track;
  return (
    <div className="track_card">
      <div className="desktop_track_card">
        <img src={coverArtURL} className="track_card__cover_art" />
        <div className="track_card_details">
          <div className="track_card__track_name">{track_name.substring(0, 20)}</div>
          <div className="track_card__artist_name">{artist}</div>
        </div>
      </div>
      <div className="mobile_track_card">
        <img src={coverArtURL} className="mobile_track_card__track_card__cover_art" />
        <div className="mobile_track_card__track_card_details">
          <div className="mobile_track_card__track_card__track_name">{track_name.substring(0, 20)}</div>
          <div className="mobile_track_card__track_card__artist_name">{artist}</div>
        </div>
      </div>
    </div>
  );
}
