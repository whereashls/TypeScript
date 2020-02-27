// 变量的作用域，函数划分

// function zhengXing():void{
//   var yangzi:string = '刘亦菲'
//   console.log(yangzi)
// }
// zhengXing()

// console.log(yangzi)
// 以上例子说明了，在函数体内，是封闭的
// 无论是全局声明，还是什么声明，都只在函数体内起作用
// 在外部，所以是不起作用的



// 什么是全局变量(函数体外声明的变量)
// 什么是局部变量(函数体内声明的变量)

// var yangzi:string = '刘亦菲'
// function zhengXing():void{

//   console.log('我的女神是'+yangzi)
// }
// zhengXing()

// console.log(yangzi)

// 小坑:重名会发生变量提升
// 当重名的时候，内部变量会起作用
// var yangzi:string = '刘亦菲'
// function zhengXing():void{
//   var yangzi:string = '黄圣依'
//   console.log('我的女神是'+yangzi)
// }
// zhengXing()

// console.log(yangzi)

// var yangzi:string = '刘亦菲'
// function zhengXing():void{
//   //当在函数体内未声明就使用，会显示undefined
//   console.log('我的女神是'+yangzi)
//   var yangzi:string = '黄圣依'
//   console.log('我的女神是'+yangzi)
// }
// zhengXing()

// console.log(yangzi)

// 其实上面那一段变量提升相当于
// var yangzi:string = '刘亦菲'
// function zhengXing():void{
//   var yangzi:string 
//   console.log('我的女神是'+yangzi)
//    yangzi = '黄圣依'
//   console.log('我的女神是'+yangzi)
// }
// zhengXing()

// console.log(yangzi)

// js早期只有局部变量和全局变量
// 但是比如我们的大众语言，java，c++
// 她们的变量都是以大括号{}为区域划分的

// 所以js经常被吐槽说，js不适合大型项目开发
// 因为很容易引起内存溢出
// 因为它没有变量作用域
// 划分只能靠函数来进行，是非常不方便的
// 所以在我们的ES6，就使用了let
// let关键字就可以声明函数的作用域是块级作用域

// function zhengXing():void{
//   var yangzia:string="朱茵"
//   {
//     var yangzib:string='巩俐'
//     console.log('我的女神是'+yangzib+'吗')
//   }
//   console.log('我的女神是'+yangzia+'吗')
//   console.log('我的女神是'+yangzib+'吗')
// }
// zhengXing()

// 因为它自动帮我们把let转译成了var








