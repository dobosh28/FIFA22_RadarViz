import { createTeam1DropDown } from "./team1_dropdown";

export function createLeague1DropDown() {
  // Create an array of leagues
  const leagues = [
    "Premier League - England",
    "La Liga - Spain",
    "Bundesliga - Germany",
    "Serie A - Italy",
    "Ligue 1 - France",
  ];

  // Populate the first dropdown menu with the leagues
  const league1Select = document.getElementById("league1-select");
  leagues.forEach((league) => {
    const option = document.createElement("option");
    option.value = league.toLowerCase().replace(" ", "-");
    option.text = league;
    league1Select.appendChild(option);


  });

  // Create the second dropdown menu
  const team1Select = document.getElementById("team1-select");
  createTeam1DropDown(league1Select, team1Select);

  
}

