export abstract class Animal {
	abstract type: string;

	constructor(
		public name: string,
		public age: number,
	) {

	}
}


export class Lion extends Animal {
	type: string = '狮子'
}

export class Tiger extends Animal {
	type: string = '狮子'
}
export class Dog extends Animal {
	type: string = '狮子'
}
export class Monkey extends Animal {
	type: string = '狮子'
}



