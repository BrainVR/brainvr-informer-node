var leftBuffer;
var rightBuffer;

function setup() {
    // 800 x 400 (double width to make room for each "sub-canvas")
    var canvas = createCanvas(800, 400);
    canvas.parent('playerdata');
    // Create both of your off-screen graphics buffers
    leftBuffer = createGraphics(400, 400);
    rightBuffer = createGraphics(400, 400);
    angleMode(DEGREES);
    noLoop();
}

function playerUpdate(data) {
    // Draw on your buffers however you like
    drawLeftBuffer(data);
    drawRightBuffer(data);
    // Paint the off-screen buffers onto the main canvas
    image(leftBuffer, 0, 0);
    image(rightBuffer, 400, 0);
}

function drawLeftBuffer(data) {
}

function drawRightBuffer(data) {
    ROTATION.draw(rightBuffer, data['Rotation.x']);
}

var ROTATION = {
    diameter: 100,
    center: 100,

    draw: function(buffer, x, y){
        buffer.background(255);
        buffer.stroke(1);
        console.log(x, cos(x), sin(x));
        let playerRotation = x - 90;
        buffer.ellipse(100, 100, this.diameter, this.diameter);
        buffer.line(this.center, this.center, cos(playerRotation)*this.diameter/2 + this.center, sin(playerRotation)*this.diameter/2 + this.center);
    }
}