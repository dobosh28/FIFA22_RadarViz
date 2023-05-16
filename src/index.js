import Chart from "chart.js/auto";
import players from "./data/data.json";

import { createLeague1DropDown } from "./scripts/league1_dropdown.js";
import { createTeam1DropDown } from "./scripts/team1_dropdown.js";
import { createPlayer1DropDown } from "./scripts/player1_dropdown.js";
import { displayPlayer1Info } from "./scripts/display_player1_info";

import { createLeague2DropDown } from "./scripts/league2_dropdown";
import { createTeam2DropDown } from "./scripts/team2_dropdown";
import { createPlayer2DropDown } from "./scripts/player2_dropdown";
import { displayPlayer2Info } from "./scripts/display_player2_info";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("just-modal");
  const modalBtn = document.getElementById("modal-button");
  const closeBtn = document.getElementsByClassName("close-button")[0];

  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  createLeague1DropDown();
  createTeam1DropDown();
  createPlayer1DropDown();
  displayPlayer1Info();

  createLeague2DropDown();
  createTeam2DropDown();
  createPlayer2DropDown();
  displayPlayer2Info();

  const chart1 = new Chart(
    document.getElementById("radar-chart-1").getContext("2d"),
    {
      type: "radar",
      data: {
        labels: ["Attack", "Skill", "Power", "Movement", "Mental", "Defense"],
        datasets: [
          {
            label: "Player 1",
            data: [],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
        ],
      },

      options: {
        scale: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
              backgroundColor: "transparent",
            },
          },
        },
      },
    }
  );

  const player1Select = document.getElementById("player1-select");

  player1Select.onchange = function () {
    // Get the selected player
    const selectedPlayer = player1Select.value;

    // Retrieve the player's data from your JSON file
    const playerData = players.stats.find(
      (player) => player.ID === selectedPlayer
    );

    let player1_attack =
      (parseInt(playerData.Crossing) +
        parseInt(playerData.Finishing) +
        parseInt(playerData.HeadingAccuracy) +
        parseInt(playerData.ShortPassing) +
        parseInt(playerData.Volleys)) /
      5;
    let player1_skill =
      (parseInt(playerData.Dribbling) +
        parseInt(playerData.Curve) +
        parseInt(playerData.FKAccuracy) +
        parseInt(playerData.LongPassing) +
        parseInt(playerData.BallControl)) /
      5;
    let player1_power =
      (parseInt(playerData.ShotPower) +
        parseInt(playerData.Jumping) +
        parseInt(playerData.Stamina) +
        parseInt(playerData.Strength) +
        parseInt(playerData.LongShots)) /
      5;
    let player1_movement =
      (parseInt(playerData.Acceleration) +
        parseInt(playerData.SprintSpeed) +
        parseInt(playerData.Agility) +
        parseInt(playerData.Reactions) +
        parseInt(playerData.Balance)) /
      5;
    let player1_mental =
      (parseInt(playerData.Aggression) +
        parseInt(playerData.Interceptions) +
        parseInt(playerData.Vision) +
        parseInt(playerData.Penalties) +
        parseInt(playerData.Composure)) /
      5;
    let player1_defense =
      (parseInt(playerData.DefensiveAwareness) +
        parseInt(playerData.StandingTackle) +
        parseInt(playerData.SlidingTackle)) /
      3;

    // Update the chart with the new data
    chart1.data.datasets[0].data = [
      player1_attack,
      player1_skill,
      player1_power,
      player1_movement,
      player1_mental,
      player1_defense,
    ];

    chart1.update();
  };

  const chart2 = new Chart(
    document.getElementById("radar-chart-2").getContext("2d"),
    {
      type: "radar",
      data: {
        labels: ["Attack", "Skill", "Power", "Movement", "Mental", "Defense"],
        datasets: [
          {
            label: "Player 2",
            data: [],
            fill: true,
            backgroundColor: "rgba(13, 135, 238, 0.35)",
            borderColor: "rgb(50, 88, 168)",
            pointBackgroundColor: "rgb(50, 52, 168)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#00f",
            pointHoverBorderColor: "rgb(65, 65, 239)",
          },
        ],
      },

      options: {
        scale: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 100,

            ticks: {
              stepSize: 20,
              backgroundColor: "#000000",
            },
          },
        },
      },
    }
  );

  const player2Select = document.getElementById("player2-select");

  player2Select.onchange = function () {
    // Get the selected player
    const selectedPlayer = player2Select.value;

    // Retrieve the player's data from your JSON file
    const playerData = players.stats.find(
      (player) => player.ID === selectedPlayer
    );

    let player2_attack =
      (parseInt(playerData.Crossing) +
        parseInt(playerData.Finishing) +
        parseInt(playerData.HeadingAccuracy) +
        parseInt(playerData.ShortPassing) +
        parseInt(playerData.Volleys)) /
      5;
    let player2_skill =
      (parseInt(playerData.Dribbling) +
        parseInt(playerData.Curve) +
        parseInt(playerData.FKAccuracy) +
        parseInt(playerData.LongPassing) +
        parseInt(playerData.BallControl)) /
      5;
    let player2_power =
      (parseInt(playerData.ShotPower) +
        parseInt(playerData.Jumping) +
        parseInt(playerData.Stamina) +
        parseInt(playerData.Strength) +
        parseInt(playerData.LongShots)) /
      5;
    let player2_movement =
      (parseInt(playerData.Acceleration) +
        parseInt(playerData.SprintSpeed) +
        parseInt(playerData.Agility) +
        parseInt(playerData.Reactions) +
        parseInt(playerData.Balance)) /
      5;
    let player2_mental =
      (parseInt(playerData.Aggression) +
        parseInt(playerData.Interceptions) +
        parseInt(playerData.Vision) +
        parseInt(playerData.Penalties) +
        parseInt(playerData.Composure)) /
      5;
    let player2_defense =
      (parseInt(playerData.DefensiveAwareness) +
        parseInt(playerData.StandingTackle) +
        parseInt(playerData.SlidingTackle)) /
      3;

    // Update the chart with the new data
    chart2.data.datasets[0].data = [
      player2_attack,
      player2_skill,
      player2_power,
      player2_movement,
      player2_mental,
      player2_defense,
    ];

    chart2.update();
  };
});
