<template>
  <nav class="contentMap" role="navigation">
    
    <span ref="item"><h4>{{$t('plan')}}</h4></span>    
    <menu style="list-style: none">
      <li>
        <nuxt-link :to="localePath('planKey')" v-html="$t('KeyMessages')"  />
      </li>
      <li>
        <nuxt-link :to="localePath('buildWP')" v-html="$t('BuildWorkPlan')" />
      </li>
      <li>
        <nuxt-link :to="localePath('createBudget')" v-html="$t('CreateBudget')" />
      </li>
      <li>
        <nuxt-link :to="localePath('exam1')" v-html="$t('Test')" />
      </li>
    </menu>
    <h4>{{$t('spend')}}</h4>
    <menu style="list-style: none">
      <li>
        <nuxt-link :to="localePath('spendKey')" v-html="$t('KeyMessages')" />
      </li>
      <li>
        <nuxt-link :to="localePath('spendPart1')" v-html="$t('InitiateAuthorizeSpending')" />
      </li>
      <li>
        <nuxt-link :to="localePath('spendPart2')" v-html="$t('ExerciseFinancialAuthority')" />
      </li>
      <li>
        <nuxt-link :to="localePath('spendPart3')" v-html="$t('MonitorControlFinances')" />
      </li>
      <li>
        <nuxt-link :to="localePath('exam2')" v-html="$t('Test')" />
      </li>
    </menu>
    <h4>{{$t('report')}}</h4>
    <menu style="list-style: none">
      <li>
        <nuxt-link :to="localePath('reportKey')" v-html="$t('KeyMessages')" />
      </li>
      <li>
        <nuxt-link :to="localePath('reportPart1')" v-html="$t('ConductPeriodicVarianceReporting')" />
      </li>
      <li>
        <nuxt-link :to="localePath('reportPart2')" v-html="$t('ContributeReporting')" />
      </li>
      <li>
        <nuxt-link :to="localePath('exam3')" v-html="$t('Test')" />
      </li>
    </menu>
  </nav>
</template>
<script type="text/javascript">
  export default{
    methods:{
      setFocus(){
        this.$nextTick(() => {
        this.$refs.item.focus()
      });
        

      
      }
    },
    mounted(){
      this.setFocus()
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
.contentMap h4:nth-of-type(1){border-bottom:4px solid #b4c6ca;}
.contentMap h4:nth-of-type(2){border-bottom:4px solid #d3cad2;}
.contentMap h4:nth-of-type(3){border-bottom:4px solid #d6c7c3;}

</style>
