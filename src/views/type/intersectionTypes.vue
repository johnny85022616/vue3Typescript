<template>
<h1>交叉類型</h1>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';

export default defineComponent({
  name: 'intersectionTypes',
  setup() {
    interface BusinessPartner {
      name: string;
      credit: number;
    }

    interface Identity {
      id: number;
      name: string;
    }

    interface Contact {
      email: string;
      phone: string;
    }

    type Employee = Identity & Contact;
    type Customer = BusinessPartner & Contact;

    const e1: Employee = {  //交叉類型具有各交集屬性中的所有屬性
      id: 12345678 ,
      name: 'Johnny',
      email: 'a@gmail.com',
      phone: '0933444555'
    }

    console.log("employee1:",e1);
    return {}
  }
});
</script>
