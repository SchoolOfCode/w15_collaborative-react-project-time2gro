import React from "react";
import { getByTestId, render } from "@testing-library/react";
import Footer from "./index";

test(`to see if footer container is present`, () => {
	// Arrange
	const { getByTestId } = render(<Footer/>);
	// Act
	const actual = getByTestId("footer-container");
	// Assert
	expect(actual).toBeInTheDocument();
});
