class Offer {
    constructor() {
        this.monthlyOffers = {
            6: 0.3,
            7: 0.2 
        }
    }

    getMonthlyOffer() {
        const currentMonth = new Date().getMonth();

        const offerPercentage  = this.monthlyOffers[currentMonth];

        if(offerPercentage !== undefined) {
            return offerPercentage;
        }
        else {
            return 0;
        }
    }
}

module.exports = Offer;