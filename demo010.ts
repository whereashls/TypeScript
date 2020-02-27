// 10 引用类型的正则表达式

// RegExp 和字符串很像

//1.构造函数声明法
// let reg1:RegExp=new RegExp("helloworld")
// console.log(reg1)
// let reg2:RegExp=new RegExp("helloworld",'gi')
// console.log(reg2)


//2.字面量声明
// let reg11:RegExp=/helloworld/
// console.log(reg11)
// let reg22:RegExp=/helloworld/gi
// console.log(reg22)

// 正则表达式常用的两个方法
//i:忽略大小写
// test(string) exec(string)
// let reg1:RegExp=/helloworld/i
// let website:string='helloworld.com'
// let result1:boolean=reg1.test(website)
// console.log(result1)

let reg1:RegExp=/helloworld/i
let website:string='helloworld.com'
// let result1:boolean=reg1.test(website)
console.log(reg1.exec(website))


