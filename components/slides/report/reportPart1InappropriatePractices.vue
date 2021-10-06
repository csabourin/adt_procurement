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
          </b-tabs>
          <!-- Control buttons-->
          <div class="text-center">
            <b-button-group :aria-label="$t('questionNav')" class="mt-2">
              <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
              <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
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
      "introText": "Let’s see what you know about what not to do by answering the following questions.",
      "q1": {
        "text": "During a construction project, a manager without delegated authority tells the contractor to change the flooring from carpet to tile. This is an example of which of the following inappropriate practices?",
        "options": {
          "1": "Backdating a contract",
          "2": "Contract splitting",
          "3": "Contracting without proper authority",
          "4": "Payrolling"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "This is an example of contracting without proper authority. Entering into a contract without authority approvals occurs when a representative of the Crown commits the Government of Canada to a contract for goods or service without the prior necessary authority approvals related to Transaction Authority (such as contracting authority) in accordance with the <em>Financial Administration Act</em> and other relevant legislation."
      },
      "q2": {
        "text": "What occurs when a representative of the Crown names a preferred individual to conduct services to a company bidding on proposals for professional service contracts or directs an individual to register with a particular bidder?",
        "options": {
          "1": "Contract splitting",
          "2": "Employer-employee relationships",
          "3": "Inappropriate sole-sourcing",
          "4": "Payrolling"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "The practice of payrolling occurs when a representative of the Crown names a preferred individual to conduct services to a company bidding on proposals for professional service contracts or directs an individual to register with a particular bidder or winning bidder."
      },
      "q3": {
        "text": "A manager has drafted descriptions and requirements for the solicitation documents that make it impossible for all but one contractor to apply. This is an example of which inappropriate practice?",
        "options": {
          "1": "Contract splitting",
          "2": "Contracting without a written contract",
          "3": "Inappropriate sole-sourcing",
          "4": "Inappropriate statement of work or evaluation criteria"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Tailoring a statement of work in order or evaluation criteria to favour a particular supplier or group of suppliers is an inappropriate procurement practice."
      }
    },
    "fr": {
      "introText": "Voyons ce que vous savez sur ce qu’il ne faut pas faire en répondant aux questions suivantes.",
       "q1": {
        "text": "Au cours d’un projet de construction, un gestionnaire sans pouvoir délégué demande à l’entrepreneur de remplacer le tapis par du carrelage. De quelles pratiques inappropriées s’agit-il?",
        "options": {
          "1": "Antidater un contrat",
          "2": "Fractionnement d’un contrat",
          "3": "Attribution d’un contrat sans les pouvoirs nécessaires",
          "4": "Embauchage obligatoire"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Il s’agit d’un exemple d’attribution d’un contrat sans les pouvoirs nécessaires. Il y a conclusion d’un contrat sans les pouvoirs nécessaires lorsqu’un représentant de l’État engage le gouvernement du Canada dans un contrat de biens ou de services sans avoir obtenu au préalable les autorisations nécessaires liées au pouvoir d’exécuter une opération (comme l’autorité contractante), conformément à la <em>Loi sur la gestion des finances publiques</em> et aux autres lois pertinentes."
      },
      "q2": {
        "text": "Que se passe-t-il lorsqu’un représentant de l’État nomme une personne pour fournir des services à une entreprise qui fait une soumission pour des contrats de services professionnels ou qu’il invite une personne à s’inscrire auprès d’un soumissionnaire en particulier?",
        "options": {
          "1": "Fractionnement d’un contrat",
          "2": "Relations employeur-employé",
          "3": "Recours inapproprié à un fournisseur unique",
          "4": "Embauchage obligatoire"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "La pratique d’embauchage obligatoire se produit lorsqu’un représentant de l’État nomme une personne pour fournir des services à une entreprise qui fait une soumission pour des contrats de services professionnels ou lorsqu’il invite une personne à s’inscrire auprès d’un soumissionnaire particulier ou d’un soumissionnaire retenu."
      },
      "q3": {
        "text": "Selon les descriptions et les exigences relatives aux documents de demande de soumissions rédigées par un gestionnaire, un seul entrepreneur peut présenter sa candidature. De quelle pratique inappropriée s’agit-il?",
        "options": {
          "1": "Fractionnement d’un contrat",
          "2": "Attribution d’un contrat sans autorisation écrite",
          "3": "Recours inapproprié à un fournisseur unique",
          "4": "Énoncé des travaux ou critère d’évaluation inapproprié"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "La personnalisation d’un énoncé des travaux ou des critères d’évaluation de manière à privilégier un fournisseur ou un groupe de fournisseurs en particulier est une pratique d’approvisionnement inappropriée."
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
