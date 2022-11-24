// const fs=require('fs')
// const getPeach=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('../链式调用0/桃花源记.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// const getTroops=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('../链式调用0/出师表.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// const getAgent=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('../链式调用0/出居庸关.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }


// const fs=require('fs')
// const getPeach=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('../链式调用0/桃花源记.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// const getTroops=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('../链式调用0/出师表.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// const getAgent=()=>{
//     return new Promise(function(resolve,reject){
//         fs.readFile('../链式调用0/出居庸关.md',(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }


const fs=require('fs')
const getPeach=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('../链式调用0/桃花源记.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
const getTroops=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('../链式调用0/出师表.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}
const getAgent=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('../链式调用0/出居庸关.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}