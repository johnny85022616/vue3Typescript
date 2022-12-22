<template>
  <h1>可選參數</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


//在要傳入的可選參數前加上？
export default defineComponent({
  name: 'optionalParameters',
  setup(){

    function fullName(firstName:string, lastName?:string):string{
      if(lastName){
        return `${firstName}_${lastName}`
      }else{
        return firstName
      }
    }

    console.log('傳入firstName和lastName:',fullName('chang',"yu"));
    console.log('只傳入firstName:',fullName('chang'));
    return {
      
    }
  }
});
</script>
