<template>
  <div>
    <h2 class="pageTitle" v-html="$t('ConductPeriodicVarianceReporting')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_7snp9f2c/flavorId/0_peqvfh6o/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_agt4e462/flavorId/0_58qcmsmu/name/a.mp4" chapters chapterFile="ReportPart1.vtt" ccFile="ADT_Module 8_CAPTION.vtt" posterFile="MOD8.png" :restartAt="parseInt(thatPoint)" toResume="setReportPart1" :modalArray="modalArray" @timeupdate="updatePercent($event)" />
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
                        <p>[On a brown background with wavy white lines, a title card reads, “Module 8: Reports.” A text box reads, “1. Introduction.”] </p>
                        <p>Narrator: In this section you will learn about procurement reporting activities. This will include: </p>
                        <p>[A bullet-point list appears on the screen as the narrator speaks.] </p>
                        <ul>
                          <li>inappropriate procurement practices, </li>
                          <li>complaint mechanisms and </li>
                          <li>reporting requirements. </li> 
                        </ul>
                        <p>[White-outline drawings appear beside each bullet point: a magnifying glass over a page, a flashing warning light, and a checklist, respectively.] </p>
                        <p>This section should take you approximately 20 minutes to complete. </p>
                        <hr>
                        <h2>2. Inappropriate Practices</h2>
                        <p>[One third of a clock is shaded in. A text box reads, “2. Inappropriate Practices.” The image of a magnifying class over a page reappears.] </p>
                        <p>Before jumping into reporting activities, let’s look at some of the inappropriate procurement practices managers should avoid if they are to remain respectful to the various laws, regulations and policies that apply to procurement. These practices include: </p>
                        <p>[Three businesspeople are on the left side of the screen. A list appears to the right of them as the narrator speaks.] </p>
                        <ul>
                          <li>Contracting without a written contract or verbal authorization </li>
                          <li>Contracting without proper authority </li>
                          <li>Retroactive or after-the-fact contracting or backdating a contract </li>
                          <li>Contract splitting </li>
                          <li>Payrolling </li>
                          <li>Inappropriate sole-sourcing </li>
                          <li>Employer-employee relationships </li>
                          <li>Inappropriate use of emergency contracting </li>
                          <li>Inappropriate statements of work or evaluation criteria </li>
                        </ul>
                        <p>The following exercise will help you determine what not to do. For definitions, see the What Not To Do job aid in the tool box. </p>
                        <hr>
                        <h2>3. Complaint Mechanisms</h2>
                        <p>[A toolbox fills the screen. This is replaced with a text box reading, “3. Complaint Mechanisms.”] </p>
                        <p>So, you have seen what you can and cannot do in terms of your decisions and actions in the procurement process, but what if you don’t abide by these rules? What are the repercussions? </p>
                        <p>[The word “Authorities” appears below a flashing warning light.] </p>
                        <p>There are different levels of authorities that provide oversight of federal public service procurement to ensure the rules are being followed.  </p>
                        <p>[Six people stand in a line. An arrow above their heads moves upwards.] </p>
                        <p>Authorities can be internal or external to organizations. For example, many departments may have ethics advisers or compliance and oversight branches, and interdepartmental governance committees.  </p>
                        <p>[Three rows of businesspeople form a pyramid, with one person at the top, three in the middle, and six on the bottom.] </p>
                        <p>These authorities may provide support to resolve issues internally before formal escalation is required.  Authorities with oversight responsibilities for procurement in the federal public service include: </p>
                        <p>[A list appears beside the figure of a businesswoman.]  </p>
                        <ul>
                          <li>the Office of the Procurement Ombudsman,</li>
                          <li>the Canadian International Trade Tribunal,</li>
                          <li>the Federal Court,</li>
                          <li>Internal Audit in departments or delivered centrally through the Office of the Comptroller General,</li>
                          <li>the Auditor General, and</li>
                          <li>Standing Review Committees.</li>
                        </ul>
                        <p>Their roles differ depending on the nature and monetary amount of the procurement. Curious to know more about these organizations? Why not consult the Oversight job aid in the toolbox? </p>
                        <hr>
                        <h2>4. Reporting Requirements</h2>
                        <p>[The image of the toolbox reappears. A text box reads, “4. Reporting Requirements.”] </p>
                        <p>Did you know that departments, agencies, and other organizations are responsible for making available various reports on contracting activities for the general public or for use within government?  </p>
                        <p>[Three images appear, each with a label beneath them. A building with large columns in its façade is labelled “departments.” A large block-style building is labelled “agencies,” and a cityscape is labelled “other organizations.”] </p>
                        <p>That’s why record keeping is so important and why the data reported on contracts must be accurate.</p>
                        <p>[A hand checks items off a page, and one drawer from a filing cabinet is open.] </p>
                        <p>Here is a list of reports for which you may have to provide input.  </p>
                        <p>[The list appears on a clipboard as the narrator speaks.] </p>
                        <ul>
                          <li>Proactive Disclosure of Contracts </li>
                          <li>Contracts with Former Public Servants </li>
                          <li>Comprehensive Land Claims Agreements </li>
                          <li>Procurement Strategy for Aboriginal Business </li>
                          <li>Treasury Board Directive on Government Contracts, Including Real Property Lease, in the Nunavut Settlement Area </li>
                          <li>Ownership of Intellectual Property </li>
                          <li>Auditor General Reports </li>
                          <li>Internal Audit Reports </li>
                          <li>Access to Information and Privacy </li>
                        </ul>
                        <p>But contract information is not only used in reports.  </p>
                        <p>[An internet browser displays a Government of Canada webpage titled “Open Government.” It has a space to search data and information. Other sections on the page are labelled “Proactive disclosure” and “Access to information.”] </p>
                        <p>It is also used for proactive disclosure, which is posted on the Open Government Portal as required to meet legal, policy, corporate, and parliamentary needs. </p>
                        <p>For example, your contract awards and amendments are made available to the public, due to the proactive disclosure of contracts, when their value is more than $10,000.  </p>
                        <p>[Two images appear of a pen signing a document. One is labelled “contract award” and the other is labelled “contract amendment.” An arrow points from these to a Canadian maple leaf, which has an arrow pointing to a stack of coins labelled “$10,000+”.] </p>
                        <p>They are published on the Open Government Portal, thus making government and public service officials accountable to Canadians.  </p>
                        <p>This reporting is normally done by the procurement specialist or contracting officer.  </p>
                        <p>[Two businesspeople appear, one with the label “procurement specialist” and the other with the label “contracting officer.”] </p>
                        <p>Though it may not be your responsibility, it is important that you are aware of these requirements.  </p>
                        <p>But don’t worry, you won’t be doing this reporting or proactive disclosure alone!  </p>
                        <p>[Four people sit around a conference table.] </p>
                        <p>Usually, you will work with your administrative staff or your organization’s procurement team to prepare the information needed. </p>
                        <hr>
                        <h2>5. In Real Life</h2>
                        <p>[A text box reads, “5. In Real Life.” Two people talk. One of them has a speech bubble, which is filled with a question mark.] </p> 
                        <p>Take what you have learned into real life! </p>
                        <p>Your organization will have its own ways of doing things. Take time out from the course to see which complaint mechanisms are used by your organization, as well as which reports will need to be supported. </p>
                        <hr>
                        <h2>6. Quiz</h2>
                        <p>[A text box reads, 6. Quiz.” Images appear of the magnifying glass over the page, the flashing warning light, and the checklist.] </p>
                        <p>So now that you know more about inappropriate procurement practices, complaint mechanisms and reporting, let’s see what you remember by taking this short quiz. </p>
                        <p>[The words “Take the quiz!” appear beside a hand writing on a page.] </p>
                        <hr>
                        <h2>6. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction.]</p>
                      </span>
                      <span v-if="$i18n.locale=='fr'">
                        <h2>1. Qu'est-ce qu'un rapport sur la situation financière?</h2>
                        <p>Un rapport sur la situation financière - ou RSF - est un document qui fournit à la haute direction le portrait financier le plus récent et les meilleures estimations des dépenses prévues. Ce document l’aide à prendre des décisions éclairées pour faire face aux insuffisances ou aux pressions budgétaires et à réaffecter les excédents. Votre ministère peut avoir un nom différent pour ce rapport — renseignez-vous à ce sujet.</p>
                        <p>En tant que gestionnaire, vous êtes tenu de fournir régulièrement des mises à jour et des prévisions de votre centre de responsabilité tout au long de l’année. Vous devez également fournir des explications sur les écarts afin de fournir des informations précises et vous assurer que le système financier est à jour.</p>
                        <p>Ne vous inquiétez pas, vous ne ferez pas cela tout seul! Généralement, la section des finances de votre organisation dirigera l’exercice à des moments précis de l’année. Elle vous offrira du soutien et vous enverra des instructions pour fournir des gabarits, des lignes directrices, des liens, des dates d’échéance, etc. Travaillez avec votre personnel administratif pour accomplir ces tâches.</p>
                        <p>Voyons ce que vous savez déjà sur les RSF en faisant un petit jeu d’association! </p>
                        <hr>
                        <h2>2. Périodes clés pour les rapports sur la situation financière</h2>
                        <p>L'exercice financier commence le 1er avril et est divisé, par mois, en périodes. P1 est avril, P2 est mai, P3 est juin, et ainsi de suite.</p>
                        <p>En règle générale, les périodes-clé de rapport sont P6 (septembre), P9 (décembre), et un rapport de fin d'année en P12 (mars).</p>
                        <p>Parce que P6 (septembre) est au milieu de l'année, il offre à la haute direction une bonne vue d’ensemble de la situation financière de l'organisation et lui permet de prendre des décisions qui influenceront les résultats de fin d'année. Par exemple, ils pourraient décider de réaffecter des fonds à différentes priorités.</p>
                        <p>P9 (décembre) est souvent la dernière occasion d'influencer les résultats de fin d'année. Les ministères peuvent demander aux gestionnaires de fournir une prévision en P9 qui se situe dans un certain pourcentage du montant de fin d'année. Le Secrétariat du Conseil du Trésor du Canada utilise les données du rapport P9 pour informer le ministère des Finances du Canada des dépenses prévues à l'échelle du gouvernement afin qu'il puisse avoir une vision globale.</p>
                        <p>Les données de fin d'exercice, à P12, sont utilisées par votre ministère pour présenter ses résultats financiers globaux. Il fait également partie du Rapport sur les résultats ministériels, ou RRM.</p>
                        <hr>
                        <h2>3. Activités pour le rapport sur la situation financière</h2>
                        <p>L'information la plus importante que vous devrez fournir dans le RSF est votre prévision budgétaire. En d'autres termes, vous devrez estimer le montant d'argent que vous allez dépenser pour terminer vos activités avant la fin de l'exercice financier.</p>
                        <p>Vous pouvez demander à votre professionnel de l'administration d'extraire du système financier un rapport financier détaillé contenant des informations sur le budget, les engagements et les dépenses réelles. Vous le comparerez au RSF.</p>
                        <p>Voici plusieurs choses que vous pouvez faire pour avoir une bonne idée de votre situation actuelle. Cela vous permettra de faire des estimations solides pour le reste de l'année.</p>
                        <ul>
                          <li>Vérifier à ce que les prévisions salariales soient exactes et à jour.</li>
                          <li>Rendre compte de tout financement entrant ou sortant.</li>
                          <li>Faire le suivi des demandes de remboursement de frais de voyage et des factures en souffrance.</li>
                          <li>Vérifier que les pièces de journal soient bien comptabilisées : cela corrigera les données dans le système financier.</li>
                          <li>Annuler les engagements qui ne sont plus nécessaires.</li>
                          <li>Et réconcilier votre relevé de carte d'achat avec vos engagements.</li>
                        </ul>
                        <p>Maintenant, répondez aux questions suivantes au mieux de votre capacité afin de vous exercer à préparer un rapport sur la situation financière!</p>
                        <hr>
                        <h2>4. Mise à jour des prévisions annuelles</h2>
                        <p>Une autre tâche importante à faire lorsque vous remplissez votre FSRRSF est d'examiner votre salaire et vos prévisions de F et E. Cela vous permettra d’identifier :</p>
                        <ul>
                          <li>les insuffisances et les pressions qui peuvent nécessiter l'approbation de ressources supplémentaires;</li>
                          <li>ou encore des excédents pour indiquer les reports potentiels de fonds.</li>
                        </ul>
                        <p>Vous devrez expliquer les raisons de tout écart et fournir des stratégies d'atténuation des risques.</p>
                        <p>Pratiquons maintenant la mise à jour des prévisions annuelles!</p>
                        <hr>
                        <h2>5. Section complétée</h2>
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
      <b-modal no-stacking id="Introduction" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">  {{$t('introductionTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <div v-if="$i18n.locale=='fr'">
              <p>Pour obtenir de plus amples renseignements, nous vous invitons à consulter les liens qui suivent : </p>
              <ul>
                <li><a href="http://opo-boa.gc.ca/index-fra.html" target="_blank" alt="Bureau de l’ombudsman de l’approvisionnement">Bureau de l’ombudsman de l’approvisionnement</a></li>
                <li><a href="https://www.citt-tcce.gc.ca/" target="_blank" alt="Tribunal canadien du commerce extérieur">Tribunal canadien du commerce extérieur</a></li>
                <li><a href="https://www.fct-cf.gc.ca/fr/accueil" target="_blank" alt="Cour fédérale">Cour fédérale</a></li>
              </ul>
              <p>Vous les retrouverez également dans la boîte à outils.</p>
            </div>
            <div v-if="$i18n.locale=='en'">
              <p>For more information, feel free to consult the following links:</p>
              <ul>
                <li><a href="http://opo-boa.gc.ca/index-eng.html" target="_blank" alt="Office of the Procurement Ombudsman">Office of the Procurement Ombudsman</a></li>
                <li><a href="https://www.citt-tcce.gc.ca/" target="_blank" alt="Canadian International Trade Tribunal">Canadian International Trade Tribunal</a></li>
                <li><a href="https://www.fct-cf.gc.ca/en/home" target="_blank" alt="Federal Court">Federal Court</a></li>
              </ul>
              <p>You can also find them in the Toolbox.</p>
            </div>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="inappropriatePractices" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('inappropriatePracticesTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <inappropriatePractices />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="complaintMechanisms" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('complaintMechanismsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <complaintMechanisms />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="reportingRequirements" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('reportingRequirementsTitle')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <reportingRequirements />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="InRealLife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/ReferenceIcon.svg" :alt="$t('referenceIcon')" width="32" height="32">  {{$t('inRealLifeTitle')}}
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
              <p>{{$t('IRLReportPart1Text')}}</p>
            </b-col>
          </b-row>
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
      <b-modal id="Quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-header="{ close }">
          <h3 class="h5">
            <img src="~/assets/QuizIcon.svg" :alt="$t('quizIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}
          </h3>
          <button type="button" aria-label="Close" class="close" @click="close()">×</button>
        </template>
        <part1Quiz />
        <template v-slot:modal-ok>{{$t('close')}}</template>
      </b-modal>
    </div>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('reportSectionBar')}}</span></div>
      <microlearning youAreHere :completion="$store.state.currentPlaying.reportPart1_player" path="reportPart1" imagePath="R-Conduct.svg" size="140" time="20" :text="$t('ReportsTitle')" type="video" />
      <microlearning :completion="$store.state.currentPlaying.kmReport" path="reportKey" time="5" size="140" imagePath="KeyMessR.svg" :text="$t('KeyMessages')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
      <microlearning :completion="parseInt($store.getters['report/getScore'],10)" path="exam3" size="140" time="15" imagePath="R-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import inappropriatePractices from '~/components/slides/report/reportPart1InappropriatePractices'
