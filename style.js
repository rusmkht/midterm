var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");

function move1() {
    i1.style.transform = ("scale(1.2)")
    i1.style.transition = ("1s")
}
function move2() {
    i2.style.transform = ("scale(1.2)")
    i2.style.transition = ("1s")
}
function move3() {
    i3.style.transform = ("scale(1.2)")
    i3.style.transition = ("1s")
}
function move4() {
    i4.style.transform = ("scale(1.2)")
    i4.style.transition = ("1s")
}

function leave() {
    i1.style.transform = ("scale(1)")
    i1.style.transition = ("1s")

    i2.style.transform = ("scale(1)")
    i2.style.transition = ("1s")

    i3.style.transform = ("scale(1)")
    i3.style.transition = ("1s")

    i4.style.transform = ("scale(1)")
    i4.style.transition = ("1s")
}


document.addEventListener('DOMContentLoaded', () => {
    let download = document.querySelector('#download');
    download.addEventListener('click', downloadText);
    function downloadText() {
        let copytext = document.querySelector('#copytext').textContent;
        let el = document.createElement('a');
        el.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(copytext)}`);
        el.setAttribute('download', 'text.txt');
        el.style.display = 'none';
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
    }
});    