<template>
  <h1>接口(interface)</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'interfaceView',
  setup(){

    //---------------------------------描述對象屬性---------------------------------
    interface IPerson {
      firstName: string;
      lastName: string;
      age?: number  //加上?代表可選屬性(使用此interface的，)
      readonly job?: string //該值不可被修改
    }

    const person:IPerson = {
      firstName: 'johnny',
      lastName: 'chang'
    }

    const person1:IPerson = {
      firstName: 'mary',
      lastName: 'huang',
      age: 22
    }

    const person2:IPerson = {
      firstName: 'james',
      lastName: 'wang',
      age: 22,
      job: 'engineer'
    }


    function getFullName(p: IPerson):string{
      if(p.age){
        return p.firstName + "_" + p.lastName + " is " + p.age + " years old"
      }
      return p.firstName + "_" + p.lastName
    }

    const fullName:string = getFullName(person) 
    console.log("未傳入年齡: "+fullName);

    const fullName1:string = getFullName(person1) 
    console.log("有傳入年齡: "+fullName1);

    //person2.job = 'teacher'  //不可對有readonly的屬性做修改
    
    //---------------------------------描述方法屬性-----------------------------
      interface IstringFormat{
        (str: string, isUpper: boolean):string
      } 

      let uppperFormat:IstringFormat;

      uppperFormat = function(s:string , isUpper: boolean):string{  //參數名稱不一定要和interface定義的一樣，但型別要一樣
        return isUpper? s.toUpperCase() : s
      }
      console.log(uppperFormat("apple" , true));

      let lowerFormat: IstringFormat;
      lowerFormat = function (str: string) {  //定義方法時，參數若沒有interface中的屬性，但呼叫方法時有傳入該屬性，也是可以通過編譯的
        return str.toLowerCase();
      };
      console.log(lowerFormat('APPLE' , false));



    return {
    }
  }
});
</script>
