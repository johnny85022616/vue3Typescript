<template>
  <h1>polymorphism(多態)</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'polymorphismView',
  setup(){
    //定義父類別
    class Animal {
      name: string
      constructor(name: string){
        this.name = name 
      }
      run(distance = 5){
        console.log(`${this.name} run ${distance}km`);
      }
    }

    class Dog extends Animal{
      constructor(name: string){
        super(name)
      }
      run(distance = 10){
        console.log(`${this.name} run ${distance}km`);
      }
    }

    class Cat extends Animal{
      constructor(name: string){
        super(name)
      }
      run(distance = 20){
        console.log(`${this.name} run ${distance}km`);
      }
    }
    
    //需求:某個方法要傳入cat或dog實例執行其中的run方法

    //方法1: 子類別不改變型態，方法傳入參數列出所有會傳入的可能
    // const dog:Dog = new Dog('dog')
    // const cat:Cat = new Cat('cat')
    // function showRun(ani: Cat|Dog){
    //   ani.run()
    // }

    //方法2:子類別利用多態(宣告為父類別型別)，方法傳入參數只需要定義父類別型別即可(方便)
    const dog:Animal = new Dog('dog')
    const cat:Animal = new Cat('cat')
    function showRun(ani: Animal){
      ani.run()
    }

    showRun(cat) //cat run 20km(保有子類別實例化時的數據)
    showRun(dog) //dog run 10km(保有子類別實例化時的數據)
    return {
    }
  }
});
</script>
