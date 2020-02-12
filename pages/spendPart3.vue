<template>
  <div>
    <h1 class="pageTitle" v-html="$t('MonitorControlFinances')" />
    <section>
      <videoPlayer ref="vp" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0rk3xq64/flavorId/0_55i24m70/name/a.mp4" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_mg1mled1/flavorId/0_y6cb8jdy/name/a.mp4" chapters chapterFile="SpendPart3.vtt" posterFile="video_poster.PNG" :restartAt="parseInt(thatPoint)" toResume="setSpendPart3" :modalArray="modalArray"  @timeupdate="updatePercent($event)" />
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="cbTranscript-1" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <h2>Continuous Monitoring</h2>
                  <p>As a manager, you are responsible for ensuring that commitments and expenditures are monitored throughout the year and that they are accurately recorded in the financial system.</p>
                  <p>This monitoring is both at a transactional level and at a strategic level. Depending on the situation, it may involve one or more of the following actions: </p>
                  <ul>
                    <li>Close commitments that are no longer required;</li>
                    <li>Amend contracts for scope, time, and amount;</li>
                    <li>Update the salary forecast to reflect your current and planned staffing needs; </li>
                    <li>Plan for potential budget shortfalls or pressures;</li>
                    <li>Flag budget surpluses to senior management; and</li>
                    <li>Make expenditure adjustments.</li>
                  </ul>
                  <p>Let&rsquo;s play with a few examples.</p>
                  <hr>
                  <h2>Data Comparison</h2>
                  <p>Taking care of your budget is really important because the decisions you make within your budget may influence your sector, your branch, or even your department. </p>
                  <p>At year-end, you will need to justify any deficit or surplus. </p>
                  <p>On one hand, overspending can cause a deficit, which puts a lot of pressure on senior management to find additional sources of funds to compensate. </p>
                  <p>On the other hand, a surplus should be flagged as early as possible so that your unit doesn&rsquo;t miss an opportunity to reallocate unused funds to another activity or to another unit. </p>
                  <p>Monthly reports help you track your financials. They are sometimes called “Financial Situation Reports” - or FSRs - and are usually produced by the finance team within your organization. </p>
                  <p>What is in the FSR needs to match what is actually going on in your unit. If it doesn&rsquo;t, then you need to take appropriate action to resolve it. </p>
                  <p>In the next activity, you will have a chance to review and adjust your financials according to new information. </p>
                  <hr>
                  <h2>Year-End Procedures</h2>
                  <p>Since most budgets are allocated by Parliament on an annual basis and must be used within the fiscal year, goods and services must be received on or before March 31. </p>
                  <p>However, you will most likely have a number of outstanding expenditures that you will not be able to pay before the end of the fiscal year. To help with that, the Finance unit will establish Payables at Year-End (PAYE) or Receivables at Year-End (RAYE) in the financial system after receiving your list of outstanding payables. </p>
                  <p>A P-A-Y-E is an amount owed for goods and/or services delivered in the old fiscal year using old year funds but paid in the new fiscal year when the supplier invoice is received. </p>
                  <p>An R-A-Y-E is an amount due from another department for goods and/or services delivered in the old fiscal year, for which receipt of payment will be in the new fiscal year.</p>
                  <p>Usually - again, depending on the practices within your department - Finance will send out year-end instructions about how to establish a P-A-Y-E or R-A-Y-E. These instructions will also include specific requirements with respect to the minimum dollar amount and the timeline. </p>
                  <p>Contracts can be a bit tricky when we get close to the end of the fiscal year. Here are a couple of things to keep in mind. </p>
                  <ol>
                    <li>Pay attention to the deadlines set by procurement. You may not be able to create a purchase order as you near year-end. </li>
                    <li>Follow up with suppliers to make sure that the goods or services will be delivered before year-end. If the supplier is unable to deliver before March 31, talk to procurement about possible steps. </li>
                  </ol>
                  <hr>
                  <h2>Quiz</h2>
                  <p>So now that you know how to initiate expenditures, authorize commitments, exercise financial authority and monitor and control finances, let&rsquo;s see what you remember by taking this short quiz.</p>
                  <h2>Section Completed</h2>
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <h2>Suivi continu </h2>
                  <p>En tant que gestionnaire, vous avez la responsabilité de veiller à ce que les engagements et les dépenses soient suivis tout au long de l&rsquo;année et qu&rsquo;ils soient enregistrés avec exactitude dans le système financier.</p>
                  <p>Ce suivi se fait à la fois au niveau transactionnel et au niveau stratégique. Selon la situation, cela se traduit par l&rsquo;une ou l&rsquo;autre des actions suivantes : </p>
                  <ul>
                    <li>Fermer les engagements qui ne sont plus requis; </li>
                    <li>Modifier les contrats en fonction de leur portée, de leur durée et des montants qui leur sont alloués;</li>
                    <li>Mettre à jour les prévisions salariales pour tenir compte de vos besoins actuels et futurs en matière de dotation; </li>
                    <li>Planifier pour les insuffisances ou les pressions budgétaires;</li>
                    <li>Signaler les excédents budgétaires à la haute direction; et</li>
                    <li>Apporter des ajustements aux dépenses.</li>
                  </ul>
                  <p>Amusons-nous maintenant avec quelques exemples.</p>
                  <hr>
                  <h2>Comparaison des données</h2>
                  <p>Il est essentiel de porter une attention particulière et soutenue à votre budget parce que les décisions que vous prenez au sein de votre budget peuvent avoir une incidence sur votre secteur, votre direction générale, ou même votre ministère. </p>
                  <p>À la fin de l&rsquo;année fiscale, vous devez justifier tout déficit ou surplus.</p>
                  <p>D&rsquo;une part, le fait de dépasser votre budget pourrait causer un déficit, ce qui met beaucoup de pression sur la haute direction de trouver d&rsquo;autres sources de financement pour compenser.</p>
                  <p>D&rsquo;autre part, un surplus devrait être signalé le plus tôt possible sans quoi on pourrait manquer l&rsquo;occasion de réaffecter les fonds inutilisés à une autre activité ou à une autre unité.</p>
                  <p>Les rapports mensuels vous aident à suivre vos dépenses. On les appelle parfois “ Rapports sur la situation financière” - ou RSF - et sont habituellement produits par l&rsquo;unité des Finances de votre organisation. </p>
                  <p>Ce qui se trouve dans votre RSF doit refléter ce qui se passe dans votre unité. Si ce n&rsquo;est pas le cas, vous devez faire un suivi afin de résoudre cet écart.</p>
                  <p>Dans la prochaine activité, vous aurez l&rsquo;occasion de réviser et d&rsquo;ajuster vos données financières selon les nouvelles informations.</p>
                  <hr>
                  <h2>Procédures de fin d&rsquo;année</h2>
                  <p>Étant donné que la plupart des budgets sont établis par le Parlement sur une base annuelle et qu&rsquo;ils doivent être utilisés au cours de l&rsquo;exercice financier, les biens et services doivent être reçus au plus tard le 31 mars. </p>
                  <p>Il est toutefois fort probable que vous ne soyez pas en mesure de compléter le paiement de toutes vos dépenses avant la fin de l&rsquo;exercice financier. C&rsquo;est pourquoi l&rsquo;unité des Finances vous demandera d&rsquo;établir des créditeurs à la fin de l&rsquo;exercice (CAFE) ou des débiteurs à la fin de l&rsquo;exercice (DAFE) après avoir reçu votre liste de payables non réglés. </p>
                  <p>Un CAFE est un montant dû pour des biens et/ou des services fournis dans l&rsquo;année financière précédente, en se servant des fonds de l&rsquo;année financière précédente, mais payés dans la nouvelle année financière alors qu&rsquo;on aura reçu la facture du fournisseur. </p>
                  <p>Un DAFE est un montant dû d&rsquo;un autre ministère pour des biens et/ou des services fournis dans l&rsquo;année financière précédente pour lesquels le paiement sera fait dans la nouvelle année financière. </p>
                  <p>D&rsquo;habitude, encore une fois selon les pratiques courantes au sein de votre ministère, vous recevrez des instructions de fin d&rsquo;année pour l&rsquo;établissement des CAFE et des DAFE. Ces instructions incluront aussi les critères quant au montant minimal requis et à l&rsquo;échéancier. </p>
                  <p>Lorsqu&rsquo;on s&rsquo;approche de la fin de l&rsquo;année financière, les choses peuvent se compliquer un peu en ce qui a trait aux contrats. Voici deux choses à tenir à l&rsquo;esprit.</p>
                  <ol>
                    <li>Portez attention aux délais fixés par le service d&rsquo;approvisionnement. Il se peut que vous ne puissiez pas créer de commande d&rsquo;achat en fin d&rsquo;année. </li>
                    <li>Faites un suivi auprès des fournisseurs pour vous assurer que les biens ou services seront livrés avant la fin de l&rsquo;année. Si le fournisseur n&rsquo;est pas en mesure de livrer avant le 31 mars, discutez des étapes possibles avec le service d&rsquo;approvisionnement. </li>
                  </ol>
                  <hr>
                  <h2>Quiz</h2>
                  <p>Maintenant que vous savez comment engager des dépenses, autoriser des engagements, exercer des pouvoirs financiers, et puis surveiller et contrôler les finances, voyons ce dont vous vous souvenez en répondant à ce petit quiz!</p>
                  <h2>Section complétée</h2>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </section>
    <section>
      <b-modal no-stacking id="ContinuousMonitoring" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('ContinuousMonitoringTitle')}}</template>
        <ContinuousMonitoring />
      </b-modal>
      <b-modal id="DataComparison" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('DataComparisonTitle')}}</template>
        <DataComparison />
      </b-modal>
      <b-modal id="YearEndProcedures" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('YearEndProceduresTitle')}}</template>
        <YearEndProcedures />
      </b-modal>
      <b-modal id="spendQuizModal" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
        <spendQuiz />
      </b-modal>
    </section>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.png" :text="$t('KeyMessages')" />
      <microlearning path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning path="spendPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning youAreHere path="spendPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)"/>
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import ContinuousMonitoring from '~/components/slides/spend/spendPart3ContinuousMonitoring'
import DataComparison from '~/components/slides/spend/spendPart3DataComparison'
import YearEndProcedures from '~/components/slides/spend/spendPart3YearEnd'
import spendQuiz from '~/components/slides/spend/spendPart3Quiz'
export default {
  data() {
    return {
      modalArray: ["ContinuousMonitoring", "DataComparison", "YearEndProcedures", "spendQuizModal"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    ContinuousMonitoring,
    DataComparison,
    YearEndProcedures,
    spendQuiz
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.spendPart3
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
  "TakeTheQuiz":"Take the Quiz",
  "DataComparisonTitle":"Activity: Data Comparison",
  "ContinuousMonitoringTitle":"Activity: Continuous Monitoring",
  "YearEndProceduresTitle":"Activity: Year-End Procedures",
  "gotIt":"Continue to next segment",
  "jumpModalParts":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "spendSectionBar": "SPEND"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "DataComparisonTitle":"Activité: Comparaison des données",
  "ContinuousMonitoringTitle":"Activité: Suivi continu",
  "YearEndProceduresTitle":"Activité: Procédures de fin d&rsquo;année",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalParts":"Sauter à l&rsquo;activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>
