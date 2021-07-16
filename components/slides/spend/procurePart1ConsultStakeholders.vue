<template>
  <span>
    <div>
      <br>
      <p>{{$t('Introduction')}}</p>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <checkboxQuiz :question="$t('q1')" qId="1" :Answer='["2"]'/>
          </b-tab>
          <b-tab title="Question 2">
            <checkboxQuiz :question="$t('q2')" qId="2" :Answer='["2"]'/>
          </b-tab>
          <b-tab title="Question 3">
            <checkboxQuiz :question="$t('q3')" qId="3" :Answer='["4"]'/>
          </b-tab>
        </b-tabs>
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group :aria-label="$t('questionNav')" class="mt-2">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
          </b-button-group>
        </div>
      </b-card>
    </div>
  </span>
</template>
<style type="text/css" scoped>
  .qTable th{
    text-align: center;
    background-color: #7D677D;
    color: #fff;
  }
  .qTable td, .qTable th{
    padding:.5em;
  }
  .qTable td:nth-child(n+3):nth-child(-n+4),
  .qTable td:nth-child(n+7){
    background-color: hsl(255, 37%, 90%);
  }
  .qTable{
    margin-top:1em;
  }
</style>
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
  components: { 
    radioQuiz, 
    checkboxQuiz
  },
  data() {
    return {
      tabIndex: 0,
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
  "Introduction": "Answer the following questions:",
  "q1": {
  "text": "Who should you consult when drafting procurement requirements for software, to ensure compatibility with networks?",
  "options": {
  "1": "Accommodations Services",
  "2": "Information Technology Services",
  "3": "Security",
  "4": "Travel Services"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "When drafting your procurement requirements for software to ensure compatibility with networks, you should consult your Information Technology Services."
  },
  "q2": {
  "text": "Who should you consult when drafting your security requirements for a contracting consultant?",
  "options": {
  "1": "Information Management Services",
  "2": "Information Technology Services",
  "3": "Security",
  "4": "Shared Services Canada"
  },
  "feedback": {
    "right": "<span class='v-right' /><strong>Correct!</strong>",
    "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "When drafting your security requirements for a consultant, you should consult Security."
  },
  "q3": {
  "text": "Who should you consult when planning public opinion research?",
  "options": {
  "1": "Information Management Services",
  "2": "Information Technology Services",
  "3": "Security",
  "4": "Public Services and Procurement Canada"
  },
  "feedback": {
    "right": "<span class='v-right' /><strong>Correct!</strong>",
    "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "When planning public opinion research, you should consult Public Services and Procurement Canada."
  }
  },
  "fr": {
  "Introduction": "Répondez aux questions suivantes : ",
  "q1": {
  "text": "Qui devriez-vous consulter lors de la rédaction de demandes d’achat de logiciels afin de garantir la compatibilité avec les réseaux?",
  "options": {
  "1": "Services des aménagements",
  "2": "Services des technologies de l’information",
  "3": "Sécurité",
  "4": "Services de voyage"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"

  },
  "conclusion": "Lors de la rédaction de vos demandes d’achat de logiciels, vous devez consulter vos services des technologies de l’information pour assurer la compatibilité avec les réseaux."
  },
  "q2": {
  "text": "Qui devriez-vous consulter lors de la rédaction de vos exigences en matière de sécurité pour obtenir les services d’un consultant contractuel?",
  "options": {
  "1": "Services de gestion de l’information",
  "2": "Services des technologies de l’information",
  "3": "Sécurité",
  "4": "Services partagés Canada"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Lors de la rédaction de vos exigences en matière de sécurité pour obtenir les services d’un consultant, vous devriez consulter la sécurité."
  },
  "q3": {
  "text": "Qui devriez-vous consulter lors de la planification d’une recherche sur l’opinion publique?",
  "options": {
  "1": "Services de gestion de l’information",
  "2": "Services des technologies de l’information",
  "3": "Sécurité",
  "4": "Services publics et Approvisionnement Canada"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Lorsque vous planifiez une recherche sur l’opinion publique, vous devriez consulter Services publics et Approvisionnement Canada."
  }
  }
  }</i18n>
