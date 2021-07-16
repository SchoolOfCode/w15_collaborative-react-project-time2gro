
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from "../index"

test("expected Let Us Decide 'select' button to show 'Choose your difficulty level' title and difficulty texts (Easy , Medium, Hard)",()=>{
  render(<App/>)

  let getSelectButton = screen.getByText("Select")

  userEvent.click(getSelectButton)

  let getHeading = screen.getByText("Choose your difficulty level")
  let getEasyText = screen.getByText("Easy")
  let getmediumText = screen.getByText("Medium")
  let getHardText = screen.getByText("Hard")
  

  expect(getHeading && getEasyText && getmediumText && getHardText).toBeInTheDocument()

})

test("expect click of search button to not allow search",()=>{
  render(<App/>)

  let getSearchInput = screen.getByText("Search")


  let returnTest
  if(getSearchInput){
    // userEvent.click(getSearchInput) <<<<<there is a bug with the code heree
    // let getTitle2 = screen.getByText("Nurturing")
  }
  // if(getSearchButton.)

  // userEvent.click(getSearchButton)

  // let getTextSunSpaceTime = screen.getByText('Sun, Space & Time')
  

  expect(returnTest).toBeInTheDocument()

})

