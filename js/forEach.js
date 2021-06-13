// ======= forEach ========== замена FOR ======
// ДЛЯ СОБЕСЕДОВАНИЯ у forEach есть 2 аргумента
// первый: callback,
// второй: объект в контексте которого будет вызываться этт callBack )
const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number) {
  console.log("number", number);
});

console.log(numbers);

// ============ map ==========

// * - поэлементно перебирает оригинальный масив
// * - не изменяет оригинальный масив
// * - возвращает новый масив такой же длины

const numbers = [5, 10, 15, 20, 25];

const players = [];
