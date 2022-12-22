<template>
  <h1>剩餘參數</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


//在要傳入的可選參數前加上？
export default defineComponent({
  name: 'restParameters',
  setup(){
    function rest(num1:number , ...args:number[]){
      console.log("num1:" , num1);
      console.log("args:" , args);
    }

    rest(1,2,3,4,5)
    return {
    }
  }
});
</script>
