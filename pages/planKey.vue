<template>
  <div class="text-center">
    <h1 class="pageTitle">{{$t('KeyMessages')}}</h1>
    <p><img src="~/assets/Plan.svg"></p>
    <p>&nbsp;</p>
    <q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col><span v-html="$t('keyPlanWork')" /><br><hr></b-col>
        <b-col v-html="$t('keyPlanBudget')"></b-col>
      </b-row>
      <b-row><b-col><h3>Files in this section</h3><a href="ADT_Ressources_360.pdf" download><scan360 /></a></b-col></b-row>
    </b-container>

<div class="bottomNav planSection">
      <microlearning path="planKey" youAreHere size="140" completion="100" imagePath="KeyMessP.png">
        {{ $t('KeyMessages') }}
      </microlearning>
      <microlearning path="buildWP" imagePath="KeyMessR.png" size="140" time="20" completion="80">
        {{ $t('BuildWorkPlan') }}
      </microlearning>
      <microlearning size="140" time="20" completion="10" tmp_imagePath="CreateBud.png">
        {{ $t('CreateBudget') }}
      </microlearning>
      <microlearning size="140" time="15" tmp_imagePath="TestPlan.png">
        Test
      </microlearning>
    </div>
  </div>
</template>
<script type="text/javascript">
import hamburger from "~/components/hamburger"
import microlearning from "~/components/microlearning"
import scan360 from "~/assets/360scan.vue"
export default {
  components: {
    hamburger,
    microlearning,
    scan360
  }
}

</script>
<i18n>
  {
  "en":{
  "keyPlanQuote":"Great planning leads to great performance.",
  "keyPlanWork":"<h2>Work Plan</h2>  <ul>    <li>A work plan is a detailed schedule of the activities to be carried out, resources to be consumed, and results to be achieved over a one-year period, usually a fiscal year for a responsibility center.</li>    <li>To build one, you review the activities from the previous year’s work plan, budget and reports to identify lessons learned and what needs to be carried over. </li>    <li>Specifically, you define and prioritize the work and activities of your unit, assigning resources and timelines to each activity, making sure the activities align with the organizational priorities and conducting a risk assessment. </li>  </ul>",
  "keyPlanBudget": "<h2>Create a Budget</h2>  <ul><li>Typically, budgets will include <strong>Operating and Maintenance</strong> (O&amp;M) and <strong>Salary </strong>costs. Some budgets may also include <strong>Capital </strong>and <strong>Grants and Contributions</strong> amounts.</li><li>Budgets are essentially the conversion of the work plans into financial terms. In other words, the<strong> budget represents how much you will spend to achieve your work plan activities</strong>.</li><li>To create your budget, you must a<strong>nalyze</strong> information, <strong>forecast</strong> your new budget requirements and <strong>submit</strong> your new budget for approval.</li></ul>"
  },"fr":{
  "keyPlanQuote":"Une bonne planification mène à une bonne performance.",
  "keyPlanWork":"<h2>Plan de travail</h2>  <p>Un plan de travail est un calendrier détaillé des activités à réaliser, des ressources à consommer et des résultats à atteindre sur une période d'un an, habituellement un exercice financier pour un centre de responsabilité.</p><p>Pour ce faire, vous passez en revue les activités du plan de travail, du budget et des rapports de l'année précédente afin d'identifier les leçons apprises et ce qui doit être reporté.</p>  <p>Plus précisément, vous définissez et hiérarchisez le travail et les activités de votre unité, attribuez des ressources et des échéanciers à chaque activité, veillez à ce que les activités correspondent aux priorités organisationnelles et effectuez une évaluation des risques.",
    "keyPlanBudget": "<h2>Établir un budget</h2>    <p>Les budgets sont essentiellement la conversion des plans de travail en termes financiers. En d'autres termes, le budget représente le montant que vous dépenserez pour réaliser votre plan.</p>    <p>Pour en créer un, vous passez en revue le budget de l'année précédente afin de déterminer quel salaire et quelles dépenses de fonctionnement et d'entretien vous conserverez, éliminerez et ajouterez.</p>    <p>Vous comparez le budget de l'année précédente au nouveau plan de travail, en vous assurant que toutes les dépenses liées aux activités sont couvertes. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des ajustements tout au long de l'année à mesure que les activités évoluent.</p>"
    }
    }
</i18n>
<style type="text/css" scoped>
  .bigQuote{font-size: 36px;
    padding-bottom: 2em;
    font-family: Roboto Medium;
    color: #608a93;
  quotes: "“" "”";}
    .bigQuote:before,.bigQuote:after{
      font-size:72px;
      font-family: Times;
      font-weight: bold;
    }
.french-quote:before,.french-quote:after {
  font-size: 50px;
}
  .french-quote {
    quotes: "« " " »";
}
</style>
