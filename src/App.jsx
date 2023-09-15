import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";

function App() {
  const [songs, setSongs] = useState([]);
  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7149/api/Songs");
      console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetch Music request:", error);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);
  return (
    <div className="App">
      <Header />
      <MusicTable songs={songs} />
    </div>
  );
}

export default App;

/* import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import NewMovieForm from "./components/NewMovieForm/NewMovieForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:5205/api/Movies");
      // console.log(response);
      setMovies(response.data);
    } catch (error) {
      console.warn("Error in fetch Movie request:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const selectedMovie = movies[activeIndex];

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList
          movies={movies}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={fetchMovies} />
      </div>
    </div>
  );
}

export default App;
 */
