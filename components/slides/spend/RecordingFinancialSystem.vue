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
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
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
  }
}

</script>
<i18n>{
  "en": {
    "q1": {
      "text": "You want to buy two dry erase boards. Is this a soft or a hard commitment?",
      "options": {
        "1": "Soft Commitment",
        "2": "Hard Commitment"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "2": "<span class='v-right' /><strong>Correct!</strong>"
      },
      "conclusion": "This is a soft commitment because you have not yet made an arrangement with a supplier."
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
      "conclusion": "Given that you have only bought two dry erase boards, it is an expenditure.<br>Don&rsquo;t forget, your organisation may use a different financial structure, so go find out how your coding works!"
    }
  },
  "fr": {
    "q1": {
      "text": "Vous voulez acheter deux tableaux effaçables à sec. S&rsquo;agit-il d&rsquo;un engagement préalable ou d&rsquo;un engagement ferme?",
      "options": {
        "1": "Engagement préalable",
        "2": "Engagement ferme"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Il s&rsquo;agit d&rsquo;un engagement préalable parce que vous n&rsquo;avez pas encore conclu d&rsquo;entente avec un fournisseur."
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
      "conclusion": "Étant donné que vous n&rsquo;avez acheté que deux tableaux effaçables à sec, c&rsquo;est une dépense.<br>N&rsquo;oubliez pas que votre organisation peut utiliser une structure financière différente, alors allez voir comment fonctionne votre codage!"
    }
  }
}</i18n>
