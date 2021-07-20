<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
          <p>{{$t('introText')}}</p>
          <b-tabs content v-model="tabIndex">
            <b-tab title="Question 1">
              <radioQuiz :question="$t('q1')" qId="1" />
            </b-tab>
            <b-tab title="Question 2">
              <checkboxQuiz :question="$t('q2')" qId="2" :Answer="['2','4']"/>
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
        "text": "Which statement is <u>NOT</u> a part of the life cycle materiel management acquisition phase?",
        "options": {
          "1": "Acquire the materiel",
          "2": "Confirm availability of funding",
          "3": "Ensure quality assurance and testing",
          "4": "Receive and inspect the goods"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Confirming the availability of the funding is done during the planning phase, not the acquisition phase."
      },
      "q2": {
        "text": "The acquisition phase often requires which of the following?",
        "options": {
          "1": "Adjustments to the budget",
          "2": "Longer timelines to complete the acquisition",
          "3": "Choosing the method used to acquire the materiel",
          "4": "The participation of Public Services and Procurement Canada"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "The acquisition phase often requires longer timelines to complete the acquisition and often requires the participation of Public Services and Procurement Canada."
      }
    },
    "fr": {
      "introText": "Répondez aux questions suivantes : ",
       "q1": {
        "text": "Quel énoncé <u>ne fait PAS</u> partie de la phase d’acquisition de la gestion du cycle de vie du matériel?",
        "options": {
          "1": "Acquérir le matériel",
          "2": "Confirmer la disponibilité du financement",
          "3": "Veiller à l’assurance de la qualité et à la mise à l’essai",
          "4": "Réceptionner et inspecter la marchandise"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "La confirmation de la disponibilité du financement se fait pendant la phase de planification, et non pendant la phase d’acquisition."
      },
      "q2": {
        "text": "Parmi les éléments suivants, lequel la phase d’acquisition requiert-elle souvent?",
        "options": {
          "1": "Ajustements au budget",
          "2": "Délais plus longs pour réaliser l’acquisition",
          "3": "Choix de la méthode utilisée pour acquérir le matériel",
          "4": "Participation de Services publics et Approvisionnement Canada"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Des délais plus longs sont souvent requis pour mener à bien l’acquisition dans la phase d’acquisition, ainsi que la participation de Services publics et Approvisionnement Canada."
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
