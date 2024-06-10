import { TIMES_OF_DAY } from "./types";

export const AVAILABLE_TIMES_OF_DAY = Object.freeze([
    { label: 'Morning (5am - 12pm)', value: TIMES_OF_DAY.MORNING },
    { label: 'Afternoon (12pm - 5pm)', value: TIMES_OF_DAY.AFTERNOON },
    { label: 'Evening (5pm - 9pm)', value: TIMES_OF_DAY.EVENING},
])