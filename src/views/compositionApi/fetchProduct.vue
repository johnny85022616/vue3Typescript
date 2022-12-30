<template>
  <div class="optionApi">
    <h1>vue3 typescript fetch practice</h1>
  </div>
  </template>
  
  <script setup lang="ts">
import {reactive} from 'vue';
  import {IProduct} from '../../types/product';

  // const productDetail = reactive<{}>({})   

 function getProductDetail():void{
    fetch('https://m.shopping.friday.tw/mobileapi/api/product/7995418/detail?cid=419485')
    .then(res => res.json())
    .then(data=>{
      console.log(data);
    })
  }
  
  getProductDetail()
  </script>
  
  <style lang="scss" scoped>
  .optionApi {
    span{
      border: 1px solid gray;
    }
  }
  </style>
  