<template>
  <h1>泛型</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//在定義函數、接口、類的時候不能預先確定要使用的數據類型，在呼叫函數時才定義類型
export default defineComponent({
  name: 'genericsView',
  setup(){
    //需求:能接收兩個參數，並且做加總(對number類型)
    function getNumberArr(num:number, count:number):number[]{
      let arr: number[] = []
      for(let i=0 ; i<=count ; i++){
        arr.push(num)
      }
      return arr
    }
    console.log(getNumberArr(1,3));

    //需求:能接收兩個參數，並且做加總(對number類型)
    function getStringArr(num:string, count:number):string[]{
      let arr: string[] = []
      for(let i=0 ; i<=count ; i++){
        arr.push(num)
      }
      return arr
    }
    console.log(getStringArr('1',3));

    //問題: 函數功能類似但傳入參數不同導致要全部重寫
    //解法: 1.使用泛型 2.使用any(不建議)
    function getStringArrByGenerics<T>(num:T, count:number):T[]{
      let arr: T[] = []
      for(let i=0 ; i<=count ; i++){
        arr.push(num)
      }
      return arr
    }
    console.log(getStringArrByGenerics<string>("3",3));  //設定為string類型
    console.log(getStringArrByGenerics<number>(3,3));  //設定為number類型 

    //多個泛型參數的函數
    function getMsgArr<T,V>(arg1:T , arg2:V):[T,V]{
      return [arg1 , arg2]
    }

    console.log(getMsgArr<string, number>('你好', 100));

    return {
    }
  }
});
</script>
