import { Color, Mark } from "./enums";

export type Deck = Card[];
// 使用枚举创造并打印一副扑克牌（不包括大小王）

// type Color = '♥' | '♠' | '♣' | '♦';
// export type NormalCard = {
// 	color: Color,
// 	mark: Mark
// }

export interface Card {
	getString(): string
}

export interface NormalCard extends Card {
	color: Color,
	mark: Mark
}

// 新增大小王
export interface Joker extends Card {
	type: 'big' | 'small'
}