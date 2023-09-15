import axios from "axios";
import React, { useState } from "react";

const SongRow = ({
  song,
  activeIndex,
  setActiveIndex,
  index,
  onDeleteSong,
}) => {
  const handleActive = () => {
    setActiveIndex(index);
    console.log(activeIndex);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://localhost:7149/api/Songs/${activeIndex}`
      );
      if (response.status === 204) {
        onDeleteSong();
      }
    } catch (error) {
      console.warn("Error deleting song:", error);
    }
  };
  return (
    <tr onClick={handleActive}>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.genre}</td>
      <td>{song.releaseDate.substr(0, 10)}</td>
      <td>{song.likes}</td>
      <td>
        <button onClick={handleDelete}>Double Click to Delete Song</button>
      </td>
    </tr>
  );
};

export default SongRow;

/* mport React, { useState } from "react";
import "./MovieItem.css";

const MovieItem = ({ title, activeIndex, setActiveIndex, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    setIsFavorite(!isFavorite);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const btnClass = isFavorite ? "btn btn-success" : "btn btn-secondary";
  const activeClass = index === activeIndex ? "active-movie" : "";

  return (
    <div onClick={handleActive} className={`movie-item ${activeClass}`}>
      <span>{title}</span>
      <button className={btnClass} onClick={handleFavorite}>
        Favorite
      </button>
    </div>
  );
};

export default MovieItem;
 */
