export const TEXTS = {
    title: 'Cart',
    selectTimeOfDay: {
        title: 'What time of day would you like your parcel to be delivered?',
        options: {
            morning: 'Morning (5am - 12pm)',
            afternoon: 'Afternoon (12pm - 5pm)',
            evening: 'Afternoon (5pm - 9pm)',
        }
    },
    discountCodeInput: {
        title: 'Have you got a discount code? Type it in the box below',
        label: 'Discount Code',
        error: (format: string) => `The code should follow a pattern of ${format}`,
    },
    generateDiscountCode: {
        title: "You don't have a discount code? No worries, let's generate one!",
        buttonTitle: 'GENERATE',
    },
    notes: {
        title: 'You have special requests or clarifications for our driver? Let us know by describing them in the area below',
        label: 'Notes',
    }
}