/**
 * 属性初始化时可在1：构造函数中； 2：属性的默认值
 */

class User4 {
	readonly id: number; // 只读的
	// name: string;
	// age: number;
	gender: 'male' | 'female' = 'male'; // 默认值
	pid?:string; // 可选的

	constructor(public name: string, public age: number) {
	// constructor(name: string, age: number, gender: 'male' | 'female' ='male') {
		this.id = Math.random();
		// this.gender = gender;
		
	}
}

const v = new User4('aa', 23)

// 属性简写
class User5 {
	constructor(public name: string, private _age: number) {
	
	}

}


class Person {
	// protected name: string;
	protected constructor(protected name: string) {
		
	}
}

// new Person()
class Employee extends Person {
	constructor(private department: string, name: string) {
		super(name);
	}

	public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误


class Person3 {
	readonly id: number;
}


let person3 = new Person3();
// person3.id = 'sss'
console.log(person3.id, '===--mkll');



// 访问器
class User89 {
	readonly id: number;
	gender : 'male' | 'female' = 'male';
	pid?: string;

	constructor(public name: string, private _age: number) {
		this.id = Math.random();

	}

	setAge(value:number) {
		if(value < 0) {
			this._age = 0;
		} else if(value > 200) {
			this._age = 200;
		} else {
			this._age = value;
		}
	}

	getAge() {
		return Math.floor(this._age);
	}
}

// java 里面的写法  对一些属性的控制
const u89 = new User89('sd', 99)
console.log(u89.getAge());



class User99 {
	readonly id: number;
	gender : 'male' | 'female' = 'male';
	pid?: string;

	constructor(public name: string, private _age: number) {
		this.id = Math.random();

	}

	set age(value:number) {
		if(value < 0) {
			this._age = 0;
		} else if(value > 200) {
			this._age = 200;
		} else {
			this._age = value;
		}
	}

	get age() {
		return Math.floor(this._age);
	}
}

// c# 的写法  访问器 属性 
const u99 = new User99('sdsd', 990);

console.log(u99.age);


class A2 {
	name: string
	constructor(value: string) {
		this.name = value;
	}
	greet() {
		// return `hello ${this.name}`
	}
}

const aa = new A2('hzg');
console.log(aa);



// -=-=-=-=-=-泛型-=-=-=-=-=-=-=

function take<T>(arr: T[], n: number): T[] {
	if(n >= arr.length) {
		return arr;
	} 
	const newArr: T[]= []; //  三个any的类型应该一致；
	for (let i = 0; i < n; i++) {
		newArr.push(arr[i])
	}
	return newArr;
}

// const newArr = take([1,2,42,4,2,3,23,1], 3);
// console.log(newArr);

take<string>(['sdsd', 'sdsd'], 2)

// 在类型别名、接口、类中使用泛型

// 回调函数：判断数组中的某一项是否满足条件；
type callback1<T> = (n: T, i: number) => boolean;

function filter<T>(arr: T[], callback: callback1<T>): T[] {
	const newArr: T[] = [];
	arr.forEach((n, i) => {
		if(callback(n, i)) {
			newArr.push(n);
		}
	})
	return newArr;
}

const arr5 = [2,3,4,3,5,3,2,3];

console.log(filter<number>(arr5, n => n % 2 === 0));
// 类型别名
type callback9<T> = (n: T, i: number ) => boolean;

// 接口
interface callback8<T> {
	(n: T, i: number): boolean
}

export class ArrayHelper {


	getRandom(min, max) {
		const dec = max - min;

		return Math.floor(Math.random() * dec + min)
	}
}



// 泛型约束

interface hasNameProperty {
	name: string
}

/**
 * 将某个对象的name属性的每个单词的首字母大写，并将该对象返回；
 */

 // 泛型将来可以是任何类型；
function nameToUppercase<T extends hasNameProperty>(obj: T): T {
	// obj.name  // 没有约束时   将来传的值不是对象， 或者对象没有name属性 就报错

	obj.name = obj.name.split(' ').map(it => it[0].toUpperCase() + it.substr(1)).join(' ');
	return obj
}


const o = {
	name: 'kevin he',
	age: 9,
	gender: 'meal'
};


const newO = nameToUppercase(o);

console.log(newO);

// 多泛型
function mixinArray<T, K>(arr1: T[], arr2:K[]): (T | K)[] {
	if(arr1.length !== arr2.length) {
		throw new Error('两个数组的长度不等');
	}
	let result2: (T | K)[] = [];
	for (let i = 0; i < arr1.length; i++) {
		result2.push(arr1[i]);
		result2.push(arr2[i])
	}

	return result2
}

console.log(mixinArray<number, string>([1,2,3], ['a', 'b', 'c']));


function ss(arg:any): any {
	return arg
}

const result3 = ss('s');


interface hasLength {
	length: number
}

function printLength<T>(arr: T[]): T[] {
	console.log(arr.length);

	return arr;;
	
	
}

console.log(printLength([99]), '---');



function identity<T>(arg: T): T {
	return arg;
}


let ide: <T>(arg: T) => T = identity;


let iden: { <T>(arg: T): T} = identity;






// class BeeKeeper {
// 	constructor(public hasMask: Boolean) {

// 	}
// }

// class ZooKeeper {
// 	nameTag: string
// 	// constructor(public nameTag: string) {

// 	// }
// }

// class Animal {
// 	numLegs: number
// 	// constructor(public numLegs: number) {

// 	// }
// }


// class Bee extends Animal {
// 	 Keeper: BeeKeeper
// }

// class Lion extends Animal {
// 	keeper: ZooKeeper;
// }


// function createInstance<A extends Animal>(c: new() => A): A {
// 	return new c();
// }


// console.log(createInstance(Lion).keeper);


class Greeter2 {
	greeting: string = 'sds';
	
}


class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");


console.log(sam.move(), '--sam---');

tom.move(34);