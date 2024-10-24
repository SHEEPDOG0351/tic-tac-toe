const cells = document.querySelectorAll('.grid-item');
const playerTracker = document.getElementById('player_tracker');
const player1Score = document.querySelector('.player1-container .number');
const player2Score = document.querySelector('.player2-container .number');

let currentPlayer = 'X'; 
let gameBoard = Array(9).fill(null); 
let player1Wins = 0;
let player2Wins = 0;
let ties = 0;

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

