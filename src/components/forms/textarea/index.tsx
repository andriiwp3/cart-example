import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ children, ...props }: TextAreaProps) {
    return <textarea {...props}>{children}</textarea>
}