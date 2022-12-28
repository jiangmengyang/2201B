/**
*交叉类型
*/
interface use {
name: string,
age: number
}
interface per {
    sex: number
}
type allIno = use & per
let persion: allInfo = {name: "xxxx",age: 1,sex:1}

/**
* 联合类型
*/
let allType: number | string
allType = 1;
allType = "eddd"
// 不能将类型"boolean"分配给类型"string  number"
//allType = false

/** 类型断言
 */
let someValue: any;
someValue = 123;
someValue = "dddd";
let someValueLength = (<string>someValue).length

/**第二种 作为as进行编写
 */
let someName: any;
someName = 123
someName = '123'
let someNameValueLength = (someName as string).length