// // 位枚举  两个数字换算成二进制后进行的运算；
// enum Permission {
// 	Read = 1, // 2^0  二进制 0001  根据每个位置上的标识来判断是否有对应的权限； 1代表有权限；
// 	Write = 2, // 2^1	0010
// 	Create = 4, // 2^2	0100
// 	Delete = 8 // 2^3	1000
// }
// // 1: 如何组合权限
// // 使用或运算 
// // 0001
// // | 或运算  一个为真就为真，全假为假
// // 0010
// // ----
// // 0011
// let p: Permission = Permission.Read | Permission.Write;
// p = p | Permission.Delete; // 10119
// // 2: 如何判断是否拥有某个权限；
// /**
//  * 
//  * @param targe 需要判断的目标
//  * @param per 对应的真实权限
//  */
// // 0011
// // & 且运算 全真为真， 否者为假
// // 0001
// // ----
// // 0001
// function hasPermission(target:Permission, per:Permission) {
// 	return (target & per) === per; 
// }
// // 判断变量p是否拥有可读权限
// console.log(hasPermission(p, Permission.Create));
// // 3:如何删除某个权限  (删除写权限)
// // 0011
// // 异或   相同取0，不同取1
// // 0010
// // ----
// // 0001
// p = p ^ Permission.Write;
// // 模块化
// import { sum, myName } from './myModules' // 不要加后缀名， 编译后没有ts文件
// sum(1, 3); // 普通导出 可以智能提示， 快速修复； 默认导出（ export default)， 不能智能提示； 因为可以修改名字；
// import { readFileSync } from 'fs'; // fs中导出: module.exports = {}； 不是用TS写的；
// // readFileSync('./');
// import path from 'path';
// import fs from 'fs';
// // 扑克牌 模块化 改写
// // import { createDeck, printDeck } from './pocker';
// // const deck = createDeck();
// // printDeck(deck);
// // 
// // import './interface'
// // import './class'
// // 
// import { Deck } from "./deck";
// const deck1 = new Deck();
// deck1.print()
// import './dictionary'
// enum Num {
// 	a = 1,
// 	b = 2
// }
// enum Str {
// 	c = '1',
// 	d = '2'
// }
// let aa1: Num = Num.a;
// console.log(Num);
// import './animal/index'
// import './decorator/index'
// import './enums'
// type Keys = 'a' | 'b';
// type Obj = {
// 	[p in Keys]: any
// }
// let cs: Obj = {
// 	a: 'sds',
// 	b: 'd'
// }
// @testable
// class MyTestableClass {
//  // ...
// }
// function testable(target) {
//  target.isTestable = true;
//  console.log(target);
// }
// console.log(MyTestableClass);
// class Animal {
// 	name: string;
// }
// class Dog extends Animal {
// 	breed: string;
// }
// // TypeScript支持两种索引签名：字符串和数字。 
// // 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
// interface NotOky {
// 	[x: number]: Dog, // 数字索引
// 	[x: string]: Animal // 字符串索引
// }
var my;
function identity(value, message) {
    var identities = {
        value: value,
        message: message
    };
    return identities;
}
console.log(identity(23, '890'));
var IdeneityClass = /** @class */ (function () {
    function IdeneityClass(value) {
        this.value = value;
        this.say = function () { return value; };
    }
    IdeneityClass.prototype.getIdentity = function () {
        return this.value;
    };
    return IdeneityClass;
}());
var id = new IdeneityClass(89);
function getLength(value) {
    console.log(value.length);
    return value;
}
getLength({ name: 2323, length: 88 });


import './types.test';

sum(9, 90)