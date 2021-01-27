// static type checker
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;

// types
console.log(4 / []);

// pure JS
// const user = {
//   name: "Hayes",
//   id: 0,
// };

// interface object
interface User {
  name: string;
  id: number;
}

// userオブジェクトがUserインターフェースに適当かjudge
const user: User = {
  name: "Hayes",
  id: 0,
};
