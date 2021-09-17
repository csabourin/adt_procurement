<template>
  <span>
    <div class="pure-radiobutton pure-checkbox">
  <b-card>
    <b-container class="workplan-table wp-table-1">
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpGovtPri')"></h3>
          <p v-html="$t('govtPriorities')"></p>
        
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpDeptPri')"></h3>
          <p v-html="$t('deptPriorities')"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpDirPri')"></h3>
          <p v-html="$t('dirPriorities')"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('titleActivities')"></h3>
        </b-col>
      </b-row>

        <!---------------------- ACTIVITY 1 -->      
      <b-row>
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA1')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('psA1')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p v-html="$t('pD1')"></p>
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR1')">Roulement du personnel</p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <p v-html="$t('pM1')"></p>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <p v-html="$t('pR1_1')"></p>
        </b-col>
        
        <!---------------------- ACTIVITY 2 --> 
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA2')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('pSA2')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p v-html="$t('pD2_1w')" ></p>
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR2')">Roulement du personnel</p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <p v-html="$t('pM2')"></p>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <p v-html="$t('pRes2')"></p>
        </b-col>


        
        <!---------------------- ACTIVITY 3 --> 
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA3')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('pSA3')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p v-html="$t('pD3')"></p>
          
          <h5 v-html="$t('titleRisk')">Risque</h5>
          <p v-html="$t('pR2')"></p>
          <h5 v-html="$t('titleLikelihood')">Probabilité</h5>
          <p v-html="$t('low')">Faible</p>
          <h5 v-html="$t('titleImpact')">Impact</h5>
          <p v-html="$t('high')">Élevé</p>
          <h5 v-html="$t('titleMitigation')">Atténuation</h5>
          <p v-html="$t('pM2')"></p>
          <h5 v-html="$t('titleResources')">Resources</h5>
          <p v-html="$t('pRes3')">
          </p>
        </b-col>
        
      </b-row>
    </b-container>
    <hr>
    <p><strong>{{$t('scenario')}}</strong></p>
    <p>{{$t('introText')}}</p>
    <b-tabs v-model="tabIndex">
        <b-tab title="Question 1"><checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2","3"]' /></b-tab>
        <b-tab title="Question 2"><checkboxQuiz :question="$t('q2')" qId="2" :Answer='["1","3","4"]' /></b-tab>
        <b-tab title="Question 3"><checkboxQuiz :question="$t('q3')" qId="3" :Answer='["1","2","3"]' /></b-tab>
        <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
        <b-tab title="Question 5"><checkboxQuiz :question="$t('q5')" qId="5" :Answer='["1","2","3"]' /></b-tab>
        <b-tab title="Question 6"><radioQuiz :question="$t('q6')" qId="6" /></b-tab>
    </b-tabs>
  </b-card>
  <!-- Control buttons-->
  <div class="text-center">
    <b-button-group :aria-label="$t('questionNav')" class="mt-2">
      <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
      <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=5">{{$t('nextPage')}}</b-button>
    </b-button-group>
  </div>
