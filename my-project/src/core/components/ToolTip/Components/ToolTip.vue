<template>
  <div class="tooltip-box">
    <slot />
    <div class="tooltip" :class="[tooltipBgClass]" > 
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name:"ToolTip",
  props: { 
    text: {
      type: String,
      required: true
    },
    tooltipVariant:{
      type: String,
      required: false ,
      default:'blue'
    }
  } ,
  computed:{
    tooltipBgClass(){
       return `bg-${ this.tooltipVariant }`;
    }
  }
};
</script>

<style   scoped>
  .tooltip-box {
    position: relative;
  display: inline-block;
  }
  

.tooltip-box:hover .tooltip {
  
  opacity: 1

}
.tooltip{
   color: #ffffff ;
  padding: 20px;
  width : 353px;
  bottom: 100%;
  left :90%;
  margin-left: -10px;
  opacity: 0;
  transition: opacity 1s;
  position: absolute;
  z-index: 1;
  background-color: aqua;
}
 

</style>
