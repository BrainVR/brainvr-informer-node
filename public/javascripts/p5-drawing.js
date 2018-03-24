var leftBuffer;
var rightBuffer;

ROTATION_DIAMETER = 100;
CIRCLE_CENTER = 100;
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
    rightBuffer.background(255);
    rightBuffer.stroke(1);
    console.log(data['Rotation.x'], cos(data['Rotation.x']), sin(data['Rotation.x']));
    let playerRotation = data['Rotation.x'] - 90;
    rightBuffer.ellipse(100, 100, ROTATION_DIAMETER, ROTATION_DIAMETER);
    rightBuffer.line(CIRCLE_CENTER, CIRCLE_CENTER, cos(playerRotation)*ROTATION_DIAMETER/2 + CIRCLE_CENTER, sin(playerRotation)*ROTATION_DIAMETER/2 + CIRCLE_CENTER);
}