export class GemPanel {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }
    setGems(value) {
        if (this.root) {
            this.root.textContent = value;
        }
    }
}
