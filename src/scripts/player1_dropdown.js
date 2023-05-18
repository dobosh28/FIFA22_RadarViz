import players from "../data/data.json";
import { displayPlayer1Info } from "./display_player1_info";

export function createPlayer1DropDown() {
  const team1Select = document.getElementById("team1-select");
  const player1Select = document.getElementById("player1-select");

  const defaultPlayerOption = document.createElement("option");
  defaultPlayerOption.value = "";
  defaultPlayerOption.text = "Select a player";
  // defaultPlayerOption.disabled = true;
  defaultPlayerOption.selected = true;
  player1Select.appendChild(defaultPlayerOption);

  team1Select.onchange = function () {
    // Clear the options of the third dropdown menu
    player1Select.innerHTML = "";

    // Add "Select a player" option as the default option on change
    player1Select.appendChild(defaultPlayerOption.cloneNode(true));

    // Get the selected team
    const selectedTeam = team1Select.value;

    // Populate the third dropdown menu with the players of the selected team
    players.stats.forEach((player) => {
      if (player.Club.toLowerCase().replace(" ", "-") === selectedTeam) {
        const option = document.createElement("option");
        option.value = player.ID;
        option.text = player.Name;
        player1Select.appendChild(option);
      }
    });
  };
}
