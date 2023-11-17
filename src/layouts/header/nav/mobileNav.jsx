import { useEffect, useRef, useState } from "react";
import HeaderLogo from "../../../components/headerLogo";
import navIcon from 'src/assets/images/nav-icon.png';
import { useWindowScroll } from "@uidotdev/usehooks";

const MobileNav = () => {
    const [toggleNav, setToggleNav] = useState();
    const navRef = useRef();
    const [{x,y},scrollTo] = useWindowScroll();
    useEffect(() => {
        toggleNav !== undefined && navRef.current.classList.toggle("visible-mobile-nav__container");
        toggleNav === true && scrollTo(0,0), document.body.style.overflowY = "hidden";
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
                    <a href="#projects">Projects</a>
                    <a href="#hire">Hire</a>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;