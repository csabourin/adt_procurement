<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
    <p>{{ $t('watchVideos') }}</p>
    <div v-if="$i18n.locale=='en'">
      <ul>
        <li><a href='https://www.youtube.com/watch?v=iZaUMrn-H6g' target='_blank' alt='The Accessible Canada Act and Government Procurement'>The <i>Accessible Canada Act</i> and Government Procurement</a></li>
        <li><a href='https://www.youtube.com/watch?v=Uyjxws7a1_Q' target='_blank' alt='What does it mean to consider accessibility in government procurement?'>What does it mean to consider accessibility in government procurement?</a></li>
      </ul>
      <p><b>Answer the following questions.</b></p>
    </div>
    <div v-if="$i18n.locale=='fr'">
      <ul>
        <li><a href='https://www.youtube.com/watch?v=uSJonxterP0' target='_blank' alt='La Loi canadienne sur l’accessibilité et l’approvisionnement fédéral'>La <i>Loi canadienne sur l’accessibilité</i> et l’approvisionnement fédéral</a></li>
        <li><a href='https://www.youtube.com/watch?v=HG2vDzuuK54' target='_blank' alt='Que signifie tenir compte de l’accessibilité dans les approvisionnements du gouvernement?'>Que signifie tenir compte de l’accessibilité dans les approvisionnements du gouvernement?</a></li>
      </ul>
      <p><b>Répondez aux questions suivantes : </b></p>
    </div>
       <div>
    <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold" v-model="tabIndex">
    <b-tab title="Question 1">
      <br>
      <p><b>{{ $t('Scenario') }}</b></p>
      <p>{{ $t('Scenario1') }}</p>
      <radioQuiz :question="$t('q1')" qId="1"/>
    </b-tab>
    <b-tab title="Question 2">
      <br>
      <p><b>{{ $t('Scenario') }}</b></p>
      <p>{{ $t('Scenario1') }}</p>
      <radioQuiz :question="$t('q2')" qId="2"/>
    </b-tab>
    <b-tab title="Question 3">
      <br>
      <p><b>{{ $t('Scenario') }}</b></p>
      <p>{{ $t('Scenario2') }}</p>
      <radioQuiz :question="$t('q3')" qId="3"/>
    </b-tab>
    <b-tab title="Question 4">
      <p><b>{{ $t('Scenario') }}</b></p>
      <p>{{ $t('Scenario2') }}</p>
      <checkboxQuiz :question="$t('q4')" qId="4" :Answer='["1","2","3","4"]'/>
    </b-tab>
  </b-tabs>
  <!-- Control buttons-->
        <div class="text-center">
          <b-button-group :aria-label="$t('questionNav')" class="mt-2">
            <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
            <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=1">{{$t('nextPage')}}</b-button>
          </b-button-group>
        </div>
  <hr>
  </div>
    <b-container class="workplan-table wp-table-1">
      <b-row>
        <b-col class="encadrage">
          <label><h3 v-html="$t('pwpGovtPri')"></h3>
          <p v-html="$t('govtPriorities')"></p>
        </label>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <label><h3 v-html="$t('pwpDeptPri')"></h3>
          <p v-html="$t('deptPriorities')"></p></label>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <label><h3 v-html="$t('pwpDirPri')"></h3>
          <p v-html="$t('dirPriorities')"></p></label>
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
          <p v-html="$t('pR1_1')">          </p>
        </b-col>
        
        <!---------------------- ACTIVITY 2 --> 
        <b-col class="encadrage" sm="12" xl="4">
          <h4 v-html="$t('pA2')"></h4>
          <h5 v-html="$t('titleSubActivities')">Sous activités</h5>
          <p v-html="$t('pSA2')"></p>
          <h5 v-html="$t('titleDeliverables')">Livrables</h5>
          <p v-html="$t('pD2_1')"></p>
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
          <p v-html="$t('pRes3')"></p>
        </b-col>
        
      </b-row>
    </b-container>

    <!--------------------------------------------------------- END TABLE --> 

  </span>
