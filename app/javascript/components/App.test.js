import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({adapter: new Adapter()})

describe("when the app renders,", () => {

  it("display a Router ", () => {
    const renderedApp = shallow(<App/>)
    const renderedHeader = renderedApp.find("Switch")
    expect(renderedHeader.length).toEqual(1)
  })
  it("display a Header ", () => {
    const renderedBody = shallow(<App/>)
    const bodyWrapper = renderedBody.find("Header")
    expect(bodyWrapper.length).toEqual(1)
  })
  it("display a Route ", () => {
    const renderedTitle = shallow(<App/>)
    const titleWrapper = renderedTitle.find("Route")
    expect(titleWrapper.length).toEqual(7)
  })
  it("display a Home ", () => {
    const renderedFormGroup = shallow(<App/>)
    const formGroupWrapper = renderedFormGroup.find("Home")
    expect(formGroupWrapper.length).toEqual(0)
  })
  it("display a form ", () => {
    const renderedForm = shallow(<App/>)
    const formWrapper = renderedForm.find("MyAuctions")
    expect(formWrapper.length).toEqual(0)
  })
  
})