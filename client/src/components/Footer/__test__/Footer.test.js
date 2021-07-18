
import { render } from "@testing-library/react";
import React from "react";
import Footer from "../index";


test('should return a Elemment within an element', () => {
    let {getByTestId} = render(<Footer/>)

    let footer = getByTestId("Footer")
    let ptag = getByTestId("footerText")

    expect(footer).toContainElement(ptag)

});