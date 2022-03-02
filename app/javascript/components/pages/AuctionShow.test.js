import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AuctionShow from './AuctionShow'
Enzyme.configure({adapter: new Adapter()})

describe("when the AuctionShow loads...", () => {

  it("display a Form ", () => {
    const readAuction = jest.fn()
    const renderedForm = shallow(<AuctionShow readAuction={readAuction}/>)
    const formWrapper = renderedForm.find("Form")
    expect(formWrapper.length).toEqual(1)
  })
  
  
})