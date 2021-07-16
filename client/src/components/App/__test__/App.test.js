
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from "../index"

test("expected Let Us Decide select button to show 'Choose your difficulty level'",()=>{
  render(<App/>)


  
  let getSelectButton = screen.getByText("Select")

  userEvent.click(getSelectButton)

  let getHeading = screen.getByText("Choose your difficulty level")
  

  expect(getHeading).toBeInTheDocument()

})
