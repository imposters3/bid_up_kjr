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
})