const numbers = [1, 2, 9, 6, 3];
// numbers.sort();
// console.log("numbers:", numbers);

numbers.sort((curEl, nextEl) => {
  return nextEl - curEl;
});

console.log(numbers);

const ascSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("ascSortedNumbers:", ascSortedNumbers);
const copy = [...numbers];
copy.sort();

console.log(copy === numbers);
console.log("copy:", copy);
console.log("numbers:", numbers);

// ==========================

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 330, points: 44, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 366, points: 94, online: false },
  { id: "player-4", name: "Ajax", timePlayed: 270, points: 74, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 44, online: true },
];

console.log("players:", players);

const sortByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);

console.log("sortByBestPlayers:", sortByBestPlayers);

//========== сортировка ИМЁН по букве ==========

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }

  if (!result) {
    return -1;
  }
});
console.table("byName:", byName);
