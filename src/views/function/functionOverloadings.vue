<template>
  <h1>函數重載</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/* eslint-disable */
//函數重載(函數名字相，參數型態及個數不同)
//與類型斷言的不同為函數重載是直接固定參數的傳入型別，而類型斷言為不管傳入的參數類別，等到傳入後再做型別的定義
export default defineComponent({
  name: ' functionOverloadings',
  setup(){

    //函數重載
    function add(x:string,y:string):string
    function add(x:number,y:number):number  
    //函數聲明
    function add(x:string|number , y:string|number):string|number{
      if(typeof x === 'string' && typeof y === 'string'){
        return x+y
      }else if(typeof x === 'number' && typeof y === 'number'){
        return x+y
      }
      return "different type can't add"
    }

    // console.log(add(1,'2')); //不符合函數重載定義則會列出警告(若沒寫函數重載不會列出警告)
    console.log(add(1,2)); //符合函數重載聲明
    console.log(add("1","2")); //符合函數重載聲明
    

    return {
    }
  }
});
</script>
