<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
          <p>{{$t('introText')}}</p>
          <b-tabs content v-model="tabIndex">
            <b-tab title="Question 1">
              <br>
              <p>{{$t('scenario1')}}</p>
              <hr>
              <radioQuiz :question="$t('q1')" qId="1" />
              <radioQuiz :question="$t('q2')" qId="2" />
            </b-tab>
            <b-tab title="Question 2">
              <br>
              <p>{{$t('scenario2')}}</p>
              <hr>
              <radioQuiz :question="$t('q3')" qId="3" />
              <radioQuiz :question="$t('q4')" qId="4" />
              <radioQuiz :question="$t('q5')" qId="5" />
            </b-tab>
            <b-tab title="Question 3">
              <br>
              <p>{{$t('scenario3')}}</p>
              <hr>
              <radioQuiz :question="$t('q6')" qId="6" />
              <radioQuiz :question="$t('q7')" qId="7" />
              <windowPortal :open="openChart" @close="openChart = false">
                <delegAutorityEn v-if="$i18n.locale=='en'" />
                <delegAutorityFr v-if="$i18n.locale=='fr'" />
              </windowPortal>
                <p><b-button role="link" @click="openChart = true">{{$t('openChartButton')}}</b-button></p>
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
    import delegAutorityEn from "~/components/delegationChart/delegchart_en"
    import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
    import windowPortal from "~/components/newWindow"
    import download from "~/components/fileDownload"
    import HTMLJobaidLink from "~/components/HTMLJobaidLink"
  export default {
    components: {
      checkboxQuiz,
      radioQuiz,
      signatureCard,
      delegAutorityEn,
    delegAutorityFr,
    windowPortal,
    download,
    HTMLJobaidLink 
    },
    data(){
      return{
        tabIndex: 0,
        openChart: false
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
      "openChartButton": "Open the delegation of spending and financial signing authorities chart",
      "introText": "Answer the following questions.",
      "scenario1":"You are a manager of a team providing internal information management services within your organization. You are responsible for managing the budget and have delegated financial authority. Your organization’s spending dollar limit per transaction is $2,500 when using an acquisition card.",
      "scenario2":"You are a manager responsible for providing goods and services during natural disasters. Your department needs to purchase 10,000 sandbags in response to a flooding emergency. You are responsible for managing the budget and have delegated financial and transaction (i.e. contracting) authority.",
      "scenario3":"You require the services of a consultant to conduct an independent review of the accounts payable processes in the department. You believe that this review could be achieved by one expert consultant. You know a former public servant in receipt of a pension who is qualified and available immediately to perform this task at a daily rate of $1,200. You estimate that given the daily rate and expected duration of the contract, the value of the contract would be just over $50,000.",
      "q1": {
        "text": "Following an ergonomic assessment conducted on you and an employee, the specialist recommends that you both replace your desk chairs. He tells you that he has several models of chairs that would suit your needs that he purchases wholesale and sells privately. You check with Accommodations and there are no chairs that suit your needs. What do you do next?",
        "options": {
          "1": "Conduct a Google search for the best ergonomic chair for your needs within the dollar limits of your acquisition card",
          "2": "Ask the ergonomist to show you the models he has for sale that are within the dollar limits of your acquisition card",
          "3": "Identify a Public Services and Procurement Canada standing offer as a source for the purchase of the chairs"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Office furniture is part of the mandatory commodity list; therefore, a Public Services and Procurement Canada standing offer must be used to acquire the chairs."
      },
      "q2": {
        "text": "Which action must be made against the standing offer to acquire the chairs?",
        "options": {
          "1": "A call-up",
          "2": "A purchase order",
          "3": "A request for quotation",
          "4": "A requirements definition"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "A call-up against the standing offer must be done to acquire the chairs."
      },
      "q3": {
        "text": "Which procurement method could be used to purchase the sandbags?",
        "options": {
          "1": "A competitive contract",
          "2": "A sole-source contract",
          "3": "A standing offer",
          "4": "A supply arrangement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "As this acquisition is taking place during a flooding emergency in which delay could be injurious to the public interest, a sole-source contract will be used to purchase the 10,000 sandbags."
      },
      "q4": {
        "text": "Which type of description would you draft to acquire 10,000 sandbags?",
        "options": {
          "1": "A design specification",
          "2": "A performance specification",
          "3": "A combination of design and performance specification",
          "4": "A purchase description specification"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "To acquire 10,000 sandbags, you would prepare a purchase description specification, providing a brief but accurate description of the desired production."
      },
      "q5": {
        "text": "For which of the following situations could you use a sole-source contract, as outlined in the <i>Government Contracts Regulations</i>?",
        "options": {
          "1": "The purchase of cots to set up an emergency shelter following a tornado",
          "2": "The development services of a Department of National Defence secret database",
          "3": "The purchase of a specific software, the only one on the market that is capable of meeting your operational requirements and for which the contractor owns the sole intellectual proprietary rights",
          "4": "All of the above"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "<p>All of the examples represent a condition by which a sole-source contract can be entered into.</p><ul><li>The cots: A pressing emergency in which delay would be injurious to the public interest (Treasury Board approval if exceeds $1 million).</li><li>The secret database: The nature of the work is not in the public interest; soliciting bids would result in revealing sensitive Government of Canada information.</li><li>The software: only one person or supplier is capable of fulfilling the contract.</li></ul>"
      },
      "q6": {
        "text": "Could you proceed with a $50,000 sole-source contract?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "In this situation, the proposed contract does not meet any of the exceptions to set aside the need to solicit bids. Bids would have to be solicited first and the contract awarded to the successful bidder based on preestablished evaluation criteria and contractor selection method."
      },
      "q7": {
        "text": "After consulting your procurement specialist, you decide to initiate a competitive process to contract a consultant to conduct an independent review of the accounts payable processes in the department. Based on the delegation of financial signing authority chart provided, do you have the authority to approve a $50,000 contract for a former public servant in receipt of a pension?",
        "options": {
          "1": "Yes",
          "2": "No"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Only the deputy head has the authority to contract with a former public servant in receipt of a pension."
      }
    },
    "fr": {
      "openChartButton": "Ouvrir le tableau de délégation de pouvoirs",
      "introText": "Répondez aux questions suivantes :  ",
      "scenario1":"Vous êtes le gestionnaire d’une équipe fournissant des services de gestion de l’information interne au sein de votre organisation. Vous êtes responsable de la gestion du budget, et les pouvoirs financiers vous ont été délégués. La limite de dépenses par transaction fixée par votre organisation est de 2 500 $ lorsque vous utilisez une carte d’achat.",
      "scenario2":"Vous êtes un gestionnaire responsable de la fourniture de biens et de services en cas de catastrophe naturelle. Votre ministère doit acheter d’urgence 10 000 sacs de sable pour lutter contre une inondation. Vous êtes responsable de la gestion du budget et vous disposez des pouvoirs financiers et d’exécuter une opération (c.-à-d. l'attribution de contrats).",
      "scenario3":"Vous avez besoin des services d’un consultant pour effectuer un examen indépendant du processus des comptes fournisseurs au sein du ministère. Vous croyez que cet examen pourrait être réalisé par un expert-conseil. Vous connaissez un ancien fonctionnaire qui touche une pension et qui est qualifié et disponible immédiatement pour effectuer cette tâche à un taux quotidien de 1 200 $. Vous estimez que, compte tenu du taux quotidien et de la durée prévue du contrat, la valeur du contrat serait légèrement supérieure à 50 000 $.",
       "q1": {
        "text": "À la suite d’une évaluation ergonomique réalisée pour vous et un employé, le spécialiste recommande le remplacement de vos deux chaises de bureau. Il vous explique que plusieurs modèles de chaises qu’il achète en gros et vend en privé répondraient à vos besoins. Vous vérifiez auprès des Services d’aménagement, et il n’y a pas de chaises qui correspondent à vos besoins. Que faites-vous?",
        "options": {
          "1": "Vous effectuez une recherche en ligne pour trouver la meilleure chaise ergonomique répondant à vos besoins dans les limites de votre carte d’achat.",
          "2": "Vous demandez à l’ergonome de vous montrer les modèles qu’il a à vendre dont le prix respect les limites de votre carte d’achat.",
          "3": "Vous trouvez une offre à commandes de Services publics et Approvisionnement Canada comme source pour l’achat des chaises."
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Le mobilier de bureau fait partie de la liste des produits obligatoires; par conséquent, une offre à commandes de Services publics et Approvisionnement Canada doit être utilisée pour acquérir les chaises."
      },
      "q2": {
        "text": "Quel instrument devez-vous utiliser pour acquérir les chaises à partir de l’offre à commandes?",
        "options": {
          "1": "Une commande subséquente",
          "2": "Un bon de commande",
          "3": "Une demande de prix",
          "4": "Une définition des besoins"
        },
        "feedback": {
          "1": "<span class='v-right' /><strong>Correct!</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Une commande subséquente à l’offre à commandes doit être effectuée pour acquérir les chaises."
      },
      "q3": {
        "text": "Quelle méthode d’approvisionnement pourrait être utilisée pour acheter les sacs de sable?",
        "options": {
          "1": "Un contrat concurrentiel",
          "2": "Un contrat à fournisseur unique",
          "3": "Une offre à commandes",
          "4": "Un arrangement en matière d’approvisionnement"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
        },
        "conclusion": "Comme cette acquisition a lieu pendant une urgence, et que dans ce contexte, tout retard pourrait être préjudiciable à l’intérêt public, un contrat à fournisseur unique sera utilisé pour acheter les 10 000 sacs de sable."
      },
      "q4": {
        "text": "Quel type de description rédigeriez-vous pour acquérir les 10 000 sacs de sable?",
        "options": {
          "1": "Des normes de conception",
          "2": "Des spécifications fonctionnelles",
          "3": "Une combinaison de normes de conception et de spécifications fonctionnelles",
          "4": "Une description de l’achat"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Pour acquérir les 10 000 sacs de sable, vous devez préparer une description de l’achat, fournissant une description brève, mais précise du produit souhaité."
      },
      "q5": {
        "text": "Pour laquelle des situations suivantes pourriez-vous utiliser un contrat à fournisseur unique, comme indiqué dans le <i>Règlement sur les marchés de l’État</i>?",
        "options": {
          "1": "L’achat de lits portatifs pour fournir un abri d’urgence à la suite d’une tornade",
          "2": "Les services de conception d’une base de données secrète du ministère de la Défense nationale",
          "3": "L’achat d’un logiciel précis, le seul sur le marché qui permet de répondre à vos besoins opérationnels et pour lequel l’entrepreneur détient les droits exclusifs de propriété intellectuelle",
          "4": "Toutes ces réponses"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "4": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "<p>Tous les exemples répondent à une condition permettant de conclure un contrat à fournisseur unique.</p><ul><li>Les lits : Il s’agit d’une extrême urgence à l’égard de laquelle tout retard serait préjudiciable à l’intérêt public (approbation du Conseil du Trésor requise si l’achat est supérieur à un million de dollars).</li><li>La base de données secrète : La nature du travail n’est pas dans l’intérêt public; la demande de soumissions entraînerait la divulgation de renseignements sensibles du gouvernement du Canada.</li><li>Le logiciel : une seule personne ou un seul fournisseur est en mesure d’exécuter le contrat.</li></ul>"
      },
      "q6": {
        "text": "Pourriez-vous conclure un contrat à fournisseur unique de 50 000 $?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "2": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Dans cette situation, le contrat proposé ne satisfait à aucune des exceptions pour écarter la nécessité de demander des soumissions. Vous devriez tout d’abord procéder à une demande de soumissions, à la suite de laquelle le contrat sera accordé au soumissionnaire retenu en fonction de critères d’évaluation préétablis et de la méthode de sélection des entrepreneurs."
      },
      "q7": {
        "text": "Après avoir consulté votre spécialiste en approvisionnement, vous décidez de lancer un processus concurrentiel pour confier à un consultant le mandat d’effectuer un examen indépendant des processus de comptes fournisseurs au sein du ministère. Selon le tableau de délégation des pouvoirs de dépenser et de signer des documents financiers, avez-vous le pouvoir d’approuver un contrat de 50 000 $ pour un ancien fonctionnaire qui reçoit une pension?",
        "options": {
          "1": "Oui",
          "2": "Non"
        },
        "feedback": {
          "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
          "3": "<span class='v-right' /><strong>Correct!</strong>"
        },
        "conclusion": "Seul l’administrateur général a le pouvoir de passer un contrat avec un ancien fonctionnaire recevant une pension."
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
