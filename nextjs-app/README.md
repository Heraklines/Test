# D&D AI Dungeon Master Web App

This project is a prototype single-page application that turns your device into a fantasy adventure platform. The interface communicates with Google's Gemini API to act as an AI-powered Dungeon Master.

## Development

This repository uses a minimal Next.js setup only to serve the static `dnd.html` page located in `public/`.

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000/dnd.html](http://localhost:3000/dnd.html) to play.

## Deployment

Since the app is completely client-side, you can host the contents of `public/` on any static host. For quick testing you may simply open `dnd.html` in a browser.

## Warning

The sample file includes the provided Gemini API key in plain text for testing only. Replace it with your own key or load it from a secure source for production use.
