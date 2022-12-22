<template>
  <h1>默認參數</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


//在要傳入的可選參數前加上？
export default defineComponent({
  name: 'optionalParameters',
  setup(){

    function address(address = '台北市'):string{
      return address
    }

    console.log("傳入參數為台中市:" , address('台中市'));
    console.log("沒有傳入參數使用默認參數台北市:" , address());
    return {
      
    }
  }
});
</script>
