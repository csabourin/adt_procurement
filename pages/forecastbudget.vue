<template>
  <div>
    <h1 class="pageTitle">
      {{ $t('ForecastBudget')}}
    </h1>
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_t9m474l1/flavorId/0_3zgyushs/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_293fqdct/flavorId/0_iii1606k/name/a.mp4" chapters chapterFile="BudgetChapters.vtt" ccFile="forecastBudgetCC.vtt" posterFile="forecastBudget.png" :restartAt="thatPoint" toResume="setforecast" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <p>[Against a blue background, thin diagonal lines sway in waves. Text appears in a white box with rounded corners. “Module 2: Forecast Budget Requirements. 1. Introduction.”]</p>
                        <p>Narrator [N]: In this section, you will learn to determine the types of costs for goods and services to include in the procurement estimates, and to conduct a risk assessment and to draft a mitigation strategy in case the goods or services are not acquired.</p>
                        <p>[Two drawings appear one after the other: a calculator next to a clipboard, and a lightbulb beneath a warning sign.]</p>
                        <p>This section should take you approximately 30 minutes to complete.</p>
                        <p>[An outline of a circle appears. Half of it is filled in white with the words “30 minutes” underneath.]</p>
                        <p>[An External Links reference pop-up text box appears.]</p>
                        <hr>

                        <h2>2. Estimate Costs</h2>
                        <p>[Text appears in a white box with rounded corners. “2. Estimate Costs.” A drawing of a magnifying glass appears.]</p>
                        <p>Before any purchase, start by estimating how much your goods, services, or construction will cost. This could be done in many ways including:</p>
                        <ul>
                          <li>looking at previous purchases, </li>
                          <li>consulting purchasing catalogues or supplier websites, </li>
                          <li>doing an internet search,</li>
                          <li>gathering information from a supplier, </li>
                          <li>looking at rental options, or </li>
                          <li>asking for expert advice from Public Services and Procurement Canada.</li>
                        </ul>
                        <p>[More drawings appear beneath the magnifying glass. A shopping cart, a webpage, a computer, a text message above a laptop, a key, and a Canadian flag enclosed in a circle. A drawing of a stack of coins appears.]</p>
                        <p>Don’t forget to find out if there are any other costs related to your purchase, such as delivery costs, life cycle costs, sustainment costs, and disposal costs. All should be included in your estimate. After all, you wouldn’t want to get a car if you can’t afford the auto insurance, gas, and maintenance!</p>
                        <p>[A drawing of a car appears.]</p>
                        <p>[An Estimate Costs – Key Terms activity pop-up text box appears.]</p>
                        <hr>

                        <h2>3. Conduct a Risk Assessment</h2>
                        <p>[Text appears in a white box with rounded corners. “3. Conduct a Risk Assessment.” A drawing of a work plan appears. The headings “Activities,” “Risk,” and “Mitigation” are circled.]</p>
                        <p>Ever wonder what would happen if you were unable to procure the resources that you needed? When procurement is not an option, you will need to find other ways to accomplish your activities. Hints on how you can do this are actually found in the risk and mitigation sections of your work plan. </p>
                        <p>[A drawing depicts a magnifying glass over a warning sign.]</p>
                        <p>To conduct a risk assessment and draft a mitigation strategy, you:</p>
                        <ul>
                          <li>identify any events that could stop you from delivering your activities, </li>
                          <li>determine the probability as to whether the event will happen or not, </li>
                          <li>identify any potential losses or impacts associated with the event, and</li>
                          <li>identify any actions you can take to lower the potential of that event happening.</li>
                        </ul>
                        <p>[Four drawings appear one after the other: a storm cloud over a delivery truck, a question mark inside of a lightbulb, a dollar bill with downward pointing arrows, and a magnifying glass over a warning sign.]</p>
                        <p>The following exercise will help you identify the risks associated with your activities.</p>
                        <p>[A Multiple-Choice activity pop-up text box appears.]</p>
                        <hr>

                        <h2>4. In Real Life</h2>
                        <p>[Text appears in a white box with rounded corners. “4. In Real Life.” A drawing depicts a pen writing onto a checklist next to a stack of coins.]</p>
                        <p>Take what you have learned into real life! Your organization will have its own ways of doing things. Take a time out from the course to see how budgets are forecasted in your department. </p>
                        <p>[A drawing depicts a man and woman speaking together. A speech bubble with a dollar sign appears over the man’s head.]</p>
                        <p>Connect with your colleagues, director, or financial management advisor, and chat about existing financial resources for your procurement needs.</p>
                        <p>[An In Real Life activity pop-up text box appears.]</p>                       
                        <hr>

                        <h2>5. Quiz</h2>
                        <p>[Text appears in a white box with rounded corners. “5. Quiz.” Three drawings with check marks appear side-by-side: a checklist next to a stack of coins, a magnifying glass over a warning sign, and a work plan.]</p>
                        <p>Now that you know how to determine the types of costs to include in the procurement estimates, how to conduct a risk assessment, and how to draft a mitigation strategy, let’s see what you remember by taking this short quiz.</p>
                        <p>[The words “Take the quiz!” appear next to a check mark. A drawing depicts a hand with a pencil completing a quiz.]</p>
                        <p>[A Take the Quiz activity pop-up text box appears.]</p>
                        <hr>
                        <h2>6. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Introduction</h2>
                        <p>[Sur un fond bleu, de fines lignes diagonales oscillent en vagues. Du texte apparaît dans une boîte blanche aux coins arrondis. « Module 2 : Prévoir les besoins budgétaires. 1. Introduction. »] </p>
                        <p>Dans la présente section, vous apprendrez à estimer les coûts des biens et des services, y compris le coût du cycle de vie lié au maintien et à l’aliénation des biens et des services, et à procéder à une évaluation des risques et à l’élaboration d’une stratégie d’atténuation si les biens ou les services ne sont pas acquis.  </p>
                        <p>[Deux dessins apparaissent l’un après l’autre : une calculatrice à côté d’une planchette à pince et une ampoule en dessous d’un symbole d’avertissement.]</p>
                        <p>Cette section devrait vous prendre environ 30 minutes à compléter. </p>
                        <p>[Le contour d’un cercle apparaît. La moitié est remplie en blanc avec les mots « 30 minutes » en dessous.]</p>
                        <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                        <hr>
                        
                        <h2>2. Estimer les coûts</h2>
                        <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 2. Estimer les coûts ». Le dessin d’une loupe apparaît.] </p>
                        <p>Avant tout achat, commencez par estimer le coût de vos biens, de vos services ou de vos activités de construction. Cela peut se faire de plusieurs façons, notamment : </p>
                        <ul>
                          <li>en examinant les achats antérieurs,</li>
                          <li>en consultant des catalogues d’achat ou des sites Web des fournisseurs,</li>
                          <li>en effectuant une recherche sur Internet,</li>
                          <li>en demandant de l’information auprès d’un fournisseur,  </li>
                          <li>en examinant les possibilités de location, ou </li>
                          <li>en demandant l’avis d’un expert de Services publics et Approvisionnement Canada. </li>
                        </ul>
                        <p>[D’autres dessins apparaissent sous la loupe. Un panier d’achats, une page Web, un ordinateur, un message texte au-dessus d’un ordinateur portable, une clé et un drapeau canadien dans un cercle. Un dessin d’une pile de pièces de monnaie apparaît.] </p>
                        <p>N’oubliez pas de vous renseigner sur les autres coûts liés à votre achat. Les coûts de livraison, du cycle de vie, d’entretien, d’aliénation. Tous doivent être inclus dans votre estimé. Après tout, vous ne voudriez pas vous acheter une voiture si vous n’avez pas les moyens d’en payer l’assurance automobile, l’essence et d’en faire l’entretien!</p>
                        <p>[Le dessin d’une voiture apparaît.]</p>
                        <p>[Une boîte de texte de l’activité Estimer les coûts - Termes clés apparaît.]</p>
                        <hr>
                        
                        <h2>3. Mener une évaluation des risques</h2>
                        <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 3. Mener une évaluation des risques. » Le dessin d’un plan de travail apparaît. Les titres « Activités », « Risque » et « Atténuation » sont encerclés.]</p>
                        <p>Vous êtes-vous déjà demandé ce qui se passerait si vous n’étiez pas en mesure de vous procurer les ressources dont vous avez besoin? Lorsque l’approvisionnement n’est pas une option, vous devrez essayer de trouver d’autres moyens d’accomplir vos activités. Vous trouverez généralement des conseils sur la manière d’y parvenir dans les sections de votre plan de travail consacrées aux risques et à l’atténuation des risques.  </p>
                        <p> [Un dessin représente une loupe au-dessus d’un symbole d’avertissement.] </p> 
                        <p>Pour procéder à une évaluation des risques et à l’élaboration d’une stratégie d’atténuation, il faut : </p> 
                        <ul>
                          <li>identifier les événements qui pourraient vous empêcher de mener à bien vos activités, </li>
                          <li>estimer si l’événement aura lieu ou non,  </li>
                          <li>identifier les pertes ou les impacts potentiels liés à l’événement, et </li>
                          <li>identifier les mesures que vous pouvez prendre pour réduire le risque que cet événement se produise.  </li>
                        </ul>
                        <p>[Quatre dessins apparaissent l’un après l’autre : un nuage orageux au-dessus d’un camion de livraison, un point d’interrogation à l’intérieur d’une ampoule, un billet de banque avec des flèches pointant vers le bas et une loupe au-dessus d’un symbole d’avertissement.] </p>
                        <p>L’exercice suivant vous aidera à identifier les risques associés à vos activités.  </p>
                        <p>[Une boîte de texte de l’activité Choix multiple apparaît.]</p>
                        <hr>

                        <h2>4. Dans la vraie vie</h2>
                        <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 4. Dans la vraie vie. » Un dessin représente un stylo écrivant sur une liste de vérification à côté d’une pile de pièces de monnaie.] </p>
                        <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour voir comment les budgets sont établis au sein votre ministère.</p>
                        <p>[Un dessin représente un homme et une femme qui parlent ensemble. Une bulle de dialogue avec un symbole de dollar apparaît au-dessus de la tête de l’homme.] </p>
                        <p>Consultez vos collègues, votre directeur ou votre conseiller en gestion financière, et discutez des ressources financières existantes pour vos besoins en matière d'approvisionnement. </p>
                        <p>[Une boîte de texte de l’activité Dans la vraie vie apparaît.]</p>
                        <hr>
                        
                        <h2>5. Quiz</h2>
                        <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 5. Quiz. » Trois dessins avec des coches apparaissent côte à côte : une liste de vérification à côté d’une pile de pièces de monnaie, une loupe au-dessus d’un symbole d’avertissement et un plan de travail.]</p>
                        <p>Maintenant que vous savez comment déterminer les types de coûts à inclure dans les estimés d'approvisionnement, comment procéder à une évaluation des risques et comment élaborer une stratégie d'atténuation, voyons ce dont vous vous souvenez en répondant à ce petit quiz. </p>
                        <p>[Les mots « Répondez au quiz! » apparaissent à côté d’une coche. Un dessin représente une main avec un crayon qui remplit un quiz.] </p>
                        <p>[Une boîte de texte de l’activité Répondez au quiz apparaît.]</p>
                        <hr>
                        
                        <h2>6. Section complétée</h2>
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
          <img src="~/assets/infoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('activityLinks')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='fr'">
      <p>Pour une revue des budgets, voir la section <strong>Créer un budget</strong> du cours <a href="https://catalogue.csps-efpc.gc.ca/product?catalog=COR250&cm_locale=fr" target="blank">Utiliser les fonds publics de manière responsable</a>. Ce lien est également disponible dans la boîte à outils.</p>
      </div>
      <div v-if="$i18n.locale=='en'">
      <p>For a review of budgets, see the <strong>Create a Budget</strong> module of the <a href="https://catalogue.csps-efpc.gc.ca/product?catalog=COR250&cm_locale=en" target="blank">Using Public Funds Responsibly</a> course. This link is also available in the Toolbox.  </p>
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
              <img src="~/assets/infoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('InRealLife')}}
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
    <microlearning size="140" path="exam1" time="25" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
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
  "conductRiskTitle":"Activity: Conduct a Risk Assessment",
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
  "conductRiskTitle":"Activité : Mener une évaluation des risques",
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