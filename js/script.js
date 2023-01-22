// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-02-JS/sw.js", {
    scope: "/ICS2O-Unit-6-02-JS/",
  })
}

/**
 * This is the Local Storage
 */

function onLoadCookieCount() {
  if (localStorage.previousCookieCount) {
    document.getElementById("hello-world").innerHTML =
      "<p> Cookies Obtained: " + localStorage.previousCookieCount + "</p>"
  } else {
    localStorage.previousCookieCount = 0
  }
}

/**
 * This function adds a cookie to the counter every time you click
 */
var counter = 0

function myImageClicked() {
  localStorage.previousCookieCount++
  document.getElementById("hello-world").innerHTML =
    "<p> Cookies Obtained: " + localStorage.previousCookieCount + "</p>"
}
