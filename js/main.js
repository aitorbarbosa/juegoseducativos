import { ScreenManager } from './screenManager.js';
import { SplashScreen } from './screens/splash.js';
import { ModeSelectScreen } from './screens/modeSelect.js';
import { AdventureScreen } from './screens/adventure.js';
import { MazeScreen } from './screens/maze.js';
import { ClassificationScreen } from './screens/classification.js';
import { FreeModeScreen } from './screens/freeMode.js';

const manager = new ScreenManager();
const splash = new SplashScreen();
const select = new ModeSelectScreen();
const adventure = new AdventureScreen();
const maze = new MazeScreen();
const classification = new ClassificationScreen();
const freeMode = new FreeModeScreen();

splash.onStart = () => manager.switchTo('select');

manager.register('splash', splash);
manager.register('select', select);
manager.register('adventure', adventure);
manager.register('maze', maze);
manager.register('classification', classification);
manager.register('free', freeMode);

window.addEventListener('DOMContentLoaded', () => {
    manager.switchTo('splash');
});

export { manager };
