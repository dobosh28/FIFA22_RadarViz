import { createLeagueDropDown} from "./scripts/league_dropdown.js";
import { createTeamDropDown } from "./scripts/team_dropdown.js";

document.addEventListener("DOMContentLoaded", function() {
    createLeagueDropDown();
    createTeamDropDown();
    //updateTeamDropDown();
    //updateTeamOptions();
  });