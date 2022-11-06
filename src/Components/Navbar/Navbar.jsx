import React, { useState } from 'react'
import { BiMoon, BiSun, BiArrowFromRight, BiPlusCircle, BiDetail } from 'react-icons/bi'

const Navbar = () => {

    const [asideMenu, setAsideMenu] = useState(false);
    const [iconRotate, setIconRotate] = useState(false);
    const [spanText, setSpanText] = useState(false);
    const [devider, setDevider] = useState(false);

    const clickHandler = () => {
        setAsideMenu(!asideMenu)
        setIconRotate(!iconRotate)
        setSpanText(!spanText)
        setDevider(!devider)
    }

    return (

        <aside className={`${asideMenu ? 'closeAside' : ''} aside__menu`}>
            <div className="aside__menu-top" id="asideTop">
                <div className="aside__menu-top-left">

                </div>
                <div className="menu__button" id="menuSwitch" onClick={clickHandler}>
                    <BiArrowFromRight className={`${iconRotate ? 'iconRotate' : ''} icon-main`} />
                </div>
            </div>

            <div className="aside__bottom" id="asideBottom">

                <div className="aside__bottom-heading ">
                    <div className="aside__bottom-heading-info ">
                        <h3 className={`${spanText ? 'spanText' : ''} mobile-span-text`}>All Boards</h3>
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

                <div className={`${devider ? 'closedDevider' : ''} devider`}></div>

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