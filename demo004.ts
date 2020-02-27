// npm tac watch:自动构建

// 函数定义：
// 把功能相近的需求封装成一个独立的代码块
// 然后每次传入不同的变量
// 变量不同，所以呈现的结果就不同

// function searchXiaoJieJie(age:number):string {

//   return '找到了'+age+'岁的小姐姐'
// }

// var age:number = 18;

// var result:string=searchXiaoJieJie(age)

// console.log(result)

// 要注意的地方
// 1.必须用function这个关键字来定义一个函数
// 2.函数名与变量名是一样的(都需要遵循加类型的规则)
// 3.函数的参数可有可无
// 4.如果参数有多个，用逗号隔开

// 形参(形式上的参数)和实参(真实传递的参数)

// 可选参数的函数
// function searchXiaoJieJie(age:number,status?:string):string {
//   let yy:string=''
//   yy='找到了'+age+'岁'
//   if(status!=undefined){
//     yy = yy +status
//   }
//   return yy+'的小姐姐'
// }

// var result:string=searchXiaoJieJie(22,'大长腿')

// console.log(result)

// 有默认参数的函数

// function searchXiaoJieJie(age:number=18,status:string='小蛮腰'):string {
//   let yy:string=''
//   yy='找到了'+age+'岁'
//   if(status!=undefined){
//     yy = yy +status
//   }
//   return yy+'的小姐姐'
// }
// // var result:string=searchXiaoJieJie()
// var result:string=searchXiaoJieJie(22,'大长腿')

// console.log(result)

// 有剩余参数的函数

// 当我们的需求是不确定的，我们可以这样写
function searchXiaoJieJie(...xuqiu:string[]):string {
  let yy:string='找到了'
  for(let i=0;i<xuqiu.length-1;i++) {
    yy = yy +xuqiu[i]
    if(i<xuqiu.length){
      yy = yy + '、'
    }
  }
  yy=yy+'的小姐姐'
  return yy
}
var result:string=searchXiaoJieJie('22岁','大长腿','瓜子脸','小蛮腰')

console.log(result)