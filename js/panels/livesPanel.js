export class LivesPanel {
    constructor(selector) {
        this.root = document.querySelector(selector);
    }
    setLives(value) {
        if (this.root) {
            this.root.textContent = value;
        }
    }
}
