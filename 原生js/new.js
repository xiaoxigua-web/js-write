function New(){
    let obj = {}
    let Constructor = [].shift.call(arguments)
    console.log(Array.isArray(arguments))
    obj.__proto__ = Constructor.prototype
    console.log('arguments',arguments)
    // let result = Constructor.apply(obj,arguments)
    let result = Constructor.apply(obj,{0:1,length:1})
    return obj
}

function Test(value){
    this.value = value
}

let a = New(Test,12)
let b = Test.apply({},{})
console.log(a.value,b)