function forEach(arr,fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

let arr = [1,2,3,4,5,6,7,8,9,10];

forEach(arr,(item)=>{
  console.log(item)
})