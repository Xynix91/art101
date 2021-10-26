/*
 * Author: Hazel Prasetya <hprasety@ucsc.edu>
 * Created: 25 October
 */

function alphabetizeName() {
    var userName = window.prompt("Enter a name to be alphabetized.");
    return userName.split('').sort().join('');
}

document.writeln("Here's the alphabetized name: ", alphabetizeName(), "</br>");