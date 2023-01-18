import Chart from 'chart.js/auto';
import * as players from './data/data.json'
import { createLeagueDropDown} from "./scripts/league_dropdown.js";
import { createTeamDropDown } from "./scripts/team_dropdown.js";
import { createPlayerDropDown } from "./scripts/player_dropdown.js";
import { displayPlayerInfo } from './scripts/display_player_info';


document.addEventListener("DOMContentLoaded", function() {
  createLeagueDropDown();
  createTeamDropDown();
  createPlayerDropDown();
  displayPlayerInfo();
  // const playerSelect = document.getElementById('player-select');
  // playerSelect.onchange = createPlayerDropDown;
  
  const chart = new Chart(document.getElementById('radar-chart').getContext("2d"), {
    type: 'radar',
    data: {
      labels: ['Attack', 'Skill', 'Power', 'Movement', 'Mental', 'Defense'],
      datasets: [{
        label: 'Player Attributes',
        data: [],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }]
    },

    options: {
      scale: {
        r: {
          beginAtZero: true,
          min: 0,
          max: 100,

          ticks: {
            stepSize: 20,
            backgroundColor: "#000000"
          }
        },
      }
    }

  });
  
  const playerSelect = document.getElementById('player-select');
  
  playerSelect.onchange = function() {
    // Get the selected player
    const selectedPlayer = playerSelect.value;
  
    // Retrieve the player's data from your JSON file
    const playerData = players.stats.find(player => player.ID === selectedPlayer);

  

    let attack = ( parseInt(playerData.Crossing) + parseInt(playerData.Finishing) + parseInt(playerData.HeadingAccuracy) + parseInt(playerData.ShortPassing) + parseInt(playerData.Volleys) ) / 5;
    let skill = ( parseInt(playerData.Dribbling) + parseInt(playerData.Curve) + parseInt(playerData.FKAccuracy) + parseInt(playerData.LongPassing) + parseInt(playerData.BallControl) ) / 5;
    let power = ( parseInt(playerData.ShotPower) + parseInt(playerData.Jumping) + parseInt(playerData.Stamina) + parseInt(playerData.Strength) + parseInt(playerData.LongShots) ) / 5;
    let movement = ( parseInt(playerData.Acceleration) + parseInt(playerData.SprintSpeed) + parseInt(playerData.Agility) + parseInt(playerData.Reactions) + parseInt(playerData.Balance) ) / 5;
    let mental = ( parseInt(playerData.Aggression) + parseInt(playerData.Interceptions) + parseInt(playerData.Vision) + parseInt(playerData.Penalties) + parseInt(playerData.Composure) ) / 5;
    let defense = ( parseInt(playerData.DefensiveAwareness) + parseInt(playerData.StandingTackle) + parseInt(playerData.SlidingTackle) ) / 3;

    // Update the chart with the new data
    chart.data.datasets[0].data = [
      attack,
      skill,
      power,
      movement,
      mental,
      defense
    ];

  
    chart.update();
  };
});