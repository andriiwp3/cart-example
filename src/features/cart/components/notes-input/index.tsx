import Heading from "@/components/heading";
import { HEADING_VARIANTS } from "@/components/heading/types";
import TextArea from "@/components/forms/textarea";
import { ChangeEventHandler } from "react";

export interface SelectTimeProps {
    currentValue: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

export default function NotesInput({ currentValue, onChange }: SelectTimeProps) {
    return (
        <div>
            <Heading variant={HEADING_VARIANTS.SECONDARY}>You have special requests or clarifications for our driver? Let us know by describing them in the area below</Heading>
            <TextArea label="Notes" name="notes" value={currentValue} onChange={onChange} />
        </div>
    )
}