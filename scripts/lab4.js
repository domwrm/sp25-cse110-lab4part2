/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and valid, and false otherwise.
 */
function sumValues(num1, num2, add) {
    // Ensure num1 and num2 are numbers, and add is strictly true
    if (typeof num1 === 'number' && typeof num2 === 'number' && add === true) {
        return num1 + num2;
    } else {
        return false;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if input is invalid.
 */
function discountPrices(prices, discount) {
    // Check for valid input
    if (!Array.isArray(prices) || prices.length === 0 || typeof discount !== 'number') {
        return false;
    }

    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = { sumValues, discountPrices };
