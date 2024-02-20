import React from "react";
import "./MusicCard.css";
import { useNavigate } from "react-router-dom";


const MusicCard = ({ details }) => {
  const { thumbnail, title, artist, _id } = details;
  const artistNames = artist.map((ast) => ast.name);

  const navigate = useNavigate();
  
  const playMusic = () => {
    navigate(`/play/${_id}`);
  }
  return (
    <section className="music-card-container" onClick={playMusic}>
      <img src={thumbnail} alt={title} className="music-card-image" />
      <p className="music-card-title one-line" title={title}>{title}</p>
      <p className="music-card-artist one-line" title={artistNames}>{artistNames.join(" & ")}</p>
    </section>
  );
};

export default MusicCard;
