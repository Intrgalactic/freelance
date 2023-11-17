import reactIllustration from 'src/assets/images/react-illustration.png';
import topwave from 'src/assets/images/top-wave.png';
import bottomwave from 'src/assets/images/bottom-wave.png';

const Introduction = () => {
    return (
        <div className="introduction">
            <div className='introduction-top-wave wave'>
                <img src={topwave} alt="top wave"/>
            </div>
            <div className='introduction__container'>
                <img src={reactIllustration} alt="react illustration" />
                <p>As a seasoned Frontend developer with over four years of experience, my primary focus lies in elevating applications through robust JavaScript, particularly in API logic. I bring extensive skills with over two years each in React, Node.js, MongoDB, and Express.js development. With three years of overall JavaScript expertise, I offer fluent proficiency in crafting applications using JWT, Firebase, and Framer Motion utilities. This comprehensive skill set allows me to deliver full-stack solutions, ensuring error-free and professional outcomes. Additionally, I provide Node.js, HTML, and CSS solutions for seamless full-stack application development. For a holistic approach, I also offer UI designs with optimal UX for a well-rounded development experience.</p>
            </div>
            <div className='introduction-top-wave wave'>
                <img src={bottomwave} alt="bottom wave"/>
            </div>
        </div>
    )
}

export default Introduction;