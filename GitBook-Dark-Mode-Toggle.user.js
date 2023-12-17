// ==UserScript==
// @name         GitBook Dark Mode Toggle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically toggle GitBook to dark mode on page load
// @author       Chris Reed
// @match        *://*.gitbook.io/*
// @match        *://docs.saloon.dev/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to fully load
    window.addEventListener('load', function() {
        // Use an attribute selector to target the dark mode toggle button
        var darkModeToggle = document.querySelector('button[aria-label="Switch to dark mode"]');

        // Check if the dark mode toggle exists and is not already activated
        if (darkModeToggle && darkModeToggle.getAttribute('aria-checked') === 'false') {
            // Trigger the dark mode toggle
            darkModeToggle.click();
        }
    });
})();
