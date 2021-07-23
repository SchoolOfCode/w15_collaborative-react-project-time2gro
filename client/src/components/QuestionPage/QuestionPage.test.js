
import React from "react";
import { getByTestId, render } from "@testing-library/react";
import QuestionPage from "./index";


test(`to see if question page div is rendered`, () => {
	// Arrange
	const { getByTestId } = render(<QuestionPage/>);
	// Act
	const actual = getByTestId("question-page");
	// Assert
	expect(actual).toBeInTheDocument();
});


