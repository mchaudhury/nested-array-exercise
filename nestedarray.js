let myArr = [[1],[2],[3],[4],[5] ];

console.log(myArr);

console.log(myArr[0][0]);
console.log(myArr[1][0]);
console.log(myArr[2][0]);
console.log(myArr[3][0]);
console.log(myArr[4][0]);

for (let i = 0; i<myArr.length; i++){
  let value = myArr[i][0];
  if (value % 2 === 0){
    console.log('It is even');
  }else{
    console.log('It is odd');
  }
  
}