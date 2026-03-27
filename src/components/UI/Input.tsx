//IMORTS - Global React
import {InputHTMLAttributes} from "react"

//STYLES
//import styles from './Input.module.css'

type input = {
    label: string,
    id: string,
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({label, id, ...props}:input) => {
    return (
        <div>
            <label htmlFor="username">{label}</label>
            <input
                id={id}
                {...props}
            />
        </div>
    )
}
export default Input