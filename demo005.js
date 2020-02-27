"use strict";
// 函数的三种定义方式
// 上一节是以参数形式来讲的
//函数声明法(常用)
// function add(n1:number,n2:number):number{
//   return n1+n2
// }
// console.log(add(1,2))
//函数表达式法
// 先声明一个变量，把这个函数赋值给变量
// 这个变量就是函数名
// 通过变量名就可以调用这个函数
// 注意：定义之后要调用，否则会报错
// var add = function(n1:number,n2:number):number{
//   return n1+n2
// }
// console.log(add(1,3))
// 箭头函数完全支持ES6
// 利于回调
// 函数都是有作用域的
// var add=(n1:number,n2:number):number=>{
//   return n1+n2 //this
// }
// console.log(add(3,5))
