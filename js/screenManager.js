export class Screen {
    constructor(rootSelector) {
        this.root = document.querySelector(rootSelector);
    }
    show() {
        this.root.classList.remove('hidden');
    }
    hide() {
        this.root.classList.add('hidden');
    }
    update() {}
}

export class ScreenManager {
    constructor() {
        this.screens = {};
        this.currentScreen = null;
    }
    register(name, screen) {
        this.screens[name] = screen;
    }
    switchTo(name) {
        if (this.currentScreen) {
            this.currentScreen.hide();
        }
        this.currentScreen = this.screens[name];
        if (this.currentScreen) {
            this.currentScreen.show();
        }
    }
    getCurrentScreen() {
        return this.currentScreen;
    }
}
