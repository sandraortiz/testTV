<template>
  <div class="tooltip-box">
    <slot />
    <div class="tooltip" :class="bgColorTooltip" :style="bgColorTooltisp"> 
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    text: {
      type: String,
      required: true
    },
    bgColorTooltip:{
      type: String,
      required: true
    }
  } ,
  computed:{
    bgColorTooltisp(){
      return {
       'background-color': this.bgColorTooltip
      }
    }
  }
};
</script>

<style  lang="stylus" scoped>
  @import "../Styles/main.styl"
  
</style>
