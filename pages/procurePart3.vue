<template>
  <div>
    <h1 class="pageTitle" v-html="$t('MonitorControlFinances')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_mg1mled1/flavorId/0_0jrrhyl9/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0rk3xq64/flavorId/0_pj54ikc4/name/a.mp4"  chapters chapterFile="SpendPart3.vtt" ccFile="SpendPart3_captions.vtt" posterFile="spendPart3_poster.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart3" :modalArray="modalArray"  @timeupdate="updatePercent($event)" />
        </b-col>
      </b-row>
      <b-container>
        <b-row>
          <b-col>
            <div role="tablist" class="transcriptionBox">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
                </b-card-header>
                <b-collapse id="cbTranscript-1" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <span v-if="$i18n.locale=='en'">
                        <h2>1. Continuous Monitoring</h2>
                        <p>As a manager, you are responsible for ensuring that all commitments and expenditures are monitored throughout the year and that they are accurately recorded in the financial system.</p>
                        <p>This monitoring is both at a transactional level and at a strategic level. Depending on the situation, it may involve one or more of the following actions:</p>
                        <ul>
                          <li>Closing commitments that are no longer required.</li>
                          <li>Amending contracts for scope, time, and amount.</li>
                          <li>Updating the salary forecast to reflect your current and planned staffing needs. </li>
                          <li>Planning for potential budget shortfalls or pressures.</li>
                          <li>Flagging budget surpluses to senior management.</li>
                          <li>And making expenditure adjustments.</li>
                        </ul>
                        <p>Let’s play with a few examples.</p>
                        <hr>
                        <h2>2. Data Comparison</h2>
                        <p>Taking care of your budget is really important because the decisions you make within your budget may influence your sector, your branch, or even your department.</p>
                        <p>At the end of the fiscal year, you will need to justify any deficits or surpluses. Depending on your department, you may need to be within a certain percentage of your forecasts.</p>
                        <p>On one hand, overspending can cause a deficit, which puts a lot of pressure on senior management to find additional sources of funds to compensate.</p>
                        <p>On the other hand, a surplus should be flagged as early as possible so that your unit doesn’t miss an opportunity to reallocate unused funds to another activity, or another unit.</p>
                        <p>Monthly reports help you track your financials. They are sometimes called “financial situation reports” or FSRs and are usually produced by the Finance team within your organization.</p>
                        <p>What is in the FSR needs to match what is actually going on in your unit. If it doesn’t, then you need to take appropriate action to resolve the discrepancy. </p>
                        <p>In the next activity, you will have a chance to review and adjust your financial situation according to new information.</p>
                        <hr>
                        <h2>3. Year-End Procedures</h2>
                        <p>Since most budgets are allocated by Parliament on an annual basis and must be used within the fiscal year, goods and services must be received on or before March 31.</p>
                        <p>However, you will most likely have a number of outstanding expenditures that you will not be able to pay before the end of the fiscal year for goods that are in your possession. To help with that, the Finance unit will establish Payables at Year-End or Receivables at Year-End in the financial system after receiving your list of outstanding payables.</p>
                        <p>A P-A-Y-E is an amount owed for goods and/or services delivered in the old fiscal year using old year funds but paid in the new fiscal year when the supplier invoice is received.</p>
                        <p>An R-A-Y-E is an amount due from another department for goods and/or services delivered in the old fiscal year, for which receipt of payment will be in the new fiscal year.</p>
                        <p>Usually, again depending on the practices within your department—Finance will send out year-end instructions about how to establish a P-A-Y-E or an  R-A-Y-E. These instructions will also include specific requirements with respect to the minimum dollar amount and the timeline. </p>
                        <p>Contracts can be a bit tricky when we are close to the end of the fiscal year. Here are a couple of things to keep in mind:</p>
                        <ol>
                          <li>Pay attention to the deadlines set by Procurement. You may not be able to create a purchase order as you approach year-end. </li>
                          <li>Follow up with suppliers to make sure that the goods or services will be delivered before year-end. If it’s not possible before March 31, the expenditures will have to be paid using new year funding. Talk to Procurement about possible steps. </li>
                        </ol>
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>So now that you know how to initiate expenditures, authorize commitments, exercise financial authority and monitor and control finances, let’s see what you remember by taking this short quiz.</p>
                        <hr>
                        <h2>5. Section Completed</h2>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Suivi continu </h2>
                        <p>En tant que gestionnaire, vous avez la responsabilité de veiller à ce que les engagements et les dépenses soient suivis tout au long de l'année et qu’ils soient enregistrés avec exactitude dans le système financier.</p>
                        <p>Ce suivi se fait à la fois au niveau transactionnel et au niveau stratégique. Selon la situation, cela se traduit par l’une ou l’autre des actions suivantes :</p>
                        <ul>
                          <li>annuler les engagements qui ne sont plus nécessaires; </li>
                          <li>modifier les contrats en fonction de leur portée, de leur durée et des montants qui leur sont alloués;</li>
                          <li>mettre à jour les prévisions salariales pour tenir compte de vos besoins actuels et futurs en matière de dotation; </li>
                          <li>Planifier pour les insuffisances ou les pressions budgétaires;</li>
                          <li>signaler les excédents budgétaires à la haute direction;</li>
                          <li>et apporter des ajustements aux dépenses.</li>
                        </ul>
                        <p>Amusons-nous maintenant avec quelques exemples.</p>
                        <hr>
                        <h2>2. Comparaison des données</h2>
                        <p>Il est essentiel de porter une attention particulière et soutenue à votre budget parce que les décisions que vous prenez peuvent avoir une incidence sur votre secteur, votre direction générale, ou même votre ministère. </p>
                        <p>À la fin de l’exercice financier, vous devez justifier tout déficit ou surplus. Selon le ministère pour lequel vous travaillez, vous pourriez devoir demeurer à l’intérieur d’une marge d’un certain pourcentage de vos prévisions.</p>
                        <p>D’une part, le fait de dépasser votre budget pourrait causer un déficit, ce qui met beaucoup de pression sur la haute direction pour trouver d'autres sources de financement en compensation.</p>
                        <p>D’autre part, un surplus devrait être signalé le plus tôt possible sans quoi on pourrait manquer l’occasion de réaffecter les fonds inutilisés à une autre activité ou à une autre unité.</p>
                        <p>Les rapports mensuels vous aident à suivre vos dépenses. On les appelle parfois « Rapports sur la situation financière » - ou RSF - et sont habituellement produits par l’unité des Finances de votre organisation. </p>
                        <p>Ce qui se trouve dans votre RSF doit refléter ce qui se passe dans votre unité. Si ce n’est pas le cas, vous devez faire un suivi afin de résoudre cet écart.</p>
                        <p>Dans l’activité suivante, vous aurez l’occasion de réviser et d’ajuster vos données financières selon les nouvelles informations. </p>
                        <hr>
                        <h2>3. Procédures de fin d’année</h2>
                        <p>Étant donné que la plupart des budgets sont établis par le Parlement chaque année et qu’ils doivent être utilisés au cours de l'exercice financier, les biens et services doivent être reçus au plus tard le 31 mars.</p>
                        <p>Il est toutefois fort probable que vous ne soyez pas en mesure de payer le reste de vos dépenses avant la fin de l'exercice financier pour les biens qui sont en votre possession. C'est pourquoi l’unité des Finances établira des créditeurs à la fin de l'exercice (CAFE) ou des débiteurs à la fin de l'exercice (DAFE) après avoir reçu votre liste de payables non réglés.</p>
                        <p>Un CAFE est un montant dû pour des biens ou des services fournis dans l’exercice financier précédent, en se servant des fonds de l’exercice financier précédent, mais payés dans le nouvel exercice financier alors qu’on aura reçu la facture du fournisseur.</p>
                        <p>Un DAFE est un montant dû d’un autre ministère pour des biens ou des services fournis dans l’exercice financier précédent pour lesquels le paiement sera fait dans le nouvel exercice financier. </p>
                        <p>D’habitude, encore une fois selon les pratiques courantes dans votre ministère, vous recevrez des instructions de fin d'année pour l’établissement des CAFE et des DAFE. Ces instructions incluront aussi les critères quant au montant minimal exigé et à l'échéancier.</p>
                        <p>Lorsqu’on s’approche de la fin de l’exercice financier, les choses peuvent se compliquer un peu en ce qui a trait aux contrats. Voici deux choses à tenir à l’esprit.</p>
                        <ol>
                          <li>Portez attention aux délais fixés par le service d’approvisionnement. Il se peut que vous ne puissiez pas créer de commande d'achat en fin d'année.</li>
                          <li>Faites un suivi auprès des fournisseurs pour vous assurer que les biens ou services seront livrés avant la fin de l'année. Si ce n'est pas possible avant le 31 mars, les dépenses devront être payées en utilisant les fonds de la nouvelle année. Discutez des étapes possibles avec Approvisionnement.</li>
                        </ol>
                        <hr>
                        <h2>4. Quiz</h2>
                        <p>Maintenant que vous savez comment engager et autoriser des dépenses, exercer des pouvoirs financiers, et surveiller et contrôler les finances, voyons ce dont vous vous souvenez en répondant à ce petit quiz!</p>
                        <hr>
                        <h2>5. Section complétée</h2>
                      </span>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div>
      <b-modal no-stacking id="Introduction" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/infoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('Introduction')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <p>{{$t('part3IntroductionText')}}</p>
        <hr>
        <windowPortal :open="openChart" @close="openChart = false">
          <delegAutorityEn v-if="$i18n.locale=='en'" />
          <delegAutorityFr v-if="$i18n.locale=='fr'" />
        </windowPortal>
        <p><b-button role="link" @click="openChart = true">{{$t('openChartButton')}}</b-button></p>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal no-stacking id="AdministerContract" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AdministerContractTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <AdministerContract />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="RecordsMaintained" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('RecordsMaintainedTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <RecordsMaintained />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="AcceptDeliverables" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AcceptDeliverablesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <AcceptDeliverables />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="CertificationPaymentAuthorities" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('CertificationPaymentAuthoritiesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <CertificationPaymentAuthorities />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="CloseOutContract" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('CloseOutContractTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <CloseOutContract />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('IRLtext')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeWP.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>{{$t('IRLProcurePart3Text')}}</p>
            </b-col>
          </b-row>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="procurePart3Quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <procurePart3Quiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="procurePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" type="video" />
      <microlearning path="procurePart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" type="video" />
      <microlearning youAreHere path="procurePart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" type="video" />
      <microlearning path="procureKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import delegAutorityEn from "~/components/delegationChart/delegchart_en"
import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
import windowPortal from "~/components/newWindow"
import AdministerContract from '~/components/slides/spend/procurePart3AdministerContract'
import RecordsMaintained from '~/components/slides/spend/procurePart3RecordsMaintained'
import AcceptDeliverables from '~/components/slides/spend/procurePart3AcceptDeliverables'
import CertificationPaymentAuthorities from '~/components/slides/spend/procurePart3ECPA'
import CloseOutContract from '~/components/slides/spend/procurePart3CloseOutContract'
import procurePart3Quiz from '~/components/slides/spend/procurePart3Quiz'
export default {
  data() {
    return {
      openChart: false,
      modalArray: ["Introduction", "AdministerContract", "RecordsMaintained", "AcceptDeliverables", "CertificationPaymentAuthorities", "CloseOutContract", "InRealLife", "procurePart3Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    delegAutorityEn,
    delegAutorityFr,
    windowPortal,
    AdministerContract,
    RecordsMaintained,
    AcceptDeliverables,
    CertificationPaymentAuthorities,
    CloseOutContract,
    procurePart3Quiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.spendPart3
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
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setSpendPart3_player',e)
    }
  }
}

</script>
<style scoped>
.spendSection {
  position: relative;
}

.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
<i18n>{
  "en":{
  "Introduction": "References: External Links",
  "part3IntroductionText": "For more information, feel free to consult the following document. This document is also available in the Toolbox.",
  "documentText": "Document",
  "openChartButton": "Open the delegation of spending and financial signing authorities chart",
  "TakeTheQuiz":"Take the Quiz",
  "RecordsMaintainedTitle":"Activity: Ensure Records Are Maintained",
  "AdministerContractTitle":"Activity: Administer the Contract",
  "AcceptDeliverablesTitle":"Activity: Accept Deliverables",
  "CertificationPaymentAuthoritiesTitle": "Activity: Exercise Payment Authority",
  "CloseOutContractTitle": "Activity: Close Out the Contract",
  "IRLtext": "In Real Life",
  "IRLProcurePart3Text": "Take what you have learned into real life! Your organization will have their own ways of doing things. Take time out from the course to see how contracts are administered, paid out and closed in your department. And don’t forget to check the Toolbox for a job aid on the procurement process!",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "PROCURE"
  },
  "fr":{
  "Introduction": "Référence : Liens externes",
  "part3IntroductionText": "Pour plus d’informations, n’hésitez pas à consulter le document suivant. Il est également disponible dans la boîte à outils.",
  "documentText": "Document",
  "openChartButton": "Ouvrir le tableau de délégation de pouvoirs",
  "TakeTheQuiz":"Répondez au quiz",
  "RecordsMaintainedTitle":"Activité : Assurer la tenue des dossiers",
  "AdministerContractTitle":"Activité : Administrer le contrat",
  "YearEndProceduresTitle":"Activité : Accepter les produits livrables",
  "CertificationPaymentAuthoritiesTitle": "Activité :  Exercice du pouvoir de paiement",
  "CloseOutContractTitle": "Activité : Clôture de contrat",
  "IRLtext": "Dans la vraie vie",
  "IRLProcurePart3Text": "Appliquez ce que vous avez appris dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir comment les contrats sont administrés, payés et clôturés au sein de votre ministère. Et n’oubliez pas de consulter la boîte à outils pour obtenir un aide-mémoire sur le processus d’approvisionnement!",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "ACHAT"
  }
  }
</i18n>
