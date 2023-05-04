<template><div>
  <h2 class="pageTitle">
    {{ $t('budgetAuthorities')}}
  </h2>
  <section>
    <b-row>
      <b-col>
        <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0bbfiz4m/flavorId/0_e0omm1ys/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_4ncznldd/flavorId/0_pspgamy0/name/a.mp4" chapters chapterFile="PlanPt3.vtt" posterFile="BudgetAuthorities.png" ccFile="budgetAuthoritiesCC.vtt" :restartAt="thatPoint" toResume="setcreateBudget" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                      <p>[Against a blue background, thin diagonal lines sway in waves. Text appears in a white box with rounded corners. “Module 3: Budgets and Authorities. 1. Introduction.”]</p>
                      <p>Narrator [N]: In this section, you will learn to verify your budget, distinguish between spending and financial authorities and procurement authorities, and confirm who has approval authority through financial delegation charts.</p>
                      <p>[Three drawings appear one after the other: a magnifying glass over a stack of coins, a man and woman speaking to each other, and a check mark over a clipboard.]</p>
                      <p>This section should take you approximately 20 minutes to complete.</p>
                      <p>[An outline of a circle appears. A third of it is filled in white with the words “20 minutes” underneath.]</p>
                      <p>[An External Links reference pop-up text box appears.]</p>
                      <hr>

                      <h2>2. Check Your Budget</h2>
                      <p>[Text appears in a white box with rounded corners. “2. Check Your Budget.” A drawing of a stack of coins appears.]</p>
                      <p>Before beginning a procurement process, you must check that there are sufficient funds in your budget to cover the costs of the goods, the services, and the construction that you are planning. If you don’t have enough funds, you may have to turn to other sources to find the money such as </p>
                      <ul>
                      <li>transfer funds within your own budget, </li>
                      <li>get extra money from other managers, </li>
                      <li>use an untapped surplus your director might have, </li>
                      <li>prepare a Treasury Board Submission or a Memorandum to Cabinet, and,</li>
                      <li>depending on your business, tap into an Interdepartmental Settlement.</li>
                      </ul>
                      <p>[More drawings appear: a dollar bill with downward pointing arrows, a man and woman speaking together, a man standing next to a surplus sign, a document, and two buildings with an arrow between them.]</p>
                      <p>The following exercise will help you determine if you have enough funds in your budget.</p>
                      <p>[A Check Your Budget activity pop-up text box appears.]</p>
                      <hr>

                      <h2>3. Financial Authorities and Procurement Authorities</h2>
                      <p>[Text appears in a white box with rounded corners. “3. Financial Authorities and Procurement Authorities.” A drawing depicts a check mark next to a stack of coins and paper bills.]</p>
                      <p>Now that you know if you have enough money in your budget, let’s check to see if you have the proper authority to begin buying the resources that you need! </p>
                      <p>[A drawing depicts the Canadian Parliament building.]</p>
                      <p>Did you know that Parliament created two authority streams? It created one for financial authorities and another for procurement authorities.</p>
                      <p>[The words “Financial Authority” and “Procurement Authority” appear beneath the building.]</p>
                      <p>To exercise your financial authority, you need to successfully complete this course, submit your signed delegation card to your finance unit, and receive your formal delegation of authority in writing from your finance unit. </p>
                      <p>[Three drawings appear beneath the words “Financial Authority:” a laptop computer, a signed card, and a dollar sign next to a clipboard. A drawing depicts a woman holding a clipboard.]</p>
                      <p>Managers typically have two delegated authorities: Section 32 for commitment authority and Section 34 for certification authority. Section 32 would allow you to order office supplies, while Section 34 would allow you to sign off on having received the supplies.</p>
                      <p>[A drawing of a box and a clipboard appears under the words “Section 32 Commitment authority”. A drawing of a clipboard and a pencil appears under the words “Section 34 Certification Authority”.]</p>
                      <p>For more information on Sections 32 and 34, see the toolbox.</p>
                      <p>Then, Section 33 allows the finance unit to pay for the supplies. In certain situations, for example, temporary help services, you will need to go through a procurement process because it involves a contract. These situations are governed by section 41 of the Financial Administration Act and would typically be managed by the procurement section in your organization.</p>
                      <p>[A drawing of a box and a dollar sign appears under the words “Section 33 Finance unit”. A drawing of a clipboard and a pencil appears under the words “Section 41 Procurement section”.]</p>
                      <p>As for procurement authorities, they are divided into two streams, one for goods and the other for services.</p>
                      <p>[A drawing of a box appears beneath the word “Goods.” A drawing of a man at a counter appears beneath the word “Services”.]</p>
                      <p>Under the <em>Department of Public Works and Government Services Act</em>, the Minister of Public Services and Procurement Canada (PSPC) has the exclusive authority to acquire goods. The Minister of PSPC then delegates this authority to ministers to make purchases for their respective organizations according to specific contract values. Through their organizational delegation instruments, contracting authority is then delegated to positions once certain conditions have been met.</p>
                      <p>[A tree diagram displays the Minister of PSPC at the top, a layer of ministers beneath her, and a third layer of delegates beneath them.]</p>
                      <p>Parliament grants authority for procurement services to ministers through their organization’s enabling legislation. Treasury Board limits ministerial authorities through policies like its Contracting Policy and Common Services Policy. Contracting authority for services can also be delegated to positions through the organizational delegation instrument and can be exercised once certain conditions have been met.</p>
                      <p>[Another tree diagram displays the Canadian Parliament building at the top, and three ministers beneath it. The diagram appears next to a drawing of a man at a counter labelled “Services.”]</p>
                      <p>To know what and how much you can authorize, consult your own signed delegation card and your organization’s delegation chart. Again, the format of these documents will differ depending on where you work.</p>
                      <p>[A drawing of a clip board and pencil appears next to the text “Your delegation card”. A drawing of a chart appears next to the text “Organization’s delegation chart”.]</p>
                      <p>[A Financial Authorities and Procurement Authorities activity pop-up text box appears.]</p>
                      <hr>

                      <h2>4. In Real Life</h2>
                      <p>[Text appears in a white box with rounded corners. “4. In Real Life.” A drawing depicts a budget and a chart.]</p>
                      <p>Take what you have learned into real life! Your organization will have its own ways of doing things. Take a time out from the course to consult your budgets and your organization’s financial signing authority chart.</p>
                      <p>[Three drawings appear one after the other: a stack of coins, a Canadian flag enclosed in a circle, and a clipboard.]</p>
                      <p>What are your department’s procurement spending limits? Do you need to consult Public Services and Procurement Canada? Does your department have its own set of procurement rules such as the Department of National Defence or the Department of Justice?</p>
                      <p>[An In Real Life activity pop-up text box appears.]</p>
                      <hr>

                      <h2>5. Quiz</h2>
                      <p>[Text appears in a white box with rounded corners. “5. Quiz.” Three drawings with check marks appear side-by-side: a checklist next to a stack of coins, a man and woman speaking together, and a chart.]</p>
                      <p>Now that you know how to verify your budget, distinguish between financial and procurement authorities, and consult your financial delegation charts, let’s see what you remember by taking this short quiz.</p>
                      <p>[The words “Take the quiz!” appear next to a check mark. A drawing depicts a hand with a pencil completing a quiz.]</p>
                      <p>[A Take the Quiz activity pop-up text box appears.]</p>
                      <hr>
                      <h2>6. Section Completed</h2>
                      <p>[Onscreen text showing Section Completed instruction.]</p>
                      <!-- Used to generate buttons to jump to activity

                         <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                    </span>
                    <span v-if="$i18n.locale=='fr'">
                      <h2>1. Introduction</h2>
                      <p>[Sur un fond bleu, de fines lignes diagonales oscillent en vagues. Du texte apparaît dans une boîte blanche aux coins arrondis. « Module 3 : Budgets et pouvoirs. 1. Introduction. »] </p>
                      <p>Dans la présente section, vous apprendrez à vérifier votre budget, faire la distinction entre les pouvoirs de dépenser, les pouvoirs financiers et les pouvoirs en matière d’approvisionnement, et confirmer qui a le pouvoir d’approbation en consultant les tableaux de délégation des pouvoirs financiers. </p>
                      <p>[Trois dessins apparaissent l’un après l’autre : une loupe au-dessus d’une pile de pièces de monnaie, un homme et une femme qui se parlent, et une coche à côté d’une planchette à pince.] </p>
                      <p>Il vous faudra environ 20 minutes pour compléter cette section. </p>
                      <p>[Le contour d’un cercle apparaît. Le tiers est rempli en blanc avec les mots « 20 minutes » en dessous.]</p>
                      <p>[Une boîte de texte de référence de Liens externes apparaît.]</p>
                      <hr>
                      
                      <h2>2. Vérifier votre budget</h2>
                      <p>[Du texte apparaît dans une boîte blanche avec des coins arrondis. « 2. Vérifier votre budget ». Le dessin d’une pile de pièces de monnaie apparaît.] </p>
                      <p>Avant de lancer un processus d’approvisionnement, vous devez vérifier que votre budget contient suffisamment de fonds pour couvrir les coûts des biens, des services et des activités de construction que vous prévoyez. Si vous n’avez pas suffisamment de fonds, vous devrez peut-être vous tourner vers d’autres sources pour trouver l’argent nécessaire, par exemple  </p>
                      <ul>
                        <li>transférer des fonds dans vos propres budgets,</li>
                        <li>obtenir de l’argent supplémentaire d’autres gestionnaires,</li>
                        <li>utiliser un surplus inexploité que votre directeur pourrait avoir,</li>
                        <li>préparer une présentation au Conseil du Trésor ou un mémoire au Cabinet, et</li>
                        <li>selon votre secteur d’activité, faire appel à un règlement interministériel. </li>
                      </ul>
                      <p>[D’autres dessins apparaissent : un billet de banque avec des flèches pointant vers le bas, un homme et une femme qui parlent ensemble, un homme debout à côté d’un signe « plus », un document et deux bâtiments avec une flèche entre eux.] </p>
                      <p>L’exercice suivant vous aidera à déterminer si vous disposez de fonds suffisants dans votre budget. </p>
                      <p>[Une boîte de texte de l’activité Vérifier votre budget apparaît.]</p>
                      <hr>
                      
                      <h2>3. Pouvoirs financiers et pouvoirs en matière d’approvisionnement</h2>
                      <p>[Du texte s’affiche dans une boîte blanche aux coins arrondis. « 3. Pouvoirs financiers et pouvoirs en matière d’approvisionnement. » Un dessin représente une coche à côté d’une pile de pièces de monnaie et de billets de banque.] </p>
                      <p>Maintenant que vous savez si vous avez assez d’argent dans votre budget, vérifions si vous avez l’autorité nécessaire pour commencer à acheter les ressources dont vous avez besoin! </p>
                      <p>[Un dessin représente l’édifice du Parlement canadien.] </p>
                      <p>Saviez-vous que le Parlement a créé deux catégories de pouvoirs? Une pour les pouvoirs financiers et une autre pour les pouvoirs en matière d’approvisionnement? </p>
                      <p>[Les mots « Pouvoirs financiers » et « Pouvoirs d’approvisionnement » apparaissent sous l’édifice.] </p>
                      <p>Pour exercer votre délégation financière, vous devez réussir le présent cours, soumettre votre carte de délégation signée à votre service des finances et obtenir votre délégation de pouvoir officielle par écrit de la part de votre service des finances. </p>
                      <p>[Trois dessins apparaissent sous les mots « Pouvoirs financiers » : un ordinateur portable, un stylo qui écrit sur un document et un symbole de dollar à côté d’une planche à pincette. Un dessin représente une femme tenant une planche à pincette.] </p>
                      <p>Les gestionnaires ont généralement deux pouvoirs délégués : l’article 32 pour engager les fonds et l’article 34 pour l’autorité de certification. L’article 32 vous permet de commander des articles de bureau, par exemple, puis l’article 34 vous permet de certifier que vous les avez bel et bien reçus. Pour plus d’information sur les articles 32 et 34, consultez la boîte à outils. </p>
                      <p>[Un dessin d’une boîte et d’un signe de dollar apparaît sous les mots « L’article 32 Engager les fonds ». Un dessin d’une planchette à pince et d’un crayon apparaît sous les mots « L’article 34 l’autorité de certification ».] </p>
                      <p>Ensuite, l’article 33 permet à l’unité des finances de payer la facture. Dans certaines situations, par exemple des services d’aide temporaire, vous devrez passer par un processus d’approvisionnement parce que cela implique un contrat. Habituellement, ce serait au groupe de l’approvisionnement de votre organisation à qui reviendraient ces démarches, en vertu de l’article 41 de la Loi sur la gestion des finances publiques. </p>
                      <p>[Un dessin d’une boîte et d’un signe de dollar apparaît sous les mots « L’article 33 L’unité des finances ». Un dessin d’une planchette à pince et d’un crayon apparaît sous les mots « L’article 41 Le groupe de l’approvisionnement ».] </p>
                      <p>Pour les pouvoirs en matière d’approvisionnement, ils sont divisés en deux catégories, l’une pour les biens et l’autre pour les services. </p>
                      <p>[Le dessin d’une boîte apparaît sous le mot « Biens ». Le dessin d’un homme à un comptoir apparaît sous le mot « Services ».] </p>
                      <p>En vertu de la Loi sur le ministère des Travaux publics et des Services gouvernementaux, le ministre des Services publics et de l’Approvisionnement, SPAC, a le pouvoir exclusif d’acquérir des biens. Le ministre de la SPAC délègue ensuite ce pouvoir aux ministres pour qu’ils effectuent des achats pour leurs organisations respectives selon des valeurs contractuelles spécifiques. Grâce à leurs instruments de délégation organisationnelle, les pouvoirs en matière de l’approvisionnement sont ensuite délégués aux postes une fois que certaines conditions ont été remplies.  </p>
                      <p>[Un diagramme hiérarchique représente la ministre de SPAC au sommet, ensuite des ministres  au deuxième niveau et des délégués au troisième niveau.] </p>
                      <p>[Un diagramme hiérarchique représente la ministre de SPAC au sommet, ensuite des ministres  au deuxième niveau et des délégués au troisième niveau.] </p>
                      <p>[Dans un autre diagramme hiérarchique, l’édifice du Parlement canadien est au sommet, et trois ministres sont au deuxième niveau. À la droite de ce diagramme apparaît le dessin d’un homme à un comptoir sous le mot « Services ».] </p>
                      <p>Pour savoir ce que vous pouvez autoriser et combien vous pouvez utiliser, consultez votre propre carte de délégation signée et le tableau de délégation de votre organisation.  </p>
                      <p>Encore une fois, le format de ces documents variera en fonction de votre lieu de travail. </p>
                      <p>[Une boîte de texte de l’activité Pouvoirs financiers et pouvoirs en matière d’approvisionnement apparaît.]</p>
                      <hr>
                      
                      <h2>4. Dans la vraie vie</h2>
                      <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 4. Dans la vraie vie. » Un dessin représente un budget et un tableau.] </p>
                      <p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p>
                      <p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps de consulter vos budgets et le tableau de délégation des pouvoirs de signature en matière financière de votre organisation.</p>
                      <p>[Trois dessins apparaissent l’un après l’autre : une pile de pièces de monnaie, un drapeau canadien dans un cercle et une planchette à pince.] </p>
                      <p>Quelles sont les limites de dépenses de votre ministère en approvisionnement? Avez-vous besoin de consulter Services publics et Approvisionnement Canada? Votre ministère a-t-il son propre ensemble de règles en approvisionnement, comme le ministère de la Défense nationale ou le ministère de la Justice?  </p>
                      <p>[Une boîte de texte de l’activité Dans la vraie vie apparaît.]</p>
                      <hr>
                      
                      <h2>5. Quiz</h2>
                      <p>[Du texte apparaît dans une boîte blanche aux coins arrondis. « 5. Quiz. » Trois dessins avec des coches apparaissent côte à côte : une liste de vérification à côté d’une pile de pièces de monnaie, un homme et une femme qui parlent ensemble et un tableau.] </p>
                      <p>Maintenant que vous savez comment vérifier votre budget, comment faire la distinction entre les pouvoirs financiers et les pouvoirs en matière d’approvisionnement, et comment consulter vos tableaux de délégation financière, voyons ce dont vous vous souvenez en répondant à ce petit quiz.</p>
                      <p>[Les mots « Répondez au quiz! » apparaissent à côté d’une coche. Un dessin représente une main avec un crayon qui remplit un questionnaire.] </p>
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
    <b-modal no-stacking id="purpose" @hide="resumePlay()" size="xl" okOnly>
      <template v-slot:modal-header="{ close }">
        <h3 class="h5">
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32"> {{$t('activityLinks')}}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
      </template>
      <div v-if="$i18n.locale=='en'">
       <p>For a review of delegation of authorities, see the <strong>Initiate and Authorize Commitments</strong> and <strong>Exercise Financial Authority</strong> modules of the <a href="https://catalogue.csps-efpc.gc.ca/product?catalog=COR250&cm_locale=en" target="blank">Using Public Funds Responsibly</a> course. This link is also available in the Toolbox.</p>
      </div>
      <div v-if="$i18n.locale=='fr'">
      <p>Pour une revue de la délégation des pouvoirs, voir les sections <strong> Engager et autoriser des dépenses</strong> et <strong>Exercer l’autorité financière</strong> du cours <a href="https://catalogue.csps-efpc.gc.ca/product?catalog=COR250&cm_locale=fr" target="blank">Utiliser les fonds publics de manière responsable</a>. Ce lien est également disponible dans la boîte à outils.</p>
      </div>
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
          <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
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
    
    <microlearning path="analyzegoods" imagePath="BuildWP.svg" size="140" time="15" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('AnalyzeGoods')" type="video" />
    <microlearning path="forecastbudget" imagePath="CreateBud.svg" size="140" time="30" :completion="$store.state.currentPlaying.forecast_player" :text="$t('ForecastBudget')" type="video" />
    <microlearning size="140" path="budgetauthorities" youAreHere time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="ExerciseFinancialAuthority.svg" :text="$t('BudgetAuthorities')" type="video" />
    <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <TestTile time="25" path="exam1" imagePath="P-Test.svg" :text="$t('TestPlan')" :completion="parseInt(planCompleted)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" quizUrl="https://app.csps-efpc.gc.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=4157&ou=7881
