export class CoinPanel {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }
    setCoins(value) {
        if (this.root) {
            this.root.textContent = value;
        }
    }
}
