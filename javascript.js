grid_items = document.querySelectorAll('.grid-items')
player_turn = document.getElementById('player_tracker')
let players_turn_tracker = 0


grid_items.forEach(item => {
    item.addEventListener('click', function () {
        player_turn_management(item)
    })
});

function player_turn_management(item) {
    if (players_turn_tracker == 0) {
        item.innerText = 'X'
        players_turn_tracker++
        player_turn.innerText == 'X'
    } else if (players_turn_tracker == 1) {
        item.innerText = 'O'
        players_turn_tracker--
        player_turn.innerText = 'O'
    }
}