</div>
</span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { 
    radioQuiz, 
    checkboxQuiz 
    },
  data() {
  return {
      tabIndex: 0
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active").focus();
      }, 300);
    },
  }
}
</script>
<i18n>{
  "en": {
    "scenario":"Scenario",
    "introText": "Looking at the work plan provided, you realize that you must buy a vehicle as well as computer tablets to be able to conduct inspections. Answer the following questions.",
    "pwpInstructions": "Your director has been to a steering committee and now has new information that should be reflected in your work plan. Here are the 3 new pieces of information: ",
    "thing1": "New software will be implemented to speed up the issuing of licences ",
    "thing2": "A new policy now requires licences to be issued in 15 days, not 30 days, starting November 1 and",
    "thing3": "There’s been a decision not to replace a retiring employee.",
    "pwpTitle": "Adjust your work plan by selecting the best answer to the following questions.",
    "pwpGovtPri": "Government priorities",
    "pwpDeptPri": "Departmental priorities",
    "pwpDirPri": "Directorate priorities",
    "titleActivities": "Activities",
    "pwpPlanAct": "Activities",
    "titleSubActivities": "Sub-activities",
    "titleDeliverables": "Deliverables",
    "titleRisk": "Risk",
    "titleLikelihood": "Likelihood",
    "titleImpact": "Impact",
    "titleMitigation": "Mitigation",
    "titleResources": "Resources",
    "qDisabled": "Please select one",
    "govtPriorities": "To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations",
    "deptPriorities": "To support prosperous and sustainable commercial, Indigenous and recreational fisheries, aquaculture and other oceans industries",
    "dirPriorities": "To manage the commercial domestic fisheries",
    "pA1": "Manage and administer the directorate",
    "psA1": "<ul><li>Supervise, monitor and train staff&nbsp;</li><li>Schedule work&nbsp;</li><li>Provide clerical support&nbsp;</li><li>Move office to new location </li></ul>",
    "pD1": "<ul><li>Management of licencing activities</li><li>Reception covered from 9 to 5</li></ul>",
    "pD1add":"Training for all officers on the new fisheries software",
    "pD2add":"Implementation of new fisheries software",
    "pR1": "<ul><li>Staff turnover</li></ul>",
    "low": "<ul><li>Low</li></ul>",
    "high": "<ul><li>High</li></ul>",
    "pM1": "<ul><li>Establish succession plan</li><li>Establish collective staffing pools</li><li>Recognize excellent work</li><li>Celebrate successes</li><li>Involve employees in decision-making</li><li>Implement flexible work hours</li></ul>",
    "pM1_1": "Implement flexible work hours",
    "pR1_1": "<ul><li>1 administrative assistant</li><li>1 manager</li></ul>",
    "pR1_2": "<ul><li>Manager</li></ul>",
    "pA2": "Issue commercial fishing licences",
    "pSA2": "<ul><li>Review applicant requests</li><li>Check reliability</li><li>Issue licences</li><li>Conduct inspections</li></ul>",
    "pD2_1w": "<ul><li>Issue licence within 30 days of request</li><li>Issue 500 licences per year</li></ul>",
    "pR2": "<ul><li>Overfishing</li></ul>",
    "pM2": "<ul><li>Protect habitat</li><li>Place catching limits</li><li>Implement fishing seasons</li></ul>",
    "pRes2": "<ul><li>1 officer</li><li>2 analysts</li><li>1 junior officer</li></ul>",
    "pA3": "Renew commercial fishing licences",
    "pSA3": "<ul><li>Review applicant renewal requests</li><li>Issue renewal licence</li></ul>",
    "pD3": "<ul><li>Issue licence renewal within 30 days of request</li><li>Issue 300 licence renewals per year </li></ul>",
    "pRes3": "<ul><li>1 officer</li><li>1 junior analyst</li><ul>",
    "qDisabled": "Choose",
    "pwpGovtPri": "<strong>Government priorities</strong>",
    "pwpDeptPri": "<strong>Departmental priorities</strong>",
    "pwpDirPri": "<strong>Directorate priorities</strong>",
    "titleActivities": "Activities",
    "pwpPlanAct": "<strong>Activities</strong>",
    "titleSubActivities": "Sub-activities",
    "titleDeliverables": "Deliverables",
    "titleRisk": "Risk",
    "titleLikelihood": "Likelihood",
    "titleImpact": "Impact",
    "titleMitigation": "Mitigation",
    "titleResources": "Resources",
    "q1": {
      "text": "When buying a vehicle, which costs do you need to consider?",
      "options": {
        "1": "Maintenance costs ",
        "2": "Repair costs",
        "3": "Operating costs",
        "4": "Installation costs"
      },
       "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> When buying a vehicle, you need to consider maintenance costs such as oil changes, repair costs such as a broken fan belt and operating costs such as gas. ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> When buying a vehicle, you need to consider maintenance costs such as oil changes, repair costs such as a broken fan belt and operating costs such as gas."
      }
    },
      "q2": {
      "text": "You need to purchase five computer tablets. Which costs do you need to consider?",
      "options": {
        "1": "Disposal costs",
        "2": "Incentive costs ",
        "3": "Maintenance costs",
        "4": "Safeguarding costs"
      },
       "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> When purchasing five computer tablets, you need to consider disposal costs, maintenance costs and safeguarding costs.  ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> When purchasing five computer tablets, you need to consider disposal costs, maintenance costs and safeguarding costs."
      }
    },
    "q3": {
      "text": "Where can you go to estimate how much your computer tablets will cost?",
      "options": {
        "1": "Consult a catalogue",
        "2": "Do an internet search",
        "3": "Look at previous purchases",
        "4": "Guesstimate"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> You can consult a catalogue, do an internet search and look at previous purchases to estimate how much your computer tablets will cost.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> You can consult a catalogue, do an internet search and look at previous purchases to estimate how much your computer tablets will cost."
      }
    },
    "q4": {
      "text": "Dropping and breaking a computer tablet is an example of...",
      "options": {
        "1": "Mitigation",
        "2": "Risk",
        "3": "Likelihood",
        "4": "Impact"
      },
       "feedback": {
       "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Dropping and breaking a computer tablet is an example of risk. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Dropping and breaking a computer tablet is an example of risk. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Dropping and breaking a computer tablet is an example of risk. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Dropping and breaking a computer tablet is an example of risk. "
      }
    },
    "q5": {
      "text": "A risk mitigation strategy for dropping and breaking a computer tablet could be... ",
      "options": {
        "1": "Buying a shatter-proof cover",
        "2": "Keeping an old laptop for backup",
        "3": "Purchasing a warranty for the computer tablet",
        "4": "Not allowing computer tablets to be taken out of the office "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Buying a shatter-proof cover, keeping an old laptop for backup and purchasing insurance for the tablet are all examples of risk mitigation strategies.",
        "right": "<span class='v-right' /> <strong>Correct!</strong> Buying a shatter-proof cover, keeping an old laptop for backup and purchasing insurance for the tablet are all examples of risk mitigation strategies."
      }
    },
    "q6": {
      "text": "Which of the following activities is <u>NOT</u> done during a risk assessment? ",
      "options": {
        "1": "Identify the events that could stop you from delivering your activities",
        "2": "Identify the potential loss associated with the event",
        "3": "Determine the probability of the event happening or not",
        "4": "Identify next year’s activities and budget",
        "5": "Identify the actions you can take to lower the potential of that event happening"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Identifying next year’s activities and budget is linked to establishing a work plan, not doing a risk assessment.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Identifying next year’s activities and budget is linked to establishing a work plan, not doing a risk assessment.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Identifying next year’s activities and budget is linked to establishing a work plan, not doing a risk assessment.",
        "4": "<span class='v-right' /> <strong>Correct!</strong> Identifying next year’s activities and budget is linked to establishing a work plan, not doing a risk assessment.",
        "5": "<span class='v-wrong' /> <strong>Incorrect.</strong> Identifying next year’s activities and budget is linked to establishing a work plan, not doing a risk assessment."
      }
    }
  },
  "fr": {
    "scenario":"Scénario",
    "introText": "En regardant le plan de travail fourni, vous vous rendez compte que vous devez acheter un véhicule ainsi que des tablettes informatiques pour pouvoir effectuer des inspections. Répondez aux questions suivantes.",
    "pwpInstructions": "Votre directeur vous dit qu’il a participé à un comité directeur et qu’il dispose maintenant de nouveaux renseignements qui devraient se refléter dans votre plan de travail. Voici les trois nouveaux renseignements :",
    "thing1": "un nouveau logiciel sera installé pour accélérer la délivrance des permis;",
    "thing2": "une nouvelle politique qui exige maintenant que les permis soient délivrés en 15 jours, et non plus en 30 jours, à compter du 1er novembre;",
    "thing3": "une décision de ne pas remplacer un employé qui prend sa retraite.",
    "pwpTitle": "Ajustez votre plan de travail en choisissant la meilleure réponse aux questions suivantes&nbsp;:",
    "pwpGovtPri": "Priorités du gouvernement",
    "pwpDeptPri": "Priorités ministérielles",
    "pwpDirPri": "Priorités de la direction",
    "titleActivities": "Activités",
    "titleSubActivities": "Sous-activités",
    "titleDeliverables": "Livrables",
    "titleRisk": "Risque",
    "titleLikelihood": "Probabilité",
    "titleImpact": "Impact",
    "titleMitigation": "Atténuation",
    "titleResources": "Ressources",
    "qDisabled": "Veuillez faire un choix",
    "govtPriorities": "Servir les Canadiens en assurant l’utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
    "deptPriorities": "Soutenir des pêches commerciales, autochtones et récréatives prospères et durables, l’aquaculture et d’autres industries maritimes.",
    "dirPriorities": "Gérer les pêches commerciales.",
    "pA1": "Gérer et administrer la direction&nbsp;",
    "psA1": "<ul><li> Superviser, surveiller et former le personnel&nbsp;<li> Planifier le travail&nbsp;</li><li> Fournir du soutien administratif&nbsp;</li><li> Déménagement des bureaux dans de nouveaux locaux</li></ul>",
    "pD1": "<ul><li>Gestion des activités de délivrance de permis</li><li> Réception ouverte de 9&nbsp;h à 17&nbsp;h</li></ul>",
    "pD1add":"Formation de tous les agents sur le nouveau logiciel de gestion des pêches",
    "pD2add":"Lancement d’un nouveau logiciel de gestion des pêches",
    "pR1": "<ul><li>Roulement du personnel</li></ul>",
    "low": "<ul><li>Faible</li></ul>",
    "high": "<ul><li>&Eacute;levé</li></ul>",
    "pM1": "<ul><li>&Eacute;tablir un plan de relève</li><li>Établir des bassins de dotation collective</li><li> Reconna&icirc;tre l’excellence du travail</li><li> Célébrer les succès</li><li> Impliquer les employés dans la prise de décisions</li><li>Horaires de travail flexibles</li></ul>",
    "pM1_1": "<ul><li>Mettre en &oelig;uvre des horaires de travail flexibles</li></ul>",
    "pR1_1": "<ul><li>1 adjoint administratif</li><li>1 gestionnaire</li></ul>",
    "pA2": "Délivrer des permis de p&ecirc;che commerciale",
    "pSA2": "<ul><li>Examiner les dossiers des demandeurs</li><li>Vérifier la fiabilité</li><li>Délivrer des permis</li><li>Effectuer des inspections</li></ul>",
    "pD2_1w": "<ul><li>Délivrer le permis dans les 30 jours suivant la demande</li><li>Délivrer 500 permis par an </li></ul>",
    "pD2_1r": "<ul><li>Délivrer le permis dans les 15 jours suivant la demande</li></ul>",
    "pD2_2": "<ul><li>Délivrer 500 permis par an</li></ul>",
    "pR2": "<ul><li>Surp&ecirc;che</li></ul>",
    "pM2": "<ul><li> Protéger l'habitat</li><li> Fixer des limites de capture</li><li> Lancer les saisons de p&ecirc;che</li></ul>",
    "pRes2": "<ul><li>1 agent</li><li>2 analystes</li><li>1 agent subalterne</li></ul>",
    "pA3": "Renouveler les permis de p&ecirc;che commerciale",
    "pSA3": "<ul><li> Examiner les dossiers de renouvellement des demandeurs</li><li> Délivrer des renouvellements de permis&nbsp;</li></li></ul>",
    "pD3": "<ul><li> Délivrer les renouvellements de permis dans les 30 jours suivant la demande</li><li> Délivrer 300  renouvellements de permis par an</li></ul>",
    "pRes3": "<ul><li>1 agent</li><li>1 analyste subalterne</li></ul>",
  
  "q1": {
      "text": "Lors de l’achat d’un véhicule, quels sont des exemples de coûts que vous devez considérer?",
      "options": {
        "1": "Frais d’entretien",
        "2": "Coûts de réparation",
        "3": "Coûts d’exploitation",
        "4": "Frais d’installation"
      },
       "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Lorsque vous achetez un véhicule, vous devez tenir compte des frais d’entretien, tels que les vidanges d’huile, les coûts de réparation, comme une courroie de ventilateur cassée, et les frais d’entretien, comme l’achat d'essence. ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Lorsque vous achetez un véhicule, vous devez tenir compte des frais d’entretien, tels que les vidanges d’huile, les coûts de réparation, comme une courroie de ventilateur cassée, et les frais d’entretien, comme l’achat d'essence."
      }
    },
      "q2": {
      "text": "Vous devez acheter 5 tablettes informatiques. Quels sont des exemples de coûts que vous devez considérer?",
      "options": {
        "1": "Coûts d’aliénation",
        "2": "Coûts des mesures d’encouragement",
        "3": "Frais d'entretien",
        "4": "Coûts de sauvegarde"
      },
       "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Lorsque vous achetez 5 tablettes informatiques, vous devez tenir compte des coûts d'aliénation, des frais d’entretien et des coûts de sauvegarde.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Lorsque vous achetez 5 tablettes informatiques, vous devez tenir compte des coûts d'aliénation, des frais d’entretien et des coûts de sauvegarde."
      }
    },
    "q3": {
      "text": "Où pouvez-vous aller pour estimer le coût de vos tablettes informatiques? ",
      "options": {
        "1": "Consulter un catalogue",
        "2": "Faire une recherche sur Internet",
        "3": "Examiner les achats précédents",
        "4": "Deviner"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Vous pouvez consulter un catalogue, faire une recherche sur Internet et examiner les achats précédents pour estimer le coût de vos tablettes informatiques.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous pouvez consulter un catalogue, faire une recherche sur Internet et examiner les achats précédents pour estimer le coût de vos tablettes informatiques."
      }
    },
    "q4": {
      "text": "La chute et le bri d’une tablette informatique est un exemple de...",
      "options": {
        "1": "Atténuation",
        "2": "Risque ",
        "3": "Probabilité",
        "4": "Impact"
      },
       "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> La chute et le bri d’une tablette informatique est un exemple de risque.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> La chute et le bri d’une tablette informatique est un exemple de risque.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> La chute et le bri d’une tablette informatique est un exemple de risque. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> La chute et le bri d’une tablette informatique est un exemple de risque. "
      }
    },
    "q5": {
      "text": "Une stratégie d'atténuation des risques pour faire la chute et le bri d’une tablette informatique pourrait être...",
      "options": {
        "1": "Acheter un boîtier incassable",
        "2": "Conserver un vieux portable pour dépanner",
        "3": "Acheter une garantie pour la tablette informatique",
        "4": "Interdire de sortir les tablettes d'ordinateur du bureau"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Acheter un boîtier incassable, conserver un vieux portable pour dépanner et acheter une garantie pour la tablette informatique sont tous des exemples de stratégies d’atténuation des risques.",
        "right": "<span class='v-right' /> <strong>Correct!</strong> Acheter un boîtier incassable, conserver un vieux portable pour dépanner et acheter une garantie pour la tablette informatique sont tous des exemples de stratégies d’atténuation des risques."
      }
    },
    "q6": {
      "text": "Parmi les activités suivantes, laquelle n’est <u>PAS</u> effectuée lors d’une évaluation des risques?",
      "options": {
        "1": "Identifier les événements qui pourraient vous empêcher de réaliser vos activités",
        "2": "Identifier la perte potentielle associée à l'événement",
        "3": "Deviner si l'événement aura lieu ou non",
        "4": "Identifier les activités et le budget de l'année prochaine ",
        "5": "Identifier les actions que vous pouvez entreprendre pour réduire le risque que cet événement se produise "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> L’identification des activités et du budget de l’année prochaine est liée à l’établissement d’un plan de travail, et non à une évaluation des risques.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> L’identification des activités et du budget de l’année prochaine est liée à l’établissement d’un plan de travail, et non à une évaluation des risques.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> L’identification des activités et du budget de l’année prochaine est liée à l’établissement d’un plan de travail, et non à une évaluation des risques.",
        "4": "<span class='v-right' /> <strong>Correct!</strong> L’identification des activités et du budget de l’année prochaine est liée à l’établissement d’un plan de travail, et non à une évaluation des risques.",
        "5": "<span class='v-wrong' /> <strong>Incorrect.</strong> L’identification des activités et du budget de l’année prochaine est liée à l’établissement d’un plan de travail, et non à une évaluation des risques."
      }
    }
  }
}</i18n>
<style type="text/css" scoped>
select {
  width: 100%;
}

.scrollMe {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.tableColoured {
  table-layout: fixed;
  width: 100%;
  counter-reset: wpParts
}

.tableColoured td:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}

.tableColoured td {
  vertical-align: top;
  position: relative;
  padding-left: 35px;
}

.tableColoured select {
  max-width: 100%;
}

.vertical {
  transform: rotate(90deg);
}

.deptPri:before {
  background-color: #167777;
}

.deptPri {
  border-top: 2px solid #167777;
  background-color: #c7e0e0
}

.govtPri {
  border-top: 2px solid #6C076C;
  background-color: #e1c8e1
}

.govtPri:before {
  background-color: #6C076C;
}

.dirPri {
  border-top: 2px solid #6F1E0D;
  background-color: #e2ceca
}

.dirPri:before {
  background-color: #6F1E0D;
}

.planAct {
  border-top: 2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-top: 2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-top: 2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-top: 2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-top: 2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planImpact {
  border-top: 2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}

.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-top: 2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-top: 2px solid #C35522;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #C35522;
}

.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 25px;
}

.thNumbered:before {
  position: absolute;
  counter-increment: wpParts;
  content: counter(wpParts);
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}
</style>