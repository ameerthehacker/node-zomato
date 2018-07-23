class Offer {
    getMonthlyOffer() {
        const currentMonth = new Date().getMonth();

        switch(currentMonth) {
            case 6:
                return 0.3;
            case 7:
                return 0.2;
            default:
                return 0;
        }
    }
}

module.exports = Offer;