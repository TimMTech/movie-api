import Loading from "../Loading"
import useFetchInfo from "../../utils/useFetchInfo"
import "./info.css"

const Info = ({ movieInfo, handleClose }) => {
  const {
    imdbID,
    Actors,
    Runtime,
    Rated,
    Released,
    Genre,
    Plot,
    Awards,
    Title,
    Poster,
  } = movieInfo;

  const { loadingContent } = useFetchInfo();

  return (
    <div className="modal">
      <div className="modal-content">
        {loadingContent ? (
          <Loading loading={loadingContent} />
        ) : (
          <div className="modal-container" key={imdbID}>
            <div className="left-panel">
              <span className="close-icon" onClick={handleClose}>
                x
              </span>
              <h3>{Title}</h3>
              <img className="modal-image" src={Poster} alt="" />
            </div>
            <div className="right-panel">
              <p>Cast: {Actors}</p>
              <p>Runtime: {Runtime}</p>
              <p>Rated: {Rated}</p>
              <p>Year: {Released}</p>
              <p>Genre: {Genre}</p>
              <p>Nominations: {Awards}</p>
              <div className="plot">
                <p>{Plot}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
