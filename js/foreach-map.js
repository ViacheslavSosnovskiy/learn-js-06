// ======= forEach ========== замена FOR ======
// ДЛЯ СОБЕСЕДОВАНИЯ у forEach есть 2 аргумента
// первый: callback,
// второй: объект в контексте которого будет вызываться этт callBack )

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log("number", number);
// });

// console.log(numbers);

// ============ map =============

// * - поэлементно перебирает оригинальный масив
// * - не изменяет оригинальный масив
// * - возвращает новый масив такой же длины

const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map((number) => {
//   console.log(number);
//   return number * 2;
// });

// console.log("doubledNums:", doubledNums);

// ============= масив объяектов =============

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 330, points: 44, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 366, points: 94, online: false },
  { id: "player-4", name: "Ajax", timePlayed: 270, points: 74, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 44, online: true },
];

// ----- получаем масив ИМЁН --------- //
const playersName = players.map((player) => player.name);
const playersIds = players.map((player) => player.id);
console.log("playersName:", playersName);
console.log("playersIds:", playersIds);

// ------ вернуть несколько значениймасива --------- //

// const res = players.map((player) => {
//   return {
//     name: player.name,
//     online: player.online,
//   };
// });

// console.log("res:", res);

// --- деструктуризация кода выше ------ //

// const res = players.map(({ name, online }) => ({ name, online }));

// console.log("res:", res);

//===== ВАЖНО !!!!!!!! ======= //

// с помощью mар создаем копию масива,
// распыляем в него все значения старого масива
// потом изменяем в новом масиве значения points

const updatePlayer = players.map((player) => ({
  ...player,
  points: player.points * 1.1,
}));
console.table(updatePlayer);

const playerIdToUpdate = "player-3";

const updatePlayers = players.map((player) =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player
);

//   if (playerIdToUpdate === player.id) {
//     console.log("Мы нашли кого нужно!");
//     // return "это обновленный объект";
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }
//   return "это будет старый объект";
//   // или так // return player;
// });

// ---- выполним код выше через тернарник ------ //
