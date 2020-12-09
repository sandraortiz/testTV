<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <ToolTip 
    bgColorTooltip="#0077E3"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptate exercitationem tenetur, odit unde ratione perferendis praesentium quo sint non voluptatum ea laudantium sit rerum maxime porro dicta ex voluptatem.">
      ToolTip
    </ToolTip>
    <button v-tooltip.top="{
  content: 'msgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
   }
  ">lorem</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {ToolTip} from '@/core/components/ToolTip'
export default {
  name: 'App',
  components: {
    HelloWorld ,
    ToolTip
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
