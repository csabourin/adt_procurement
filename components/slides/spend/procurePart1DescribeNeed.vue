<template>
  <span>
    <div>
      <br>
      <p>{{$t('Introduction')}}</p>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2","3","4"]'/>
          </b-tab>
          <b-tab title="Question 2">
            <checkboxQuiz :question="$t('q2')" qId="2" :Answer='["1","2","3","5"]'/>
          </b-tab>
          <b-tab title="Question 3">
            <checkboxQuiz :question="$t('q3')" qId="3" :Answer='["2"]'/>
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
  "openChartButton": "Open the delegation of spending and financial signing authorities chart",
    "q1": {
    "text": "Which items should you include in the design specifications of your information video?",
    "options": {
    "1": "Video format and size",
    "2": "Video look and feel",
    "3": "Video soundtrack",
    "4": "Video accessibility"
    },
    "feedback": {
    "right": "<span class='v-right' /><strong>Correct!</strong>",
    "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
    },
    "conclusion": "The design specifications of your information video should include its format and size, its overall look and feel as well as its soundtrack and accessibility considerations."
    },
    "q2": {
    "text": "Which of the following items should you include in your performance specifications for new licensing software?",
    "options": {
    "1": "Must be able to produce reports",
    "2": "Must have a searchable database",
    "3": "Must have fillable templates",
    "4": "Must use 12-point Arial font",
    "5": "Must be navigable by people using screen readers"
    },
    "feedback": {
      "right": "<span class='v-right' /><strong>Correct!</strong>",
      "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
    },
    "conclusion": "Your performance specification should include the following operational requirements: must be able to produce reports, must have a searchable database, must have fillable templates and must be navigable by people using screen readers. It contains what must be done, not how to do it."
    },
    "q3": {
    "text": "Which of the following items should you <u>NOT</u> include in your statement of requirement for contracting a consultant?",
    "options": {
    "1": "Assessment of risk",
    "2": "Name of potential supplier",
    "3": "Problem definition",
    "4": "What will be produced at the next stage"
    },
    "feedback": {
      "right": "<span class='v-right' /><strong>Correct!</strong>",
      "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
    },
    "conclusion": "In your statement of requirement, you should not include the name of the potential supplier, as this is not yet known."
    }
  },
  "fr": {
  "Introduction": "Répondez aux questions suivantes : ",
  "openChartButton": "Ouvrir le tableau de délégation de pouvoirs",
    "q1": {
    "text": "Quels éléments devriez-vous inclure dans les normes de conception de votre vidéo d’information?",
    "options": {
    "1": "Format et taille de la vidéo",
    "2": "Style et ambiance de la vidéo",
    "3": "Bande sonore de la vidéo",
    "4": "Accessibilité de la vidéo"
    },
    "feedback": {
    "right": "<span class='v-right' /><strong>Correct!</strong>",
    "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
    },
    "conclusion": "Les normes de conception de votre vidéo d’information devraient inclure son format et sa taille, son style et ambiance ainsi que sa bande sonore et les aspects liés à son accessibilité."
    },
    "q2": {
    "text": "Parmi les éléments suivants, lesquels devriez-vous inclure dans vos spécifications fonctionnelles pour le nouveau logiciel de délivrance de permis?",
    "options": {
    "1": "Doit être en mesure de produire des rapports",
    "2": "Doit avoir une base de données consultable",
    "3": "Doit avoir des modèles à remplir",
    "4": "Doit utiliser une police Arial à 12 points",
    "5": "Doit être accessible aux personnes utilisant des lecteurs d’écran"
    },
    "feedback": {
      "right": "<span class='v-right' /><strong>Correct!</strong>",
      "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
    },
    "conclusion": "Vos spécifications fonctionnelles devraient inclure les exigences opérationnelles suivantes : doit être en mesure de produire des rapports, doit avoir une base de données consultable, doit avoir des modèles à remplir et doit être accessible aux personnes utilisant des lecteurs d’écran. Elles énoncent ce qui doit être fait, mais pas comment le faire."
    },
    "q3": {
    "text": "Lequel des éléments suivants ne devrait PAS être inclus dans votre énoncé des besoins pour engager un consultant?",
    "options": {
    "1": "Évaluation du risque",
    "2": "Nom du fournisseur potentiel",
    "3": "Définition du problème",
    "4": "Ce qui sera produit à la prochaine étape"
    },
    "feedback": {
      "right": "<span class='v-right' /><strong>Correct!</strong>",
      "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
    },
    "conclusion": "Dans votre énoncé des exigences, vous ne devez pas inclure le nom du fournisseur potentiel, car ce nom n’est pas encore connu."
    }
  }
  }</i18n>
