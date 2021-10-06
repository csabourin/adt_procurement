<template>
  <div>
    <h2 class="pageTitle" v-html="$t('lifeCycle')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_kuavebpz/flavorId/0_kl36sx20/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_55v2xnk5/flavorId/0_7yp7dcyb/name/a.mp4" chapters chapterFile="ManagePart1.vtt" ccFile="SpendPart1_captions.vtt" posterFile="spendPart1_poster.png" :restartAt="parseInt(thatPoint)" toResume="setSpendPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)"/>
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

                        <h2>1. Introduction</h2>
                        <p>[On a grey background with wavy white lines, a title card reads, “Module 7: Life Cycle Materiel Management.” A text box reads, “1. Introduction.”]  </p>
                        <p>Narrator: In this section you will learn about the four phases of the life cycle materiel management: </p>
                        <ul>
                          <li>planning </li>
                          <li>acquisition </li>
                          <li>operation, use and maintenance, and </li>
                          <li>divestiture</li>
                        </ul>
                        <p>[The four phases appear under the words “In this section.” To their right, four arrows form a circle around the words “Life Cycle Materiel Management.”] </p>
                        <p>This section should take you approximately 20 minutes to complete. </p>                       

                        <hr>
                        <h2>2. Planning</h2>
                        <p>[One third of a clock is shaded in. A text box reads, “2. Planning.”] </p>
                        <p>You have procured the goods that you need. That’s great! But did you know that you need to manage their life cycle? </p>
                        <p>[A delivery man pushes a dolly of boxes to a woman, who shakes his hand.] </p>
                        <p>Life cycle materiel management is the effective and efficient management of assets from the identification of requirements to the divestment of the assets.</p>
                        <p>[The words “Life Cycle Materiel Management” reappear with the four arrows rotating slowly around them. Below this, an arrow points from the words “Identification of requirements” to “Divestment of assets.”] </p>
                        <p>Let’s look a little bit more closely at planning, the first phase of the life cycle materiel management. Since planning was covered in the first three modules of this course, here is a quick summary. During the planning process, managers should determine the following. </p>
                        <p>[A person ponders. Thought bubbles appear above him as the narrator speaks. Each one contains a key point from the following list.]</p>
                        <ul>
                          <li>Is there a clear case to buy or to lease? </li>
                          <li>What are the administration and operational requirements?   </li>
                          <li>Is a product or its servicing necessary?  </li>
                          <li>What finished goods (materiel) or raw materials are required?  </li>
                          <li>Is existing materiel available or appropriate to meet the need? </li>
                          <li>Is it required in the quantity proposed?  </li>
                          <li>How was the forecasting done to estimate the requirement? </li>
                          <li>Is capital or operation funding being used to support the acquisition?   </li>
                          <li>Which method will be used to acquire the materiel and related support services?   </li>
                          <li>Can the requirements be satisfied with environmentally-friendly products and products that use resource-saving materials or processes? </li>
                          <li>Have other relevant questions, like meeting socio-economic criteria set by the government such as modern treaties, land claims and the promotion of Indigenous business, been considered? </li>
                          <li>Have accessibility considerations been taken into account to identify, remove and prevent new barriers? </li>
                        </ul>
                        <p>Materiel acquisition decisions should consider the total cost of the product over the product’s life. </p>
                        <p>[Four people gather in a meeting. A stack of coins sits across from a box with two arrows around it. The word “vs” is between the two images.] </p>
                        <p>Once these questions have been answered, you can proceed to the second phase of life cycle materiel management. </p>
                        

                        <hr>

                        <h2>3. Acquisition</h2>
                        <p>[A text box reads, “3. Acquisition.”] </p>
                        <p>After the planning phase of the life cycle, it’s time for the acquisition phase. This was covered in Modules 4, 5 and 6 of this course.</p>
                        <p>[A header reads, “Second Phase: Acquisition.” Three businesspeople stand together. Three bullet points appear beside them as the narrator speaks.] </p>
                        <p>Here managers should: </p>
                        <ul>
                          <li>acquire the materiel, </li>
                          <li>receive and inspect the goods, and </li>
                          <li>ensure quality assurance and testing is done if applicable.  </li>
                        </ul>
                        <p>[A calendar appears, with the words “Public Services and Procurement Canada” and “Trade agreements” beside it.] </p>
                        <p>Since the acquisition phase for complex or higher valued items often requires the participation of Public Services and Procurement Canada and the application of additional obligations such as trade agreements, longer timelines are often needed to complete the purchase. So, plan early, and give yourself and everyone involved enough time to acquire what you need! </p>
                        <hr>
                        <h2>4. Operation, Use, and Maintenance</h2>
                        <p>[On the calendar, an X is marked on the last day of the month. A text box reads, “4. Operation, Use, and Maintenance.”] </p>
                        <p>In the operation, use, and maintenance phase of the life cycle materiel management, managers should: </p>
                        <p>[A bullet point list appears beside three businesspeople.] </p>
                        <ul>
                          <li>distribute the materiel so it can be used,</li>
                          <li>maintain records to track inventory holdings and locations, consumption, usage, repairs, costs, and </li>
                          <li>ensure that the materiel is properly used, maintained, repaired, and safeguarded.  </li>
                        </ul>
                        <p>The objective during this phase is to get the most out of the materiel and to make sure it lasts as long as possible based on the best value. </p>
                        

                        <hr>

                        <h2>5. Reallocation or Divestment</h2>
                        <p>[A text box reads, “5. Reallocation or Divestment.”] </p>
                        <p>In the divestment phase, managers should identify opportunities for replacement, reallocation or disposal of surplus materiel, or of materiel that is no longer cost-effective to operate. </p>
                        <p>[A header reads, “Fourth Phase: Divestment.” A subheader reads, “Identify opportunities.” Below are two circles. The circle on the left has text in it reading, “Replacement, reallocation or disposal of surplus material.” Text in the right-side circle reads, “Material no longer cost-effective to operate.”]</p>
                        <p>Managers should always consider alternatives to disposing of products, such as reallocating or refurbishing them.</p>
                        
                        <hr>

                        <h2>6. In Real Life</h2>
                        <p>[The two circles slide together until they become a Venn diagram with an empty overlapping section. A text box reads, “6. In Real Life.”] </p>
                        <p>Take what you have learned into real life! </p>
                        <p>[A man and woman talk. A speech bubble comes from his mouth. It is filled with a question mark.] </p>
                        <p>Your organization will have its own ways of doing things. Take a time out from the course to see how the life cycle materiel management process works in your department. </p>
                        <hr>
                        <h2>7. Quiz</h2>
                        <p>[A text box reads, “7. Quiz.” Four arrows form a circle around the words “Life Cycle Materiel Management.”.] </p>
                        <p>So now that you know more about the life cycle materiel management process, let’s see what you remember by taking this short quiz. </p>
                        <p>[The words “Take the quiz!” appear beside a hand writing on a page.] </p>
                        <hr>
                        <h2>8. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>1. Vérifiez votre budget</h2>
                        <p>Maintenant que votre budget est approuvé et que vous avez commencé à mettre en œuvre votre plan de travail, vous pouvez commencer à dépenser!</p>
                        <p>Avant d’engager des dépenses, toutefois, vous devez vous assurer que les fonds disponibles dans votre budget sont suffisants.</p>
                        <p>Pour ce faire, vous devez examiner les dépenses qui ont été engagées, dépensées ou prévues. </p>
                        <p>Au fur et à mesure que l’année avance, vous devrez probablement ajuster votre budget à vos besoins en déplaçant des montants d’un poste budgétaire à un autre au sein même votre budget.</p>
                        <p>N’oubliez pas que le gabarit utilisé dans votre unité peut différer sensiblement de celui que nous vous présentons ici!</p>

                        <hr>

                        <h2>2. Délégation des pouvoirs</h2>
                        <p>Saviez-vous que c’est la Loi sur la gestion des finances publiques (LGFP) qui confère aux ministres et aux administrateurs généraux leurs pouvoirs financiers? </p>
                        <p>Par la suite, ces personnes délèguent, à leur tour, une partie de ces pouvoirs financiers à l’intérieur de leur organisation, par le biais d’un tableau de délégation des pouvoirs de signature en matière financière.</p>
                        <p>Pour exercer votre délégation financière, vous avez besoin de faire ces 3 choses :</p>
                        <ol>
                          <li>Réussir le présent cours</li>
                          <li>Soumettre votre carte de délégation signée à votre service des finances</li>
                          <li>obtenir votre délégation de pouvoir officielle par écrit de la part de votre service des finances </li>
                        </ol>
                        <p>Il existe divers pouvoirs délégués. Les gestionnaires en ont généralement deux. </p>
                        <p>L’article 32 permet à une personne déléguée d’engager des fonds et de dépenser tandis que l’article 34 fait référence à l’autorité de certification. L’article 32 vous permet de commander des articles de bureau, par exemple, puis l’article 34 vous permet de certifier que vous les avez bel et bien reçus.</p>
                        <p>Ensuite, l’article 33 permet à l’unité des finances de payer la facture.</p>
                        <p>Dans certaines situations, par exemple des services d’aide temporaire, vous devrez passer par un processus d’approvisionnement parce que cela implique un contrat. Habituellement, ce serait au groupe d’Approvisionnement de votre organisation que reviendraient ces démarches, en vertu de l’article 41 de la Loi sur la gestion des finances publiques. </p>
                        <p>Pour savoir ce que vous pouvez engager, vous devez vous fier à votre carte de délégation signée ainsi qu’au tableau de délégation des pouvoirs de signature en matière financière dans votre organisation.</p>
                        <p>Encore une fois, le format de ces documents variera selon l’endroit où vous travaillez. </p>

                        <hr>

                        <h2>3. Mécanismes de dépense</h2>
                        <p>Vous avez l’argent et vous avez la délégation. Super! </p>
                        <p>Maintenant, vous devez déterminer la meilleure façon d’obtenir les biens et services en question. </p>
                        <p>L’activité suivante vous donnera l’occasion de vous familiariser avec les mécanismes de dépense!</p>

                        <hr>

                        <h2>4. Enregistrement dans le système financier</h2>
                        <p>Après avoir vérifié que vous avez assez d’argent pour payer un achat, vous créez soit un engagement préalable, soit un engagement ferme.</p>
                        <p>Un engagement préalable est pris lorsque vous réservez des fonds alors que vous n’avez pas encore trouvé le fournisseur. </p>
                        <p>Un engagement ferme est approprié lorsque vous faites affaire avec un fournisseur connu.</p>
                        <p>Dans un cas comme dans l’autre, vous devrez entrer ces engagements dans le système financier en utilisant le codage financier unique de votre organisation.</p>
                        <p>Ce codage financier est un système qui permet de faire le suivi des opérations financières tout au long de l’année. Il permet de déterminer, entre autres : </p>
                        <ul>
                          <li>le  gestionnaire responsable des opérations financières; </li>
                          <li>la composante de votre budget utilisée, par exemple fonctionnement et entretien, salaire, etc.;</li>
                          <li>la nature de l’opération financière, par exemple  dépenses, recettes, actif, passif;</li>
                          <li>les détails de la transaction;</li>
                          <li>et l’activité à laquelle est associée l’opération financière.</li>
                        </ul>
                        <p>Le système de codage financier vous permet de bien gérer vos opérations financières et de bien pouvoir répondre de votre budget à n’importe quel moment au cours de l’année. </p>
                        <p>Les gestionnaires travaillent souvent avec des professionnels de l'administration ou des agents financiers pour cette tâche.</p>

                        <hr>

                        <h2>5. Essayons-le!</h2>
                        <p>Afin de conclure cette section, prenons quelques instants pour appliquer le tout à un scénario fictif. </p>
                        <hr>
                        <h2>6. Section complétée</h2>

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
        <b-modal no-stacking id="Introduction" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">  {{$t('introductionTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
              <div v-if="$i18n.locale=='fr'">
                <p>Pour plus d’informations, n’hésitez pas à consulter le <a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=14671" target="_blank" alt="Guide de gestion du matériel">Guide de gestion du matériel</a>. Ce lien est également accessible dans la boîte à outils.</p>
              </div>
              <div v-if="$i18n.locale=='en'">
                <p>For more information, feel free to consult the <a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=14671" target="_blank" alt="Guide to Management of Materiel">Guide to Management of Materiel</a>. This link is also available in the Toolbox.</p>
              </div>
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="Planning" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('planningTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <planning />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal id="Acquisition" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('acquisitionTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <acquisition />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="operationUseMaintenance" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('operationUseMaintenanceTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <operationUseMaintenance />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="reallocationDivestment" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('reallocationDivestmentTitle')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <reallocationDivestment />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="InRealLife" @hide="resumePlay()" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">  {{$t('IRLTitle')}}
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
              <p>{{$t('IRLProcureText')}}</p>
            </b-col>
          </b-row>
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
        <b-modal no-stacking id="Quiz" @hide="resumePlay()" size="xl" okOnly>
            <template v-slot:modal-header="{ close }">
                <h3 class="h5">
                    <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
                </h3>
                <button type="button" aria-label="Close" class="close" @click="close()">×</button>
            </template>
            <manageQuiz />
            <template v-slot:modal-ok>{{$t('close')}}</template>
        </b-modal>
    </div>
    <div class="bottomNav manageSection">
      <div class="spendSectionBar"><span>{{$t('spendSectionBar')}}</span></div>
      <microlearning youAreHere path="managePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart1_player" :text="$t('lifeCycle')" type="video" />
      <microlearning path="manageKey"  imagePath="KeyMessS.svg" size="140" time="20" :completion="$store.state.currentPlaying.spendPart2_player" :text="$t('KeyMessages')" type="video" />
      <microlearning path="manageExam" size="140" time="15" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['spend/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import planning from '~/components/slides/manage/managePart1Planning'
import acquisition from '~/components/slides/manage/managePart1Acquisition'
import operationUseMaintenance from '~/components/slides/manage/managePart1OUM'
import reallocationDivestment from '~/components/slides/manage/managePart1ReallocationDivestment'
import manageQuiz from '~/components/slides/manage/managePart1Quiz'
export default {
  data() {
    return {
      modalArray: ["Introduction","Planning","Acquisition","operationUseMaintenance","reallocationDivestment","InRealLife","Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    planning,
    acquisition,
    operationUseMaintenance,
    reallocationDivestment,
    manageQuiz
  },
  computed:{
    thatPoint(){
      return this.$store.state.currentPlaying.spendPart1
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
  background-color: #536173;
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
  "introductionTitle": "References: External Links",
  "planningTitle": "Activity: Planning",
  "acquisitionTitle": "Activity: Acquisition",
  "operationUseMaintenanceTitle": "Activity: Operation, Use and Maintenance",
  "reallocationDivestmentTitle": "Activity: Reallocation or Divestment",
  "IRLTitle": "In Real Life",
  "IRLProcureText": "Take what you have learned into real life! Your organization will have its own ways of doing things. Take a time out from the course to see how the life cycle materiel management process works in your department.",
  "gotIt":"Continue to next segment",
  "transcriptText":"",
  "spendSectionBar": "MANAGE"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au quiz",
  "tryItTitle":"Activité : Essayons-le!",
  "introductionTitle": "Référence : Liens externes",
  "planningTitle": "Activité : Planification",
  "acquisitionTitle": "Activité : Acquisition",
  "operationUseMaintenanceTitle": "Activité : Exploitation, utilisation et entretien",
  "reallocationDivestmentTitle": "Activité : Réaffectation ou dessaisissement",
  "IRLTitle": "Dans la vraie vie",
  "IRLProcureText": "Appliquez ce que vous avez appris dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez une pause durant le cours pour voir comment le processus de gestion du cycle de vie du matériel fonctionne dans votre ministère.",
  "gotIt":"Continuer au segment suivant.",
  "transcriptText":"",
  "spendSectionBar": "GESTION"
  }
  }
</i18n>