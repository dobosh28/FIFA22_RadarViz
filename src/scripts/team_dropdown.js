export function createTeamDropDown() {
    const leagueSelect = document.getElementById('league-select');
    const teamSelect = document.getElementById('team-select');
  
    leagueSelect.onchange = function() {
        // Clear the options of the second dropdown menu
        teamSelect.innerHTML = '';
        
        // Get the selected league
        const selectedLeague = leagueSelect.value;
        
        // Create an array of teams for each league
        let teams;
        if (selectedLeague === 'premier-league - england') {
            teams = [
                'Liverpool', 
                'Manchester City', 
                'Chelsea', 
                'Manchester United', 
                'Tottenham Hotspur', 
                'Leicester City', 
                'Arsenal', 
                'West Ham United', 
                'Aston Villa', 
                'Wolverhampton Wanderers', 
                'Everton', 
                'Newcastle United', 
                'Leeds United', 
                'Crystal Palace', 
                'Burnley', 
                'Southampton',
                'Brighton & Hove Albion',
                'Brentford',
                'Watford',
                'Norwich City'
            ];

        } else if (selectedLeague === 'la-liga - spain') {
            teams = [
                'Real Madrid FC', 
                'Atlético de Madrid', 
                'FC Barcelona', 
                'Sevilla FC',
                'Real Sociedad',
                'Villarreal CF',
                'Real Betis Balompié',
                'Athletic Club de Bilbao',
                'RCD Espanyol de Barcelona',
                'Valencia CF',
                'Granada CF',
                'RC Celta de Vigo',
                'Levante Unión Deportiva',
                'CA Osasuna',
                'Getafe CF',
                'Cádiz CF',
                'Deportivo Alavés',
                'RCD Mallorca',
                'Rayo Vallecano',
                'Elche CF'
            ];

        } else if (selectedLeague === 'bundesliga-- germany') {
            teams = [
                'FC Bayern München', 
                'Borussia Dortmund', 
                'RB Leipzig', 
                'Bayer 04 Leverkusen',
                'Borussia Mönchengladbach',
                'TSG Hoffenheim',
                'VfL Wolfsburg',
                'Eintracht Frankfurt',
                '1. FC Köln',
                'Sport-Club Freiburg',
                'Hertha BSC',
                '1. FSV Mainz 05',
                'VfB Stuttgart',
                'FC Augsburg',
                '1. FC Union Berlin',
                'VfL Bochum 1848',
                'DSC Arminia Bielefeld',
                'SpVgg Greuther Fürth'
            ];

        } else if (selectedLeague === 'serie-a - italy') {
            teams = [
                'Inter',
                'Juventus',
                'AC Milan',
                'Napoli',
                'Atalanta',
                'Lazio',
                'Roma',
                'Fiorentina',
                'Bologna',
                'U.C. Sampdoria',
                'U.S. Sassuolo Calcio',
                'Torino F.C.',
                'Hellas Verona',
                'Udinese Calcio',
                'Cagliari',
                'Genoa',
                'Venezia FC',
                'Empoli',
                'US Salernitana 1919',
                'Spezia'
            ];

        } else if (selectedLeague === 'ligue-1 - france') {
            teams = [
                'Paris Saint-Germain', 
                'Olympique de Marseille',
                'Olympique Lyonnais',
                'AS Monaco',
                'Stade Rennais FC',
                'OGC Nice',
                'LOSC Lille',
                'RC Strasbourg Alsace',
                'Racing Club de Lens',
                'Montpellier Hérault SC',
                'FC Nantes',
                'AS Saint-Étienne',
                'Stade Brestois 29',
                'FC Girondins de Bordeaux',
                'Stade de Reims',
                'Angers SCO',
                'FC Metz',
                'ESTAC Troyes',
                'Clermont Foot 63',
                'FC Lorient'
            ];
        }
        
        // Populate the second dropdown menu with the teams of the selected league
        for (let i = 0; i < teams.length; i++) {
            const option = document.createElement('option');
            option.value = teams[i].toLowerCase().replace(' ', '-');
            option.text = teams[i];
            teamSelect.appendChild(option);
        }
    };
}
    
