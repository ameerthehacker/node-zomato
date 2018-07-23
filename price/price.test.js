const Price = require('./price');
const Offer = require('../offer/offer');

jest.mock('../offer/offer');

describe('Price', () => {
    let priceObj, offerObj, offerPercentage = 0.2, cartPrice = 200;

    beforeEach(() => {
        offerObj = new Offer();
        offerObj.getMonthlyOffer.mockReturnValue(offerPercentage);
        
        priceObj = new Price(cartPrice, offerObj);
    });

    it('should call offer.getMonthlyOffer', () => {
        // Arrange
        // Act
        priceObj.getPrice();
        // Assert
        expect(offerObj.getMonthlyOffer).toBeCalled();
    });

    it('should calculate the offer correctly', () => {
        // Arrange
        // Act
        const price = priceObj.getPrice();
        const actualPrice = cartPrice - cartPrice * offerPercentage;
        // Assert
        expect(price).toBe(actualPrice);
    });
});