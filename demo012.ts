// 面向对象-类的修饰符

// public 共有的
// protected 
// private

// class XiaoJieJie{
//   public sex:string
//   protected name:string
//   private age:number
//   public constructor(sex:string,name:string,age:number){
//     this.sex = sex
//     this.name = name
//     this.age = age
//   }
//   public sayHello(){
//     console.log('小哥哥')
//   }
//   protected sayLove(){
//     console.log('我爱你')
//   }
// }
// var jiejie:XiaoJieJie=new XiaoJieJie('女','亦舒',22)
// console.log(jiejie.sex)
// // console.log(jiejie.name)
// // console.log(jiejie.age)
// jiejie.sayHello()
// // jiejie.sayLove()

// 只读修饰符 readonly 不能改

//只读属性必须在声明属性时就直接给它赋值，不要给空，它会报错

// class Man{
//   public readonly sex:String='男'
// }
// var man:Man=new Man()
// //不能改,改的话会报错
// man.sex='女'