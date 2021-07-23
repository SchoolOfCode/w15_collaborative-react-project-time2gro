import React from "react";
import { getByTestId, render } from "@testing-library/react";
import HomePage from "./index";

test(`to see if HomePage component is rendered`, () => {
	// Arrange
	const { getByTestId } = render(<HomePage />);
	// Act
	const actual = getByTestId("homepage-div");
	// Assert
	expect(actual).toBeInTheDocument();
});


// to do- test if all the needed components are in the homepage component
