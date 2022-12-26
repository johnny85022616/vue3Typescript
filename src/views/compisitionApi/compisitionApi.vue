<template>
<div class="optionApi">
  <p>{{name}}</p>
  <p>{{age}}</p>
  []
</div>
</template>

<script lang="ts">
import {
  defineComponent, ref
} from 'vue';

export default defineComponent({
  name: 'compisitionApi',
  setup(){
    const name = ref('John')
    const age = ref<number|string>('22')

    return {
      name,
      age,
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
