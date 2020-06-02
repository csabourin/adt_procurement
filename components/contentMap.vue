<template>
  <nav class="contentMap" role="navigation">
    <transition appear mode="out-in" name="fade">
    <div v-if="currentState">
    <span ref="item"><h4 class="colorBar1">{{$t('plan')}}</h4></span>    
    <menu style="list-style: none">
      <li role="menuitem">
        <nuxt-link :to="localePath('planKey')" v-html="$t('KeyMessagesPlan')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('buildWP')" v-html="$t('BuildWorkPlan')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('createBudget')" v-html="$t('CreateBudget')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('exam1')" v-html="$t('TestPlan')" />
      </li>
    </menu>
    <h4 class="colorBar2">{{$t('spend')}}</h4>
    <menu style="list-style: none">
      <li role="menuitem">
        <nuxt-link :to="localePath('spendKey')" v-html="$t('KeyMessagesSpend')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('spendPart1')" v-html="$t('InitiateAuthorizeSpending')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('spendPart2')" v-html="$t('ExerciseFinancialAuthority')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('spendPart3')" v-html="$t('MonitorControlFinances')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('exam2')" v-html="$t('TestSpend')" />
      </li>
    </menu>
    <h4 class="colorBar3">{{$t('report')}}</h4>
    <menu style="list-style: none">
      <li role="menuitem">
        <nuxt-link :to="localePath('reportKey')" v-html="$t('KeyMessagesReport')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('reportPart1')" v-html="$t('ConductPeriodicVarianceReporting')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('reportPart2')" v-html="$t('ContributeReporting')" />
      </li>
      <li role="menuitem">
        <nuxt-link :to="localePath('exam3')" v-html="$t('TestReport')" />
      </li>
    </menu>
    </div>
    <div v-else @click="setParentOpen">
      <h6 class="colorBar1">{{$t('plan')}}</h6>
      <h6 class="colorBar2">{{$t('spend')}}</h6>
      <h6 class="colorBar3">{{$t('report')}}</h6>
    </div></transition>
  </nav>
</template>
<script type="text/javascript">
  export default{
    props:{
      currentState: { type: Boolean, default: false }
    },
    methods:{
      setParentOpen(){
        this.$emit('menu-toggle')
      },
      setAriaCurrent() {
        this.$nextTick(function() {
          let app = this.$el,
            currents = app.querySelectorAll("[aria-current]");
          if (currents) {
            currents.forEach(current => {
              current.removeAttribute("aria-current");
            });
          }
          app.querySelectorAll(".contentMap .nuxt-link-exact-active").forEach(current => {
            current.setAttribute("aria-current", "page");
          });
        });
      }
    },
    mounted(){
      this.setAriaCurrent();
    }
  }
</script>
<style type="text/css" scoped>
.contentMap {
  background-color: #fff;
  box-shadow: 4px 4px 8px #888;
  padding: 0;

  height:100%;
  color:#4d4d4d;
}

.contentMap a {
  color: #000;
  width:100%;
  display: inline-block;
  padding:4px 16px;
  border-left-width-width:0px;
  border-left-style: solid;
  border-left-color:transparent;
}
.contentMap a.nuxt-link-exact-active {
  background-color:#f0f0f0;
  border-left-width:4px;
  padding:4px 16px 4px 15px;
}
.contentMap menu:nth-of-type(1) a.nuxt-link-exact-active {border-left-color:#587C84;}
.contentMap menu:nth-of-type(2) a.nuxt-link-exact-active {border-left-color:#7D677D;}
.contentMap menu:nth-of-type(3) a.nuxt-link-exact-active {border-left-color:#865F56;}

.contentMap menu {
    padding:0;
}
.contentMap h4{
  text-align:center;
  padding:10px 0 10px;
  text-transform: uppercase;
  font-weight: 700;
}
.colorBar1{border-bottom:4px solid #b4c6ca;}
.colorBar2{border-bottom:4px solid #d3cad2;}
.colorBar3{border-bottom:4px solid #d6c7c3;}

h6.colorBar1,h6.colorBar2,h6.colorBar3{
  padding-top:4em;
  text-transform: uppercase;
  border-bottom-width: 5em;
  transform: rotate(90deg);
}
</style>