</template>
<i18n>
  {
      "en":
      {
          "pwpInstructions": "Look at the work plan provided and identify your requirements by answering the following questions.",
          "watchVideos": "Don’t forget to consider your accessibility needs when planning your requirements! If you need a refresher, watch the following videos:",
          "pwpTitle": "Choose the best option for each section of this work plan.",
          "pwpGovtPri": "Government priorities",
          "pwpDeptPri": "Departmental priorities",
          "pwpDirPri": "Directorate priorities",
          "titleActivities": "Activities",
          "pwpPlanAct": "<strong>Activities</strong>",
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
          "pR1": "<ul><li>Staff turnover</li></ul>",
          "low": "<ul><li>Low</li></ul>",
          "high": "<ul><li>High</li></ul>",
          "pM1": "<ul><li>Establish succession plan</li><li>Establish collective staffing pools</li><li>Recognize excellent work</li><li>Celebrate successes</li><li>Involve employees in decision-making</li><li>Implement flexible work hours</li></ul>",
          "pM1_1": "<ul><li>Implement flexible work hours</li></ul>",
          "pR1_1": "<ul><li>1 administrative assistant</li><li>1 manager</li></ul>",
          "pR1_2": "<ul><li>1 manager</li></ul>",
          "pA2": "Issue commercial fishing licences",
          "pSA2": "<ul><li>Review applicant requests</li><li>Check reliability</li><li>Issue licences</li><li>Conduct inspections</li></ul>",
          "pD2_1": "<ul><li>Issue license within 30 days of request</li><li>Issue 500 licences per year</li></ul>",
          "pD2_2": "Issue 500 licences per year",
          "pR2": "<ul><li>Overfishing</li></ul>",
          "pM2": "<ul><li>Protect habitat</li><li>Place catching limits</li><li>Implement fishing seasons</li></ul>",
          "pRes2": "<ul><li>1 officer</li><li>2 analysts</li><li>1 junior officer</li></ul>",
          "pA3": "Renew commercial fishing licences",
          "pSA3": "<ul><li>Review applicant renewal requests</li><li>Issue renewal license</li></ul>",
          "pD3": "<ul><li>Issue license renewal within 30 days of request</li><li>Issue 300 license renewals per year</li></ul>",
          "pRes3": "<ul><li>1 officer</li><li>1 junior analyst</li></ul>",
          "Scenario": "Scenario",
          "Scenario1": "Looking at the work plan provided, you realize that you must redesign the outdated inspection process if your team is to continue its sub-activity of conducting inspections. You decide that you need help. The redesign should take 6 months to complete. There are no business process experts within your department.",
          "Scenario2": "Looking at the work plan provided, you must open a temporary licensing office for 2 weeks in a remote location where there are no government buildings.",
          "q1":
          {
              "text": "Given the scenario, what is your requirement?",
              "options":
              {
                  "1": "To ask another manager to help you and your team with the redesign",
                  "2": "To enter into a contract with an inspection expert to help you with the redesign",
                  "3": "To hire a full-time employee to join your team to help you with the redesign"
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
                  "2": "<span class='v-right' /> <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "Since you do not have the expertise within your department and only need help for 6 months, you will enter into a contract with a business process expert to help you with the redesign."
          },
          "q2":
          {
              "text": "Should you include a security component in your requirements?",
              "options":
              {
                  "1": "Yes",
                  "2": "No"
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "Given the confidential nature of inspections, you will need to include a security component in your requirements."
          },
          "q3":
          {
              "text": "Given the scenario, what is your requirement?",
              "options":
              {
                  "1": "To contract for a temporary mobile recreational vehicle (RV) office",
                  "2": "To construct a new government office building in the remote location",
                  "3": "To transport licence seekers to the nearest government building"
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "Since you only require space for a specific amount of time and there are no government buildings nearby, you will enter into a contract for a temporary mobile RV office."
          },
          "q4":
          {
              "text": "Which, if any, of the following questions should be considered when contracting for a temporary mobile recreational vehicle office?",
              "options":
              {
                  "1": "Is the temporary mobile RV office physically accessible to people with mobility issues such as being unable to climb stairs?",
                  "2": "Has the technical authority consulted end-users such as employees, the Canadian public, or disability advocacy groups when drafting the requirements?",
                  "3": "How can the supplier show that the RV is compliant?",
                  "4": "Will the Government of Canada need to cancel the contract if the supplier defaults on accessibility compliance at any point of the contract or lifecycle?"
              },
              "feedback":
              {
                  "right": "<span class='v-right' /> <strong>Correct!</strong>",
                  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "All these questions should be considered when contracting for a temporary mobile recreational vehicle. For more information, see the <a href='https://www.gcpedia.gc.ca/gcwiki/images/9/9e/Accessibility_meaningful_consideration_EN.pdf' target='_blank' alt='Link to the Meaningful Consideration of Accessibility in Procurement document'>Meaningful Consideration of Accessibility in Procurement</a> document."
          }
      },
      "fr":
      {
          "pwpInstructions": "En examinant le plan de travail fourni, définissez vos besoins en répondant aux questions suivantes.",
          "watchVideos": "N'oubliez pas de tenir compte de vos besoins en matière d'accessibilité lorsque vous planifiez vos exigences! Si vous avez besoin d'un aide-mémoire, regardez les vidéos suivantes : ",
          "pwpTitle": "Choisissez la meilleure option pour chaque partie du plan de travail.",
          "pwpGovtPri": "<strong>Priorités du gouvernement</strong>",
          "pwpDeptPri": "<strong>Priorités ministérielles</strong>",
          "pwpDirPri": "<strong>Priorités de la direction</strong>",
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
          "pD1": "<ul><li> Gestion des activités de délivrance de permis</li><li> Réception ouverte de 9 h à 17 h</li></ul>",
          "pR1": "<ul><li>Roulement du personnel</li></ul>",
          "low": "<ul><li>Faible</li></ul>",
          "high": "<ul><li>&Eacute;levé</li></ul>",
          "pM1": "<ul><li>&Eacute;tablir un plan de relève</li><li>Établir des bassins de dotation collective</li><li> Reconna&icirc;tre l’excellence du travail</li><li> Célébrer les succès</li><li> Impliquer les employés dans la prise de décisions</li><li>Horaires de travail flexibles</li></ul>",
          "pM1_1": "Mettre en &oelig;uvre des horaires de travail flexibles",
          "pR1_1": "<ul><li>1 gestionnaire</li><li>1 adjoint administratif</li></ul>",
          "pR1_2": "<ul><li>1gestionnaire</li></ul>",
          "pA2": "Délivrer des permis de p&ecirc;che commerciale",
          "pSA2": "<ul><li>Examiner les dossiers des demandeurs</li><li>Vérifier la fiabilité</li><li>Délivrer des permis</li><li>Effectuer des inspections</li></ul>",
          "pD2_1": "<ul><li>Délivrer le permis dans les 30 jours suivant la demande</li><li>Délivrer 500 permis par an</li></ul>",
          "pD2_2": "Délivrer 500 permis par an",
          "pR2": "<ul><li>Surp&ecirc;che</li></ul>",
          "pM2": "<ul><li> Protéger l'habitat</li><li> Fixer des limites de capture</li><li> Lancer les saisons de p&ecirc;che</li></ul>",
          "pRes2": "<ul><li> 1 agent</li><li> 2 analystes</li><li> 1 agent subalterne</li></ul>",
          "pA3": "Renouveler les permis de p&ecirc;che commerciale",
          "pSA3": "<ul><li> Examiner les dossiers de renouvellement des demandeurs</li><li> Délivrer des renouvellements de permis&nbsp;</li></ul>",
          "pD3": "<ul><li> Émettre les renouvellements de permis dans les 30 jours suivant la demande</li><li> Émettre 300  renouvellements de permis par an</li></ul>",
          "pRes3": "<ul><li>1 agent</strong></li><li>1 analyste subalterne</li><ul>",
          "Scenario": "Scénario",
          "Scenario1": "En étudiant le plan de travail fourni, vous vous rendez compte que vous devez repenser le processus d’inspection devenu obsolète si votre équipe veut continuer sa sous-activité d’inspection. Vous constatez que vous avez besoin d’aide. La refonte devrait prendre six mois. Il n’y a pas de spécialiste des processus opérationnels au sein de votre ministère.",
          "Scenario2": "En étudiant le plan de travail fourni, vous constatez que vous devez ouvrir un bureau de permis temporaire pendant deux semaines dans un endroit éloigné, où il n’y a pas de bâtiment gouvernemental.",
          "q1":
          {
              "text": "Compte tenu du scénario, quel est votre besoin?",
              "options":
              {
                  "1": "Demander à un autre gestionnaire de vous aider, vous et votre équipe, dans la refonte.",
                  "2": "Conclure un contrat avec un spécialiste en inspection pour vous aider dans la refonte.",
                  "3": "Embaucher un employé à temps plein qui se joindra à votre équipe pour vous aider avec la refonte."
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
                  "2": "<span class='v-right' /> <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "Puisque vous ne disposez pas de l’expertise requise au sein de votre ministère et que vous n’avez besoin d’aide que pendant six mois, vous conclurez un contrat avec un spécialiste des processus opérationnels pour vous aider dans la refonte."
          },
          "q2":
          {
              "text": "Devez-vous inclure un élément de sécurité dans vos exigences?",
              "options":
              {
                  "1": "Oui",
                  "2": "Non"
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "Compte tenu de la nature confidentielle des inspections, vous devrez inclure un élément de sécurité dans vos exigences."
          },
          "q3":
          {
              "text": "Compte tenu du scénario, quel est votre besoin?",
              "options":
              {
                  "1": "Conclure un contrat pour la location d’un véhicule récréatif (VR) qui servira de bureau mobile temporaire.",
                  "2": "Construire un nouvel immeuble de bureaux gouvernementaux dans l’endroit éloigné.",
                  "3": "Transporter les demandeurs de permis vers le bâtiment gouvernemental le plus proche."
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "Étant donné que vous n’avez besoin de locaux que pour une durée précise et qu’il n’y a pas de bâtiment gouvernemental à proximité, vous conclurez un contrat de location d’un VR qui servira de bureau mobile temporaire."
          },
          "q4":
          {
              "text": "Lesquelles des questions suivantes, le cas échéant, doivent être prises en considération lors de la conclusion d’un contrat pour la location d’un véhicule récréatif qui servira de bureau mobile temporaire?",
              "options":
              {
                  "1": "Le véhicule récréatif qui servira de bureau mobile temporaire est-il physiquement accessible aux personnes ayant des problèmes de mobilité, comme l'incapacité de monter des escaliers?",
                  "2": "L'autorité technique a-t-elle consulté les utilisateurs finaux, comme les employés, le public canadien ou les groupes de défense des personnes handicapées, lors de la rédaction des exigences?",
                  "3": "Comment le fournisseur peut-il démontrer que le véhicule récréatif est conforme?",
                  "4": "Le gouvernement du Canada devra-t-il annuler le contrat si le fournisseur ne respecte pas les exigences d'accessibilité à n'importe quel moment du contrat ou du cycle de vie?"
              },
              "feedback":
              {
                  "right": "<span class='v-right' /> <strong>Correct!</strong>",
                  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
              },
              "conclusion": "Toutes ces questions doivent être prises en considération lors de la conclusion d’un contrat de location pour un véhicule récréatif qui servira de bureau mobile temporaire. Pour plus d’information, voir le document <a href='https://www.gcpedia.gc.ca/gcwiki/images/6/62/Accessibility_meaningful_consideration_FR.pdf' target='_blank' alt='Lien vers le document Tenir dûment compte de l’accessibilité dans le cadre de l’approvisionnement'>Tenir dûment compte de l’accessibilité dans le cadre de l’approvisionnement</a>."
          }
      }
  }
</i18n>
<script>
  import radioQuiz from "~/components/radioQuiz"
  import checkboxQuiz from "~/components/checkboxQuiz"
  export default {
    components:{
      radioQuiz,
      checkboxQuiz
    },
  data() {
   return {
     govtPri: '',
     deptPri: '',
     dirPri: '',
     tabIndex:0,
     Q1:'',
     Q2:'',
     Q3:''
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
<style type="text/css" scoped>
  
  .workplan-table .row:nth-child(1) h3:after, .workplan-table .row:nth-child(2) h3:after, .workplan-table .row:nth-child(3) h3:after {
    display: none;
  }
  
.tableColoured {
  table-layout: fixed;
  width: 100%;
  counter-reset: wpParts
}
.tableColoured td {
  vertical-align: top;
  position: relative;
  padding: 5px 15px 8px 55px;
  height:60px;
}

.tableColoured td:before {
  font-family:"Roboto";
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  /*padding: .1em .5em 0 .5em;*/
  padding: 0em .5em 0 .3em;
  color: white;
  font-weight: bold;
}
.tableColoured td:nth-of-type(-n+6):before {
  content: "0"counter(wpParts);
}
.tableColoured td p{
  margin-bottom:0;
}

.striked{text-decoration: line-through}

.deptPri:before {
  background-color: #167777;
}

.deptPri {
  border-top: 4px solid #167777;
  background-color: #c7e0e0
}

.govtPri {
  border-top: 4px solid #6C076C;
  background-color: #e1c8e1
}

.govtPri:before {
  background-color: #6C076C;
}

.dirPri {
  border-top: 4px solid #6F1E0D;
  border-bottom: 4px solid #fff;
  background-color: #e2ceca
}

.dirPri:before {
  background-color: #6F1E0D;
}

.planAct {
  border-left:2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-left:2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-left:2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-left:2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-left:2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planLikely {
  border-left:2px solid #775F75;
  background-color: #E1DCE1;
}

.planImpact {
  border-left:2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}


.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-left:2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-left:2px solid #C35522;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #C35522;
}

.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 32px;
}

.thNumbered:before {
 font-family:"Roboto";
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  /*padding: .1em .5em 0 .5em;*/
  padding: 0em .5em 0 .2em;
  color: white;
  font-weight: bold;
}

.thNumbered:nth-of-type(-n+6):before {
  content: "0"counter(wpParts);
}

.thNumbered:nth-of-type(1) {
  border-top: 4px solid #577a90;
}

.thNumbered:nth-of-type(2) {
  border-top: 4px solid #3A8251;
}

.thNumbered:nth-of-type(3) {
  border-top: 4px solid #616EB8;
}

.thNumbered:nth-of-type(4) {
  border-top: 4px solid #8D9245;
}

.thNumbered:nth-of-type(5) {
  border-top: 4px solid #775F75;
}

.thNumbered:nth-of-type(6) {
  border-top: 4px solid #607293;

}

.thNumbered:nth-of-type(7) {
  border-top: 4px solid #B35685;
}

.thNumbered:nth-of-type(8) {
  border-top: 4px solid #C35522;
}
</style>