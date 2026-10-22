# NOTICE

This quick-app port borrows its engine layout and UI structure from:

- **thewhitenightinlatesummer-band** — <https://github.com/mcpotato1123/thewhitenightinlatesummer-band>
  MIT License, Copyright (c) 2026 mcpotato1123

Files derived from that project and then adapted:

- `src/common/vm.js` — story interpreter (stream format, chunk loader, snapshot/resume)
- `src/common/reader.js` — text layout, settings/save storage wrappers
- `src/pages/*/*.ux` — page structure and styles (title, game, chapters, cg, settings, about, saves)
- `src/app.ux`, `src/manifest.json` — application shell and manifest shape
- `tools/build.js`, `sim/index.html`, `sim/app.js`, `sim/vm.bundle.js` — build wrapper and browser simulator

Adaptations made for《我的猫娘恋人》:

- script compiler (`build_story.py`) rewritten for single-layer expression sprites
  and 6 chapters, output uses the same tab-separated instruction stream
- sprite rendering simplified to one image per character (no face/flush layers)
- assets, icon, title background and logo taken from the original PC game
- about/settings copy, package name and chapter data replaced

Game content (script, sprites, backgrounds, CGs, logo, icon, title art) is
© the original creators of《我的猫娘恋人》/ My Cat Girl Lover.
This is a non-commercial fan port for personal study only.
