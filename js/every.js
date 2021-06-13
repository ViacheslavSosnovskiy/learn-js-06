// ВОЗВРАЩАЕТ TRUE  если все элементы удовлетворяют условие

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 330, points: 44, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 366, points: 94, online: false },
  { id: "player-4", name: "Ajax", timePlayed: 270, points: 74, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 200, points: 44, online: true },
];

const isAllOnline = players.every((player) => player.online);
console.log("isAllOnline:", isAllOnline); // false

const isAllTime = players.every((player) => player.timePlayed > 100);
console.log("isAllTime:", isAllTime); // true

// ============== SOME ============== //

const isAnyOnline = players.some((player) => player.online);
console.log("isAnyOnline:", isAnyOnline);
