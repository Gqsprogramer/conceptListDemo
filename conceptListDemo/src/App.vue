<template>
  <router-view/>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import Demo from "./components/conceptBox.vue";
  
  export default defineComponent({
  components: {
    Demo,
  },
  });
  </script>