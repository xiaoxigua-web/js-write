let xhr = new XMLHttpRequest()
xhr.open('get','http://www.baidu.com')
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status=== 200){
        let res = xhr.responseText
    }
}
xhr.send()