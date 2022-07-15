document.getElementById('btn-click').onclick = function () {
    alert('Button clicked: Hello, world!');
}

document.getElementById('btn-dblclick').ondblclick = function () {
    alert('Thanks for double clicking!');
}

document.getElementById('btn-contextmenu').oncontextmenu = function () {
    alert('Thanks for right clicking!')
}

document.getElementById('btn-mouseover').onmouseover = function () {
    document.getElementById('message').innerHTML='Thanks for hovering!'
}
