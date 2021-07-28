<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessP.svg" alt="" role="presentation" height="275"></p>
    <p>&nbsp;</p>
    <p class="quote plan"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Analyze Goods, Services and Construction Needs</h3>
            <ul>
              <li>Procurement is the process of acquiring goods, services and construction from providers. Don’t forget to include your procurement specialist early in your planning.</li>
              <li>You review your work plan to identify your goods, services and construction needs.</li>
              <li>Finally, you verify if the goods, services or construction needed already exist and are available.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Analyser les besoins en biens, en services et en construction</h3>
            <ul>
              <li>L’approvisionnement est le processus qui consiste à acquérir des biens, des services et des services de construction auprès de fournisseurs. N’oubliez pas de faire appel à votre spécialiste en approvisionnement dès le début de la planification.</li>
              <li>Vous devez examiner votre plan de travail pour relever vos besoins en biens, en services et en services de construction.</li>
              <li>Pour terminer, vous devez vérifier si les biens, les services ou les services de construction requis existent déjà et s’ils sont disponibles.</li>
            </ul>
          </span>
        </b-col>
        <b-col cols="1" class="d-none d-lg-block"></b-col>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Forecast Budget Requirements</h3>
            <ul>
              <li>Before making any procurement decisions, you estimate the costs of the goods, services and construction you plan to acquire, including accessibility and life-cycle costs.</li>

              <li>When work plan activities cannot be delivered because goods, services and construction cannot be procured, you conduct a risk assessment and identify mitigation strategies. </li>

            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Prévoir les besoins budgétaires</h3>
            <ul>
              <li>Avant de prendre toute décision en matière d’approvisionnement, vous devez estimer les coûts des biens, des services et des services de construction que vous prévoyez acquérir, y compris les coûts liés à l’accessibilité et au cycle de vie.</li>

              <li>Lorsque les activités du plan de travail ne peuvent pas être réalisées parce qu’il n’est pas possible de se procurer des biens, des services ou des services de construction, vous devez mener une évaluation des risques et définir des stratégies d’atténuation.</li>

            </ul>
          </span>
        </b-col>
         <b-col cols="1" class="d-none d-lg-block"></b-col>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Budget and Authorities </h3>
            <ul>
              <li>Before beginning to procure goods, services and construction, make sure you have enough funds in your budget.</li>

              <li>You should also identify who has the delegated financial and spending (that is, expenditure initiation and transaction) authorities to initiate and commit the funds for goods, services or construction.</li>

              <li>Once the proper financial and spending (i.e. expenditure initiation and transaction) delegation authorities approvals have been received, you procure the needed goods, services and construction.</li>

            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Budget et pouvoirs</h3>
            <ul>
              <li>Avant de vous procurer des biens, des services et des services de construction, assurez‑vous que vous avez les fonds nécessaires dans votre budget.</li>
              <!--
                NOUVELLE VERION? (CSPS-TD)
                <li>Les budgets correspondent essentiellement aux plans de travail exprimés en termes financiers. Autrement dit, le budget représente le montant que vous prévoyez dépenser pour réaliser votre plan.</li>
              -->

              <li>Vous devez aussi indiquer qui possède les pouvoirs délégués en matière de finances et de dépenses (c.‑à‑d. le pouvoir d’engager des dépenses et d’effectuer des transactions) afin d’engager les fonds destinés aux biens, aux services ou aux services de construction.</li>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Pour créer un budget, vous passez en revue le budget de l’année précédente afin de déterminer quels salaires, quelles dépenses de fonctionnement et d’entretien et, dans certains cas, de capital et des subventions et contributions vous devrez conserver, éliminer ou ajouter.</li>
              -->

              <li>Lorsque vous avez reçu les autorisations appropriées de la personne investie des pouvoirs délégués en matière de finances et de dépenses (c.‑à‑d. le pouvoir d’engager des dépenses et d’effectuer des transactions), vous pouvez vous procurer les biens, les services et les services de construction dont vous avez besoin. </li>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <li>Vous comparez le budget de l’année précédente au nouveau plan de travail en vous assurant que toutes les dépenses liées aux activités sont prises en compte. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des modifications tout au long de l’année à mesure que les activités évoluent.</li>
              -->
            </ul>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <keyMessagesFiles>
            <template v-slot:title>{{$t('fileSet')}}</template>
            <template v-slot:content>
              <b-row>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('threeSixty')" size=128 iconColor="Scan360Background" :fileSize="$i18n.locale == 'en' ? '118' : '124'" name="threeSixty" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('WPTemplate')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '15.9' : '17,5'" name="WorkPlanTemplate" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('WPLastYear')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '120' : '120'" name="WorkPlan_lastYear" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('budgetLastYear')" size=128  iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '9.96' : '9,62'" name="Budget_lastYear" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('reportsLastYear')" iconColor="reportBackground" size=128 :title="$t('rExample')" :line1="$t('rLine1')" :line2="$t('rLine2')" :lineTag="$t('rExample')" :fileSize="$i18n.locale == 'en' ? '16.6' : '19,4'" name="ReportLast" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('buildWPProcessMap')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '121' : '114'" name="buildWPProcessMap" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('newBudget')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '129' : '131'" name="newBudget" />
                </b-col>
                <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('cycle')" size=128 iconColor="Scan360Background" :fileSize="$i18n.locale == 'en' ? '61.6' : '62,6'" name="cycle" />
                </b-col>
              </b-row>
            </template>
          </keyMessagesFiles>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Find your organization's Departmental Plan here: <externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plans</externalLink></span>
          <span v-if="$i18n.locale=='fr'">
            Trouvez le plan ministériel de votre organisation ici : <externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plans ministériels</externalLink>
          </span></p>
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav generalSection" v-if="chosenScenario == 'refresh'">
      <div class="generalSectionBar"><span>{{$t('refreshShort')}}</span></div>
      <microlearning path="planKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('plan')" class="plan" noGrey type="keyMessages" />
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav planSection" v-else>
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="buildwp" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('BuildWorkPlan')" type="video" />
      <microlearning size="140" path="createbudget" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('CreateBudget')" type="video" />
      <microlearning path="planKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
