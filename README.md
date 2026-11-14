# Jabodance · Prana Svarna

*Sonic Meditations for Aura Harmonization*

An interactive, mobile-first meditation instrument. Touch the seven chakras on a meditating figure to play dreamy tones from a 7-note Javanese gamelan tuning, while the aura around the body glows and ripples in response.

Everything runs in the browser. There are no audio files, frameworks or build steps: the instruments are synthesised live with the Web Audio API.

## Features

- **Interactive figure.** Male or female meditation artwork (`assets/`) blended into a slowly moving cosmic background: drifting nebulae, twinkling stars and constellations, plus animated aura ribbons that react to your touch.
- **7 chakra touchpoints.** *Tap* to chime, *hold* to hum a sustained tone, *slide* across chakras to strum. Each touch sends out ripples and strengthens that chakra's colour in the aura.
- **Panca Maha Bhuta sound bank.** Five elements, each a synthesised Nusantara instrument with long reverb:
  - Earth: Gong
  - Water: Gender
  - Fire: Bonang
  - Wind: Suling
  - Akasha: Genta
- **Ambient drone.** A soft bed of sound underneath, so every note sits in harmony.
- **Breath guide.** Three patterns: Calm 5·5, Box 4·4·4·4 and Relax 4·7·8. The aura swells and the drone opens as you breathe.
- **Chakra journey.** A guided ascent from Root to Crown in a Short, Standard or Deep length.
- **Session timer.** A bell opens and closes the session, then the sound fades out gently.
- **Aura looper.** Layer up to 4 loops, with undo and clear. Save the result as a lightweight audio file: Opus/WebM on Chrome, Android and Firefox, AAC/M4A on Safari and iOS.
- **Aura card.** A 1080×1920 image of your session, ready for Instagram Story, with your brightest chakra and a tone spectrum. Shares together with your loop audio where the device supports it.
- Works offline once installed (PWA). Settings are remembered on the device.

## Chakra and note mapping

| # | Chakra | English | Note |
|---|--------|---------|------|
| 1 | Muladhara | Root | Ji |
| 2 | Svadhisthana | Sacral | Ro |
| 3 | Manipura | Solar Plexus | Lu |
| 4 | Anahata | Heart | Pat |
| 5 | Vishuddha | Throat | Ma |
| 6 | Ajna | Third Eye | Nem |
| 7 | Sahasrara | Crown | Pi |

Base frequency (Ji) = 136.1 Hz.

## Run locally

ES modules need a local server; opening the file directly won't work:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish on GitHub Pages

1. Create a new repository and upload every file in this folder, keeping the folder structure.
2. In the repository, open **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. After a minute the app is live at `https://<username>.github.io/<repo>/`.

To swap the artwork, replace the files in `assets/` and keep the same composition. If the body moves, adjust the chakra positions in `js/figures.js`.

When you change files later, bump `VERSION` in `sw.js` so installed copies pick up the update.

## Project structure

```
index.html            App shell and UI
css/style.css         Styles
js/app.js             UI wiring, breath, journey, timer, aura card
js/audio.js           Web Audio engine (instruments, drone, reverb, recorder)
js/looper.js          Layered event looper
js/visual.js          Background, aura, chakra rendering
js/figures.js         Figure artwork placement and chakra positions
assets/               Figure artwork (male / female)
js/data.js            Chakra, note and element data
manifest.webmanifest  PWA manifest
sw.js                 Offline cache
icons/                App icons
```

## Controls

- Tap a chakra: chime
- Hold a chakra: hum
- Slide across chakras: strum
- Keys `1` to `7`: Root to Crown (hold a key to hum)

Headphones are recommended.
