import { Screen } from '../screenManager.js';

export class SplashScreen extends Screen {
    constructor() {
        super('#splash-screen');
        const startBtn = this.root.querySelector('#start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                if (this.onStart) this.onStart();
            });
        }
    }
}
