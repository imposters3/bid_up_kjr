import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("when the Header renders,", () => {

  it("display 2 NavLinks ", () => {
    const renderedNavlink = shallow(<Header/>)
    const navLinkWrapper = renderedNavlink.find("NavLink")
    expect(navLinkWrapper.length).toEqual(2)
  })
  it("display header ", () => {
    const renderedHeader = shallow(<Header/>)
    const headerWrapper = renderedHeader.find("header")
    expect(headerWrapper.length).toEqual(1)
  })
  it("display div ", () => {
    const renderedDiv = shallow(<Header/>)
    const divWrapper = renderedDiv.find("div")
    expect(divWrapper.length).toEqual(3)
  })
  it("display nav ", () => {
    const renderedNav = shallow(<Header/>)
    const navWrapper = renderedNav.find("Nav")
    expect(navWrapper.length).toEqual(1)
  })
  it("display navItem ", () => {
    const renderedNavItem = shallow(<Header/>)
    const navItemWrapper = renderedNavItem.find("NavItem")
    expect(navItemWrapper.length).toEqual(1)
  })
  it("display a ", () => {
    const renderedA = shallow(<Header/>)
    const aWrapper = renderedA.find("a")
    expect(aWrapper.length).toEqual(2)
  })
})