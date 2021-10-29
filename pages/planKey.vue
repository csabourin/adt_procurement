<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessP.svg" alt="" role="presentation" height="275"></p>
    <p>&nbsp;</p>
    
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Analyze Goods, Services and Construction Needs</h3>
              <p>Procurement is the process of acquiring goods, services and construction from providers. Don’t forget to include your procurement specialist early in your planning.</p>
              <p>You review your work plan to identify your goods, services and construction needs.</p>
              <p>Finally, you verify if the goods, services or construction needed already exist and are available.</p>
           
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Analyser les besoins en biens, en services et en construction</h3>
           
              <p>L’approvisionnement est le processus qui consiste à acquérir des biens, des services et des services de construction auprès de fournisseurs. N’oubliez pas de faire appel à votre spécialiste en approvisionnement dès le début de la planification.</p>
              <p>Vous devez examiner votre plan de travail pour relever vos besoins en biens, en services et en services de construction.</p>
              <p>Pour terminer, vous devez vérifier si les biens, les services ou les services de construction requis existent déjà et s’ils sont disponibles.</p>
           
          </span>
        </b-col>
        <b-col cols="1" class="d-none d-lg-block"></b-col>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Forecast Budget Requirements</h3>
           
              <p>Before making any procurement decisions, you estimate the costs of the goods, services and construction you plan to acquire, including accessibility and life-cycle costs.</p>

              <p>When work plan activities cannot be delivered because goods, services and construction cannot be procured, you conduct a risk assessment and identify mitigation strategies. </p>

           
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Prévoir les besoins budgétaires</h3>
           
              <p>Avant de prendre toute décision en matière d’approvisionnement, vous devez estimer les coûts des biens, des services et des services de construction que vous prévoyez acquérir, y compris les coûts liés à l’accessibilité et au cycle de vie.</p>

              <p>Lorsque les activités du plan de travail ne peuvent pas être réalisées parce qu’il n’est pas possible de se procurer des biens, des services ou des services de construction, vous devez mener une évaluation des risques et définir des stratégies d’atténuation.</p>

           
          </span>
        </b-col>
         <b-col cols="1" class="d-none d-lg-block"></b-col>
        <b-col cols="12" lg>
          <span v-if="$i18n.locale=='en'">
            <h3>Budget and Authorities </h3>
           
              <p>Before beginning to procure goods, services and construction, make sure you have enough funds in your budget.</p>

              <p>You should also identify who has the delegated financial and spending (that is, expenditure initiation and transaction) authorities to initiate and commit the funds for goods, services or construction.</p>

              <p>Once the proper financial and spending (i.e. expenditure initiation and transaction) delegation authorities approvals have been received, you procure the needed goods, services and construction.</p>

           
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Budget et pouvoirs</h3>
           
              <p>Avant de vous procurer des biens, des services et des services de construction, assurez‑vous que vous avez les fonds nécessaires dans votre budget.</p>
              <!--
                NOUVELLE VERION? (CSPS-TD)
                <p>Les budgets correspondent essentiellement aux plans de travail exprimés en termes financiers. Autrement dit, le budget représente le montant que vous prévoyez dépenser pour réaliser votre plan.</p>
              -->

              <p>Vous devez aussi indiquer qui possède les pouvoirs délégués en matière de finances et de dépenses (c.‑à‑d. le pouvoir d’engager des dépenses et d’effectuer des transactions) afin d’engager les fonds destinés aux biens, aux services ou aux services de construction.</p>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <p>Pour créer un budget, vous passez en revue le budget de l’année précédente afin de déterminer quels salaires, quelles dépenses de fonctionnement et d’entretien et, dans certains cas, de capital et des subventions et contributions vous devrez conserver, éliminer ou ajouter.</p>
              -->

              <p>Lorsque vous avez reçu les autorisations appropriées de la personne investie des pouvoirs délégués en matière de finances et de dépenses (c.‑à‑d. le pouvoir d’engager des dépenses et d’effectuer des transactions), vous pouvez vous procurer les biens, les services et les services de construction dont vous avez besoin. </p>
              <!--
                NOUVELLE VERSION? (CSPS-TD)
                <p>Vous comparez le budget de l’année précédente au nouveau plan de travail en vous assurant que toutes les dépenses liées aux activités sont prises en compte. Vous prévoyez les dépenses et soumettez le nouveau budget proposé pour approbation, en y apportant des modifications tout au long de l’année à mesure que les activités évoluent.</p>
              -->
           
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
                  <download :texts="$t('WPTemplate')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '15.9' : '17,5'" name="WorkPlanTemplate" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                </b-col>
              <!--  <b-col role="tab" cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('delegofspending')" size=128 iconColor="planBackground" :fileSize="$i18n.locale == 'en' ? '120' : '120'" name="delegChart" />
                </b-col>-->
              </b-row>
            </template>
          </keyMessagesFiles>
        </b-col>
      </b-row>
      
    </b-container>
    <div class="bottomNav planSection">
    <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
    
    <microlearning path="analyzegoods" imagePath="BuildWP.svg" size="140" time="15" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('AnalyzeGoods')" type="video" />
    <microlearning path="forecastbudget" imagePath="CreateBud.svg" size="140" time="30" :completion="$store.state.currentPlaying.forecast_player" :text="$t('ForecastBudget')" type="video" />
    <microlearning size="140" path="budgetauthorities" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="ExerciseFinancialAuthority.svg" :text="$t('BudgetAuthorities')" type="video" />
    <microlearning path="planKey" youAreHere time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
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
  computed:{
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
