import { Color, Mark } from "./enums";
import { Deck } from "./types";

export function createDeck(): Deck {
	const deck: Deck = [];
	const marks = Object.values(Mark); 
	const colors = Object.values(Color); // Object.values() 不知道指的类型， 只有在运行的时候才知道
	
	for (const m of marks) {
		for (const c of colors) {
			deck.push({
				color: c,
				mark : m
			})
		}
	}

	return deck;
}

export function printDeck(deck: Deck) {
	let result = '\n'; // \n换行符  \t制表符
	deck.forEach((card, i) => {
		let str = card.color + card.mark;
		result += str + '\t';
		if((i + 1) % 4 === 0) {
			result += '\n';
		}
	})

	console.log(result);
}

