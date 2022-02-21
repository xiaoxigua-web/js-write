const fs = require('fs');
const path = require('path');
const babylon = require('babylon');
const traverse = require('babel-traverse').default  //让你遍历对象一样遍历语法树

let ID = 0
function createAsset(filename){
  console.log('filename', filename)
   const content = fs.readFileSync(filename, 'utf8');
  //  获取内容

   const ast = babylon.parse(content,{
     sourceType:'module'
   })
  //  生成ast

  const dependencies = []

  //遍历这个AST
  traverse(ast,{
    ImportDeclaration:({node})=>{
      // console.log(node)
      dependencies.push(node.source.value)
    }
  })
  const id = ID++
  return {
    id,
    filename,
    dependencies
  }

}


// const mainAsset = createAsset('./source/entry.js')
// console.log(mainAsset)

/* 分析AST 如何解析出entry.js的依赖
ImportDeclaration 引入的声明  source属性 source.value 就是引入的文件的地址
生成entry.js的AST
基于AST 找到entry.js 的 ImportDeclaration Node

id标识文件 输出id filename
*/

//新增函数 createGraph 把createAsset调入create

function createGraph(entry){
   const mainAsset = createAsset(entry)
   console.log(mainAsset)
   const allAsset = [mainAsset]

   for(let asset of allAsset){
      const dirname = path.dirname(asset.filename)
      console.log(dirname,'dirname')

      asset.mapping = {}
      asset.dependencies.forEach(relativePath =>{
        const absolutePath = path.join(dirname, relativePath)
        console.log('absolutePath',absolutePath)

        const childAsset = createAsset(absolutePath)
        asset.mapping[relativePath] = childAsset.id
        allAsset.push(childAsset)
      })
   }
   return allAsset
}

const graph = createGraph('./source/entry.js')
console.log(graph)

//转为绝对路径 

//需要一个map记录
