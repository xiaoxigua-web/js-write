class Vue{
    constructor(options){
        let {el,data,methods} = options
        this.el = document.querySelector(el)
        this.data = data
        this.methods = methods
        this.init()
        this.showMap = new Map()
        this.domMap = new Map()
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
        let _childNodes = this.el.childNodes
        if(!_childNodes.length){
            return
        }
        _childNodes.forEach((dom)=>{
            if(dom.nodeType === 1){
                let domIf = dom.getAttribute('v-if')
                this.showMap.set(dom,{

                })

            }
        })
        console.log(c)

    }
    initEvent(){
        
    }
    initView(){
        
    }
}