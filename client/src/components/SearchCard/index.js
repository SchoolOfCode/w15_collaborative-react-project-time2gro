import React from "react";

export default function SearchCard(props) {
  return (
    <div className="card border-secondary mb-3">
      <div className="card-body">
        <h5 className="card-title">Search for a Vegetable</h5>
        <p className="card-text">Type your search below</p>
        <input onChange={props.handleSearch}></input>
        <button>Search</button>
      </div>
    </div>
  );
}
