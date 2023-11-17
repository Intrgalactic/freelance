import fiverrLogo from 'src/assets/images/contact-icons/fiverr.png'
import freelancerLogo from 'src/assets/images/contact-icons/freelancer.png'
import upworkLogo from 'src/assets/images/contact-icons/upwork.png';

const ContactLinks = () => {
    const links = [{
        href: "https://fiverr.com",
        img: fiverrLogo,
        alt: "fiverr logo"
    },{
        href: "https://freelancer.com",
        img: freelancerLogo,
        alt: "freelancer logo"
    },{
        href: "https://upwork.com",
        img: upworkLogo,
        alt: "upwork logo"
    }]
    return (
        <div className="contact__links">
            {links.map((link,index) => (
                <a href={link.href} target="_blank" key={index}><img src={link.img} alt={link.alt}/></a>
            ))}
        </div>
    )
}

export default ContactLinks;