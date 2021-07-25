

function MatchArgs(fn){
    return function(...args){
        if(args.length !== fn.length){
            throw RangeError('error')
        }else{
            // return fn.apply(this,args)
            return fn(args)
        }

    }
}

var a = MatchArgs((a,b)=>{return a+b})
a(1,2)


function deepClone(obj){
    let o = {}
    for(let key in obj){
        o[key] = typeof obj[key]  === 'object'? deepClone(obj[key]) : obj[key] 
    }
    return o
}