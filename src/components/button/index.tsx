import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import { BUTTON_VARIANTS } from "./types";

const BUTTON_STYLES = {
    [BUTTON_VARIANTS.OUTLINED]: 'select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: BUTTON_VARIANTS;
}

export default function Button({
    children,
    className,
    variant = BUTTON_VARIANTS.OUTLINED,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsx(BUTTON_STYLES[variant], className)}
            {...props}
        >
            {children}
        </button>
    )
}