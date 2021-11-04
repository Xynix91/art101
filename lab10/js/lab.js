/*
 * Author: Hazel Prasetya <hprasety@ucsc.edu>
 * Created: 3 November
 */

function alphabetizeName(event) {
    var userName = document.getElementById('user-name').value;
    document.getElementById('output').innerHTML = userName.split('').sort().join('');
    event.preventDefault();
}

document.getElementById('form').addEventListener('submit', alphabetizeName);