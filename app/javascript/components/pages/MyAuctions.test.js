import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyAuctions from './MyAuctions'

Enzyme.configure({adapter: new Adapter()})

describe("when the MyAuctions renders,", () => {

  it("display a body ", () => {
    const renderedBody = shallow(<MyAuctions/>)
    const bodyWrapper = renderedBody.find("body")
    expect(bodyWrapper.length).toEqual(1)
  })
})