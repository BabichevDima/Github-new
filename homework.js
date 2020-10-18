const users = [
  {
    firstName: "Andrey",
    age: 20,
  },
  {
    firstName: "Dima",
    age: 25,
  },
  {
    firstName: "Julia",
    age: 35,
  },
];

let lastName = "";

for (let i = 0; i < users.length; i++) {
  users[i].lastName = prompt(users[i].firstName + " введите Вашу фамилию", "");
}

console.log(users);

const firstName = prompt("Введите Ваше имя", "");

let flag = false;

for (let i = 0; i < users.length; i++) {
  if (firstName === users[i].firstName) {
    flag = true;
    console.log(users[i]);
  }
}

if (!flag) {
  users.push({
    firstName: prompt("Введите Ваше имя", ""),
    age: prompt("Введите Ваш возраст", ""),
    lastName: prompt("Введите Вашe фамилию", ""),
  });
  console.log(users[users.length - 1]);
}
