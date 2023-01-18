import * as players from '../data/data.json';

export function displayPlayer2Info() {
    const playerSelect = document.getElementById('player2-select');
    
    playerSelect.addEventListener('change', function() {
        const playerData = players.stats.find(player => player.ID === playerSelect.value);
        
        //document.getElementById('player2-photo').src = playerData.Photo;
        document.getElementById('player2-name').innerHTML = `Name: ${playerData.Name}`;
        document.getElementById('player2-age').innerHTML = `Age: ${playerData.Age}`;
        document.getElementById('player2-nationality').innerHTML = `Nationality: ${playerData.Nationality}`;
        document.getElementById('player2-position').innerHTML = `Position: ${playerData.Position}`;
    })
}