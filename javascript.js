const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const playerXWins = document.getElementById("playerXWins");
const playerOWins = document.getElementById("playerOWins");
const playerTracker = document.getElementById("player_tracker");
const resetButton = document.getElementById("resetButton");

let currentPlayer = "X";
let gameBoard = Array(9).fill(null);
let winsX = 0, winsO = 0;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

