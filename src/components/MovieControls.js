import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = (props) => {
  const { removeMovieFromWatchList, addMovieToWatched, moveToWatchList,
    removeFromWatched } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {props.type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(props.movie)}>
            <i class="fa-fw far fa-eye"></i>
          </button>
          <button className="ctrl-btn">
            <i
              className="fa-fw fa fa-times"
              onClick={() => removeMovieFromWatchList(props.movie.id)}
            ></i>
          </button>
        </>
      )}

      {props.type === 'watched' && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw far fa-eye-slash" onClick={() => moveToWatchList(props.movie)}></i>
          </button>
          <button className="ctrl-btn" onClick={() => removeFromWatched(props.movie.id)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
