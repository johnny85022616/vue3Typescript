<template>
  <h1>dataModifiers(public、private、protected)</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'polymorphismView',
  setup(){
    //定義父類別
    class Animal { 
      name: string //預設為public
      private age: number //若為private修飾符，類外部無法訪問該數據(包含子類別)
      protected weight: number //若為protected修飾符，類外部無法訪問該數據但子類別可以訪問該數據
      constructor(name: string, age: number , weight: number){
        this.name = name 
        this.age = age
        this.weight = weight
      }
      run(distance = 5){
        console.log(`${this.name} run ${distance}km`);
      }
    } 


    //定義子類別
    class dog extends Animal{
      constructor(name: string , age:number ,weight:number){
        super(name,age,weight)
      }

      run(distance = 10){
        // console.log(this.age); //父類別設為private子類別也無法訪問
        console.log(this.weight); //父類別設為protected子類別可以訪問
      }
    }

    const animal = new Animal('dog', 4 ,3.7);
    animal.name //設為public外不可訪問
    // animal.age //設為private 外部無法訪問
    // animal.weight //設為protected 外部無法訪問
  }
});
</script>
