<template>
  <h1>函數</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'functionView',
  setup(){
    
    //陳述式
    function addString(str1:string,str2:string):string{
      return str1 + str2
    }
    console.log(addString('11','22'));

    //表達式寫法
    const addNum = function(num1:number,num2:number):number{
      return num1 + num2
    }

    console.log(addNum(11,22));

    //函數完整寫法
    const add3:(num1:number,num2:number)=>number = function(num1:number,num2:number):number{
      return num1 + num2
    }

    console.log(add3(1,2));
    return {
    
    }
  }
});
</script>
