import { Animal, Lion, Tiger, Dog, Monkey } from './animals';

const animals: Animal[] = [
	new Lion('小黄', 12),
	new Tiger('小红', 13),
	new Dog('小白', 14),
	new Monkey('小黄', 15)
]

// 所有的动物打招呼
animals.forEach(a => a.sayHello())