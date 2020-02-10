<template>
  <div>
    <h2 class="pageTitle" v-html="$t('InitiateAuthorizeSpending')" />
    <section>
      <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_kuavebpz/flavorId/0_luoeatnc/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_55v2xnk5/flavorId/0_vbta0xk7/name/a.mp4" chapters chapterFile="SpendPart1.vtt" posterFile="video_poster.PNG" :restartAt="parseInt(thatPoint)" toResume="setSpendPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)"/>
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.cbTranscript-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="cbTranscript-1" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">

                  <h2>Check your Budget</h2>
                  <p>Now that you have your approved budget, and are beginning to deliver on your work plan, let&rsquo;s begin spending money! </p>
                  <p>Before initiating and committing any expenditures, however, you must verify that there are sufficient funds in your budget.</p>
                  <p>This means that you need to review what has been spent or committed to date, along with any other planned expenditures. </p>
                  <p>As the year progresses, you will most likely shuffle amounts within your budget items to find the funds needed for your expenditures. </p>
                  <p>Don&rsquo;t forget! The format of your budget may differ from the one used here depending on where you work.</p>

                  <hr>

                  <h2>Delegation of Authority</h2>
                  <p>Did you know that financial authorities are granted to ministers and deputy heads through the Financial Administration Act?</p>
                  <p>These individuals then delegate authority to positions identified by title through their organization&rsquo;s delegation of financial signing authorities chart. </p>
                  <p>To exercise your financial authority, you need three things: </p>
                  <ol>
                    <li>Successfully complete this course, </li>
                    <li>Submit your signed delegation card to your finance unit and</li>
                    <li>Receive your formal delegation of authority in writing from your finance unit.  </li>
                  </ol>
                  <p>There are various delegated authorities. Managers typically have two. </p>
                  <p>Section 32 is expenditure initiation and commitment authority and Section 34 is certification authority. Section 32 would allow you to order office supplies, while Section 34 would allow you to sign off on having received the supplies.</p>
                  <p>Then, Section 33 allows the finance unit to pay for the supplies. </p>
                  <p>In certain situations, for example, temporary help services, you will need to go through a procurement process because it involves a contract. These situations are governed by section 41 of the FAA, and would typically be managed by the procurement section in your organization.. </p>
                  <p>To know what and how much you can authorize, consult your own signed delegation card and your organization&rsquo;s delegation chart. </p>
                  <p>Again, the format of these documents will differ depending on where you work. </p>

                  <hr>

                  <h2>Spending Mechanisms</h2>
                  <p>You have the money and you have the delegation. Great! </p>
                  <p>Now you need to determine the best way to get the goods and services in question. </p>
                  <p>The next activity will give you a chance to learn about spending mechanisms!</p>

                  <hr>

                  <h2>Recording in the Financial System</h2>
                  <p>When you have checked that you have enough money to cover a purchase, you then create either a soft commitment, or hard commitment. </p>
                  <p>A soft commitment is when you reserve funds before the supplier is identified. </p>
                  <p>A hard commitment is when you make an arrangement with a known supplier.</p>
                  <p>Either way, you will need to enter these commitments in the financial system using the department&rsquo;s unique financial coding.</p>
                  <p>This financial coding is a system that allows us to keep track of the different kinds of financial transactions throughout the year. It allows us to identify, amongst other things: </p>
                  <ul>
                    <li>Which manager is responsible for the financial transaction</li>
                    <li>Which component of your budget is being used operating and maintenance, salary, etc.</li>
                    <li>The nature of the financial transaction - is it revenue, an expenditure, an asset, a liability</li>
                    <li>The details of the transaction </li>
                    <li>The activity to which the financial transaction is linked.</li>
                  </ul>
                  <p>This allows you to manage your financial transactions well and to be able to speak to your budget at any moment throughout the year. </p>
                  <p>Managers often work with administrative professionals or financial officers for this task.</p>

                  <hr>

                  <h2>Try It!</h2>
                  <p>To wrap up this section, let&rsquo;s take a look at a practice scenario.</p>

                  <h2>Section Completed</h2>

                </span>
                <span v-if="$i18n.locale=='fr'">

                  <h2>Vérifiez votre budget</h2>
                  <p>Maintenant que votre budget est approuvé et que vous avez commencé à mettre en oeuvre votre plan de travail, vous pouvez commencer à dépenser! </p>
                  <p>Avant d&rsquo;engager des dépenses, toutefois, vous devez vous assurer que les fonds disponibles dans votre budget sont suffisants. </p>
                  <p>Pour ce faire, vous devez examiner les dépenses qui ont été engagées, dépensées ou prévues. </p>
                  <p>Au fur et à mesure que l&rsquo;année avance, vous devrez probablement ajuster votre budget à vos besoins en déplaçant des montants d&rsquo;un item à l&rsquo;autre au sein même votre budget. </p>
                  <p>N&rsquo;oubliez pas que le gabarit utilisé dans votre unité peut différer sensiblement de celui que nous vous présentons ici!</p>

                  <hr>

                  <h2>Délégation des pouvoirs</h2>
                  <p>C&rsquo;est la Loi sur la gestion des finances publiques qui confère aux ministres et aux administrateurs généraux leurs pouvoirs financiers. </p>
                  <p>Par la suite, ces personnes délèguent, à leur tour, une partie de ces pouvoirs financiers à l&rsquo;intérieur de leur organisation, par le biais d&rsquo;un tableau de délégation des pouvoirs de signature en matière financière. </p>
                  <p>Pour exercer votre délégation financière, vous avez besoin de trois choses: </p>
                  <ol>
                    <li>Réussir le présent cours</li>
                    <li>Soumettre votre carte de délégation signée à votre service des finances et</li>
                    <li>Obtenir votre délégation de pouvoir officielle par écrit de la part de votre service des finances. </li>
                  </ol>
                  <p>Il existe divers pouvoirs délégués. Les gestionnaires en ont généralement deux. L'article 32 permet à une personne déléguée d&rsquo;engager des fonds et des dépenses tandis que l&rsquo;article 34 est l&rsquo;autorité de certification. L&rsquo;article 32 vous permet de commander des articles de bureau, puis l&rsquo;article 34 vous permet de certifier que vous les avez bel et bien reçus. </p>
                  <p>Ensuite, l&rsquo;article 33 permet à l&rsquo;unité des finances de payer la facture. </p>
                  <p>Dans certaines situations, par exemple des services d&rsquo;aide temporaire, vous devrez passer par un processus d&rsquo;approvisionnement parce que cela implique un contrat. Habituellement, ce serait au groupe “Approvisionnement” de votre organisation que reviendrait ces démarches, sous l&rsquo;article 41 de la Loi sur la gestion des finances publiques. </p>
                  <p>Pour savoir ce que vous pouvez initier et engager, vous devez vous fier à votre carte de délégation signée -  qui est bien propre à vous dans votre rôle actuel - ainsi qu&rsquo;au tableau de délégation des pouvoirs de signature en matière financière dans votre organisation. </p>
                  <p>Encore une fois, le format de ces documents variera selon l&rsquo;endroit où vous travaillez. </p>

                  <hr>

                  <h2>Mécanismes de dépense</h2>
                  <p>Vous avez l&rsquo;argent et vous avez la délégation. Super! </p>
                  <p>Maintenant, vous devez déterminer la meilleure façon d&rsquo;obtenir les biens et les services en question. </p>
                  <p>La prochaine activité vous donnera l&rsquo;occasion de vous familiariser avec les mécanismes de dépense!</p>

                  <hr>

                  <h2>Enregistrement dans le système financier</h2>
                  <p>Après avoir vérifié que vous avez assez d&rsquo;argent pour couvrir un achat, vous créez soit un engagement préalable ou un engagement ferme. </p>
                  <p>Un engagement préalable est approprié lorsque vous réservez des fonds alors que vous n&rsquo;avez pas encore identifié de fournisseur. </p>
                  <p>Un engagement ferme est approprié lorsque vous faites affaire avec un fournisseur connu. </p>
                  <p>Dans un cas comme dans l&rsquo;autre, vous devrez entrer ces engagements dans le système financier en utilisant le codage financier unique de votre organisation.</p>
                  <p>Ce codage financier est un système qui permet de faire le suivi des opérations financières tout au long de l&rsquo;année. Il permet d&rsquo;identifier, entre autres: </p>
                  <ul>
                    <li>Le  gestionnaire responsable </li>
                    <li>La composante de votre budget utilisée, par exemple fonctionnement et entretien, salaire, etc.</li>
                    <li>La nature de l'opération financière, par exemple  dépenses, recettes, actif, passif</li>
                    <li>Les détails de la transaction</li>
                    <li>L&rsquo;activité à laquelle est associée l&rsquo;opération financière</li>
                  </ul>
                  <p>Cela vous permet de bien gérer vos opérations financières et de bien pouvoir répondre de votre budget à tout moment au cours de l&rsquo;année. </p>
                  <p>Les gestionnaires travaillent souvent avec des professionnels de l&rsquo;administration ou des agents financiers pour cette tâche.</p>

                  <hr>

                  <h2>Essayons-le!</h2>
                  <p>Afin de conclure cette section, prenons quelques instants pour appliquer le tout à un scénario fictif. </p>

                  <h2>Section complétée</h2>

                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </section>
    <section>
      <b-modal no-stacking id="checkYourBudget" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('checkBudget')}}</template>
    <checkBudget />
        </b-modal>
      <b-modal id="delegAuth" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('delegateAuthority')}}</template>
        <delegAuthority />
      </b-modal>
      <b-modal id="spendMechanisms" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('forecastBudgetTitle')}}</template>
        <spendMechanisms />
      </b-modal>
      <b-modal no-stacking id="spendS32tryIt" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('tryItTitle')}}</template>
        <spendS32tryIt />
      </b-modal>
      <b-modal no-stacking id="RecordingFinancialSystem" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('RecordingTitle')}}</template>
        <RecordingFinancialSystem />
      </b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
      <budgetQuiz />
      </b-modal>
    </section>
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning path="spendKey" time="5" size="140" :completion="$store.state.currentPlaying.kmSpend" imagePath="KeyMessS.png" :text="$t('KeyMessages')" />
      <microlearning youAreHere path="spendPart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning path="spendPart2"  imagePath="ExerciseFinancialAuthority.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning path="spendPart3" size="140" time="20" :completion="$store.state.currentPlaying.spendPart3_player" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" />
      <microlearning path="exam2" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)"/>
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import checkBudget from '~/components/slides/spend/checkBudget'
import delegAuthority from '~/components/slides/spend/delegAuthority'
import spendMechanisms from '~/components/slides/spend/spendMechanisms'
import RecordingFinancialSystem from '~/components/slides/spend/RecordingFinancialSystem'
import spendS32tryIt from '~/components/slides/spend/spendS32tryIt'
export default {
  data() {
    return {
      modalArray: ["checkYourBudget", "delegAuth", "spendMechanisms", "RecordingFinancialSystem","spendS32tryIt"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    delegAuthority,
    checkBudget,
    spendMechanisms,
    spendS32tryIt,
    RecordingFinancialSystem
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart1
    }
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },
    updatePercent(e){
      this.$store.commit('currentPlaying/setSpendPart1_player',e)
    }
  }
}
</script>
<style scoped>

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#mainPlayer {
  width: 60vw;
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
  position: relative;
  color: #CCC;
  justify-content: flex-start;
  counter-reset: episode;
}
#bar > li {
  list-style-type:none;
}
#bar > li > p {
  display: inline-block;
  height:2.6em;
}
/*#bar > li.chaptersLink:first-child > a.activityButton { display:none; }*/
/*#bar > li.chaptersLink:nth-child(2) > a.activityButton { display:none; }*/

