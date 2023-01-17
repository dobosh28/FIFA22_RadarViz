/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_league_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/league_dropdown.js */ \"./src/scripts/league_dropdown.js\");\n/* harmony import */ var _scripts_team_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/team_dropdown.js */ \"./src/scripts/team_dropdown.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_scripts_league_dropdown_js__WEBPACK_IMPORTED_MODULE_0__.createLeagueDropDown)();\n  (0,_scripts_team_dropdown_js__WEBPACK_IMPORTED_MODULE_1__.createTeamDropDown)();\n  //updateTeamDropDown();\n  //updateTeamOptions();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW1FO0FBQ0g7QUFFaEVFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyREgsaUZBQW9CLEVBQUU7RUFDdEJDLDZFQUFrQixFQUFFO0VBQ3BCO0VBQ0E7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290YmFsbGVyc3RhdHMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMZWFndWVEcm9wRG93bn0gZnJvbSBcIi4vc2NyaXB0cy9sZWFndWVfZHJvcGRvd24uanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRlYW1Ecm9wRG93biB9IGZyb20gXCIuL3NjcmlwdHMvdGVhbV9kcm9wZG93bi5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBjcmVhdGVMZWFndWVEcm9wRG93bigpO1xuICAgIGNyZWF0ZVRlYW1Ecm9wRG93bigpO1xuICAgIC8vdXBkYXRlVGVhbURyb3BEb3duKCk7XG4gICAgLy91cGRhdGVUZWFtT3B0aW9ucygpO1xuICB9KTsiXSwibmFtZXMiOlsiY3JlYXRlTGVhZ3VlRHJvcERvd24iLCJjcmVhdGVUZWFtRHJvcERvd24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/league_dropdown.js":
/*!****************************************!*\
  !*** ./src/scripts/league_dropdown.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLeagueDropDown\": function() { return /* binding */ createLeagueDropDown; }\n/* harmony export */ });\nfunction createLeagueDropDown() {\n  // Create an array of leagues\n  const leagues = ['Premier League - England', 'La Liga - Spain', 'Bundesliga - Germany', 'Serie A - Italy', 'Ligue 1 - France'];\n\n  // Populate the first dropdown menu with the leagues \n  const leagueSelect = document.getElementById('league-select');\n  for (let i = 0; i < leagues.length; i++) {\n    const option = document.createElement('option');\n    option.value = leagues[i].toLowerCase().replace(' ', '-');\n    option.text = leagues[i];\n    leagueSelect.appendChild(option);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZWFndWVfZHJvcGRvd24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLG9CQUFvQixHQUFHO0VBRXJDO0VBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQ2QsMEJBQTBCLEVBQzFCLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsaUJBQWlCLEVBQ2pCLGtCQUFrQixDQUNuQjs7RUFFRDtFQUNBLE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzdELEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixPQUFPLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7SUFDdkMsTUFBTUUsTUFBTSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0NELE1BQU0sQ0FBQ0UsS0FBSyxHQUFHUixPQUFPLENBQUNJLENBQUMsQ0FBQyxDQUFDSyxXQUFXLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDekRKLE1BQU0sQ0FBQ0ssSUFBSSxHQUFHWCxPQUFPLENBQUNJLENBQUMsQ0FBQztJQUN4QkgsWUFBWSxDQUFDVyxXQUFXLENBQUNOLE1BQU0sQ0FBQztFQUNsQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vdGJhbGxlcnN0YXRzLy4vc3JjL3NjcmlwdHMvbGVhZ3VlX2Ryb3Bkb3duLmpzPzQ5NWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxlYWd1ZURyb3BEb3duKCkge1xuXG4gIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBsZWFndWVzXG4gIGNvbnN0IGxlYWd1ZXMgPSBbXG4gICAgJ1ByZW1pZXIgTGVhZ3VlIC0gRW5nbGFuZCcsIFxuICAgICdMYSBMaWdhIC0gU3BhaW4nLCBcbiAgICAnQnVuZGVzbGlnYSAtIEdlcm1hbnknLCBcbiAgICAnU2VyaWUgQSAtIEl0YWx5JywgXG4gICAgJ0xpZ3VlIDEgLSBGcmFuY2UnXG4gIF07XG5cbiAgLy8gUG9wdWxhdGUgdGhlIGZpcnN0IGRyb3Bkb3duIG1lbnUgd2l0aCB0aGUgbGVhZ3VlcyBcbiAgY29uc3QgbGVhZ3VlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlYWd1ZS1zZWxlY3QnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZWFndWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gbGVhZ3Vlc1tpXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnLScpO1xuICAgIG9wdGlvbi50ZXh0ID0gbGVhZ3Vlc1tpXTtcbiAgICBsZWFndWVTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUxlYWd1ZURyb3BEb3duIiwibGVhZ3VlcyIsImxlYWd1ZVNlbGVjdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwidGV4dCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/league_dropdown.js\n");

/***/ }),

