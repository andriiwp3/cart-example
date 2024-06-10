import { ChangeEventHandler } from "react";
import Heading from "@/components/heading";
import Input from "@/components/forms/input";
import { HEADING_VARIANTS } from "@/components/heading/types";

export interface SelectTimeProps {
    currentValue: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function DiscountInput({ currentValue, onChange }: SelectTimeProps) {
    return (
        <div>
            <Heading variant={HEADING_VARIANTS.SECONDARY}>Have you got a discount code? Type it in the box below</Heading>
            <Input label="Discount Code" name="discountCode" value={currentValue} onChange={onChange}  />
        </div>
    )
}