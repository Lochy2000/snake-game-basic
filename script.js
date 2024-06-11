// Define HTML elements (dont fuck up the names loch)
const board = document.getElementById('game-board')

// Define game variables 
let gridSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = generateFood()
let direction = 'up';
let gameInterval = ""
let gameSpeedDelay = 200;
let gameStarted = false;


// Draw game map, snake, food
function draw() {
    board.innerhtml = '';
    drawSnake();
    drawFood();

}

//Draw Snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake')
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

//creates a div with a class name of snake or food.
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// set position of snake or food 
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Test for snake
// draw();

// Draw food function 

function drawFood() {
    const foodElement = createGameElement('div', 'food')
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

// generate food 

function generateFood() {
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return { x, y };
}

//moving the snake

function move() {
    const head = { ...snake[0] };
    switch (direction) {
      case 'up':
        head.y--;
        break;
      case 'down':
        head.y++;
        break;
      case 'left':
        head.x--;
        break;
      case 'right':
        head.x++;
        break;
    }

    snake.unshift(head);

   if (head.x === food.x && head.y === food.y ) {
    food = generateFood
    clearInterval(); // clear past internval
    gameInterval = setInterval(() => {
        move();
        draw();
    }, gameSpeedDelay)
   }else {
    snake.pop();
   }
}

//test moving   

// Test moving
// setInterval(() => {
//   move(); // Move first
//   draw(); // Then draw again new position
// }, 200);

// start game funcition
function startGame (){
    gameStarted = true;
}