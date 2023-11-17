import scrollDown from 'src/assets/images/scroll-down.svg';
import framerMotionLogo from 'src/assets/images/service-icons/framer-motion.png';
import firebaseLogo from 'src/assets/images/service-icons/firebase.png';
import jwtLogo from 'src/assets/images/service-icons/jwt.png';
import nodeLogo from 'src/assets/images/service-icons/nodejs.png';
import reactLogo from 'src/assets/images/service-icons/react.png';
import expressLogo from 'src/assets/images/service-icons/express.png';
import mongodbLogo from 'src/assets/images/service-icons/mongodb.png';
import figmaLogo from 'src/assets/images/service-icons/figma.png';
import Technology from 'src/components/technology';
import { motion } from 'framer-motion';

const Hero = () => {
    const technologies = [[{
        name: "ReactJS",
        alt: "react logo",
        description: "Declarative JavaScript library for building dynamic user interfaces.",
        src: reactLogo
    }, {
        name: "Framer Motion",
        alt: "framer motion logo",
        description: "React library for effortless animation and motion design.",
        src: framerMotionLogo
    }], [{
        name: "MongoDB",
        alt: "mongodb logo",
        description: "NoSQL database for flexible, scalable data storage.",
        src: mongodbLogo
    }, {
        name: "NodeJS",
        alt: "nodejs logo",
        description: "Server-side JavaScript runtime enabling scalable and efficient backend development.",
        src: nodeLogo
    }, {
        name: "ExpressJS",
        alt: "express logo",
        description: "Web application framework for Node.js, simplifying backend development.",
        src: expressLogo
    }], [{
        name: "Firebase",
        alt: "firebase logo",
        description: "Real-time cloud database for seamless app development.",
        src: firebaseLogo
    }, {
        name: "JWT",
        alt: "jwt logo",
        description: "Secure authentication method for web applications.",
        src: jwtLogo
    }], [{
        name: "Figma",
        alt: "figma logo",
        description: "Collaborative design platform for creating, prototyping, and collaborating on user interfaces.",
        src: figmaLogo
    }]]
    const heroAnim = {
        hidden: {
            x:-1500,
            opacity:0
        },
        visible: {
            x:0,
            opacity:1
        }
    }
    return (
        <motion.div className="hero" variants={heroAnim} initial="hidden" animate={heroAnim.visible} transition={{type:'spring',duration:1}}>
            <h1>JAVASCRIPT SOLVER’S PORTFOLIO</h1>
            <img src={scrollDown} alt="scroll down" width="200px" height="160px" />
            <div className='hero__technologies-container'>
                <h2>Full Stack Applications</h2>
                <br />
                <p>Technologies used in the every app :</p>
                <br />
                <div className='hero_explicit-technologies'>
                    <div className='technology-row'><p>Frontend:</p> {technologies[0].map((technology, index) => (
                        <Technology key={index} src={technology.src} alt={technology.alt} name={technology.name} description={technology.description} />
                    ))}</div>
                    <div className='technology-row'><p>Backend:</p> {technologies[1].map((technology, index) => (
                        <Technology key={index} src={technology.src} alt={technology.alt} name={technology.name} description={technology.description} />
                    ))}</div>
                    <div className='technology-row'><p>Auth:</p> {technologies[2].map((technology, index) => (
                        <Technology key={index} src={technology.src} alt={technology.alt} name={technology.name} description={technology.description} />
                    ))}</div>
                    <div className='technology-row'><p>Design:</p> {technologies[3].map((technology, index) => (
                        <Technology key={index} src={technology.src} alt={technology.alt} name={technology.name} description={technology.description} />
                    ))}</div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero;