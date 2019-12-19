<template>
  <div>
    <h2 class="pageTitle">{{$t('Test')}}</h2>
    <p>Question {{tabIndex+1}} / 20</p>
    <b-container fluid>
      <b-row>
        <b-col class="col"></b-col>
        <b-col class="col-10">
          <b-card no-body>
            <b-tabs card v-model="tabIndex">
              <b-tab title="01">
                <radioQuiz :question="$t('q1')" qId="0" @response="calculateAnswer($event,3,0)" />
              </b-tab>
              <b-tab title="02">
                <radioQuiz :question="$t('q2')" qId="1" @response="calculateAnswer($event,3,1)" />
              </b-tab>
              <b-tab title="03">
                <radioQuiz :question="$t('q3')" qId="2" @response="calculateAnswer($event,2,2)" />
              </b-tab>
              <b-tab title="04">
                <radioQuiz :question="$t('q4')" qId="3" @response="calculateAnswer($event,2,3)" />
              </b-tab>
              <b-tab title="05">
                <radioQuiz :question="$t('q5')" qId="4" @response="calculateAnswer($event,3,4)" />
              </b-tab>
              <b-tab title="06">
                <radioQuiz :question="$t('q6')" qId="5" @response="calculateAnswer($event,1,5)" />
              </b-tab>
              <b-tab title="07">
                <radioQuiz :question="$t('q7')" qId="6" @response="calculateAnswer($event,2,6)" />
              </b-tab>
              <b-tab title="08">
                <radioQuiz :question="$t('q8')" qId="7" @response="calculateAnswer($event,2,7)" />
              </b-tab>
              <b-tab title="09">
                <radioQuiz :question="$t('q9')" qId="8" @response="calculateAnswer($event,1,8)" />
              </b-tab>
              <b-tab title="10">
                <radioQuiz :question="$t('q10')" qId="9" @response="calculateAnswer($event,1,9)" />
              </b-tab>
              <b-tab title="11">
                <radioQuiz :question="$t('q11')" qId="10" @response="calculateAnswer($event,2,10)" />
              </b-tab>
              <b-tab title="12">
                <radioQuiz :question="$t('q12')" qId="11" @response="calculateAnswer($event,1,11)" />
              </b-tab>
              <b-tab title="13">
                <checkboxQuiz :question="$t('q13')" qId="12" @response="arraysMatch($event,['2','3'],12)" />
              </b-tab>
              <b-tab title="14">
                <radioQuiz :question="$t('q14')" qId="13" @response="calculateAnswer($event,2,13)" />
              </b-tab>
              <b-tab title="15">
                <radioQuiz :question="$t('q15')" qId="14" @response="calculateAnswer($event,2,14)" />
              </b-tab>
              <b-tab title="16">
                <radioQuiz :question="$t('q16')" qId="15" @response="calculateAnswer($event,2,15)" />
              </b-tab>
              <b-tab title="17">
                <radioQuiz :question="$t('q17')" qId="16" @response="calculateAnswer($event,2,16)" />
              </b-tab>
              <b-tab title="18">
                <radioQuiz :question="$t('q18')" qId="17" @response="calculateAnswer($event,2,17)" />
              </b-tab>
              <b-tab title="19">
                <radioQuiz :question="$t('q19')" qId="18" @response="calculateAnswer($event,2,18)" />
              </b-tab>
              <b-tab title="20">
                <checkboxQuiz :question="$t('q20')" qId="19" @response="arraysMatch($event,['1','2','3'],19)" />
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
    <div class="progressBar">
      <span @click="tabIndex=index" v-for="(square,index) in 20" :class="['square',{'filled':answerScore[index],'Qactive':tabIndex==index}]" />
    </div>
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{$t('plan')}}</span></div>
    </div>
    <p v-if="debugging==true">{{answerScore}}</p>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  data() {
    return {
      debugging: true,
      tabIndex:this.$store.state.plan.tabIndex,
      answers: {}
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz
  },
  methods: {
    calculateAnswer(answer, correct, qId) {
      if (answer == correct) {
        this.$store.commit('plan/setScore', [qId.toString(), "'right'", answer])
      } else { this.$store.commit('plan/setScore', [qId.toString(), "'wrong'", answer]) }
    },
    arraysMatch(arr1, arr2, qId) {
      if (arr1.length !== arr2.length) {
        $store.commit('plan/setScore', qId.toString(), 'wrong')
        return false
      }
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) {
          $store.commit('plan/setScore', qId.toString(), 'wrong')
          return false
        }
      }
      $store.commit('plan/setScore', qId.toString(), 'right')

    }
  },
  computed: {
    // tabIndex: {
    //   get() { return this.$store.state.plan.tabIndex || this.tabIndex },
    //     set(newValue) {
    //       this.$store.commit('setCurrentTab', newValue)
    //     }
    // },
    answerScore() {
      return this.$store.state.plan.score
    }
  }
}
</script>
<style type="text/css" scoped>
.Qactive {
  box-shadow: 0px 5px 5px #00000088;
  /*outline: 2px solid #1000ff33;*/
}

