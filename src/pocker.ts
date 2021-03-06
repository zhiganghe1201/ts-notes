import { Color, Mark } from "./enums";
import { Deck, NormalCard, Card, Joker } from "./types";

export function createDeck(): Deck {
	const deck: Deck = [];
	const marks = Object.values(Mark); 
	const colors = Object.values(Color); // Object.values() 不知道指的类型， 只有在运行的时候才知道
	
	for (const m of marks) {
		for (const c of colors) {
			// const card: NormalCard = {
			// 	color: c,
			// 	mark: m,
			// 	getString() {
			// 		return this.color + this.mark
			// 	}
			// }
			// 字面量赋值时是强类型检查
			// deck.push(card)

			deck.push({
				color: c,
				mark: m,
				getString() {
					// return this.color + this.mark
					return 'sd'
				}
			} as Card); // 类型断言 设置为 指定类型；
		}
	}

	let joker: Joker = {
		type: 'big',
		getString() {
			return 'big joker'
		}
	};
	deck.push(joker);


	joker = {
		type: 'small',
		getString() {
			return 'small joker'
		}
	}
	deck.push(joker)

	return deck;
}

export function printDeck(deck: Deck) {
	let result = '\n'; // \n换行符  \t制表符
	deck.forEach((card, i) => {
		// let str = card.color + card.mark;
		result += card.getString() + '\t';
		if((i + 1) % 6 === 0) {
			result += '\n';
		}
	})
	console.log(result, 'class Pocker');
}




type Partial<T> = {
	[p in keyof T]?: T[p]
}


interface Feature {
	name: string,
	prince: string
}

type B = Partial<Feature>