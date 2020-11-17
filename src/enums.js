"use strict";
var _a;
exports.__esModule = true;
var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["club"] = "\u2663";
    Color["diamud"] = "\u2666";
})(Color = exports.Color || (exports.Color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["sever"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["eleven"] = "J";
    Mark["twelve"] = "Q";
    Mark["king"] = "K";
})(Mark = exports.Mark || (exports.Mark = {}));
// 常量枚举会在编译阶段被删除
var myCyarolors = [0 /* Red */, 1 /* Yellow */, 2 /* Blue */];
var b = {
    name: 'hzg',
    age: 19
};
console.log(b.age);
var kkk = {
    // age: 0,
    name: 'sd'
};
var str = '1';
var d = {
    age: 9,
    name: '9'
};
var isString = function (val) { return typeof val === 'string'; };
var cc = Math.random() < .9 ? {} : { name: 'sd' };
var dd = (_a = cc) === null || _a === void 0 ? void 0 : _a.name;
//   let dd1 = cc!.name;
console.log(dd, "dd1", 'dd-dd1');
function getName(obj) {
    var _a;
    return (_a = obj) === null || _a === void 0 ? void 0 : _a.name;
}
console.log(getName(), '-------');
