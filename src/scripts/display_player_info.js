import * as players from '../data/data.json';

export function displayPlayerInfo() {
    const playerSelect = document.getElementById('player-select');
    
    playerSelect.addEventListener('change', function() {
        const playerData = players.stats.find(player => player.ID === playerSelect.value);
        
        document.getElementById('player-photo').src = playerData.Photo;
        document.getElementById('player-name').innerHTML = `Name: ${playerData.Name}`;
        document.getElementById('player-age').innerHTML = `Age: ${playerData.Age}`;
        document.getElementById('player-nationality').innerHTML = `Nationality: ${playerData.Nationality}`;
        document.getElementById('player-position').innerHTML = `Position: ${playerData.Position}`;
    })
}