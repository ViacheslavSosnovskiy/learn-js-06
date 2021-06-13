const numbers = [5, 10, 15, 20, 25];

const number = numbers.find((number) => number === 10);
console.log(number);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 330, points: 44, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 366, points: 94, online: false },
  { id: "player-4", name: "Ajax", timePlayed: 270, points: 74, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 44, online: true },
];

const playerIdToFind = "player-3";

const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.log(playerWithId);
