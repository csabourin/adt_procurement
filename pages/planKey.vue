<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessP.svg" alt="" role="presentation" width="320" height="216"></p>
    <p>&nbsp;</p>
    <span class="plan"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></span>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col>
          <span v-if="$i18n.locale=='en'">
            <h3>Work Plan</h3>
            <ul>
              <li>A work plan is a detailed schedule of the activities to be carried out, resources to be consumed, and results to be achieved over a one-year period, usually a fiscal year for a responsibility center.</li>
              <li>To build a work plan, you review the activities from the previous year's work plan, budget and reports to identify lessons learned and what needs to be carried over in order to identify possible trends.&nbsp;</li>
              <li>Specifically, with input from your team, you define and prioritize the work and activities of your unit, assigning resources and timelines to each activity, making sure the activities align with the organizational priorities and conducting a risk assessment.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Plan de travail</h3>
            <ul>
              <li>Un plan de travail est un compte rendu détaillé des activités à exercer, des ressources à utiliser et des résultats à atteindre au cours d&rsquo;une période d&rsquo;un an, laquelle correspond habituellement à un exercice financier pour un centre de responsabilité.</li>
              <li>Pour élaborer un plan de travail, vous passez en revue les activités inscrites dans le plan de travail, le budget et les rapports de l&rsquo;année précédente afin de prendre note des leçons apprises et les mesures à reporter afin de cerner les tendances possibles.&nbsp;</li>
              <li>Plus précisément, vous définissez et hiérarchisez le travail et les activités de votre unité, attribuez des ressources et des échéanciers à chaque activité, veillez à ce que les activités correspondent aux priorités organisationnelles et effectuez une évaluation des risques.&nbsp;</li>
            </ul>
          </span>
        </b-col>
        <b-col>
          <span v-if="$i18n.locale=='en'">
            <h3>Create a Budget</h3>
            <ul>
              <li>Budgets are essentially the conversion of the work plans into financial terms. In other words, the<strong> budget represents how much you forecast to spend to achieve your work plan activities</strong>.</li>
              <!--
                NEW VERSION? (CSPS-TD)
                <li>Budgets are essentially the conversion of the work plans into financial terms. In other words, <strong>the budget represents how much you plan to spend to achieve your plan</strong>.</li>
              -->

              <li>Typically, budgets will include <strong>operating and maintenance</strong> (O&amp;M) and <strong>salary </strong>costs. Depending on the mandate of your department, some budgets may also include <strong>capital </strong>and <strong>grants  and contributions</strong> amounts.</li>
              <!--
                NEW VERSION? (CSPS-TD)
                <li>To create a budget, you review the previous year&rsquo;s budget to identify what <strong>salary</strong> and what <strong>operations and maintenance expenses</strong>&mdash;and in some cases, <strong>capital</strong>, <strong>grants</strong> and <strong>Contributions</strong>&mdash;you will keep, eliminate and add.</li> 
              -->

              <li>To create your budget, you must <strong>analyze </strong>information from various sources, <strong>forecast</strong> your new budget requirements and <strong>submit</strong> your new budget for approval to upper management.</li>
              <!--
                NEW VERSION? (CSPS-TD)
                <li>Compare the previous year&rsquo;s budget to the new work plan, making sure it covers all the expenses linked to the activities. Forecast expenses and submit the proposed new budget for approval, making adjustments throughout the year as activities evolve.</li>
              -->
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Établir un budget</h3>
            <ul>
              <li>Essentiellement, les budgets représentent la conversion des plans de travail en termes financiers. En d&rsquo;autres mots, <strong>le budget représente le montant que vous prévoyez dépenser pour réaliser les activités de votre plan de travail</strong>.</li>
              <!--
                NOUVELLE VERION? (CSPS-TD)
                <li>Les budgets correspondent essentiellement aux plans de travail exprimés en termes financiers. Autrement dit, <strong>le budget représente le montant que vous prévoyez dépenser pour réaliser votre plan.</strong></li>
              -->

              <li>Pour créer votre budget, vous devez <strong>analyser </strong>les informations de diverses sources,<strong>prévoir </strong>vos nouveaux besoins budgétaires et <strong>soumettre </strong>votre nouveau budget pour approbation à la direction.</li>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Pour créer un budget, vous <strong>passez en revue</strong> le budget de l&rsquo;année précédente afin de déterminer quels salaires, quelles dépenses de fonctionnement et d&rsquo;entretien et, dans certains cas, de capital et des subventions et contributions vous devrez <strong>conserver</strong>, <strong>éliminer</strong> ou <strong>ajouter</strong>.</li>
              -->

              <li>Habituellement, les budgets comprennent les co&ucirc;ts de <strong>fonctionnement et d&rsquo;entretien</strong> (F et E) et les co&ucirc;ts <strong>salariaux</strong>. Selon le mandat de votre minist&egrave;re, certains budgets peuvent également inclure des montants <strong>d&rsquo;immobilisations</strong> et de <strong>subventions et contributions</strong>.</li>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Vous comparez le budget de l&rsquo;année précédente au nouveau plan de travail en vous assurant que toutes les dépenses liées aux activités sont prises en compte. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des modifications tout au long de l&rsquo;année à mesure que les activités évoluent.</li>
              -->
            </ul>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col><br>
          <hr>
          <h3>{{$t('fileSet')}}</h3>
          <download filename="ADT_Ressources_360.pdf" iconColor="Scan360Background" size=128 :title="$t('download360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" />
          <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Have a look at your organization's DP by selecting the following link: <a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank">Departmental Plans</a></span>
          <span v-if="$i18n.locale=='fr'">
            Jetez un coup d&rsquo;&oelig;l au PM de votre organisation en sélectionnant le lien suivant: <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Plans ministériels</a>
          </span></p>
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="planKey" youAreHere size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.png" :text="$t('KeyMessages')" />
      <microlearning path="buildWP" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('BuildWorkPlan')" />
      <microlearning size="140" path="createBudget" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('CreateBudget')" />
      <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
