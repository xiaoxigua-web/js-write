class Vue {
    constructor(el,data){
        this._data = data
        this.el = document.querySelectorAll(el)
        this.init()
    }
    init(){
        this.initData()
    }
    initData(){
        this.data = {}
        let _this = this
        for(let key in this._data){
            console.log(key,this._data)
            Object.defineProperty(this.data,key,{
                get(){
                    console.log('ss',_this)
                    return _this._data[key]
                },
                set(newValue){
                    console.log('更改视图')
                    _this._data[key] = newValue
                }
            })
        }
         console.log(this.data)
         this.data.tel = 1234
    }
}