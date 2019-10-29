<template>
  <transition name="fade">
  <div class="contentMap">
    <ul>
      <nuxt-link :to="localePath('index')">
        <h3>{{$t('homePage')}}</h3>
      </nuxt-link>
      <h4>{{$t('plan')}}</h4>
      <li>
        <nuxt-link :to="localePath('planKey')">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('buildWP')">{{$t('BuildWorkPlan')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link isActive="false" to="null">{{$t('CreateBudget')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/">{{$t('Test')}}</nuxt-link>
      </li>
      <h4>{{$t('spend')}}</h4>
      <li>
        <nuxt-link to="null">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="null">{{$t('InitiateAuthorizeSpending')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="null">{{$t('ExerciseFinancialAuthority')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="null">{{$t('MonitorControlFinances')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="null">{{$t('Test')}}</nuxt-link>
      </li>
      <h4>{{$t('report')}}</h4>
      <li>
        <nuxt-link to="null">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="null">{{$t('ConductPeriodicVarianceReporting')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="null">{{$t('ContributeReporting')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="null">{{$t('Test')}}</nuxt-link>
      </li>
    </ul>
  </div>
</transition>
</template>
<style type="text/css">
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height:0;
}
  .contentMap{
    background-color: #d8d7d7;
    box-shadow: 4px 4px 8px #888;
    padding: 0.5em
  }
  a{
    color:#000;
  }
</style>
