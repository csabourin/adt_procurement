<template><div>
  <h2 class="pageTitle">
    {{ $t('budgetAuthorities')}}
  </h2>
  <section>
    <b-row>
      <b-col>
        <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_xdt2qiui/flavorId/0_2fyvamsz/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_w69dhzvn/flavorId/0_3eh75pfc/name/a.mp4" chapters chapterFile="PlanPt3.vtt" posterFile="buildworkplan.png" ccFile="budgetAuthoritiesCC.vtt" :restartAt="thatPoint" toResume="setBuildWP" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <p>In this section, you will learn</p>
                      <ul>
                        <li>to determine the types of costs, for goods and services, to include in the procurement estimates, and </li>
                        <li>to conduct a risk assessment and to draft a mitigation strategy in case the goods or services are not acquired.</li>
                      </ul>
                      <p>This section should take you approximately 30 minutes to complete.</p>
                      <hr>
                      <h2>2. Estimate Costs</h2>
                      <p>Before any purchase, start by estimating how much your goods, services or construction will cost. This could be done in many ways, including </p>
                      <ul>
                      <li>looking at previous purchases,</li>
                      <li>consulting purchasing catalogues or supplier websites,</li>
                      <li>doing an internet search,</li>
                      <li>gathering information from a supplier,</li>
                      <li>looking at rental options, or</li>
                      <li>asking for expert advice from Public Services and Procurement Canada.</li>
                      </ul>
                      <p>Don’t forget to find out if there are any other costs related to your purchase, such as delivery costs, life cycle costs, sustainment costs and disposal costs. All should be included in your estimate. After all, you wouldn’t want to get a car if you can’t afford the auto insurance, gas and maintenance!</p>
                      <hr>
                      <h2>3. Conduct a Risk Assessment</h2>
                      <p>Ever wonder what would happen if you were unable to procure the resources that you needed? When procurement is not an option, you will need to find other ways to accomplish your activities. Hints on how you can do this are actually found in the risk and mitigation sections of your work plan</p>
                      <p>To conduct a risk assessment and draft a mitigation strategy, you</p>
                      <ul>
                        <li>identify any events that could stop you from delivering your activities,</li>
                        <li>determine the probability as to whether the event will happen or not, </li>
                        <li>identify any potential losses or impacts associated with the event, and </li>
                        <li>identify any actions you can take to lower the potential of that event happening. </li>
                      </ul>
                      <p>The following exercise will help you identify the risks associated with your activities. </p>
                      <hr>
                      <h2>4. In Real Life</h2>
                      <p>Take what you have learned into real life.</p>
                      <p>Your organization will have its own ways of doing things. Take a time out from the course to see how budgets are forecasted in your department. </p>
                      <p>Connect with your colleagues, director or financial management advisor, and chat about existing financial resources for your procurement needs.</p>
                      <hr>
                      <h2>5. Quiz</h2>
                      <p>Now that you know how to determine the types of costs to include in the procurement estimates, how to conduct a risk assessment and how to draft a mitigation strategy, let’s see what you remember by taking this short quiz. </p>
                      <hr>
                      <h2>6. Section Completed</h2>
                      <p>[Onscreen text showing Section Completed instruction.]</p>
                      <!-- Used to generate buttons to jump to activity

                         <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                    </span>
                    <span v-if="$i18n.locale=='fr'">
                      <h2>1. Introduction</h2>
                      <p>Dans la présente section, vous apprendrez à</p>
                      <ul>
                        <li>déterminer les types de coûts, liés aux biens et aux services, à inclure dans les estimés d’approvisionnement, et </li>
                        <li>à procéder à une évaluation des risques et à l’élaboration d’une stratégie d’atténuation si les biens ou les services ne sont pas acquis.</li>
                      </ul>
                      <p>Cette section devrait vous prendre environ 30 minutes à compléter.</p>
                      <hr>
                      <h2>2. Estimer les coûts</h2>
                      <p>Avant tout achat, commencez par estimer le coût de vos biens, de vos services ou de vos activités de construction. Cela peut se faire de plusieurs façons, notamment</p>
                      <ul>
                        <li>en examinant les achats antérieurs,</li>
                        <li>en consultant des catalogues d’achat ou des sites Web des fournisseurs,</li>
                        <li>en effectuant une recherche sur Internet,</li>
                        <li>en demandant de l’information auprès d’un fournisseur,</li>
                        <li>en examinant les possibilités de location, ou </li>
                        <li>en demandant l’avis d’un expert de Services publics et Approvisionnement Canada.</li>
                      </ul>
                      <p>N’oubliez pas de vous renseigner sur les autres coûts liés à votre achat. Les coûts de livraison, du cycle de vie, d’entretien, d’aliénation. Tous doivent être inclus dans votre estimé. Après tout, vous ne voudriez pas acheter une voiture si vous n’avez pas les moyens d’en payer l’assurance automobile, l'essence et d’en faire l’entretien!</p>
                      <hr>
                      <h2>3. Mener une évaluation des risques</h2>
                      <p>Vous êtes-vous déjà demandé ce qui se passerait si vous n’étiez pas en mesure de vous procurer les ressources dont vous avez besoin? Lorsque l’approvisionnement n’est pas une option, vous devrez essayer de trouver d’autres moyens d’accomplir vos activités. Vous trouverez généralement des indices sur la manière d’y parvenir dans les sections de votre plan de travail consacrées aux risques et à l’atténuation des risques.</p>
                      <p>Pour procéder à une évaluation des risques et à l’élaboration d’une stratégie d’atténuation, il faut </p>
                      <ul>
                        <li>identifier les événements qui pourraient vous empêcher de mener à bien vos activités,  </li>
                        <li>estimer si l’événement aura lieu ou non,  </li>
                        <li>identifier les pertes ou les impacts potentiels liés à l’événement, et  </li>
                        <li>identifier les mesures que vous pouvez prendre pour réduire le risque que cet événement se produise.  </li>
                      </ul>
                      <p>C'est là qu'intervient votre plan de travail! Vous construisez votre plan de travail autour des activités dont vous êtes responsables au sein de votre unité et cela se rattache naturellement au Plan ministériel et le CMR.</p>
                      <p>L’exercice suivant vous aidera à identifier les risques associés à vos activités.</p>
                      <hr>
                      <h2>4. Dans la vraie vie</h2>
                      <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p>
                      <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour voir comment les budgets sont établis au sein de votre ministère. </p>
                      <p>Consultez vos collègues, votre directeur ou votre conseiller en gestion financière, et discutez des ressources financières existantes pour vos besoins en matière d'approvisionnement. </p>
                      <hr>
                      <h2>5. Quiz</h2>
                      <p>Maintenant que vous savez comment déterminer les types de coûts à inclure dans les estimés d'approvisionnement, comment procéder à une évaluation des risques et comment élaborer une stratégie d'atténuation, voyons ce dont vous vous souvenez en répondant à ce petit quiz.</p>
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
    <b-modal no-stacking id="purpose" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('activityLinks')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='fr'">
       <p>For a review of delegation of authorities, see the <strong>Engager et autoriser des dépenses</strong> et <strong>Exercer l’autorité financière</strong> du cours <a href="https://adtfinance.netlify.app/fr"> La saine gestion des fonds publics</a>. Ce lien est également disponible dans la boîte à outils.</p>
      </div>
      <div v-if="$i18n.locale=='en'">
      <p>For a review of delegation of authorities, see the <strong>Initiate and Authorize Commitments</strong> and <strong>Exercise Financial Authority</strong> modules of the  <a href="https://adtfinance.netlify.app/en">Responsible Use of Public Funds</a> course. This link is also available in the Toolbox.  </p>
      </div>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="alignworkplan" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32"> {{$t('activityLinks')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <p>{{$t('gotoLinks')}}</p>
    <planLinks /><!-- {{ $t('gotIt') }} -->
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="checkBudget" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('checkBudgetTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <checkBudget />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="financialAuthorities" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('financialAuthoritiesTitle')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <financialAuthorities />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
    <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32">
          {{$t('InRealLife')}}
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
          <p v-html="$t('IRLText')"></p>
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
      <AuthoritieQuiz />
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </div>
 <div class="bottomNav planSection">
    <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
    
    <microlearning path="analyzegoods" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('AnalyzeGoods')" type="video" />
    <microlearning path="forecastbudget" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('ForecastBudget')" type="video" />
    <microlearning size="140" path="budgetauthorities" youAreHere time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('BudgetAuthorities')" type="video" />
    <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
  </div>
</div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import checkBudget from '~/components/slides/plan/checkBudget'
import planLinks from '~/components/plan_links'
import financialAuthorities from '~/components/slides/plan/financialAuthorities'
import AuthoritieQuiz from '~/components/slides/plan/AuthoritieQuiz'
import continuePopup from '~/components/continuePopup'
export default {
  data() {
    return {
      modalArray: ["purpose", "checkBudget", "financialAuthorities", "reallife", "quiz"]
    }
  },
  components: {
    financialAuthorities,
    microlearning,
    videoPlayer,
    planLinks,
    checkBudget,
    AuthoritieQuiz,
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
  "gotIt":"Continue to next segment",
  "gotItContent": "Pop-ups will appear throughout the course to indicate what comes next, such as a video, an exercise, a list of links or a job aid.",
  "activityLinks":"Reference: External Links",
  "gotoLinks":"For more information, feel free to consult the following links. These links are also available in the Toolbox.",
  "checkBudgetTitle":"Activity: Check Your Budget",
  "completewpDrafttitle":"Activity: Prepare a Work Plan",
  "completewptitle":"Activity: Complete the Work Plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "financialAuthoritiesTitle":"Activity: Delegation of Spending and Financial Signing Authorities",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Take what you have learned into real life!</p><pYour organization will have its own ways of doing things. Take a time out from the course to consult your budgets and your organization’s financial signing authority chart.</p><p>What are your department’s procurement spending limits? Do you need to consult Public Services and Procurement Canada? Does your department have its own set of procurement rules, such as the Department of National Defence or the Department of Justice?</p> ",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "activityLinks":"Référence : Liens externes",
  "gotoLinks":"Pour plus d'information, veuillez consulter les liens suivants. Ces liens sont également disponibles dans la boîte à outils.",
  "checkBudgetTitle":"Activité : Vérifier votre budget ",
  "completewpDrafttitle":"Activité : Préparer un plan de travail",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "financialAuthoritiesTitle":"Activité : Délégation des pouvoirs de dépenser et de signer des documents financiers",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p><p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour consulter vos budgets et le tableau de délégation des pouvoirs de signature en matière financière de votre organisation.</p><p>Quelles sont les limites de dépenses de votre ministère en approvisionnement? Avez-vous besoin de consulter Services publics et Approvisionnement Canada? Votre ministère a-t-il son propre ensemble de règles en approvisionnement, comme le ministère de la Défense nationale ou le ministère de la Justice?</p>",
  "gotIt":"Passer au segment suivant.",
  "gotItContent": "Les fenêtres contextuelles apparaissent tout au long du cours pour indiquer ce qui vient ensuite comme une vidéo, un exercice, une liste de liens ou une aide à l’emploi.",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>
