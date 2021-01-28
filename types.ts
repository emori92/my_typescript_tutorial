// basic types


// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
// 16
let hex: number = 0xf00d;
let binary: number = 0b1010;
// 8
let octal: number = 0o744;

// string
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let x: [string, number];
x = ["hello", 10];
x = [10, "hello"];

// enum
enum Color {
    Red = 1,  // デフォルトでは0が割り当てられる
    Green = 2,
    Blue = 4,
  }
// get Color.Green
let c: Color = Color.Green;
console.log(c);

enum Color2 {
  Red = 1,  
  Green,
  Blue,
}
// 数値からvalueを取得
let colorName: string = Color2[2];
console.log(colorName);

// unknown: あらゆるobjectを受ける
let notSure: unknown = 3;
console.log(notSure);
// to string
notSure = 'unknown test';
console.log(notSure);
// to boolean
notSure = false;
console.log(notSure);

// any: あらゆるobjectを受ける
declare function getValue(key: string): any;
// get string
const str: string = getValue("myString");

// anyとunknownの違い
// unknown: プロパティ、メソッド使用可能
// any: unknown: プロパティ、メソッド使用不可