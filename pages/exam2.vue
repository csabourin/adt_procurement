<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <b-container>
      <b-alert :show="!AlertIsDismissed" @dismissed="AlertIsDismissed=true" dismissible>
        <div v-if="$i18n.locale=='en'">
          <p><strong>NOTE:</strong> This course and the final tests are currently in draft mode and will not officially count towards mandatory training requirements during this phase. We invite you to complete the tests for plan, spend and report and we welcome your feedback on the questions and functionality.&nbsp; Your input will help to make this more effective.</p>
          <p>For some of the questions in this test, you play the role of a manager of a call center. You will be given scenarios based on this situation.&nbsp;</p>
          <!-- <p>As per Treasury Board requirements, passing the test for this course is mandatory before you can exercise financial delegation.&nbsp;</p> -->
          <p>There are three sections to the test - one for each phase: planning, spending and reporting.&nbsp;</p>
          <p>The passing grade is 80% for each of these sections.</p>
          <p>Each section should take you around 15-20 minutes to complete.&nbsp;</p>
          <p>You can access course materials during the test and you can take it as many times as you need.</p>
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p><strong>NOTE :</strong> Ce cours et les tests finaux sont actuellement en mode brouillon et ne compteront pas officiellement dans les exigences de formation obligatoire pendant cette phase. Nous vous invitons à compléter les tests pour planifier, dépenser et faire un rapport et nous vous invitons à nous faire part de vos commentaires sur les questions et les fonctionnalités.&nbsp; Vos commentaires nous aideront à rendre le tout plus efficace.</p>
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
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q1')" qId="0" :refill="Refill('0')" @response="calculateAnswer($event,3,0)" />
              </b-tab>
              <b-tab title="02">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q2')" qId="1" :refill="Refill('1')" @response="calculateAnswer($event,2,1)" />
              </b-tab>
              <b-tab title="03">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q3')" qId="2" :refill="Refill('2')" @response="calculateAnswer($event,1,2)" />
              </b-tab>
              <b-tab title="04">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q4')" qId="3" :refill="Refill('3')" @response="calculateAnswer($event,4,3)" />
              </b-tab>
              <b-tab title="05">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q5')" qId="4" :refill="Refill('4')" @response="calculateAnswer($event,4,4)" />
              </b-tab>
              <b-tab title="06">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q6')" qId="5" :refill="Refill('5')" @response="calculateAnswer($event,3,5)" />
              </b-tab>
              <b-tab title="07">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q7')" qId="6" :refill="Refill('6')" @response="calculateAnswer($event,2,6)" />
              </b-tab>
              <b-tab title="08">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q8')" qId="7" :refill="Refill('7')" @response="calculateAnswer($event,3,7)" />
              </b-tab>
              <b-tab title="09">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q9')" qId="8" :refill="Refill('8')" @response="calculateAnswer($event,2,8)" />
              </b-tab>
              <b-tab title="10">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q10')" qId="9" :refill="Refill('9')" @response="calculateAnswer($event,4,9)" />
              </b-tab>
              <b-tab title="11">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q11')" qId="10" :refill="Refill('10')" @response="calculateAnswer($event,2,10)" />
              </b-tab>
              <b-tab title="12">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q12')" qId="11" :refill="Refill('11')" @response="calculateAnswer($event,1,11)" />
              </b-tab>
              <b-tab title="13">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q13')" qId="12" :refill="Refill('12')" @response="calculateAnswer($event,2,12)" />
              </b-tab>
              <b-tab title="14">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q14')" qId="13" :refill="Refill('13')" @response="calculateAnswer($event,3,13)" />
              </b-tab>
              <b-tab title="15">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q15')" qId="14" :refill="Refill('14')" @response="calculateAnswer($event,3,14)" />
              </b-tab>
              <b-tab title="16">
                <checkboxQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q16')" qId="15" :refill="Refill('15')" @response="arraysMatch($event,['1','2','4'],15)" />
              </b-tab>
              <b-tab title="17">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q17')" qId="16" :refill="Refill('16')" @response="calculateAnswer($event,2,16)" />
              </b-tab>
              <b-tab title="18">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q18')" qId="17" :refill="Refill('17')" @response="calculateAnswer($event,4,17)" />
              </b-tab>
              <b-tab title="19">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q19')" qId="18" :refill="Refill('18')" @response="calculateAnswer($event,2,18)" />
              </b-tab>
              <b-tab title="20">
                <radioQuiz exam :lock="quizLocked" :forceEmpty="isNull" :question="$t('Questions.q20')" qId="19" :refill="Refill('19')" @response="calculateAnswer($event,3,19)" />
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
      <p v-if="allDone"><b-button @click="markTest">{{$t('markTest')}}</b-button> <b-button @click="resetQuiz">{{$t('tryAgain')}}</b-button></p>
    </transition>
    
    <div class="bottomNav spendSection">
      <div class="spendSectionBar"><span>{{$t('spend')}}</span></div>
    
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
      <p v-if="allDone >= 80 && allDone<100">{{$t('Passed')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
      <p v-if="allDone==100"> {{$t('Excelled')}} <nuxt-link :to="localePath('index')">{{$t('homePage')}}</nuxt-link></p>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  name: "examTwo",
  data() {
    return {
      debugging: false,
      isNull:false,
      numQuestions: 20
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
            this.$store.commit('spend/resetQuiz')
          } else {}
        })
        .catch(err => {
          console.log(err)
        });
    },
    markTest() {
      this.$store.commit('spend/lockQuiz')
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
        this.$store.commit('spend/setScore', [qId.toString(), "01", answer])
      } else { this.$store.commit('spend/setScore', [qId.toString(), "'10'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          this.$store.commit('spend/setScore', [qId.toString(), "'10'", arr1])
          return false
        }
      }
      this.$store.commit('spend/setScore', [qId.toString(), "01", arr1])
    }
  },
  computed: {
      allDone(){
      return this.$store.getters['spend/getScore']
    },
    AlertIsDismissed: {
      get() { return this.$store.state.spend.AlertIsDismissed },
      set() { this.$store.commit('spend/dismissAlert') }
    },
    tabIndex: {
      set(tabIndex) { this.$store.commit('spend/setCurrentTab', tabIndex) },
      get() { return this.$store.state.spend.tabIndex }
    },
    answerScore() {
      return this.$store.state.spend.score
    },
    quizLocked() {
      return this.$store.state.spend.quizLocked
    }
  },
  watch: {
    answerScore() {
      const answers = Object.keys(this.answerScore).length
      if (answers === this.numQuestions) {
        this.$store.commit('spend/setComplete',this.checkPercentage())
      }
    }
  }
}
</script>
<style type="text/css" scoped>

