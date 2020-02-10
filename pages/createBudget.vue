<template>
  <div>
    <h2 class="pageTitle">
      {{ $t('CreateBudget')}}
    </h2>
    <section>
 <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_38mk4oxi/v/12/flavorId/0_9vv38k5m/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_cyj2h9a9/flavorId/0_ft4b704i/name/a.mp4" chapters chapterFile="BudgetChapters.vtt" ccFile="CreateBudget_captions.vtt" posterFile="video_poster.PNG" :restartAt="thatPoint" toResume="setCreateBudget" :modalArray="modalArray" @timeupdate="updatePercent($event)" />

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

                  <h2>Introduction</h2>
                  <p>In this lesson, you will learn how to create a budget that is in line with your work plan. People who have been doing this for a while will tell you that these two things - the work plan and the budget - are often done at the same time in a single step. However, in order to help you learn how to do each of these tasks well, we separated them. </p>
                  <p>Creating a budget involves three main tasks: analyzing the available information, forecasting your budget requirements, and submitting your proposed budget. </p>
                  <p>Analyzing means taking a good look at last year&rsquo;s work plan and financial reports. If you have access to prior years, it&rsquo;s a good idea to look at those, as well as the current financials, context and priorities of your organization. </p>
                  <p>Forecasting means estimating costs and identifying those costs that may change significantly over the fiscal year.</p>
                  <p>Once your budget requirements are complete, you submit your proposed budget. You may be asked to make adjustments before final approval.</p>
                  <p>Ready to dive further into each of these steps? Great! Just before we do that, though, let&rsquo;s take a moment to learn about how the government financial cycle works so that you can tie it in with your own work as a Manager. </p>

                  <hr>

                  <h2>The Financial Cycle of the Government of Canada</h2>
                  <p>Let&rsquo;s look at how you create your budget requirements in the larger context of the Financial Cycle of the Government of Canada.</p>
                  <p>The fiscal year of Government runs from April 1 to March 31.</p>
                  <p>As you can see, some activities are at both the government-wide level and organization level.</p>
                  <p>Key activities happen to prepare for the next fiscal year, others are happening during the fiscal year, and others occur after it is over.</p>
                  <p>As a manager, you&rsquo;re building your work plan and budget requirements for the next fiscal year in the fall.</p>
                  <p>You could be responsible for a new program being established through a Budget proposal or a Memorandum to Cabinet. </p>
                  <p>These are discussed at the Finance Committee pre-budget consultations.</p>
                  <p>When the new program is announced in the Federal budget, you would then need to prepare a Treasury Board submission, and seek approval to access the funding.</p>
                  <p>Interim Supply provides the initial funding to kick off the year while waiting for Parliament to approve the Full Supply.</p>
                  <p>Now where do you fit in?</p>
                  <p>Your work plan feeds into your organization&rsquo;s Departmental Plan. </p>
                  <p>And your budget rolls up into the Main Estimates, which present the resources required by each organization to fulfill its mandate and cover its priorities for the coming fiscal year. </p>
                  <p>Full Supply, based on the Main Estimates, is approved around the end of June.</p>
                  <p>From the moment that Full Supply has been approved, starting budgets are officialized for each department.</p>
                  <p>Budgets are formalized into departmental financial systems, and business plans are reflected in the performance agreements of managers and employees. </p>
                  <p>Parliament can grant additional spending powers during the year, through Supplementary Estimates.</p>
                  <p>They may have an impact on your department, which may affect your budget.</p>
                  <p>You will spend the money in your budget throughout the year.   </p>
                  <p>This eventually makes its way, at a high level, into the Public Accounts of Canada. </p>
                  <p>Towards the end of the year, you are asked for information on the results you achieved on the activities in your work plan.  </p>
                  <p>This becomes part of your organization's Departmental Results Report. </p>
                  <p>And by then, you&rsquo;re already starting your work plan and budget requirements for the next fiscal year. </p>

                  <hr>

                  <h2>Analyze a Budget - Key Terms</h2>
                  <p>Now that you have a better sense of the financial cycle of the Government of Canada and of how it relates to your work as a manager, let&rsquo;s go back to our Analyze-Forecast-Submit workflow to creating a budget. </p>
                  <p>The more often you do this, the more accurate your budget will be. Don&rsquo;t worry, your ability to make precise forecasts will increase with experience. You got this!</p>
                  <p>The following activity will allow you to examine the key terms regarding budgets. </p>

                  <hr>

                  <h2>Analyze Available Information</h2>
                  <p>Now you&rsquo;re familiar with the key terms. You&rsquo;re going to have a chance to create your proposed budget by using information from last year and this year. Click on any question marks you see and a question will appear for you to consider. Once you&rsquo;ve made a choice, the correct figure will appear in the budget. </p>

                  <hr>

                  <h2>Forecast Your Budget Requirements</h2>
                  <p>After getting what information you can from last year&rsquo;s and the current year&rsquo;s budgets, you find that you still need to forecast some budget requirements. Let&rsquo;s continue creating your proposed budget. Click on any question marks you see and a question will appear for you to consider. Once you&rsquo;ve made a choice, the correct figure will appear in the budget. </p>

                  <hr>

                  <h2>Submit Your Proposed Budget and Make Adjustments</h2>
                  <p>You&rsquo;re now ready to submit your budget to your director. You may be asked to explain any assumptions you used, how your figures were estimated, and how your budget will allow you to fulfil your priorities.</p>
                  <p>If your director asks about any costs, the budget notes in your “back pocket” will remind you how you reached them. You may need to make adjustments before you get final approval. </p>
                  <p>If, during the meeting, your director asks you to adjust your budget, you may also need to update your work plan. </p>
                  <p>You may not have enough budget in O&M but find that you could move that amount over from Salary. Though not common, you can convert some funds from Salary to O&M, or vice versa. You just need to factor in the 27% Employee Benefit Plan - EBP - amount in your calculations. This means that $100,000 in Salary equals $127,000 in O&M. It&rsquo;s the reverse converting Salary to O&M. Talk to your financial management advisor if you think this might be something you need to do. </p>

                  <p>You may need some other sources of funds in your budget to cover the priorities in your work plan. Here are a few examples of where you can turn to: </p>
                  <ul>
                    <li>Transfer funds within your own budget </li>
                    <li>Get extra money from other managers </li>
                    <li>Use an untapped surplus your director might have</li>
                    <li>Treasury Board Submission or Memorandum to Cabinet</li>
                    <li>Depending on your business, tap into an Interdepartmental Settlement </li>
                  </ul>
                  <p>A Treasury Board Submission is a document used to seek Treasury Board approval for program execution strategy and/or funding authorities for an initiative that the organization would otherwise not be able to undertake or that is outside its delegated authorities. For more information, look in the toolbox. </p>
                  <p>A Memorandum to Cabinet is used at any time of the year by ministers who wish to consult with their ministerial colleagues in Cabinet and reach a Cabinet decision. For more information, look in the toolbox. </p>
                  <p>In case you&rsquo;re wondering what an Interdepartmental Settlement is, it&rsquo;s a process mechanism unique to the Government of Canada where a financial entry is created so that departments can transfer incurred costs between one another or collect revenue from one another. Examples are language testing performed by the Public Service Commission, or translation by the Translation Bureau within Public Services and Procurement Canada. </p>
                  <p>The following activity will allow you to adjust your proposed budget. </p>

                  <hr>

                  <h2>In Real Life</h2>

                  <p>Let&rsquo;s take what you have learned into real life. Your organization will have their own ways of doing budget requirements. Take time out from the course and talk to your financial management advisor and director. Ask them: </p>
                  <ul>
                    <li>Do we have a budget template?</li>
                    <li>What budgets do we have?</li>
                    <ul>
                      <li>Operating, which includes Salary and O&M</li>
                      <li>Operating and Gs&Cs</li>
                      <li>Operating and Capital</li>
                    </ul>
                    <li>Is the capital budget managed centrally or by each manager?</li>
                  </ul>

                  <hr>

                  <h2>Quiz</h2>
                  <p>We&rsquo;re at the end of this lesson on how to create a budget! Take a few moments to answer the following questions to see what you remember! </p>

                  <h2>Section completed</h2>

                </span>
                <span v-if="$i18n.locale=='fr'">

                  <h2>Introduction</h2>
                  <p>Dans cette leçon, vous apprendrez comment créer un budget conforme à votre plan de travail. Les gens qui le font depuis un certain temps vous diront que ces deux choses - le plan de travail et le budget - se font souvent en même temps et en une seule étape. Cependant, afin de vous aider à apprendre à bien faire chacune de ces tâches, nous les avons séparées. </p>
                  <p>La création d&rsquo;un budget implique trois tâches principales : analyser les informations disponibles, prévoir vos besoins budgétaires et soumettre votre budget proposé. </p>
                  <p>Analyser, c&rsquo;est bien examiner le plan de travail et les rapports financiers de l&rsquo;an dernier. Si vous avez accès aux années antérieures, il est bon de les examiner, ainsi que les finances, le contexte et les priorités actuels de votre organisation. </p>
                  <p>Prévoir, c&rsquo;est estimer les coûts et identifier les coûts qui peuvent changer de façon significative au cours de l&rsquo;exercice financier.</p>
                  <p>Une fois vos besoins budgétaires complétés, vous soumettez votre budget proposé. Il se peut qu&rsquo;on vous demande d&rsquo;apporter des ajustements avant l&rsquo;approbation finale.</p>
                  <p>Prêt à plonger plus loin dans chacune de ces étapes ? Super ! Mais juste avant cela, prenons un moment pour en savoir plus sur le fonctionnement du cycle financier du gouvernement afin que vous puissiez le relier à votre propre travail en tant que gestionnaire.</p>

                  <hr>

                  <h2>Le cycle financier du gouvernement du Canada</h2>
                  <p>Voyons comment vous créez vos besoins budgétaires dans le contexte plus large du cycle financier du gouvernement du Canada.</p>
                  <p>L'exercice financier du gouvernement va du 1er avril au 31 mars.</p>
                  <p>Comme vous pouvez le constater, certaines activités se déroulent à la fois à l&rsquo;échelle du gouvernement et de l'organisation.</p>
                  <p>Des activités clés se préparent pour le prochain exercice, d&rsquo;autres se déroulent au cours de l&rsquo;exercice et d&rsquo;autres encore après la fin de celui-ci.</p>
                  <p>En tant que gestionnaire, vous élaborez votre plan de travail et vos exigences budgétaires pour le prochain exercice financier à l&rsquo;automne.</p>
                  <p>Vous pourriez être responsable d&rsquo;un nouveau programme établi par le biais d&rsquo;une proposition budgétaire ou d&rsquo;un mémoire au Cabinet. </p>
                  <p>Ces questions sont discutées lors des consultations prébudgétaires du Comité des finances.</p>
                  <p>Lorsque le nouveau programme sera annoncé dans le budget fédéral, vous devrez alors préparer une présentation au Conseil du Trésor et demander l&rsquo;autorisation d&rsquo;accéder au financement.</p>
                  <p>Les crédits provisoires fournissent le financement initial pour lancer l&rsquo;année en attendant que le Parlement approuve les crédits intérimaires.</p>
                  <p>Maintenant, où vous situez vous ?</p>
                  <p>Votre plan de travail est intégré au plan ministériel de votre organisation. </p>
                  <p>De plus, votre budget se retrouve dans le Budget principal des dépenses, qui présente les ressources dont chaque organisme a besoin pour remplir son mandat et couvrir ses priorités pour le prochain exercice financier. </p>
                  <p>Les crédits complets, fondés sur le Budget principal des dépenses, sont approuvés vers la fin de juin.</p>
                  <p>À partir du moment où l'Approvisionnement intégral a été approuvé, les budgets de départ sont officialisés pour chaque ministère.</p>
                  <p>Les budgets sont officialisés dans les systèmes financiers ministériels et les plans d&rsquo;activités sont reflétés dans les ententes de rendement des gestionnaires et des employés. </p>
                  <p>Le Parlement peut accorder des pouvoirs de dépenser supplémentaires au cours de l&rsquo;exercice, au moyen du Budget supplémentaire des dépenses.</p>
                  <p>Elles peuvent avoir une incidence sur votre ministère, ce qui peut avoir une incidence sur votre budget.</p>
                  <p>Vous dépenserez l&rsquo;argent dans votre budget tout au long de l&rsquo;année.   </p>
                  <p>Cela finit par se retrouver, à un niveau élevé, dans les Comptes publics du Canada. </p>
                  <p>Vers la fin de l&rsquo;année, on vous demande des renseignements sur les résultats obtenus par rapport aux activités prévues dans votre plan de travail.  </p>
                  <p>Cela fait partie du rapport ministériel sur les résultats de votre organisation. </p>
                  <p>Et d&rsquo;ici là, vous commencez déjà votre plan de travail et vos exigences budgétaires pour le prochain exercice financier. </p>

                  <hr>

                  <h2>Analyser un budget - Termes clés</h2>
                  <p>Maintenant que vous avez une meilleure idée du cycle financier du gouvernement du Canada et de la façon dont il est lié à votre travail de gestionnaire, revenons à notre processus d&rsquo;analyse, de prévision et de présentation de budget. </p>
                  <p>Ne vous inquiétez pas, votre capacité à faire des prévisions précises  augmentera avec l&rsquo;expérience. Vous y arriverez !</p>
                  <p>L'activité suivante vous permettra d&rsquo;examiner les termes clés concernant les budgets. </p>

                  <hr>

                  <h2>Analyser l'information disponible</h2>
                  <p>Maintenant, vous connaissez les termes clés. Vous aurez l'occasion de créer votre budget proposé en utilisant l'information de l&rsquo;année dernière et de cette année. Cliquez sur les points d&rsquo;interrogation que vous voyez à l&rsquo;écran et une question apparaîtra. Une fois que vous aurez fait votre choix, le chiffre correct apparaîtra dans le budget.</p>

                  <hr>

                  <h2>Prévoyez vos besoins budgétaires</h2>
                  <p>Après avoir obtenu tous les renseignements que vous pouvez à partir des budgets de l&rsquo;année dernière et de l&rsquo;année en cours, vous constatez qu&rsquo;il vous faut encore prévoir certains besoins budgétaires. Cliquez sur les points d&rsquo;interrogation que vous voyez à l&rsquo;écran et une question apparaîtra. Une fois que vous aurez fait votre choix, le chiffre correct apparaîtra dans le budget. </p>

                  <hr>

                  <h2>Soumettez votre budget proposé et apportez les ajustements nécessaires</h2>
                  <p>Vous êtes maintenant prêt à soumettre votre budget à votre directeur. On vous demandera peut-être d&rsquo;expliquer les hypothèses que vous avez utilisées, comment vos chiffres ont été estimés et comment votre budget vous permettra de respecter vos priorités.</p>
                  <p>Si votre directeur vous pose des questions sur les coûts, les notes budgétaires dans votre "poche arrière" vous rappelleront comment vous les avez atteints. Il se peut que vous ayez besoin de faire des ajustements avant d&rsquo;obtenir l&rsquo;approbation finale. </p>
                  <p>Si, au cours de la réunion, votre directeur vous demande d&rsquo;ajuster votre budget, vous devrez peut-être aussi mettre à jour votre plan de travail. </p>
                  <p>Il se peut que vous n&rsquo;ayez pas assez de budget de F&E, mais vous constaterez que vous pourriez transférer ce montant de la rubrique Salaire à d&rsquo;autres postes. Bien que cela se produise rarement, vous pouvez convertir certains fonds du Salaire en F&E, ou vice versa. Vous n&rsquo;avez qu&rsquo;à tenir compte du montant de 27 % du régime d&rsquo;avantages sociaux des employés - RASE - dans vos calculs. Cela signifie que 100&nbsp;000&nbsp;$ en salaire équivaut à 127&nbsp;000&nbsp;$ en F et E. C&rsquo;est l'inverse de la conversion du salaire en F&E. Parlez-en à votre conseiller en gestion financière si vous pensez que c&rsquo;est quelque chose que vous devriez faire. </p>
                  <p>Vous pourriez avoir besoin d&rsquo;autres sources de financement dans votre budget pour couvrir les priorités de votre plan de travail. Voici quelques exemples d&rsquo;endroits où vous pouvez vous adresser : </p>
                  <ul>
                    <li>Transférez des fonds à l'intérieur de votre propre budget </li>
                    <li>Obtenez de l&rsquo;argent supplémentaire d&rsquo;autres gestionnaires </li>
                    <li>Utilisez un surplus inexploité que votre administrateur pourrait avoir</li>
                    <li>Présentez une soumission au Conseil du Trésor ou un mémoire au Cabinet</li>
                    <li>En fonction de votre activité, tirez parti d&rsquo;un règlement interministériel </li>
                  </ul>
                  <p>La présentation d&rsquo;une soumission au Conseil du Trésor est un document utilisé pour obtenir l&rsquo;approbation du Conseil du Trésor pour une stratégie d&rsquo;exécution de programme ou des autorisations de financement pour une initiative que l'organisation ne serait pas en mesure d&rsquo;entreprendre autrement ou qui ne relève pas de ses pouvoirs délégués. Pour plus d&rsquo;informations, consultez la boîte à outils. </p>
                  <p>Un mémoire au Cabinet est utilisé en tout temps de l&rsquo;année par les ministres qui souhaitent consulter leurs collègues ministériels et prendre une décision du Cabinet. Pour plus d&rsquo;informations, consultez la boîte à outils. </p>
                  <p>Au cas où vous vous demandez ce qu&rsquo;est un règlement interministériel, il s&rsquo;agit d&rsquo;un mécanisme de processus propre au gouvernement du Canada où une entrée financière est créée pour que les ministères puissent transférer entre eux les coûts engagés ou percevoir des recettes les uns des autres. Par exemple, les tests linguistiques sont effectués par la Commission de la fonction publique ou la traduction par le Bureau de la traduction au sein des Services publics et Approvisionnements Canada. </p>
                  <p>L'activité suivante vous permettra d&rsquo;ajuster votre budget proposé. </p>

                  <hr>

                  <h2>Dans la vraie vie</h2>
                  <p>Appliquons ce que vous avez appris dans la vrai vie. Votre organisation aura sa propre façon de faire les exigences budgétaires. Prenez un moment et allez parler à votre conseiller en gestion financière et à votre directeur, posez-leur les questions suivantes : </p>
                  <ul>
                    <li>Avons-nous un modèle de budget?</li>
                    <li>Quels sont nos budgets?</li>
                    <ul>
                      <li>Fonctionnement, inclus salaire et F&E</li>
                      <li>Fonctionnement et subventions et contributions</li>
                      <li>Fonctionnement et immobilisations</li>
                    </ul>
                    <li>Le budget d&rsquo;investissement est-il géré de façon centralisée ou par chaque gestionnaire? </li>
                  </ul>

                  <hr>

                  <h2>Quiz</h2>
                  <p>Nous sommes à la fin de la leçon sur comment créer un budget! Prenez maintenant quelques instants pour répondre aux quelques questions afin de voir ce que vous avez retenu!</p>

                  <h2>Section complétée</h2>

                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </section>
    <section>
      <b-modal no-stacking id="purpose" @hide="resumePlay()" okOnly>{{ $t('gotIt') }}</b-modal>
      <b-modal no-stacking id="budgetKeyTerms" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('AnalyzeBudgetKT')}}</template>
    <AnalyzeBudgetKT />
        </b-modal>
      <b-modal id="budgetAnalyze" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('budgetAnalyzeActivity')}}</template>
        <budgetAnalyzeActivity />
      </b-modal>
      <b-modal id="forecastBudget" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('forecastBudgetTitle')}}</template>
        <budgetForecastActivity />
      </b-modal>
      <b-modal no-stacking id="submitBudget" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('submitBudgetTitle')}}</template>
        <submitBudget />
      </b-modal>
      <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('InRealLife')}}</template>
        <span v-html="$t('IRLText')"></span>
      </b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
      <budgetQuiz />
      </b-modal>
    </section>
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="planKey" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.png" :text="$t('KeyMessages')" />
      <microlearning path="buildWP" imagePath="BuildWP.svg" size="140" time="20" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('BuildWorkPlan')" />
      <microlearning youAreHere size="140" path="createBudget" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="CreateBud.svg" :text="$t('CreateBudget')" />
      <microlearning size="140" path="exam1" time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import budgetAnalyzeActivity from '~/components/slides/plan/budgetAnalyseActivity'
