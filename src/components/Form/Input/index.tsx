import { forwardRef, InputHTMLAttributes, ForwardedRef } from "react"
import {FieldError} from "react-hook-form"

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
                {error?<p>{error.message}</p>:null}
            </div>
        )   
    }
);
export default Input;