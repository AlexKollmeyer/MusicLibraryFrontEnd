import SongRow from "../SongRow/SongRow";
const MusicTable = ({
  songs = [],
  activeIndex,
  setActiveIndex,
  onDeleteSong,
}) => {
  const songRows = songs.map((song) => (
    <SongRow
      key={song.title}
      song={song}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      onDeleteSong={onDeleteSong}
      index={song.id}
    />
  ));
  console.log(songRows);
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Likes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{songRows}</tbody>
    </table>
  );
};

export default MusicTable;

/* 

import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies = [], activeIndex, setActiveIndex }) => {
  const movieItems = movies.map((movie, i) => (
    <MovieItem
      key={movie.title}
      title={movie.title}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));
  return (
    <div className="flex-item">
      <h4>My Movies</h4>
      <div>{movieItems}</div>
    </div>
  );
};

export default MovieList;
 */
