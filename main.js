canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent, last_x, last_y;
var color, line_width;

var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
    color = document.getElementById("Color").value;
    if (color == "") {
        color = "red";
    }
    line_width = document.getElementById("line-width").value;
    if (line_width == "") {
        line_width = 3;
    }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color = document.getElementById("Color").value;
    if (color == "") {
        color = "red";
    }
    line_width = document.getElementById("line-width").value;
    if (line_width == "") {
        line_width = 3;
    }
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    last_x = current_x;
    last_y = current_y;
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}