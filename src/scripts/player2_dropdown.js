import players from "../data/data.json";

export function createPlayer2DropDown() {
  const team2Select = document.getElementById("team2-select");
  const player2Select = document.getElementById("player2-select");

  const defaultPlayerOption = document.createElement("option");
  defaultPlayerOption.value = "";
  defaultPlayerOption.text = "Select a player";
  // defaultPlayerOption.disabled = true;
  defaultPlayerOption.selected = true;
  player2Select.appendChild(defaultPlayerOption);

  team2Select.onchange = function () {
    // Clear the options of the third dropdown menu
    player2Select.innerHTML = "";

    // Add "Select a player" option as the default option on change
    player2Select.appendChild(defaultPlayerOption.cloneNode(true));

    // Get the selected team
    const selectedTeam = team2Select.value;

    // Populate the third dropdown menu with the players of the selected team
    players.stats.forEach((player) => {
      if (player.Club.toLowerCase().replace(" ", "-") === selectedTeam) {
        const option = document.createElement("option");
        option.value = player.ID;
        option.text = player.Name;
        player2Select.appendChild(option);
      }
    });
  };
}
