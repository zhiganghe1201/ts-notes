import { ucs2 } from "punycode";

export  interface User {
	name: string,
	age: number,
	// sayHello: () => void
	sayHello(): void
};

// 这里接口和类型别名来约束对象没什么区别

// type User = {
// 	name: string,
// 	age: number,
// 	sayHello(): void
// }
// 接口和类型别名一样， 不会出现在编译结果中的；

let u: User = {
	name: 'hzg',
	age: 18,
	sayHello() {

	}
}

// 类型别名
// type Condition = (n: number) => boolean;

interface Condition {
	(n: number): boolean
}

function sum(numbers:number[], callback: Condition) {
	let s = 0;
	numbers.forEach(n => {
		if(callback(n)) {
			 s += n;
		}
	})

	return s;
}

const result = sum([1,21,1,2,42,2], (n) => n % 2 === 0);

console.log(result);



interface A {
	T1: string
}

interface AA {
	T11: boolean
}

// interface B extends A {
// 	T2: number
// }

// interface c extends A, AA { 
// 	T3: number
// }

// // 接口组合 
// let cc: B = {
// 	T1: 'sdsd',
// 	T2: 12
// }

// ---------------------

// 使用类型别名可以实现类似组合效果， 需要通过 & 符号。 叫做交叉类型
type D = {
	T1: string
}

type D1 = {
	T2: number
}

type D2 = {
	T3: boolean
} & D & D1; // 交叉类型 三个所有类型必须都有


let d: D2 = {
	T1: 'sdsd',
	T2: 2323,
	T3: false
}



interface Duck {
	sound: '嘎嘎嘎'
	swin(): void // 函数不返回任何东西；
}


let person = {
	name: '伪装成鸭子的人',
	age: 11,
	sound: '嘎嘎嘎' as '嘎嘎嘎', // 类型断言  字面量类型  赋值时  编译后类型断言消失
	swin() {
		console.log('sdsdsd');
	}
}

// 声明一个变量， 约束为一个鸭子但是可以把人赋值给他； 
let duck: Duck = person;

let duck1: Duck = { // 直接赋值时采用更加严格的类型检查   必须完全一致；
	sound: "嘎嘎嘎",
	swin() {

	},
}

// interface ResponseUser {
// 	loginId: number,

// }
interface aa {
	name?: string, // 对象字面量赋值时将采用更加严格的类型检查
	age: number
}

let a:aa = {
	// a: 'sdsd',
	age: 23
}

let arr1: readonly number[] = [1,2,3,4,5];

let arr2: ReadonlyArray<number> = [12,3,4,5]; // 在react中 <>表示组件



interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	return {
		color: 'sd',
		area: 90
	}
    // ...
}

let obj = { colour: "red", width: 100 }

let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);


const methodName = 'sayHello'
class User1 {
	// 属性名一般都是字符串： 成员属性对所有有效
	[propName: string]: any;


	constructor(
		public name: string,
		public age: number
	) {

	}

	[methodName]() {
		console.log('a-----a');
		
	}
}

const u1 = new User1('aa', 3)


u1[methodName]()

console.log(u1['pid']);

u1[methodName]

function aa(a: string) {

}


class MyArr {
	[index: number]: number;

	0 = 1;
	1 = 2;
	3 = 33
}

console.log(new MyArr());


const arr3: number[] = [];
// arr3[0] = 1;
// arr3['0'] = 5;

console.log(arr3[0]);

// 在JS中， 所有的成员名本质上， 都是字符串， 如果使用数字作为成员名， 会自动转换为字符串

class A {
	// [prop: number] : string
	[prop: string]: string
}

const a1 = new A()
a1[1] = '9'


function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
	return o[name]
}

let xx = get({ a: 12, b: '32323'}, 'b')
console.log(xx, '---xxxx---');

