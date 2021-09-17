<template>
  <div>
    <h1 class="pageTitle">
      {{ $t('ForecastBudget')}}
    </h1>
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_5vmdf8c6/flavorId/0_d0abo662/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_imr7h4hm/flavorId/0_5t09682o/name/a.mp4" chapters chapterFile="BudgetChapters.vtt" ccFile="forecastBudgetCC.vtt" posterFile="forecastBudget.png" :restartAt="thatPoint" toResume="setforecast" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <!-- Used to jump to activities<button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                      <span v-if="$i18n.locale=='en'">
                        <h2>1. Introduction</h2>
                        <p>In this section you will learn to </p>
                        <ul>
                          <li>verify your budget,</li>
                          <li>distinguish between spending and financial authorities and procurement authorities, and</li>
                          <li>confirm who has approval authority through financial delegation charts.</li>
                        </ul>
                        <p>This section should take you approximately 20 minutes to complete.</p>
                        <hr>
                        <h2>2. Check Your Budget</h2>
                        <p>Before beginning a procurement process, you must check that there are sufficient funds in your budget to cover the costs of the goods, the services and the construction that you are planning. If you don’t have enough funds, you may have to turn to other sources to find the money, such as</p>
                        <ul>
                          <li>transfer funds within your own budgets,</li>
                          <li>get extra money from other managers,</li>
                          <li>use an untapped surplus your director might have, </li>
                          <li>prepare a Treasury Board submission or a memorandum to Cabinet, and, </li>
                          <li>depending on your business, tap into an interdepartmental settlement. </li>
                        </ul>
                        <p>The following activity will help you determine if you have enough funds in your budget.</p>
                        <hr>

                        <h2>3. Financial Authorities and Procurement Authorities</h2>
                        <p>Now that you know if you have enough money in your budget, let’s check to see if you have the proper authority to begin buying the resources that you need!</p>
                        <p>Did you know that Parliament created two authority streams? It created one for financial authorities and another for procurement authorities.</p>
                        <p>To exercise your financial authority, you need to successfully complete this course, submit your signed delegation card to your finance unit and receive your formal delegation of authority in writing from your finance unit.</p>
                        <p>Managers typically have two delegated authorities: section 32 for commitment authority and section 34 for certification authority. Section 32 would allow you to order office supplies, while section 34 would allow you to sign off on having received the supplies. For more information on sections 32 and 34, see the toolbox. </p>
                        <p>Then, section 33 allows the finance unit to pay for the supplies. In certain situations, for example, temporary help services, you will need to go through a procurement process because it involves a contract. These situations are governed by section 41 of the Financial Administration Act and would typically be managed by the procurement section in your organization.</p>
                        <p>As for procurement authorities, they are divided into two streams, one for goods and the other for services. </p>
                        <p>Under the Department of Public Works and Government Services Act, the Minister of Public Services and Procurement Canada, PSPC, has the exclusive authority to acquire goods. The Minister of PSPC then delegates this authority to ministers to make purchases for their respective organizations according to specific contract values. Through their organizational delegation instruments, contracting authority is then delegated to positions once certain conditions have been met.</p>
                        <p>Parliament grants authority for procurement services to ministers through their organization’s enabling legislation. Treasury Board limits ministerial authorities through policies like its Contracting Policy and Common Services Policy. Contracting authority for services can also be delegated to “positions” through the organizational delegation instrument and can be exercised once certain conditions have been met. </p>
                        <p>To know what and how much you can authorize, consult your own signed delegation card and your organization’s delegation chart.</p>
                        <p>Again, the format of these documents will differ depending on where you work. </p>
                        <hr>

                        <h2>4. In Real Life</h2>
                        <p>Take what you have learned into real life!</p>
                        <p>Your organization will have its own ways of doing things. Take a time out from the course to consult your budgets and your organization’s financial signing authority chart.</p>
                        <p>What are your department’s procurement spending limits? Do you need to consult Public Services and Procurement Canada? Does your department have its own set of procurement rules, such as the Department of National Defence or the Department of Justice?</p>

                        <hr>

                        <h2>5. Quiz</h2>
                        <p>Now that you know how to verify your budget, distinguish between financial and procurement authorities, and consult your financial delegation charts, let’s see what you remember by taking this short quiz.</p>
                        <hr>
                        <h2>9. Section completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Introduction</h2>
                        <ul>
                          <li>vérifier votre budget,</li>
                          <li>faire la distinction entre les pouvoirs de dépenser, les pouvoirs financiers et les pouvoirs en matière d’approvisionnement, et</li>
                          <li>confirmer qui a le pouvoir d’approbation en consultant les tableaux de délégation des pouvoirs financiers. </li>
                        </ul>
                        <p>Il vous faudra environ 20 minutes pour compléter cette section.</p>
                        <hr>

                        <h2>2. Vérifier votre budget</h2>
                        <p>Avant de lancer un processus d’approvisionnement, vous devez vérifier que votre budget contient suffisamment de fonds pour couvrir les coûts des biens, des services et des activités de construction que vous prévoyez. Si vous n’avez pas suffisamment de fonds, vous devrez peut-être vous tourner vers d’autres sources pour trouver l’argent nécessaire, par exemple </p>
                        <ul>
                          <li>transférer des fonds dans vos propres budgets,</li>
                          <li>obtenir de l’argent supplémentaire d’autres gestionnaires,</li>
                          <li>utiliser un surplus inexploité que votre directeur pourrait avoir,</li>
                          <li>préparer une présentation au Conseil du Trésor ou un mémoire au Cabinet, et </li>
                          <li>selon votre secteur d’activité, faire appel à un règlement interministériel. </li>
                        </ul>
                        <p>L'activité suivante vous aidera à déterminer si vous disposez de fonds suffisants dans votre budget.</p>
                        <hr>

                        <h2>3. Pouvoirs financiers et pouvoirs en matière d’approvisionnement</h2>
                        <p>Maintenant que vous savez si vous avez assez d’argent dans votre budget, vérifions si vous avez l’autorité nécessaire pour commencer à acheter les ressources dont vous avez besoin!</p>
                        <p>Saviez-vous que le Parlement a créé deux catégories de pouvoirs? Une pour les pouvoirs financiers et une autre pour les pouvoirs en matière d’approvisionnement. </p>
                        <p>Pour exercer votre délégation financière, vous devez réussir le présent cours, soumettre votre carte de délégation signée à votre service des finances et obtenir votre délégation de pouvoir officielle par écrit de la part de votre service des finances.</p>
                        <p>Les gestionnaires ont généralement deux pouvoirs délégués : l’article 32 pour engager les fonds et l’article 34 pour l’autorité de certification. L’article 32 vous permet de commander des articles de bureau, par exemple, puis l’article 34 vous permet de certifier que vous les avez bel et bien reçus. Pour plus d’information sur les articles 32 et 34, consultez la boîte à outils.</p>
                        <p>Ensuite, l’article 33 permet à l’unité des finances de payer la facture. Dans certaines situations, par exemple des services d’aide temporaire, vous devrez passer par un processus d’approvisionnement parce que cela implique un contrat. Habituellement, ce serait au groupe de l’approvisionnement de votre organisation à qui reviendraient ces démarches, en vertu de l’article 41 de la Loi sur la gestion des finances publiques.</p>
                        <p>Pour les pouvoirs en matière d’approvisionnement, ils sont divisés en deux catégories, l’une pour les biens et l’autre pour les services.</p>
                        <p>En vertu de la Loi sur le ministère des Travaux publics et des Services gouvernementaux, le ministre des Services publics et de l’Approvisionnement, SPAC, a le pouvoir exclusif d’acquérir des biens. Le ministre de la SPAC délègue ensuite ce pouvoir aux ministres pour qu’ils effectuent des achats pour leurs organisations respectives selon des valeurs contractuelles spécifiques. Grâce à leurs instruments de délégation organisationnelle, les pouvoirs en matière de l’approvisionnement sont ensuite délégués aux postes une fois que certaines conditions ont été remplies.</p>
                        <p>Le Parlement accorde aux ministres le pouvoir de fournir des services d’approvisionnement par le biais des lois habilitantes de leur organisation. Le Conseil du Trésor limite les pouvoirs ministériels par le biais de politiques telles que sa Politique sur les marchés et sa Politique sur les services communs. Les autorités contractantes peuvent également être déléguées à des « postes » par le biais de l’instrument de délégation organisationnelle et peuvent être exercées une fois que certaines conditions ont été remplies.</p>
                        <p>Pour savoir ce que vous pouvez autoriser et combien vous pouvez utiliser, consultez votre propre carte de délégation signée et le tableau de délégation de votre organisation.</p>

                        <hr>

                        <h2>4. Dans la vraie vie</h2>
                        <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de consulter vos budgets et le tableau de délégation des pouvoirs de signature en matière financière de votre organisation. </p>
                        <p>Quelles sont les limites de dépenses de votre ministère en approvisionnement? Avez-vous besoin de consulter Services publics et Approvisionnement Canada? Votre ministère a-t-il son propre ensemble de règles en approvisionnement, comme le ministère de la Défense nationale ou le ministère de la Justice?</p>
                        <hr>
                        <h2>5. Quiz</h2>
                        <p>Maintenant que vous savez comment vérifier votre budget, comment faire la distinction entre les pouvoirs financiers et les pouvoirs en matière d’approvisionnement, et comment consulter vos tableaux de délégation financière, voyons ce dont vous vous souvenez en répondant à ce petit quiz.</p>
                        <hr>
                        <h2>9. Section complétée</h2>
                        <p>[Texte à l’écran indiquant l’instruction Section complétée.]</p>

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
        <!--1--> <b-modal no-stacking id="purpose" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('activityLinks')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='fr'">
      <p>Pour une revue des budgets, voir la section <strong>Créer un budget</strong> du cours <a href="https://adtfinance.netlify.app/fr"> La saine gestion des fonds publics</a>. Ce lien est également disponible dans la boîte à outils.</p>
      </div>
      <div v-if="$i18n.locale=='en'">
      <p>For a review of budgets, see the <strong>Create a Budget</strong> module of the <a href="https://adtfinance.netlify.app/en">Responsible Use of Public Funds</a> course. This link is also available in the Toolbox.  </p>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="estimateCost" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('estimateCost')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <estimateCost />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
       <b-modal no-stacking id="conductRisk" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('conductRiskTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <conductRisk />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
        <b-modal id="budgetAnalyze" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('budgetAnalyzeActivity')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <budgetAnalyzeActivity />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="forecastBudget" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('forecastBudgetTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <budgetForecastActivity />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
          <template v-slot:modal-header="{ close }">
            <h3 class="h5">
              <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('InRealLife')}}
            </h3>
            <button type="button" aria-label="Close" class="close" @click="close()">×</button>
          </template>
          <b-row align-h="center">
            <b-col cols="12" md="9">
              <img src="~/assets/inRealLifeBudget.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-html="$t('IRLText')"></p>
            </b-col>
          </b-row>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <budgetQuiz />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
     <div class="bottomNav planSection">
    <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
    <microlearning path="analyzegoods" imagePath="BuildWP.svg" size="140" time="15" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('AnalyzeGoods')" type="video" />
    <microlearning path="forecastbudget" youAreHere imagePath="CreateBud.svg" size="140" time="30" :completion="$store.state.currentPlaying.forecast_player" :text="$t('ForecastBudget')" type="video" />
    <microlearning size="140" path="budgetauthorities" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="ExerciseFinancialAuthority.svg" :text="$t('BudgetAuthorities')" type="video" />
    <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
  </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import conductRisk from '~/components/slides/plan/conductRisk'