/*Using a scoped 'deep' selector*/
>>> .qTable td,>>> .qTable th{
  border: 1px solid #4d4d4d;
  padding: .5em;
}
>>> .qTable th{
  background-color: #7d677d;
  color:#fff;
}
.spendSection {
  position: relative;
  height: 100px;
}

.spendSectionBar {
  text-transform: uppercase;
  position: absolute;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
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
  background-color: #7d677d;
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
  background-color: #AFA68E;
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
        "text": "You found a chatbot system that meets your needs. An annual license, plus installation and setup costs $5,650 including tax. What is the first step in exercising your spending authority?",
        "options": {
          "1": "Contact the provider and order the system using your acquisition card",
          "2": "Ask your team to conduct a thorough product research ",
          "3": "Ensure that you have sufficient funds in your budget to purchase the system",
          "4": "Order the system using a purchase order"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "You have spent $1,800 out of your $2,000 office supplies budget, and you don&rsquo;t plan on any other purchases for the year. An employee wants to attend a training event on chatbot systems and the registration fee is $150. However, you have spent all of your training budget. What will you do?",
        "options": {
          "1": "Tell the employee that the training budget has been spent",
          "2": "Use the money initially allocated for office supplies",
          "3": "Ask your director for additional funds",
          "4": "Tell the employee you will revisit their request next fiscal year"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Which statement about delegation of financial authority is true?",
        "options": {
          "1": "Authorities can only be delegated to positions",
          "2": "Authorities can only be delegated to persons",
          "3": "Authorities can only be delegated by persons exercising them",
          "4": "Authorities can only be delegated by persons with certain classifications"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Which of these duties does NOT require a responsibility centre manager to exercise delegated expenditure initiation authority?",
        "options": {
          "1": "Hospitality request",
          "2": "Conference registration fees",
          "3": "Small expenses such as a $20 purchase of craft materials",
          "4": "None of the above "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "Your organization&rsquo;s spending dollar limit when using an acquisition card is $2,500 per transaction. You have found ergonomic chairs that meet both yours and your administrative assistant&rsquo;s needs. The two chairs together are valued at $4,649 including tax. As a manager, what will you do?",
        "options": {
          "1": "Go ahead and authorize the commitment for both chairs",
          "2": "Authorize the purchase for both chairs using your admin&rsquo;s acquisition card",
          "3": "Ask another manager to purchase the chairs with their acquisition card",
          "4": "Authorize your admin&rsquo;s chair and have your supervisor authorize your chair"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "I am a spending mechanism that is used to obtain goods and/or services from a list of pre-qualified vendors, with pre-established terms and conditions. What am I?",
        "options": {
          "1": "Acquisition Card",
          "2": "Competitive Contract",
          "3": "Standing Offer",
          "4": "Supply Arrangement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q7": {
        "text": "Which of the following is a soft commitment? ",
        "options": {
          "1": "When you make an arrangement with a known supplier",
          "2": "When you reserve funds before the supplier is identified",
          "3": "When a transaction has been coded in the financial system",
          "4": "When you have a Memorandum of Understanding with another department"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q8": {
        "text": "Which of the following is NOT part of a financial coding system?",
        "options": {
          "1": "Budget component",
          "2": "Responsibility centre manager",
          "3": "Performance indicator",
          "4": "Transaction details"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "As a manager authorizing a transaction against your budget under section 34 of the Financial Administration Act, it is essential that you…",
        "options": {
          "1": "Get approval from senior management",
          "2": "Stay within your delegated limits",
          "3": "Have section 32 authority pursuant to the FAA",
          "4": "Ask section 33 if you can sign section 34"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "Mr. Wong works as a manager for a small department and has delegation under both sections 32 and 34. Which instrument gives Mr. Wong his delegation authority?",
        "options": {
          "1": "Financial Administration Act",
          "2": "Treasury Board policies",
          "3": "The organization&rsquo;s delegation chart",
          "4": "His signed delegation card"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Your administrative professional has received an order of office supplies, along with an invoice. The invoice includes 5 whiteboards but she tells you that none were received. What would you do? ",
        "options": {
          "1": "Pay the invoice now",
          "2": "Pay the invoice after all 5 whiteboards are received",
          "3": "Pay the invoice knowing the whiteboards are back-ordered",
          "4": "Pay the invoice now after speaking with the supplier"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "You receive an invoice for an employee's annual professional membership due in September. What do you do?",
        "options": {
          "1": "Pay the invoice for the full year now",
          "2": "Pay what is due between now and the end of the fiscal year ",
          "3": "Pay what is due between now and the end of the calendar year",
          "4": "Ask them to split the invoice between calendar years"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Who is responsible for financial coding accuracy?",
        "options": {
          "1": "The administrative assistant who records the codes in accordance with the organization&rsquo;s coding manual",
          "2": "Managers who have the authority to confirm and certify entitlement pursuant to section 34 of the Financial Administration Act",
          "3": "The financial officer who performs quality assurance of the file",
          "4": "The Chief Financial Officer&rsquo;s office"
        },
        "feedback": {
          "wrong": "",
          "right": ""
        }
      },
      "q14": {
        "text": "How much time does the government have to pay for received goods or services?",
        "options": {
          "1": "Within 15 working days from the receipt of an invoice or the acceptance of goods, whichever is later",
          "2": "Thirty days after signing of Section 34 ",
          "3": "Thirty days following receipt of the invoice",
          "4": "Immediately"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "The start date for your new employee has been pushed back. They will only be working ten months of the fiscal year instead of twelve months. Their salary is $60,000. What do you do?",
        "options": {
          "1": "Increase budget by $10,000",
          "2": "Reduce the actual expenditures by $10,000",
          "3": "Reduce annual forecast expenditures by $10,000",
          "4": "Increase commitments by $10,000"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "An analysis of variance can help in what ways?",
        "options": {
          "1": "Aids in the early reallocation of resources",
          "2": "Contributes to reducing the amounts lapsed at year-end",
          "3": "Stops all deficits from happening",
          "4": "Identifies mitigation strategies for risks"
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q17": {
        "text": "Your budget contains the provided line item:<br><table class='qTable'> <tbody> <tr><th>&nbsp;</th><th> <p>Budget</p> </th> <th> <p>Commitments</p> </th> <th> <p>Year-to-Date Actuals</p> </th> <th> <p>Annual Forecasted Expenditures</p> </th> </tr> <tr> <td> <p>Travel</p> </td> <td> <p>$8,400</p> </td> <td> <p>$0</p> </td> <td> <p>$2,400</p> </td> <td> <p>$8,400</p> </td> </tr> </tbody> </table><br>You approved $1,500 in travel for an employee. Looking at the provided line item, which columns would be increased?",
        "options": {
          "1": "Annual Forecasted Expenditures and Year-to-Date Actual",
          "2": "Annual Forecasted Expenditures and Commitments",
          "3": "Commitments only",
          "4": "Budget and Year-to-Date Actual"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "Your budget contains the provided line items:<br><table class='qTable'> <tbody> <tr> <th>&nbsp;</th> <th> <p>Budget</p> </th> <th> <p>Commitments</p> </th> <th> <p>Year-to-Date Actuals</p> </th> <th> <p>Annual Forecasted Expenditures</p> </th> </tr> <tr> <td> <p>Salary</p> </td> <td> <p>$60,000</p> </td> <td> <p>$20,000</p> </td> <td> <p>$40,000</p> </td> <td> <p>$60,000</p> </td> </tr> </tbody> </table><br>You just remembered that an employee has gone on leave without pay for two months. His yearly salary is $60,000. Where would you change the amount to $50,000?",
        "options": {
          "1": "Budget",
          "2": "Commitments",
          "3": "Year-to-Date Actual",
          "4": "Annual Forecasted Expenditures"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "What must you have set up to be able to pay your consultant in the new fiscal year using the budget from the previous fiscal year?",
        "options": {
          "1": "Budget carry–forward",
          "2": "Payable At Year-End",
          "3": "Receivable At Year-End",
          "4": "Post-dated cheque"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "It&rsquo;s April. As a responsibility centre manager, you must have set up a Payable At Year-End (PAYE) to charge your previous year&rsquo;s budget with the costs associated with the following transactions:",
        "options": {
          "1": "All outstanding commitments currently in the system in the previous fiscal year that just ended March 31, under your cost center.",
          "2": "The annual forecast expenditures that were not spent in the fiscal year ending March 31.",
          "3": "The estimated costs associated with goods and services that were delivered on or prior to March 31. ",
          "4": "All costs incurred during the first two weeks of the new fiscal year."
        },
        "feedback": {
          "right": "",
          "wrong": ""
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
        "text": "Vous avez trouvé un système de chatbot qui répond à vos besoins. Une licence annuelle, plus les frais d&rsquo;installation et de configuration, coûte 5&nbsp;650&nbsp;$, taxes incluses. Quelle est la première étape de l&rsquo;exercice de votre pouvoir de dépenser?",
        "options": {
          "1": "Communiquez avec le fournisseur et commandez le système à l&rsquo;aide de votre carte d&rsquo;achat",
          "2": "Demandez à votre équipe d&rsquo;effectuer une recherche approfondie sur le produit ",
          "3": "Assurez-vous d&rsquo;avoir suffisamment de fonds dans votre budget pour acheter le système",
          "4": "Commander le système à l&rsquo;aide d&rsquo;une commande d&rsquo;achat"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q2": {
        "text": "Vous avez dépensé 1&nbsp;800&nbsp;$ de votre budget de 2&nbsp;000&nbsp;$ pour les fournitures de bureau et vous ne prévoyez pas d&rsquo;autres achats pour l&rsquo;année. Un employé veut assister à une formation sur les systèmes de clavardage et les frais d&rsquo;inscription sont de 150 $. Cependant, vous avez dépensé la totalité de votre budget de formation. Qu&rsquo;allez-vous faire?",
        "options": {
          "1": "Dites à l&rsquo;employé que le budget de formation a été dépensé ",
          "2": "Utiliser l&rsquo;argent initialement alloué pour les fournitures de bureau",
          "3": "Demandez à votre directeur des fonds supplémentaires",
          "4": "Dites à l&rsquo;employé que vous réexaminerez sa demande au cours de la prochaine année financière"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q3": {
        "text": "Lequel des énoncés suivants concernant la délégation des pouvoirs en matière de finances est vrai?",
        "options": {
          "1": "Les pouvoirs ne peuvent être délégués qu&rsquo;aux postes.",
          "2": "Les pouvoirs ne peuvent être délégués qu&rsquo;à des personnes.",
          "3": "Les pouvoirs ne peuvent être délégués que par des personnes qui les exercent.",
          "4": "Les pouvoirs ne peuvent être délégués que par des personnes ayant certaines classifications"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q4": {
        "text": "Laquelle de ces fonctions n&rsquo;exige PAS qu&rsquo;un gestionnaire de centre de responsabilité exerce le pouvoir délégué d&rsquo;engager des dépenses?",
        "options": {
          "1": "Demande d&rsquo;activité d&rsquo;accueil",
          "2": "Frais d&rsquo;inscription à la conférence",
          "3": "Petites dépenses telles qu&rsquo;un achat de 20 $ de matériel d&rsquo;artisanat",
          "4": "Aucune de ces réponses"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q5": {
        "text": "La limite de dépenses de votre organisation lorsqu&rsquo;elle utilise une carte d&rsquo;achat est de 2&nbsp;500&nbsp;$ par transaction. Vous avez trouvé des chaises ergonomiques qui répondent à vos besoins et à ceux de votre adjointe administrative. Les deux chaises ensemble sont évaluées à 4&nbsp;649&nbsp;$, taxes comprises. En tant que gestionnaire, que ferez-vous?",
        "options": {
          "1": "Allez-y et autorisez l&rsquo;engagement pour les deux chaises",
          "2": "Autoriser l&rsquo;achat des deux chaises à l&rsquo;aide de la carte d&rsquo;achat de votre administrateur",
          "3": "Demander à un autre gestionnaire d&rsquo;acheter les chaises avec sa carte d&rsquo;achat",
          "4": "Autorisez la chaise de votre adjointe et demandez à votre superviseur d&rsquo;autoriser votre chaise"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q6": {
        "text": "Je suis un mécanisme de dépense qui sert à obtenir des biens ou des services à partir d&rsquo;une liste de fournisseurs préqualifiés, assortis de conditions préétablies. Que suis-je?",
        "options": {
          "1": "Carte d&rsquo;achat",
          "2": "Marché concurrentiel",
          "3": "Offre à commandes",
          "4": "Arrangement en matière d&rsquo;approvisionnement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        },
        "q7": {
          "text": "Vous aimeriez savoir si les clients sont satisfaits de l&rsquo;assistance en direct fournie par le centre d&rsquo;appels. Quel produit livrable serait ajouté à l&rsquo;activité pour y remédier?",
          "options": {
            "1": "Résoudre un appel, un SMS ou un chat en moins de 2 minutes",
            "2": "Moyenne de 4 sur 5 d&rsquo;après le sondage auprès des clients après le soutien",
            "3": "Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution."
          },
          "feedback": {
            "1": "",
            "2": "",
            "3": "",
            "4": ""
          }
        }
      },
      "q7": {
        "text": "Lequel des engagements suivants est un engagement non contraignant?",
        "options": {
          "1": "Lorsque vous faites un arrangement avec un fournisseur connu",
          "2": "Lorsque vous réservez des fonds avant que le fournisseur ne soit identifié",
          "3": "Lorsqu&rsquo;une transaction a été codée dans le système financier",
          "4": "Lorsque vous avez un protocole d&rsquo;entente avec un autre ministère"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        },
        "q7": {
          "text": "Vous aimeriez savoir si les clients sont satisfaits de l&rsquo;assistance en direct fournie par le centre d&rsquo;appels. Quel produit livrable serait ajouté à l&rsquo;activité pour y remédier?",
          "options": {
            "1": "Résoudre un appel, un SMS ou un chat en moins de 2 minutes",
            "2": "Moyenne de 4 sur 5 d&rsquo;après le sondage auprès des clients après le soutien",
            "3": "Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution."
          },
          "feedback": {
            "1": "",
            "2": "",
            "3": "",
            "4": ""
          }
        }
      },
      "q8": {
        "text": "Lequel des éléments suivants NE fait PAS partie d&rsquo;un système de codage financier? ",
        "options": {
          "1": "Composante budgétaire",
          "2": "Gestionnaire de centre de responsabilité",
          "3": "Indicateur de performance",
          "4": "Détails de la transaction"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q9": {
        "text": "En tant que gestionnaire autorisant une opération sur votre budget en vertu de l&rsquo;article 34 de la Loi sur la gestion des finances publiques, il est essentiel que vous...",
        "options": {
          "1": "Obtenir l&rsquo;approbation de la haute direction",
          "2": "Restez dans les limites des pouvoirs qui vous sont délégués",
          "3": "Avoir le pouvoir de l&rsquo;article 32 en vertu de la LGFP",
          "4": "Demandez à la section 33 si vous pouvez signer la section 34"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q10": {
        "text": "M. Wong travaille comme gestionnaire d&rsquo;un petit ministère et a reçu une délégation de pouvoirs en vertu des articles 32 et 34. Quel est l'instrument qui confère à M. Wong son pouvoir de délégation?",
        "options": {
          "1": "Loi sur la gestion des finances publiques",
          "2": "Politiques du Conseil du Trésor",
          "3": "L'organigramme de délégation de l'organisation",
          "4": "Sa carte de délégation signée"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q11": {
        "text": "Votre professionnel administratif a reçu une commande de fournitures de bureau, accompagnée d&rsquo;une facture. La facture comprend 5 tableaux blancs mais elle vous dit qu&rsquo;aucun n&rsquo;a été reçu. Que feriez-vous?",
        "options": {
          "1": "Payez la facture maintenant",
          "2": "Payer la facture après réception des 5 tableaux blancs",
          "3": "Payer la facture en sachant que les tableaux blancs sont en rupture de stock",
          "4": "Payer la facture maintenant après avoir parlé avec le fournisseur"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q12": {
        "text": "Vous recevez une facture pour l&rsquo;adhésion professionnelle annuelle d&rsquo;un employé qui doit être payée en septembre. Que faites-vous?",
        "options": {
          "1": "Payez maintenant la facture pour l&rsquo;année entière",
          "2": "Payer ce qui est dû d&rsquo;ici la fin de l&rsquo;exercice financier ",
          "3": "Payer ce qui est dû d&rsquo;ici la fin de l&rsquo;année civile ",
          "4": "Demandez-leur de fractionner la facture entre les années civiles"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q13": {
        "text": "Qui est responsable de l&rsquo;exactitude du codage financier?",
        "options": {
          "1": "L'adjoint administratif qui enregistre les codes conformément au manuel de codage de l'organisation",
          "2": "Les gestionnaires qui ont le pouvoir de confirmer et d&rsquo;attester le droit aux prestations en vertu de l&rsquo;article 34 de la Loi sur la gestion des finances publiques",
          "3": "L'agent financier qui effectue l&rsquo;assurance de la qualité du dossier",
          "4": "Le bureau du directeur financier "
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q14": {
        "text": "Combien de temps le gouvernement a-t-il pour payer les marchandises et services?",
        "options": {
          "1": "Dans les 15 jours ouvrables suivant la réception d&rsquo;une facture ou l&rsquo;acceptation des marchandises, selon la dernière de ces dates",
          "2": "Trente jours après la signature de l&rsquo;article 34",
          "3": "Trente jours après réception de la facture",
          "4": "Immédiatement"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q15": {
        "text": "La date de début de votre nouveau salarié a été repoussée. Ils ne travailleront que dix mois de l&rsquo;exercice financier au lieu de douze. Leur salaire est de 60&nbsp;000&nbsp;$. Que faites-vous?",
        "options": {
          "1": "Augmentez le budget de 10&nbsp;000&nbsp;$.",
          "2": "Réduire les dépenses réelles de 10&nbsp;000&nbsp;$.",
          "3": "Réduire de 10&nbsp;000&nbsp;$ les dépenses annuelles prévues",
          "4": "Augmenter les engagements de 10&nbsp;000&nbsp;$."
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q16": {
        "text": "Une analyse de la variance peut aider de quelles façons?",
        "options": {
          "1": "Aide à la réaffectation précoce des ressources",
          "2": "Contribue à réduire les montants périmés à la fin de l&rsquo;exercice",
          "3": "Empêche tous les déficits de se produire ",
          "4": "Identifie les stratégies d&rsquo;atténuation des risques"
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      },
      "q17": {
        "text": "Votre budget contient le poste fourni :<br><table class='qTable'><tbody><tr><th>&nbsp;</th><th><p>Budget</p></th><th><p>Engagements</p></th><th><p>Dépenses réelles depuis le début de l&rsquo;exercice</p></th><th><p>Dépenses annuelles prévues</p></th></tr><tr><td><p>Voyages</p></td><td><p>8&nbsp;400&nbsp;$</p></td><td><p>0 $</p></td><td><p>2&nbsp;400&nbsp;$</p></td><td><p>8&nbsp;400&nbsp;$</p></td></tr></tbody></table><br>Vous avez approuvé un déplacement de 1&nbsp;500&nbsp;$ pour un employé. En regardant le poste budgétaire fourni, quelles colonnes seraient augmentées?",
        "options": {
          "1": "Dépenses annuelles prévues et dépenses réelles depuis le début de l&rsquo;exercice",
          "2": "Prévisions annuelles des dépenses et des engagements",
          "3": "Engagements seulement",
          "4": "Budget et chiffres réels à ce jour"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q18": {
        "text": "Votre budget contient les postes individuels fournis :<br><table class='qTable'><tbody><tr><th>&nbsp;</th><th><p>Budget</p></th><th><p>Engagements</p></th><th><p>Dépenses réelles depuis le début de l&rsquo;exercice</p></th><th><p>Dépenses annuelles prévues</p></th></tr><tr><td><p>Salaire</p></td><td><p>60&nbsp;000&nbsp;$</p></td><td><p>20&nbsp;000&nbsp;$</p></td><td><p>40&nbsp;000&nbsp;$</p></td><td><p>60&nbsp;000&nbsp;$</p></td></tr></tbody></table><br>Vous venez de vous rappeler qu&rsquo;un employé est en congé non payé depuis deux mois. Son salaire annuel est de 60&nbsp;000&nbsp;$. Où changeriez-vous le montant à 50&nbsp;000&nbsp;$?",
        "options": {
          "1": "Budget",
          "2": "Engagements",
          "3": "Depuis le début de l&rsquo;exercice Données réelles",
          "4": "Dépenses annuelles prévues"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q19": {
        "text": "Que devez-vous avoir mis en place pour pouvoir payer votre consultant au cours du nouvel exercice en utilisant le budget de l&rsquo;exercice précédent?",
        "options": {
          "1": "Report de budget",
          "2": "Payable à la fin de l&rsquo;année",
          "3": "Créances à la fin de l&rsquo;exercice",
          "4": "Chèque postdaté"
        },
        "feedback": {
          "1": "",
          "2": "",
          "3": "",
          "4": ""
        }
      },
      "q20": {
        "text": "On est en avril. À titre de gestionnaire de centre de responsabilité, vous devez avoir établi un CAFE (créditeur à la fin de l&rsquo;exercice) pour imputer à votre budget de l&rsquo;année précédente les coûts associés aux transactions suivantes",
        "options": {
          "1": "Tous les engagements en cours actuellement dans le système au cours de l&rsquo;exercice précédent qui vient de se terminer le 31 mars, sous votre centre de coûts.",
          "2": "Les dépenses annuelles prévues qui n&rsquo;ont pas été dépensées au cours de l&rsquo;exercice financier se terminant le 31 mars.",
          "3": "Les coûts estimatifs associés aux biens et services qui ont été livrés le 31 mars ou avant.",
          "4": "Tous les coûts engagés au cours des deux premières semaines du nouvel exercice financier."
        },
        "feedback": {
          "right": "",
          "wrong": ""
        }
      }
    }
  }
}</i18n>
