
import React from "react";
import { getByTestId, getByAltText, render } from "@testing-library/react";
import ButtonCard from "./index";


test(`to see if button card container is rendered`, () => {
	// Arrange
	const { getByTestId } = render(<ButtonCard />);
	// Act
	const actual = getByTestId("button-container");
	// Assert
	expect(actual).toBeInTheDocument();
});

test(`to ensure the height attribute of card image is 200px`, ()=>{
    // Arrange
	const { getByAltText } = render(<ButtonCard />);
	// Act
	const actual = getByAltText("vegetables");
	// Assert
	expect(actual).toHaveAttribute("height", "200px");

});

test(`to check if logo image meets accessibility needs by containing alt text`, () => {
	// Arrange
	const { getByAltText } = render(<ButtonCard/>);
	// Act
	const buttonImg = getByAltText("vegetables");
	// Assert
	expect(buttonImg).toBeInTheDocument();
});


