import React from "react";

function Search() {
  return (
    <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input
            class="search_input"
            type="text"
            name=""
            placeholder="Search..."
          />
          <a href="#" class="search_icon">
            <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Search;
