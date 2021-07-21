function MyInstanceof(a,A){
    if(typeof a !== 'object' || a === null) return
     a = a.__proto__
     A = A.prototype
    while(true){
        if(a === null){
            return false
        }
        if(a === A){
            return true
        }
        A = A.prototype
    }

}
let A = function(){}
let a = new A()

MyInstanceof(a,A)
console.log(MyInstanceof(a,A))