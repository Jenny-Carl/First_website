function getEventTarget(i) {
    i = i || window.event;
    return i.target || i.srcElement; 
}

var ul = document.getElementById('links');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    if (target.innerHTML == "GitHub") {
        window.open("https://github.com/Jenny-Carl")
    }
    else if (target.innerHTML == "LinkedIn") {
        window.open("https://ca.linkedin.com/in/jenny-carl-kaze-8712061b2")
    } else {
        window.location.href = "mailto: jennycarlk@gmail.com"
    }
};