import { Card, Joker } from "./types";
import { Mark, Color } from "./enums";

export class Deck {
	cards: Card[] = []

	constructor() {
		this.init(); // 初始化
	}
	
	private init() {
		const marks = Object.values(Mark); 
		const colors = Object.values(Color); // Object.values() 不知道指的类型， 只有在运行的时候才知道
	
		for (const m of marks) {
			for (const c of colors) {

				this.cards.push({
					color: c,
					mark: m,
					getString() {
						return this.color + this.mark
					}
				} as Card); // 类型断言 设置为 指定类型；
			}
		}

		// 增加大小王
		let joker: Joker = {
			type: 'big',
			getString() {
				return 'big joker'
			}
		};
		this.cards.push(joker);

		joker = {
			type: 'small',
			getString() {
				return 'small joker'
			}
		}
		this.cards.push(joker)
		}

	print() {
		let result = '\n'; // \n换行符  \t制表符
		this.cards.forEach((card, i) => {
			// let str = card.color + card.mark;
			result += card.getString() + '\t';
			if((i + 1) % 4 === 0) {
				result += '\n';
			}
		})
		console.log(result);
		
	}
	/**
	 * 洗牌
	 */

	 shuffle() {
		for (let i = 0; i < this.cards.length; i++) {
			const element = this.cards[i];
			
		}
	 }

	 /**
	  * 取不到最大值
	  * @param min 
	  * @param max 
	  */
	 private getRandom(min: number, max: number) {
		 const dec = max - min;
		 return Math.floor(Math.random() * dec + min)
	 }
}