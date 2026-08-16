import "./SearchBar.css";
import { Search } from "lucide-react";

function SearchBar({ onClick }) {

    return (

        <button
            className="search-box"
            onClick={onClick}
        >

            <Search size={18} />

            <span>

                Find the nearest health center

            </span>

        </button>

    );

}

export default SearchBar;