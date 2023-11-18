import { forwardRef } from "react";

const ContactInput = forwardRef((props,ref) => {
    return (
        <input ref={ref} name={props.name} type={props.type} placeholder={props.placeholder}/>
    )
})

export default ContactInput;