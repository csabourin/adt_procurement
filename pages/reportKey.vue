<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessS.svg" alt="" role="presentation" width="250px"></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg><span v-if="$i18n.locale=='en'">
          <h3>Report</h3>
            <ul>
              <li>You identify and avoid inappropriate procurement practices such as contract splitting and inappropriate sole-sourcing.</li>
              <li>Authorities with oversight responsibilities are in place to address procurement complaints, including the Office of the Procurement Ombudsman and the Canadian International Trade Tribunal.</li>
              <li>You participate in reporting activities, including proactive disclosure of contracts, by providing accurate and timely data on contracting activities.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3>Rapports </h3>
              <ul>
                <li>Vous devez repérer et éviter les pratiques d’approvisionnement inadéquates, comme le fractionnement de marchés et le recours inapproprié à un fournisseur unique.</li>
                <li>Les autorités responsables de la surveillance, dont le Bureau de l’ombudsman de l’approvisionnement et le Tribunal canadien du commerce extérieur, sont là pour répondre aux plaintes relatives à l’approvisionnement.</li>
                <li>Vous devez participer aux activités de production de rapports, y compris à la divulgation proactive des contrats, en fournissant en temps opportun des données précises sur les activités de passation de contrats.</li>
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
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('Oversight')" size=128 iconColor="reportBackground" :fileSize="$i18n.locale == 'en' ? '134' : '139'" name="Oversight" />
                </b-col>
              </b-row>
            </template>
          </keyMessagesFiles>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Find your organization's Departmental Plan here: <externalLink link="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html">Departmental Plans</externalLink></span>
          <span v-if="$i18n.locale=='fr'">
            Trouvez le plan ministériel de votre organisation ici : <externalLink link="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html">Plans ministériels</externalLink>
          </span></p> -->
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav generalSection" v-if="chosenScenario == 'refresh'">
      <div class="generalSectionBar"><span>{{$t('refreshShort')}}</span></div>
      <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('plan')" class="plan" noGrey type="keyMessages" />
      <microlearning path="spendKey" time="5" youAreHere size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('spend')" class="spend" noGrey type="keyMessages" />
      <microlearning path="reportKey" time="5" size="140" :completion="$store.state.currentPlaying.kmReport" imagePath="KeyMessR.svg" :text="$t('report')" class="report" noGrey type="keyMessages" />
    </div>
    <div class="bottomNav reportSection" v-else>
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning path="reportPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('ReportsTitle')" type="video" />
      <microlearning imagePath="R-Contribute.svg"  path="reportPart2" time="20" size="140" :text="$t('ContributeReporting')" :completion="$store.state.currentPlaying.reportPart2_player" type="video" />
       <microlearning time="5" youAreHere path="procureKey" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
var seenKey
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
import microlearning from "~/components/microlearning"
import keyMessagesFiles from "~/components/keyMessagesFiles"
export default {
  components: {
    microlearning,
    download,
    HTMLJobaidLink,
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
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmSpend', 100), 30000)
  },
  beforeDestroy() {
    clearTimeout(seenKey)
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": "Accountability breeds response-ability.",
  "reportSectionBar": "REPORT"
  },
  "fr":
  {
  "keyPlanQuote": "La responsabilité engendre l’habileté.",
  "reportSectionBar": "RAPPORT"
  }
  }</i18n>
<style type="text/css" scoped>
.reportSectionBar {
  position: absolute;
  background-color: #e5dddc;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.reportSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

p.quote.spend{
  position: relative;
}
  
p.quote.spend:before {
  position: absolute;
  content: " ";
  background-color: #cac1ca;
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
  color: #7d677d;
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
  color: #7d677d;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}
footer {
  display:inline;
}
</style>
