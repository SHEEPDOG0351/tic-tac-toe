// Select all grid items and the player tracker
let grid_items = document.querySelectorAll('.grid-item'); 
let player_turn = document.getElementById('player_tracker');
let players_turn_tracker = 0;  // 0 for Player X, 1 for Player O
let player1_score_tracker = document.getElementById('player1_score_tracker')
let player2_score_tracker = document.getElementById('player2_score_tracker')

const winning_combinations = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];

// Attach click event listener to each grid item
grid_items.forEach(item => {
    item.addEventListener('click', function () {
        player_turn_management(item);
    });
});

function player_turn_management(item) {
    // Prevent overwriting if the cell is already filled
    if (item.innerText !== '') {
        return;
    }

    // Manage turns and assign X or O
    if (players_turn_tracker === 0) {
        item.innerText = 'X';  // Player X move
        players_turn_tracker++; // Switch to Player O
        player_turn.innerText = "Player: O"; // Update player turn display
    } else {
        item.innerText = 'O';  // Player O move
        players_turn_tracker--; // Switch to Player X
        player_turn.innerText = "Player: X"; // Update player turn display
    }

    check_winner()
}

function check_winner() {
    let grid_values = Array.from(grid_items).map(item => item.innerText);  // Get current grid values

    // Loop through each winning combination to check for a match
    for (let combination of winning_combinations) {
        const [a, b, c] = combination;  // Destructure the indices
        if (grid_values[a] && grid_values[a] === grid_values[b] && grid_values[a] === grid_values[c]) {
            alert(`Player ${grid_values[a]} wins!`);
            reset_board();  // Reset the board after the game is won
            return;
        }
    }

    // Check for a draw (if no empty spaces are left)
    if (!grid_values.includes('')) {
        alert("It's a draw!");
        reset_board();  // Reset the board after a draw
    }
}

function reset_board() {
    grid_items.forEach(item => {
        item.innerText = '';  // Clear each grid item
    });
    players_turn_tracker = 0;  // Reset turn to Player X
    player_turn.innerText = "Player: X";  // Reset the player turn display
}
