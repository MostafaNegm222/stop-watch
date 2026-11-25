# Stopwatch

## 1. Description

A stopwatch in the browser, built with vanilla HTML, CSS and JavaScript.

## 2. Technologies and Versions

- HTML5, CSS3, vanilla JavaScript (no build step)

## 3. Requirements and Dependencies

- A modern web browser
- No packages to install

## 4. Installation and Run Steps

```bash
git clone https://github.com/MostafaNegm222/stop-watch.git
cd stop-watch
```

Open `index.html` in a browser, or serve the folder with any static server.

## 5. Environment Variables

None required.

## 6. Usage and Main Features

- Start and pause button, with lap and reset buttons that appear once the timer is used.
- Minutes, seconds and hundredths of a second display, updated with `setInterval`.
- A recorded list of laps and a button to clear it.
- An animated ring around the display while the timer runs.
- Note: the timer counts with separate intervals, so it can drift slightly over long runs; a more accurate version would compare against `Date.now()`.

## 7. Screenshots / Demo

No live demo; open `index.html` locally.

## 8. Running Tests

No automated tests in this repo.
