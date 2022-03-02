<template>
  <span>
    <div>
      <br />
      <p>{{$t('introductionText')}}</p>
      <windowPortal :open="openChart" @close="openChart = false">
      <delegAutorityEn v-if="$i18n.locale=='en'" />
      <delegAutorityFr v-if="$i18n.locale=='fr'" />
    </windowPortal>
    <p><b-button role="link" @click="openChart = true">{{$t('openChartButton')}}</b-button></p>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1">
            <checkboxQuiz :question="$t('q1')" qId="1" :Answer="['2', '3', '4']" />
          </b-tab>
          <b-tab title="Question 2">
            <radioQuiz :question="$t('q2')" qId="2" />
          </b-tab>
        </b-tabs>
        <!-- Control buttons-->
        <div class="text-center">
          <b-button-group :aria-label="$t('questionNav')" class="mt-2">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
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
import delegAutorityEn from "~/components/delegationChart/delegchart_en"
import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
import windowPortal from "~/components/newWindow"
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  components: { 
    radioQuiz, 
    checkboxQuiz,
    delegAutorityEn,
    delegAutorityFr,
    windowPortal,
    download,
    HTMLJobaidLink 
  },
  data() {
    return {
      tabIndex: 0,
      openChart: false
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
  "introductionText": "Answer the following questions. You will need to consult the Delegation of Spending and Financial Signing Authorities Chart.",
  "openChartButton": "Open the delegation of spending and financial signing authorities chart",
  "q1": {
  "text": "Using the Delegation of Spending and Financial Signing Authorities Chart provided, who can approve a temporary help contract transaction of $23,000?",
  "options": {
  "1": "Manager",
  "2": "Director general",
  "3": "Assistant deputy minister",
  "4": "Deputy head"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "A director general, a deputy head and an assistant deputy minister are the ones who can approve a $23,000 temporary help contract transaction."
  },
  "q2": {
  "text": "Using the delegation of spending and financial signing authorities chart provided, what is the lowest position that could approve the purchase of a $1,200 cordless drill on an acquisition card?",
  "options": {
  "1": "Manager",
  "2": "Director general",
  "3": "Assistant deputy minister",
  "4": "Deputy head"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "A manager is the lowest position that could approve the purchase of a $1,200 cordless drill on an acquisition card."
  }
  },
  "fr": {
  "introductionText": "Répondez aux questions suivantes. Veuillez consulter le Tableau de délégation des pouvoirs de dépenser et de signer des documents financiers.",
  "openChartButton": "Ouvrir le tableau de délégation des pouvoirs de dépenser et de signer des documents financiers",
  "q1": {
  "text": "À l’aide du tableau de délégation des pouvoirs de dépenser et de signer des documents financiers fourni, indiquez qui peut approuver la conclusion d’un contrat de service d’aide temporaire de 23 000 $?",
  "options": {
  "1": "Gestionnaire",
  "2": "Directeur général",
  "3": "Sous-ministre adjoint",
  "4": "Administrateur général"
  },
  "feedback": {
  "right": "<span class='v-right' /><strong>Correct!</strong>",
  "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Les directeurs généraux, les administrateurs généraux et les sous-ministres adjoints sont ceux qui peuvent approuver la conclusion d’un contrat de service d’aide temporaire de 23 000 $."
  },
  "q2": {
  "text": "À l’aide du tableau de délégation des pouvoirs de dépenser et de signer des documents financiers fourni, indiquez quel est le niveau hiérarchique le plus bas à pouvoir approuver l’achat d’une perceuse sans fil de 1 200 $ avec une carte d’achat?",
  "options": {
  "1": "Gestionnaire",
  "2": "Directeur général",
  "3": "Sous-ministre adjoint",
  "4": "Administrateur général"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Le niveau hiérarchique le plus bas à pouvoir approuver l’achat d’une perceuse sans fil de 1 200 $ avec une carte d'achat est celui de gestionnaire."
  }
  }
  }</i18n>
