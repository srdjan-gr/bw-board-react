import React from 'react'
import { BiMoon, BiSun, BiArrowFromRight, BiArrowFromLeft, BiCircle, BiPlusCircle, BiDetail } from 'react-icons/bi'

const Navbar = () => {
    return (

        <aside className="aside__menu ">
            <div className="aside__menu-top" id="asideTop">
                <div className="aside__menu-top-left">

                </div>
                <div className="aside__menu-top-right" id="menuSwitch">
                    <BiArrowFromRight className="icon-main" />
                </div>
            </div>

            <div className="aside__bottom" id="asideBottom">

                <div className="aside__bottom-heading ">
                    <div className="aside__bottom-heading-info ">
                        <h3 className='mobile-span-text'>All Boards</h3>
                        <h3>( 8 )</h3>
                    </div>

                    <ul>
                        <li className="create__new">
                            <span><BiPlusCircle className="icon-main" /></span>
                            <span >Create New Sticky Board</span>
                        </li>
                        <li className="create__new-art ">
                            <span><BiPlusCircle className="icon-main " /></span>
                            <span >Create New Art Board</span>
                        </li>
                    </ul>
                </div>

                <div className="devider"></div>

                <div className="aside__bottom-menu">

                    <ul>
                        <li className='li-active li-hover'> <span className="icon-main "><BiDetail /></span><span className="spanTxt">Todo Board</span></li>
                        <li className='li-hover'> <span className="icon-main"><BiDetail /></span><span className="spanTxt">Todo Board</span></li>
                        <li className='li-hover'> <span className="icon-main"><BiDetail /></span><span className="spanTxt">Todo Board</span></li>
                        <li className='li-hover'> <span className="icon-main"><BiDetail /></span><span className="spanTxt">Todo Board</span></li>
                        <li className='li-hover'> <span className="icon-main"><BiDetail /></span><span className="spanTxt">Todo Board</span></li>
                        <li className='li-hover'> <span className="icon-main"><BiDetail /></span><span className="spanTxt">Todo Board</span></li>
                    </ul>
                </div>

                <div className="theme__switch" id="themeSwitch">
                    <BiSun className="icon-main" />

                    <div className="switcher" id="switcher">
                        <span className="switcher__slider slider-move " id="slider"></span>
                    </div>

                    <BiMoon className="icon-main" />
                </div>
            </div>
        </aside>

    )
}

export default Navbar