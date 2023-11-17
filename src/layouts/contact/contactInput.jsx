import { forwardRef } from "react";

const ContactInput = forwardRef((props,ref) => {
    return (
        <input type={props.type} onChange={(e) => {ref.current.value = e.target.value}} placeholder={props.placeholder}/>
    )
})

export default ContactInput;