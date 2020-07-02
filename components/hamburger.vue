<template>
    <a href="javascript:" :title="MenuShowing ? $t('navMenuCollapse') : $t('navMenuExpand')" @click="ShowMenu" @key.space.prevent="ShowMenu" :class="[{'is-active':MenuShowing},'ui-hamburger-02']">
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span class="v-inv" v-if="MenuShowing">{{$t('navMenuCollapse')}}</span>
      <span class="v-inv" v-else>{{$t('navMenuExpand')}}</span>
    </a>
</template>
<style type="text/css" scoped>
.ui-hamburger-02 {
  /*top:.5em;*/
  width: 25px;
  height: 20px;
  border: none;
  position: relative;
  background: linear-gradient(to bottom, #4D4D4D, #4D4D4D);
  background-size: 100% 20%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-size 0.2s 0.25s ease;
  cursor: pointer;
  text-decoration: none;
}
.ui-hamburger-02:before,
.ui-hamburger-02:after {
  height: 20%;
  width: 100%;
  position: absolute;
  left: 0;
  background-color: #4D4D4D;
  content: '';
  transition: transform 0.3s ease;
}
.ui-hamburger-02:before {
  top: 0;
  transform-origin: 91% 150%;
}
.ui-hamburger-02:after {
  bottom: 0;
  transform-origin: 84% -50%;
}
.ui-hamburger-02.is-active {
  background-size: 0 20%;
  transition-delay: 0s;
}
.ui-hamburger-02.is-active:before {
  transform: rotate(-45deg);
  transition-delay: 0.15s;
}
.ui-hamburger-02.is-active:after {
  transform: rotate(45deg);
  transition-delay: 0.15s;
}

</style>
<script type="text/javascript">
export default {
  props:{
    MenuShowing:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    ShowMenu(){
      //this.MenuShowing=!this.MenuShowing
      this.$emit('menu-toggle')
    }
   

  }
}
</script>
<i18n>
  {
    "en":{
    "navMenuCollapse":"Collapse Navigation Menu",
    "navMenuExpand":"Expand Navigation Menu"
  },
    "fr":{
    "navMenuCollapse":"Réduire le menu de navigation",
    "navMenuExpand":"Développer le menu de navigation"
  }
  }
</i18n>