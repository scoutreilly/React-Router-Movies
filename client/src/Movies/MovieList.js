import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

export default function MovieList(props) {
  // console.log(props);

  return (
    <div className="movie-list">
      {props.movieList.map((movie) => (
        <MovieDetails id={movie.id} key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  const { url } = useRouteMatch();
  return (
    <div className="movie-card">
      <Link to={`movies/${id}`}>
        <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
