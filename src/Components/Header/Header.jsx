import React from 'react'
import { BiX, BiMenu, BiDotsVerticalRounded, BiPlusCircle } from 'react-icons/bi'

const Header = () => {
  return (
    <header id="header" className="header">
        <div className="header__left">
            <span ><BiMenu className="icon-main hamburger"/></span>
            <span ><BiX className="icon-main close-menu"/></span>
            <img className="logoMobile" src="" alt="" />
            <img className="logoDesktop" src="" alt="" /> 
        </div>
        
        <div className="header__right" >
            <button className="btn__big "><BiPlusCircle className="icon-main mr-05"/> Add New Task</button> 
            <span><BiDotsVerticalRounded className="icon-main "/></span>
        </div>
    </header>
  )
}

export default Header