function Maxget(fn,time){

    return new Promise((resolve,reject)=>{
        if(time === 0){
            reject('xxx')
            return
        }
        Promise.resolve(fn()).then().catch(()=>{
            return Maxget(fn,time-1)
        })
    })
}

let o1 = {
    a:2,
    b:3
}

let o2 = {
    c:2,
    d:3
}
let o = Object.assign(o1,o2)

o1.a  = 5

console.log(o)