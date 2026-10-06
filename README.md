# Ganesh Seeds – Website

Static website (HTML + CSS + JavaScript only). Open `index.html` in a browser to preview.

## Folder structure

```
index.html        → main page
css/style.css     → design
js/seeds.js       → SEED LIST (edit this to add/remove seeds)
js/main.js        → menu + seed cards logic
pdfs/             → one PDF per seed
images/           → your photos
```

## Change a seed PDF
Replace the file in `pdfs/` with your new PDF using the **same file name**
(e.g. `pdfs/cotton.pdf`). Upload it to your hosting and you're done.

You can also use an online link (e.g. Google Drive) — in `js/seeds.js` set
`pdf: "https://drive.google.com/..."`.

## Add a new seed
In `js/seeds.js`, copy one line inside `SEEDS` and change it:

```js
{ name: "Onion", nameGu: "ડુંગળી", category: "spice", desc: "Red onion seeds", pdf: "pdfs/onion.pdf" },
```
Then put `onion.pdf` in the `pdfs/` folder.

## Add your photos
Put these files in `images/` (JPG, landscape works best):

| File | Where it shows |
|------|----------------|
| `hero.jpg` | Big top banner |
| `about.jpg` | About section (farmer family photo) |
| `gallery-1.jpg` … `gallery-6.jpg` | Gallery |

If a photo is missing, a soft green placeholder shows instead.

## Change phone / WhatsApp / timing
In `index.html`, search for `9979840320` and replace with the new number
(WhatsApp links use the format `91XXXXXXXXXX`, no `+` or spaces).

## Hosting
Upload the whole folder to any static host — Netlify (drag & drop),
GitHub Pages, Vercel, or Hostinger/cPanel `public_html`.
