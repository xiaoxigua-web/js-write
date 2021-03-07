class Vue{
    constructor(options){
        let {el,data,methods} = options
        this.el = document.querySelector(el)
        this.data = data
        this.methods = methods
        this.init()
        this.showMap = new Map()
    }
    init(){
        this.initData(this.data)
        this.initDom()
        this.initEvent()
        this.initView()
    }
    initData(data){
        for(let key in data){
            Object.defineProperty(this,key,{
                get(){
                    console.log('get')
                    return data[key]
                },
                set(newValue){
                    data[key] = newValue
                }
            })

        }
        console.log(this,'this')


    }
    initDom(){
        let c = this.el.childNodes
        console.log(c)

    }
    initEvent(){
        
    }
    initView(){
        
    }
}