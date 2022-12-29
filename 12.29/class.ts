/**es6之间的类 */
//声明人的类
class People {
    name: string
    age: number
    constructor(name:string,age){
        this.name = name
        this.age = age
    }
    sport():string{
        return `${this.name}会运动`
    }
}