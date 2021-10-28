<template>
  <span>
      <p v-html="$t('instructions')" />
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
      <hr style="border:white;">
    </b-container>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <hr style="border:white;"><p><b>{{$t('introText')}}</b></p><p>{{$t('introText2')}}</p>
          <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['4']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['3']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['2']" :feedback="$t('q3.feedback')" qid="q3" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['7']" :feedback="$t('q4.feedback')" qid="q4" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q5.sentence')" :termList="$t('q5.choices')" :answer="['5']" :feedback="$t('q5.feedback')" qid="q5" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q6.sentence')" :termList="$t('q6.choices')" :answer="['6']" :feedback="$t('q6.feedback')" qid="q6" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q7.sentence')" :termList="$t('q7.choices')" :answer="['1']" :feedback="$t('q7.feedback')" qid="q7" />
        </b-tab>
        <b-tab title="Question 2">
          <checkboxQuiz :question="$t('q8')" qId="8" :Answer='["2","3","6"]'/>
        </b-tab>
        
      </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
  </span>
  
</template>
<script type="text/javascript">
  import fillTheBlanks from "~/components/interface/fillTheBlanks"
  import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: {
    fillTheBlanks,
    checkboxQuiz
  },
  data(){
    return{
      tabIndex:0
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").setAttribute("tabindex", 0);
          document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset, .tab-pane.active .workplan-table").focus();
      }, 300);
    }
  }
}
</script>
<i18n>
  {
  "en": {
    "instructions":"Looking at the work plan provided, identify which goods and services you will need to procure by answering the following questions. ",
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
    "pM1": "<ul><li>Establish succession plan</li><li>Establish collective staffing pools</li><li>Recognize excellent work</li><li>Celebrate successes</li><li>Involve employees in decision-making</li><li>Implement flexible work hours</li><li>Ensure virtual and in-person workplaces are accessible</li></ul>",
    "pM1_1": "Implement flexible work hours",
    "pR1_1": "<ul><li>1 administrative assistant</li><li>1 manager</li></ul>",
    "pR1_2": "<ul><li>Manager</li></ul>",
    "pA2": "Issue commercial fishing licences",
    "pSA2": "<ul><li>Review applicant requests</li><li>Check reliability</li><li>Ensure licences are accessible </li><li>Issue licences</li><li>Conduct inspections</li></ul>",
    "pD2_1w": "<ul><li>Issue licence within 30 days of request</li><li>Issue 500 licences per year</li></ul>",
    "pR2": "<ul><li>Overfishing</li></ul>",
    "pM2": "<ul><li>Protect habitat</li><li>Place catching limits</li><li>Implement fishing seasons</li></ul>",
    "pRes2": "<ul><li>1 officer</li><li>2 analysts</li><li>1 junior officer</li></ul>",
    "pA3": "Renew commercial fishing licences",
    "pSA3": "<ul><li>Review applicant renewal requests</li><li>Issue licence renewal</li></ul>",
    "pD3": "<ul><li>Issue licence renewal within 30 days of request</li><li>Issue 300 licence renewals per year </li></ul>",
    "pRes3": "<ul><li>1 officer</li><li>1 junior analyst</li><ul>",
    "introText": "For the following sub-activities, identify the goods or services needed.",
    "introText2": "Select the best choice to fill in the blanks.",
    "q1": {
      "sentence": "To properly set up your new office space, you will {0} to design an accessible floor plan.",
      "choices": {
        "1": "buy office furniture  ",
        "2": "buy pens and paper",
        "3": "contract a security company",
        "4": "contract an interior design consultant ",
        "5": "pay for a training course",
        "6": "purchase ergonomic equipment ",
        "7": "renew a specialized software subscription"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "During the move, you will need to {0} to control access and secure the work site.",
      "choices": {
        "1": "buy office furniture  ",
        "2": "buy pens and paper",
        "3": "contract a security company",
        "4": "contract an interior design consultant ",
        "5": "pay for a training course",
        "6": "purchase ergonomic equipment ",
        "7": "renew a specialized software subscription"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q3": {
      "sentence": "You must {0} as well as other office supplies to “Provide clerical support”.",
      "choices": {
        "1": "buy office furniture  ",
        "2": "buy pens and paper",
        "3": "contract a security company",
        "4": "contract an interior design consultant ",
        "5": "pay for a training course",
        "6": "purchase ergonomic equipment ",
        "7": "renew a specialized software subscription"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q4": {
      "sentence": "To “Review applicant renewal requests” on the computer, you must {0} each year.",
      "choices": {
        "1": "buy office furniture  ",
        "2": "buy pens and paper",
        "3": "contract a security company",
        "4": "contract an interior design consultant ",
        "5": "pay for a training course",
        "6": "purchase ergonomic equipment ",
        "7": "renew a specialized software subscription"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q5": {
      "sentence": "The sub-activity “Supervise, monitor and train staff” requires you to {0} for a new employee.",
      "choices": {
        "1": "buy office furniture  ",
        "2": "buy pens and paper",
        "3": "contract a security company",
        "4": "contract an interior design consultant ",
        "5": "pay for a training course",
        "6": "purchase ergonomic equipment ",
        "7": "renew a specialized software subscription"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q6": {
      "sentence": "You must ensure that your new employee has the proper equipment to meet their accessibility and accommodation needs. This may require you to {0} . ",
      "choices": {
        "1": "buy office furniture  ",
        "2": "buy pens and paper",
        "3": "contract a security company",
        "4": "contract an interior design consultant ",
        "5": "pay for a training course",
        "6": "purchase ergonomic equipment ",
        "7": "renew a specialized software subscription"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q7": {
      "sentence": "Under the “Schedule work” sub-activity, you must make sure that a new employee has the proper equipment and must {0} .",
      "choices": {
        "1": "buy office furniture  ",
        "2": "buy pens and paper",
        "3": "contract a security company",
        "4": "contract an interior design consultant ",
        "5": "pay for a training course",
        "6": "purchase ergonomic equipment ",
        "7": "renew a specialized software subscription"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q8": {
      "text": "Here is a list of various goods and services items requiring procurement. Choose all that apply to the “Conduct inspections” sub-activity of your work plan knowing that officers, who may have accessibility needs, must often travel to remote locations to carry out their activities.  ",
      "options": {
        "1": "Attend a conference ",
        "2": "Buy a plane ticket",
        "3": "Buy gas",
        "4": "Contract a training supplier",
        "5": "Order office supplies ",
        "6": "Rent a car"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Buying a plane ticket, renting a car and buying gas are all activities that can be linked to the “Conduct inspections” sub-activity of your work plan.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Buying a plane ticket, renting a car and buying gas are all activities that can be linked to the “Conduct inspections” sub-activity of your work plan. "
      }
    }
  },
  "fr": {
    "instructions":"En examinant le plan de travail fourni, identifiez les biens et les services que vous devrez acquérir en répondant aux questions suivantes.",
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
    "pM1": "<ul><li>&Eacute;tablir un plan de relève</li><li>Établir des bassins de dotation collective</li><li> Reconna&icirc;tre l’excellence du travail</li><li> Célébrer les succès</li><li> Impliquer les employés dans la prise de décisions</li><li>Horaires de travail flexibles</li><li>Veiller à ce que les lieux de travail virtuels et en personne soient accessibles </li></ul>",
    "pM1_1": "<ul><li>Mettre en &oelig;uvre des horaires de travail flexibles</li></ul>",
    "pR1_1": "<ul><li>1 adjoint administratif</li><li>1 gestionnaire</li></ul>",
    "pA2": "Délivrer des permis de p&ecirc;che commerciale",
    "pSA2": "<ul><li>Examiner les dossiers des demandeurs</li><li>Vérifier la fiabilité</li><li>Veiller à ce que les permis soient accessibles</li><li>Délivrer des permis</li><li>Effectuer des inspections</li></ul>",
    "pD2_1w": "<ul><li>Délivrer le permis dans les 30 jours suivant la demande</li><li>Délivrer 500 permis par an</li></ul>",
    "pD2_1r": "<ul><li>Délivrer le permis dans les 15 jours suivant la demande</li></ul>",
    "pD2_2": "<ul><li>Délivrer 500 permis par an</li></ul>",
    "pR2": "<ul><li>Surp&ecirc;che</li></ul>",
    "pM2": "<ul><li> Protéger l'habitat</li><li> Fixer des limites de capture</li><li> Lancer les saisons de p&ecirc;che</li></ul>",
    "pRes2": "<ul><li>1 agent</li><li>2 analystes</li><li>1 agent subalterne</li></ul>",
    "pA3": "Renouveler les permis de p&ecirc;che commerciale",
    "pSA3": "<ul><li> Examiner les dossiers de renouvellement des demandeurs</li><li> Délivrer des renouvellements de permis&nbsp;</li></li></ul>",
    "pD3": "<ul><li> Délivrer les renouvellements de permis dans les 30 jours suivant la demande</li><li> Délivrer 300  renouvellements de permis par an</li></ul>",
    "pRes3": "<ul><li>1 agent</li><li>1 analyste subalterne</li></ul>",
    "introText": "Pour les sous-activités suivantes, identifiez les biens ou services nécessaires.",
    "introText2": "Sélectionnez le meilleur choix pour remplir les blancs.",
    "q1": {
      "sentence": "Pour que votre nouvel espace de bureau soit bien aménagé, vous devez {0} pour concevoir un plan d’étage accessible.",
      "choices": {
        "1": "acheter du mobilier de bureau ",
        "2": "acheter des stylos et du papier",
        "3": "passer un contrat avec une société de sécurité ",
        "4": "engager un conseiller en design d’intérieur",
        "5": "payer un cours de formation  ",
        "6": "acheter des équipements ergonomiques",
        "7": "renouveler un abonnement à un logiciel spécialisé"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "Pendant le déménagement, vous devrez {0} pour contrôler l’accès et sécuriser le lieu de travail.",
      "choices": {
        "1": "acheter du mobilier de bureau ",
        "2": "acheter des stylos et du papier",
        "3": "passer un contrat avec une société de sécurité ",
        "4": "engager un conseiller en design d’intérieur",
        "5": "payer un cours de formation  ",
        "6": "acheter des équipements ergonomiques",
        "7": "renouveler un abonnement à un logiciel spécialisé"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q3": {
      "sentence": "Vous devez {0}  ainsi que d’autres fournitures de bureau pour « Fournir du soutien administratif ».",
      "choices": {
        "1": "acheter du mobilier de bureau ",
        "2": "acheter des stylos et du papier",
        "3": "passer un contrat avec une société de sécurité ",
        "4": "engager un conseiller en design d’intérieur",
        "5": "payer un cours de formation  ",
        "6": "acheter des équipements ergonomiques",
        "7": "renouveler un abonnement à un logiciel spécialisé"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q4": {
      "sentence": "Pour « Examiner les dossiers des demandeurs » sur l’ordinateur, vous devez {0} chaque année.",
      "choices": {
        "1": "acheter du mobilier de bureau ",
        "2": "acheter des stylos et du papier",
        "3": "passer un contrat avec une société de sécurité ",
        "4": "engager un conseiller en design d’intérieur",
        "5": "payer un cours de formation  ",
        "6": "acheter des équipements ergonomiques",
        "7": "renouveler un abonnement à un logiciel spécialisé"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q5": {
      "sentence": "La sous-activité « Superviser, surveiller et former le personnel » vous oblige à {0} pour un nouvel employé.",
      "choices": {
        "1": "acheter du mobilier de bureau ",
        "2": "acheter des stylos et du papier",
        "3": "passer un contrat avec une société de sécurité ",
        "4": "engager un conseiller en design d’intérieur",
        "5": "payer un cours de formation  ",
        "6": "acheter des équipements ergonomiques",
        "7": "renouveler un abonnement à un logiciel spécialisé"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q6": {
      "sentence": "Vous devez vous assurer que votre nouvel employé dispose de l’équipement nécessaire pour répondre à ses besoins d’accessibilité et d’adaptation. Cela peut signifier {0} .",
      "choices": {
        "1": "acheter du mobilier de bureau ",
        "2": "acheter des stylos et du papier",
        "3": "passer un contrat avec une société de sécurité ",
        "4": "engager un conseiller en design d’intérieur",
        "5": "payer un cours de formation  ",
        "6": "acheter des équipements ergonomiques",
        "7": "renouveler un abonnement à un logiciel spécialisé"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q7": {
      "sentence": "Dans le cadre de la sous-activité « Planifier le travail », vous devez vous assurer qu’un nouvel employé dispose du matériel nécessaire et devez {0} .",
      "choices": {
        "1": "acheter du mobilier de bureau ",
        "2": "acheter des stylos et du papier",
        "3": "passer un contrat avec une société de sécurité ",
        "4": "engager un conseiller en design d’intérieur",
        "5": "payer un cours de formation  ",
        "6": "acheter des équipements ergonomiques",
        "7": "renouveler un abonnement à un logiciel spécialisé"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q8": {
      "text": "Voici une liste de divers articles d’approvisionnement en biens et services. Choisissez tous ceux qui s’appliquent à la sous-activité  « Effectuer des inspections » de votre plan de travail, sachant que les agents, qui peuvent avoir des besoins en matière d'accessibilité, doivent souvent se rendre dans des endroits éloignés pour mener à bien leurs activités.",
      "options": {
        "1": "Assister à une conférence ",
        "2": "Acheter un billet d’avion",
        "3": "Acheter de l’essence",
        "4": "Commander des fournitures de bureau  ",
        "5": "Passer un contrat avec un fournisseur de cours de formation",
        "6": "Louer une voiture"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> L’achat d’un billet d’avion, la location d’une voiture et l’achat d’essence sont toutes des activités qui peuvent être liées à la <br> sous-activité « Effectuer des inspections » de votre plan de travail. ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> L’achat d’un billet d’avion, la location d’une voiture et l’achat d’essence sont toutes des activités qui peuvent être liées à la <br> sous-activité « Effectuer des inspections » de votre plan de travail. "
      }
    }
  }
}
</i18n>
<style type="text/css" scoped>
select {
  border: 0;
  border-bottom: 1px solid black;
}
</style>