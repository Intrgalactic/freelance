import { useRef, useState } from "react"
import ContactInput from "./contactInput"
import emailjs from '@emailjs/browser';
import check from 'src/assets/images/check.png';
import spinner from 'src/assets/images/spinner.svg';

const ContactForm = () => {
    const formRef = useRef();
    const fullName = useRef(null);
    const email = useRef(null);
    const inquiry = useRef(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [processDone, setProcessDone] = useState();
    const submit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsProcessing(true);
            emailjs.sendForm('service_7whj1sf', 'template_sw7vlot', formRef.current, 'MrBCdGk3g8vLauHcr')
                .then((result) => {
                    console.log(result.text);
                    setIsProcessing(false);
                    setProcessDone(true);
                }, (error) => {
                    setIsProcessing(false);
                    setProcessDone(true);
                    console.log(error.text);
                });
        }
    }
    const validateForm = () => {
        const formInputs = [fullName.current, email.current, inquiry.current];
        console.log(fullName.current.value);
        const emailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        for (let input of formInputs) {
            if (input.value === "") {
                input.classList.add("wrong-input")
                return false;
            }
            else {
                input.classList.remove('wrong-input');
            }
        }
        if (!emailRegEx.test(formInputs[1].value)) {
            formInputs[1].classList.add("wrong-input")
            return false;
        }
        return true;
    }
    return (
        <form className="contact__form" ref={formRef}>
            <ContactInput placeholder="YOUR FULL NAME" type="text" name="full_name" ref={fullName} />
            <ContactInput placeholder="YOUR E - MAIL" type="email" name="email" ref={email} />
            <textarea ref={inquiry} name="inquiry" placeholder="BUSINESS INQUIRY" />
            {isProcessing === false && processDone === true ?
                <div className="email-sent">
                    <img src={check} alt="check" />
                    <p>Sent!</p>
                </div>
                :
                isProcessing === true &&
                <></>
            }
            <button style={isProcessing === true ? { pointerEvents: "none" } : {}} onClick={submit}>{isProcessing === true ? <img src={spinner} alt="spinner" width="50px" height="50px" /> : "Submit"}</button>
        </form>
    )
}

export default ContactForm;