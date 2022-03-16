<template><div>
  <h2 class="pageTitle">
    {{ $t('AnalyzeGoods')}}
  </h2>
  <section>
    <b-row>
      <b-col>
        <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_4x4qm4ym/flavorId/0_ceye7d2y/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_6k9bov9a/flavorId/0_p4jrl53l/name/a.mp4" chapters chapterFile="chapters.vtt" posterFile="analyzegoods.png" ccFile="analyzegoodsCC.vtt" :restartAt="thatPoint" toResume="setBuildWP" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
      </b-col>
    </b-row>
    <b-container>
      <b-row>
        <b-col>
          <div role="tablist" class="transcriptionBox">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{$t('transcript')}}</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <span v-if="$i18n.locale=='en'">
                      <h2>1. Introduction</h2>
                      <p>[Against a blue background, thin diagonal lines sway in waves. Text appears in a white box with rounded corners. “Module 1: Analyze Goods, Services, and Construction Needs. 1. Introduction.”] </p>
                      <p>Narrator [N]: In this section, you will learn to analyze a work plan, identify goods, services and construction needs, and verify if goods, services and construction already exist within government.</p>
                      <p>[Three drawings appear one after the other. One depicts a magnifying glass over a document on a clipboard. Another depicts boxes, a bulldozer, and a man at a counter. The third depicts a checklist.]</p>
                      <p>This section should take you approximately 15 minutes to complete. </p>
                      <hr>
                      <h2>2. Analyze Needs</h2>
                      <p>[An outline of a circle appears. A quarter of it is filled in white with the words “15 minutes” underneath. Text appears in a white box with rounded corners. “2. Analyze Needs.” A drawing of a work plan appears. The headings “Activities,” “Sub-activities,” and “Resources” are circled.]</p>
                      <p>To find out which goods, services and construction you may need, start by reviewing your work plan. Look at your activities and sub-activities. Do you have the resources needed to deliver them?</p>
                      <p>If you do, that’s great!</p>
                      <p>If you do not, which goods or services are missing?</p>
                      <p>[Below the work plan, a checklist appears next to drawings of a pencil, a clipboard, and a box.] </p>
                      <p>Looking at the work plan provided, identify which goods and services you will need to procure by answering the following questions. </p>
                      <!-- <p>[A Continue to the next segment pop-up text box appears.]</p> -->
                      <hr>
                      <h2>3. Identify Existing Resources</h2>
                      <p>[Text appears in a white box with rounded corners. “3. Identify Existing Resources.” A drawing depicts a woman opening a door. A sign displaying a box appears beside the doorway.]</p>
                      <p>Now that you have looked at your work plan and identified all the goods and services that you will need to carry out your activities, check to see if they already exist. Ask yourself the following questions. </p>
                      <ul>
                        <li>Is there an available stockpile or inventory in the department?</li>
                        <p>[A drawing depicts shelves with supplies.] </p>
                        <li>Are existing ones accessible?</li>
                        <p>[A drawing depicts a cardboard box with a check mark on the side.] </p>
                        <li>Can the goods or services be transferred from one unit to another?</li>
                        <p>[A drawing depicts a cardboard box on a dolly.]</p>
                        <li>Are there other similar goods or services that can be used? </li>
                        <p>[A drawing depicts a laptop and desktop computer with arrows pointing between them.] </p>
                      </ul>
                      <p>Before initiating any procurement processes, always check to see if the goods and services you require are already at your disposal.</p>
                      <p>[A drawing depicts a pair of hands handing boxes to another pair of hands.] </p>
                      <p>Often, the resources you need are right at your fingertips!</p>
                      <hr>
                      <h2>4. In Real Life</h2>
                      <p>[Text appears in a white box with rounded corners. “4. In Real Life.” A drawing depicts a woman in a hijab talking to a man. A speech bubble with a question mark appears over the man.]</p>
                      <p>Take what you have learned into real life! Your organization will have its own ways of doing things. Take a time out from the course to see how goods and services needs are identified in your department.</p>
                      <p>[The man disappears from the drawing. The words “Shared Resources” appear over the woman.] </p>
                      <p>You may find that you already have access to certain resources through various teams such as Security, Shared Travel Services, Accommodations, Shared Services Canada, Training and Accessibility and Duty to Accommodate, to name but a few. </p>
                      <hr>
                      <h2>5. Quiz</h2>
                      <p>[Drawings around the woman depict a lock, airplanes, a desk with a computer, a wi-fi symbol in the shape of a maple leaf, a wheelchair symbol, and a crutch. Text appears in a white box with rounded corners. “5. Quiz.” Three drawings with check marks appear side-by-side. One depicts a pencil filling out a document. Another depicts a magnifying glass over boxes, a bulldozer, and a man at a counter. The third depicts a woman opening a door.]</p>
                      <p>Now that you know how to analyze a work plan, how to identify goods, services and construction needs, and how to compare goods and services needed with existing goods and services on hand, let’s see what you remember by taking this short quiz. </p>
                      <p>[The words “Take the quiz!” appear next to a check mark. A drawing depicts a hand with a pencil completing a quiz.] </p>
                      <hr>
                      <h2>6. Section Completed</h2>
                      <p>[Onscreen text showing Section Completed instruction.]</p>
                      <!-- Used to generate buttons to jump to activity

                         <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                    </span>
                    <span v-if="$i18n.locale=='fr'">
                      <h2>1. Introduction</h2>
                      <p>[Sur un fond bleu, de fines lignes diagonales oscillent en vagues. Du texte apparaît dans une boîte blanche aux coins arrondis. « Module 1 : Analyser les besoins en biens, en services et en construction. 1. Introduction. »]</p>
                      <p>Dans la présente section, vous apprendrez à analyser un plan de travail, à identifier les besoins en matière de biens, de services et de construction, et à voir si les biens et les services existent déjà au gouvernement. </p>
                      <p>[Trois dessins apparaissent l’un après l’autre. L’un représente une loupe au-dessus d’un document sur une planchette à pince. Un autre représente des boîtes, un bouteur et un homme à un comptoir. Le troisième représente une liste de vérification.] </p>
                      <p>Il vous faudra environ 15 minutes pour compléter cette section. </p>
                      <hr>
                      <h2>2. Analyser les besoins</h2>
                      <p>[Le contour d’un cercle apparaît. Le quart est rempli en blanc avec les mots « 15 minutes » en dessous. Du texte apparaît dans une boîte blanche aux coins arrondis. « 2. Analyser les besoins ». Le dessin d’un plan de travail apparaît. Les titres « Activités », « Sous-activités » et « Ressources » sont encerclés.]</p>
                      <p>Pour savoir quels sont les biens, les services et la construction dont vous pourriez avoir besoin, commencez par examiner votre plan de travail. Examinez vos activités et vos sous-activités. Disposez-vous des ressources nécessaires pour les réaliser?</p>
                      <p>Si oui, génial! </p>
                      <p>Sinon, quels sont les biens ou les services qui manquent?</p>
                      <p>[Sous le plan de travail, des dessins d’une liste de vérification avec un crayon, d’une planchette à pince et d’une boîte apparaissent.]</p>
                      <p>En examinant le plan de travail fourni, identifiez les biens et les services que vous devrez acquérir en répondant aux questions suivantes. </p>
                      <hr>
                      <h2>3. Identifier les ressources existantes</h2>
                      <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 3. Identifier les ressources existantes. » Un dessin représente une femme qui ouvre une porte. Un panneau affichant une boîte apparaît à côté de la porte.] </p>
                      <p>Maintenant que vous avez examiné votre plan de travail et identifié tous les biens et les services dont vous aurez besoin pour réaliser vos activités, vérifiez s’ils existent déjà. Posez-vous les questions suivantes.</p>
                      <ul>
                        <li>Existe-t-il un stock ou un inventaire disponible au sein du ministère? </li>
                        <p>[Un dessin représente une étagère avec des fournitures.] </p>
                        <li>Ceux qui existent sont-ils accessibles?</li>
                        <p>[Un dessin représente une boîte en carton avec une coche sur le côté.] </p>
                        <li>Les biens ou les services peuvent-ils être transférés d’une unité à une autre?</li>
                        <p>[Un dessin représente une boîte en carton sur un chariot.] </p>
                        <li>Existe-t-il d’autres biens ou services similaires qui peuvent être utilisés?</li>        
                      </ul>
                      <p>[Un dessin représente un ordinateur portable et un ordinateur de bureau avec des flèches pointant de l’un à l’autre.] </p>
                      <p>Avant de lancer un processus d’achat, vérifiez toujours si les biens et les services dont vous avez besoin sont déjà à votre disposition.</p>
                      <p>[Un dessin représente une paire de mains remettant des boîtes à une autre paire de mains.] </p>
                      <p> Souvent, les ressources dont vous avez besoin sont à portée de main!</p>
                      <hr>
                      <h2>4. Dans la vraie vie</h2>
                      <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 4. Dans la vraie vie. » Un dessin représente une femme portant un hidjab qui parle à un homme. Une bulle de dialogue avec un point d’interrogation apparaît au-dessus de l’homme.] </p>
                      <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!  </p>
                      <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir comment les besoins en matière de biens et services sont identifiés au sein votre ministère.</p>
                      <p>[L’homme disparaît du dessin. Les mots « Ressources partagées » apparaissent au-dessus de la femme.] </p>
                      <p>Vous verrez peut-être que vous avez déjà accès à certaines ressources par l’intermédiaire de diverses équipes telles que la Sécurité, les Services de voyage partagés, les Aménagements, Services partagés Canada, la formation et l’accessibilité et l’obligation de prendre des mesures d’adaptation, pour n’en nommer que quelques-unes. </p>
                      <hr>
                      <h2>5. Quiz</h2>
                      <p>[Des dessins apparaissent autour de la femme : un cadenas, deux avions, un bureau avec ordinateur, un symbole Wi-Fi en forme de feuille d’érable, un symbole de fauteuil roulant et une béquille. Du texte apparaît dans une boîte blanche aux coins arrondis. « 5. Quiz ». Trois dessins avec des coches apparaissent côte à côte. Le premier représente un crayon qui remplit un document. Le deuxième représente une loupe au-dessus d’une boîte, d’un bouteur, et d’un homme à un comptoir. Le troisième représente une femme qui ouvre une porte.] </p>
                      <p>Maintenant que vous avez appris à analyser un plan de travail, à identifier les besoins en matière de biens, de services et de construction, et à comparer les biens et les services nécessaires avec les biens et les services existants, voyons ce dont vous vous souvenez en répondant à ce petit quiz. </p>
                      <p>[Les mots « Répondez au quiz! » apparaissent à côté d’une coche. Un dessin représente une main avec un crayon qui remplit un questionnaire.] </p>
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
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('activityLinks')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='fr'">
      <p>Pour une revue des plans de travail, voir la section <strong>Élaborer un plan de travail</strong> du cours <a href="https://adtfinance.netlify.app/fr"> Utiliser les fonds publics de manière responsable</a>. Ce lien est également disponible dans la boîte à outils.</p>
      </div>
      <div v-if="$i18n.locale=='en'">
      <p>For a review of work plans, see the <strong>Build a Work Plan</strong> module of the <a href="https://adtfinance.netlify.app/en">Using Public Funds Responsibly</a> course. This link is also available in the Toolbox.  </p>
      </div>
      <!--<planLinks /> {{ $t('gotIt') }} -->
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
   <!--2--> <b-modal no-stacking id="analyzeNeeds" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('analyzeNeedsTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <analyzeNeeds />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <!--3--><b-modal no-stacking id="identifyExisting" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('identifyExistingTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <identifyExisting />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <!--4--><b-modal no-stacking id="InRealLife" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
            <h3 class="h5">
              <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32">
                {{$t('InRealLifeTitle')}}
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
              <p>{{$t('IRLPlanPt1Text')}}</p>
            </b-col>
          </b-row>
          <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32">
          {{$t('TakeTheQuiz')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <planQuiz />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </div>
  <div class="bottomNav planSection">
    <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
    
    <microlearning path="analyzegoods" youAreHere imagePath="BuildWP.svg" size="140" time="15" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('AnalyzeGoods')" type="video" />
    <microlearning path="forecastbudget" imagePath="CreateBud.svg" size="140" time="30" :completion="$store.state.currentPlaying.forecast_player" :text="$t('ForecastBudget')" type="video" />
    <microlearning size="140" path="budgetauthorities" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="ExerciseFinancialAuthority.svg" :text="$t('BudgetAuthorities')" type="video" />
    <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
  </div>
</div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import planLinks from '~/components/plan_links'
import analyzeNeeds from '~/components/slides/plan/AnalyzeNeeds'
import planQuiz from '~/components/slides/plan/planQuiz'
import continuePopup from '~/components/continuePopup'
import identifyExisting from '~/components/slides/plan/identifyExisting'
export default {
  data() {
    return {
      modalArray: ["purpose", "analyzeNeeds", "identifyExisting", "InRealLife", "quiz"]
    }
  },
  components: {
    microlearning,
    videoPlayer,
    planLinks,
    analyzeNeeds,
    identifyExisting,
    planQuiz,
    continuePopup
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setBuildWP_player',e)
    }
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.buildWP
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
<i18n>{
  "en":{
  "InRealLifeTitle":"In Real Life ",
  "IRLPlanPt1Text":"Take what you have learned into real life! Your organization will have its own ways of doing things. Take a time out from the course to see how goods and services needs are identified in your department. You may find that you already have access to certain resources through various teams such as Security, Shared Travel Services, Accommodations, Shared Services Canada, Training and Accessibility and Duty to Accommodate, to name but a few.",
  "gotIt":"Continue to next segment",
  "gotItContent": "Pop-ups will appear throughout the course to indicate what comes next, such as a video, an exercise, a list of links or a job aid.",
  "activityLinks":"Reference: External Links",
  "gotoLinks":"For a review of work plans, see the <strong>Build a Work Plan</strong> module of the <a href:'https://adtfinance.netlify.app/en/buildwp'>Using Public Funds Responsibly course</a> course. This link is also available in the Toolbox.  ",
  "analyzeNeedsTitle":"Activity: Analyze Your Resource Needs",
  "completewpDrafttitle":"Activity: Prepare a Work Plan",
  "completewptitle":"Activity: Complete the Work Plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "identifyExistingTitle":"Activity: Identify Existing Resources",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "InRealLifeTitle":"Dans la vraie vie ",
  "IRLPlanPt1Text":"Appliquez maintenant ce que vous avez appris - dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez le temps de consulter l’intranet pour voir comment les besoins en matière de biens et services sont identifiés au sein de votre ministère. Vous verrez peut-être que vous avez déjà accès à certaines ressources par l’intermédiaire de diverses équipes telles que la Sécurité, les Services de voyage partagés, les Aménagements, Services partagés Canada, la formation et l’accessibilité et l’obligation de prendre des mesures d’adaptation, pour n’en nommer que quelques-unes.",
  "TakeTheQuiz":"Répondez au quiz",
  "activityLinks":"Référence : Liens externes",
  "gotoLinks":"Pour une revue des plans de travail, voir la section <strong>Élaborer un plan de travail</strong> du cours <a href:'https://adtfinance.netlify.app/fr/buildwp'> La saine gestion des fonds publics</a>. Ce lien est également disponible dans la boîte à outils.",
  "analyzeNeedsTitle":"Activité :  Analysez vos besoins en matière de ressources",
  "completewpDrafttitle":"Activité : Préparer un plan de travail",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "identifyExistingTitle":"Activité : Identifier les ressources existantes",
  "gotIt":"Passer au segment suivant.",
  "gotItContent": "Les fenêtres contextuelles apparaissent tout au long du cours pour indiquer ce qui vient ensuite comme une vidéo, un exercice, une liste de liens ou une aide à l’emploi.",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>
