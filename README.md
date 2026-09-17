<div align="center">

# Shifumi

_A minimal **Rock Paper Scissors** game in **HTML, CSS & vanilla JavaScript** - a 2nd-year **BUT Informatique** coursework project._

[![license](https://img.shields.io/github/license/erithered/shifumi)](./LICENSE)

**[Live Demo](https://sirerithered.github.io/rock-paper-scissors/)** • [Play](#how-to-play) • [Features](#features) • [Acknowledgments](#thanks--acknowledgments)

</div>

---

## Table of Contents

- [Shifumi](#shifumi)
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

It was an assignment by our teacher, Christophe Vallot - here is his repository: **[princecorg/ultimateShifumi](https://github.com/princecorg/ultimateShifumi)**.

The goal was to implement a playable Rock Paper Scissors game with clean HTML/CSS in order to experiment with JavaScript.

I added animations, sounds, and icons, taking the assets from the web:

- Icons by Cristiano Zoucas from [Noun Project](https://thenounproject.com/browse/icons/term/hand/) (CC BY 3.0)
- Animation from [TClement on CodePen](https://codepen.io/TClement/pen/ZEVPgor)
- Click sound from [Mixkit](https://mixkit.co/free-sound-effects)

[↑ Back to top](#shifumi)

---

## Features

- **Rock / Paper / Scissors gameplay** - evaluation via 3×3 matrix, instant result
- **Two modes** - 2-player hotseat (alternating clicks) or **Play against bot** (random move, toggle switch)
- **Score tracking** - wins / draws / losses persisted for the session
- **History display** - last round with color-coded labels (rock / paper / scissors)
- **Reset** - one-click score and history reset
- **Polished UI** - dark theme, card hover animations (`jump-shaking`), per-choice accent colors, responsive layout, skip-link for accessibility
- **Sound** - click tone on each play (`assets/mixkit-cool-interface-click-tone-2568.wav`)

[↑ Back to top](#shifumi)

---

## Getting Started

### Prerequisites

- Any modern browser (Chrome, Firefox, Safari, Edge)

### Quick Start

You can either open the [GitHub Pages web app](https://sirerithered.github.io/rock-paper-scissors/) or clone the repo and use it locally:

```sh
git clone https://github.com/erithered/shifumi.git
cd shifumi
# then open index.html in your browser
```

### How to Play

1. Toggle **Play against bot** if you want to play solo.
2. Click **Rock**, **Paper**, or **Scissors**.
3. In 2-player mode, Player 1 picks first, then Player 2 picks and the result is evaluated immediately.
4. Check history and score below the cards; hit **Reset the scores** to start over.

[↑ Back to top](#shifumi)

---

## File Structure & Naming

```
shifumi/
├── index.html          # Main page - header, game cards (inline SVG), score/history, footer
├── styles/
│   └── styles.css      # Dark theme, card styles, animations, responsive breakpoint (50rem)
├── scripts/
│   └── app.js          # Game state, evaluation matrix, bot logic, DOM updates
├── assets/
│   └── mixkit-cool-interface-click-tone-2568.wav
├── LICENSE
└── README.md
```

[↑ Back to top](#shifumi)

---

## Contributing

This is a school project and not actively looking for contributions, but suggestions and PRs are welcome.

1. Fork → create a branch → commit → open a PR.

[↑ Back to top](#shifumi)

---

## Thanks & Acknowledgments

- **IUT Grand Ouest Normandie** for my current BUT Informatique program and web class
- **Christophe Vallot** for the assignment and for teaching us the web class
- Icon, animation, and sound authors listed [above](#shifumi) and in the [page footer](./index.html)

[↑ Back to top](#shifumi)

---

## License

Distributed under the [MIT License](./LICENSE). Copyright (c) 2026 Azelann Borde (EriTheRed).

[↑ Back to top](#shifumi)

*README generated from a template with an LLM-powered coding agent and then edited by me. I guarantee the code is mine, only using AI to assist me with repetitive tasks and fixing some CSS mistakes. To see how the template looks, see [SirEriTheRed/ts-bastion](https://github.com/SirEriTheRed/ts-bastion/)*