import React from 'react'
import { BiX, BiMenu, BiDotsVerticalRounded } from 'react-icons/bi'

const Header = () => {
  return (
    <header id="header" className="header">
        <div className="header__left">
            <span ><BiMenu className="icon-main "/></span>
            <span ><BiX className="icon-main "/></span>
            <img className="logoMobile" src="" alt="" />
            <img className="logoDesktop" src="" alt="" /> 
        </div>
        
        <div className="header__right" >
            <button className="btn__big ">+ Add New Task</button> 
            <span><BiDotsVerticalRounded className="icon-main "/></span>
        </div>
    </header>
  )
}

export default Header