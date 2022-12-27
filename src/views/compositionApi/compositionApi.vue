<template>
<div class="optionApi">
  <personList :personList="personArr"/>
</div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import Iperson from '../../types/person';
import personList from '../../components/compositionApi/personList.vue';

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
        age: '22',
        salary: 20000
      },
    ])

</script>

<style lang="scss" scoped>
.optionApi {
  span{
    border: 1px solid gray;
  }
}
</style>
