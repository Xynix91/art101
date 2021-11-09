/*
 * Author: Hazel Prasetya <hprasety@ucsc.edu>
 * Created: 8 November
 */

function capitalize(s) {
    return `${s[0].toUpperCase()}${s.slice(1)}`;
};

var sections = ['challenge', 'problems', 'results'];
var buttons = [];
for (var i = 0; i < sections.length; i ++) {
    var s = sections[i];
    buttons.push($(`<input type="button" value="${capitalize(s)} Button"/>`));
    buttons[i].appendTo($(`#${s}`));
    buttons[i].click({section: s}, function(event) {
        $(`#${event.data.section}`).toggleClass('special');
    });
}