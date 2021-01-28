// static type checker
var obj = { width: 10, height: 15 };
var area = obj.width * obj.heigth;
// types
console.log(4 / []);
// userオブジェクトがUserインターフェースに適当かjudge
// const user: User = {
//   name: "Hayes",
//   id: 0,
// };
// userクラス
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
// instance
var user = new UserAccount("Murphy", 1);
// 引数に文字か配列を受け取る
function getLength(obj) {
    return obj.length;
}
// func
function logPoint(p) {
    console.log(p.x + ", " + p.y);
}
// run func
var point = { x: 12, y: 26 };
logPoint(point);
// sample arg
var point3 = { x: 12, y: 26, z: 89 };
logPoint(point3);
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);
var color = { hex: "#187ABF" };
logPoint(color);
// class
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);
