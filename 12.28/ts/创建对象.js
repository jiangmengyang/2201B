// 第一种
// //创建 Object 对象
// var p = new Object()

// //动态添加属性和方法
// p.name = 'Tom'
// p.age = 18
// p.setName = function(name){
// 	this.name = name 
// }
//

// 第二种
// var p = {
//     name = 'Tom'
//     age = 18
//     setName: function (name) {
//         this.name = name
//     }
// }

// 第三种
// function createPerson(name,age){
// 	var obj = {
// 		name: name,
// 		age: age,
// 		setName: function(name){
// 		this.name = name
// 		}
// 	}
// 	return obj
// }

// var p1 = createPerson('Tom',18)


// 第四种
// function Person(name, age){
// 	this.name = name
// 	this.age = age
// 	this.setName = function(name){
// 		this.name = name
// 	}
// }

// var p1 = new Person('Tom',18)


// 第五种
function Person(name, age){
	this.name = name
	this.age = age
}

Person.prototype.setName = function(name){
	this.name = name
}

var p1 = new Person('Tom',18)


