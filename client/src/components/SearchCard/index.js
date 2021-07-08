import React, { useState } from "react";
import Select from "react-select";

export default function SearchCard(props) {
  const options = [
    {
      label: "Lettuce",
      value: "Lettuce",
    },
    {
      label: "Parsley",
      value: "Parsley",
    },
    {
      label: "Carrots",
      value: "Carrots",
    },
    {
      label: "Tomatoes",
      value: "Tomatoes",
    },
    {
      label: "Cucumbers",
      value: "Cucumbers",
    },
    {
      label: "Parsnips",
      value: "Parsnips",
    },
    {
      label: "Cauliflower",
      value: "Cauliflower",
    },
    {
      label: "Celery",
      value: "Celery",
    },
    {
      label: "Onion",
      value: "Onion",
    },
  ];

  return (
    <div className="card border-secondary mb-3">
      <div className="card-body">
        <h5 className="card-title">Search for a Vegetable!</h5>
        <select onChange={props.handleChange}>
          <option value="⬇️ Select a veg! ⬇️"> -- Select a veg -- </option>
          {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
          {options.map((veg) => (
            <option key={veg.label} value={veg.value}>
              {veg.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
