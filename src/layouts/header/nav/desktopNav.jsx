import HeaderLogo from "../../../components/headerLogo";

const DesktopNav = () => {

    return (
        <div className="desktop-nav">
            <a onClick={() => {document.getElementById("apps").scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}>PROJECTS</a>
            <HeaderLogo/>
            <a onClick={() => {document.getElementById("contact").scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}}>HIRE</a>
        </div>
    )
}

export default DesktopNav;