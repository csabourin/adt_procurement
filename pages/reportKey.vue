<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <br>
    <p><img src="~/assets/KeyMessR.png" alt="" role="presentation"></p>
    <p>&nbsp;</p>
    <span class="spend"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></span>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col><span v-if="$i18n.locale=='en'">
            <h3>Prepare the Financial Situation Report (FSR)</h3>
            <ul>
              <li>Financial situation reports:</li>
              <ul>
                <li>Provide the most current financial picture of the organization&rsquo;s finances.</li>
                <li>Are tools for managers to regularly identify current financials, risks, potential surpluses and/or shortfalls in their budgets.</li>
                <li>Are initiated and led by the Chief Financial Officer.&nbsp;</li>
                <li>Allow the Chief Financial Officer to make recommendations to senior leaders on the financial resources needed to achieve results.</li>
              </ul>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <h3><strong>Pr&eacute;parer le Rapport sur la situation financi&egrave;re (RSF)</strong></h3>
            <ul>
              <li>Les rapports sur la situation financi&egrave;re :</li>
              <ul>
                <ul>
                  <li>Fournissent le portrait financier le plus r&eacute;cent des finances de l'organisme.</li>
                  <li>Sont des outils permettant aux gestionnaires d'identifier r&eacute;guli&egrave;rement les finances courantes, les risques, les exc&eacute;dents et/ou les d&eacute;ficits potentiels dans leurs budgets.</li>
                  <li>Sont lanc&eacute;s et dirig&eacute;s par le chef de la direction financi&egrave;re.&nbsp;</li>
                  <li>Permettent au dirigeant principal des finances de faire des recommandations aux cadres sup&eacute;rieurs sur les ressources financi&egrave;res n&eacute;cessaires pour obtenir des r&eacute;sultats.</li>
                </ul>
              </ul>
            </ul>
          </span>
        </b-col>
        <b-col><span v-if="$i18n.locale=='en'">
            <h3>Contribute to External Reporting</h3>
            <ul>
              <li>The finances and results of government services and programs are reported regularly to Parliament and Canadians through a variety of reports:&nbsp;</li>
              <ul>
                <li>Departmental Results Report (DRR)</li>
                <li>Quarterly Financial Reporting (QFR)</li>
                <li>Proactive disclosure&nbsp;</li>
                <li>Management Accountability Framework (MAF)</li>
                <li>Internal audit and evaluation reports</li>
              </ul>
              <li>Managers contribute to these government reports by providing information on the performance outcomes and results of their activities.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
            <h3><strong>Contribuer à l'établissement de rapports externes</strong></h3>
            <ul>
              <li>Les finances et les r&eacute;sultats des services et des programmes gouvernementaux font l'objet de rapports r&eacute;guliers au Parlement et &agrave; la population canadienne dans divers rapports :&nbsp;</li>
              <ul>
                <ul>
                  <li>Rapport minist&eacute;riel sur les r&eacute;sultats (RRC)</li>
                  <li>Rapports financiers trimestriels (RFT)</li>
                  <li>Divulgation proactive&nbsp;</li>
                  <li>Cadre de responsabilisation de gestion (CRG)</li>
                  <li>Rapports de v&eacute;rification interne et d'&eacute;valuation</li>
                </ul>
              </ul>
              <li>Les gestionnaires contribuent &agrave; ces rapports gouvernementaux en fournissant de l'information sur les r&eacute;sultats de rendement et les r&eacute;sultats de leurs activit&eacute;s.</li>
            </ul>
          </span></b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- <br>
          <hr>
          <h3>{{$t('fileSet')}}</h3>
          <download filename="ADT_Ressources_360.pdf" iconColor="Scan360Background" size=128 :title="$t('download360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" />
          <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" />
         -->
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- <p>&nbsp;</p><span v-if="$i18n.locale=='en'">
            Have a look at your organization's DP by selecting the following link: <a href="https://www.canada.ca/en/treasury-board-secretariat/services/planned-government-spending/reports-plans-priorities.html" target="_blank">Departmental Plans</a></span>
          <span v-if="$i18n.locale=='fr'">
            Jetez un coup d'oeil au PM de votre organisation en sélectionnant le lien suivant: <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Plans ministériels</a>
          </span></p> -->
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning :completion="$store.state.currentPlaying.kmReport" youAreHere path="reportKey" size="140" imagePath="KeyMessR.png" :text="$t('KeyMessages')" />
      <microlearning :completion="$store.state.currentPlaying.reportPart1_player" path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ConductPeriodicVarianceReporting')" />
      <microlearning :completion="$store.state.currentPlaying.reportPart2_player" path="reportPart2" imagePath="R-Contribute.svg" size="140" time="20" :text="$t('ContributeReporting')" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
  var seenKey
import download from "~/components/fileDownload"
import microlearning from "~/components/microlearning"
export default {
  components: {
    microlearning,
    download
  },
  mounted(){
    seenKey = setTimeout(() => this.$store.commit('currentPlaying/setKmReport',100),30000)
  },
  beforeDestroy(){
    clearTimeout(seenKey)
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": " Reports should tell the public the story of our performance. ",
  "fileSet": "Files in this section",
  "downloadPlan": "Download a Word template of the work plan",
  "reportSectionBar": "SPEND"
  },
  "fr":
  {
  "keyPlanQuote": " Les rapports devraient communiquer notre performance au public.",
  "fileSet": "Fichiers dans cette section",
  "downloadPlan": "Télécharger un modèle Word du plan de travail",
  "reportSectionBar": "DÉPENSES"
  }
  }</i18n>
<style type="text/css" scoped>
span.spend:before {
  background-color: #e5dddc;
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
  font-family: 'Roboto Medium',Roboto;
  font-weight:500;
  color: #865f56;
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
  color: #e5dddc;
  margin-top: -60px;
}

.french-quote:before,
.french-quote:after {
  font-size: 50px;
}

.french-quote {
  quotes: "« "" »";
}

.reportSection {
  position: relative;
}

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

</style>
