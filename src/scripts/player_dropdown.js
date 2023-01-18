import * as players from '../data/data.json';

export function createPlayerDropDown() {
    const teamSelect = document.getElementById('team-select');
    const playerSelect = document.getElementById('player-select');

    teamSelect.onchange = function() {
        // Clear the options of the third dropdown menu
        playerSelect.innerHTML = '';

        // Get the selected team
        const selectedTeam = teamSelect.value;

        // Populate the third dropdown menu with the players of the selected team
        players.stats.forEach(player => {
            if (player.Club.toLowerCase().replace(' ', '-') === selectedTeam) {
                const option = document.createElement('option');
                option.value = player.ID;
                // option.text = player.Name;
                option.text = player.Name;

                playerSelect.appendChild(option);
            }
        });
    };
}