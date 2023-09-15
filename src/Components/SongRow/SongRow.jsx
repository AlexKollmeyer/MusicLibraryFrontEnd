const SongRow = ({ song }) => {
  return (
    <tr>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.genre}</td>
      <td>{song.releaseDate.substr(0, 10)}</td>
      <td>
        <button>Delete Song</button>
      </td>
    </tr>
  );
};

export default SongRow;
