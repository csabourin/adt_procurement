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
            <b-tab title="Question 3">
              <radioQuiz :question="$t('q3')" qId="3" />
            </b-tab>
            <b-tab title="Question 4">
              <radioQuiz :question="$t('q4')" qId="4" />
            </b-tab>
            <b-tab title="Question 5">
              <radioQuiz :question="$t('q5')" qId="5" />
            </b-tab>
          </b-tabs>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group :aria-label="$t('questionNav')" class="mt-2">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=4">{{$t('nextPage')}}</b-button>
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
      "openCard": "Open the specimen signature card",
      "introText": "Here’s a chance for you to confirm your knowledge of various types of solicitation documents. Answer the following questions.",
      "q1": {
        "text": "Which instrument is used to purchase goods or services from an established standing offer?",
        "options": {
          "1": "A call-up against a standing offer",
          "2": "A request for standing offers",
          "3": "A request for supply arrangement"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "A call-up against a standing offer is used to purchase goods or services from an established standing offer."
      },
      "q2": {
        "text": "Which instrument is used to solicit offers for establishing standing offers?",
        "options": {
          "1": "A call-up against a standing offer",
          "2": "A request for standing offers",
          "3": "A request for supply arrangement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "A request for standing offers is used to solicit offers for establishing standing offers."
      },
      "q3": {
        "text": "Which instrument is used to solicit arrangements from suppliers for the establishment of supply arrangements?",
        "options": {
          "1": "A call-up against a standing offer",
          "2": "A request for standing offers",
          "3": "A request for supply arrangement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "A request for supply arrangement is used to solicit arrangements from suppliers for the establishment of supply arrangements."
      },
      "q4": {
        "text": "Who develops the requirements and prepares the statement of work?",
        "options": {
          "1": "The financial advisor",
          "2": "The manager",
          "3": "The procurement specialist"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "The manager develops the requirements and prepares the statement of work."
      },
      "q5": {
        "text": "Once the requirements and the statement of requirement have been prepared, who prepares the bid solicitation documents?",
        "options": {
          "1": "The financial advisor",
          "2": "The manager",
          "3": "The procurement specialist"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Once the requirements and the statement of requirement have been prepared, the procurement specialist prepares the solicitation documents."
      }
    },
    "fr": {
      "openCard": "Ouvrir le spécimen de carte de signature",
      "introText": "Voici l’occasion d’évaluer votre connaissance des différents types de documents d’invitation à soumissionner. Répondez aux questions suivantes : ",
       "q1": {
        "text": "Quel instrument est utilisé pour acheter des biens ou des services à partir d’une offre à commandes établie?",
        "options": {
          "1": "Une commande subséquente à l’offre à commandes",
          "2": "Une demande d’offres à commandes",
          "3": "Une demande pour un arrangement en matière d’approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Une commande subséquente à l’offre à commandes est utilisée pour acheter des biens ou services à partir d’une offre à commandes établie."
      },
      "q2": {
        "text": "Quel instrument est utilisé pour solliciter des soumissions en vue d’établir des offres à commandes?",
        "options": {
          "1": "Une commande subséquente à l’offre à commandes",
          "2": "Une demande d’offres à commandes",
          "3": "Une demande pour un arrangement en matière d’approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Une demande d’offres à commandes est utilisée pour solliciter des offres en vue d’établir des offres à commandes."
      },
      "q3": {
        "text": "Quel instrument est utilisé pour inviter les fournisseurs à soumettre des arrangements en vue de mettre en place des arrangements d’approvisionnement?",
        "options": {
          "1": "Une commande subséquente à l’offre à commandes",
          "2": "Une demande d’offres à commandes",
          "3": "Une demande pour un arrangement en matière d’approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Une demande pour un arrangement en matière d’approvisionnement est utilisée pour inviter les fournisseurs à soumettre des arrangements en vue de mettre en place des arrangements d’approvisionnement."
      },
      "q4": {
        "text": "Qui élabore les exigences et prépare l’énoncé des travaux?",
        "options": {
          "1": "Le conseiller financier",
          "2": "Le gestionnaire",
          "3": "Le spécialiste en approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Le gestionnaire élabore les exigences et prépare l’énoncé des travaux."
      },
      "q5": {
        "text": "Une fois les exigences et l’énoncé des besoins rédigés, qui prépare les documents d’invitation à soumissionner?",
        "options": {
          "1": "Le conseiller financier",
          "2": "Le gestionnaire",
          "3": "Le spécialiste en approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Une fois les exigences et l’énoncé des besoins rédigés, le spécialiste en approvisionnement prépare les documents d’invitation à soumissionner."
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
