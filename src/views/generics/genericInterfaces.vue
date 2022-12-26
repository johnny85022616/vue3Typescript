<template>
  <h1>泛型接口</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'genericInterfaces',
  setup(){
    
    //單個類型變量的對象泛型
    interface IName<T>{
      name: T
    }

    const personName :IName<string> = {
      name: 'John'
    }

    console.log(personName);

    //多個類型變量的對象泛型
    interface IPerson<T,V> {
      name: T , 
      age: V
    }
  
    const person:IPerson<string,number> = {
      name: 'Mary',
      age: 18
    }

    console.log(person);

    return {
    }
  }
});
</script>
