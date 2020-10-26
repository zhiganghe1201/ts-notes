interface User {
	name: string,
	age: number
}

interface SetUser {
	(name: string, age: number): string
}


type User1 = {
	name: string;
	age: number;
}

type setUser1 = {
	(name: string, age: number): string
}

interface ProUser extends User {
	email: string
}

// 接口可以继承 
interface VipUser extends User1 {

}

type VipUserType = {

}


let a: ProUser = {
	email: 'sdsd',
	name: 'sd',
	age: 89
}


type Name = {
	name: string
};


interface Dog {
	go: string
}

type dogName = Name & Dog;


const go: dogName = {
	name: 'ss',
	go: 'do'
}