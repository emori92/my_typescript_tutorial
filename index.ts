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
// const user: User = {
//   name: "Hayes",
//   id: 0,
// };

// userクラス
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// instance
const user: User = new UserAccount("Murphy", 1);

// unions
type MyBool = true | false;
// 許容するstring/numberのtypeを定義
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// 引数に文字か配列を受け取る
function getLength(obj: string | string[]) {
  return obj.length;
}

// generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// genericsを使い、typeを受けつけるinterfaceを作成
// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }
// // stringを宣言してinstanceを作成
// declare const backpack: Backpack<string>;
// // Typeを取得
// const obj2 = backpack.get();
// obj2;
// // Typeを追加
// let str = backpack.add('Type test');
// str;
// // 違うTypeを与える
// backpack.add(23);

// structure type system
interface Point {
  x: number;
  y: number;
}
// func
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
// run func
const point = { x: 12, y: 26 };
logPoint(point);
// sample arg
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);
const color = { hex: "#187ABF" };
logPoint(color);
// class
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);