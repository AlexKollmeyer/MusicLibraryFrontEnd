import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewSongForm = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [likes, setLikes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      artist,
      album,
      genre,
      releaseDate,
      likes,
    };
    try {
      const response = await axios.post(
        "http://localhost:5290/api/Songs/",
        formData
      );
      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("Error submitting new Song", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Song</h4>
      <div>
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField label="Artist" value={artist} onChange={setArtist} />
        <TextField label="Album" value={album} onChange={setAlbum} />
        <TextField label="Genre" value={genre} onChange={setGenre} />
        <TextField
          label="ReleaseDate"
          value={releaseDate}
          onChange={setReleaseDate}
        />
        <TextField label="Likes" value={likes} onChange={setLikes} />
      </div>
      <div>
        <button type="submit">Add Song</button>
      </div>
    </form>
  );
};

export default NewSongForm;

/* import React, { useState } from "react";
import TextField from "../TextField/TextField";
import axios from "axios";

const NewMovieForm = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [runningTime, setRunningTime] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      runningTime,
      genre,
    };

    try {
      const response = await axios.post(
        "http://localhost:5205/api/Movies",
        formData
      );
      if (response.status === 201) {
        onNewMovie();
      }
    } catch (error) {
      console.warn("Error submitting new movie form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Movie</h4>
      <div className="p-2">
        <TextField label="Title" value={title} onChange={setTitle} />
        <TextField
          label="RunningTime"
          value={runningTime}
          onChange={setRunningTime}
        />
        <TextField label="Genre" value={genre} onChange={setGenre} />

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Add Movie
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewMovieForm;
 */
