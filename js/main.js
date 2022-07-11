// Vanilla js browser friendly label float
var floats = document.querySelectorAll('.float-style'), i;

document.addEventListener('DOMContentLoaded', function () {
    for (i = 0; i < floats.length; ++i) {
        console.log(floats[i].value);
        if(floats[i].value != '') {
            floatFocus(floats[i]);
        }
    }
}, false);

function floatBlur(input) {
    if(input.value == '') {
        input.classList.remove('active');
    }
}

function floatFocus(input) {
    input.classList.add('active');
}
// Vanilla js browser friendly label float
