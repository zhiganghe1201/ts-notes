let a:string;
a = '23232';
function add (b: number, c: number): number {
	return b + c;
}


add(2, 4)

let num: number[] = [12,34,2];
let obj: object;
obj = {
	1: 'sd'
}

function printValues(obj: object): any[] {
	return Object.values(obj)
}

printValues({a: 'ew', b: 'dsd'})

console.log('ssdsdsdsdasd是的是的所');


let name: string | undefined;
if(typeof name === 'string') {
	// name.
}


function throwError(msg: string):never {
	throw new Error(msg)
	console.log('sd');
	
}

function alwaysDoSomething():never {
	while(true) {
		// ...
	}
}

let aa: 'AA';
aa = 'AA'

let tu: [string, number]; // tu只能赋值为一个长度为2的数组并且第一位必须是字符串，第二位必须是数字类型；
tu = ['3', 3]

// 类型别名   防止重复写约束代码；

type User = {
	name: string,
	age: number,
	gender: '男' | '女'
}

let u: User;

function getUser():User[] {
	return [];
}

// 枚举
enum Gender {
	male = '男', // 逻辑变量、真实的值；
	female = '女'
}

let gender: Gender;

gender = Gender.female


enum Level {
	level1 = 1,
	level2 = 2
}

// 位枚举  两个数字换算成二进制后进行的运算；
enum Permission {
	Read = 1, // 2^0  二进制 0001  根据每个位置上的标识来判断是否有对应的权限； 1代表有权限；
	Write = 2, // 2^1	0010
	Create = 4, // 2^2	0100
	Delete = 8 // 2^3	1000
}

// 1: 如何组合权限
// 使用或运算 
// 0001
// | 或运算  一个为真就为真，全假为假
// 0010
// ----
// 0011
let p: Permission = Permission.Read | Permission.Write;
p = p | Permission.Delete; // 10119

// 2: 如何判断是否拥有某个权限；
/**
 * 
 * @param targe 需要判断的目标
 * @param per 对应的真实权限
 */
// 0011
// & 且运算 全真为真， 否者为假
// 0001
// ----
// 0001
function hasPermission(target:Permission, per:Permission) {
	return (target & per) === per; 
}

// 判断变量p是否拥有可读权限
console.log(hasPermission(p, Permission.Create));

// 3:如何删除某个权限  (删除写权限)
// 0011
// 异或   相同取0，不同取1
// 0010
// ----
// 0001

p = p ^ Permission.Write;


// 模块化

import { sum, myName } from './myModules' // 不要加后缀名， 编译后没有ts文件

sum(1, 3); // 普通导出 可以智能提示， 快速修复； 默认导出（ export default)， 不能智能提示； 因为可以修改名字；

import { readFileSync } from 'fs'; // fs中导出: module.exports = {}； 不是用TS写的；

// readFileSync('./');

import path from 'path';
import fs from 'fs';

// 扑克牌 模块化 改写
import { createDeck, printDeck } from './pocker';

const deck = createDeck();

printDeck(deck);


// 

import './interface'
import './class'



// 
import { Deck } from "./deck";

const deck1 = new Deck();

deck1.print()




import './dictionary'

enum Num {
	a = 1,
	b = 2
}

enum Str {
	c = '1',
	d = '2'
}
let aa1: Num = Num.a;

console.log(Num);


import _ from 'lodash'
_.chunk

