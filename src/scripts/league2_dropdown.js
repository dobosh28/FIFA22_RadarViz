export function createLeague2DropDown() {
    
    // Create an array of leagues
    const leagues = [
      'Premier League - England', 
      'La Liga - Spain', 
      'Bundesliga - Germany', 
      'Serie A - Italy', 
      'Ligue 1 - France'
    ];
  
    // Populate the first dropdown menu with the leagues 
    const league2Select = document.getElementById('league2-select');
    for (let i = 0; i < leagues.length; i++) {
      const option = document.createElement('option');
      option.value = leagues[i].toLowerCase().replace(' ', '-');
      option.text = leagues[i];
      league2Select.appendChild(option);
    }
}