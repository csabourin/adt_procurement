<template>
  <div class="float-left">
    <b-button v-b-modal.contentMap variant="light">
      <h1>&#69716;</h1>
    </b-button>
    <b-modal id="contentMap" title="" hide-footer>
      <div>
        <ul>
          <nuxt-link :to="localePath('index')">
            <h3>{{$t('home')}}</h3>
          </nuxt-link>
          <h4>{{$t('Plan')}}</h4>
          <li>
            <nuxt-link :to="localePath('planKey')">{{$t('KeyMessages')}}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">{{$t('BuildWorkPlan')}}</nuxt-link>
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
}

.modal-dialog {
  margin: 5.75rem 1.75rem;
}

</style>
<script type="text/javascript">
export default {}

</script>
<i18n>
  {
  "en":{
  "home":"Home",
  "KeyMessages":"Key Messages",
  "BuildWorkPlan":"Build a Work Plan",
"CreateBudget":"Create a Budget",
"InitiateAuthorizeSpending":"Initiate and Authorize Spending (S. 32)",
"ExerciseFinancialAuthority":"Exercise Financial Authority (S. 34)",
"MonitorControlFinances":"Monitor and Control Finances",
"ConductPeriodicVarianceReporting":"Conduct Periodic Variance Reporting",
"ContributeReporting":"Contribute in Reporting ",
"Test":"Test"
  },
  "fr":{
  "home":"Accueil",
  "Plan":"Planification",
  "Spend":"Dépenses",
  "Report":"Rapports",
  "KeyMessages":"Messages clés",
  "BuildWorkPlan":"Élaborer un plan de travail",
"CreateBudget":"Établir un budget",
"InitiateAuthorizeSpending":"Engager et autoriser les dépenses (art. 32)",
"ExerciseFinancialAuthority":"Exercice des pouvoirs financiers (art. 34)",
"MonitorControlFinances":"Surveiller et contrôler les finances",
"ConductPeriodicVarianceReporting":"Rapports périodiques sur les écarts",
"ContributeReporting":"Contribuer à l'établissement de rapports",
"Test":"Test"

  }
  }
</i18n>