var seenKey
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
import hamburger from "~/components/hamburger"
import microlearning from "~/components/microlearning"
import externalLink from "~/components/externalLink"
import keyMessagesFiles from "~/components/keyMessagesFiles"
export default {
  components: {
    hamburger,
    microlearning,
    download,
    HTMLJobaidLink,
    externalLink,
    keyMessagesFiles
  },
  computed: {
    pageComplete() {
      return this.$store.state.currentPlaying.kmPlan
    },
    planCompleted() {
      return this.$store.getters['plan/getScore']
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
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
<i18n>
  {
    "en":{
      "keyPlanQuote": " Great planning leads to great performance. ",
      "planSectionBar": "PLAN"
    },
    "fr":{
      "keyPlanQuote": " Une bonne planification mène à une bonne performance. ",
      "planSectionBar": "PLANIFICATION" 
    }
  }
</i18n>
<style type="text/css" scoped>
  
p.quote.plan{
  position: relative;
}
  
p.quote.plan:before {
  position: absolute;
  content: " ";
  background-color: #d1dfe1;
  width: 100%;
  height: 32px;
  left: 0;
  top: calc(50% - 9px);
  z-index: -1;
  margin: 0;
}

h3 {
  font-family: "Roboto Condensed";
  font-size: 1.5em;
}

.bigQuote {
  font-size: 36px;
  padding-bottom: 2em;
  font-family: "Roboto", Roboto;
  font-weight: 500;
  color: #608a93;
  /*background-image: linear-gradient(transparent 30%, white 30%, white 85%, transparent 85%, transparent 100%);*/
  background-color: white;
  quotes: """""";
  padding: 1em;
  display: block;
  margin: auto;
  width: 90%;
  line-height: normal;
}
  
@media(max-width: 768px){
  .bigQuote {
    font-size: 30px;
  }
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
  color: #608a93;
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
