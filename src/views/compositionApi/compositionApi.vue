<template>
<div class="optionApi">
  <personList :personList="personList"/>
</div>
</template>

<script lang="ts">
import {
  defineComponent, reactive
} from 'vue';
import Iperson from '../../types/person';
import personList from '../../components/compositionApi/personList.vue';
export default defineComponent({
  name: 'compisitionApi',
  components:{
    personList
  },
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
