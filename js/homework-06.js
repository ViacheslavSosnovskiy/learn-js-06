// задача 1

// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems
// - массив чисел, и рассчитывает общую сумму его элементов,
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
}

// задача 2

// Функция filterArray(numbers, value) принимает массив чисел numbers и
// возвращаетновый массив, в котором будут только те элементы
// оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

// задача 3

// Функция getCommonElements(firstArray, secondArray)
// принимает два массива произвольной длины в параметры firstArray и secondArray,
// и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach((value) => {
    if (secondArray.includes(value)) {
      commonElements.push(value);
    }
  });

  return commonElements;
}

// задача 4

// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// задача 6

// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.
// Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

// задача 7

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};

// задача 8

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
};

// задача 9

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент,
// значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers,
// а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {
  const newArray = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number = number + value;
      newArray.push(number);
    } else if (number % 2 !== 0) {
      newArray.push(number);
    }
  });
  return newArray;
}

// задача 10

// Дополни код так, чтобы в переменной planetsLengths получился
// массив длин названий планет. Обязательно используй метод map().

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsLengths = planets.map((planet) => planet.length);

// задача 11

// Используя метод map() сделай так, чтобы в переменной titles получился
// массив названий книг (свойство title) из всех объектов массива books.

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const titles = books.map((book) => book.title);

// задача 12

// Используя метод flatMap() сделай так, чтобы в переменной genres получился
// массив всех жанров книг (свойство genres) из массива книг books.

const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика"],
  },
];
// Пиши код ниже этой строки

const genres = books.flatMap((book) => book.genres);

// задача 13

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив
// имён пользователей (свойство name) из массива объектов в параметре users.

const getUserNames = (users) => {
  return users.map((user) => user.name);
};

// задача 14

// Дополни функцию getUserEmails(users) так, чтобы она возвращала
// массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.

const getUserEmails = (users) => {
  return users.map((user) => user.email);
};

// задача 15

// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers,
// а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// задача 16

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг
// (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
  },
];

const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);

// задача 17

// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых
// (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с
// именем (свойство author) которое совпадает со значением в переменной AUTHOR.

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Бернард Корнуэлл";

const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);

const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// задача 18

// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она
// возвращала массив пользователей у которых цвет
// глаз (свойство eyeColor) совпадает со значением параметра color.

const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};

// задача 19

// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей,
// возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age > minAge && user.age < maxAge);
};

// задача 20

// Дополни функцию getUsersWithFriend(users, friendName) так,
// чтобы она возвращала массив пользователей у которых есть
// друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

// задача 21

// Дополни функцию getFriends(users) так, чтобы она возвращала массив
// друзей всех пользователей (свойство friends). У нескольких пользователей
// могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

const getFriends = (users) => {
  const arrayFriends = users.flatMap((user) => user.friends);
  return arrayFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
};

// задача 22

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала
// массив активных пользователей, значение свойства isActive которых true.

const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};

// задача 23

// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив
// неактивных пользователей, значение свойства isActive которых false.

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive === true);
};

// задача 24

// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой
// (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который
// (свойство author) совпадает со значением переменной AUTHOR.

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR = "Роберт Шекли";

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

// задача 25

// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
// почта которого (свойство email) совпадает со значением параметра email.

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

// задача 26

// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// задача 27

// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи
// сейчас активны (свойство isActive) и возвращала true или false.

const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive);
};

// задача 28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// задача 29

// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла
// наличие активных пользователей (свойство isActive) и возвращала true или false.

const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive);
};

// задача 30

// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.
// Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468,

const totalPlayTime = playtimes.reduce((acc, player) => acc + player, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

// задача 31

// Нашему сервису необходимо рассчитать среднее время проведённое в
// одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков,
// можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

const players = [
  { name: "Манго", playtime: 1270, gamesPlayed: 4 },
  { name: "Поли", playtime: 469, gamesPlayed: 2 },
  { name: "Аякс", playtime: 690, gamesPlayed: 3 },
  { name: "Киви", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce(
  (total, { playtime, gamesPlayed }) => total + playtime / gamesPlayed,
  0
);

// задача 32

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств
// (свойство balance) которые хранят пользователи из массива users.

const calculateTotalBalance = (users) => {
  return users.reduce((sum, user) => sum + user.balance, 0);
};

//  задача 33

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее
// количество друзей (свойство friends) всех пользователей из массива users.

const getTotalFriendCount = (users) => {
  return users.reduce((calc, user) => calc + user.friends.length, 0);
};

// задача 34

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная
// по возрастанию копия массива releaseDates,
// а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
];

// задача 35

// Eсли вызов compareFunction(firstEl, secondEl) вернёт 0, сортировка оставит firstEl
// и secondEl неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
// Но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// задача 36

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
// в алфавитном и обратном алфавитном порядке. Дополни код так,
// чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors,
// а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// задача 37

// Дополни код так, чтобы:
// В переменной sortedByAuthorName получился массив книг отсортированный
// по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный
// по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// задача 38

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей
// отсортированный по возрастанию их баланса (свойство balance).

const sortByAscendingBalance = (users) => {
  return [...users].sort((a, b) => a.balance - b.balance);
};

// задача 39

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей
// отсортированный по убыванию количества их друзей (свойство friends).

const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

// задача 40

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей
// отсортированный по их имени (свойство name) в алфавитном порядке.

const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};

// задача 41 =========

// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING.

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

// задача 42 ========
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

// задача 43 ======

const getSortedFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};

// задача 44

return users
  .filter((user, index, array) => user.gender === gender)
  .map((user) => user.balance)
  .reduce((total, value) => total + value, 0);
