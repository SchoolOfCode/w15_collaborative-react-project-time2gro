import React from "react";
import { getByTestId, getByAltText, render } from "@testing-library/react";
import Banner from "./index";

test(`to see if banner is displayed in component`, () => {
	// Arrange
	const { getByTestId } = render(<Banner />);
	// Act
	const actual = getByTestId("banner");
	// Assert
	expect(actual).toBeInTheDocument();
});

test(`to check if logo image meets accessibility needs by containing alt text`, () => {
	// Arrange
	const { getByAltText } = render(<Banner />);
	// Act
	const logoImg = getByAltText("logo");
	// Assert
	expect(logoImg).toBeInTheDocument();
});