import estimateCost from '~/components/slides/plan/estimateCost'
import budgetQuiz from '~/components/slides/plan/budgetQuiz'
import continuePopup from '~/components/continuePopup'
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  data() {
    return {
      modalArray: ["purpose", "estimateCost", "conductRisk", "reallife", "quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    estimateCost,
    conductRisk,
    budgetQuiz,
    continuePopup,
    download,
    HTMLJobaidLink
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setforecast_player',e)
    }
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.forecast
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    }
  }
}
</script>
<style scoped>

.planSectionBar {
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.planSectionBar span {
  padding:2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height:100%;
  margin-left:15px;
}
</style>
<i18n>{
  "en":{
  "activityLinks":"References: External Links ",
  "TakeTheQuiz":"Take the Quiz",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "conductRiskTitle":"Activity: Multiple Choice ",
  "estimateCost":"Activity: Estimate Costs – Key Terms",
  "budgetAnalyzeActivity":"Activity: Analyze Available Information",
  "forecastBudgetTitle":"Activity: Forecast Your Budget Requirements",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Take what you have learned into real life!</p><p>Your organization will have its own ways of doing things. Take a time out from the course to see how budgets are forecasted in your department.</p><p>Connect with your colleagues, director or financial management advisor, and chat about existing financial resources for your procurement needs.</p>",
  "gotIt":"Continue to next segment",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "activityLinks":"Référence : Liens externes ",
  "TakeTheQuiz":"Répondez au quiz",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "conductRiskTitle":"Activité : Choix multiple ",
  "estimateCost":"Activité : Estimer les coûts – Termes clés ",
  "budgetAnalyzeActivity":"Activité : Analyser les budgets précédents et en cours",
  "forecastBudgetTitle":"Activité : Prévoyez vos besoins budgétaires",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris - dans la vraie vie! </p><p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour voir comment les budgets sont établis au sein votre ministère.</p><p>Consultez vos collègues, votre directeur ou votre conseiller en gestion financière, et discutez des ressources financières existantes pour vos besoins en matière d'approvisionnement.</p>",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l’activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>