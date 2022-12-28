<template>
  <div class="personInput">
    <label>name</label><input type="text" v-model="person.name">
    <label>age</label><input type="number" v-model="person.age">
    <label>salary</label><input type="number" v-model="person.salary">
    <button @click="addPerson">新增</button>
  </div>
  </template>
  
<script setup lang="ts">
import { reactive } from 'vue';
import Iperson from '../../types/person';

const emit = defineEmits(['addPerson'])
const person = reactive<Iperson>({
  id: undefined,
  name: '',
  age: null,
  salary: null
})
async function addPerson(){
  if(person.name && person.age && person.salary){
    const id: number = new Date().getTime()
    person.id = id
    emit('addPerson' , JSON.parse(JSON.stringify(person)))
    person.name = ''
    person.age = null
    person.salary = null
  }else{
    alert('請填寫')
  }
}
</script>

<style lang="scss" scoped>

</style>
  