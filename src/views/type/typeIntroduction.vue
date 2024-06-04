<template>
  <h1>類型</h1>
</template>

<script lang="ts" setup>

   //unknown
    let s: unknown
    let e = 'johnny';
    
    // e = s  //不可把unknow type 直接賦值給有給定型別的參數，必須藉由類型斷言
    e = s as string  

    //void
    function funcVoid(): void{
      return undefined // 可為undefined或不回傳
    }
    //never   
    function funcNever(): never{
      throw new Error('報錯了')
    }
    //object 
    let obj: {name: string , age?: number, [key:string]: any} //([key:string]: any ----> 代表任意類型的0個或多個物件屬性)
    obj = {name: '張三' , age: 55}
    obj = {name: "阿明"}
    obj = {name: "胖虎" , age: 33 , salary: 500000}

    //function(語法 (參數:類型,參數:類型 , ......) => 回傳類型)
    let f : (str1: number , str2: number) => number 
    f= function(a: number ,b: number){
      return a + b
    }
    console.log(f(1,2));
    
    // array 
    //語法1
    let arr: string[]
    //語法2
    // let arr: Array<string>
    arr = ['a' , 'b' , 'c']


    //tuple(語法[類型,類型,類型,])
    let tu :[number , string , number]
    tu = [20 , '張三' , 50]

    
    //enum (已知參數只有固定的幾個值)
    enum Gender{
      male,
      female
    }

    let person : {name: string , gender: Gender } = {name: 'johnny',gender: Gender.male}
    console.log(person);
    console.log(person.gender === Gender.male);
    
    
</script>
