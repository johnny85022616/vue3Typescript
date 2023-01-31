<template>
  <h1>class(類)</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'classView',
  setup(){

    // ---------------------------------class與class的繼承關係---------------------------------
    class P {
      name: string
      age: number
      gender: string

      constructor(name: string, age: number, gender: string){
        this.name = name 
        this.age = age
        this.gender = gender
      }

      sayHi(str: string){
        console.log(`my name is ${this.name} , ${this.age} years old , is a ${this.gender} , ${str}`);
      }
    }

    let p = new P('John',20,'boy');
    p.sayHi('hello everyone')

    class S extends P {
      constructor(name: string, age: number, gender: string){
        super(name , age , gender) //調用父類別建構子
      }
      //override父類別方法
      sayHi(){ 
        console.log('子類別override父類別方法');
      }
      //呼叫父類別方法
      callFatherSayHi(){
        super.sayHi('fuck you')
      }
    } 

    const s = new S('Mary', 33 , 'girl');
    s.sayHi()
    s.callFatherSayHi()

    // ---------------------------------class與interface的關係---------------------------------
    /*
      接口和接口之間為繼承(extends)
      類和接口之間為實現(implements)
    */
    
    //定義一個接口
    interface IEat {
      eat():void
    }
    interface ITeach{
      teach():void
    }
    //一個類被一個接口所約束
    class Person implements IEat{
      eat(){ //實作該接口的方法
        console.log('i can eat');
      }
    }
    //實例化一個類
    const person = new Person()
    person.eat();

    //一個類被多個接口所約束
    class Teacher implements IEat,ITeach{
      eat(): void {
        console.log('I can eat');
      }
      teach(): void {
        console.log('I can teach student');  
      }
    }
    //實例化一個類
    const teacher = new Teacher();
    teacher.eat();
    teacher.teach();

    //接口繼承其他接口
    interface IEatAndSwim extends IEat,ITeach{}

    class Professor implements IEatAndSwim{
      eat(){
        console.log('professor can eat');
      }
      teach(): void {
          console.log('professor can teach');
      }
    }
    
    const professor = new Professor();
    professor.eat();
    professor.teach();

    return {
    }
  }
});
</script>
