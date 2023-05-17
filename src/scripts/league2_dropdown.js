export function createLeague2DropDown() {
  // Create an array of leagues
  const leagues = [
    "Premier League - England",
    "La Liga - Spain",
    "Bundesliga - Germany",
    "Serie A - Italy",
    "Ligue 1 - France",
  ];

  // Populate the first dropdown menu with the leagues
  const league2Select = document.getElementById("league2-select");
  leagues.forEach((league) => {
    const option = document.createElement("option");
    option.value = league.toLowerCase().replace(" ", "-");
    option.text = league;
    league2Select.appendChild(option);
  });
}
