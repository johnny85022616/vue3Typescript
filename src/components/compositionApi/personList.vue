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

<script lang="ts">
import {
  defineComponent, PropType
} from 'vue';
import Iperson from '../../types/person';
export default defineComponent({
  name: 'personList',
  props:{
    personList:{
      required: true,
      type: Array as PropType<Iperson[]>
    }
  },
  setup(){
    

    return {
      
    } 
  }
});
</script>

<style lang="scss" scoped>

</style>