import complaintMechanisms from '~/components/slides/report/reportPart1ComplaintMechanisms'
import reportingRequirements from '~/components/slides/report/reportPart1ReportingRequirements'
import part1Quiz from '~/components/slides/report/reportPart1Quiz'
import keyPeriods from '~/components/slides/report/keyPeriods'
export default {
  data() {
    return {
      modalArray: ["Introduction", "inappropriatePractices", "complaintMechanisms", "reportingRequirements", "InRealLife", "Quiz"]
    }
  },
  components: {
    videoPlayer,
    microlearning,
    inappropriatePractices,
    complaintMechanisms,
    reportingRequirements,
    part1Quiz,
    keyPeriods
  },
  computed: {
    thatPoint() {
      return this.$store.state.currentPlaying.reportPart1
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
      this.$store.commit('currentPlaying/setReportPart1_player',e)
    }
  }
}

</script>
<style scoped>
.reportSectionBar {
  position: absolute;
  background-color: #e5dddc;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.reportSectionBar span {
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
  "TakeTheQuiz": "Take the Quiz",
  "introductionTitle": "References: External Links",
  "inappropriatePracticesTitle": "Activity: Inappropriate Practices",
  "complaintMechanismsTitle": "Activity: Complaint Mechanisms",
  "reportingRequirementsTitle": "Activity: Reporting Requirements",
  "inRealLifeTitle": "In Real Life",
  "IRLReportPart1Text": "Take what you have learned into real life! Your organization will have its own ways of doing things. Take time out from the course to see which complaint mechanisms are used by your organization as well as which reports will need to be supported.",
  "transcriptText":"",
  "reportSectionBar": "REPORT"
  },
  "fr":{
  "TakeTheQuiz": "Répondez au quiz",
  "introductionTitle": "Référence : Liens externes",
  "inappropriatePracticesTitle": "Activité : Pratiques inappropriées",
  "complaintMechanismsTitle": "Activité : Mécanismes de traitement des plaintes",
  "reportingRequirementsTitle": "Activité : Exigences en matière de rapports",
  "inRealLifeTitle": "Dans la vraie vie",
  "IRLReportPart1Text": "Appliquez ce que vous avez appris dans la vraie vie! Votre organisation aura sa propre façon de faire les choses. Prenez une pause durant le cours pour voir quels mécanismes de plainte sont utilisés par votre organisation et quels rapports devront être soutenus.",
  "transcriptText":"",
  "reportSectionBar": "RAPPORT"
  }
  }
</i18n>
