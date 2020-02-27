// 面向对象编程-基础和重写

// 类必须有扩展能力

// 继承：允许我们创建一个类(子类)

// 从已有的类(父亲)上继承所有的属性和方法

// 子类可以新建父类中没有的属性和方法

// class Hls{
//   public name:string
//   public age:number
//   public skill:string
//   constructor(name:string,age:number,skill:string){
//     this.name = name
//     this.age =age
//     this.skill =skill
//   }
//   public interest(){
//     console.log('听歌')
//   }
// }
// let hlsObj:Hls = new Hls('离散',18,'coding')
// hlsObj.interest()

// class Cola extends Hls{
//     public xingxiang:string='魅力'
//     public zhuangQian(){
//       console.log('赚了一个亿')
//     }
// }

// let cola=new Cola('演员',3,'表演')
// cola.interest()
// cola.zhuangQian()

//ts不支持多重继承

//重写

// class Cola extends Hls{
//   public xingxiang:string='魅力'

//   public interest(){
//     super.interest()
//     console.log('建立电商平台')
//   }

//   public zhuangQian(){
//     console.log('赚了一个亿')
//   }
// }

// let cola=new Cola('演员',3,'表演')
// cola.interest()
// cola.zhuangQian()