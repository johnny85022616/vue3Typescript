<template>
  <h1>類型斷言</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'typeAssertions',
  setup(){
    //使用場景為當型態為複合類型(ex: string|number)
    //與類型斷言的不同為函數重載是直接固定參數的傳入型別，而類型斷言為不管傳入的參數類別，等到傳入後再做型別的定義
    //需求:若參數為文字直接取得長度，若參數為數字則先轉換為文字再取得長度

    //---------------------------------原寫法-----------------------------------
    // function getLength(arg:string|number):number{
    //   if(arg.length){   //typescript在編譯時無法知道傳入的變數為甚麼類型故會報錯
    //     return arg.length
    //   }else{
    //     return arg.toString().length;
    //   }
    // }

    //------------------------------類型斷言寫法--------------------------------
    //類型斷言直接告訴typeScript該變數為甚麼類型
    function getLength(args:string|number):number{        
      if((args as string).length){ //若變數為string類型
        return (args as string).length
      }else{ //非string類型
        return args.toString().length 
      }
    }

    const l:number = getLength("abcd")
    console.log("length 'abcd' is",l);

    const l1:number = getLength(12345)
    console.log("length 12345 is",l1);


    return {
    }
  }
});
</script>
