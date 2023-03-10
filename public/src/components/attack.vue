<template>
    <div>
      <title>{{ attack.name }}</title>
    </div>
  </template>
  
  <script>
  import Vue from 'vue'
  import Component from 'vue-class-component'
  
  @Component
  export default class Attack extends Vue {
    attack = {
        name: "Crazy Attack",
        damage: 15,
    }
  }
  </script>