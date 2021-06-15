const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0);
//   console.log("number", number);
//   console.log("acc", acc);
console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);
console.log(totalSalary);

// считаем общее кол-во чассов //

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 330, points: 44, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 366, points: 94, online: false },
  { id: "player-4", name: "Ajax", timePlayed: 270, points: 74, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 44, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);
console.log(totalTimePlayed);

//  ===== Считаем общую сумму товаров в корзине  ===

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 150, quantity: 4 },
  { label: "Lemons", price: 70, quantity: 3 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);
console.log("totalAmount:", totalAmount);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 33, tags: ["html", "css", "js"] },
  { id: "004", likes: 3, tags: ["html", "c++"] },
];

const allTags = tweets.reduce(
  (acc, tweet) => [...acc, ...tweet.tags],
  // tags.push(...tweet.tags);
  []
);
console.log(allTags);

// первая итерация
// acc = [], tweet.tags = ["js", "nodejs"], return [...[], ...["js", "nodejs"]]
// acc = ["js", "nodejs"], tweet.tags = ["html", "css"], return  [...["js", "nodejs"], ... ["html", "css"]]
// acc = ["js", "nodejs", "html", "css"], tweet.tags = ["html", "js", "nodejs"], return [...["js", "nodejs", "html", "css"], ...["html", "js", "nodejs"]]
// acc = ["js", "nodejs", "html", "css", "html", "js", "nodejs"]

// ведём статистику тегов
const tagsStats = allTags.reduce(
  (acc, tag) =>
    // if (acc[tag]) {
    //   //     acc[tag] += 1;

    //   return {
    //     ...acc,
    //     [tag]: acc.tag + 1,
    //   };
    // }

    // acc[tag] = 1;
    // return {
    //   ...acc,
    //   [tag]: 1,
    // };

    ({
      ...acc,
      [tag]: acc[tag] ? (acc[tag] += 1) : 1,
    }),
  {}
);

console.log(tagsStats);
