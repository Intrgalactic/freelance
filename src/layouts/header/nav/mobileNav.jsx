import { useEffect, useRef, useState } from "react";
import HeaderLogo from "../../../components/headerLogo";
import navIcon from 'src/assets/images/nav-icon.png';
import { useWindowScroll } from "@uidotdev/usehooks";

const MobileNav = () => {
    const [toggleNav, setToggleNav] = useState();
    const navRef = useRef();
    useEffect(() => {
        toggleNav !== undefined && navRef.current.classList.toggle("visible-mobile-nav__container");
        toggleNav === true ? document.body.style.overflowY = "hidden" : null;
        toggleNav !== true ? document.body.style.overflowY = "auto" : null;
        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [toggleNav])
    return (
        <div className="mobile-nav">
            <HeaderLogo />
            <img src={navIcon} alt="navigation icon" className="nav-icon" width="50px" height="30px" onClick={() => { setToggleNav(!toggleNav) }} />
            <div className="mobile-nav__container" ref={navRef}>
                <div className="mobile-nav__container-links">
                    <a  onClick={() => {setToggleNav(!toggleNav);document.body.style.overflowY = "auto";document.getElementById("apps").scrollIntoView({behavior:"smooth",block:"start",inline:"center"})}} >Projects</a>
                    <a onClick={() => {setToggleNav(!toggleNav);document.body.style.overflowY = "auto";document.getElementById("contact").scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}>Hire</a>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;