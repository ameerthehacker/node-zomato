const Offer = require('./offer');

let offerObj;

describe('Offer', () => {
    beforeEach(() => {
        offerObj = new Offer();
    });

    it('should call Date.getMonth', () => {
        // Arrange
        const getMonthMock  = jest.fn().mockResolvedValue(6); // Mock function
        Date = class {
            constructor() {
                this.getMonth = getMonthMock
            }
        }
        // Act
        offerObj.getMonthlyOffer();
        // Assert
        expect(getMonthMock).toBeCalled();
    });

    /** Fragile Tests **/
    it('should offer 20% in july', () => {
        // Arrange
        const getMonthMock  = jest.fn().mockReturnValue(7); // Mock function
        Date = class {
            constructor() {
                this.getMonth = getMonthMock
            }
        }
        // Act
        const offerValue = offerObj.getMonthlyOffer();
        // Assert
        expect(offerValue).toBe(0.2);
    });

    it('should offer 30% in june', () => {
        // Arrange
        const getMonthMock  = jest.fn().mockReturnValue(6); // Mock function
        Date = class {
            constructor() {
                this.getMonth = getMonthMock
            }
        }
        // Act
        const offerValue = offerObj.getMonthlyOffer();
        // Assert
        expect(offerValue).toBe(0.3);
    });
    /** Fragile Tests **/

    /** Better Tests **/
    it('should provide the correct offer', () => {
        // Arrange
        const offerMonths = Object.keys(offerObj.monthlyOffers);

        offerMonths.forEach(offerMonth => {
            const getMonthMock  = jest.fn().mockReturnValue(offerMonth); // Mock function
            Date = class {
                constructor() {
                    this.getMonth = getMonthMock
                }
            }

            // Act
            const offerPrice = offerObj.getMonthlyOffer();

            // Assert
            expect(offerPrice).toBe(offerObj.monthlyOffers[offerMonth]);
        });
    });
    /** Better Tests **/

    it('should offer 0% if no offer', () => {
        // Arrange
        const getMonthMock  = jest.fn().mockReturnValue(undefined); // Mock function
        Date = class {
            constructor() {
                this.getMonth = getMonthMock
            }
        }
        // Act
        const offerValue = offerObj.getMonthlyOffer();
        // Assert
        expect(offerValue).toBe(0);
    });
});