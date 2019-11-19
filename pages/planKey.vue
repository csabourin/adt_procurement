<template>
  <div class="text-center">
    <h1 class="pageTitle">{{$t('KeyMessages')}}</h1>
    <p><img src="~/assets/Plan.svg"></p>
    <p>&nbsp;</p>
    <span class="plan"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></span>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col><span v-html="$t('keyPlanWork')" /></b-col>
        <b-col v-html="$t('keyPlanBudget')"></b-col>
      </b-row>
      <b-row><b-col><br><hr><h3>{{$t('fileSet')}}</h3>
           <download filename="ADT_Ressources_360.pdf" iconColor="Scan360Background" size=128 :title="$t('download360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" />
      <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" /></b-col></b-row>
    <b-row><b-col><p>&nbsp;</p><span v-if="$i18n.locale=='en'">
      Have a look at your organization's DP by selecting the following link: <a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank">Departmental Plans</a></span>
      <span v-if="$i18n.locale=='fr'">
      Jetez un coup d'oeil au PM de votre organisation en sélectionnant le lien suivant: <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Plans ministériels</a>
    
    </span></p>
  </b-col></b-row>
    </b-container>

<div class="bottomNav planSection" :class="{'french':$i18n.locale=='fr'}">
      <microlearning path="planKey" youAreHere size="140" completion="100" imagePath="KeyMessP.png">
        {{ $t('KeyMessages') }}
      </microlearning>
      <microlearning path="buildWP" imagePath="KeyMessR.png" size="140" time="20" completion="80">
        {{ $t('BuildWorkPlan') }}
      </microlearning>
      <microlearning path="createBudget" size="140" time="20" completion="10" imagePath="CreateBud.png">
        {{ $t('CreateBudget') }}
      </microlearning>
      <microlearning size="140" time="15" tmp_imagePath="TestPlan.png">
        {{$t('Test')}}
      </microlearning>
    </div>
  </div>
</template>
<script type="text/javascript">
import download from "~/components/fileDownload"
import hamburger from "~/components/hamburger"
import microlearning from "~/components/microlearning"
export default {
  components: {
    hamburger,
    microlearning,
     download
  }
}

</script>
<i18n>{
  "en":
  {
    "keyPlanQuote": " Great planning leads to great performance. ",
    "keyPlanWork": "<h2>Work Plan</h2><ul><li>A work plan is a detailed schedule of the activities to be carried out, resources to be consumed, and results to be achieved over a one-year period, usually a fiscal year for a responsibility center.</li><li>To build a work plan, you review the activities from the previous year's work plan, budget and reports to identify lessons learned and what needs to be carried over in order to identify possible trends..&nbsp;</li><li>Specifically, you define and prioritize the work and activities of your unit, assigning resources and timelines to each activity, making sure the activities align with the organizational priorities and conducting a risk assessment.</li></ul>",
    "keyPlanBudget": "<h2>Create a Budget</h2><ul><li>Budgets are essentially the conversion of the work plans into financial terms. In other words, the budget represents how much you will spend to achieve your work plan activities.</li><li>Typically, budgets will include Operating and Maintenance (O&amp;M) and Salary costs. Some budgets may also include Capital and Grants and Contributions amounts.</li><li>To create your budget, you must analyze information, forecast your new budget requirements and submit your new budget for approval.</li></ul>",
    "fileSet": "Files in this section",
    "downloadPlan": "Download a Word template of the work plan"

  },
  "fr":
  {
    "keyPlanQuote": " Une bonne planification mène à une bonne performance. ",
    "keyPlanWork": "<h2>Plan de travail</h2><ul><li>Un plan de travail est un compte rendu d&eacute;taill&eacute; des activit&eacute;s &agrave; exercer, des ressources &agrave; utiliser et des r&eacute;sultats &agrave; atteindre au cours d&rsquo;une p&eacute;riode d&rsquo;un an, laquelle correspond habituellement &agrave; un exercice financier pour un centre de responsabilit&eacute;.</li><li>Pour &eacute;laborer un plan de travail, vous passez en revue les activit&eacute;s inscrites dans le plan de travail, le budget et les rapports de l&rsquo;ann&eacute;e pr&eacute;c&eacute;dente afin de d&eacute;terminer les le&ccedil;ons apprises et les mesures &agrave; reporter afin d’identifier les tendances possibles.&nbsp;</li><li>Plus pr&eacute;cis&eacute;ment, vous d&eacute;finissez et hi&eacute;rarchisez le travail et les activit&eacute;s de votre unit&eacute;, attribuez des ressources et des &eacute;ch&eacute;anciers &agrave; chaque activit&eacute;, veillez &agrave; ce que les activit&eacute;s correspondent aux priorit&eacute;s organisationnelles et effectuez une &eacute;valuation des risques.&nbsp;</li></ul>",
    "keyPlanBudget": "<h2>&Eacute;tablir un budget</h2><ul><li>Les budgets sont essentiellement la conversion des plans de travail en termes financiers. En d'autres mots, le budget repr&eacute;sente le montant que vous d&eacute;penserez pour r&eacute;aliser les activit&eacute;s de votre plan de travail.</li><li>Habituellement, les budgets comprennent les co&ucirc;ts de fonctionnement et d'entretien (F et E) et les co&ucirc;ts salariaux. Certains budgets peuvent &eacute;galement inclure des montants d'immobilisations et de subventions et contributions.</li><li>Pour cr&eacute;er votre budget, vous devez analyser les informations, pr&eacute;voir vos nouveaux besoins budg&eacute;taires et soumettre votre nouveau budget pour approbation.</li></ul>",
    "fileSet": "Fichiers dans cette section",
    "downloadPlan": "Télécharger un modèle Word du plan de travail"
  }
}</i18n>
<style type="text/css" scoped>

span.plan:before {
background-color: #d1dfe1;
content: " ";
width: 100vw;
height:2em;
display: block;
position: absolute;
left:0;
z-index: -1;
margin: 0;
margin-top: 30px;
}
.bigQuote{
  font-size: 36px;
  padding-bottom: 2em;
  font-family: Roboto Medium;
  color: #608a93;
  background-color: white;
  quotes: "“" "”";
  padding:1em;
}
[lang=en] .bigQuote{
  position: relative;
    bottom: .75em;
}
.bigQuote:before,.bigQuote:after{
font-size:72px;
font-family: Times;
font-weight: bold;
color:#d1dfe1;
margin-top:-60px;
}
.french-quote:before,.french-quote:after {
font-size: 50px;
}
.french-quote {
quotes: "« " " »";
}
</style>
