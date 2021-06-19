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
