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
    var position = HELPERS.vector3toArr(data.Position);
    POSITION.draw(leftBuffer, position[0], position[2]);
}

function drawRightBuffer(data) {
    ROTATION.draw(rightBuffer, data['Rotation.x']);
}

