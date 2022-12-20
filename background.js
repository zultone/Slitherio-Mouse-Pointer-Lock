// ==UserScript==
// @name Mouse Sensitivity 2
// @namespace http://slither.io
// @version      0.4
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
      document.body.style.cursor = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB1FBMVEUAAADMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwzEmQrMnwrMnwrMnwrMnwrMnwzHmwzMnwrMnwrMnwrMnwrMnwzMnwrMnwzMnwrEmQzEmQzMogrEmQzMnwrMnwrMogrMnwrMnwrMnwrClwrMnwrMnwrMnwrMogrMnwrMnwrMnwrMnwrMqQzMpgzMpgzMpgzMpgzMogrMnwrMnwrMnwrMpgzMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwzMpgzMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMogzMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwrMnwq6kQt6XwZmUAZ4XQYAAABpUgZpUAYDAgACAwBjTgYUEAFKOgRMPARHOARSQAWogwgXEgGAZAgUEQGCZgiPbwl9Yge/lQr///+YXdFpAAAAhHRSTlMAAQIEBgcDDxYYEwwFESY8QzYhC0mFlnBLKRIxbdn9u1MrFT2C4PzGi1RC5fzIF0WP5snnkPz7yfqKEMiGTSP4wXQ5+KZGHAj48O3s6+iuQRvxy6+jnpyZkXtWL0SOvIlpV1FPRzsJ5O+5fE4eHRoOFH7stXlIJS5k4qdzCj9ygFwgLBnwnN74AAAAAWJLR0Sb79hXhAAAAAlwSFlzAAAAyAAAAMgAY/rnrQAAAAd0SU1FB+YMFBIcKa0lzdkAAAABb3JOVAHPoneaAAABYklEQVQ4y2NgGBqAkYmJiRGfNDMLKwsbbiVMrOwcnFzcPDhVsPDy8QsICvGysuFQISwkIiomLiEpxcrGhFUBr7SMrJy8qIIiFw4VSsoqqi1q6hqauFRwaGlot7bp6OJUoadvYNje0aljhEsFp76BcWsHHhWc+iYgBR2dpjhUwBR0dJmZY1UBV9DRCVPBiENBN3YVCAUdPW0W5paaklYsuBR0dLdZWNvY2nGjGIGsoKOj197B0UmJBZuCvv4JEyZMnDTZ2cXVzR057qEKpkz18PTy9vHxVfXzD8BQ0A6UDwwKDgkNC4+IjIrmYkEOCs6YWMP2adM94+ITEpOSbVNSJfXSUByp52+ZPmNmRmZWtrRdTm5AnlK+O2o4FKQWqs4qKi4pLeMSdnd3Z2VhRkud7OUVDpVV1a527MCkDcoAjGhpsya3tq6+QbkxH1e65snPaZKWbMad7pl4hHml8t2ZcckDAJ9gauG8bk21AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEyLTIwVDE4OjI4OjQxKzAwOjAwSanMYgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMi0yMFQxODoyODo0MSswMDowMDj0dN4AAAAASUVORK5CYII='), auto";


     document.body.style.cursorWidth = "16";
	 document.body.style.cursorHeight = "16";
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
