import RadioButton from "@/components/forms/radio-button";
import { AVAILABLE_TIMES_OF_DAY } from "./constants";
import Input from "@/components/forms/input";
import TextArea from "@/components/forms/textarea";
import Button from "@/components/button";

export default function CartPage() {
    return (
        <div>
            <div>
                <h1>What time of day would you like your parcel to be delivered?</h1>
                <div>
                    {AVAILABLE_TIMES_OF_DAY.map(({ value }) => <RadioButton name="timeOfDay" value={value} />)}
                </div>
            </div>
            <div>
                <h1>Have you got a discount code? Type it in the box below</h1>
                <div>
                    <Input name="discountCode"  />
                </div>
            </div>
            <div>
                <h1>You don't have a discount code? No worries, let's generate one!</h1>
                <div>
                    <Button>Generate</Button>
                    <span>HELLOWORLD2024</span>
                </div>
            </div>
            <div>
                <h1>You have special requests or clarifications for our driver? Let us know by describing them in the area below</h1>
                <div>
                    <TextArea name="notes"  />
                </div>
            </div>
        </div>
    )
}