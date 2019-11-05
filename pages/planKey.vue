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
        <a href="ADT_Ressources_360.pdf" download><genericFile iconWidth="128"  :title="$t('scan360')"/></a>
        <a href="WorkPlan_Template.docx" download :title="$t('downloadPlan')"><genericFile iconWidth="128" :title="$t('downloadPlan')" /></a></b-col></b-row>
    </b-container>

<div class="bottomNav planSection" :class="{'french':$i18n.locale=='fr'}">
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
import genericFile from "~/components/icons/genFileIcon"
import hamburger from "~/components/hamburger"
import microlearning from "~/components/microlearning"
import scan360 from "~/components/icons/360scan.vue"
export default {
  components: {
    hamburger,
    microlearning,
     genericFile,
     scan360
  }
}

</script>
<i18n>
  {
    "en":
    {
        "scan360": "Download the 360 Scan",
        "keyPlanQuote": " Great planning leads to great performance. ",
        "keyPlanWork": "<h2>Work Plan</h2>  <ul><li>A work plan is a detailed schedule of the <strong>activities </strong>to be carried out, <strong>resources </strong>to be consumed, and <strong>results </strong>to be achieved over a one-year period, usually a fiscal year for a responsibility center.</li><li>To build a work plan, you review the activities from the<strong> previous year's work plan, budget and reports</strong> to identify lessons learned and what needs to be carried over.&nbsp;</li><li>Specifically, you <strong>define and prioritize the work and activities</strong> of your unit, assigning resources and timelines to each activity, making sure the activities align with the organizational priorities and conducting a risk assessment.</li></ul>",
        "keyPlanBudget": "<h2>Create a Budget</h2>  <ul><li>Budgets are essentially the conversion of the work plans into financial terms. In other words, the<strong> budget represents how much you will spend to achieve your work plan activities</strong>.</li><li>Typically, budgets will include <strong>Operating and Maintenance</strong> (O&amp;M) and <strong>Salary </strong>costs. Some budgets may also include <strong>Capital </strong>and <strong>Grants and Contributions</strong> amounts.</li><li>To create your budget, you must <strong>analyze</strong> information, <strong>forecast</strong> your new budget requirements and <strong>submit</strong> your new budget for approval.</li></ul>",
        "fileSet": "Files in this section",
        "downloadPlan": "Download a Word template of the work plan"

    },
    "fr":
    {
        "scan360": "Télécharger l'aperçu 360",
        "keyPlanQuote": " Une bonne planification mène à une bonne performance. ",
        "keyPlanWork": "<h2>Plan de travail</h2>  <ul><li>Un plan de travail est un compte rendu d&eacute;taill&eacute; des <strong>activit&eacute;s </strong>&agrave; exercer, des <strong>ressources </strong>&agrave; utiliser et des <strong>r&eacute;sultats </strong>&agrave; atteindre au cours d&rsquo;une p&eacute;riode d&rsquo;un an, laquelle correspond habituellement &agrave; un exercice financier pour un centre de responsabilit&eacute;.</li><li>Pour &eacute;laborer un plan de travail, vous passez en revue les <strong>activit&eacute;s inscrites dans le plan de travail, le budget et les rapports de l&rsquo;ann&eacute;e pr&eacute;c&eacute;dente</strong> afin de d&eacute;terminer les le&ccedil;ons apprises et les mesures &agrave; reporter.&nbsp;</li><li>Plus pr&eacute;cis&eacute;ment, vous <strong>d&eacute;finissez et hi&eacute;rarchisez le travail et les activit&eacute;</strong>s de votre unit&eacute;, attribuez des ressources et des &eacute;ch&eacute;anciers &agrave; chaque activit&eacute;, veillez &agrave; ce que les activit&eacute;s correspondent aux priorit&eacute;s organisationnelles et effectuez une &eacute;valuation des risques.&nbsp;</li></ul>",
        "keyPlanBudget": "<h2>Établir un budget</h2><ul><li>Les budgets sont essentiellement la conversion des plans de travail en termes financiers. En d'autres mots, <strong>le budget repr&eacute;sente le montant que vous d&eacute;penserez pour r&eacute;aliser les activit&eacute;s de votre plan de travai</strong>l.</li><li>Habituellement, les budgets comprennent les co&ucirc;ts de <strong>fonctionnement et d'entretien</strong> (F et E) et les co&ucirc;ts <strong>salariaux</strong>. Certains budgets peuvent &eacute;galement inclure des montants <strong>d'immobilisations</strong> et de <strong>subventions et contributions</strong>.</li><li>Pour cr&eacute;er votre budget, vous devez <strong>analyser </strong>les informations, <strong>pr&eacute;voir </strong>vos nouveaux besoins budg&eacute;taires et <strong>soumettre </strong>votre nouveau budget pour approbation.</li></ul>",
        "fileSet": "Fichiers dans cette section",
        "downloadPlan": "Télécharger un modèle Word du plan de travail"
    }
}
</i18n>
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
