let {length} = ['111']
console.log(length) 

// 狗屁专栏说自执行函数 定时器函数 里面this一定是window 狗屁

let obj = {
    a:'1',
    b:function(){
        setTimeout(function(){  //这里如果是箭头函数 this就是obj
            console.log(this)
        },1000)
    }
}
obj.b()