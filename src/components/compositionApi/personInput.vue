<template>
  <div class="personInput">
    <label>name</label><input type="text">
    <label>age</label><input type="number">
    <label>salary</label><input type="number">
  </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue';
import Iperson from '../../types/person';
  const id:number = new Date().getTime()
  // const person = reactive<Iperson[]>({
  //   id: id,
  //   name: '',
  //   age: 0,
  //   salary: 0
  // })
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  