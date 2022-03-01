import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AuctionShow from './AuctionShow'
Enzyme.configure({adapter: new Adapter()})

describe("when the AuctionShow loads...", () => {

  it("display a body ", () => {
    const readAuction = jest.fn()
    const renderedBody = shallow(<AuctionShow readAuction={readAuction}/>)
    const bodyWrapper = renderedBody.find("body")
    expect(bodyWrapper.length).toEqual(1)
  })
  
})