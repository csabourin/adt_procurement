<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
          <p>{{$t('introText')}}</p>
          <b-tabs content v-model="tabIndex">
            <b-tab title="Question 1">
              <radioQuiz :question="$t('q1')" qId="1"/>
            </b-tab>
            <b-tab title="Question 2">
              <radioQuiz :question="$t('q2')" qId="2"/>
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
        "text": "During the operation, use and maintenance phase, managers should <u>NOT</u> do which of the following?",
        "options": {
          "1": "Dispose materiel",
          "2": "Distribute materiel",
          "3": "Track materiel",
          "4": "Use materiel"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> During the operation, use and maintenance phase, managers should not dispose of materiel. This activity will come at a later phase. ",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> During the operation, use and maintenance phase, managers should not dispose of materiel. This activity will come at a later phase. ",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> During the operation, use and maintenance phase, managers should not dispose of materiel. This activity will come at a later phase. ",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong> During the operation, use and maintenance phase, managers should not dispose of materiel. This activity will come at a later phase. "
        }
      },
      "q2": {
        "text": "During the operation, use and maintenance phase, managers must try to make the products last as long as possible.",
        "options": {
          "1": "True",
          "2": "False"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> During the operation, use and maintenance phase, managers must try to make the products last as long as possible based on best value.",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> During the operation, use and maintenance phase, managers must try to make the products last as long as possible based on best value."
        }
      }
    },
    "fr": {
      "introText": "Répondez aux questions suivantes : ",
       "q1": {
        "text": "Parmi les actions suivantes, laquelle les gestionnaires devraient-ils <u>ÉVITER</u> de faire au cours de la phase d’exploitation, d’utilisation et d’entretien?",
        "options": {
          "1": "Éliminer le matériel",
          "2": "Distribuer le matériel",
          "3": "Suivre le matériel",
          "4": "Utiliser le matériel"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> Pendant la phase d’exploitation, d’utilisation et d’entretien, les gestionnaires ne doivent pas éliminer le matériel. Cette activité viendra dans une phase ultérieure.",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Pendant la phase d’exploitation, d’utilisation et d’entretien, les gestionnaires ne doivent pas éliminer le matériel. Cette activité viendra dans une phase ultérieure.",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Pendant la phase d’exploitation, d’utilisation et d’entretien, les gestionnaires ne doivent pas éliminer le matériel. Cette activité viendra dans une phase ultérieure.",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Pendant la phase d’exploitation, d’utilisation et d’entretien, les gestionnaires ne doivent pas éliminer le matériel. Cette activité viendra dans une phase ultérieure."
        }
      },
      "q2": {
        "text": "Pendant la phase d’exploitation, d’utilisation et d’entretien, les gestionnaires doivent essayer de faire durer les produits le plus longtemps possible.",
        "options": {
          "1": "Vrai",
          "2": "Faux"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong> Pendant la phase d’exploitation, d’utilisation et d’entretien, les gestionnaires doivent essayer de faire durer les produits le plus longtemps possible en fonction du meilleur rapport qualité-prix.",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Pendant la phase d’exploitation, d’utilisation et d’entretien, les gestionnaires doivent essayer de faire durer les produits le plus longtemps possible en fonction du meilleur rapport qualité-prix."
        }
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
