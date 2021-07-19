import React, { useState } from "react";
import Select from "react-select";
import Button from "../Button";

export default function SearchCard(props) {
  return (
    <div className="card shadow  mb-3">
      <div className="card-body">
        <h5 className="card-title">Search for a Vegetable!</h5>
        <Select
          className="dropdown"
          options={props.options}
          isSearchable
          onChange={props.handleChange}
        />
        <Button handleClick={props.handleSearchClick} buttonText="Search" />
      </div>
    </div>
  );
}
