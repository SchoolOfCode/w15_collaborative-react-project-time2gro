import Banner from "../index";

import { render } from "@testing-library/react"



test('should return an image tag with two attribute width of 280px', async() => {
  const {getByAltText} = await render(<Banner/>)
  let image = getByAltText("logo")
  expect(image).toHaveAttribute("width","280px")
});

test('should return an image tag with two attribute hight of 280px', async() => {
  const {getByAltText} = await render(<Banner/>)
  let image = getByAltText("logo")
  expect(image).toHaveAttribute("height","280px")
});