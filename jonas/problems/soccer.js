/** @format */

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
    "Sané",
  ],
  score: "4:0",
  scored: ["Neuer", "Pavard", "Martinez", "Alaba"],

  date: "Nov 1, 2021",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayer = [...players1, ...players2];
console.log(allPlayer);

const players1Final = [...players1, "Thiago", "coutinho", "periscic"];

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);
// console.log(team1, draw,team2,team3,team4,team5,

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
