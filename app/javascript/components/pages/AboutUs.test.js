import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from "./AboutUs"
Enzyme.configure({adapter: new Adapter()})

describe("when the AboutUs loads...", () => {

  it("display a body ", () => {
    
    const renderedBody = shallow(<AboutUs/>)
    const bodyWrapper = renderedBody.find("body")
    expect(bodyWrapper.length).toEqual(1)

  })
  
})