var A = {
    print: function () {
      console.log('hello');
    }
  };
  
  // 实例对象
  var B = Object.create(A);
  
  Object.getPrototypeOf(B) === A // true
  B.print() // hello
  B.print === A.print // true

  console.log( B.__proto__ === A )

var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);



console.log(Object.getPrototypeOf(o3) === o1)