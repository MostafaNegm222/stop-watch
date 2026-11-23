# Stopwatch

A stopwatch in the browser, built with vanilla HTML, CSS and JavaScript.

## Features

- Start and pause button, with a lap button and a reset button that appear once the timer is used.
- Minutes, seconds and hundredths of a second display, updated with `setInterval`.
- A recorded list of laps and a button to clear it.
- An animated ring around the display while the timer runs.

## Files

```
├── index.html   # Markup
├── style.css    # Layout and the ring animation
└── main.js      # Timer, laps and button logic
```

## Run it

Open `index.html` in a browser, or serve the folder with any static server.

## Notes

The timer counts with three separate intervals, so it can drift slightly over long runs. A more accurate version would compare against `Date.now()`.
