<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col>
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
              <p>As per Treasury Board requirements, you must pass this test before you can exercise financial delegation.</p>
              <p>The test is made up of four sections, one for each phase: Plan, Procure, Manage, and Report.</p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>This section should take you around 5 to 10 minutes to complete.</p>
              <p>You are allowed to consult course materials during the test. You may take it as many times as you need to get a passing grade.</p>
              <p>As this is a final test, you will not be provided with feedback on correct or incorrect answers.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir le test de ce cours avant de pouvoir exercer la délégation financière.</p>
              <p>Le test comporte quatre parties — une à la fin de chaque phase : planification, acquisition, gestion et rapports.</p>
              <p>La note de passage est de 80 %, par partie.  </p>
              <p>Cette partie devrait vous prendre environ 5 à 10 minutes.</p>
              <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.</p>
              <p>Comme il s'agit d'un test final, vous ne recevrez pas d'information sur les réponses correctes ou incorrectes.</p>
            </div>
          </b-alert>
          <!--<p v-if="AlertIsDismissed"><b-button @click="AlertIsDismissed=false">{{$t('ShowInstructions')}}</b-button></p>-->
          <p v-if="AlertIsDismissed"><button @click="AlertIsDismissed=false" class="instructionsBtn" v-b-tooltip.right.hover.focus :title="$t('ShowInstructions')"><span class="v-inv">{{$t('ShowInstructions')}}</span></button></p>
          <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
          <!--<div class="progressBar" >
            <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
          </div>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam manage" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,2,0)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[1]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>02
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="2" :refill="Refill('2')" @response="arraysMatch($event,['1','2','3'],1)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[2]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>03
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,4,2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                 <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="4" :refill="Refill('3')" @response="arraysMatch($event,['1','2'],3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="5" :refill="Refill('4')" @response="calculateAnswer($event,1,4)" />
              </b-tab>
              
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group class="mt-2" :aria-label="$t('questionNav')">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=4">{{$t('nextPage')}}</b-button>
          </b-button-group>
        </div>
        <transition name="fade">
            <div style="margin-top: 50px;">
              <hr />
              <p><b-button @click="markTest">{{$t('markTest')}}</b-button> <b-button @click="resetQuiz">{{$t('tryAgain')}}</b-button></p>
            </div>
          </transition>
      </b-col>
    </b-row>
    </b-container>

    <div class="bottomNav manageSection">
      <div class="manageSectionBar"><span>{{$t('manageSectionBar')}}</span></div>
      <microlearning path="managePart1" imagePath="InitiateAuthSpending.svg" size="140" time="20" :completion="$store.state.currentPlaying.managePart1_player" :text="$t('lifeCycle')" type="video" />
      <microlearning path="manageKey"  imagePath="KeyMessS.svg" size="140" time="5" :completion="$store.state.currentPlaying.managekey_player" :text="$t('KeyMessages')" type="video" />
      <microlearning youAreHere path="manageExam" size="140" time="10" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt($store.getters['manage/getScore'],10)" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="20" />
    </div>

    <!-- Debugging section -->
    <div v-if="debugging">
      <p>{{allDone}}</p>
      <p>{{answerScore}}</p>
      <ul>
        <li v-for="index in answerScore">Answer {{Refill(index.toString())}} </li>
      </ul>
    </div>
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePageTest')}}</nuxt-link>
      </p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePageTest')}}</nuxt-link>
      </p>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>

    <b-modal id="missingQuestions" size="lg" okOnly>
      <p class='pageTitle'>{{$t('unanswered')}}</p>
      <p v-if="$i18n.locale=='en'">Your test cannot be marked because the following question(s) has/have not been answered:</p>
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes :</p>
      
      <ul>
        <li v-for="question, index in unansweredQuestions" :key="question">Question {{question}}</li>
      </ul>
      
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import microlearning from "~/components/microlearning"
export default {
  name: "examManage",
  data() {
    return {
      debugging: false,
      isNull: false,
      numQuestions: 5
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz,
    microlearning
  },
  methods: {
    resetQuiz() {
      this.$bvModal.msgBoxConfirm(this.$t('warnReset'), { cancelTitle: this.$t('cancel') }).then(trigger => {
          if (trigger) {
            this.isNull = !this.isNull
            this.$store.commit('manage/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('manage/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('manage/setComplete', this.checkPercentage())
      }
      else{
        this.$bvModal.show('missingQuestions');
      }
    },
    checkPercentage() {
      var count = 0;
      for (let i in this.answerScore) {
        if (this.answerScore[i][0] == "01") // 01 means correct answer
          count++;
      }
      const score = parseInt(count / this.numQuestions * 100)
      return score
    },
    Refill(qId) {
      if (this.answerScore[qId]) { return this.answerScore[qId][1] } else { return undefined }
    },
    calculateAnswer(answer, correct, qId) {
      if (answer == correct) {
        this.$store.commit('manage/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('manage/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('manage/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('manage/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('manage/setScore', [qId.toString(), "01", arr1])
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone() {
      return this.$store.getters['manage/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('manage/dismissAlert') : this.$store.commit('manage/undismissAlert') },
      get() { return this.$store.state.manage.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('manage/setCurrentTab', tabIndex) },
      get() { return this.$store.state.manage.tabIndex }
    },
    answerScore() {
      return this.$store.state.manage.score
    },
    quizLocked() {
      return this.$store.state.manage.quizLocked
    },
    chosenScenario: {
      set(scenario) {
        this.$store.commit('currentPlaying/setChosenScenario', scenario);
      },
      get() { 
        return this.$store.state.currentPlaying.chosenScenario;
      }
    },
    unansweredQuestions(){
      var unanswered = [];
      for (var i = 0; i < this.numQuestions; i++){
        if(!this.answerScore[i]){
          unanswered.push(i+1);
        }
      }
      return unanswered;
    },
    allAnswered(){
      const answers = Object.keys(this.answerScore).length
      return answers === this.numQuestions
    }
  },
}

</script>

<style type="text/css" scoped>
/*Using a scoped 'deep' selector*/
>>>.qTable td,
>>>.qTable th {
  border: 1px solid #4d4d4d;
  padding: .5em;
}

>>>.qTable th[scope="col"] {
  background-color: #865F56;
  color: #fff;
}

/*.reportSection {
  position: relative;
  height: 100px;
}*/

.reportSectionBar {
  text-transform: uppercase;
  background-color: #e5dddc;
  position: absolute;
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
.progressBar {
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;
}

.square {
  font-size: .9em;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  width: 42px;
  height: 22px;
  background-color: #DDD;
  cursor: pointer;
  color: #4d4d4d;
}

.filled {
  background-color: #865F56;
  color: #fff;
}

.Qactive {
  background-color: #e0e59e;
  box-shadow: -3px 7px 6px rgba(0, 0, 0, 0.3);
  outline: 1px solid #fff;
  color: #212529;
  /*outline: 2px solid #1000ff33;*/
}

.filled.Qactive {
  background-color: #B3A27A;
}
  
  .alert{
    padding-top: 1.5rem;
  }
  
  .alert h3{
    font-size: 22px;
  }
  
  .instructionsBtn{
    display: block;
    width: 60px;
    height: 60px;
    background: url('~assets/instructionsIcon.svg') center center no-repeat;
    border: none;
    appearance: none;
    -webkit-appearance: none;
  }
  
  .instructionsBtn:hover, .instructionsBtn:focus{
    opacity: 0.8;
    outline: none;
  }

</style>
<i18n>{
  "en": {
  "dismiss": "Dismiss",
  "warnReset":"This will erase your answer and score for this test, are you certain?",
  "Answered": "Answered",
  "markTest": "Mark my test",
  "testComplete": "Test Completed",
  "tryAgain": "Try Again",
  "scoreIs": "Your final score is",
  "unanswered":"Unanswered Question(s)",
  "manageSectionBar": "MANAGE",
  "Questions": {
  "q1": {
  "text": " Which phase of the procurement life cycle does the procurement specialist normally lead?",
      "options": {
      "1": "Planning ",
      "2": "Acquisition",
      "3": "Divestiture "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q2": {
      "text": "During the acquisition phase, managers are responsible for the following. ",
      "options": {
      "1": "Acquire the materiel",
      "2": "Receive and inspect the goods",
      "3": "Ensure quality assurance and testing is done if applicable",
      "4": "Dispose of surplus materiel"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q3": {
      "text": "This phase identifies opportunities for replacement, reallocation or disposal of surplus materiel, or of materiel that is no longer cost-effective to operate.",
      "options": {
      "1": "Planning",
      "2": "Acquisition",
      "3": "Operation, use and maintenance",
      "4": "Divestiture"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q4": {
      "text": "What is the objective of the operation, use and maintenance phase?",
      "options": {
      "1": "To get the most out of the materiel ",
      "2": "To make sure the materiel lasts as long as possible based on best value",
      "3": "To consider the total cost of the product over its life",
      "4": "To determine the method used to acquire the materiel"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q5": {
      "text": "Maintaining records to track inventory holdings and locations, consumption, usage, repairs, costs and ensuring that the materiel is properly used, repaired and safeguarded are activities of life cycle materiel management.",
      "options": {
      "1": "True",
      "2": "False"
      },
      "feedback": {
      "1": "",
      "2": ""
      }
      }
      }
    },
      "fr": {
      "dismiss": "Faire disparaître",
      "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
      "Answered": "Répondue",
      "markTest": "Corriger mon test",
      "testComplete": "Examen complété",
      "tryAgain": "Essayer de nouveau",
      "scoreIs": "Votre note finale est de",
      "unanswered":"Question(s) sans réponse",
      "manageSectionBar": "GESTION",
      "Questions": {
      "q1": {
       "text": "  Laquelle des étapes du processus d’approvisionnement est généralement menée par le spécialiste en approvisionnement? ",
      "options": {
      "1": "La planification ",
      "2": "L’acquisition ",
      "3": "Le dessaisissement  "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": ""
      }
      },
      "q2": {
      "text": "Pendant l’étape de l’acquisition, les gestionnaires sont responsables des tâches suivantes. ",
      "options": {
      "1": "Acquérir le matériel ",
      "2": "Recevoir et inspecter les marchandises",
      "3": "S’assurer qu’on procède à une assurance de la qualité et à des tests s’il y a lieu ",
      "4": "Éliminer le matériel excédentaire "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q3": {
      "text": "Cette étape définit des possibilités de remplacement, de réaffectation ou d’élimination du matériel excédentaire ou du matériel dont l’utilisation n’est plus rentable.",
      "options": {
      "1": "Planification",
      "2": "Acquisition",
      "3": "Exploitation, utilisation et entretien",
      "4": "Dessaisissement "
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q4": {
      "text": "Quel est l’objectif de l’étape d’exploitation, d’utilisation et d’entretien?",
      "options": {
      "1": "Tirer le maximum du matériel",
      "2": "S’assurer que le matériel dure le plus longtemps possible en fonction du meilleur rapport qualité-prix ",
      "3": "Tenir compte du coût total du produit pendant sa durée de vie",
      "4": "Déterminer la méthode utilisée pour acquérir le matériel"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",  
      "4": ""
      }
      },
      "q5": {
      "text": "Tenir des dossiers pour faire le suivi de l’inventaire des stocks et emplacements, de la consommation, de l’utilisation, des réparations et des coûts et s’assurer que le matériel est utilisé, réparé et conservé de façon appropriée sont des activités de gestion du cycle de vie du matériel.",
      "options": {
      "1": "Vrai",
      "2": "Faux"
      },
      "feedback": {
      "1": "",
      "2": ""
      }
      }
          }
          }
          }</i18n>
