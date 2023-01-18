import { createLeagueDropDown} from "./scripts/league_dropdown.js";
import { createTeamDropDown } from "./scripts/team_dropdown.js";
import { createPlayerDropDown } from "./scripts/player_dropdown.js";
import * as players from './data/data.json';

document.addEventListener("DOMContentLoaded", function() {
    createLeagueDropDown();
    createTeamDropDown();
    //createPlayerDropDown();
    //const teamSelect = document.getElementById('team-select');
    //teamSelect.onchange = createPlayerDropDown;
    createPlayerDropDown();
  });