type Deck = NormalCard[];
// 使用枚举创造并打印一副扑克牌（不包括大小王）
enum Color {
	heart = '♥',
	spade = '♠',
	club = '♣',
	diamud = '♦'
}

enum Mark {
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
// type Color = '♥' | '♠' | '♣' | '♦';
type NormalCard = {
	color: Color,
	mark: Mark
}

function createDeck(): Deck {
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

function printDeck(deck: Deck) {
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

const deck = createDeck();

printDeck(deck);