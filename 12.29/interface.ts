/**接口
 * interface
 */
/***需求:定义一个人，包含他的详细信息: 姓名，年龄，工作,薪资，前任几个,前任叫啥，爱好
 *在添加定义一些东西: 身份证
 *特点: 相同名字的interface会合并  如果属性名相同，会以第一个接口名称定义为准
 *?非必传，可有可无
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
interface Person {
	idCat?: string;
}
let person: Person = {
	name: '小焦',
	age: 26,
	sex: 0,
	isJob: true,
	hobby: ['打球’，"爬山'],
	former: 4,
	formerName: ['a', 'v', 'c'],
};

interface Vegetables {
	color: string;
}
// interface Tomato {
// 	color: string;
// 	radius: number;
// }
// interface Carrot {
// 	color: string;
// 	length: number;
// }

interface Tomato extends Vegetables {
    radius: number;
}
    const carrot: Tomato = {
        color:"orange",
        radius: 1.2
    }