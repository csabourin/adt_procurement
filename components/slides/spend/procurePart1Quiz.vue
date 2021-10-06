<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <br />
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
              <radioQuiz :question="$t('q4')" qId="4" />
            </b-tab>
            <b-tab title="Question 5">
              <radioQuiz :question="$t('q5')" qId="5" />
            </b-tab>
            <b-tab title="Question 6">
              <radioQuiz :question="$t('q6')" qId="6" />
            </b-tab>
            <b-tab title="Question 7">
              <radioQuiz :question="$t('q7')" qId="7" />
            </b-tab>
            <b-tab title="Question 8">
              <radioQuiz :question="$t('q8')" qId="8" />
            </b-tab>
            <b-tab title="Question 9">
              <checkboxQuiz :question="$t('q9')" qId="9" :Answer='["2","3","4"]'/>
            </b-tab>
          </b-tabs>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group :aria-label="$t('questionNav')" class="mt-2">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=8">{{$t('nextPage')}}</b-button>
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
  export default {
    components: {
      checkboxQuiz,
      radioQuiz
    },
    data(){
      return{
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
<i18n>
  
  {
    "en": {
      "answerQuiz": "Answer the following questions.",
      "q1": {
        "text": "Which of the following specifications sets the operational requirements of an item or an installation? In other words, which describes what the final installed product must be able to do?",
        "options": {
          "1": "Design specifications",
          "2": "Performance specifications",
          "3": "Purchase description specifications",
          "4": "Technical specifications"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Performance specifications set the operational requirements of an item or installation. In other words, they describe what the final installed product must be able to do."
      },
      "q2": {
        "text": "You must purchase #8 3-inch Robertson (square head) brown deck screws. Which of the following descriptions would you prepare?",
        "options": {
          "1": "Design specifications",
          "2": "Performance specifications",
          "3": "A combination of design and performance specifications",
          "4": "Purchase description specifications"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Since you are purchasing an item known by its industrial reference standards, you would prepare a purchase description specification as it provides a brief but accurate description of the desired production."
      },
      "q3": {
        "text": "Which one of the following allows the client to solicit bids from a pool of pre-screened suppliers, under the framework of an arrangement?",
        "options": {
          "1": "A competitive contract",
          "2": "Contractual arrangements",
          "3": "A standing offer",
          "4": "A supply arrangement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "A supply arrangement allows the client to solicit bids from a pool of pre-screened suppliers, under the framework of the arrangement."
      },
      "q4": {
        "text": "Who is responsible for making sure that you have the required funding, for providing the technical requirements and evaluation criteria, and for confirming that the goods, services or construction are acceptable, as per the contract?",
        "options": {
          "1": "The financial advisor",
          "2": "The manager",
          "3": "The procurement specialist",
          "4": "The subject matter expert"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "The manager is responsible for overseeing and making sure that the required funding is available, for providing the technical requirements and evaluation criteria, and for confirming that the goods, services or construction are acceptable, as per the contract."
      },
      "q5": {
        "text": "You are preparing requirements that include construction blue prints for a contract. You work in Alberta; therefore, you prepare the procurement documents and provide the blue prints in English only. Is this acceptable?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Documents must always be prepared in both official languages, regardless of the province or territory in which you work."
      },
      "q6": {
        "text": "How long should a request for proposal be posted on buyandsell.gc.ca when international trade agreements apply?",
        "options": {
          "1": "A minimum of 10 days",
          "2": "A minimum of 30 days",
          "3": "A minimum of 40 days",
          "4": "A minimum of 60 days"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "A request for proposal needs to be posted on buyandsell.gc.ca for a minimum of 40 days when international trade agreements apply."
      },
      "q7": {
        "text": "Which of the following statements is correct?",
        "options": {
          "1": "Competitive contracts solicit bids from several suppliers while sole-source contracts are used when one of the sole-source exceptions in the Government Contracts Regulations apply. Sole-source contracts must always be justified.",
          "2": "Competitive contracts solicit bids from several suppliers while sole-source contracts are used when one of the sole-source exceptions in the Government Contracts Regulations apply. Competitive contracts must always be justified.",
          "3": "Sole-source contracts solicit bids from several suppliers while competitive contracts are used when one of the sole-source exceptions in the Government Contracts Regulations apply. Competitive contracts must always be justified.",
          "4": "Sole-source contracts solicit bids from several suppliers while competitive contracts are used when one of the sole-source exceptions in the Government Contracts Regulations apply. Sole-source contracts must always be justified."
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Competitive contracts solicit bids from several suppliers while sole-source contracts are used when one of the sole-source exceptions in the Government Contracts Regulations apply. Sole-source contracts must always be justified."
      },
      "q8": {
        "text": "Are there any special considerations when contracting a former public servant in receipt of a pension?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Contracting a former public servant can generate great public interest, so there must be no suggestion of favoritism or special privilege. Always consult your procurement specialist before contracting with a former public servant."
      },
      "q9": {
        "text": "Which of the following statements are true?",
        "options": {
          "1": "An employer-employee relationship must develop over the duration of the contract",
          "2": "Contractors must not be treated as employees",
          "3": "Managers are responsible if employer-employee relationships develop",
          "4": "Relationships with contractors must be kept on a strictly business level"
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Relationships between managers and contractors must be kept on strictly business level. Contractors must not be treated as employees. In addition, managers are responsible for ensuring that an employer-employee relationship does not develop over the duration of the contract."
      }
    },
    "fr": {
      "answerQuiz": "Répondez aux questions suivantes.",
       "q1": {
        "text": "Parmi les normes et spécifications suivantes, lesquelles définissent les exigences opérationnelles d’un élément ou d’une installation? En d’autres termes, lesquelles décrivent ce que le produit final installé doit être capable de faire?",
        "options": {
          "1": "Les normes de conception",
          "2": "Les spécifications fonctionnelles",
          "3": "Les descriptions de l’achat",
          "4": "Les spécifications techniques"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Les spécifications fonctionnelles définissent les exigences opérationnelles d’un élément ou d’une installation. En d’autres termes, elles décrivent ce que le produit final installé doit être capable de faire."
      },
      "q2": {
        "text": "Vous devez acheter des vis Robertson (tête carrée) à terrasse n° 8 brunes de 3 pouces. Laquelle des descriptions suivantes prépareriez-vous?",
        "options": {
          "1": "Les normes de conception",
          "2": "Les spécifications fonctionnelles",
          "3": "Une combinaison de normes de conception et de spécifications fonctionnelles",
          "4": "Une description de l’achat"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Puisque vous achetez un article visé par ses normes de référence industrielles reconnues, vous préparerez une description de l’achat, car elle fournit une description brève, mais exacte de la production souhaitée."
      },
      "q3": {
        "text": "Parmi les options suivantes, laquelle permet au client de solliciter des offres auprès d’un bassin de fournisseurs présélectionnés, dans le cadre d’un accord?",
        "options": {
          "1": "Un contrat concurrentiel",
          "2": "Une entente contractuelle",
          "3": "Une offre à commandes",
          "4": "Un arrangement en matière d’approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Un arrangement en matière d’approvisionnement permet au client de solliciter des offres auprès d’un bassin de fournisseurs présélectionnés, dans le cadre de l’accord."
      },
      "q4": {
        "text": "Qui est chargé de s’assurer que vous disposez du financement requis, de fournir les exigences techniques et les critères d’évaluation et de confirmer que les biens, les services ou la construction sont acceptables, conformément au contrat?",
        "options": {
          "1": "Le conseiller financier",
          "2": "Le gestionnaire",
          "3": "Le spécialiste en approvisionnement",
          "4": "L’expert en la matière"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Il revient au gestionnaire d’exercer une supervision, de s’assurer de la disponibilité du financement requis, de fournir les exigences techniques et les critères d’évaluation et de confirmer que les biens, les services ou la construction sont acceptables, conformément au contrat."
      },
      "q5": {
        "text": "Vous préparez des exigences qui incluent des plans de construction pour un contrat. Vous travaillez en Alberta; par conséquent, vous préparez les documents d’approvisionnement et fournissez les plans en anglais seulement. Est-ce acceptable?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Les documents doivent toujours être préparés dans les deux langues officielles, peu importe la province ou le territoire dans lequel vous travaillez."
      },
      "q6": {
        "text": "Pendant combien de temps une demande de propositions doit-elle être affichée sur achatsetventes.gc.ca lorsque des accords commerciaux internationaux s’appliquent?",
        "options": {
          "1": "Au moins 10 jours",
          "2": "Au moins 30 jours",
          "3": "Au moins 40 jours",
          "4": "Au moins 60 jours"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Une demande de propositions doit être affichée sur achatsetventes.gc.ca pendant au moins 40 jours lorsque des accords commerciaux internationaux s’appliquent."
      },
      "q7": {
        "text": "Laquelle des déclarations suivantes est exacte?",
        "options": {
          "1": "Les contrats concurrentiels permettent de solliciter des soumissions auprès de plusieurs fournisseurs alors que les contrats à fournisseur unique sont utilisés lorsque l’une des exceptions prévues dans le Règlement sur les marchés de l’État s’applique. Les contrats à fournisseur unique doivent toujours être justifiés.",
          "2": "Les contrats concurrentiels permettent de solliciter des soumissions auprès de plusieurs fournisseurs alors que les contrats à fournisseur unique sont utilisés lorsque l’une des exceptions prévues dans le Règlement sur les marchés de l’État s’applique. Les contrats concurrentiels doivent toujours être justifiés.",
          "3": "Les contrats à fournisseur unique permettent de solliciter des soumissions auprès de plusieurs fournisseurs alors que les contrats concurrentiels sont utilisés lorsque l’une des exceptions prévues dans le Règlement sur les marchés de l’État s’applique. Les contrats concurrentiels doivent toujours être justifiés.",
          "4": "Les contrats à fournisseur unique permettent de solliciter des soumissions auprès de plusieurs fournisseurs alors que les contrats concurrentiels sont utilisés lorsque l’une des exceptions prévues dans le Règlement sur les marchés de l’État s’applique. Les contrats à fournisseur unique doivent toujours être justifiés."
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Les contrats concurrentiels permettent de solliciter des soumissions auprès de plusieurs fournisseurs alors que les contrats à fournisseur unique sont utilisés lorsque l’une des exceptions prévues dans le Règlement sur les marchés de l’État s’applique. Les contrats à fournisseur unique doivent toujours être justifiés."
      },
      "q8": {
        "text": "Des aspects particuliers doivent-ils être pris en considération lors de la conclusion d’un contrat avec un ancien fonctionnaire touchant une pension?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Conclure un contrat avec un ancien fonctionnaire peut susciter un grand intérêt public, donc il faut éviter toute impression de favoritisme ou de privilège. Consultez toujours votre spécialiste en approvisionnement avant de passer un contrat avec un ancien fonctionnaire."
      },
      "q9": {
        "text": "Lesquels des énoncés suivants sont vrais?",
        "options": {
          "1": "Une relation employeur-employé doit se développer durant le contrat.",
          "2": "Les entrepreneurs ne doivent pas être considérés comme des employés.",
          "3": "Les gestionnaires ont la responsabilité d’empêcher que des relations employeur-employé se développent.",
          "4": "Les relations avec les entrepreneurs doivent être strictement professionnelles."
        },
        "feedback": {
          "right": "<span class='v-right' /><strong>Correct!</strong>",
          "wrong": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Les relations entre les gestionnaires et les entrepreneurs doivent demeurer strictement professionnelles. Les entrepreneurs ne doivent pas être considérés comme des employés. De plus, les gestionnaires ont la responsabilité de veiller à ce qu’aucune relation employeur-employé ne se développe pendant la durée du contrat."
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
