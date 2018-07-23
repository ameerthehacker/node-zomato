class Price {
    constructor(cartPrice, offer) {
        this.cartPrice = cartPrice;
        this.offer = offer;
    }

    getPrice() {
        const totalPrice = this.cartPrice - this.cartPrice * this.offer.getMonthlyOffer();

        return totalPrice;
    }
}

module.exports = Price;