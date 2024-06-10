import { HEADING_VARIANTS } from "@/components/heading/types";
import RadioButton from "@/components/forms/radio-button";
import TextArea from "@/components/forms/textarea";
import Input from "@/components/forms/input";
import Heading from "@/components/heading";
import Button from "@/components/button";
import { AVAILABLE_TIMES_OF_DAY } from "./constants";

export default function CartPage() {
    return (
        <div className="border border-black rounded p-8">
            <Heading className="mb-8">Cart</Heading>
            <div className="flex flex-col gap-4">
                <div>
                    <Heading variant={HEADING_VARIANTS.SECONDARY}>What time of day would you like your parcel to be delivered?</Heading>
                    <div className="flex gap-4">
                        {AVAILABLE_TIMES_OF_DAY.map(({ label, value }) => <RadioButton label={label} name="timeOfDay" value={value} />)}
                    </div>
                </div>
                <div>
                    <Heading variant={HEADING_VARIANTS.SECONDARY}>Have you got a discount code? Type it in the box below</Heading>
                    <Input label="Discount Code" name="discountCode"  />
                </div>
                <div>
                    <Heading variant={HEADING_VARIANTS.SECONDARY}>You don't have a discount code? No worries, let's generate one!</Heading>
                    <div className="flex items-center gap-4">
                        <Button>Generate</Button>
                        <span>HELLOWORLD2024</span>
                    </div>
                </div>
                <div>
                    <Heading variant={HEADING_VARIANTS.SECONDARY}>You have special requests or clarifications for our driver? Let us know by describing them in the area below</Heading>
                    <TextArea label="Notes" name="notes"  />
                </div>
            </div>
        </div>
    )
}