import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
}) => {
  return (
    <div className="search-bar">

      <FaSearch className="search-icon" />

      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

    </div>
  );
};

export default SearchBar;