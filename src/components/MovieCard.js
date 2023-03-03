import MovieControls from "./MovieControls";

const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {props.movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          alt={`${props.movie.title}`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls type={props.type} movie={props.movie} />
    </div>
  );
};

export default MovieCard;