/***/ "./src/scripts/team_dropdown.js":
/*!**************************************!*\
  !*** ./src/scripts/team_dropdown.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTeamDropDown\": function() { return /* binding */ createTeamDropDown; }\n/* harmony export */ });\nfunction createTeamDropDown() {\n  const leagueSelect = document.getElementById('league-select');\n  const teamSelect = document.getElementById('team-select');\n  leagueSelect.onchange = function () {\n    // Clear the options of the second dropdown menu\n    teamSelect.innerHTML = '';\n\n    // Get the selected league\n    const selectedLeague = leagueSelect.value;\n\n    // Create an array of teams for each league\n    let teams;\n    if (selectedLeague === 'premier-league - england') {\n      teams = ['Liverpool', 'Manchester City', 'Chelsea', 'Manchester United', 'Tottenham Hotspur', 'Leicester City', 'Arsenal', 'West Ham United', 'Aston Villa', 'Wolverhampton Wanderers', 'Everton', 'Newcastle United', 'Leeds United', 'Crystal Palace', 'Burnley', 'Southampton', 'Brighton & Hove Albion', 'Brentford', 'Watford', 'Norwich City'];\n    } else if (selectedLeague === 'la-liga - spain') {\n      teams = ['Real Madrid FC', 'Atlético de Madrid', 'FC Barcelona', 'Sevilla FC', 'Real Sociedad', 'Villarreal CF', 'Real Betis Balompié', 'Athletic Club de Bilbao', 'RCD Espanyol de Barcelona', 'Valencia CF', 'Granada CF', 'RC Celta de Vigo', 'Levante Unión Deportiva', 'CA Osasuna', 'Getafe CF', 'Cádiz CF', 'Deportivo Alavés', 'RCD Mallorca', 'Rayo Vallecano', 'Elche CF'];\n    } else if (selectedLeague === 'bundesliga-- germany') {\n      teams = ['FC Bayern München', 'Borussia Dortmund', 'RB Leipzig', 'Bayer 04 Leverkusen', 'Borussia Mönchengladbach', 'TSG Hoffenheim', 'VfL Wolfsburg', 'Eintracht Frankfurt', '1. FC Köln', 'Sport-Club Freiburg', 'Hertha BSC', '1. FSV Mainz 05', 'VfB Stuttgart', 'FC Augsburg', '1. FC Union Berlin', 'VfL Bochum 1848', 'DSC Arminia Bielefeld', 'SpVgg Greuther Fürth'];\n    } else if (selectedLeague === 'serie-a - italy') {\n      teams = ['Inter', 'Juventus', 'AC Milan', 'Napoli', 'Atalanta', 'Lazio', 'Roma', 'Fiorentina', 'Bologna', 'U.C. Sampdoria', 'U.S. Sassuolo Calcio', 'Torino F.C.', 'Hellas Verona', 'Udinese Calcio', 'Cagliari', 'Genoa', 'Venezia FC', 'Empoli', 'US Salernitana 1919', 'Spezia'];\n    } else if (selectedLeague === 'ligue-1 - france') {\n      teams = ['Paris Saint-Germain', 'Olympique de Marseille', 'Olympique Lyonnais', 'AS Monaco', 'Stade Rennais FC', 'OGC Nice', 'LOSC Lille', 'RC Strasbourg Alsace', 'Racing Club de Lens', 'Montpellier Hérault SC', 'FC Nantes', 'AS Saint-Étienne', 'Stade Brestois 29', 'FC Girondins de Bordeaux', 'Stade de Reims', 'Angers SCO', 'FC Metz', 'ESTAC Troyes', 'Clermont Foot 63', 'FC Lorient'];\n    }\n\n    // Populate the second dropdown menu with the teams of the selected league\n    for (let i = 0; i < teams.length; i++) {\n      const option = document.createElement('option');\n      option.value = teams[i].toLowerCase().replace(' ', '-');\n      option.text = teams[i];\n      teamSelect.appendChild(option);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDbkMsTUFBTUUsTUFBTSxHQUFHVixRQUFRLENBQUNXLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDL0NELE1BQU0sQ0FBQ0osS0FBSyxHQUFHQyxLQUFLLENBQUNDLENBQUMsQ0FBQyxDQUFDSSxXQUFXLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7TUFDdkRILE1BQU0sQ0FBQ0ksSUFBSSxHQUFHUCxLQUFLLENBQUNDLENBQUMsQ0FBQztNQUN0Qk4sVUFBVSxDQUFDYSxXQUFXLENBQUNMLE1BQU0sQ0FBQztJQUNsQztFQUNKLENBQUM7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb3RiYWxsZXJzdGF0cy8uL3NyYy9zY3JpcHRzL3RlYW1fZHJvcGRvd24uanM/NDUyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVhbURyb3BEb3duKCkge1xuICAgIGNvbnN0IGxlYWd1ZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWFndWUtc2VsZWN0Jyk7XG4gICAgY29uc3QgdGVhbVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWFtLXNlbGVjdCcpO1xuICBcbiAgICBsZWFndWVTZWxlY3Qub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIG9wdGlvbnMgb2YgdGhlIHNlY29uZCBkcm9wZG93biBtZW51XG4gICAgICAgIHRlYW1TZWxlY3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdGVkIGxlYWd1ZVxuICAgICAgICBjb25zdCBzZWxlY3RlZExlYWd1ZSA9IGxlYWd1ZVNlbGVjdC52YWx1ZTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiB0ZWFtcyBmb3IgZWFjaCBsZWFndWVcbiAgICAgICAgbGV0IHRlYW1zO1xuICAgICAgICBpZiAoc2VsZWN0ZWRMZWFndWUgPT09ICdwcmVtaWVyLWxlYWd1ZSAtIGVuZ2xhbmQnKSB7XG4gICAgICAgICAgICB0ZWFtcyA9IFtcbiAgICAgICAgICAgICAgICAnTGl2ZXJwb29sJywgXG4gICAgICAgICAgICAgICAgJ01hbmNoZXN0ZXIgQ2l0eScsIFxuICAgICAgICAgICAgICAgICdDaGVsc2VhJywgXG4gICAgICAgICAgICAgICAgJ01hbmNoZXN0ZXIgVW5pdGVkJywgXG4gICAgICAgICAgICAgICAgJ1RvdHRlbmhhbSBIb3RzcHVyJywgXG4gICAgICAgICAgICAgICAgJ0xlaWNlc3RlciBDaXR5JywgXG4gICAgICAgICAgICAgICAgJ0Fyc2VuYWwnLCBcbiAgICAgICAgICAgICAgICAnV2VzdCBIYW0gVW5pdGVkJywgXG4gICAgICAgICAgICAgICAgJ0FzdG9uIFZpbGxhJywgXG4gICAgICAgICAgICAgICAgJ1dvbHZlcmhhbXB0b24gV2FuZGVyZXJzJywgXG4gICAgICAgICAgICAgICAgJ0V2ZXJ0b24nLCBcbiAgICAgICAgICAgICAgICAnTmV3Y2FzdGxlIFVuaXRlZCcsIFxuICAgICAgICAgICAgICAgICdMZWVkcyBVbml0ZWQnLCBcbiAgICAgICAgICAgICAgICAnQ3J5c3RhbCBQYWxhY2UnLCBcbiAgICAgICAgICAgICAgICAnQnVybmxleScsIFxuICAgICAgICAgICAgICAgICdTb3V0aGFtcHRvbicsXG4gICAgICAgICAgICAgICAgJ0JyaWdodG9uICYgSG92ZSBBbGJpb24nLFxuICAgICAgICAgICAgICAgICdCcmVudGZvcmQnLFxuICAgICAgICAgICAgICAgICdXYXRmb3JkJyxcbiAgICAgICAgICAgICAgICAnTm9yd2ljaCBDaXR5J1xuICAgICAgICAgICAgXTtcblxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVhZ3VlID09PSAnbGEtbGlnYSAtIHNwYWluJykge1xuICAgICAgICAgICAgdGVhbXMgPSBbXG4gICAgICAgICAgICAgICAgJ1JlYWwgTWFkcmlkIEZDJywgXG4gICAgICAgICAgICAgICAgJ0F0bMOpdGljbyBkZSBNYWRyaWQnLCBcbiAgICAgICAgICAgICAgICAnRkMgQmFyY2Vsb25hJywgXG4gICAgICAgICAgICAgICAgJ1NldmlsbGEgRkMnLFxuICAgICAgICAgICAgICAgICdSZWFsIFNvY2llZGFkJyxcbiAgICAgICAgICAgICAgICAnVmlsbGFycmVhbCBDRicsXG4gICAgICAgICAgICAgICAgJ1JlYWwgQmV0aXMgQmFsb21wacOpJyxcbiAgICAgICAgICAgICAgICAnQXRobGV0aWMgQ2x1YiBkZSBCaWxiYW8nLFxuICAgICAgICAgICAgICAgICdSQ0QgRXNwYW55b2wgZGUgQmFyY2Vsb25hJyxcbiAgICAgICAgICAgICAgICAnVmFsZW5jaWEgQ0YnLFxuICAgICAgICAgICAgICAgICdHcmFuYWRhIENGJyxcbiAgICAgICAgICAgICAgICAnUkMgQ2VsdGEgZGUgVmlnbycsXG4gICAgICAgICAgICAgICAgJ0xldmFudGUgVW5pw7NuIERlcG9ydGl2YScsXG4gICAgICAgICAgICAgICAgJ0NBIE9zYXN1bmEnLFxuICAgICAgICAgICAgICAgICdHZXRhZmUgQ0YnLFxuICAgICAgICAgICAgICAgICdDw6FkaXogQ0YnLFxuICAgICAgICAgICAgICAgICdEZXBvcnRpdm8gQWxhdsOpcycsXG4gICAgICAgICAgICAgICAgJ1JDRCBNYWxsb3JjYScsXG4gICAgICAgICAgICAgICAgJ1JheW8gVmFsbGVjYW5vJyxcbiAgICAgICAgICAgICAgICAnRWxjaGUgQ0YnXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRMZWFndWUgPT09ICdidW5kZXNsaWdhLS0gZ2VybWFueScpIHtcbiAgICAgICAgICAgIHRlYW1zID0gW1xuICAgICAgICAgICAgICAgICdGQyBCYXllcm4gTcO8bmNoZW4nLCBcbiAgICAgICAgICAgICAgICAnQm9ydXNzaWEgRG9ydG11bmQnLCBcbiAgICAgICAgICAgICAgICAnUkIgTGVpcHppZycsIFxuICAgICAgICAgICAgICAgICdCYXllciAwNCBMZXZlcmt1c2VuJyxcbiAgICAgICAgICAgICAgICAnQm9ydXNzaWEgTcO2bmNoZW5nbGFkYmFjaCcsXG4gICAgICAgICAgICAgICAgJ1RTRyBIb2ZmZW5oZWltJyxcbiAgICAgICAgICAgICAgICAnVmZMIFdvbGZzYnVyZycsXG4gICAgICAgICAgICAgICAgJ0VpbnRyYWNodCBGcmFua2Z1cnQnLFxuICAgICAgICAgICAgICAgICcxLiBGQyBLw7ZsbicsXG4gICAgICAgICAgICAgICAgJ1Nwb3J0LUNsdWIgRnJlaWJ1cmcnLFxuICAgICAgICAgICAgICAgICdIZXJ0aGEgQlNDJyxcbiAgICAgICAgICAgICAgICAnMS4gRlNWIE1haW56IDA1JyxcbiAgICAgICAgICAgICAgICAnVmZCIFN0dXR0Z2FydCcsXG4gICAgICAgICAgICAgICAgJ0ZDIEF1Z3NidXJnJyxcbiAgICAgICAgICAgICAgICAnMS4gRkMgVW5pb24gQmVybGluJyxcbiAgICAgICAgICAgICAgICAnVmZMIEJvY2h1bSAxODQ4JyxcbiAgICAgICAgICAgICAgICAnRFNDIEFybWluaWEgQmllbGVmZWxkJyxcbiAgICAgICAgICAgICAgICAnU3BWZ2cgR3JldXRoZXIgRsO8cnRoJ1xuICAgICAgICAgICAgXTtcblxuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdGVkTGVhZ3VlID09PSAnc2VyaWUtYSAtIGl0YWx5Jykge1xuICAgICAgICAgICAgdGVhbXMgPSBbXG4gICAgICAgICAgICAgICAgJ0ludGVyJyxcbiAgICAgICAgICAgICAgICAnSnV2ZW50dXMnLFxuICAgICAgICAgICAgICAgICdBQyBNaWxhbicsXG4gICAgICAgICAgICAgICAgJ05hcG9saScsXG4gICAgICAgICAgICAgICAgJ0F0YWxhbnRhJyxcbiAgICAgICAgICAgICAgICAnTGF6aW8nLFxuICAgICAgICAgICAgICAgICdSb21hJyxcbiAgICAgICAgICAgICAgICAnRmlvcmVudGluYScsXG4gICAgICAgICAgICAgICAgJ0JvbG9nbmEnLFxuICAgICAgICAgICAgICAgICdVLkMuIFNhbXBkb3JpYScsXG4gICAgICAgICAgICAgICAgJ1UuUy4gU2Fzc3VvbG8gQ2FsY2lvJyxcbiAgICAgICAgICAgICAgICAnVG9yaW5vIEYuQy4nLFxuICAgICAgICAgICAgICAgICdIZWxsYXMgVmVyb25hJyxcbiAgICAgICAgICAgICAgICAnVWRpbmVzZSBDYWxjaW8nLFxuICAgICAgICAgICAgICAgICdDYWdsaWFyaScsXG4gICAgICAgICAgICAgICAgJ0dlbm9hJyxcbiAgICAgICAgICAgICAgICAnVmVuZXppYSBGQycsXG4gICAgICAgICAgICAgICAgJ0VtcG9saScsXG4gICAgICAgICAgICAgICAgJ1VTIFNhbGVybml0YW5hIDE5MTknLFxuICAgICAgICAgICAgICAgICdTcGV6aWEnXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRMZWFndWUgPT09ICdsaWd1ZS0xIC0gZnJhbmNlJykge1xuICAgICAgICAgICAgdGVhbXMgPSBbXG4gICAgICAgICAgICAgICAgJ1BhcmlzIFNhaW50LUdlcm1haW4nLCBcbiAgICAgICAgICAgICAgICAnT2x5bXBpcXVlIGRlIE1hcnNlaWxsZScsXG4gICAgICAgICAgICAgICAgJ09seW1waXF1ZSBMeW9ubmFpcycsXG4gICAgICAgICAgICAgICAgJ0FTIE1vbmFjbycsXG4gICAgICAgICAgICAgICAgJ1N0YWRlIFJlbm5haXMgRkMnLFxuICAgICAgICAgICAgICAgICdPR0MgTmljZScsXG4gICAgICAgICAgICAgICAgJ0xPU0MgTGlsbGUnLFxuICAgICAgICAgICAgICAgICdSQyBTdHJhc2JvdXJnIEFsc2FjZScsXG4gICAgICAgICAgICAgICAgJ1JhY2luZyBDbHViIGRlIExlbnMnLFxuICAgICAgICAgICAgICAgICdNb250cGVsbGllciBIw6lyYXVsdCBTQycsXG4gICAgICAgICAgICAgICAgJ0ZDIE5hbnRlcycsXG4gICAgICAgICAgICAgICAgJ0FTIFNhaW50LcOJdGllbm5lJyxcbiAgICAgICAgICAgICAgICAnU3RhZGUgQnJlc3RvaXMgMjknLFxuICAgICAgICAgICAgICAgICdGQyBHaXJvbmRpbnMgZGUgQm9yZGVhdXgnLFxuICAgICAgICAgICAgICAgICdTdGFkZSBkZSBSZWltcycsXG4gICAgICAgICAgICAgICAgJ0FuZ2VycyBTQ08nLFxuICAgICAgICAgICAgICAgICdGQyBNZXR6JyxcbiAgICAgICAgICAgICAgICAnRVNUQUMgVHJveWVzJyxcbiAgICAgICAgICAgICAgICAnQ2xlcm1vbnQgRm9vdCA2MycsXG4gICAgICAgICAgICAgICAgJ0ZDIExvcmllbnQnXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgc2Vjb25kIGRyb3Bkb3duIG1lbnUgd2l0aCB0aGUgdGVhbXMgb2YgdGhlIHNlbGVjdGVkIGxlYWd1ZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHRlYW1zW2ldLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnICcsICctJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dCA9IHRlYW1zW2ldO1xuICAgICAgICAgICAgdGVhbVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiAgICBcbiJdLCJuYW1lcyI6WyJjcmVhdGVUZWFtRHJvcERvd24iLCJsZWFndWVTZWxlY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGVhbVNlbGVjdCIsIm9uY2hhbmdlIiwiaW5uZXJIVE1MIiwic2VsZWN0ZWRMZWFndWUiLCJ2YWx1ZSIsInRlYW1zIiwiaSIsImxlbmd0aCIsIm9wdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/team_dropdown.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290YmFsbGVyc3RhdHMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;