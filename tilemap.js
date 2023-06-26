// a 6x10 array
// 1 = wall 0 = space
let tileMap = [
  [1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1]
];
let cellImgs = ["white", "red"];
cellSize = 0;
let mapWidth = tileMap[0].length;
let mapHeight = tileMap.length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  ellipseMode(CORNER);
  cellSize = floor(min(width / mapWidth, height / mapHeight));
  console.log(cellSize);
}

function draw() {
  for (let y = 0; y < mapHeight; y++){
    for (let x = 0; x < mapWidth; x++) {
      fill(cellImgs[tileMap[y][x]]);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}