/**es6之间的类 */
//声明人的类
class People {
    // 类的属性
    constructor(props) {
        super(props)
        this.name = props.name
        this.age = props.age
    }
    //类的方法
    sport() {
        return this.name + '会运动'
    }
}
let p = new People('小明', 18)
console.Log(p.sport()); //小明会运动

class Animal {
    name: string;
    constructor(name) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}
let d = new Dog('哈士奇');
console.log(d.name); // 哈士奇console.log(d.getName());// 哈士奇