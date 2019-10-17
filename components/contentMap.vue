<template>
  <div class="contentMap">
    <ul>
      <nuxt-link :to="localePath('index')">
        <h3>{{$t('homePage')}}</h3>
      </nuxt-link>
      <h4>{{$t('Plan')}}</h4>
      <li>
        <nuxt-link :to="localePath('planKey')">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('buildWP')">{{$t('BuildWorkPlan')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('CreateBudget')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('Test')}}</nuxt-link>
      </li>
      <h4>{{$t('Spend')}}</h4>
      <li>
        <nuxt-link to="">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('InitiateAuthorizeSpending')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('ExerciseFinancialAuthority')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('MonitorControlFinances')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('Test')}}</nuxt-link>
      </li>
      <h4>{{$t('Report')}}</h4>
      <li>
        <nuxt-link to="">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('ConductPeriodicVarianceReporting')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('ContributeReporting')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link to="">{{$t('Test')}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style type="text/css" scoped>
  .contentMap{
    background-color: #d8d7d7;
    box-shadow: 4px 4px 8px #888;
    padding: 0.5em
  }
  a{
    color:#000;
  }
</style>
