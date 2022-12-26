<template>
<div class="optionApi">
  <p>{{name}}</p>
  <p>{{age}}</p>
  <span @click="changeName('Mary')">changeName</span>
  <span @click="changeAge('23')">changeAge</span>
</div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'optionApi',
  data() {
    return {
      name: 'John',
      age: 18 as number|string
    }
  },
  methods: {
    changeName(str: string) {
      this.name = str
    },
    changeAge(age: string|number) {
      this.age = age
      return age
    }
  },
});
</script>

<style lang="scss" scoped>
.optionApi {
  span{
    border: 1px solid gray;
  }
}
</style>
