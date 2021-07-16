<template>
  <div class="text-center">
    <h2 class="pageTitle">{{$t('KeyMessages')}}</h2>
    <p><img src="~/assets/KeyMessS.svg" alt="" role="presentation" width="250px"></p>
    <p>&nbsp;</p>
    <b-container style="text-align: left">
      <b-row>
        <b-col cols="12" lg><span v-if="$i18n.locale=='en'">
            <h3>Technical and Bid Requirements and Procurement Strategy</h3>
            <ul>
              <li>You identify and define your requirements while taking into account any special considerations or other concerns, such as accessibility, Indigenous procurement and green procurement.</li>
              <li>Then, you draft your specifications in the form of a statement of work or a statement of requirement with input from stakeholders. Comply with the legal and policy framework to ensure fairness, openness and transparency throughout the procurement process.</li>
              <li>Finally, you choose a procurement strategy with the help of a procurement specialist. This could be a competitive process, a sole-source contract or a standing offer, for example.</li>
            </ul>
          </span>
          <span v-if="$i18n.locale=='fr'">
              <h3>Exigences techniques et de soumission et stratégie d’approvisionnement</h3>
              <ul>
                <li>Vous devez relever et définir vos exigences en tenant compte de toute considération particulière ou de toute autre préoccupation, par exemple l’accessibilité, l’approvisionnement auprès d’entreprises autochtones et les achats écologiques.</li>
                <li>Ensuite, vous devez rédiger vos spécifications sous la forme d’un énoncé de travail ou d’un énoncé des exigences en faisant appel aux intervenants. Respectez le cadre législatif et stratégique pour assurer l’équité, l’ouverture et la transparence de l’ensemble du processus d’approvisionnement.</li>
                <li>Enfin, vous devez choisir une stratégie d’approvisionnement à l’aide d’un spécialiste en approvisionnement. Vous pourriez par exemple choisir un processus concurrentiel, un contrat à fournisseur unique ou une offre à commandes.</li>
              </ul>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" lg><span v-if="$i18n.locale=='en'">
            <h3>Solicit, Evaluate, Approve and Award Competitive Contracts</h3>
            <ul>
              <li>With the help of a procurement specialist, you prepare the bid solicitation documents and solicit the bid.</li>
              <li>Once the bidding closes, you evaluate the bids against the established criteria with the help of others and select a bidder.</li>
              <li>Then, the procurement specialist seeks to have the contract approved by the proper delegated financial and spending (expenditure initiation and transaction) authorities.</li>
              <li>Finally, once the contract is approved, the procurement specialist awards the contract.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
              <h3>Solliciter, évaluer, approuver et accorder des contrats concurrentiels</h3>
              <ul>
                <li>Avec l’aide d’un spécialiste en approvisionnement, vous devez préparer les documents de demande de soumissions et lancer l’invitation à soumissionner.</li>
                <li>À la clôture du processus de demande de soumissions, vous devez évaluer les soumissions en fonction des critères établis avec l’aide d’autres personnes, puis sélectionner un soumissionnaire.</li>
                <li>Ensuite, le spécialiste en approvisionnement fera approuver le contrat par la personne investie des pouvoirs délégués appropriés en matière de finances et de dépenses (pouvoir d’engager des dépenses et d’effectuer des transactions).</li>
                <li>Enfin, une fois le contrat approuvé, le spécialiste en approvisionnement en fera l’attribution.</li>
              </ul>
          </span></b-col>
      </b-row>
      <b-row>
          <b-col cols="12" lg><span v-if="$i18n.locale=='en'">
            <h3>Administer, Pay and Close-Out Contract</h3>
            <ul>
              <li>Once the contract has been awarded, you administer it with the help of the procurement specialist, ensuring that work is performed according to the terms and conditions and records are maintained throughout the process.</li>
              <li>Once the terms and conditions of the contract are met, you accept the deliverables and the delegated financial authority will perform the certification authority (s. 34 of the Financial Administration Act), which will then proceed to finance to perform the payment authority (s. 33 of the Financial Administration Act) and pay the contractor.</li>
              <li>Finally, once the contract has been completed, the procurement specialist will close the contract.</li>
            </ul>
          </span><span v-if="$i18n.locale=='fr'">
            <h3>Administration, paiement et clôture du contrat</h3>
              <ul>
                <li>Une fois le contrat attribué, vous devez l’administrer avec l’aide du spécialiste en approvisionnement pour vous assurer que les travaux sont accomplis dans le respect des modalités et que des dossiers sont tenus à jour tout au long du processus.</li>
                <li>Lorsque les modalités du contrat sont remplies, vous devez accepter les produits livrables. La personne investie des pouvoirs financiers délégués doit exercer son pouvoir d’attestation (article 34 de la Loi sur la gestion des finances publiques), après quoi les Finances exerceront leur pouvoir de paiement (article 33 de la Loi sur la gestion des finances publiques) et paieront l’entrepreneur.</li>
                <li>Finalement, une fois le contrat achevé, le spécialiste en approvisionnement procédera à la clôture du contrat.</li>
              </ul>
          </span></b-col>
      </b-row>
      <b-row>
        <b-col>
          <keyMessagesFiles>
            <template v-slot:title>{{$t('fileSet')}}</template>
            <template v-slot:content>
              <b-row>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('procurementInstruments')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '134' : '139'" name="procurementInstruments" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
                </b-col>
                <b-col cols="12" sm="6" md="4" lg="2" class="text-center">
                  <download :texts="$t('s32s34')" size=128 iconColor="spendBackground" :fileSize="$i18n.locale == 'en' ? '149' : '149'" name="s32s34" />
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
    <div class="bottomNav spendSection" v-else>
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="procurePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="procurePart2" imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning path="procurePart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
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
  "spendSectionBar": "PROCURE"
  },
  "fr":
  {
  "keyPlanQuote": "La responsabilité engendre l’habileté.",
  "spendSectionBar": "ACHAT"
  }
  }</i18n>
<style type="text/css" scoped>

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
