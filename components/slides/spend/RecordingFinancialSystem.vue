<template>
  <div>
    <b-card>
      <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1" />
        </b-tab>
        <b-tab title="Question 2">
          <radioQuiz :question="$t('q2')" qId="2" />
        </b-tab>
      </b-tabs>
        <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>
<script type="text/javascript">
import checkboxQuiz from "~/components/checkboxQuiz"
import radioQuiz from "~/components/radioQuiz"
export default {
  components: {
    checkboxQuiz,
    radioQuiz
  },
  data(){
    return{
      tabIndex:0
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
      "text": "You are shopping around to buy two dry erase boards. Is this a soft commmitment or a hard commitment?",
      "options": {
        "1": "Soft Commitment",
        "2": "Hard Commitment"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Correct!</strong>",
        "2": "<span class='v-right' /><strong>Incorrect.</strong>"
      },
      "conclusion": "This is a soft commitment because you have not yet made an arrangement with a supplier but have an idea of the cost."
    },
    "q2": {
      "text": "You have now bought the two dry erase boards. What is the nature of this financial transaction?",
      "options": {
        "1": "Revenue",
        "2": "Expenditure",
        "3": "Asset",
        "4": "Liability"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Given that you bought a low number of items, it would be considered an expenditure.<br>Don’t forget, your organisation may use a different financial structure, find out how your coding works!"
    }
  },
  "fr": {
    "q1": {
      "text": "Vous magasinez deux tableaux effaçables à sec. S’agit-il d’un engagement préalable ou d’un engagement ferme?",
      "options": {
        "1": "Engagement préalable",
        "2": "Engagement ferme"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Il s’agit d’un engagement préalable parce que vous n’avez pas encore conclu d’entente avec un fournisseur mais vous avez und idée du coût."
    },
    "q2": {
      "text": "Vous avez maintenant acheté les deux tableaux effaçables à sec. Quelle est la nature de cette transaction financière?",
      "options": {
        "1": "Revenu",
        "2": "Dépense",
        "3": "Actif",
        "4": "Passif"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Étant donné que vous n’avez acheté qu’un petit nombre d’items, on considérerait qu’il s’agit d’une dépense.<br>N’oubliez pas que votre organisation peut utiliser une structure financière différente, alors renseignez-vous pour savoir comment fonctionne votre codage!"
    }
  }
}</i18n>
