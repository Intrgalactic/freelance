import { motion } from "framer-motion";

const AppBox = ({src,link,name}) => {
    const appAnim = {
        hidden: {
            opacity: 0,
            y:-400,
        },
        visible:{
            opacity:1,
            y:0
        }
    }
    return (
        <motion.div className="app-box" variants={appAnim} initial="hidden" transition={{type:'spring',duration:1.5}} whileInView="visible" viewport={{once:true}}> 
            <img src={src} alt="app" width="160px" height="150px"/>
            <p>{name}</p>
            <a className="app-box-link" href={link} target="_blank">Check Out</a>
        </motion.div>
    )
}

export default AppBox;
