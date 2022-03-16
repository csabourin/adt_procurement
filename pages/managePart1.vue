<template>
  <div>
    <h2 class="pageTitle" v-html="$t('lifeCycle')" />
    <section>
      <b-row>
        <b-col>
          <videoPlayer ref="vp" enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_fzkwbysg/flavorId/0_ecr2fch1/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_f0em2hc1/flavorId/0_r52t64og/name/a.mp4" chapters chapterFile="ManagePart1.vtt" ccFile="ADT_Module 7_CAPTION.vtt" posterFile="MOD7.png" :restartAt="parseInt(thatPoint)" toResume="setmanage" :modalArray="modalArray" @timeupdate="updatePercent($event)"/>
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
                        <p>[An External Links reference pop-up text box appears.]</p>
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
                        <p>[A Planning activity pop-up text box appears.]</p>
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
                        <p>[An Acquisition activity pop-up text box appears.]</p>
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
                        <p>[An Operation, Use and Maintenance activity pop-up text box appears.]</p>
                        <hr>

                        <h2>5. Reallocation or Divestment</h2>
                        <p>[A text box reads, “5. Reallocation or Divestment.”] </p>
                        <p>In the divestment phase, managers should identify opportunities for replacement, reallocation or disposal of surplus materiel, or of materiel that is no longer cost-effective to operate. </p>
                        <p>[A header reads, “Fourth Phase: Divestment.” A subheader reads, “Identify opportunities.” Below are two circles. The circle on the left has text in it reading, “Replacement, reallocation or disposal of surplus material.” Text in the right-side circle reads, “Material no longer cost-effective to operate.”]</p>
                        <p>Managers should always consider alternatives to disposing of products, such as reallocating or refurbishing them.</p>
                        <p>[A Reallocation or Divestment activity pop-up text box appears.]</p>
                        <hr>

                        <h2>6. In Real Life</h2>
                        <p>[The two circles slide together until they become a Venn diagram with an empty overlapping section. A text box reads, “6. In Real Life.”] </p>
                        <p>Take what you have learned into real life! </p>
                        <p>[A man and woman talk. A speech bubble comes from his mouth. It is filled with a question mark.] </p>
                        <p>Your organization will have its own ways of doing things. Take a time out from the course to see how the life cycle materiel management process works in your department. </p>
                        <p>[An In Real Life activity pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>7. Quiz</h2>
                        <p>[A text box reads, “7. Quiz.” Four arrows form a circle around the words “Life Cycle Materiel Management.”.] </p>
                        <p>So now that you know more about the life cycle materiel management process, let’s see what you remember by taking this short quiz. </p>
                        <p>[The words “Take the quiz!” appear beside a hand writing on a page.] </p>
                        <p>[A Take the Quiz activity pop-up text box appears.]</p>
                        <hr>
                        
                        <h2>8. Section Completed</h2>
                        <p>[Onscreen text showing Section Completed instruction]</p>

                      </span>
                      <span v-if="$i18n.locale=='fr'">

                        <h2>1. Introduction </h2>
                        <p>[Sur un fond gris avec des lignes blanches ondulées, le titre « Module 7 : Gestion du cycle de vie du matériel » s’affiche. Une boîte de texte indique : « 1. Introduction ».]</p>
                        <p>Narratrice : Dans cette section, vous découvrirez les quatre phases de la gestion du cycle de vie du matériel :</p>
                        <ul>
                          <li>Planification  </li>
                          <li>Acquisition  </li>
                          <li>Exploitation, utilisation et entretien  </li>
                          <li>Dessaisissement  </li>
                        </ul>
                        <p>[Les quatre phases s’affichent en dessous des mots « Dans la présente section ». À leur droite, quatre flèches forment un cercle autour des mots « Gestion du cycle de vie du matériel ».]</p>
                        <p>Il vous faudra environ 20 minutes pour effectuer cette section</p>
                        <p>[Le tiers d’une horloge est rempli. Une boîte de texte indique : « 2. Planification ».]</p>

                        <hr>

                        <h2>2. Planification </h2>
                        <p>Vous vous êtes procuré les biens dont vous avez besoin. C’est parfait. Mais saviez-vous que vous devez maintenant gérer leur cycle de vie?  </p>
                        <p>[Un livreur avec un chariot sur lequel sont empilées des boîtes se tient devant une femme. Ils se serrent la main.]</p>
                        <p>La gestion du cycle de vie du matériel consiste en la gestion efficace et efficiente des biens, depuis l’identification des besoins jusqu’au dessaisissement des biens.</p>
                        <p>[Les mots « Gestion du cycle de vie du matériel » s’affichent de nouveau. Les quatre flèches tournent lentement autour d’eux. En dessous, une flèche pointe des mots « L’identification des besoins » vers « Dessaisissement des biens ».]</p>
                        <p>Examinons d’un peu plus près la planification, première phase de la gestion du cycle de vie du matériel. Puisque la planification a été abordée dans les trois premiers modules de ce cours, en voici un résumé rapide.</p>
                        <p>Au cours du processus de planification, les gestionnaires doivent déterminer ce qui suit.  </p>
                        <p>[Une personne réfléchit. Des bulles de pensée apparaissent au-dessus d’elle pendant que la narratrice parle. Chacune d’entre elles contient des mots clés de la liste ci-dessous.]</p>
                        <ul>
                          <li>Y a-t-il un cas clair d’achat ou de location?  </li>
                          <li>Quelles sont les exigences administratives et opérationnelles?  </li>
                          <li>Un produit ou son entretien sont-ils nécessaires?  </li>
                          <li>Quels sont les produits finis (matériel) ou les matières premières nécessaires?  </li>
                          <li>Le matériel existant est-il disponible ou approprié pour répondre au besoin?  </li>
                          <li>A-t-on effectivement besoin de la quantité proposée?  </li>
                          <li>Comment les prévisions ont-elles été faites pour estimer les besoins?  </li>
                          <li>Les fonds de capital ou d’exploitation sont-ils utilisés pour soutenir l’acquisition?  </li>
                          <li>Quelle méthode sera utilisée pour acquérir le matériel et les services de soutien connexes?  </li>
                          <li>Peut-on répondre aux exigences grâce à des produits sans danger pour l’environnement et à des produits qui utilisent des matériaux ou des procédés économes en ressources?  </li>
                          <li>D’autres questions pertinentes, comme le respect des critères socio-économiques fixés par le gouvernement, tels que les traités modernes, les revendications territoriales et la promotion des entreprises autochtones, ont-elles été prises en compte?  </li>
                          <li>Les considérations d’accessibilité ont-elles été prises en compte pour cerner, supprimer et prévenir les nouveaux obstacles?  </li>
                        </ul>
                        <p>Les décisions relatives à l’acquisition de matériel doivent tenir compte du coût total du produit pendant sa durée de vie.</p>
                        <p>[Quatre personnes sont assises autour d’une table de réunion. Au-dessus d’elles, une pile de pièces de monnaie et une boîte entourée de deux flèches sont dessinées côte à côte. Le mot « contre » est écrit entre les deux.]</p>
                        <p>Une fois que vous avez répondu à ces questions, vous pouvez passer à la deuxième phase de la gestion du cycle de vie du matériel.</p>
                        <p>[Une boîte de texte indique : « 3. Acquisition ».]</p>
                        
                        <hr>

                        <h2>3. Acquisition </h2>
                        <p>La phase d’acquisition vient après la phase de planification du cycle de vie. Ce sujet a été traité dans les modules 4, 5 et 6 de ce cours.</p>
                        <p>[Dans le haut de l’écran, il est écrit : « Deuxième phase : Acquisition ». Trois personnes se tiennent côte à côte. Trois puces apparaissent à leur droite pendant que la narratrice parle.]</p>
                        <p>Ici, les gestionnaires doivent : </p>
                        <ul>
                          <li>acquérir le matériel;  </li>
                          <li>réceptionner et inspecter la marchandise;  </li>
                          <li>veiller à l’assurance de la qualité et à la mise à l’essai, le cas échéant.  </li>
                        </ul>
                        <p>[Un calendrier se dessine et les mots « Services publics et Approvisionnement Canada » et « Accords commerciaux » s’affichent à sa gauche.]</p>
                        <p>Puisque la phase d’acquisition des articles complexes ou de valeur supérieure nécessite souvent la participation de Services publics et Approvisionnement Canada et l’application d’obligations supplémentaires telles que des accords commerciaux, des délais plus longs sont souvent nécessaires pour effectuer l’achat. Alors, planifiez tôt et donnez-vous, ainsi qu’à toutes les personnes concernées, suffisamment de temps pour acquérir ce dont vous avez besoin! </p>
                        <p>[La dernière journée du mois du calendrier est marquée d’un X. Une boîte de texte indique : « 4. Exploitation, utilisation et entretien ».]</p>
                        
                        <hr>

                        <h2>4. Exploitation, utilisation et entretien </h2>
                        <p>Au cours de la phase d’exploitation, d’utilisation et d’entretien de la gestion du cycle de vie du matériel, les gestionnaires doivent :</p>
                        <p>[Une liste à puces s’affiche à côté de trois personnes.]</p>
                        <ul>
                          <li>distribuer le matériel pour qu’il puisse être utilisé;</li>
                          <li>tenir des registres pour suivre les stocks et leur emplacement, la consommation, l’utilisation, les réparations et les coûts;  </li>
                          <li>s’assurer que le matériel est correctement utilisé, entretenu, réparé et protégé.   </li>
                        </ul>
                        <p>L’objectif de cette phase est de tirer le maximum du matériel et de s’assurer qu’il dure le plus longtemps possible en fonction du meilleur rapport qualité-prix. </p>
                        <p>[Une boîte de texte indique : « 5. Réaffectation ou dessaisissement ».]</p>
                        <hr>

                        <h2>5. Réaffectation ou dessaisissement </h2>
                        <p>Au cours de la phase de dessaisissement, les gestionnaires doivent déterminer les possibilités de remplacement, de réaffectation ou d’élimination du matériel excédentaire ou du matériel dont l’exploitation n’est plus rentable.  </p>
                        <p>[Dans le haut de l’écran, il est écrit : « Quatrième phase : Dessaisissement ». Un peu plus bas, il est écrit : « Déterminer les possibilités ». Deux cercles sont dessinés en dessous. Dans celui de gauche, il est écrit : « Remplacement, réaffectation ou élimination du matériel excédentaire » et, dans celui de droite : « Matériel qui n’est plus rentable ».]</p>
                        <p>Les gestionnaires doivent toujours envisager des alternatives à l’élimination des produits, comme leur réaffectation ou leur remise en état. </p>
                        <p>[Les deux cercles glissent l’un vers l’autre jusqu’à former un diagramme de Venn. La partie commune est vide. Une boîte de texte indique : « 6. Dans la vraie vie ».]</p>
                        
                        <hr>
                        <h2>6. Dans la vraie vie </h2>
                        <p>Appliquez ce que vous avez appris dans la vraie vie!  </p>
                        <p>[Un homme et une femme discutent. Une bulle de dialogue contenant un point d’interrogation pointe vers l’homme.]</p>
                        <p>Votre organisation aura sa propre façon de faire les choses. Prenez une pause de ce cours pour voir comment le processus de gestion du cycle de vie du matériel fonctionne dans votre ministère. </p>
                        <p>[Une boîte de texte indique : « 7. Quiz ».]</p>
                        
                        <hr>
                        <h2>7. Quiz</h2>
                        <p>[Dans un encadré, les mots « Gestion du cycle de vie du matériel » entourés de quatre flèches s’affichent en dessous d’un crochet.]</p>
                        <p>Maintenant que vous en savez plus sur le processus de gestion du cycle de vie du matériel, voyons ce dont vous vous souvenez en répondant à ce petit quiz. </p>
                        <p>[Les mots « Répondez au quiz! » apparaissent à côté d’une main qui écrit sur une feuille.]</p>
                        
                        <hr>
                        <h2>8. Section complétée</h2>

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
      <div class="manageSectionBar"><span>{{$t('manageSectionBar')}}</span></div>
      <microlearning youAreHere path="managePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.manage_player" :text="$t('lifeCycle')" type="video" />
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
      return this.$store.state.currentPlaying.manage
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
      this.$store.commit('currentPlaying/setmanage_player',e)
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
.manageSectionBar {
  position: absolute;
  background-color: #98A0AA;
  width: 100vw;
  height: 30px;
  text-align: left;
  left:-15px;
  top:38%;
}
.manageSectionBar span {
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
  "manageSectionBar": "MANAGE"
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
  "manageSectionBar": "GESTION"
  }
  }
</i18n>