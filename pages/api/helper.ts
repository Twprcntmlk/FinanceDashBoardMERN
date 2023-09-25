// @ts-nocheck
export default function divideNumbersBy100(obj) {
    // If the input is an array, recursively process each element.
    if (Array.isArray(obj)) {
        return obj.map(divideNumbersBy100);
    }

    // If the input is an object, recursively process each property.
    if (typeof obj === 'object' && obj !== null) {
        return Object.entries(obj).reduce((acc, [key, value]) => {
            acc[key] = divideNumbersBy100(value);
            return acc;
        }, {});
    }

    // If the input is a number, divide it by 100.
    if (typeof obj === 'number') {
        return obj / 100;
    }

    // Otherwise, return the value as is.
    return obj;
}
