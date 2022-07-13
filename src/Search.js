import React from "react";

export default function Search() {
  return (
   
    <div className="container">
      <nav className="navbar navbar-light bg-brown">
        <div className="container-fluid">
          <form className="d-flex" id="city-search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search city"
              aria-label="Search"
              id="city-input"
              autocomplete="off"
            />
            <button className="btn btn-outline-success" type="submit">
              🔎
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