var seenKey
import download from "~/components/fileDownload"
import hamburger from "~/components/hamburger"
import microlearning from "~/components/microlearning"
export default {
  components: {
    hamburger,
    microlearning,
    download
  },
  computed: {
    pageComplete() {
      return this.$store.state.currentPlaying.kmPlan
    },
    planCompleted() {
      return this.$store.getters['plan/getScore']
    }
  },
  mounted() {
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmPlan', 100), 30000) // sets viewed after 30 secs
  },
  beforeDestroy() {
    clearTimeout(seenKey) // cancel if leaving before 30 secs.
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": " Great planning leads to great performance. ",
  "fileSet": "Files in this section",
  "downloadPlan": "Download a Word template of the work plan",
  "planSectionBar": "PLAN"
  },
  "fr":
  {
  "keyPlanQuote": " Une bonne planification mène à une bonne performance. ",
  "fileSet": "Fichiers dans cette section",
  "downloadPlan": "Télécharger un modèle Word du plan de travail",
  "planSectionBar": "PLANIFICATION"
  }
  }</i18n>
<style type="text/css" scoped>
span.plan:before {
  background-color: #d1dfe1;
  content: " ";
  width: 100vw;
  height: 2em;
  display: block;
  position: absolute;
  left: 0;
  z-index: -1;
  margin: 0;
  margin-top: 30px;
}

h3 {
  font-family: "Roboto Condensed";
  font-size: 1.5em;
}

.bigQuote {
  font-size: 36px;
  padding-bottom: 2em;
  font-family: 'Roboto Medium', Roboto;
  font-weight: 500;
  color: #608a93;
  background-image: linear-gradient(transparent 30%, white 30%, white 85%, transparent 85%, transparent 100%);
  quotes: "“""”";
  padding: 1em;
}

[lang=en] .bigQuote {
  position: relative;
  bottom: .75em;
}

.bigQuote:before,
.bigQuote:after {
  font-size: 72px;
  font-family: Times;
  font-weight: bold;
  color: #d1dfe1;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}

.planSection {
  position: relative;
}

.planSectionBar {
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.planSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
