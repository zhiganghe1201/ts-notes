import { Color, Mark } from "./enums";

export type Deck = NormalCard[];
// 使用枚举创造并打印一副扑克牌（不包括大小王）

// type Color = '♥' | '♠' | '♣' | '♦';
export type NormalCard = {
	color: Color,
	mark: Mark
}