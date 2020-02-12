// 装饰器练习


import 'reflect-metadata';

import {IsNotEmpty, validate, MinLength, MaxLength} from 'class-validator'

class User7 {
	@IsNotEmpty({message: 'useId不能为空'})
	@MinLength(9, { message: '最小长度为8'})
	useId: string;

}

const u7 = new User7()

validate(u7).then(err => {
	console.log(err);
	
})