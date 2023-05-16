import players from '../data/data.json';

export function createPlayer1DropDown() {
    const team1Select = document.getElementById('team1-select');
    const player1Select = document.getElementById('player1-select');

    team1Select.onchange = function() {
        // Clear the options of the third dropdown menu
        player1Select.innerHTML = '';

        // Get the selected team
        const selectedTeam = team1Select.value;

        // Populate the third dropdown menu with the players of the selected team
        players.stats.forEach(player => {
            if (player.Club.toLowerCase().replace(' ', '-') === selectedTeam) {
                const option = document.createElement('option');
                option.value = player.ID;
                option.text = player.Name;

                player1Select.appendChild(option);
            }
        });
    };
}