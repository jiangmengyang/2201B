/**
type*
类型别名
特点: 1.赋值
      2.不能重复声明相同的类型别名
      3.可以定义基础数据类型和对象
*/
/**定义接口类型*/
type Persons = {
	name: string;
	age: number;
	sex: number;
	isJob: boolean;
	hobby: string[];
	former: number;
	formerName: [string, string, string];
};
type Personss = {
	isCar:string
};
/**定义基本类型 */
type Num = number
/**定义元组 */
type Tuple = [number,string, boolean]
/***定义数组 */
type Arrays = number[]
type Arravss = Array<number>
/**定义联合类型 */
type lian = Num | Tuple