import Info from "../Info"
import { useState } from "react";
import useFetchInfo from "../../utils/useFetchInfo"
import "./movie.css"

const Movie = ({ movieItem, handleFavourite, FavouriteComponent }) => {
  const { Title, Year, Poster, imdbID } = movieItem;

  const { info, setId } = useFetchInfo();

  const [showModal, setShowModal] = useState(false);

  const toggleInfo = (id) => {
    setId(id);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="movies">
        <div key={imdbID} className="movie-return">
          <div className="image-container">
            <img src={Poster} alt=" " className="image" />
            <button className="info-btn" onClick={() => toggleInfo(imdbID)}>
              See More...
            </button>
            <div
              className="fave-btn"
              onClick={() => handleFavourite(movieItem)}
            >
              <FavouriteComponent />
            </div>
          </div>
          <h2>{Title}</h2>
          <h2>{Year}</h2>
        </div>
      </div>

      {showModal ? <Info movieInfo={info} handleClose={handleClose} /> : null}
    </div>
  );
};

export default Movie;
