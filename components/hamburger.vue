<template>
  <div class="float-left">
    <b-button v-b-modal.contentMap variant="light">
      <h1>&#69716;</h1>
    </b-button>
    <b-modal id="contentMap" hide-footer>
      <div>
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
    </b-modal>
  </div>
</template>
<style type="text/css" scoped>
h1 {
  float: left;
  margin: .5em;
}

.btn-light {
  background-color: transparent;
  border-color: transparent;
}

.modal-dialog {
  margin: 5.75rem 1.75rem;
}
button.close{
	border: 1px solid gray;
	border-radius: 50px;
}
</style>
<script type="text/javascript">
export default {}
</script>