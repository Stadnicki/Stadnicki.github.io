var canvas;
var isDrawing;
var ctx;

var previousX = 0;
var currentX = 0;
var previousY = 0;
var currentY = 0;

var color = "black", thickness = 2;

function init() {
    canvas = document.getElementById('canvasField');
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousemove", function (e) {
        handleEvent('mousemove', e)
    });
    canvas.addEventListener("mousedown", function (e) {
        handleEvent('mousedown', e)
    });
    canvas.addEventListener("mouseup", function (e) {
        handleEvent('mouseup', e)
    });
    canvas.addEventListener("mouseout", function (e) {
        handleEvent('mouseout', e)
    });
}

function drawLine() {
    ctx.beginPath();
    ctx.moveTo(previousX, previousY);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 10;
    ctx.stroke();
}

function clr() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleEvent(actionType, event) {
    if (actionType == 'mousedown') {
        previousX = currentX;
        previousY = currentY;
        currentX = getCurrentX(event.clientX);
        currentY = getCurrentY(event.clientY);
        isDrawing = true;
    }
    if (actionType == 'mouseup' || actionType == "mouseout") {
        isDrawing = false;
    }
    if (actionType == 'mousemove' && isDrawing) {
        previousX = currentX;
        previousY = currentY;
        currentX = getCurrentX(event.clientX);
        currentY = getCurrentY(event.clientY);  
        drawLine();
    }
}

function getCurrentX(clientX){
    rect = canvas.getBoundingClientRect();
    scaleX = canvas.width / rect.width;
    scaleY = canvas.height / rect.height;
    return (clientX - rect.left) * scaleX;
}

function getCurrentY(clientY){
    rect = canvas.getBoundingClientRect();
    scaleX = canvas.width / rect.width;
    scaleY = canvas.height / rect.height;
    return (clientY - rect.top) * scaleY;
}


