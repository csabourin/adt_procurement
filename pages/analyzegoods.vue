<template><div>
  <h2 class="pageTitle">
    {{ $t('AnalyzeGoods')}}
  </h2>
  <section>
    <b-row>
      <b-col>
        <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_u9rm6fc2/flavorId/0_vxoqve1p/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_09guhq5q/flavorId/0_dbr8ey5p/name/a.mp4" chapters chapterFile="chapters.vtt" posterFile="buildworkplan.png" ccFile="analyzegoodsCC.vtt" :restartAt="thatPoint" toResume="setBuildWP" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <p>In this section, you will learn to:</p>
                      <ul>
                        <li>analyze a work plan,</li>
                        <li>identify goods, services and construction needs, and </li>
                        <li>verify if goods, services and construction already exist within government.</li>
                      </ul>
                      <p>This section should take you approximately 15 minutes to complete.</p>
                      <hr>
                      <h2>2. Analyze Needs</h2>
                      <p>To find out which goods, services and construction you may need, start by reviewing your work plan. Look at your activities and sub-activities. Do you have the resources needed to deliver them? </p>
                      <p>If you do, that’s great.</p>
                      <p>If you do not, which goods or services are missing?</p>
                      <p>Looking at the work plan provided, identify which goods and services you will need to procure by answering the following questions.</p>
                      <!-- <p>[A Continue to the next segment pop-up text box appears.]</p> -->
                      <hr>
                      <h2>3. Identify Existing Resources</h2>
                      <p>Now that you have looked at your work plan and identified all the goods and services that you will need to carry out your activities, check to see if they already exist. Ask yourself the following questions. </p>
                      <ul>
                        <li>Is there an available stockpile or inventory in the department?</li>
                        <li>Are existing ones accessible?</li>
                        <li>Can the goods or services be transferred from one unit to another?</li>
                        <li>Are there other similar goods or services that can be used? </li>
                      </ul>
                      <p>Before initiating any procurement processes, always check to see if the goods and services you require are already at your disposal. Often, the resources you need are right at your fingertips!</p>
                      <hr>
                      <h2>4. In Real Life</h2>
                      <p>Take what you’ve learned into real life.</p>
                      <p>Your organization will have its own ways of doing things. Take a time out from the course to see how goods and services needs are identified in your department. You may find that you already have access to certain resources through various teams such as Security, Shared Travel Services, Accommodations, Shared Services Canada, Training and Accessibility and Duty to Accommodate, to name but a few.</p>
                      <hr>
                      <h2>5. Quiz</h2>
                      <p>Now that you know how to analyze a work plan, how to identify goods, services and construction needs, and how to compare goods and services needed with existing goods and services on hand, let’s see what you remember by taking this short quiz.</p>
                      <hr>
                      <h2>6. Section Completed</h2>
                      <p>[Onscreen text showing Section Completed instruction.]</p>
                      <!-- Used to generate buttons to jump to activity

                         <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                    </span>
                    <span v-if="$i18n.locale=='fr'">
                      <h2>1. Introduction</h2>
                      <p>Dans la présente section, vous apprendrez</p>
                      <ul>
                        <li>à analyser un plan de travail,</li>
                        <li>à identifier les besoins en matière de biens, de services et de construction, et </li>
                        <li>à voir si les biens et services existent déjà au gouvernement.</li>
                      </ul>
                      <p>Il vous faudra environ 15 minutes pour compléter cette section. </p>
                      <hr>
                      <h2>2. Analyser les besoins</h2>
                      <p>Pour savoir quels sont les biens, les services et la construction dont vous pourriez avoir besoin, commencez par examiner votre plan de travail. Examinez vos activités et vos sous-activités. Disposez-vous des ressources nécessaires pour les réaliser?</p>
                      <p>Si oui, génial!</p>
                      <p>Sinon, quels sont les biens ou les services qui manquent?</p>
                      <p>En examinant le plan de travail fourni, identifiez les biens et les services que vous devrez acquérir en répondant aux questions suivantes.</p>
                      <hr>
                      <h2>3. Identifier les ressources existantes</h2>
                      <p>Maintenant que vous avez examiné votre plan de travail et identifié tous les biens et les services dont vous aurez besoin pour réaliser vos activités, vérifiez s’ils existent déjà. Posez-vous les questions suivantes. </p>
                      <ul>
                        <li>Existe-t-il un stock ou un inventaire disponible au sein du ministère? </li>
                        <li>Ceux qui existent sont-ils accessibles?</li>
                        <li>Les biens ou les services peuvent-ils être transférés d’une unité à une autre?</li>
                        <li>Existe-t-il d’autres biens ou services similaires qui peuvent être utilisés?</li>        
                      </ul>
                      <p>Avant de lancer un processus d’achat, vérifiez toujours si les biens et les services dont vous avez besoin sont déjà à votre disposition. Souvent, les ressources dont vous avez besoin sont à portée de main! </p>
                      <hr>
                      <h2>4. Dans la vraie vie</h2>
                      <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p>
                      <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de voir comment les besoins en matière de biens et services sont identifiés au sein de votre ministère. Vous verrez peut-être que vous avez déjà accès à certaines ressources par l’intermédiaire de diverses équipes telles que la Sécurité, les Services de voyage partagés, les Aménagements, Services partagés Canada, la formation et l’accessibilité et l’obligation de prendre des mesures d’adaptation, pour n’en nommer que quelques-unes. </p>
                      <hr>
                      <h2>5. Quiz</h2>
                      <p>Maintenant que vous avez appris à analyser un plan de travail, à identifier les besoins en matière de biens, de services et de construction, et à comparer les biens et les services nécessaires avec les biens et les services existants, voyons ce dont vous vous souvenez en répondant à ce petit quiz.</p>
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
      <p>Pour une revue des plans de travail, voir la section <strong>Élaborer un plan de travail</strong> du cours <a href="https://adtfinance.netlify.app/fr"> La saine gestion des fonds publics</a>. Ce lien est également disponible dans la boîte à outils.</p>
      </div>
      <div v-if="$i18n.locale=='en'">
      <p>For a review of work plans, see the <strong>Build a Work Plan</strong> module of the <a href="https://adtfinance.netlify.app/en">Responsible Use of Public Funds</a> course. This link is also available in the Toolbox.  </p>
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
    
    <microlearning path="analyzegoods" youAreHere imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('AnalyzeGoods')" type="video" />
    <microlearning path="forecastbudget" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('ForecastBudget')" type="video" />
    <microlearning size="140" path="budgetauthorities" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('BudgetAuthorities')" type="video" />
    <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
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
  "gotoLinks":"For a review of work plans, see the <strong>Build a Work Plan</strong> module of the <a href:'https://adtfinance.netlify.app/en/buildwp'>Responsible Use of Public Funds</a> course. This link is also available in the Toolbox.  ",
  "analyzeNeedsTitle":"Activity: Analyze Your Resource Needs",
  "completewpDrafttitle":"Activity: Prepare a Work Plan",
  "completewptitle":"Activity: Complete the Work Plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "identifyExistingTitle":"Identify Existing Resources",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "InRealLifeTitle":"Dans la vraie vie ",
  "IRLPlanPt1Text":"<p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de consulter l’intranet pour voir comment les besoins en matière de biens et services sont identifiés au sein de votre ministère. Vous verrez peut-être que vous avez déjà accès à certaines ressources par l’intermédiaire de diverses équipes telles que la Sécurité, les Services de voyage partagés, les Aménagements, Services partagés Canada, la formation et l’accessibilité et l’obligation de prendre des mesures d’adaptation, pour n’en nommer que quelques-unes.</p>",
  "TakeTheQuiz":"Répondez au questionnaire",
  "activityLinks":"Référence : Liens externes",
  "gotoLinks":"Pour une revue des plans de travail, voir la section Élaborer un plan de travail du cours La saine gestion des fonds publics. Ce lien est également disponible dans la boîte à outils.",
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
