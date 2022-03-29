import search from "../../Images/search.png"
import "./search.css"

const Search = ({ searchValue, searchMovie, handleChange }) => {
  return (
    <div className="search-movie">
      <input
        className="search-input"
        name="title"
        type="text"
        value={searchValue}
        onChange={(e) => handleChange(e)}
        placeholder="Search Title"
      />
      <button className="search-btn" onClick={searchMovie}>
        <img className="search-png" src={search} alt="" />
      </button>
    </div>
  );
};

export default Search;
