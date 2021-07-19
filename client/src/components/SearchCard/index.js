// Card that has dropdown box with choices of vegetables on
// Found on homepage

import React from "react";
import Select from "react-select";
import Button from "../Button";
import {
  searchHeading,
} from '../../utils/text';

export default function SearchCard(props) {
  return (
    <div className="card shadow  mb-3">
      <div className="card-body">
        <h2 className="card-title">{searchHeading}</h2>
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
