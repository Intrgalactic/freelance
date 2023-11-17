import { useWindowSize } from "@uidotdev/usehooks";
import DesktopNav from "./nav/desktopNav";
import MobileNav from "./nav/mobileNav";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Header = forwardRef((props,ref) => {
    const windowSize = useWindowSize();
    const navAnim = {
        hidden: {
            y: -600,
            opacity:0
        },
        visible: {
            y:0,
            opacity:1
        }
    }
    return (
        <motion.header ref={ref} variants={navAnim} initial="hidden" animate={navAnim.visible} transition={{type:"spring",duration:0.5}}>
            {windowSize.width > 1024 ?
                <DesktopNav /> :
                <MobileNav />
            }
        </motion.header>
    )
})

export default Header;