/**
 *两个数相加
 **/
/**number**/
var num1 = 1;
var num2 = 1;
var sum = num1 + num2;
/**string**/
var str1 = 'ts初始之路';
var str2 = '希望疫情早日过去';
var str = str1 + str2;
/**bool */
var bool = true;
/**数组 array
第一种: number厦
第二种: Array<number>
js
new Array()
[]

数组特点: 元素类型是统一的，长度是不限的
*/
var array = [1, 1, 2, 34, 4];
var array1 = ['1', '2', '32'];
var array2 = [true, false];
var array3 = [1, 2, 3, 4, 5];
var array4 = ['1'];
/***元组 Tuple
*概念:但是长度有限，元组组成的内容的属性 类型不是单一的
*/
// 错误写法 不能将类型“[number，string]”分配给类型'[number，string，boolean]'。源具有 2个元素，但目标需要 3个
// let tuple: [number,string,boolean] = [1,'2']
var tuple = [1, '2', true];
/**null undefind
*概念:既为类型，又为值
*/
var a = null;
var b = undefined;
create({ props: 0 });
//create(null)
//create(3222) // 类型"number"的参数不能赋给类型"obiect"的参数
//create("dddd") // 类型"string"的参数不能赋给类型"object"的参数
//create(undefined) // Error类型"undefined"的参数不能赋给类型"object  null"的参数
//简单
var obj;
obj = { name: '小红', age: 13 };
/**any:任意类型
 * 特点: 在公司中慎用any，能不用就用
 * */
var name1 = "string";
name1 = 123;
/***200 400 401*/
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["ERROR"] = 500] = "ERROR";
})(CODE || (CODE = {}));
console.log(CODE.SUCCESS); // 200
console.log(CODE['SUCCESS']); //500
var CODE1;
(function (CODE1) {
    CODE1[CODE1["SUCCESS"] = 0] = "SUCCESS";
    CODE1[CODE1["ERROR"] = 1] = "ERROR";
})(CODE1 || (CODE1 = {}));
console.log(CODE1.ERROR);
console.log(CODE1['SUCCESS']);
