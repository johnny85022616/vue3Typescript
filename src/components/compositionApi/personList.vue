<template>
<div class="personList">
  <ul>
    <li v-for="person in personList" :key="person.id">
      <p>{{person.name}}</p>
      <p>{{person.age}}</p>
      <p>{{person.salary}}</p>
    </li>
  </ul>
</div>
</template>

<script setup lang="ts">
import {PropType} from 'vue';
import Iperson from '../../types/person';

//<scriptlang= setup> 場景
const props = defineProps({
  personList:{
    required: true,
    type: Array as PropType<Iperson[]>
  }
})

console.log(props.personList); //若要在script中使用props還是需要寫成props.xxx
</script>

<style lang="scss" scoped>
li{
  display: flex;
  justify-content: space-between;
}
</style>
