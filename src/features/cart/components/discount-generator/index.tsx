import Heading from "@/components/heading";
import { HEADING_VARIANTS } from "@/components/heading/types";
import Button from "@/components/button";
import { TEXTS } from "../../texts";

export interface SelectTimeProps {
    currentCode?: string;
    generateCode: () => void;
}

export default function DiscountCodeGenerator({ currentCode, generateCode }: SelectTimeProps) {
    return (
        <div>
            <Heading variant={HEADING_VARIANTS.SECONDARY}>{TEXTS.generateDiscountCode.title}</Heading>
            <div className="flex items-center gap-4">
                <Button onClick={generateCode}>{TEXTS.generateDiscountCode.buttonTitle}</Button>
                {!!currentCode && <span>{currentCode}</span>}
            </div>
        </div>
    )
}