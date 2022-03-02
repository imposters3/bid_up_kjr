import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MyBids from './MyBids'

Enzyme.configure({adapter: new Adapter()})

describe("when the Header renders,", () => {

  it("display body ", () => {
    const renderedBody = shallow(<MyBids/>)
    const bodyWrapper = renderedBody.find("body")
    expect(bodyWrapper.length).toEqual(1)
  })
  it("display a h2 title ", () => {
    const renderedTitle = shallow(<MyBids/>)
    const titleWrapper = renderedTitle.find("h2")
    expect(titleWrapper.length).toEqual(1)
  })
})