#bar > li:last-child > a {
  display:none;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  width: 200px;
  height: 171px;
  overflow: hidden;
  padding: 1.2em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius: 2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
}


.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #7d677d;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .1em .25em 0 .5em;
  color: white;
}
.chaptersLink:nth-child(-n+9):before {
  content: "0"counter(episode);
}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.playButton, .activityButton {
  display: inline-block;
  width:58px;
}
.playButton:hover, .activityButton:hover,.playButton:focus, .activityButton:focus {
  /*Insert hover animation here, placeholder for now*/
  opacity:0.8;
}
.playButton{
  left: 20px;
}
.activityButton {
  right: 20px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}
.spendSection {
  position: relative;
}
.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.spendSectionBar span {
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
  "tryItTitle":"Activity: Try it!",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "delegateAuthority":"Activity: Delegation of Authority",
  "checkBudget":"Activity: Check your Budget",
  "forecastBudgetTitle":"Activity: Forecast Budget Requirements",
  "RecordingTitle":"Activity: Recording in the Financial System",
  "gotIt":"Continue to next segment",
  "transcriptText":"",
  "spendSectionBar": "SPEND"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "delegateAuthority":"Activité: Délégation des pouvoirs",
  "checkBudget":"Activité: Vérifiez votre budget",
  "tryItTitle":"Activité: Essayons-le!",
  "forecastBudgetTitle":"Activité: Prévoyez vos besoins budgétaires",
  "RecordingTitle":"Activité: Enregistrement dans le système financier",
  "gotIt":"Continuer au segment suivant.",
  "transcriptText":"",
  "spendSectionBar": "DÉPENSES"
  }
  }
</i18n>