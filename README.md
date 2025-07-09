# Snake Game

This repository hosts an HTML5 implementation of the classic Snake game.

## Overview

The game runs entirely in the browser and offers a modern take on the traditional Snake formula. It includes multiple difficulty settings, a progression system through different worlds and levels, customizable skins for the snake, and optional audio effects and music.

## Opening the Game

Open `Snake Github.html` directly in your favorite web browser. You can either double-click the file on your system or drag it onto an open browser window. No additional server setup is required.

## Main Features

- **Levels and Worlds** – Progress through a series of worlds, each containing multiple levels.
- **Skins** – Change the appearance of your snake with different skins.
- **Audio** – Select between Activado, Sólo Música, Sólo Efectos o Desactivado y ajusta por separado los volúmenes de música y efectos.
- **Maze Stars** – Each maze level tracks the stars you've earned so you can work toward a perfect 5-star score over multiple attempts.
- **Coins** – Earn coins at the end of every game. Your total coins accumulate across all game modes and sessions.

For details on the upcoming Classification mode revamp, see [CLASIFICACION.md](CLASIFICACION.md).

## Local Storage & Dependencies

Game settings, progress, high scores, and maze star achievements are saved using the browser's `localStorage` API. The HTML file loads external resources from CDNs, including Tailwind CSS for styles, Google Fonts for typography, and Tone.js for audio playback.

## Modular Screen System

A simplified modular architecture has been added in the `index.html` page. Screens are organized using JavaScript classes in the `js/` directory:

- `screenManager.js` defines a base `Screen` class and a `ScreenManager` to handle transitions.
- Individual screens like `splash.js` or `modeSelect.js` extend `Screen` and manage their own DOM nodes.
- Common information panels are encapsulated in small classes inside `js/panels/`.

To try the modular demo, open `index.html` in a browser. The original game remains in `Snake Github.html`.