import budgetForecastActivity from '~/components/slides/plan/budgetForecastActivity'
import AnalyzeBudgetKT from '~/components/slides/plan/AnalyzeBudgetKT'
import submitBudget from '~/components/slides/plan/submitBudget'
import budgetQuiz from '~/components/slides/plan/budgetQuiz'
export default {
  data() {
    return {
      modalArray: ["purpose", "purpose", "budgetKeyTerms", "budgetAnalyze", "forecastBudget","submitBudget", "reallife", "quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    AnalyzeBudgetKT,
    budgetAnalyzeActivity,
    budgetForecastActivity,
    submitBudget,
    budgetQuiz,
  },
    methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setCreateBudget_player',e)
    }
  },
  computed:{
    thatPoint(){
      return parseInt(this.$store.state.currentPlaying.createBudget)
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
  "TakeTheQuiz":"Take the Quiz",
  "submitBudgetTitle":"Activity: Submit and Adjust your Budget",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "AnalyzeBudgetKT":"Activity: Analyze a Budget - Key Terms",
  "budgetAnalyzeActivity":"Activity: Analyze Past And Current Year&rsquo;s Budget",
  "forecastBudgetTitle":"Activity: Forecast Budget Requirements",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Your organization will have their own ways of doing budget requirements. Take time out from the course and talk to your financial management advisor and director. Ask them:&nbsp;</p><ul><li>Do we have a budget template?</li><li>What budgets do we have?</li><ul><li>Operating, which includes Salary and O&amp;M</li><li>Operating and Gs&amp;Cs</li><li>Operating and Capital</li></ul><li>Is the capital budget managed centrally or by each manager?</li></ul>",
  "gotIt":"Continue to next segment",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "AnalyzeBudgetKT":"Activité: Analyser un budget - Termes clés",
  "budgetAnalyzeActivity":"Activité: Analyser les budgets précédents et en cours",
  "submitBudgetTitle":"Activité: Soumettre et ajuster votre budget ",
  "forecastBudgetTitle":"Activité: Prévoyez vos besoins budgétaires",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Votre organisation aura sa propre fa&ccedil;on de faire les exigences budgétaires. Prenez congé du cours et parlez à votre conseiller en gestion financi&egrave;re et à votre directeur. Demandez-leur :&nbsp;</p><ul><li>Avons-nous un mod&egrave;le de budget?</li><li>Quels sont nos budgets?</li><ul><li>Fonctionnement, inclus salaire et F&amp;E</li><li>Fonctionnement et subventions et contributions</li><li>Fonctionnement et immobilisations</li></ul><li>Le budget d&rsquo;investissement est-il géré de fa&ccedil;on centralisée ou par chaque gestionnaire?</li></ul>",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l&rsquo;activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>