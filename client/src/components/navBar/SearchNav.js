import React, { useState, useEffect, useRef } from "react";
import { SearchContainer } from "./styles/styles";

export default function SearchNav({ search, handleInput }) {
  const [showSearch, setShowSearch] = useState(false);

  const searchInput = useRef(null);

  const toggleSearch = () => {
    setShowSearch((state) => (state = true));
  };

  /*When click to search goes down to the products and search*/

  const scrolltoProducts = () => {
    if (!window.pageYOffset) {
      return window.scrollBy(0, window.innerHeight);
    }
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    if (showSearch === true) {
      searchInput.current.focus();
    }

    const handleClickOutside = (e) => {
      if (e.target.name !== "search" && showSearch === true) {
        setShowSearch((state) => (state = false));
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <>
      <div
        className="btn btn-link nav-link"
        name="search"
        onClick={() => {
          toggleSearch();
          scrolltoProducts();
        }}
      >
        {" "}
        Search
      </div>

      <SearchContainer appear={showSearch ? "100%" : "0"}>
        <input
          ref={searchInput}
          type="text"
          placeholder="Search..."
          value={search}
          name="search"
          onChange={(e) => handleInput(e)}
        />
      </SearchContainer>
    </>
  );
}
