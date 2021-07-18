import Banner from "../index";

import { render } from "@testing-library/react"



test('should return an image tag with two attribute hight and width', () => {
  const {findByAltText} = render(<Banner/>)

  let image = findByAltText("logo")

  expect(image).toBeInTheDocument()


});