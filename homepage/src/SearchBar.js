import React, { useState } from "react";
// import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <><div class="wrapper"> 
    <div className="search">
      <div className="searchInputs">
        <input id="searchQueryInput"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
       <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">Q</button>

        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.city} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
    </div>
    </>
  );
}

export default SearchBar;