export enum Color {
	heart = '♥',
	spade = '♠',
	club = '♣',
	diamud = '♦'
}

export enum Mark {
	A = 'A',
	two = '2',
	three = '3',
	four = '4',
	five = '5',
	six = '6',
	sever = '7',
	eight = '8',
	nine = '9',
	ten = '10',
	eleven = 'J',
	twelve = 'Q',
	king = 'K'
}




const enum Colors {
    Red,
    Yellow,
    Blue
}
// 常量枚举会在编译阶段被删除
let myCyarolors = [Colors.Red, Colors.Yellow, Colors.Blue];


// console.log(myColors, 'myColors---------');

// console.log('[-=-=-=-=-==-=-=]');

const enum TODO_STATUS {
	TODO = 'TODO',
	DONE = 'DONE',
	DOING = 'DOING'
  }

  type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}

// 使用

interface Foo {
	name: string;
	age: number;
}

type B = Partial<Foo>

let b: B = {
	name: 'hzg',
	age: 19,
}
console.log(b.age);

type PickUser = Pick<Foo, 'name'>

let kkk: PickUser = {
	// age: 0,
	name: 'sd'
}

type Exclude<T, U> = T extends U ? never : T;

const str: Exclude<'a' | '1' | '2', 'a' | 'y' | 'z' | '2'> = '1'


type Omit<T, U> = Pick<T, Exclude<keyof T, U>>;

interface User {
	id: number;
	age: number;
	name: string;
  }
  
  type OmitUser = Omit<User, 'id'>;

  let d: OmitUser = {
	  age: 9,
	  name: '9'
  }
  

  const isString = (val: any): boolean => typeof val === 'string';

  interface obj {
	  [prop: string]: string;
	//   name: string;
  }

  let cc: null | obj = Math.random() < .9 ? {} : {name: 'sd'};

  let dd = cc?.name;
//   let dd1 = cc!.name;

  console.log(dd, "dd1", 'dd-dd1');
  

  interface User {
	name: string;
	age: number
}

function getName(obj?: User) {
	return obj?.name
}

console.log(getName(), '-------');
 
