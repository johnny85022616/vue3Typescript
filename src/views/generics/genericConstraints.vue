<template>
  <h1>泛型約束</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'genericConstraints',
  setup(){
    //場景：如果我們對一個泛型參數使用某個類型的類型方法(ex: length) compile會報錯，因為編譯時並不知道該泛型爲什麼類型
    //解決：泛型約束

    //未用泛型約束寫法
    // function getLength<T>(x:T):number {
    //   return x.length  //ｘ有可能為任何傳入型別，但不一定任何型別都有length屬性所以會報錯
    // }

    //使用泛型約束寫法

    interface ILength {
      length: number
    }

    function getLength<T extends ILength>(x:T):number{  //該泛型extends某個interface，若傳入的屬性具有該interface定義的屬性則不會報錯;若傳入的型別沒有該interface定義的屬性則會報錯
      return x.length
    } 

    // const l = getLength<numbrt>(1234567)  //number不具有length屬性故報錯
    const l1 = getLength<string>("123456") //string具有length屬性故不報錯
    console.log(l1);
    
    return {
    }

  }
});
</script>
