// 面向对象编程-命名空间

// TSLint

// 让变量之间互不干扰

namespace shuaiGe{
  export class Dehua{
    public name:string = '刘德华'
    talk(){
      console.log('我是歌手兼演员刘德华')
    }
  }
}

namespace bajie{
  export class Dehua{
    public name:string = '马德华'
    talk(){
      console.log('我是马德华')
    }
  }
}

let dehua1:shuaiGe.Dehua=new shuaiGe.Dehua()
let dehua2:bajie.Dehua=new bajie.Dehua()
dehua1.talk()
dehua2.talk()