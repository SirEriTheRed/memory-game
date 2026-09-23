<div align="center">

# Memory Game

_A minimal **Memory / Concentration** card-matching game in **HTML, CSS & vanilla JavaScript** — a 2nd-year **BUT Informatique** coursework project._

[![license](https://img.shields.io/github/license/SirEriTheRed/memory-game)](https://github.com/SirEriTheRed/memory-game)

**[Live Demo](https://SirEriTheRed.github.io/memory-game/)** • [Play](#how-to-play) • [Features](#features) • [Acknowledgments](#thanks--acknowledgments)

</div>

---

## Table of Contents

- [Memory Game](#memory-game)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Quick Start](#quick-start)
    - [How to Play](#how-to-play)
  - [File Structure \& Naming](#file-structure--naming)
  - [Contributing](#contributing)
  - [Thanks \& Acknowledgments](#thanks--acknowledgments)
  - [License](#license)

---

Academic project completed in **2nd year of BUT Informatique** at **IUT Grand Ouest Normandie** for a web development class.

It was an assignment by our teacher, Christophe Vallot.

The goal was to implement a playable Memory game with clean HTML/CSS in order to experiment with JavaScript (DOM manipulation, state management, timers and shuffling).

Images are fetched dynamically from [Picsum Photos](https://picsum.photos/) with a random seed generated once at page load, so the board is different on each page load:

- Random images via `https://picsum.photos/seed/<seed>/150` (`dimensions = 150`, `ImgStart = Math.round(Math.random() * 100)` in `scripts/app.js:5`)
- Animation from [TClement on CodePen](https://codepen.io/TClement/pen/ZEVPgor) (reused `jump-shaking` hover, `styles/styles.css:136`)

[↑ Back to top](#memory-game)

---

## Features

- **16 cards / 8 pairs** — 4×4 responsive grid (`#card-container` with `flex-wrap`, `max-width: calc(4 * 150px + 3 * 20px)` in `styles/styles.css:79`)
- **Random board per page load** — 8 images from Picsum Photos (`ImgStart = Math.round(Math.random() * 100)` in `scripts/app.js:6`, `imgNb = 8`), duplicated (`[...imgList, ...imgList]` in `scripts/app.js:24`) and shuffled with **Fisher-Yates** (`shuffle()` in `scripts/app.js:30`)
- **Flip & match logic** — click to reveal (`handleCardClick()` in `scripts/app.js:78`), 2-card comparison via `dataset.value`, `matched` class on success, auto-hide after 800 ms on failure (`checkMatch()` in `scripts/app.js:58`), `lockBoard` to prevent spam clicks (`scripts/app.js:11`), same-card (`scripts/app.js:82`) and already-matched (`scripts/app.js:79`) guards
- **Moves & timer** — `moves` incremented per pair attempt (`scripts/app.js:102`) and shown only on victory; live `MM:SS` chronometer (`setInterval` / `formatTime()` in `scripts/app.js:39`, `#timer-display` in `index.html:17`) starting at `initGame()` (`scripts/app.js:132`)
- **Victory detection** — when `matchedCount === 8` (`checkVictory()` in `scripts/app.js:107`), timer stopped via `clearInterval` and `#result` updated (`index.html:19`) with moves + time
- **Restart** — one-click reset via `initGame()` (`scripts/app.js:114`, `#restart-button` in `index.html:20`): `clearInterval` then reshuffles the same 8 images, resets `moves`/`matchedCount`/`seconds`/`firstCard`/`secondCard`/`lockBoard` and clears board (reload the page for a new Picsum seed)
- **Polished UI** — dark theme (`#14161b` / `#2b2e33` in `styles/styles.css:14`), card hover animation (`jump-shaking` in `styles/styles.css:136`), rounded cards (`border-radius: 25px`), responsive breakpoint at `50rem` (`styles/styles.css:164`), skip-link for accessibility (`index.html:11`, `styles/styles.css:20`)

[↑ Back to top](#memory-game)

---

## Getting Started

### Prerequisites

- Any modern browser (Chrome, Firefox, Safari, Edge)

### Quick Start

You can either open the [GitHub Pages web app](https://SirEriTheRed.github.io/memory-game/) or clone the repo and use it locally:

```sh
git clone https://github.com/SirEriTheRed/memory-game.git
cd memory-game
# then open index.html in your browser
```

### How to Play

1. Click any card to reveal its image (`handleCardClick()` in `scripts/app.js:78` creates an `<img>` from `dataset.value`).
2. Click a second card — if they match, they stay revealed with `matched` class; otherwise they flip back after 800 ms (`scripts/app.js:68`).
3. The timer at the top (`#timer-display` in `index.html:17`) tracks elapsed time (`MM:SS`) from page load / restart.
4. Find all 8 pairs to win — `#result` (`index.html:19`) then displays moves and time (`scripts/app.js:110`).
5. Hit **Restart** (`#restart-button` in `index.html:20`) to reshuffle the same 8 images and reset timer/moves (reload the page for a new random seed/images).

[↑ Back to top](#memory-game)

---

## File Structure & Naming

```
memory-game/
├── index.html          # Main page - header, timer (#timer-display), card container (#card-container), result (#result), restart button (#restart-button)
├── styles/
│   └── styles.css      # Dark theme, card grid (#card-container), .card styles, jump-shaking, responsive breakpoint (50rem)
├── scripts/
│   └── app.js          # Game state (firstCard/secondCard, lockBoard, moves, matchedCount, seconds), Fisher-Yates shuffle, Picsum seed (150px), DOM updates
├── assets/
│   └── mixkit-cool-interface-click-tone-2568.wav  # Present but unused (no audio playback in current app.js/index.html)
├── LICENSE             # MIT, Copyright (c) 2026 erithered (README credits Azelann Borde)
└── README.md
```

[↑ Back to top](#memory-game)

---

## Contributing

This is a school project and not actively looking for contributions, but suggestions and PRs are welcome.

1. Fork → create a branch → commit → open a PR.

[↑ Back to top](#memory-game)

---

## Thanks & Acknowledgments

- **IUT Grand Ouest Normandie** for my current BUT Informatique program and web class
- **Christophe Vallot** for the assignment and for teaching us the web class
- Image provider [Picsum Photos](https://picsum.photos/) (used in `scripts/app.js:20`, not credited in `index.html:23` footer) and animation author [TClement on CodePen](https://codepen.io/TClement/pen/ZEVPgor) (credited in `index.html:27` footer)

[↑ Back to top](#memory-game)

---

## License

Distributed under the [MIT License](./LICENSE). Copyright (c) 2026 Azelann Borde (EriTheRed).

[↑ Back to top](#memory-game)

_README generated from a template with an LLM-powered coding agent and then edited by me. I guarantee the code is mine, only using AI to assist me with repetitive tasks and fixing some CSS mistakes. To see how the template looks, see [SirEriTheRed/ts-bastion](https://github.com/SirEriTheRed/ts-bastion/)_
