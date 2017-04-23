var colors = ['#E53935', '#4CAF50', '#9C27B0', '#FFC107', '#E91E63', '#2196F3', '#009688'];
var active = 0;
window.setInterval(function () {
    "use strict";
    document.getElementById('heading').style.color = colors[active];
    active = active + 1;
    if (active === colors.length) {
        active = 0;
    }
}, 1500);


var audio = function (x) {
    "use strict";
    var idi, pointer;
    idi = "audio" + x;
    pointer = document.getElementById(idi);
    pointer.currentTime = 0;
    pointer.play();

};

window.onkeydown = function (event) {
    "use strict";
    var keycode1, keyid1, keyid2;
    keycode1 = event.keyCode;
    switch (keycode1) {
        case 65:
            audio(65);
            var keyid1, keyid2;
            keyid1 = "key" + 65;
            keyid2 = "key" + 65 + "a";
            document.getElementById(keyid1).id = keyid2;
            break;
        case 68:
            audio(68);
            var keyid1, keyid2;
            keyid1 = "key" + 68;
            keyid2 = "key" + 68 + "a";
            document.getElementById(keyid1).id = keyid2;
            break;
        case 83:
            audio(83);
            var keyid1, keyid2;
            keyid1 = "key" + 83;
            keyid2 = "key" + 83 + "a";
            document.getElementById(keyid1).id = keyid2;
            break;
        case 32:
            audio(32);
            var keyid1, keyid2;
            keyid1 = "key" + 32;
            keyid2 = "key" + 32 + "a";
            document.getElementById(keyid1).id = keyid2;
            break;
        case 74:
            audio(74);
            var keyid1, keyid2;
            keyid1 = "key" + 74;
            keyid2 = "key" + 74 + "a";
            document.getElementById(keyid1).id = keyid2;
            break;
        case 75:
            audio(75);
            var keyid1, keyid2;
            keyid1 = "key" + 75;
            keyid2 = "key" + 75 + "a";
            document.getElementById(keyid1).id = keyid2;
            break;
        case 76:
            audio(76);
            var keyid1, keyid2;
            keyid1 = "key" + 76;
            keyid2 = "key" + 76 + "a";
            document.getElementById(keyid1).id = keyid2;
            break;
    }
};

window.onkeyup = function (event) {
    "use strict";
    var keycode2, keyid1, keyid2;
    keycode2 = event.keyCode;
    switch (keycode2) {
        case 65:
            keyid1 = "key" + 65;
            keyid2 = "key" + 65 + "a";
            document.getElementById(keyid2).id = keyid1;
            break;
        case 68:
            keyid1 = "key" + 68;
            keyid2 = "key" + 68 + "a";
            document.getElementById(keyid2).id = keyid1;
            break;
        case 83:
            keyid1 = "key" + 83;
            keyid2 = "key" + 83 + "a";
            document.getElementById(keyid2).id = keyid1;
            break;
        case 32:
            keyid1 = "key" + 32;
            keyid2 = "key" + 32 + "a";
            document.getElementById(keyid2).id = keyid1;
            break;
        case 74:
            keyid1 = "key" + 74;
            keyid2 = "key" + 74 + "a";
            document.getElementById(keyid2).id = keyid1;
            break;
        case 75:
            keyid1 = "key" + 75;
            keyid2 = "key" + 75 + "a";
            document.getElementById(keyid2).id = keyid1;
            break;
        case 76:
            keyid1 = "key" + 76;
            keyid2 = "key" + 76 + "a";
            document.getElementById(keyid2).id = keyid1;
            break;
    }
};
