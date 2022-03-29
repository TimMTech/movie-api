import { useState, useEffect } from "react";


const useFetch = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getMovie = async (searchTitle) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchTitle}&apikey=216e5a9d`
    );
    const moviesJson = await response.json();
   
    if (moviesJson.Response === "False") {
      setIsLoading(true);
    } else {
      setMovies(moviesJson.Search);
      setIsLoading(false);
      
    }
  };

  useEffect(() => {
    if (searchTitle === "") {
      setIsLoading(false);
      setMovies([]);
      return;
    }
    getMovie(searchTitle);
  }, [searchTitle]);

  return { movies, searchTitle, setSearchTitle, isLoading };
};

export default useFetch;
