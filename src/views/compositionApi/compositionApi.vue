<template>
<div class="optionApi">
  <ul>
    <li v-for="item in personList" :key="item.id">name:{{item.name}} age:{{ item.age }} salary:{{ item.salary }}</li>
  </ul>
</div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, ref
} from 'vue';
import Iperson from '../../types/person';
export default defineComponent({
  name: 'compisitionApi',
  setup(){
    const personList = reactive<Iperson[]>([
      {
        id: 1,
        name: 'john',
        age: 18,
        salary: 8000
      },
      {
        id: 2,
        name: 'Marry',
        age: '22',
        salary: 20000
      },
    ])

    return {
      personList
    } 
  }
});
</script>

<style lang="scss" scoped>
.optionApi {
  span{
    border: 1px solid gray;
  }
}
</style>
