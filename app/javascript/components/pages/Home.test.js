
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
Enzyme.configure({adapter: new Adapter()})

describe("when the Home loads...", () => {

  it("display a home img ", () => {
    //Arrange
    const renderedPostImg = shallow(<Home/>)
    //variable that class on shallow which is passed an arguemnt
    const imgWrapper = renderedPostImg.find("img")
    //Assert
    expect(imgWrapper.length).toEqual(1)

  })
  
})