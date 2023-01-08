<template>
  <div class="product">
    <h1>vue3 typescript fetch practice</h1>
    <div class="product__item">
      <!-- <p>品名:{{ productJson.data[0].name }}</p>
      <p v-html="productJson.data[0].intro"></p> -->
      <p>{{ productJson }}</p>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { getProduct } from '@/api/product/productDetail';
import { reactive } from 'vue';
import { IProduct } from '../../types/product';


let productJson = reactive<IProduct>({})   

async function getProductDetail(): Promise<void> {
  const product = await getProduct()
  productJson = product
  console.log(product , productJson);
}

await getProductDetail()
</script>
  
<style lang="scss" scoped>
.product{
  &__item{
    border: 1px solid gray;
    padding: 20px;
  }
}
</style>
  