.planSection {
  position: relative;
  height: 100px;
}

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
  margin-top: 2em;
  display: flex;
  justify-content: space-evenly;

}

.square {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: #DDD;
  cursor: pointer;
}

.filled {
  background-color: #587C84;
}
</style>
<i18n>{
  "en": {
  "q1": {
  "text": "Which of the following is <strong style='text-transform: uppercase;'>not</strong> included in a work plan?",
  "options": {
  "1": "Activity",
  "2": "Deliverable",
  "3": "Results",
  "4": "Risk"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q2": {
  "text": "Where are government priorities first announced?",
  "options": {
  "1": "In the Federal Budget",
  "2": "In the Speech from the Throne",
  "3": "In a Mandate Letter",
  "4": "In a Treasury Board directive"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q3": {
  "text": "Where would you find detailed information on what your organization does and what it plans to do over the next three years?",
  "options": {
  "1": "Mandate Letter",
  "2": "Departmental Plan",
  "3": "Departmental Results Report",
  "4": "Management Accountability Framework"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q4": {
  "text": "Your 360 Scan reiterates for you that your organization has a low risk tolerance. At the same time, the Deputy Minister wants to see more innovation. What is the best course of action to take as these opposing forces impact your work plan? ",
  "options": {
  "1": "Wait until others have successfully implemented an innovation project ",
  "2": "Start a small scale innovation project and learn from it",
  "3": "Commence a highly-visible innovation project with current staffing levels",
  "4": "Keep things as they are"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q5": {
  "text": "Which part of the work plan should be updated with &ldquo;Establish collective staffing pools&rdquo; to address call centre risks like high turnover and challenges in staffing?",
  "options": {
  "1": "Likelihood",
  "2": "Impact",
  "3": "Mitigation",
  "4": "Resources"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q6": {
  "text": "Last year, you did not meet your target of answering calls within 30 seconds. Call centers are becoming more automated, an approach favored by senior management. Which activity is the most appropriate to take as you draft your work plan?",
  "options": {
  "1": "Incorporate digital solutions",
  "2": "Change the target",
  "3": "Hire more staff",
  "4": "Conduct team meetings"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q7": {
  "text": "You’d like to find out if clients are satisfied with the live support provided by the call center. What deliverable would be added to the activity “Offer live support to clients” to address this?",
  "options": {
  "1": "Create a client satisfaction survey",
  "2": "Resolve call, text or chat within 2 minutes ",
  "3": "One call, text or chat out of 10 is escalated for resolution",
  "4": "Answer calls within 30 seconds"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q8": {
  "text": "You have added a new activity to your work plan about offering support to clients through automated means. This would be accomplished by implementing a chatbot system available 24 hours a day. The chatbot would respond to customer requests online without involving an agent. What deliverable would be added to the work plan for this activity?",
  "options": {
  "1": "Change call center operational hours to 24/7",
  "2": "99% uptime for live chat system",
  "3": "30% of online requests would be resolved by chatbot",
  "4": "Chatbot interactions will be monitored by a call center agent "
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q9": {
  "text": "With any online technology, like the chatbot system, there is the risk of a privacy breach. &ldquo;Secure firewall and encryption&rdquo; could be added to the work plan as a:",
  "options": {
  "1": "Sub-activity",
  "2": "Mitigation",
  "3": "Impact",
  "4": "Directorate priority"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q10": {
  "text": "Which of the following would be a risk for the new activity “Offer support to clients through automated means”? ",
  "options": {
  "1": "Staff turnover ",
  "2": "Not meeting the performance standard ",
  "3": "Operational hours not staffed",
  "4": "System breakdown "
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q11": {
  "text": "Temporary Help to deliver day-to-day activities is paid out of which budget? ",
  "options": {
  "1": "Operating & Maintenance (O&M)",
  "2": "Salary",
  "3": "Grants and Contributions (Gs&Cs)",
  "4": "Capital"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q12": {
  "text": "Which of the following details the total projected expenditures for the upcoming fiscal year?",
  "options": {
  "1": "Departmental Results Report",
  "2": "Interim Supply",
  "3": "Supplementary Estimates",
  "4": "Departmental Plan"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q13": {
  "text": "Which reports provide information for a full fiscal cycle? ",
  "options": {
  "1": "Full Supply",
  "2": "Public Accounts",
  "3": "Departmental Results Report",
  "4": "Departmental Plan"
  },
  "feedback": {
  "wrong": "",
  "right": ""
  }
  },
  "q14": {
  "text": "Your IT infrastructure costs have increased 10% per year for the past few years. If your current costs are $20,000, what amount will you put in your budget requirements for next year? ",
  "options": {
  "1": "$20,000",
  "2": "$20,200",
  "3": "$22,000 ",
  "4": "$22,220"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q15": {
  "text": "For last year’s office supplies, you set aside $3,000, and $2,500 was spent. For the current year, you are forecasting to spend $2,500. What amount will you put in your budget requirements for next year?",
  "options": {
  "1": "$2,000",
  "2": "$2,500",
  "3": "$3,000 ",
  "4": "$5,500"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q16": {
  "text": "You have consistently set aside $8,000 year after year for call center agent training. Last year, you spent $5,000 on training. This year, you’re forecasting to spend $10,500. What would you do for your budget requirements for next year?",
  "options": {
  "1": "Ask for the amount you forecast to spend this year ",
  "2": "Ask for the amount you spent last year",
  "3": "Ask for the same amount you’ve asked for year after year",
  "4": "Ask why there’s been a fluctuation to inform your forecast"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q17": {
  "text": "You added an activity to your work plan about implementing a chatbot system by mid-year. Your initial research shows that chatbot systems cost between $25 and $100 per month. What amount will you put in your budget requirements? ",
  "options": {
  "1": "$300",
  "2": "$600",
  "3": "$900",
  "4": "$1,200"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q18": {
  "text": "The current year’s Salary budget is $760,000. You’re creating a new IT Analyst position to be staffed next year. The annual salary will be $60,000. You’ll need time to hire them and estimate they will start in June and only work 10 months. What will your Salary budget requirement be next year (assuming everything else remains the same)? ",
  "options": {
  "1": "$760,000",
  "2": "$800,000",
  "3": "$810,000",
  "4": "$820,000"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q19": {
  "text": "The chatbot system implementation will incur $15,000 in IT costs for hosting which will be provided by another department on a cost recovery basis. This will be formalized in an MOU between organizations. Hosting costs in your budget will be …?",
  "options": {
  "1": "$15,000 Non-discretionary ",
  "2": "$15,000 Discretionary ",
  "3": "$15,000 Grants and Contributions",
  "4": "$15,000 Capital"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q20": {
  "text": "You’ve submitted your budget requirements and your director asks you to cut travel from $20,000 to $12,000. What action could you take?",
  "options": {
  "1": "Cut some discretionary costs",
  "2": "Explore video conferencing options ",
  "3": "Change the budget requirement to $12,000",
  "4": "Ask finance to find $8,000"
  },
  "feedback": {
  "right": "",
  "wrong": ""
  }
  }
  },
  "fr": {
  "q1": {
  "text": "Lequel des éléments suivants n'est <strong style='text-transform:uppercase'>pas</strong> inclus dans un plan de travail?",
  "options": {
  "1": "Activité",
  "2": "Produit livrable",
  "3": "Résultats",
  "4": "Risque"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q2": {
  "text": "Où les priorités du gouvernement sont-elles d'abord annoncées?",
  "options": {
  "1": "Dans le budget fédéral",
  "2": "Dans le discours du Trône",
  "3": "Dans une lettre de mandat",
  "4": "Dans une directive du Conseil du Trésor"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q3": {
  "text": "Où trouveriez-vous des renseignements détaillés sur ce que votre organisation fait et ce qu'elle prévoit faire au cours des trois prochaines années?",
  "options": {
  "1": "Lettre de mandat",
  "2": "Plan ministériel",
  "3": "Rapport ministériel sur les résultats"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q4": {
  "text": "Qui est responsable de l'élaboration des plans de travail et des budgets de votre organisation?",
  "options": {
  "1": "Administrateurs généraux",
  "2": "Adjoints administratifs",
  "3": "Gestionnaires de centre de responsabilité"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q5": {
  "text": "Votre analyse à 360° réitère pour vous que votre organisation a une faible tolérance au risque. En même temps, le sous-ministre veut voir plus d'innovation. Quelle est la meilleure ligne de conduite à adopter, car ces forces opposées ont une incidence sur votre plan de travail?",
  "options": {
  "1": "Attendre que d'autres aient mis en œuvre avec succès un projet d'innovation",
  "2": "Lancer un projet d'innovation à petite échelle et en tirer des leçons",
  "3": "Lancer un projet d'innovation très visible avec les effectifs actuels."
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q6": {
  "text": "Vous dirigez un centre d'appels qui a connu un taux de roulement élevé. De plus, votre ministère a un taux d'attrition élevé. Pour ces raisons, il est difficile de doter des postes dans l'organisation. Laquelle des stratégies d'atténuation suivantes pourrait aider à atténuer ce risque?",
  "options": {
  "1": "Former le personnel",
  "2": "Tenir l'information à jour",
  "3": "Établir des bassins de dotation collective",
  "4": "Établir un programme de mentorat"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q7": {
  "text": "L'an dernier, vous n'avez pas atteint votre objectif de répondre aux appels dans les 30 secondes. Les centres d'appels sont de plus en plus automatisés, une approche privilégiée par la haute direction. Quelle est l'activité la plus appropriée lorsque vous rédigez votre plan de travail?",
  "options": {
  "1": "Incorporer des solutions numériques",
  "2": "Changer la cible",
  "3": "Embaucher plus de personnel"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q8": {
  "text": "Vous aimeriez savoir si les clients sont satisfaits de l'assistance en direct fournie par le centre d'appels. Quel produit livrable serait ajouté à l'activité pour y remédier?",
  "options": {
  "1": "Résoudre un appel, un SMS ou un chat en moins de 2 minutes",
  "2": "Moyenne de 4 sur 5 d'après le sondage auprès des clients après le soutien",
  "3": "Un appel, un message texte ou un clavardage sur 10 est soumis à une escalade pour résolution."
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": "",
  "4": ""
  }
  },
  "q9": {
  "text": "Vous avez ajouté une nouvelle activité à votre plan de travail concernant l'offre de soutien aux clients par des moyens automatisés. Pour ce faire, il faudrait mettre en place un système de chatbot disponible 24 heures sur 24. Le chatbot répondrait aux demandes des clients en ligne sans l'intervention d'un agent. Quel produit livrable serait ajouté au plan de travail pour cette activité?",
  "options": {
  "1": "Changer les heures d'ouverture du centre d'appels à 24 heures sur 24, 7 jours sur 7.",
  "2": "30% des demandes en ligne seraient résolues par chatbot",
  "3": "Les interactions Chatbot seront surveillées par un agent du centre d'appels."
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q10": {
  "text": "L'aide temporaire est payée à partir de quel budget? ",
  "options": {
  "1": "Exploitation et entretien (F et E)",
  "2": "Salaire",
  "3": "Subventions et contributions (S et C)"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q11": {
  "text": "L'argent donné à un organisme pour le soutien à l'apprentissage proviendrait de quel budget?",
  "options": {
  "1": "Salaire",
  "2": "Subventions et contributions (S et C)",
  "3": "Capital"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q12": {
  "text": "Le Budget principal des dépenses détaille les dépenses totales prévues du gouvernement pour le prochain exercice financier.",
  "options": {
  "1": "Vrai",
  "2": "Faux"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q13": {
  "text": "Quels rapports fournissent des renseignements pour un cycle financier complet?",
  "options": {
  "1": "Approvisionnement complet",
  "2": "Comptes publics",
  "3": "Rapport ministériel sur les résultats "
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q14": {
  "text": "Pour les fournitures de bureau de l'an dernier, vous avez mis de côté 3 000 $, et 2 500 $ ont été dépensés. Pour l'année en cours, vous prévoyez dépenser 2 500 $. Quel montant allez-vous mettre dans votre budget pour l'année prochaine? ",
  "options": {
  "1": "2 500$",
  "2": "3 000$",
  "3": "5 500$"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q15": {
  "text": "Vous avez toujours mis de côté 8 000 $ année après année pour la formation des agents de centre d'appels. L'an dernier, vous avez dépensé 5 000 $ en formation. Cette année, vous prévoyez dépenser 10 500 $. Que feriez-vous pour votre budget de l'année prochaine?",
  "options": {
  "1": "Demandez le montant que vous prévoyez dépenser cette année ",
  "2": "Demandez le même montant que vous avez demandé année après année.",
  "3": "Demandez pourquoi il y a eu une fluctuation pour éclairer vos prévisions. "
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q16": {
  "text": "Vous avez ajouté une activité à votre plan de travail concernant la mise en œuvre d'un système de chatbot d'ici le milieu de l'année. Votre recherche initiale montre que les systèmes de chatbot coûtent entre 25 $ et 100 $ par mois. Quel montant allez-vous mettre dans votre budget? ",
  "options": {
  "1": "300$",
  "2": "600$",
  "3": "1 200$"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q17": {
  "text": "Le budget salarial de l'année en cours est de 760 000 $. Vous créez un nouveau poste d'analyste en TI qui sera doté l'an prochain. Le salaire annuel sera de 60 000 $. Vous aurez besoin de temps pour les embaucher et estimez qu'ils commenceront en juin et ne travailleront que 10 mois. Quel sera votre budget salarial pour l'année prochaine (en supposant que tout le reste demeure inchangé)?",
  "options": {
  "1": "760 000$",
  "2": "810 000$",
  "3": "820 000$"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q18": {
  "text": "La mise en œuvre du système de chatbot entraînera des coûts de 15 000 $ en TI pour l'hébergement, qui seront fournis par un autre ministère selon le principe du recouvrement des coûts. Cela sera officialisé dans un protocole d'entente entre les organisations. Les frais d'hébergement dans votre budget seront de …? ",
  "options": {
  "1": "15 000 $ Non discrétionnaire ",
  "2": "15 000 $ Discrétionnaire ",
  "3": "15 000 $ Immobilisations"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q19": {
  "text": "Vous avez soumis vos exigences budgétaires. Votre directeur est favorable à la formation d'un analyste en TI, d'un agent principal du centre d'appels et d'un agent subalterne du centre d'appels sur le système chatbot, que vous n'aviez pas inclus au départ. Le coût total sera de 1 500 $. Quelles mesures allez-vous prendre pour mettre à jour votre budget?",
  "options": {
  "1": "Laisser le budget de formation tel quel",
  "2": "Réduire une partie de la formation prévue pour couvrir les 1 500 $.",
  "3": "Ajoutez 1 500 $ à votre budget de formation"
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  },
  "q20": {
  "text": "Vous avez soumis vos exigences budgétaires et votre directeur vous demande de réduire vos déplacements de 20 000 $ à 12 000 $. Quelles mesures pourriez-vous prendre? ",
  "options": {
  "1": "Réduire certains coûts discrétionnaires ",
  "2": "Explorez les options de vidéoconférence",
  "3": "Modifier les exigences budgétaires à 12 000 $."
  },
  "feedback": {
  "1": "",
  "2": "",
  "3": ""
  }
  }
  }
  }</i18n>