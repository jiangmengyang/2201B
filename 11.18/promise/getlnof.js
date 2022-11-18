// 1.引入 fs模块
// const fs=Request('fs');
// // 3.使用Promise封装
// const p=new Promise(function(resolve,reject){
//     fs.readFile('./为学.md',(err,data)=>{
//         // 判断如果失败
//         if(err)reject(err);
//         // 如果成功
//         resolve(data)
//     })
// })
// p.then(function(value){
//     console.log(value.toString());
// },function(reason){
//     console.log('读取失败！');
// })


// 1.引入 fs模块
// const fs=Request('fs');
// // 3.使用Promise封装
// const p=new Promise(function(resolve,reject){
//     fs.readFile('./为学.md',(err,data)=>{
//         // 判断如果失败
//         if(err)reject(err);
//         // 如果成功
//         resolve(data)
//     })
// })
// p.then(function(value){
//     console.log(value.toString());
// },function(reason){
//     console.log('读取失败！');
// })



// 1.引入 fs模块
const fs=Request('fs');
// 3.使用Promise封装
const p=new Promise(function(resolve,reject){
    fs.readFile('./为学.md',(err,data)=>{
        // 判断如果失败
        if(err)reject(err);
        // 如果成功
        resolve(data)
    })
})
p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log('读取失败！');
})