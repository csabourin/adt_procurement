<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <radioQuiz :question="$t('q1')" qId="1" />
          </b-tab>
          <b-tab title="Question 2">
            <radioQuiz :question="$t('q2')" qId="2" />
          </b-tab>
          <b-tab title="Question 3">
            <radioQuiz :question="$t('q3')" qId="3" />
          </b-tab>
          <b-tab title="Question 4">
            <checkboxQuiz :question="$t('q4')" qId="4" :Answer="['1','2','3','4']"/>
          </b-tab>
          <b-tab title="Question 5">
            <checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1','3','4']"/>
          </b-tab>
          <b-tab title="Question 6">
            <checkboxQuiz :question="$t('q6')" qId="6" :Answer="['1','4']"/>
          </b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=5">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one"
  }
  ,
  "fr":{
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { radioQuiz, checkboxQuiz},
  data() {
    return {
      tabIndex: 0

    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
      }, 300);
    }
  }
}

</script>
<i18n>{
  "en": {
  "q1": {
  "text": "What is the first phase of the life cycle materiel management?",
  "options": {
  "1": "Acquisition",
  "2": "Divestiture",
  "3": "Operation, use and maintenance",
  "4": "Planning"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Planning is the first phase of the life cycle materiel management."
  },
  "q2": {
  "text": "The acquisition phase most often requires the participation of which of the following organizations?",
  "options": {
  "1": "Department of Finance Canada",
  "2": "Global Affairs Canada",
  "3": "Public Services and Procurement Canada",
  "4": "Treasury Board of Canada Secretariat"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-right' /> <strong>Correct!</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "The acquisition phase often requires the participation of Public Services and Procurement Canada."
  },
  "q3": {
  "text": "Receiving and inspecting the goods is part of which life cycle materiel management phase?",
  "options": {
  "1": "Acquisition",
  "2": "Divestiture",
  "3": "Operation, use and maintenance",
  "4": "Planning"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "Receiving and inspecting the goods is part of the acquisition phase of the life cycle materiel management."
  },
  "q4": {
  "text": "Why should records be maintained?",
  "options": {
  "1": "To track inventory holdings and locations",
  "2": "To track consumption and usage",
  "3": "To track repairs",
  "4": "To track costs"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Records should be maintained to track inventory holdings and locations, consumption, usage, repairs, and costs."
  },
  "q5": {
  "text": "What should be done with materiel that is no longer cost-effective to operate?",
  "options": {
  "1": "Dispose of the materiel",
  "2": "Keep the materiel",
  "3": "Replace the materiel",
  "4": "Reallocate the materiel"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "When materiel is no longer cost-effective to operate, you should dispose, replace, or reallocate it. Keeping it would only lead to higher costs."
  },
  "q6": {
  "text": "Which materiel should be considered for divestment?",
  "options": {
  "1": "Materiel that is no longer cost-effective to use and operate",
  "2": "Materiel that is more than 10 years old",
  "3": "Materiel that is no longer under warranty",
  "4": "Materiel that is considered surplus"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Materiel that is no longer cost-effective to use and operate and materiel that is considered surplus should be considered for divestment."
  }
  },
  "fr": {
  "q1": {
  "text": "Quelle est la première phase de la gestion du cycle de vie du matériel?",
  "options": {
  "1": "Acquisition",
  "2": "Dessaisissement",
  "3": "Exploitation, utilisation et entretien",
  "4": "Planification"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "La planification est la première phase de la gestion du cycle de vie du matériel."
  },
  "q2": {
  "text": "Parmi les organisations suivantes, laquelle doit souvent participer à la phase d’acquisition?",
  "options": {
  "1": "Ministère des Finances",
  "2": "Affaires mondiales Canada",
  "3": "Services publics et Approvisionnement Canada",
  "4": "Secrétariat du Conseil du Trésor du Canada"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-right' /> <strong>Correct!</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "Services publics et Approvisionnement Canada doit souvent participer à la phase d’acquisition."
  },
  "q3": {
  "text": "De quelle phase de gestion du cycle de vie du matériel la réception et l’inspection des marchandises font-elles partie?",
  "options": {
  "1": "Acquisition",
  "2": "Dessaisissement",
  "3": "Exploitation, utilisation et entretien",
  "4": "Planification"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  },
  "conclusion": "La réception et l’inspection des marchandises font partie de la phase d’acquisition de la gestion du cycle de vie du matériel."
  },
  "q4": {
  "text": "Pourquoi faut-il tenir des registres?",
  "options": {
  "1": "Pour suivre les stocks et leurs emplacements",
  "2": "Pour suivre la consommation et l’utilisation",
  "3": "Pour suivre les réparations",
  "4": "Pour suivre les coûts"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Des registres doivent être tenus pour suivre les stocks et leurs emplacements, la consommation, l’utilisation, les réparations et les coûts."
  },
  "q5": {
  "text": "Que faire du matériel dont l’exploitation n’est plus rentable?",
  "options": {
  "1": "Éliminer le matériel",
  "2": "Conserver le matériel",
  "3": "Remplacer le matériel",
  "4": "Réaffecter le matériel"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Lorsque l’exploitation du matériel n’est plus rentable, vous devez l’éliminer, le remplacer ou le réaffecter. Le conserver ne ferait qu’entraîner une augmentation des coûts."
  },
  "q6": {
  "text": "Quel matériel doit-on envisager de dessaisir?",
  "options": {
  "1": "Matériel dont l’utilisation et l’exploitation ne sont plus rentables",
  "2": "Matériel âgé de plus de 10 ans",
  "3": "Matériel qui n’est plus sous garantie",
  "4": "Matériel considéré comme excédentaire"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Le matériel dont l’utilisation et l’exploitation ne sont plus rentables et le matériel considéré comme excédentaire doivent être pris en considération pour le dessaisissement."
  }
  }
  }</i18n>
<style type="text/css" scoped>
/*Using a scoped 'deep' selector*/
.qTable td,
.qTable th {
  border: 1px solid #4d4d4d;
  padding: .5em;
}

.qTable th {
  background-color: #7d677d;
  color: #fff;
}

</style>
