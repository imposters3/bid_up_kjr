import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AuctionEdit from './AuctionEdit'
Enzyme.configure({adapter: new Adapter()})

describe("when the AuctionEdit loads...", () => {

  it("display a body ", () => {
    
    const renderedBody = shallow(<AuctionEdit/>)
    const bodyWrapper = renderedBody.find("body")
    expect(bodyWrapper.length).toEqual(1)

  })
  
})