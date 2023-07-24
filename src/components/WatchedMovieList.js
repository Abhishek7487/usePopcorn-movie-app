import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched, onDeteleWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeteleWatched={onDeteleWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
