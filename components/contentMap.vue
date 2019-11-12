<template>
  <div class="contentMap">
    <nuxt-link :to="localePath('index')">
      <h3>{{$t('homePage')}}</h3>
    </nuxt-link>
    <h4>{{$t('plan')}}</h4>
    <ul style="list-style: none">
      <li>
        <nuxt-link :to="localePath('planKey')">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('buildWP')">{{$t('BuildWorkPlan')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('createBudget')">{{$t('CreateBudget')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('Test')}}</nuxt-link>
      </li>
    </ul>
    <h4>{{$t('spend')}}</h4>
    <ul style="list-style: none">
      <li>
        <nuxt-link :to="localePath('null')">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('InitiateAuthorizeSpending')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('ExerciseFinancialAuthority')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('MonitorControlFinances')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('Test')}}</nuxt-link>
      </li>
    </ul>
    <h4>{{$t('report')}}</h4>
    <ul style="list-style: none">
      <li>
        <nuxt-link :to="localePath('null')">{{$t('KeyMessages')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('ConductPeriodicVarianceReporting')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('ContributeReporting')}}</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="localePath('null')">{{$t('Test')}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style type="text/css" scoped>
.contentMap {
  background-color: #d8d7d7;
  box-shadow: 4px 4px 8px #888;
  padding: 0.5em
}

a {
  color: #000;
}

</style>
