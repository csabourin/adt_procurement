<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible>
        <div v-if="$i18n.locale=='en'">
          <p><strong style="text-transform: uppercase;">Note:</strong> This course and the final tests are currently in draft mode and will not officially count towards mandatory training requirements during this phase. We invite you to complete the tests for plan, spend and report and we welcome your feedback on the questions and functionality.&nbsp; Your input will help to make this more effective.</p>
          <p>For some of the questions in this test, you play the role of a manager of a call center. You will be given scenarios based on this situation.&nbsp;</p>
          <!-- <p>As per Treasury Board requirements, passing the test for this course is mandatory before you can exercise financial delegation.&nbsp;</p> -->
          <p>There are three sections to the test - one for each phase: planning, spending and reporting.&nbsp;</p>
          <p>The passing grade is 80% for each of these sections.</p>
          <p>Each section should take you around 15-20 minutes to complete.&nbsp;</p>
          <p>You can access course materials during the test and you can take it as many times as you need.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p><strong style="text-transform: uppercase;">Note :</strong> Ce cours et les tests finaux sont actuellement en mode brouillon et ne compteront pas officiellement dans les exigences de formation obligatoire pendant cette phase. Nous vous invitons à compléter les tests pour planifier, dépenser et faire un rapport et nous vous invitons à nous faire part de vos commentaires sur les questions et les fonctionnalités.&nbsp; Vos commentaires nous aideront à rendre le tout plus efficace.</p>
          <p>Pour certaines des questions de ce test, vous &ecirc;tes dans le r&ocirc;le d&rsquo;un responsable de centre d&rsquo;appels. Des scénarios basés sur cette situation vous seront proposés.&nbsp;</p>
          <!-- <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir l&rsquo;examen de ce cours avant de pouvoir exercer la délégation financi&egrave;re.</p> -->
          <p>Le test comporte trois parties - une à la fin de chaque phase - planification, dépenses et rapports.&nbsp;</p>
          <p>La note de passage est de 80%, par partie.&nbsp;</p>
          <p>Chaque partie devrait vous prendre environ 15-20 minutes.&nbsp;</p>
          <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.</p>
        </div>
      </b-alert>
      <p>Question {{tabIndex+1}} / {{numQuestions}}</p>
      <div class="progressBar">
        <a href="#" @click.prevent="tabIndex=index" :title="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-for="(square,index) in numQuestions" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" :aria-label="'Question '+parseInt(square) +((answerScore[index])? ': '+$t('Answered'):'')" v-html="index+1" />
      </div>
      <b-row>
        <b-col class="col"></b-col>
        <b-col class="col-10">
          <b-card no-body>
            <b-tabs card pills v-model="tabIndex" class="exam">
              <b-tab title="01">
                <!-- calculateAnswer($event,correctAnswer,qId) -->
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,1,0)" />
              </b-tab>
              <b-tab title="02">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,2,1)" />
              </b-tab>
              <b-tab title="03">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,3,2)" />
              </b-tab>
              <b-tab title="04">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,4,3)" />
              </b-tab>
              <b-tab title="05">
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="arraysMatch($event,[2,4],4)" />
              </b-tab>
              <b-tab title="06">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,4,5)" />
              </b-tab>
              <b-tab title="07">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="calculateAnswer($event,1,6)" />
              </b-tab>
              <b-tab title="08">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="calculateAnswer($event,2,7)" />
              </b-tab>
              <b-tab title="09">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,4,8)" />
              </b-tab>
              <b-tab title="10">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,3,9)" />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col class="col"></b-col>
      </b-row>
    </b-container>
    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
        <b-button @click="tabIndex++" :disabled="tabIndex>=19">{{$t('nextPage')}}</b-button>
      </b-button-group>
    </div>
    <transition name="fade">
      <p v-if="allDone">
        <b-button @click="markTest">{{$t('markTest')}}</b-button>
        <b-button @click="resetQuiz">{{$t('tryAgain')}}</b-button>
      </p>
    </transition>
    <div class="bottomNav reportSection">
      <div class="reportSectionBar"><span>{{$t('report')}}</span></div>
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
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link>
      </p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link>
      </p>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  name: "examThree",
  data() {
    return {
      debugging: false,
      isNull: false,
      numQuestions: 10
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz
  },
  methods: {
    resetQuiz() {
      this.$bvModal.msgBoxConfirm(this.$t('warnReset'), { cancelTitle: this.$t('cancel') }).then(trigger => {
          if (trigger) {
            this.isNull = !this.isNull
            this.$store.commit('report/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      this.$store.commit('report/lockQuiz')
      this.$bvModal.show('Completed')
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
        this.$store.commit('report/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('report/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('report/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('report/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('report/setScore', [qId.toString(), "01", arr1])
    }
  },
  computed: {
    allDone() {
      return this.$store.getters['report/getScore']
    },
    AlertIsDismissed: {
      get() { return this.$store.state.report.AlertIsDismissed },
      set() { this.$store.commit('report/dismissAlert') }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('report/setCurrentTab', tabIndex) },
      get() { return this.$store.state.report.tabIndex }
    },
    answerScore() {
      return this.$store.state.report.score
    },
    quizLocked() {
      return this.$store.state.report.quizLocked
    }
  },
  watch: {
    answerScore() {
      const answers = Object.keys(this.answerScore).length
      if (answers === this.numQuestions) {
        this.$store.commit('report/setComplete', this.checkPercentage())
      }
    }
  }
}

</script>

<style type="text/css" scoped>
/*Using a scoped 'deep' selector*/
>>>.qTable td,
>>>.qTable th {
  border: 1px solid #4d4d4d;
  padding: .5em;
}

>>>.qTable th {
  background-color: #865F56;
  color: #fff;
}

.reportSection {
  position: relative;
  height: 100px;
}

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
  color: #000;
  /*outline: 2px solid #1000ff33;*/
}

.filled.Qactive {
  background-color: #B3A27A;
}

</style>
<i18n>{
  "en": {
  "warnReset":"This will erase your answer and score for this test, are you certain?",
  "Answered": "Answered",
  "markTest": "Mark my test",
  "testComplete": "Test Completed",
  "tryAgain": "Try Again",
  "scoreIs": "Your final score is",
  "Questions": {
  "q1": {
  "text": "<table class='qTable'>    <tbody>      <tr>        <td>          <p>Budget </p>        </td>        <td>          <p>Commitments </p>        </td>        <td>          <p>Year-To-Date Actuals</p>        </td>        <td>          <p>Annual Forecast</p>        </td>        <td>          <p>Surplus / Deficit</p>        </td>      </tr>    </tbody>    <table><br>These are the column headings for the financial situation report. How is the surplus / deficit calculated?",
      "options": {
      "1": "Annual Forecast – Budget",
      "2": "Commitments – Actuals",
      "3": "Commitments + Actuals",
      "4": "Actuals + Annual Forecast"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q2": {
      "text": "It is P6 and you are reviewing the financial situation report (FSR). Over the last four months, three of your positions have been vacant so there is a substantial salary surplus. However, you are hiring 2 students as an interim solution until the end of the fiscal year. But it will take an additional month to onboard them after their security clearance is processed. As a manager, how do you forecast given this situation?",
      "options": {
      "1": "Forecast the costs of two student salaries, add this amount to your budget total and ask your admin to change the Year-To-Date Actuals to reflect this",
      "2": "Forecast the costs of two student salaries from P7 to P12 (end of fiscal year) and ask your admin to update the commitments in the financial system",
      "3": "Forecast the costs of two student salaries and deduct this from your budget total and ask your admin to change the Year-To-Date Actuals to reflect this",
      "4": "Forecast the costs of two student salaries from P6 to P12 (end of fiscal year) and ask your admin to update the commitments in the financial system"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q3": {
      "text": "Three of your positions have been vacant for the last four months, and you now expect they will be vacant for another five months. There is a growing salary surplus. What will you do?",
      "options": {
      "1": "Keep forecasting the budgeted amount for salary and acquire temporary help because it&rsquo;s quicker ",
      "2": "Transfer the salary surplus to O&M, even though you have no O&M deficit",
      "3": "Tell your manager that you have a surplus in your salary budget, so it can be used elsewhere in the organization",
      "4": "Do not forecast an additional surplus so you can hold onto the funds; then in P9, forecast what you expect to spend"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q4": {
      "text": "Since all your funds have been committed, last month you were granted an additional $5,000 to train employees on new software as a result of a changing priority. Upon reviewing the financial situation report just received from finance, you see that these funds are not included in the budget totals. Knowing that the forecast is due in two weeks, what do you do?",
      "options": {
      "1": "Increase the budget in the financial system by $5,000",
      "2": "Create a commitment in the financial system for $5,000",
      "3": "Wait for the next FSR to see if the budget totals are updated",
      "4": "Forecast the $5,000 and follow up with finance"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q5": {
      "text": "<table class='qTable'> <tbody> <tr> <th>&nbsp;</th> <th> <p><strong>P6 Budget&nbsp;</strong></p> </th> <th> <p><strong>P6 Commitments&nbsp;</strong></p> </th> <th> <p><strong>P6 Year-To-Date Actuals</strong></p> </th> <th> <p><strong>P5 Annual Forecast</strong></p> </th> <th> <p><strong>P6 Annual Forecast</strong></p> </th> <th> <p><strong>Surplus / Deficit</strong></p> </th> </tr> <tr> <td> <p>Chatbot software</p> </td> <td> <p>$3,000</p> </td> <td> <p>$1,500</p> </td> <td> <p>$1,500</p> </td> <td> <p>$3,500</p> </td> <td>&nbsp;</td> <td> <p>$0</p> </td> </tr> <tr> <td> <p>Hospitality</p> </td> <td> <p>$15,000</p> </td> <td> <p>$9,500</p> </td> <td> <p>$8,000</p> </td> <td> <p>$15,000</p> </td> <td>&nbsp;</td> <td> <p>$0</p> </td> </tr> </tbody> </table><p>&nbsp;</p> Looking at the provided financial situation report, what are the red flags that stand out to you that you would need to get more information? ",
      "options": {
      "1": "The P5 chatbot software commitments and year-to-date actuals added together is equal to the budget",
      "2": "The P6 hospitality commitments and year-to-date actuals added together are more than the budget ",
      "3": "The hospitality P5 annual forecast is the same as the P6 budget",
      "4": "The chatbot software P5 annual forecast is higher than the P6 budget"
      },
      "feedback": {
      "wrong": "",
      "right": ""
      }
      },
      "q6": {
      "text": "Which report publishes information on the departments&rsquo; websites related to travel, hospitality, contracts, position reclassifications, wrongdoing, grants and contributions?",
      "options": {
      "1": "Departmental Results Report",
      "2": "Quarterly Financial Report",
      "3": "Internal Audit",
      "4": "Proactive Disclosure"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q7": {
      "text": "What do Performance Information Profiles contain?",
      "options": {
      "1": "Performance indicators and targets ",
      "2": "Snapshot of finances and commitments",
      "3": "Compliance results and recommendations",
      "4": "Performance assessments of policies"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q8": {
      "text": "Near year-end, your planning unit requests that you report on results for the “Digitization of services”. What information would you provide?",
      "options": {
      "1": "100% of mail received by post was answered within 1 day instead of 3 days",
      "2": "The chatbot system resolved 30% of online support requests",
      "3": "70% of call center agents were trained on performance standards",
      "4": "Call center absenteeism is down 20%"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q9": {
      "text": "Which of the following is a valid performance indicator?",
      "options": {
      "1": "Call center staffed from 9 AM to 5 PM Monday to Friday",
      "2": "Answer live chat support requests as soon as possible",
      "3": "Budget of $9,000 for IT infrastructure",
      "4": "90% of the time, emails are answered within one business day"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      },
      "q10": {
      "text": "You have been asked to contribute information for the Departmental Results Report. What information will you provide?",
      "options": {
      "1": "Provide the audit recommendations of my program ",
      "2": "Provide the three-year plan for my program",
      "3": "Provide program performance information",
      "4": "Provide financial forecast information"
      },
      "feedback": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
      }
      }
      }
      },
      "fr": {
      "warnReset":"Ceci effacera vos réponses et les résultats de ce test. Voulez-vous continer?",
      "Answered": "Répondue",
      "markTest": "Grader mon examen",
      "testComplete": "Examen complété",
      "tryAgain": "Essayer de nouveau",
      "scoreIs": "Votre note finale est de",
      "Questions": {
      "q1": {
      "text": "<table class='qTable'>        <tbody>          <tr>            <td>              <p>Budget </p>            </td>            <td>              <p>Engagements</p>            </td>            <td>              <p>Réalisations à ce jour</p>            </td>            <td>              <p>Prévisions annuelles</p>            </td>            <td>              <p>Excédent / Déficit</p>            </td>          </tr>          </tbodytable> Il s&rsquo;agit des intitulés de colonne de l&rsquo;état de la situation financière. Comment l&rsquo;excédent / le déficit est-il calculé?",
          "options": {
          "1": "Prévisions annuelles - Budget",
          "2": "Engagements - Réalisations",
          "3": "Engagements + Réalisations",
          "4": "Réalisations + Prévisions annuelles"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q2": {
          "text": "Il s&rsquo;agit de P6 et vous examinez le rapport sur la situation financière (RSF). Au cours des quatre derniers mois, trois de vos postes ont été vacants, de sorte qu&rsquo;il y a un important excédent salarial. Toutefois, vous embauchez deux étudiants à titre de solution provisoire jusqu&rsquo;à la fin de l&rsquo;exercice financier. Mais il faudra un mois de plus pour les embaucher après le traitement de leur autorisation de sécurité. En tant que gestionnaire, comment prévoyez-vous la situation?",
          "options": {
          "1": "Prévoir les coûts de deux salaires d&rsquo;étudiants, ajoutez ce montant au total de votre budget et demandez à votre administrateur de modifier les chiffres réels à ce jour pour refléter cette situation",
          "2": "Prévoir les coûts de deux salaires d&rsquo;étudiants de P7 à P12 (fin de l&rsquo;année financière) et demander à votre administration de mettre à jour les engagements dans le système financier",
          "3": "Prévoir les coûts de deux salaires d&rsquo;étudiants et déduisez-les du total de votre budget et demandez à votre administration de modifier les chiffres réels de l&rsquo;année en cours pour en tenir compte",
          "4": "Prévoir les coûts de deux salaires d&rsquo;étudiants de P6 à P12 (fin de l&rsquo;année financière) et demander à votre administration de mettre à jour les engagements dans le système financier"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q3": {
          "text": "Trois de vos postes ont été vacants au cours des quatre derniers mois, et vous vous attendez maintenant à ce qu&rsquo;ils le soient encore pour cinq mois. Il y a un surplus de salaire croissant. Qu&rsquo;allez-vous faire?",
          "options": {
          "1": "Continuez à prévoir le montant prévu pour le salaire et faites appel à de l&rsquo;aide temporaire, car c&rsquo;est plus rapide",
          "2": "Transférer l&rsquo;excédent salarial au F&E, même si vous n&rsquo;avez pas de déficit de F&E",
          "3": "Dites à votre gestionnaire que vous avez un surplus dans votre budget salarial, afin qu&rsquo;il puisse être utilisé ailleurs dans l'organisation",
          "4": "Ne prévoyez pas d&rsquo;excédent supplémentaire afin de pouvoir conserver les fonds ; ensuite, dans P9, prévoyez ce que vous prévoyez de dépenser"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q4": {
          "text": "Comme tous vos fonds ont été engagés, vous avez reçu le mois dernier un montant supplémentaire de 5&nbsp;000&nbsp;$ pour former les employés sur les nouveaux logiciels en raison d&rsquo;un changement de priorité. En examinant le rapport sur la situation financière que vous venez de recevoir des Finances, vous constatez que ces fonds ne sont pas inclus dans les totaux du budget. Sachant que la prévision est due dans deux semaines, que faites-vous?",
          "options": {
          "1": "Augmenter le budget dans le système financier de 5&nbsp;000&nbsp;$",
          "2": "Créer un engagement dans le système financier pour 5&nbsp;000&nbsp;$.",
          "3": "Attendez le prochain FSR pour voir si les totaux de budget sont mis à jour",
          "4": "Prévoir les 5&nbsp;000&nbsp;$ et faire le suivi avec les finances"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q5": {
          "text": "<table class='qTable'> <tbody> <tr> <th>&nbsp;</th> <th> <p><strong>P6 Budget </strong></p> </th> <th> <p><strong>P6 Engagements </strong></p> </th> <th> <p><strong>P6 Réalisations à ce jour</strong></p> </th> <th> <p><strong>P5 </strong><strong>Prévisions annuelles</strong></p> </th> <th> <p><strong>P6 Prévisions annuelles</strong></p> </th> <th> <p><strong>Excédent / Déficit</strong></p> </th> </tr> <tr> <td> <p>Logiciel de Chatbot</p> </td> <td> <p>3&nbsp;000&nbsp;$</p> </td> <td> <p>1&nbsp;500&nbsp;$</p> </td> <td> <p>1&nbsp;500&nbsp;$</p> </td> <td> <p>3&nbsp;500&nbsp;$</p> </td> <td>&nbsp;</td> <td> <p>0$</p> </td> </tr> <tr> <td> <p>Accueil</p> </td> <td> <p>15&nbsp;000&nbsp;$</p> </td> <td> <p>9&nbsp;500&nbsp;$</p> </td> <td> <p>8&nbsp;000&nbsp;$</p> </td> <td> <p>15&nbsp;000&nbsp;$</p> </td> <td> <p>&nbsp;</p> </td> <td> <p>0$</p> </td> </tr> </tbody> </table> <p>&nbsp;</p> En examinant le rapport sur la situation financière fourni, quels sont les signaux d&rsquo;alarme qui vous indiquent que vous auriez besoin de plus d&rsquo;information?",
          "options": {
          "1": "La somme des engagements du logiciel de clavardage P5 et des chiffres réels depuis le début de l&rsquo;année est égale au budget ",
          "2": "La somme des engagements des P6 en matière d&rsquo;accueil et des chiffres réels depuis le début de l&rsquo;année dépasse le budget ",
          "3": "La prévision annuelle du P5 pour l&rsquo;accueil est la même que celle du P6",
          "4": "La prévision annuelle du logiciel de chat P5 est supérieure au budget P6"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q6": {
          "text": "Quel rapport publie sur les sites Web des ministères l'information concernant les voyages, l&rsquo;accueil, les contrats, les reclassifications de postes, les actes répréhensibles, les subventions et les contributions?",
          "options": {
          "1": "Rapport ministériel sur les résultats",
          "2": "Rapport financier trimestriel",
          "3": "Vérification interne",
          "4": "Divulgation Proactive"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q7": {
          "text": "Que contiennent les profils d&rsquo;information sur le rendement?",
          "options": {
          "1": "Indicateurs et cibles de rendement ",
          "2": "Aperçu des finances et des engagements",
          "3": "Résultats de la conformité et recommandations",
          "4": "Évaluations de la performance des politiques"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q8": {
          "text": "Vers la fin de l&rsquo;année, votre unité de planification vous demande de rendre compte des résultats de la &laquo;Numérisation des services&raquo;. Quels renseignements fourniriez-vous?",
          "options": {
          "1": "100 % du courrier reçu par la poste a reçu une réponse dans un délai de 1 jour au lieu de 3 jours",
          "2": "Le système de chatbot a résolu 30% des demandes de support en ligne",
          "3": "70% des agents des centres d&rsquo;appels ont été formés sur les normes de performance",
          "4": "L'absentéisme dans les centres d&rsquo;appels a diminué de 20 %."
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q9": {
          "text": "Lequel des éléments suivants est un indicateur de rendement valide?",
          "options": {
          "1": "Centre d&rsquo;appels avec personnel de 9 h à 17 h du lundi au vendredi",
          "2": "Répondre aux demandes d&rsquo;assistance par chat en direct dès que possible",
          "3": "Budget de 9&nbsp;000&nbsp;$ pour l'infrastructure informatique",
          "4": "90 % du temps, les courriels reçoivent une réponse dans un délai d&rsquo;un jour ouvrable"
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          },
          "q10": {
          "text": "On vous a demandé de fournir de l'information pour le Rapport ministériel sur les résultats. Quels renseignements allez-vous fournir?",
          "options": {
          "1": "Fournir les recommandations de vérification de mon programme",
          "2": "Fournir le plan triennal de mon programme",
          "3": "Fournir de l'information sur le rendement du programme",
          "4": "Fournir de l'information sur les prévisions financières "
          },
          "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
          }
          }
          }
          }
          }</i18n>
