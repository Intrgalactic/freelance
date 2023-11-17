import { useRef } from "react"
import ContactInput from "./contactInput"

const ContactForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const inquiryRef = useRef();
    return (
        <div className="contact__form">
            <ContactInput ref={nameRef} placeholder="YOUR FULL NAME" type="text"/>
            <ContactInput ref={emailRef} placeholder="YOUR E - MAIL" type="email"/> 
            <textarea ref={inquiryRef} onChange={(e) => {inquiryRef.current.value = e.target.value}} placeholder="BUSINESS INQUIRY"/>
            <button>Submit</button>
        </div>
    )
}

export default ContactForm;