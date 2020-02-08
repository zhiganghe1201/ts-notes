// 中国象棋 游戏
abstract class Chess { // 抽象类 不能实例化， 用来继承
	x:number = 0;
	y:number = 0;

	abstract readonly name: string; // 抽象属性
	// abstract move(targetX: number, targetY: number): boolean; // 抽象方法， 没有方法体

	// 模板模式
	move(targetX: number, targetY: number): boolean {
		// 1. 边界判断 2. 目标位置是否有己方旗子

		if(this.rule(targetX,targetY)) {
			// rule 函数是各个棋子实行的规则 
			this.x = targetY;
			this.y = targetY;
			return true;
		}

		return false
	}

	protected abstract rule(targetX: number, targetY: number): boolean;

	// 重复的调用 调用的顺序和方式问题()
}

class Horse extends Chess {
	readonly name: string = '马';
	// move(x:number, y: number): boolean {
	// 	// 1. 边界判断 2. 目标位置是否有己方旗子 3.棋子移动规则判断
	// 	this.x = x;
	// 	this.y = y;

	// 	return true;

	// }

	rule(targetX: number, targetY: number) {
		return false
	}
}


class Soilder extends Chess {
	readonly name: string;

	constructor() {
		super();
		this.name = '炮';
	}
	// move(x:number, y: number) {
	// 	return true;
	// }

	rule(targetX: number, targetY: number): boolean {
		return false
	}

}


class Pao extends Chess {
	// 只有get 没有set 该变量是只读的 readonly
	get name() {
		return '兵'
	}

	// move(x:number, y: number) {
	// 	return true;
	// }

	rule(targetX: number, targetY: number): boolean {
		return false
	}

}

const h = new Horse();
const s = new Soilder();
const p = new Pao()
