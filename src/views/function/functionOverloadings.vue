<template>
  <h1>函數重載</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


//在要傳入的可選參數前加上？
export default defineComponent({
  name: ' functionOverloadings',
  setup(){
    // function add(x:string,y:string):string
    // function add(x:number,y:number):number  

    function add(x:string|number , y:string|number):string|number{
      if(typeof x === 'string' && typeof y === 'string'){
        return x+y
      }else if(typeof x === 'number' && typeof y === 'number'){
        return x+y
      }
      return "different type can't add "
    }

    console.log(add(1,'2')); //若不寫函數重載
    

    return {
    }
  }
});
</script>
