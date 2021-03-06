const canvas = document.getElementById('canvasField');
let ctx = canvas.getContext("2d");
let isDrawing;

let previousX = 0;
let currentX = 0;
let previousY = 0;
let currentY = 0;

let lineColor;
let lineThickness;

function init() {
    loadCanvasSettings();
}

function loadCanvasSettings(){
    ctx.lineCap = 'round';
    lineColor = "black";
    lineThickness = 3;
    
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
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineThickness;
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
        drawCircle();
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

function thicknessIncrease(){
    lineThickness++;
}

function thicknessDecrease(){
    lineThickness--;
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(currentX, currentY, lineThickness*0.5, 0, 2 * Math.PI);
    ctx.fill();
}