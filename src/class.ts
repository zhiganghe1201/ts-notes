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



