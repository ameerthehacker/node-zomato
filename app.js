const Offer = require('./offer/offer');
const Price = require('./price/price');

const cartValue = 200;
const offerObj = new Offer();
const priceObj = new Price(cartValue, offerObj);

console.log("Total price is " + priceObj.getPrice())