import Heading from "@/components/heading";
import { HEADING_VARIANTS } from "@/components/heading/types";
import Button from "@/components/button";

export interface SelectTimeProps {
    currentCode?: string;
    generateCode: () => void;
}

export default function DiscountCodeGenerator({ currentCode, generateCode }: SelectTimeProps) {
    return (
        <div>
            <Heading variant={HEADING_VARIANTS.SECONDARY}>You don't have a discount code? No worries, let's generate one!</Heading>
            <div className="flex items-center gap-4">
                <Button onClick={generateCode}>Generate</Button>
                {!!currentCode && <span>{currentCode}</span>}
            </div>
        </div>
    )
}