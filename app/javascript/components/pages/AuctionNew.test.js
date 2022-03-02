import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AuctionNew from './AuctionNew'
Enzyme.configure({adapter: new Adapter()})

describe("when the AuctionNew loads...", () => {

  it("display a body ", () => {
    const renderedBody = shallow(<AuctionNew/>)
    const bodyWrapper = renderedBody.find("body")
    expect(bodyWrapper.length).toEqual(1)
  })
  it("display a h2 title ", () => {
    const renderedTitle = shallow(<AuctionNew/>)
    const titleWrapper = renderedTitle.find("h2")
    expect(titleWrapper.length).toEqual(1)
  })
  it("display a formGroup ", () => {
    const renderedFormGroup = shallow(<AuctionNew/>)
    const formGroupWrapper = renderedFormGroup.find("FormGroup")
    expect(formGroupWrapper.length).toEqual(8)
  })
  it("display a form ", () => {
    const renderedForm = shallow(<AuctionNew/>)
    const formWrapper = renderedForm.find("Form")
    expect(formWrapper.length).toEqual(1)
  })
  it("display a button ", () => {
    const renderedButton = shallow(<AuctionNew/>)
    const buttonWrapper = renderedButton.find("Form")
    expect(buttonWrapper.length).toEqual(1)
  })
  it("display a input ", () => {
    const renderedInput = shallow(<AuctionNew/>)
    const inputWrapper = renderedInput.find("Input")
    expect(inputWrapper.length).toEqual(8)
  })
  it("display a label ", () => {
    const renderedLabel = shallow(<AuctionNew/>)
    const labelWrapper = renderedLabel.find("Label")
    expect(labelWrapper.length).toEqual(8)
  })
  it("display a redirect ", () => {
    const renderedRedirect = shallow(<AuctionNew/>)
    const redirectWrapper = renderedRedirect.find("Redirect")
    expect(redirectWrapper.length).toEqual(0)
  })
})