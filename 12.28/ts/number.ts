/**
 *两个数相加
 **/
/**number**/

let num1: number = 1;
let num2: number = 1;

let sum: number = num1 + num2;

/**string**/
let str1: string = 'ts初始之路';
let str2: string = '希望疫情早日过去';
let str: string = str1 + str2;

/**bool */
let bool: boolean = true;
/**数组 array
第一种: number厦
第二种: Array<number>
js
new Array()
[]

数组特点: 元素类型是统一的，长度是不限的
*/
let array: number[] = [1, 1, 2, 34, 4];
let array1: string[] = ['1', '2', '32'];
let array2: boolean[] = [true, false];
let array3: Array<number> = [1, 2, 3, 4, 5];
let array4: Array<string> = ['1'];

/***元组 Tuple
 *概念:但是长度有限，元组组成的内容的属性 类型不是单一的
 */
// 错误写法 不能将类型“[number，string]”分配给类型'[number，string，boolean]'。源具有 2个元素，但目标需要 3个
// let tuple: [number,string,boolean] = [1,'2']
let tuple: [number, string, boolean] = [1, '2', true];

/**null undefind
 *概念:既为类型，又为值
 */
let a: null = null;
let b: undefined = undefined;

/**object的对象 */
declare function create(o: object | null): void;
create({ props: 0 });
//create(null)
//create(3222) // 类型"number"的参数不能赋给类型"obiect"的参数
//create("dddd") // 类型"string"的参数不能赋给类型"object"的参数
//create(undefined) // Error类型"undefined"的参数不能赋给类型"object  null"的参数
//简单
let obj: { name: string; age: number };
obj = { name: '小红', age: 13 };

/**any:任意类型
 * 特点: 在公司中慎用any，能不用就用
 * */
let name1: any = 'string';
name1 = 123;
/***200 400 401*/

enum CODE {
	SUCCESS = 200,
	ERROR = 500,
}
console.log(CODE.SUCCESS); // 200
console.log(CODE['SUCCESS']); //500
enum CODE1 {
	SUCCESS, // 0
	ERROR, // 1
	WARING, // 2
}
console.log(CODE1.ERROR); //0
console.log(CODE1['SUCCESS']); //1

enum CODE2 {
	SUCCESS, // 0
	ERROR, // 1
	WARING, // 2
}
console.log(CODE2['SUCCESS']); // 0
console.log(CODE2.ERROR); // 1
console.log(CODE2['WARING']); // 1

enum CODE3 {
	SUCCESS, // 0
	ERROR = '400', // 1
	WARING = '401',
}

/** void
 * */
function getName(name, age) {
	return name + age;
}
function getName1(name: string, age: number): void {
	console.log();
}
function getName2(name: string, age: number): string {
	return name + age;
}

/**interface
 *类似于对象:{} 代码块
 *接口的高阶用法
 */
interface Person {
	name: string;
	age: number;
	sex: number;
	isJob: boolean;
	hobby: string[];
	former: number;
	formerName: [string, string, string];
}

let person: Person = {
	name: '小焦',
	age: 26,
	sex: 0,
	isJob: true,
	hobby: ['打球 ', '爬山'],
	former: 4,
	formerName: ['a', 'v', 'c'],
};
