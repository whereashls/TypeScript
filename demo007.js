"use strict";
// 我们之前讲的都是值类型
// 比如给一个变量赋一个数值型的值
// 或者说给一个变量赋一个字符串
// 引用类型的数组 
// 类
// let person={
//   name:'hls',
//   age:'18',
//   skill:'web',
//   saySomething:function(){
//     console.log('不忘初心，砥砺前行')
//   }
// }
// console.log(person.name)
// person.saySomething()
// 数组---- array String Date RegExp
// 数组的初始化，也就是声明 下面是数组的两种声明方法
// let arr1:number[] //数值类型
// let arr2:Array<boolean>//数组类型变成了布尔类型
// 下面我们看看数组赋值的两种方式
// 1.字面量赋值法
// let arr1:number[]=[]
// let arr2:number[]=[1,2,3]
// let arr3:Array<string>=['香蕉','橘子','菠萝','草莓']
// let arr4:Array<boolean>=[true,false,false]
// 2.构造函数赋值法
// 构造函数:用new来赋值
// let arr1:number[]=new Array()
// let arr2:number[]=new Array(1,2,3)
// let arr3:Array<string>=new Array('香蕉','橘子','菠萝','草莓')
// let arr4:Array<boolean>=new Array(true,false,false)
// 注意:你声明了什么类型，就得赋予什么类型，否则会报错的
// 像下面这样写，是会报错的
// let arr5:number[]=[1,2,'W']
// 有一种特殊的数组叫做元祖
// 元祖可以在我们的ts中赋值两种类型
// 在开发中，元祖还是比较少用的
// let x :[string,number]
// // 正确赋值：一一对应
// x=['hello',10]
// // 错误赋值，不对应
// x=[10,'hello']
