import players from "../data/data.json";

export function displayPlayer1Info() {
  const playerSelect = document.getElementById("player1-select");

  playerSelect.addEventListener("change", function () {
    const playerData = players.stats.find(
      (player) => player.ID === playerSelect.value
    );

    document.getElementById("player1-photo").src = playerData.Photo;
    document.getElementById(
      "player1-name"
    ).innerHTML = `Name: ${playerData.Name}`;
    document.getElementById("player1-age").innerHTML = `Age: ${playerData.Age}`;
    document.getElementById(
      "player1-height"
    ).innerHTML = `Height: ${playerData.Height}`;
    document.getElementById(
      "player1-nationality"
    ).innerHTML = `Nationality: ${playerData.Nationality}`;
    document.getElementById(
      "player1-position"
    ).innerHTML = `Position: ${playerData.Position}`;
    document.getElementById(
      "player1-foot"
    ).innerHTML = `Preferred foot: ${playerData["Preferred Foot"]}`;
  });
}
