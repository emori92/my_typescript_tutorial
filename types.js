// basic types
// boolean
var isDone = false;
// number
var decimal = 6;
// 16
var hex = 0xf00d;
var binary = 10;
// 8
var octal = 484;
// string
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next month.";
// array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple
var x;
x = ["hello", 10];
x = [10, "hello"];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
// get Color.Green
var c = Color.Green;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
// 数値からvalueを取得
var colorName = Color2[2];
console.log(colorName);
// unknown: あらゆるobjectを受ける
var notSure = 3;
console.log(notSure);
// to string
notSure = 'unknown test';
console.log(notSure);
// to boolean
notSure = false;
console.log(notSure);
