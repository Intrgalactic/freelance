import ContactForm from "./contactForm";
import ContactLinks from "./contactLinks";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2>HIRE ME</h2>
            <div className="contact__container">
                <div className="contact__container__inner">
                    <p>You can find me on various freelance services such as :
                        Fiverr - UpWork - Freelancer.</p>
                    <p>
                        You can always contact me through email if you have a more complex proposal of business (The average time to respond is about 2 hours ) </p>
                    <p>
                        Click any button to get redirected to my profile on a particular website.
                    </p>
                </div>
                <ContactLinks />
            </div>
            <ContactForm />
        </div>
    )
}

export default Contact;