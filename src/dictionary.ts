// 开发一个字典类（Dictionary)， 字典中保存键值对的数据；

/**
 * 键值对数据的特点： 
 * 键（key)可以是任何类型， 但不允许重复
 * 值（value)可以是任何类型
 * 
 * 每个键对应一个值： 所有的键类型相同， 所有的值类型相同
 * 
 * 字典类中对键值对数据的操作：
 * 按照键， 删除对应的键值对；
 * 循环每一个键值对
 * 得到当前键值对的数量
 * 判断某个键是否存在
 * 重新设置某个键对应的值， 如果不存在， 则添加；
 */



 type Callback<K, V> = (key: K, val:V) => void;

 export class Dictionary<K, V> {
	private keys: K[] = [];
	private vals: V[] = [];
	
	get size() {
		return this.keys.length;
	}

	// 重新设置某个键对应的值， 如果不存在， 则添加；
	set(key: K, val: V) {
		const i = this.keys.indexOf(key);

		if(i < 0) {
			this.keys.push(key);
			this.vals.push(val);
		}else{
			this.keys[i] = key;
			this.vals[i] = val
		}
	}
	// 循环每一个键值对
	forEach(callback: Callback<K, V>) {
		this.keys.forEach((k, i) => {
			const v = this.vals[i];
			callback(k, v);
		})
	}

	// 判断某个键是否存在
	has(key: K) {
		return this.keys.includes(key)
	}

	delete(key: K) {
		const i = this.keys.indexOf(key);

		if(i === -1) {
			return;
		}

		this.keys.splice(i, 1);
		this.vals.splice(i, 1)
	}


 }

 const dic = new Dictionary<string, number>()

 dic.set('a', 1);
 dic.set('b', 2)

dic.size

 dic.delete('a')



//  console.log(dic);

dic.forEach((k, v) => {
	console.log(k, v)
});


Map

 