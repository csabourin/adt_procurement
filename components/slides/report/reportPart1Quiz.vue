<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <p><b>{{$t('answerQuiz')}}</b></p>
          <b-card>
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
              <checkboxQuiz :question="$t('q4')" qId="4" :Answer="['2','3','4']"/>
            </b-tab>
            <b-tab title="Question 5">
              <checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1','3','4']"/>
            </b-tab>
            <b-tab title="Question 6">
              <radioQuiz :question="$t('q6')" qId="6" />
            </b-tab>
          </b-tabs>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group :aria-label="$t('questionNav')" class="mt-2">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=5">{{$t('nextPage')}}</b-button>
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
      "answerQuiz": "Answer the following questions.",
      "q1": {
        "text": "What is the name of the inappropriate practice where someone awards multiple contracts to the same contractor either simultaneously or at regular intervals whereby each contract contains a statement of work that represents or could be interpreted as being an individual phase of a larger project to avoid having to seek approval of a larger contract authority for higher limits?",
        "options": {
          "1": "Contracting in the absence of a written contract",
          "2": "Contract splitting",
          "3": "Inappropriate sole sourcing"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "This inappropriate practice is an example of contract splitting."
      },
      "q2": {
        "text": "Which inappropriate practice is sometimes used to address delays or bad planning?",
        "options": {
          "1": "Contracting in the absence of a written contract",
          "2": "Inappropriate sole sourcing",
          "3": "Inappropriate use of emergency contracting",
          "4": "All of the above"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Contracting in the absence of a written contract, inappropriate sole sourcing and inappropriate use of emergency contracting are sometimes used to address delays or bad planning."
      },
      "q3": {
        "text": "The Office of the Procurement Ombudsman, the Canadian International Trade Tribunal and the Federal Court are examples of authorities with oversight responsibilities for procurement in the federal public service. True or false?",
        "options": {
          "1": "True",
          "2": "False"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "The Office of the Procurement Ombudsman, the Canadian International Trade Tribunal and the Federal Court are examples of authorities with oversight responsibilities for procurement in the federal public service."
      },
      "q4": {
        "text": "Due to the proactive disclosure of contracts, which of the following contracting activities must be made available to the public?",
        "options": {
          "1": "An $8,000 contract for lab equipment",
          "2": "A $32,500 contract for professional consultants",
          "3": "A $700,000 contract for specialized printing equipment",
          "4": "A $50 million contract for a new building"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Due to the proactive disclosure of contracts, contracts worth more than $10,000 are made available to the public."
      },
      "q5": {
        "text": "Who plays a role in the collection of contracting information for the reports?",
        "options": {
          "1": "The administrative staff",
          "2": "The human resources specialist",
          "3": "The manager",
          "4": "The procurement specialist"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "The administrative staff, the manager and the procurement specialist have a role to play in the collection of contracting information for the reports."
      },
      "q6": {
        "text": "How is contracting information shared with the public given proactive disclosure?",
        "options": {
          "1": "Organizational intranet sites",
          "2": "Open Government Portal",
          "3": "Organizational websites"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Contracting activities are made available to the public on the Open Government Portal, thus making government and public service officials accountable."
      }
    },
    "fr": {
      "answerQuiz": "Répondez aux questions suivantes.",
       "q1": {
        "text": "Quel est le nom de la pratique inappropriée qui consiste à attribuer plusieurs contrats au même entrepreneur, de façon simultanée ou à intervalles réguliers, où chaque contrat comporte un énoncé des travaux qui représente des étapes individuelles d’un plus grand projet, ou qui pourrait être interprété comme tel, afin d’éviter de devoir demander l’approbation d’une autorité contractante plus importante pour des limites plus élevées?",
        "options": {
          "1": "Attribution d’un contrat sans autorisation écrite",
          "2": "Fractionnement d’un contrat",
          "3": "Recours inapproprié à un fournisseur unique"
        },
        "feedback": {
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Cette pratique inappropriée est un exemple de fractionnement de contrat."
      },
      "q2": {
        "text": "Quelle pratique inappropriée est parfois utilisée pour remédier aux retards ou à une mauvaise planification?",
        "options": {
          "1": "Attribution d’un contrat sans autorisation écrite",
          "2": "Recours inapproprié à un fournisseur unique",
          "3": "Utilisation inappropriée de contrats en cas d’urgence",
          "4": "Toutes ces réponses"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "L’attribution d’un contrat sans autorisation écrite, le recours inapproprié à un fournisseur unique et l’utilisation inappropriée de contrats en cas d’urgence sont parfois utilisés pour remédier aux retards ou à une mauvaise planification."
      },
      "q3": {
        "text": "Le Bureau de l’ombudsman de l’approvisionnement, le Tribunal canadien du commerce extérieur et la Cour fédérale sont des exemples d’autorités responsables de la surveillance de l’approvisionnement dans la fonction publique fédérale. Vrai ou faux?",
        "options": {
          "1": "Vrai",
          "2": "Faux"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Le Bureau de l’ombudsman de l’approvisionnement, le Tribunal canadien du commerce extérieur et la Cour fédérale sont des exemples d’autorités responsables de la surveillance de l’approvisionnement dans la fonction publique fédérale."
      },
      "q4": {
        "text": "Parmi les activités contractuelles suivantes, lesquelles doivent être mises à la disposition du public en vertu de la divulgation proactive des contrats?",
        "options": {
          "1": "Un contrat de 8 000 $ pour du matériel de laboratoire",
          "2": "Un contrat de 32 500 $ pour des experts-conseils professionnels",
          "3": "Un contrat de 700 000 $ pour du matériel d’impression spécialisé",
          "4": "Un contrat de 50 millions de dollars pour un nouveau bâtiment"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "En vertu de la divulgation proactive des contrats, les contrats d’une valeur supérieure à 10 000 $ sont mis à la disposition du public."
      },
      "q5": {
        "text": "Qui joue un rôle dans la collecte de renseignements contractuels aux fins de rapports?",
        "options": {
          "1": "Le personnel administratif",
          "2": "Le spécialiste des ressources humaines",
          "3": "Le gestionnaire",
          "4": "Le spécialiste en approvisionnement"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Le personnel administratif, le gestionnaire et le spécialiste en approvisionnement ont un rôle à jouer dans la collecte de renseignements contractuels aux fins de rapports."
      },
      "q6": {
        "text": "Comment les renseignements contractuels sont-ils partagés avec le public compte tenu de la divulgation proactive?",
        "options": {
          "1": "Sites intranet organisationnels",
          "2": "Portail du gouvernement ouvert",
          "3": "Sites Web d’organisations"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Les activités de passation de marchés sont mises à la disposition du public sur le portail du gouvernement ouvert, ce qui permet de responsabiliser les responsables du gouvernement et des services publics."
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
