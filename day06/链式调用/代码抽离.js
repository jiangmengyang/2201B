// const fs=require('fs')
// function p(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('../链式调用0/桃花源记.md').then(res=>{
//     console.log(res.toString());
// }).then(()=>{
//     p('../链式调用0/出师表.md').then(res=>{
//         console.log(res.toString());
//     })
// }).then(()=>{
//     p('../链式调用0/出居庸关.md').then(res=>{
//         console.log(res.toString());
//     })
// })

// const fs=require('fs')
// function p(url){
//     return new Promise(function(resolve,reject){
//         fs.readFile(url,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// p('../链式调用0/桃花源记.md').then(res=>{
//     console.log(res.toString());
// }).then(()=>{
//     p('../链式调用0/出师表.md').then(res=>{
//         console.log(res.toString());
//     })
// }).then(()=>{
//     p('../链式调用0/出居庸关.md').then(res=>{
//         console.log(res.toString());
//     })
// })


const fs=require('fs')
function p(url){
    return new Promise(function(resolve,reject){
        fs.readFile(url,(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
p('../链式调用0/桃花源记.md').then(res=>{
    console.log(res.toString());
}).then(()=>{
    p('../链式调用0/出师表.md').then(res=>{
        console.log(res.toString());
    })
}).then(()=>{
    p('../链式调用0/出居庸关.md').then(res=>{
        console.log(res.toString());
    })
})