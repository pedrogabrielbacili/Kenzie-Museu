import { forwardRef, InputHTMLAttributes, ForwardedRef } from "react"
import {FieldError} from "react-hook-form"
import { StyledParagrapherError } from "../../../styles/styledError";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    id?:string;
    label?:string;
    error?:FieldError;
    placeholder?:string;
}

 const Input=forwardRef(({placeholder, label, error, id, ...rest }: IInputProps, ref:ForwardedRef<HTMLInputElement>)=>{
        return(
            <div>
                    {label ? <label htmlFor={id}>{label}</label>:null}
                    <input placeholder={placeholder} id={id} ref={ref} {...rest}/>
                    {error?<StyledParagrapherError>{error.message}</StyledParagrapherError>:null}
            </div>
        )   
    }
);
export default Input;