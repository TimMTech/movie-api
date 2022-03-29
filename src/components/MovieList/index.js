import Movie from "../MovieItem"
import { v4 as uuidv4 } from "uuid";
import "./movieList.css"

const MovieList = ({ movies, handleFavourite, FavouriteComponent }) => {
  const searchedMovie = movies.map((movie) => (
    <Movie
      key={uuidv4()}
      movieItem={movie}
      handleFavourite={handleFavourite}
      FavouriteComponent={FavouriteComponent}
    />
  ));

  return <div className="movie-list">{searchedMovie}</div>;
};

export default MovieList;
