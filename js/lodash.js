// console.dir(_);

const user = {
  name: "mango",
  location: {
    city: "Lviv",
  },
};

console.log(user?.locationlocation?.city);

// ===== union =======

console.log(_.union([1, 2, 3], [3, 4, 5]));



// ======= sortBy ======= 

const users = [
    {user:'fred', age: 48}
    {user:'ted', age: 29}
    {user:'peter', age: 18}
    {user:'bart', age: 25}
];

console.log(_.sortBy(users, user => user.age))

// ===== sum и sumBy =====

console.log(_.sum([1,2,3,4,5]))
