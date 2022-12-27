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
</script>

<style lang="scss" scoped>

</style>
