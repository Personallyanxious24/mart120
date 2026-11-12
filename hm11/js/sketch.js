
var w = 87;
var s = 83;
var a = 65;
var d = 68;

var playerX = 150;
var playerY = 250;
var playerWidth = 20;
var playerHeight = 20;

var obstacleX = 100;
var obstacleY = 100;
var obstacleWidth = 50;
var obstacleHeight = 50;

var obstacle2x = 200;
var obstacle2y = 200;
var obstacle2Width = 100;
var obstacle2Height = 100;

var obstacleXSpeed;
var obstacleYSpeed;
var obstacle2XSpeed;
var obstacle2YSpeed;

var clickX;
var clickY;
var clickSize = 20;

var exitX = 250;
var exitY = 450;
var exitWidth = 50;
var exitHeight = 50;

function setup()
{
    createCanvas(300, 500);

    obstacleX = random(0, width - obstacleWidth);
    obstacleY = random(0, height - obstacleHeight);
    obstacle2x = random(0, width - obstacle2Width);
    obstacle2y = random(0, height - obstacle2Height);

    obstacleXSpeed = random(-2, 2);
    obstacleYSpeed = random(-2, 2);
    obstacle2XSpeed = random(-2, 2);
    obstacle2YSpeed = random(-2, 2);
}

function draw()
{
    background(120, 45, 78);
    

    stroke(0);
    fill(0);
    rect(playerX, playerY, playerWidth, playerHeight);

    fill(111, 143, 114);
    rect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);

    fill(1, 23, 47);
    rect(obstacle2x, obstacle2y, obstacle2Width, obstacle2Height);

    fill(226,222,132)
    rect(clickX, clickY, clickSize, clickSize);

    fill(125, 83, 222);
    rect(exitX, exitY, exitWidth, exitHeight);
    // Move obstacles
    obstacleX += obstacleXSpeed;
    obstacleY += obstacleYSpeed;
    obstacle2x += obstacle2XSpeed;
    obstacle2y += obstacle2YSpeed;

    // Green obstacle: horizontal wrapping
    if (obstacleX > width) {
        obstacleX = -obstacleWidth;
    }
    else if (obstacleX < -obstacleWidth) {
        obstacleX = width;
    }

    // Green obstacle: vertical wrapping
    if (obstacleY > height) {
        obstacleY = -obstacleHeight;
    }
    else if (obstacleY < -obstacleHeight) {
        obstacleY = height;
    }

    // Blue obstacle: horizontal wrapping
    if (obstacle2x > width) {
        obstacle2x = -obstacle2Width;
    }
    else if (obstacle2x < -obstacle2Width) {
        obstacle2x = width;
    }

    // Blue obstacle: vertical wrapping
    if (obstacle2y > height) {
        obstacle2y = -obstacle2Height;
    }
    else if (obstacle2y < -obstacle2Height) {
        obstacle2y = height;
    }

    //exit condition
    if (playerX < exitX + exitWidth &&
        playerX + playerWidth > exitX &&
        playerY < exitY + exitHeight &&
        playerY + playerHeight > exitY) {
        // Player has reached the exit
        text("You Win!", 100, 250);
    }
    

    // Player movement
    if (keyIsDown(w)) {
        playerY -= 5;
        if (playerY < 0) {
            playerY = 0;
        }
    }

    if (keyIsDown(s)) {
        playerY += 5;
        if (playerY > height - playerHeight) {
            playerY = height - playerHeight;
        }
    }

    if (keyIsDown(a)) {
        playerX -= 5;
        if (playerX < 0) {
            playerX = 0;
        }
    }

    if (keyIsDown(d)) {
        playerX += 5;
        if (playerX > width - playerWidth) {
            playerX = width - playerWidth;
        }
    }
}
// Mouse click event
function mouseClicked() {
        clickX = mouseX;
        clickY = mouseY;
    }
