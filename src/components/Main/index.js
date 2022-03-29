import MovieList from "../MovieList"
import useFetch from "../../utils/useFetch"
import Search from "../Search"
import { useEffect, useState } from "react";
import Loading from "../Loading"
import saveToLocalStorage from "../../utils/localStorage"
import AddFavourite from "../../utils/AddFavouriteBtn"
import RemoveFavourite from "../../utils/RemoveFavouriteBtn"
import "./main.css"

const Main = () => {
  const { movies, searchTitle, setSearchTitle, isLoading } = useFetch();

  const [favourite, setFavourite] = useState([]);

  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const addToFavourite = (movieItem) => {
    const newFave = [...favourite, movieItem];
    setFavourite(newFave);
    saveToLocalStorage(newFave);
  };

  const removeFromFavourite = (movieItem) => {
    const newFave = favourite.filter(
      (movie) => movie.imdbID !== movieItem.imdbID
    );
    setFavourite(newFave);
    saveToLocalStorage(newFave);
  };

  useEffect(() => {
    let movieFavourites;
    if (localStorage.getItem("movie-favourites") === null) {
      movieFavourites = [];
    } else {
      movieFavourites = JSON.parse(localStorage.getItem("movie-favourites"));
      setFavourite(movieFavourites);
    }
    return movieFavourites;
  }, []);

  return (
    <div className="main-container">
      <div className="search-container">
        <Search searchValue={searchTitle} handleChange={handleChange} />
      </div>
      <h1>Movies</h1>
      <div className="movie-container">
        {isLoading ? (
          <Loading loading={isLoading} />
        ) : (
          <MovieList
            movies={movies}
            handleFavourite={addToFavourite}
            FavouriteComponent={AddFavourite}
          />
        )}
      </div>
      <h1>Favourites</h1>
      <div className="movie-container">
        <MovieList
          movies={favourite}
          handleFavourite={removeFromFavourite}
          FavouriteComponent={RemoveFavourite}
        />
      </div>
    </div>
  );
};

export default Main;
