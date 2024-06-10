import { InputHTMLAttributes } from "react";

export interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function RadioButton(props: RadioButtonProps) {
    return <input type="radio" {...props} />;
}