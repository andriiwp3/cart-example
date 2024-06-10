import React from 'react';
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { HEADING_VARIANTS } from "./types";

const HEADING_STYLES = {
    [HEADING_VARIANTS.PRIMARY]: 'text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl',
    [HEADING_VARIANTS.SECONDARY]: 'mb-2 text-md font-extrabold',
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    variant?: HEADING_VARIANTS;
}

export default function Heading({ children, variant = HEADING_VARIANTS.PRIMARY, className, ...props }: HeadingProps) {
    return React.createElement(variant, { className: clsx(HEADING_STYLES[variant], className), ...props }, children);
}