import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BidNew from './BidNew'

Enzyme.configure({adapter: new Adapter()})

describe("when the Header renders,", () => {
  it("display div ", () => {
    const renderedDiv = shallow(<BidNew/>)
    const divWrapper = renderedDiv.find("div")
    expect(divWrapper.length).toEqual(1)
  })
  it("display InputGroup ", () => {
    const renderedInputGroup = shallow(<BidNew/>)
    const inputGroupWrapper = renderedInputGroup.find("InputGroup")
    expect(inputGroupWrapper.length).toEqual(1)
  })
  it("display Buttons ", () => {
    const renderedButton = shallow(<BidNew/>)
    const ButtonsGroupWrapper = renderedButton.find("Button")
    expect(ButtonsGroupWrapper.length).toEqual(1)
  })
  it("display a input ", () => {
    const renderedInput = shallow(<BidNew/>)
    const inputWrapper = renderedInput.find("Input")
    expect(inputWrapper.length).toEqual(1)
  })
})