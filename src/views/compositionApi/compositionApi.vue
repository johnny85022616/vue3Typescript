<template>
<div class="optionApi">
  <h1>vue3 typescript CRUD</h1>
  <personInput @addPerson="addPerson"/>
  <personList :personList="personArr" @deletePerson="deletePerson"/>
</div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import Iperson from '../../types/person';  //不需再需要再寫在components:{}中，template可以直接引用
import personList from '../../components/compositionApi/personList.vue';
import personInput from '../../components/compositionApi/personInput.vue';

  const personArr = reactive<Iperson[]>([
    {
      id: 1,
      name: 'john',
      age: 18,
      salary: 8000
    },
    {
      id: 2,
      name: 'Marry',
      age: 22,
      salary: 20000
    },
    {
      id: 3,
      name: 'Jack',
      age: 10,
      salary: 0
    },
  ])

  function addPerson(person: Iperson){
    personArr.push(person)
  }
  function deletePerson(index: number){
    personArr.splice(index , 1)
  }

  fetch('https://m.shopping.friday.tw/mobileapi/api/product/7995418/detail?cid=419485')
  .then(res => res.json())
  .then(data=>{
    console.log(data);
  })

</script>

<style lang="scss" scoped>
.optionApi {
  span{
    border: 1px solid gray;
  }
}
</style>
