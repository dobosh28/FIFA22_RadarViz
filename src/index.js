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
  setupModal();
  setupDropdowns();
  setupCharts();
});

function setupModal() {
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
}

function setupDropdowns() {
  createLeague1DropDown();
  // createTeam1DropDown();
  // createPlayer1DropDown();
  // displayPlayer1Info();

  createLeague2DropDown();
  createTeam2DropDown();
  createPlayer2DropDown();
  displayPlayer2Info();
}

function setupCharts() {
  const chart1 = createRadarChart(
    "radar-chart-1",
    "Player 1",
    "rgba(255, 99, 132, 0.2)",
    "rgb(255, 99, 132)"
  );
  const chart2 = createRadarChart(
    "radar-chart-2",
    "Player 2",
    "rgba(13, 135, 238, 0.35)",
    "rgb(50, 88, 168)"
  );

  const player1Select = document.getElementById("player1-select");
  player1Select.onchange = () => updateChartData(chart1, player1Select.value);

  const player2Select = document.getElementById("player2-select");
  player2Select.onchange = () => updateChartData(chart2, player2Select.value);
}

function createRadarChart(elementId, label, backgroundColor, borderColor) {
  return new Chart(document.getElementById(elementId).getContext("2d"), {
    type: "radar",
    data: {
      labels: ["Attack", "Skill", "Power", "Movement", "Mental", "Defense"],
      datasets: [
        {
          label: label,
          data: [],
          fill: true,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          pointBackgroundColor: borderColor,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: borderColor,
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
  });
}

function updateChartData(chart, selectedPlayer) {
  const playerData = players.stats.find(
    (player) => player.ID === selectedPlayer
  );
  const categories = [
    ["Crossing", "Finishing", "HeadingAccuracy", "ShortPassing", "Volleys"],
    ["Dribbling", "Curve", "FKAccuracy", "LongPassing", "BallControl"],
    ["ShotPower", "Jumping", "Stamina", "Strength", "LongShots"],
    ["Acceleration", "SprintSpeed", "Agility", "Reactions", "Balance"],
    ["Aggression", "Interceptions", "Vision", "Penalties", "Composure"],
    ["DefensiveAwareness", "StandingTackle", "SlidingTackle"],
  ];

  const playerStats = categories.map(
    (category) =>
      category.reduce((sum, stat) => sum + parseInt(playerData[stat]), 0) /
      category.length
  );

  chart.data.datasets[0].data = playerStats;
  chart.update();
}
