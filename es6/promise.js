const promise1 = new Promise((resolve,reject)=> reject())

const promise2 = promise1.then(function(){},function(){})

promise2.then(()=>{console.log('sucess')},()=>{console.log('error')})