// ==UserScript==
// @name Mouse Sensitivity 2
// @namespace http://slither.io
// @version      0.3
// @description  Mouse Pointer Lock for Slither.io
// @author       Cursed Pellets
// @match http://slither.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=slither.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Keycode for down arrow
const KEY_DOWN = 40;

// Sensitivity range
const MIN_SENSITIVITY = 0.1;
const MAX_SENSITIVITY = 10;

// Default sensitivity
const DEFAULT_SENSITIVITY = 1;

// Amount to increase/decrease sensitivity by
const SENSITIVITY_STEP = 0.1;

// Flag to keep track of whether the program is active
let programActive = false;

// Current sensitivity
let sensitivity = DEFAULT_SENSITIVITY;

// Set the sensitivity and update the page title
function setSensitivity(sens) {
  sensitivity = sens;
  document.title = `Sensitivity: ${sensitivity}`;
}

// Handle keydown events
document.addEventListener("keydown", (event) => {
  // Check if down arrow was pressed
  if (event.keyCode === KEY_DOWN) {
    // Toggle the program active/inactive
    programActive = !programActive;

    if (programActive) {
      // Activate the program
      document.body.requestPointerLock();
      document.body.style.cursor = "url('data:image/svg+xml;utf8,<svg width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"16,5 26,26 5,26\" style=\"fill:blue\"/></svg>'), auto";

    } else {
      // Deactivate the program
      document.exitPointerLock();
      document.body.style.cursor = "";
    }
  }
});

// Handle mousemove events
document.addEventListener("mousemove", (event) => {
  if (programActive) {
    event.movementX *= sensitivity;
    event.movementY *= sensitivity;
  }
});

// Save the sensitivity when the page unloads
window.addEventListener("beforeunload", () => {
  localStorage.setItem("sensitivity", sensitivity);
});

// Load the saved sensitivity
sensitivity = localStorage.getItem("sensitivity");
if (!sensitivity) {
  sensitivity = DEFAULT_SENSITIVITY;
}

// Set the initial sensitivity
setSensitivity(sensitivity);


})();