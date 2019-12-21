<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessS.png" alt=""></p>
    <p>&nbsp;</p>
    <span class="spend"><q class="bigQuote" :class="{'french-quote':$i18n.locale=='fr'}">{{$t('keyPlanQuote')}}</q></span>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col><span v-if="$i18n.locale=='en'">
            <h3>Initiate Expenditures and Authorize Commitments&nbsp;</h3>
            <ul>
              <li>When you decide to obtain goods or services that will result in the eventual spending of funds, such as the decision to hire staff, order supplies, or authorize travel, you are initiating an expenditure.</li>
              <li>When you commit an expenditure, you are certifying that the money is available. This is known as section 32 of the FAA<em>.&nbsp;</em></li>
              <li>A delegation of financial authority chart shows your organization&rsquo;s official spending and financial authorities.&nbsp;</li>
              <li>To learn what you can initiate and commit, consult your own signed delegation form. For those expenditures for which you do not have authority, consult your organization&rsquo;s delegation of financial authority chart.&nbsp;</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
            <p>
              <h3>Engager et autoriser les d&eacute;penses</h3>
              <ul>
                <li>Lorsque vous d&eacute;cidez d'obtenir des biens ou des services qui entra&icirc;neront la d&eacute;pense &eacute;ventuelle de fonds, comme l'embauche de personnel, la commande de fournitures ou l'autorisation de voyager, vous engagez une d&eacute;pense.</li>
                <li>Lorsque vous engagez une d&eacute;pense, vous certifiez que l'argent est disponible. C'est ce qu'on appelle l'article 32 de la LGFP.</li>
                <li>Un tableau de d&eacute;l&eacute;gation des pouvoirs financiers indique les pouvoirs de d&eacute;penser et les pouvoirs financiers officiels de votre organisation.</li>
                <li>Pour savoir ce que vous pouvez initier et engager, consultez votre propre formulaire de d&eacute;l&eacute;gation sign&eacute;. Pour les d&eacute;penses pour lesquelles vous n'avez pas d'autorisation, consultez le tableau de d&eacute;l&eacute;gation des pouvoirs financiers de votre organisation.</li>
              </ul>
          </span>
        </b-col>
        <b-col><span v-if="$i18n.locale=='en'">
            <h3>Exercise financial authority&nbsp;</h3>
            <ul>
              <li>When you certify that the work has been performed as required, and services and supplies have been satisfactorily rendered, this is known as section 34.</li>
              <li>When your financial department ensures that the payment complies with policy requirements, this is section 33.</li>
            </ul>
            <h3>Monitor and control finances</h3>
            <ul>
              <li>To help you track your work plan and budget, you will continually monitor your spending and manage your risks.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
            <p>
              <h3>Exercer son pouvoir financier</h3>
              <ul>
                <li>Lorsque vous attestez que les travaux ont &eacute;t&eacute; ex&eacute;cut&eacute;s conform&eacute;ment aux exigences et que les services et les fournitures ont &eacute;t&eacute; rendus de fa&ccedil;on satisfaisante, il s'agit de l'article 34.</li>
                <li>Lorsque votre service financier s'assure que le paiement est conforme aux exigences de la politique, il s'agit de l'article 33.</li>
              </ul>
              <h3>Surveiller et contr&ocirc;ler les finances</h3>
              <ul>
                <li>Pour vous aider &agrave; suivre votre plan de travail et votre budget, vous surveillerez continuellement vos d&eacute;penses et g&eacute;rerez vos risques.</li>
              </ul>
          </span></b-col>
      </b-row>
      <b-row>
        <b-col><!-- <br>
          <hr>
          <h3>{{$t('fileSet')}}</h3>
          <download filename="ADT_Ressources_360.pdf" iconColor="Scan360Background" size=128 :title="$t('download360')" :line1="$t('t360Line1')" :line2="$t('t360Line2')" />
          <download filename="WorkPlan_Template.docx" size=128 iconColor="planBackground" :title="$t('downloadPlan')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" />
         --></b-col>
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
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning youAreHere path="spendKey" size="140" completion="100" imagePath="KeyMessS.png" :text="$t('KeyMessages')" />
      <microlearning path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" completion="80" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning path="spendPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" completion="80" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning path="spendPart3" size="140" ime="20" completion="10" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" />
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
  "downloadPlan": "Download a Word template of the work plan",
  "spendSectionBar": "SPEND"
  },
  "fr":
  {
  "keyPlanQuote": " L'imputabilité favorise la responsabilité ",
  "fileSet": "Fichiers dans cette section",
  "downloadPlan": "Télécharger un modèle Word du plan de travail",
  "spendSectionBar": "DÉPENSES"
  }
  }</i18n>
<style type="text/css" scoped>
span.spend:before {
  background-color: #cac1ca;
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
  font-family: Roboto Medium;
  color: #7d677d;
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
  color: #cac1ca;
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
