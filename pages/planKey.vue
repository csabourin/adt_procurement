<template>
  <div>
    <hamburger />
    <h1>{{$t('Plan')}}</h1>
    <p><img src="~/assets/Plan.svg"></p>
    <span v-html="$t('keyPlanText')"></span>
  </div>
</template>
<script type="text/javascript">
import hamburger from "~/components/hamburger";
export default {
  components: {
    hamburger
  }
}

</script>
<i18n>
  {
  "en":{
  "Plan":"Plan",
  "keyPlanText":"<blockquote>Great planning leads to great performance.</blockquote>  <h2>Work Plan</h2>  <p>A work plan is a detailed schedule of the activities to be carried out, resources to be consumed, and results to be achieved over a one-year period, usually a fiscal year for a responsibility center.</p>  <p>To build one, you review the activities from the previous year’s work plan, budget and reports to identify lessons learned and what needs to be carried over. </p>  <p>Specifically, you define and prioritize the work and activities of your unit, assigning resources and timelines to each activity, making sure the activities align with the organizational priorities and conducting a risk assessment. </p>  <h2>Create a Budget</h2> <p>Budgets are essentially the conversion of the work plans into financial terms. In other words, the budget represents how much you will spend to achieve your plan.</p>  <p>To create one, you review the previous year’s budget to identify what salary and what operations & maintenance expenses you will keep, eliminate and add. </p>  <p>You compare the previous year’s budget to the new work plan, making sure all the expenses linked to the activities are covered. You forecast expenses and submit the proposed new budget for approval, making adjustments throughout the year as activities evolve. </p>"
  },"fr":{
  "Plan":"Planification",
  "keyPlanText":"<blockquote>Une bonne planification mène à une bonne performance.</blockquote>  <h2>Plan de travail</h2>  <p>Un plan de travail est un calendrier détaillé des activités à réaliser, des ressources à consommer et des résultats à atteindre sur une période d'un an, habituellement un exercice financier pour un centre de responsabilité.</p>  <p>Pour ce faire, vous passez en revue les activités du plan de travail, du budget et des rapports de l'année précédente afin d'identifier les leçons apprises et ce qui doit être reporté.</p>   <p>Plus précisément, vous définissez et hiérarchisez le travail et les activités de votre unité, attribuez des ressources et des échéanciers à chaque activité, veillez à ce que les activités correspondent aux priorités organisationnelles et effectuez une évaluation des risques. <h2>Établir un budget</h2> <p>Les budgets sont essentiellement la conversion des plans de travail en termes financiers. En d'autres termes, le budget représente le montant que vous dépenserez pour réaliser votre plan.</p> <p>Pour en créer un, vous passez en revue le budget de l'année précédente afin de déterminer quel salaire et quelles dépenses de fonctionnement et d'entretien vous conserverez, éliminerez et ajouterez.</p>    <p>Vous comparez le budget de l'année précédente au nouveau plan de travail, en vous assurant que toutes les dépenses liées aux activités sont couvertes. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des ajustements tout au long de l'année à mesure que les activités évoluent.</p>"
    }
    }
</i18n>
