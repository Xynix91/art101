/*
 * Author: Hazel Prasetya <hprasety@ucsc.edu>
 * Created: 1 November
 */

var outputEl = document.getElementById("output");
var new1El = document.createElement("p");
new1El.innerHTML = "Hello there!"

var new2El = document.createElement("p");
new2El.innerHTML = "wheeee"

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);