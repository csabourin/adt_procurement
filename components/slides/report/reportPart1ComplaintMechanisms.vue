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
        "text": "Can the authorities that provide oversight of federal public service procurement be both internal and external organizations?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Authorities that provide oversight of federal public service procurement can be both internal and external organizations."
      },
      "q2": {
        "text": "Can some authorities with oversight responsibilities for procurement in the federal public service help resolve issues before formal escalation is required?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Some authorities with oversight responsibilities for procurement in the federal public service can help resolve issues before formal escalation is required."
      }
    },
    "fr": {
      "introText": "Répondez aux questions suivantes : ",
       "q1": {
        "text": "Les autorités responsables de la surveillance de l’approvisionnement dans la fonction publique fédérale peuvent-elles être à la fois des organisations internes et externes?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Les autorités responsables de la surveillance de l’approvisionnement dans la fonction publique fédérale peuvent être des organisations internes et externes."
      },
      "q2": {
        "text": "Certaines autorités responsables de la surveillance de l’approvisionnement dans la fonction publique fédérale peuvent-elles contribuer à la résolution des problèmes avant qu’un processus officiel de transmission aux échelons supérieurs ne soit nécessaire?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Certaines autorités responsables de la surveillance de l’approvisionnement dans la fonction publique fédérale peuvent aider à résoudre les problèmes avant qu’un processus officiel de transmission aux échelons supérieurs ne soit nécessaire."
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
