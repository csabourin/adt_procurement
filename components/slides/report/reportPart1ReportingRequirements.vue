<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
          <p>{{$t('introText')}}</p>
          <b-tabs content v-model="tabIndex">
            <b-tab title="Question 1">
              <checkboxQuiz :question="$t('q1')" qId="1" :Answer="['3','4']"/>
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
          <!--<windowPortal :open="openCard" @close="openCard = false">
            <b-container style="margin-top: 25px; margin-bottom: 25px;">
              <b-row>
                <b-col>
                  <signatureCard />
                </b-col>
              </b-row>
          </b-container>
          </windowPortal>
          <p><b-button @click="openCard = true">{{$t('openCard')}}</b-button></p>-->
          </b-card>
        </b-col>
        <!--<b-col>
          <signatureCard />
        </b-col>-->
      </b-row>
    </b-container>
  </div>
</template>
<script type="text/javascript">
  
  import checkboxQuiz from "~/components/checkboxQuiz"
  import radioQuiz from "~/components/radioQuiz"
  import signatureCard from "~/components/delegationChart/signatureCard"
  import windowPortal from "~/components/newWindow"
  export default {
    components: {
      checkboxQuiz,
      radioQuiz,
      signatureCard,
      windowPortal
    },
    data(){
      return{
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
<i18n>
  
  {
    "en": {
      "introText": "Answer the following questions.",
      "q1": {
        "text": "Due to the proactive disclosure of contracts, which of the following contracting activities must be made available to the public?",
        "options": {
          "1": "A $6,700 contract for furniture",
          "2": "A $9,500 contract for training services",
          "3": "A $500,000 contract for building repairs",
          "4": "A $2 million contract for a fleet of trucks"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Due to the proactive disclosure of contracts, the information in contracts worth more than $10,000 are made available to the public."
      },
      "q2": {
        "text": "All reports on contracting in the federal public service are disclosed to the public. True or false?",
        "options": {
          "1": "True",
          "2": "False"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Reports on contracting in the federal public service are made public when the contract value exceeds $10 000."
      }
    },
    "fr": {
      "introText": "Répondez aux questions suivantes : ",
       "q1": {
        "text": "Parmi les activités contractuelles suivantes, lesquelles doivent être mises à la disposition du public en vertu de la divulgation proactive des contrats?",
        "options": {
          "1": "Un contrat de 6 700 $ pour du mobilier",
          "2": "Un contrat de 9 500 $ pour des services de formation",
          "3": "Un contrat de 500 000 $ pour la réparation des bâtiments",
          "4": "Un contrat de 2 millions de dollars pour une flotte de camions"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "En vertu de la divulgation proactive des contrats, les renseignements contenus dans les contrats d’une valeur supérieure à 10 000 $ sont mis à la disposition du public."
      },
      "q2": {
        "text": "Tous les rapports sur la passation de contrats dans la fonction publique fédérale sont rendus publics. Vrai ou faux?",
        "options": {
          "1": "Vrai",
          "2": "Faux"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Les rapports sur la passation de contrats dans la fonction publique fédérale sont rendus publics lorsque la valeur du contrat dépasse 10 000 $."
      }
    }
  }

</i18n>
<style type="text/css" scoped>
.scrollMe {
  width: 50%;
  white-space: nowrap;
  overflow-x: auto;
}

</style>