" />
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
import TestTile from '../components/testTile.vue'
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
    continuePopup,
    TestTile
},
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setBudget_player',e)
    }
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.createBudget
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
  "activityLinks":"References: External Links",
  "gotoLinks":"For more information, feel free to consult the following links. These links are also available in the Toolbox.",
  "checkBudgetTitle":"Activity: Check Your Budget",
  "completewpDrafttitle":"Activity: Prepare a Work Plan",
  "completewptitle":"Activity: Complete the Work Plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "financialAuthoritiesTitle":"Activity: Financial Authorities and Procurement Authorities",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Take what you have learned into real life!</p><p>Your organization will have its own ways of doing things. Take a time out from the course to consult your budgets and your organization’s financial signing authority chart.</p><pYour organization will have its own ways of doing things. Take a time out from the course to consult your budgets and your organization’s financial signing authority chart.</p><p>What are your department’s procurement spending limits? Do you need to consult Public Services and Procurement Canada? Does your department have its own set of procurement rules, such as the Department of National Defence or the Department of Justice?</p> ",
  "TakeTheQuiz":"Take the Quiz",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au quiz",
  "activityLinks":"Références : Liens externes",
  "gotoLinks":"Pour plus d'information, veuillez consulter les liens suivants. Ces liens sont également disponibles dans la boîte à outils.",
  "checkBudgetTitle":"Activité : Vérifier votre budget ",
  "completewpDrafttitle":"Activité : Préparer un plan de travail",
  "completewptitle":"Activité : Compléter le plan de travail",
  "adjustwptitle":"Activité : Ajuster le plan de travail",
  "financialAuthoritiesTitle":"Activité : Pouvoirs financiers et pouvoirs en matière d’approvisionnement",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p><p>Votre organisation aura sa propre façon de faire les choses. Prenez le temps pour consulter vos budgets et le tableau de délégation des pouvoirs de signature en matière financière de votre organisation.</p><p>Quelles sont les limites de dépenses de votre ministère en approvisionnement? Avez-vous besoin de consulter Services publics et Approvisionnement Canada? Votre ministère a-t-il son propre ensemble de règles en approvisionnement, comme le ministère de la Défense nationale ou le ministère de la Justice?</p>",
  "gotIt":"Passer au segment suivant.",
  "gotItContent": "Les fenêtres contextuelles apparaissent tout au long du cours pour indiquer ce qui vient ensuite comme une vidéo, un exercice, une liste de liens ou une aide à l’emploi.",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>
