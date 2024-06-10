import { TEXTS } from "./texts";
import { TIMES_OF_DAY } from "./types";

export const AVAILABLE_TIMES_OF_DAY = Object.freeze([
    { label: TEXTS.selectTimeOfDay.options.morning, value: TIMES_OF_DAY.MORNING },
    { label: TEXTS.selectTimeOfDay.options.afternoon, value: TIMES_OF_DAY.AFTERNOON },
    { label: TEXTS.selectTimeOfDay.options.evening, value: TIMES_OF_DAY.EVENING},
])

export const DISCOUNT_CODE_REGEX = /^[A-Z]{6}\d{3}$/;

export const DISCOUNT_CODE_PATTERN = 'LLLLLLNNN';