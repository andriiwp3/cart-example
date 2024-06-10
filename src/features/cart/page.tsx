import Heading from "@/components/heading";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectDiscountCode, selectNotes, selectTimeOfDay, setDiscount, setNotes, setTimeOfDay } from "./cart-slice";
import TimeOfDaySelect from "./components/time-of-day-select";
import DiscountInput from "./components/discount-input";
import DiscountCodeGenerator from "./components/discount-generator";
import NotesInput from "./components/notes-input";
import { AVAILABLE_TIMES_OF_DAY, DISCOUNT_CODE_PATTERN } from "./constants";
import { ChangeEvent, useState } from "react";
import { TIMES_OF_DAY } from "./types";
import { generateCode } from "./utils/code";

export default function CartPage() {
    const dispatch = useAppDispatch()
    const notes = useAppSelector(selectNotes);
    const timeOfDay = useAppSelector(selectTimeOfDay);
    const discountCode = useAppSelector(selectDiscountCode);
    const [generatedCode, setGeneratedCode] = useState('');

    const changeTimeOfDay = (value: TIMES_OF_DAY) => dispatch(setTimeOfDay(value));
    const changeNotes = (event: ChangeEvent<HTMLTextAreaElement>) => dispatch(setNotes(event.target.value));
    const changeDiscountCode = (event: ChangeEvent<HTMLInputElement>) => dispatch(setDiscount(event.target.value));
    const generateDiscountCode = () => setGeneratedCode(generateCode(DISCOUNT_CODE_PATTERN));

    return (
        <div className="border border-black rounded p-8">
            <Heading className="mb-8">Cart</Heading>
            <div className="flex flex-col gap-4">
                <TimeOfDaySelect currentValue={timeOfDay} options={AVAILABLE_TIMES_OF_DAY} onChange={changeTimeOfDay} />
                <DiscountInput currentValue={discountCode} onChange={changeDiscountCode} />
                <DiscountCodeGenerator currentCode={generatedCode}  generateCode={generateDiscountCode} />
                <NotesInput currentValue={notes} onChange={changeNotes} />
            </div>
        </div>
    )
}