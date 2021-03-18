class Vue{
    constructor(options){
        this.data = options.data
        new Observer(this.data)
        new Watcher()
    }
}

class Observer{
    constructor(data){
        console.log('observer')
        for(let key in data){
            this.defineReactive(data,key,data[key])
        }
    }
    defineReactive(obj,key,value){
        let dep = new Dep()
        Object.defineProperty(obj,key,{
            enumerable:true,
            get(){
                dep.addSubs(Dep.target)
                return value
            },
            set(newValue){
                dep.notify()
                value = newValue
            }  
        })
    }

}
class Dep{
    constructor(){
        this.subs = []
    }
    addSubs(sub){
        this.subs.push(sub)
    }
    notify(){
        this.subs.forEach((sub)=>{
            sub.update()
        })
    }
}

class Watcher{
    constructor(){
        Dep.target = this
    }
    update(){
        console.log('更新视图')
    }
}

