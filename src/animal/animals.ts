import { IFireShow, IWisdomShow } from "./interface";

// 再谈接口。

export abstract class Animal {
	abstract type: string;

	constructor(
		public name: string,
		public age: number,
	) {

	}

	sayHello() {
		console.log(`各位观众， 大家好， 我是${this.name}, 今年${this.age}岁了`);
	}
}

// class Lion implements IFireShow {}

export class Lion extends Animal implements IFireShow {
	singleFire(): void {
		throw new Error("Method not implemented.");
	}
	doubleFire(): void {
		throw new Error("Method not implemented.");
	}
	type: string = '狮子'
}

export class Tiger extends Animal implements IWisdomShow {
	suanshuti(): void {
		throw new Error("Method not implemented.");
	}
	dance(): void {
		throw new Error("Method not implemented.");
	}
	type: string = '老虎'
}
export class Dog extends Animal {
	type: string = '狗'
}
export class Monkey extends Animal {
	type: string = '猴子';

	// protected

	// private
}




