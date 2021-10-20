<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-row>
        <b-col>
          <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible fade :dismiss-label="$t('dismiss')">
            <div v-if="$i18n.locale=='en'">
              <h3>Instructions</h3>
              <p>As per Treasury Board requirements, you must pass this test before you can exercise financial delegation. </p>
              <p>The test is made up of four sections, one for each phase: Plan, Procure, Manage, and Report.</p>
              <p>The passing grade is 80% for each of these sections.</p>
              <p>Each section should take you around 20 to 25 minutes to complete.</p>
              <p>You are allowed to consult course materials during the test. You may take the test as many times as you need to get a passing grade.</p>
            </div>
            <div v-if="$i18n.locale=='fr'">
              <h3>Instructions</h3>
              <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir le test de ce cours avant de pouvoir exercer la délégation financière.</p> 
              <p>Le test comporte quatre parties — une à la fin de chaque phase : planification, acquisition, gestion et rapports.</p>
              <p>La note de passage est de 80&nbsp;%, par partie.</p>
              <p>Chaque partie devrait vous prendre environ 20 à 25 minutes. </p>
              <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez reprendre le test autant de fois que vous le désirez.</p>
            </div>
          </b-alert>
          <!--<p v-if="AlertIsDismissed"><b-button @click="AlertIsDismissed=false">{{$t('ShowInstructions')}}</b-button></p>-->
          <p v-if="AlertIsDismissed"><button @click="AlertIsDismissed=false" class="instructionsBtn" v-b-tooltip.right.hover.focus :title="$t('ShowInstructions')"><span class="v-inv">{{$t('ShowInstructions')}}</span></button></p>
          <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
          <!--<div class="progressBar">
            <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
          </div>-->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-12">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam plan" active-nav-item-class="Qactive">
              <b-tab :title-link-class="[{'filled':answerScore[0]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>01
                </template>
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,3,0)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[1]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>02
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,2,1)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[2]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>03
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,1,2)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[3]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>04
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,1,3)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[4]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>05
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="calculateAnswer($event,2,4)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[5]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>06
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,1,5)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[6]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>07
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="arraysMatch($event,['1','2','3'],6)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[7]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>08
                </template>
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="arraysMatch($event,['1','3'],7)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[8]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>09
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,1,8)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[9]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>10
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,3,9)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[10]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>11
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="calculateAnswer($event,2,10)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[11]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>12
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="calculateAnswer($event,1,11)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[12]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>13
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="calculateAnswer($event,2,12)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[13]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>14
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q14')" qId="13" :refill="Refill('13')" @response="calculateAnswer($event,3,13)" />
              </b-tab>
              <b-tab :title-link-class="[{'filled':answerScore[14]}]">
                <template v-slot:title>
                  <span class="v-inv">Question </span>15
                </template>
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,2,14)" />
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
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=14">{{$t('nextPage')}}</b-button>
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
    
    <div class="bottomNav generalSection" v-if="chosenScenario == 'justExam'">
      <div class="generalSectionBar"><span>{{$t('justExamShort')}}</span></div>
      <microlearning path="exam1" time="15" youAreHere size="140" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('plan')" class="plan" noGrey type="exam" questionNum="20" />
      <microlearning path="exam2" time="15" size="140" :completion="parseInt($store.getters['spend/getScore'],10)" imagePath="S-Test.svg" :text="$t('spend')" class="spend" noGrey type="exam" questionNum="20" />
      <microlearning path="exam3" time="15" size="140" :completion="parseInt($store.getters['report/getScore'],10)" imagePath="R-Test.svg" :text="$t('report')" class="report" noGrey  type="exam" questionNum="10"/>
    </div>
   <div class="bottomNav planSection">
    <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
    
    <microlearning path="analyzegoods" imagePath="BuildWP.svg" size="140" time="15" :completion="$store.state.currentPlaying.buildWP_player" :text="$t('AnalyzeGoods')" type="video" />
    <microlearning path="forecastbudget" imagePath="CreateBud.svg" size="140" time="20" :completion="$store.state.currentPlaying.forecast_player" :text="$t('ForecastBudget')" type="video" />
    <microlearning size="140" path="budgetauthorities" time="20" :completion="$store.state.currentPlaying.createBudget_player" imagePath="ExerciseFinancialAuthority.svg" :text="$t('BudgetAuthorities')" type="video" />
    <microlearning path="planKey" time="5" size="140" :completion="$store.state.currentPlaying.kmPlan" imagePath="KeyMessP.svg" :text="$t('KeyMessagesPlan')" :highlighted="chosenScenario == 'refresh'" type="keyMessages" />
    <microlearning size="140" path="exam1" youAreHere time="15" :completion="parseInt($store.getters['plan/getScore'],10)" imagePath="P-Test.svg" :text="$t('Test')" :highlighted="chosenScenario == 'justExam'" type="exam" questionNum="15" />
  </div>
    <!-- Debugging section -->
    <div v-if="debugging">
      <p>Alldone: {{allDone}}</p>
      <p>{{answerScore}}</p>
    </div>
    <!-- End of Debugging section -->
    <b-modal id="Completed" size="lg" okOnly>
      <p class='pageTitle'>{{$t('testComplete')}}</p>
      <p>{{$t('scoreIs')}} {{allDone}}%.</p>
      <p v-if="allDone < 80"> {{$t('notPassed')}}</p>
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <template v-slot:modal-ok>{{$t('close')}}</template>
    </b-modal>

    <b-modal id="missingQuestions" size="lg" okOnly>
      <p class='pageTitle'>{{$t('unanswered')}}</p>
      <p v-if="$i18n.locale=='en'">Your test cannot be marked because the following question(s) has/have not been answered:</p>
      <p v-if="$i18n.locale=='fr'">Votre test ne peut pas être noté, puisque vous n’avez pas choisi de réponse pour les questions suivantes:</p>
      
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
  name: "examOne",
  data() {
    return {
      debugging: false,
      isNull:false,
      numQuestions: 15
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
            this.$store.commit('plan/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      if(this.allAnswered){
        this.$store.commit('plan/lockQuiz');
        this.$bvModal.show('Completed');
        this.$store.commit('plan/setComplete', this.checkPercentage())
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
        this.$store.commit('plan/setScore', [qId.toString(), "01", answer]) // 01 means right
      } else { this.$store.commit('plan/setScore', [qId.toString(), "'10'", answer]) } // wrong could be whatever
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1]) 
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('plan/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('plan/setScore', [qId.toString(), "01", arr1]) // 01 means right
    },
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  },
  computed: {
    allDone(){
      return this.$store.getters['plan/getScore']
    },
    AlertIsDismissed: {
      set(AlertIsDismissed) { AlertIsDismissed ? this.$store.commit('plan/dismissAlert') : this.$store.commit('plan/undismissAlert') },
      get() { return this.$store.state.plan.AlertIsDismissed }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('plan/setCurrentTab', tabIndex) },
      get() { return this.$store.state.plan.tabIndex }
    },
    answerScore() {
      return this.$store.state.plan.score
    },
    quizLocked() {
      return this.$store.state.plan.quizLocked
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
/*.planSection {
  position: relative;
  height: 100px;
}*/

.planSectionBar {
  text-transform: uppercase;
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
  background-color: #587C84;
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
  background-color: #B3C295
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
    "tryAgain": "Try again",
    "scoreIs":"Your final score is",
    "unanswered":"Unanswered question(s)",
    "Questions": {
      "q1": {
        "text": "<p>You are the manager of a team of laboratory technicians tasked with a new priority: analyzing 1,000 water samples. You currently do not have the space, equipment or extra employees required to carry out this new activity. You have been given a budget of $250,000 to set up the new laboratory.</p><p> What should you do next? </p>",
        "options": {
          "1": "Purchase testing equipment from a standing offer on buyandsell.gc.ca ",
          "2": "Hire a new laboratory technician from an existing staffing pool ",
          "3": "Identify the resources needed to operate a water analysis laboratory "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q2": {
        "text": "<p>To carry out the activity of analyzing water samples, you will need help setting up a laboratory. This should take approximately six weeks. No one within your department knows how to set up a water analysis laboratory and there is a hiring freeze.</p> <p>Given the scenario, what is your requirement? </p>",
        "options": {
          "1": "Ask another manager to help you and your team set up the water analysis laboratory ",
          "2": "Procure the services of a water analysis expert to help you set up the water analysis laboratory",
          "3": "Hire a full-time employee to help you set up the water analysis laboratory"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "Identify the steps needed to determine your requirements.",
        "options": {
          "1": "Look at the activities and sub-activities in your work plan, identify which resources are missing to carry out your activities and check to see if the goods and services you require are already at your disposal ",
          "2": "Verify that you have sufficient funds in your budget and identify which resources are missing to carry out your activities ",
          "3": "Check to see if the goods and services you require are already at your disposal, look at the activities and sub-activities in your work plan and verify that you have sufficient funds in your budget"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q4": {
        "text": "Which of the following authorities can only be carried out by a financial specialist or officer?",
        "options": {
          "1": "Payment authority - Section 33 – <em>Financial Administration Act</em>",
          "2": "Certification authority - Section 34 – <em>Financial Administration Act</em> ",
          "3": "Commitment authority - Section 32 – <em>Financial Administration Act</em>"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q5": {
        "text": "<p>You are a manager of a team providing internal information-management services within your organization. You are responsible for managing the budget and have delegated financial authority. Your organization’s spending dollar limit per transaction is $2,500 when using an acquisition card.</p><p>Following an ergonomic assessment conducted on you and an employee, the specialist recommends that you both replace your office chairs. He tells you that he has several models of chairs that would suit your needs that he purchases wholesale and sells privately. </p> <p>What should be your first step in acquiring the ergonomic chairs?</p>",
        "options": {
          "1": "Conduct an online search for the best ergonomic chair for your needs within the dollar limits of your acquisition card  ",
          "2": "Check with your accommodations groups to see if they have a chair that would suit your needs ",
          "3": "Ask the ergonomist about the chair models he has for sale that are within the dollar limits of your acquisition card "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q6": {
        "text": "Three new employees are joining your team. How will you find a workspace for them? ",
        "options": {
          "1": "Consult the accommodations team ",
          "2": "Find an empty workstation on the floor and ask them to sit there ",
          "3": "Consult Shared Services Canada ",
          "4": "Use one of the boardrooms since it is rarely used"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "You have the budget, financial delegated authority and contracting authority needed to purchase new protective clothing. Before consulting the standing offers, which of the following should you do first?",
        "options": {
          "1": "Check available surplus or inventory ",
          "2": "Obtain protective clothing from another unit",
          "3": "Use a similar product such as a protective barrier",
          "4": "Order protective clothing on sale from Amazon"
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q8": {
        "text": "How could you estimate the potential costs of your goods, services or construction needs? ",
        "options": {
          "1": "Perform an internet search",
          "2": "Hire a consultant to perform the estimate",
          "3": "Consult an up-to-date purchasing catalogue",
          "4": "Understate costs to ensure approval"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "When acquiring a truck, which of the following costs should you include in your purchase estimates?",
        "options": {
          "1": "The purchase cost and all other related costs should be included ",
          "2": "Only the gas costs and maintenance costs should be included",
          "3": "The purchasing cost is the sole cost to be included"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q10": {
        "text": "<p>What are a manager’s obligations under section 34 of the <em>Financial Administration Act</em> as they relate to the acquisition of goods and services?</p><p>A manager is required to...</p>",
        "options": {
          "1": "ensure there is an appropriation to which payment may be charged prior to entering into a contract.",
          "2": "ensure that the charges against appropriations are made on approved requisitions.",
          "3": "certify, before making payment, that the work has been performed or the goods supplied according to the terms of the contract."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q11": {
        "text": "When costing procurement needs, managers do not need to consider life cycle and disposal costs in the planning stages.",
        "options": {
          "1": "True",
          "2": "False"
        },
        "feedback": {
          "1": "",
          "2": ""
        }
      },
      "q12": {
        "text": "The electricity bill for your unit’s storage shed is an example of which kind of cost?",
        "options": {
          "1": "Consumption cost",
          "2": "Monitoring cost",
          "3": "Maintenance cost",
          "4": "Reallocation cost"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Which document should you consult to find out which positions in your department have delegated contracting authority for services?",
        "options": {
          "1": "Policy on the Planning and Management of Investments",
          "2": "Organizational delegation instrument",
          "3": "Directive on Delegation of Spending and Financial Authorities "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q14": {
        "text": "This section of the <em>Financial Administration Act</em> enables the making of regulations with respect to conditions under which contracts may be entered into in the Government of Canada. ",
        "options": {
          "1": "Section 32",
          "2": "Section 33",
          "3": "Section 41"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q15": {
        "text": "Who has the exclusive authority to acquire goods on behalf of the Government of Canada?",
        "options": {
          "1": "Minister of Finance",
          "2": "Minister of Public Services and Procurement Canada",
          "3": "President of the Treasury Board"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      }
    }
  },
  "fr": {
    "dismiss": "Faire disparaître",
    "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
    "Answered": "Répondue",
    "markTest": "Corriger mon test",
    "testComplete": "Test complété",
    "tryAgain": "Essayer de nouveau",
    "scoreIs":"Votre note finale est de",
    "unanswered":"Question(s) sans réponse",
    "Questions": {
      "q1": {
        "text": "<p>Vous êtes le gestionnaire d’une équipe de techniciens de laboratoire qui doit gérer une nouvelle priorité : analyser 1000 échantillons d’eau. Actuellement, vous n’avez pas l’espace, l’équipement ou les employés supplémentaires requis pour réaliser cette nouvelle activité. On vous a attribué un budget de 250 000 $ pour mettre sur pied le nouveau laboratoire.</p><p>Que devez-vous faire ensuite?</p>",
        "options": {
          "1": "Acheter de l’équipement d’analyse à l’aide d’une offre à commandes sur achatsetventes.gc.ca",
          "2": "Embaucher un nouveau technicien de laboratoire à partir d’un bassin de dotation existant",
          "3": "Trouver les ressources nécessaires pour exploiter un laboratoire d’analyse de l’eau"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q2": {
        "text": "<p>Afin de réaliser l’activité d’analyse des échantillons d’eau, vous aurez besoin d’aide pour mettre sur pied un laboratoire. Cela devrait prendre environ six semaines. Personne dans votre ministère ne sait comment mettre sur pied un laboratoire d’analyse de l’eau et il y a un gel du recrutement.</p> <p>Compte tenu du scénario, de quoi avez-vous besoin?</p>",
        "options": {
          "1": "Demander à un autre gestionnaire de vous aider, vous et votre équipe, à mettre sur pied le laboratoire d’analyse de l’eau",
          "2": "Acquérir les services d’un expert en analyse de l’eau pour vous aider à mettre sur pied le laboratoire d’analyse de l’eau",
          "3": "Embaucher un employé à temps plein pour vous aider à mettre sur pied le laboratoire d’analyse de l’eau"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q3": {
        "text": "Identifier les étapes à suivre pour déterminer vos besoins.",
        "options": {
          "1": "Examiner les activités et sous-activités de votre plan de travail, identifier les ressources manquantes pour réaliser vos activités et vérifier si les biens et services dont vous avez besoin sont déjà à votre disposition",
          "2": "Vérifier si vous avez suffisamment de fonds dans votre budget et déterminer les ressources manquantes pour réaliser vos activités",
          "3": "Vérifier si les biens et services dont vous avez besoin sont déjà à votre disposition, examiner les activités et les sous-activités dans votre plan de travail et vérifier que vous avez assez de fonds dans votre budget"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q4": {
        "text": "Lequel des pouvoirs suivants peut être exercé uniquement par un spécialiste ou agent des finances?",
        "options": {
          "1": "Le pouvoir délégué de payer - L’article 33 – <em>Loi sur la gestion des finances publiques</em> ",
          "2": "Le pouvoir délégué d’attestation - L’article 34 – <em>Loi sur la gestion des finances publiques</em> ",
          "3": "Le pouvoir d’engager des fonds - L’article 32 – <em>Loi sur la gestion des finances publiques</em>  "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q5": {
        "text": "<p>Vous êtes le gestionnaire responsable d’une équipe qui fournit des services internes de gestion de l’information à votre organisation. Vous devez gérer le budget et vous êtes délégataire de pouvoirs financiers. Dans votre organisation, la limite établie pour une transaction effectuée au moyen d’une carte d’achat est de 2&nbsp;500 $.</p><p>À la suite d’une évaluation ergonomique faite pour vous et pour un employé, l’ergonome recommande de remplacer vos deux chaises de bureau. L’ergonome vous fait savoir qu’il dispose de plusieurs types de chaises qui pourraient correspondre à vos besoins. Il les a achetées en gros et les vend à titre privé.</p> <p>Quelle devrait être votre première démarche pour l’acquisition des chaises ergonomiques?</p>",
        "options": {
          "1": "Effectuer une recherche sur Google pour trouver la chaise ergonomique qui correspond le mieux à vos besoins et dont le prix respecte la limite qui vous est imposée pour les acquisitions par carte d’achat",
          "2": "onsulter le groupe des aménagements de votre organisation pour savoir s’il a des chaises qui pourraient correspondre à vos besoins",
          "3": "Demander à l’ergonome de vous décrire les différents types de chaises dont il dispose et dont le prix respecte la limite qui vous est imposée pour les acquisitions par carte d’achat"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q6": {
        "text": "Trois nouveaux employés se joignent à votre équipe. Comment trouverez-vous un espace de travail pour eux?",
        "options": {
          "1": "Consulter l’équipe des aménagements",
          "2": "Trouver un poste de travail libre sur l’étage et leur demander de s’installer là",
          "3": "Consulter Services partagés Canada",
          "4": "Utiliser l’une des salles de conférence puisqu’elles sont rarement utilisées"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "Vous avez le budget, le pouvoir délégué en matière financière et le pouvoir de conclure des contrats requis pour acheter de nouveaux vêtements de protection. Avant de consulter les offres à commandes, laquelle des tâches suivantes devriez-vous faire en premier?",
        "options": {
          "1": "Vérifier l’excédent ou l’inventaire disponible",
          "2": "Obtenir des vêtements de protection d’une autre unité ",
          "3": "Utiliser un produit semblable comme une barrière de protection",
          "4": "Commander des vêtements de protection en vente sur Amazon"
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q8": {
        "text": "Comment pourriez-vous estimer les coûts potentiels de vos besoins en biens, en services ou en construction?",
        "options": {
          "1": "Effectuer une recherche sur Internet",
          "2": "Embaucher un expert-conseil pour effectuer une estimation",
          "3": "Consulter un catalogue d’achat à jour",
          "4": "Sous-estimer les coûts pour en assurer l’approbation"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "Au moment d’acheter un camion, lesquels des coûts suivants devriez-vous inclure dans vos estimations d’achat?",
        "options": {
          "1": "Le coût d’achat et tous les autres coûts connexes devraient être inclus",
          "2": "Seuls les coûts de l’essence et de l’entretien devraient être inclus",
          "3": "Le coût d’achat est le seul coût qui doit être inclus"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q10": {
        "text": "<p>Quelles sont les obligations d’un gestionnaire au titre de l’article 34 de la <em>Loi sur la gestion des finances publiques</em> en lien avec l’acquisition de biens et de services?</p><p>Un gestionnaire doit…</p?",
        "options": {
          "1": "s’assurer qu’il y a un crédit auquel le paiement peut être imputé avant de conclure un contrat.",
          "2": "s’assurer que les charges imputées sur des crédits sont associées à des demandes approuvées.",
          "3": "certifier, avant de faire le paiement, que le travail a été effectué ou que les biens ont été fournis conformément aux modalités du contrat."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q11": {
        "text": "Au moment d’établir le coût des besoins en approvisionnement, les gestionnaires n’ont pas à tenir compte du cycle de vie et des coûts d’aliénation aux étapes de planification.",
        "options": {
          "1": "Vrai",
          "2": "Faux"
        },
        "feedback": {
          "1": "",
          "2": ""
        }
      },
      "q12": {
        "text": "De quel type de coûts la facture d’électricité de la remise d’entreposage de votre unité est-elle un exemple?",
        "options": {
          "1": "Coût de consommation",
          "2": "Coût de contrôle",
          "3": "Frais d’entretien",
          "4": "Frais de répartition"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Quel document devriez-vous consulter pour savoir quels postes de votre ministère ont un pouvoir délégué en matière de l’approvisionnement pour des services?",
        "options": {
          "1": "Politique sur la planification et la gestion des investissements",
          "2": "Instrument de délégation ministériel",
          "3": "Directive sur la délégation des pouvoirs de dépenser et des pouvoirs financiers"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q14": {
        "text": "Cet article de la <em>Loi sur la gestion des finances publiques</em> permet d’établir les règlements concernant les conditions dans lesquelles les contrats peuvent être conclus au gouvernement du Canada.",
        "options": {
          "1": "Article  32",
          "2": "Article  33",
          "3": "Article  41"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      },
      "q15": {
        "text": "Qui a le pouvoir exclusif de faire l’acquisition de biens au nom du gouvernement du Canada?",
        "options": {
          "1": "Le ministre des Finances",
          "2": "Le ministre de Services publics et Approvisionnement ",
          "3": "Le président du Conseil du Trésor"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": ""
        }
      }
    
    }
  }
}</i18n>
