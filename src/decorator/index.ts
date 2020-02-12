import './test'

class User6 {
	// @require
	// @description
	// @Range(3, 5)
	loginid: string; // 描述：账号， 验证规则： 1.必填 2：必须是3-5个子符
	loginpwd: string; // 必须是6-12个字符
	age: number;// 必须是0-100之间的整数
	gender: '男' | '女'
}

class Article {
	title: string; // 长度必须是4-20个字符
}


const u6 = new User6();


// 类装饰器
function test(target:new (...args: [string, number]) => object) {
	// target === A target是构造函数本身

	// return class B {  // 会替换掉装饰目标
		
	// }

	// return class B extends target { // A的子类   不建议使用
		
	// }

}

@test
class A {
	constructor(public prop: string, public porp1: number) {

	}
}

const a = new A('s', 9);

console.log(a); // 返回的是B的实例 


// 函数的执行 返回一个函数
function test1(str: string) {
	return function (target: new(...args: any[]) => object) {
		
	}
}

@test1('这是一个类')
class B {

}


// 装饰器的执行顺序
type constructor = new (...args: any[]) => object;
function d1() { // 装饰器工厂
	console.log('d1');
	return function (target: constructor) {
		console.log('d1 decorator');
	}
 }

 function d2() {
	console.log('d2');
	return function (target: constructor) {
		console.log('d2 decorator');
	}
 }

@d1()
@d2()
class Test {

}

// 输出 
// d1
// d2
// d2 decorator
// d1 decorator



// 成员装饰器
function d(target: any, key: string) {
	console.log(target, key);
	
}

// 描述对象的类型： PropertyDecorator

function d3 () {
	return function (target: any, key: string, descriptor: PropertyDescriptor) {
		descriptor.enumerable = true
		console.log(target, key, descriptor, '000');

		// descriptor 属性描述对象的默认值
		// writable: true,
		// enumerable: false,
		// configurable: true 
		
	}
}
// function d3 (target: any, key: string, descriptor: PropertyDescriptor) {

// }

function  useLess(target:any, key: string, descriptor: PropertyDescriptor) {
	descriptor.value = function () {
		console.warn(key + '该方法已过期');
	}
	// value是这个方法的值  替换为该函数
}

class A1 {
	@d
	prop1: string;
	@d
	static prop2: string;

	@d3()
	@useLess
	method1() {

	}
}

const a1 = new A1();
a1.method1()




function m() {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

	}
}

class CC {

	@m()
	methods1() {

	}
}

