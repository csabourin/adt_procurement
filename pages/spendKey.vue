<template>
  <div class="text-center">
    <h1 class="pageTitle">{{$t('KeyMessages')}}</h1>
    <p><img src="~/assets/KeyMessS.png"></p>
    <p>&nbsp;</p>
    <span class="plan"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></span>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col><span v-if="$i18n.locale=='en'">
            <p><strong>Initiate Expenditures and Authorize Commitments&nbsp;</strong></p>
            <ul>
              <li>When you decide to obtain goods or services that will result in the eventual spending of funds, such as the decision to hire staff, order supplies, or authorize travel, you are initiating an expenditure.</li>
              <li>When you commit an expenditure, you are certifying that the money is available. This is known as section 32 of the FAA<em>.&nbsp;</em></li>
              <li>A delegation of financial authority chart shows your organization&rsquo;s official spending and financial authorities.&nbsp;</li>
              <li>To learn what you can initiate and commit, consult your own signed delegation form. For those expenditures for which you do not have authority, consult your organization&rsquo;s delegation of financial authority chart.&nbsp;</li>
            </ul>
          </span></b-col>
        <b-col><span v-if="$i18n.locale=='en'">
            <p><strong>Exercise financial authority&nbsp;</strong></p>
            <ul>
              <li>When you certify that the work has been performed as required, and services and supplies have been satisfactorily rendered, this is known as section 34.</li>
              <li>When your financial department ensures that the payment complies with policy requirements, this is section 33.</li>
            </ul>
            <p><strong>Monitor and control finances</strong></p>
            <ul>
              <li>To help you track your work plan and budget, you will continually monitor your spending and manage your risks.</li>
            </ul>
          </span></b-col>
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
            Jetez un coup d'oeil au PM de votre organisation en sélectionnant le lien suivant: <a href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/depenses-prevues/rapports-plans-priorites.html" target="_blank">Plans ministériels</a>
          </span></p>
        </b-col>
      </b-row>
    </b-container>
    <div class="bottomNav spendSection">
      <microlearning path="spendKey" youAreHere size="140" completion="100" imagePath="KeyMessS.png" :text="$t('KeyMessages')" />
      <microlearning  imagePath="KeyMessR.png" size="140" time="20" completion="80" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning  imagePath="KeyMessR.png" size="140" time="20" completion="80" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning size="140" time="20" completion="10" imagePath="CreateBud.png" :text="$t('MonitorControlFinances')" />
      <microlearning size="140" time="15" tmp_imagePath="TestPlan.png" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
import download from "~/components/fileDownload"
import microlearning from "~/components/microlearning"
export default {
  components: {
    microlearning,
    download
  }
}

</script>
<i18n>{
  "en":
  {
  "keyPlanQuote": " Accountability breeds response-ability ",
  "fileSet": "Files in this section",
  "downloadPlan": "Download a Word template of the work plan"
  },
  "fr":
  {
  "keyPlanQuote": " Une bonne planification mène à une bonne performance. ",
  "fileSet": "Fichiers dans cette section",
  "downloadPlan": "Télécharger un modèle Word du plan de travail"
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

.bigQuote {
  font-size: 36px;
  padding-bottom: 2em;
  font-family: Roboto Medium;
  color: #608a93;
  background-image: linear-gradient(transparent 40%, white 40%, white 85%, transparent 85%, transparent 100%);
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

</style>
