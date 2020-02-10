<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
    <ul style="list-style: none">
    <li><input type="checkbox" name="things" disabled id="things1" v-model="Q4"> <label for="things1">{{$t('thing1')}}</label></li>
    <li><input type="checkbox" name="things" disabled id="things2" v-model="Q2"> <label for="things2">{{$t('thing2')}}</label></li>
    <li><input type="checkbox" name="things" disabled id="things3" v-model="Q3"> <label for="things3">{{$t('thing3')}}</label></li>
  </ul>
    <p><strong v-html="$t('pwpTitle')"></strong></p>
    <table class='tableColoured'>
      <tr>
        <td colspan='8' class='govtPri'>
          <p><span v-html="$t('pwpGovtPri')" /> {{$t('govtPriorities')}}
          </p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='deptPri'>
          <p><span v-html="$t('pwpDeptPri')" /> {{$t('deptPriorities')}}
          </p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='dirPri'>
          <p><span v-html="$t('pwpDirPri')" /> {{$t('dirPriorities')}}
          </p>
        </td>
      </tr>
    </table>
    <div id="scrollDiv" class="scrollMe">
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th class='planAct thNumbered'>{{$t('titleActivities')}}</th>
          <th id="subActTab" class='planSubAct thNumbered'>{{$t('titleSubActivities')}}</th>
          <th id="deliverableTab" class='planDelivs thNumbered'>{{$t('titleDeliverables')}}</th>
          <th class='planRisk thNumbered'>{{$t('titleRisk')}}</th>
          <th class='planLikely thNumbered'>{{$t('titleLikelihood')}}</th>
          <th class='planImpact thNumbered'>{{$t('titleImpact')}}</th>
          <th class='planMitigat thNumbered'>{{$t('titleMitigation')}}</th>
          <th id="resourcesTab" class='planRes thNumbered'>{{$t('titleResources')}}</th>
        </tr>
        <tr>
          <td class='planAct' v-html="$t('pA1')"></td>
          <td class='planSubAct' v-html="$t('psA1')"></td>
          <td class='planDelivs' ><ul>
            <li v-html="$t('pD1')" />
            <transition name="bounce"><li v-if="Q1==1" v-html="$t('pD2add')"/></transition>
            <transition name="bounce"><li v-if="Q4==1" v-html="$t('pD1add')"/></transition>
          </ul></td>
          <td class='planRisk' v-html="$t('pR1')"></td>
          <td class='planLikely' v-html="$t('low')"></td>
          <td class='planImpact' v-html="$t('high')"></td>
          <td class='planMitigat'>
            <ul>
              <li v-html="$t('pM1')"></li>
             <li v-html="$t('pM1_1')" />
            </ul>
          </td>
          <td class='planRes'>
            <ul>
              <li>{{ $t('pR1_1')}}</li>
              <li>{{ $t('pR1_2')}}</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td rowspan="2" class='planAct' v-html="$t('pA2')"></td>
          <td rowspan="2" class='planSubAct' v-html="$t('pSA2')">
          </td>
          <td rowspan="2" class='planDelivs'>
            <ul>
              <transition name="bounce"><li v-if="Q2==3" v-html="$t('pD2_1r')"></li></transition>
              <li v-if="Q2!=3" v-html="$t('pD2_1w')"></li>
               <li v-html="$t('pD2_2')"></li>
            </ul>
          </td>
          <td rowspan="4" class='planRisk' v-html="$t('pR2')"></td>
          <td rowspan="4" class='planLikely' v-html="$t('low')"></td>
          <td rowspan="4" class='planImpact'  v-html="$t('high')"></td>
          <td rowspan="4" class='planMitigat'>
            <ul v-html="$t('pM2')" />
            <p>&nbsp;</p>
          </td>
          <td rowspan="2" class='planRes'>
            <ul>
              <transition name="bounce"><li v-if="Q3!=3" v-html="$t('pRes2.a')" /></transition>
              <li v-html="$t('pRes2.b')" />
              <li v-html="$t('pRes2.c')" />
            </ul>
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td rowspan="2" class='planAct' v-html="$t('pA3')">
            <p></p>
          </td>
          <td rowspan="2" class='planSubAct'>
            <ul v-html="$t('pSA3')"></ul>
          </td>
          <td rowspan="2" class='planDelivs'>
            <ul  v-html="$t('pD3')"></ul>
          </td>
          <td rowspan="2" class='planRes'>
            <ul  v-html="$t('pRes3')" />
          </td>
        </tr>
        <tr> </tr>
      </table>
    </div>
    <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold" v-model="tabIndex">
    <b-tab title="Question 1" ><radioQuiz :question="$t('q1')" qId="1" @response="Q1=$event"/></b-tab>
    <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" @response="Q2=$event"/></b-tab>
    <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" @response="Q3=$event"/></b-tab>
    <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" @response="Q4=$event"/></b-tab>
  </b-tabs>
  </span>
</template>
<i18n>{
  "en":
  {
    "pwpInstructions": "Your director tells you that they have been to a steering committee and that they now have new information that should be reflected in your work plan. 3 new pieces of information: ",
    "thing1": "There will be new software implementation to speed up the issuing of licenses",
    "thing2": "There&rsquo;s a new policy that now requires licenses to be issued in 15 days, not 30 days, starting on November first and",
    "thing3": "There&rsquo;s been a decision not to replace a retiring employee.",
    "pwpTitle": "Adjust your work plan by selecting the best answer to the following questions. You can scroll horizontally to view the whole plan.",
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
    "qDisabled": "Please select one",
    "govtPriorities": "To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations",
    "deptPriorities": "To support prosperous and sustainable commercial, Indigenous and recreational fisheries, aquaculture and other oceans industries",
    "dirPriorities": "To manage the commercial domestic fisheries",
    "pA1": "Manage and administer the directorate",
    "psA1": "<ul><li>Supervise, monitor and train staff&nbsp;</li><li>Schedule work&nbsp;</li><li>Provide clerical support&nbsp;</li><li>Move office to new location </li></ul>",
    "pD1": "Management of licencing activities</li><li>Reception covered from 9 to 5",
    "pD1add":"Training for all officers on the new fisheries software",
    "pD2add":"Implementation of new fisheries software",
    "pR1": "Staff turnover",
    "low": "Low",
    "high": "High",
    "pM1": " <ul><li>Establish succession plan</li><li>Establish collective staffing pools</li><li>Recognize excellent work</li><li>Celebrate successes</li><li>Involve employees in decision-making</li></ul>",
    "pM1_1": "Implement flexible work hours",
    "pR1_1": "1 administrative assistant",
    "pR1_2": "Manager",
    "pA2": "Issue commercial fishing licenses",
    "pSA2": "<ul><li>Review applicant requests</li><li>Check reliability</li><li>Issue licenses</li><li>Conduct inspections</li></ul>",
    "pD2_1w": "Issue license within 30 days of request",
    "pD2_1r": "Issue license within 15 days of request",
    "pD2_2": "Issue 500 licenses per year",
    "pR2": "Overfishing",
    "pM2": "<li>Protect habitat</li><li>Place catching limits</li><li>Implement fishing seasons</li>",
    "pRes2.a": "1 officer",
    "pRes2.b": "2 analysts",
    "pRes2.c": "1 junior officer",
    "pA3": "Renew commercial fishing licenses",
    "pSA3": "<li>Review applicant renewal requests</li><li>Issue renewal license</li>",
    "pD3": "<li>Issue license renewal within 30 days of request</li><li>Issue 300 license renewals per year </li>",
    "pRes3": "<li>1 officer</li><li>1 junior analyst</li>",
    "q1":
    {
      "text": "Where should you add the “Implementation of the new software” in your work plan?",
      "options":
      {
        "1": "In the “Deliverables” column, next to the “Manage and administer directorate” activity",
        "2": "In the “Mitigation” column, next to the “Issue commercial fishing licenses” activity",
        "3": "In the “Sub-activities”, next to the “Renew commercial fishing licenses” activity"
      },
      "feedback":
      {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> While “Implementation of the new software” could be a “Mitigation” strategy in certain cases, in this work plan, it is a “Deliverable.”",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> While “Implementation of the new software” could be a “Sub-activity” in certain cases, in this work plan, it is a “Deliverable.”"
      }
    },
    "q2":
    {
      "text": "What would you do with the following statement &ldquo;Issue license renewal within 30 days of request&rdquo; in your work plan?",
      "options":
      {
        "1": "Leave “Issue license renewal within 30 days of request” as is.",
        "2": "Remove “Issue license renewal within 30 days of request”.",
        "3": "Change it to &ldquo;Issue license renewal within 15 days of request&rdquo;"
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> With the implementation of the new policy, change it to &ldquo;Issue license renewal within 15 days of request.&rdquo;",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> With the implementation of the new policy, change it to &ldquo;Issue license renewal within 15 days of request.&rdquo;",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q3":
    {
      "text": "Do you need to adjust your resources given that your licencing officer is retiring?",
      "options":
      {
        "1": "I need to add more staff.",
        "2": "I can leave the resources as is.",
        "3": "I need to remove 1 employee."
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> You have not received any additional full-time employees so you cannot add more staff.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> You have an employee that is retiring, so you will need to remove a full-time employee from your work plan.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }},
      "q4":
      {
        "text": "Do you need to indicate the need for training for the officers?",
        "options":
        {
          "1": "Yes, with the activity, &ldquo;Manage and administer directorate&rdquo; under &ldquo;Deliverables&rdquo;",
          "2": "Yes, with the activity &ldquo;Issue commercial fishing licenses&rdquo; under &ldquo;Mitigation&rdquo;",
          "3": "Yes, with the activity &ldquo;Renew commercial fishing licenses&rdquo; under &ldquo;Sub-activities&rdquo;"
        },
        "feedback":
        {
          "1": "<span class='v-right' /> <strong>Correct!</strong>",
          "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> It should be included with the activity, &ldquo;Manage and administer directorate&rdquo; under &ldquo;Deliverables.&rdquo;",
          "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> It should be included with the activity, &ldquo;Manage and administer directorate,&rdquo; under &ldquo;Deliverables.&rdquo;"
        }
    }
  },
  "fr":
  {
    "pwpInstructions": "Votre directeur vous dit qu&rsquo;il a siégé à un comité directeur et qu&rsquo;il dispose maintenant de nouveaux renseignements qui devraient se refléter dans votre plan de travail. Trois nouveaux renseignements : ",
    "thing1": "la mise en œuvre d&rsquo;un nouveau logiciel pour accélérer la délivrance de permis;",
    "thing2": "une nouvelle politique qui exige maintenant que les permis soient délivrés en 15 jours, et non plus en 30 jours, à compter du 1er novembre;",
    "thing3": "une décision de ne pas remplacer un employé qui prend sa retraite.",
    "pwpTitle": "Vous pouvez consulter le plan de travail par défilement vers le bas. Ajustez votre plan de travail en choisissant la meilleure réponse aux questions suivantes :",
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
    "titleResources": "Resources",
    "qDisabled": "Veuillez faire un choix",
    "govtPriorities": "Servir les Canadiens en assurant l&rsquo;utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
    "deptPriorities": "Soutenir des pêches commerciales, autochtones et récréatives prospères et durables, l&rsquo;aquaculture et d&rsquo;autres industries maritimes.",
    "dirPriorities": "Gérer les pêches commerciales.",
    "pA1": "Gérer et administrer la direction&nbsp;",
    "psA1": "<ul><li> Superviser, surveiller et former le personnel&nbsp;<li> Planifier le travail&nbsp;</li><li> Fournir du soutien administratif&nbsp;</li><li> Déménagement des bureaux dans de nouveaux locaux</li></ul>",
    "pD1": "Gestion des activités de délivrance de permis</li><li> Réception ouverte de 9&nbsp;h à 17&nbsp;h",
    "pD1add":"Formation de tous les agents sur le nouveau logiciel de gestion des pêches",
    "pD2add":"Lancement d&rsquo;un nouveau logiciel de gestion des pêches",
    "pR1": "Roulement du personnel",
    "low": "Faible",
    "high": "&Eacute;levé",
    "pM1": "<ul><li>&Eacute;tablir un plan de relève</li><li>Établir des bassins de dotation collective</li><li> Reconna&icirc;tre l&rsquo;excellence du travail</li><li> Célébrer les succès</li><li> Impliquer les employés dans la prise de décisions</li><li>Horaires de travail flexibles</li></ul>",
    "pM1_1": "Mettre en &oelig;uvre des horaires de travail flexibles",
    "pR1_1": "1 adjoint administratif",
    "pR1_2": "gestionnaire",
    "pA2": "Délivrer des permis de p&ecirc;che commerciale",
    "pSA2": "<ul><li>Examiner les dossiers des demandeurs</li><li>Vérifier la fiabilité</li><li>Délivrer des permis</li><li>Effectuer des inspections</li></ul>",
    "pD2_1w": "Délivrer le permis dans les 30 jours suivant la demande",
    "pD2_1r": "Délivrer le permis dans les 15 jours suivant la demande",
    "pD2_2": "Délivrer 500 permis par an",
    "pR2": "Surp&ecirc;che",
    "pM2": "<li> Protéger l'habitat</li><li> Fixer des limites de capture</li><li> Lancer les saisons de p&ecirc;che</li>",
    "pRes2.a": "1 agent",
    "pRes2.b": "2 analystes",
    "pRes2.c": "1 agent subalterne",
    "pA3": "Renouveler les permis de p&ecirc;che commerciale",
    "pSA3": "<li> Examiner les dossiers de renouvellement des demandeurs</li><li> Délivrer des renouvellements de permis&nbsp;</li></li>",
    "pD3": "<li> Délivrer les renouvellements de permis dans les 30 jours suivant la demande</li><li> Délivrer 300  renouvellements de permis par an</li>",
    "pRes3": "<li>1 agent</li><li>1 analyste subalterne</li>",
    "q1":
    {
      "text": "Où ajouteriez-vous la &laquo;&nbsp;Mise en œuvre du nouveau logiciel&nbsp;&raquo; dans votre plan de travail?",
      "options":
      {
        "1": "Dans la colonne «&nbsp;Livrables&nbsp;», à côté de l&rsquo;activité «&nbsp;Gérer et administrer la direction&nbsp;». ",
        "2": "Dans la colonne «&nbsp;Atténuation&nbsp;», à côté de l&rsquo;activité «&nbsp;Délivrance de permis de pêche commerciale&nbsp;» ",
        "3": "Dans les « Sous-activités », à côté de l&rsquo;activité « Renouvellement de permis de pêche commerciale »."
      },
      "feedback":
      {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",        
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien que la «&nbsp;Mise en œuvre du nouveau logiciel&nbsp;» puisse être une stratégie d&rsquo;atténuation dans certains cas, dans ce plan de travail, il s&rsquo;agit d&rsquo;un «&nbsp;Livrable&nbsp;».",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Alors que la « Mise en œuvre du nouveau logiciel » pourrait être une « Sous-activité » dans certains cas, dans ce plan de travail, il s&rsquo;agit d&rsquo;un « Livrable »."
      }
    },
    "q2":
    {
      "text": "Que feriez-vous de l&rsquo;énoncé suivant dans le plan de travail : « Renouveler le permis dans les 30 jours suivant la demande »?",
      "options":
      {
        "1": "Laissez &laquo;&nbsp;Renouveler le permis dans les 30 jours suivant la demande&nbsp;&raquo; tel quel.",
        "2": "Enlevez &laquo;&nbsp;Renouveler le permis dans les 30 jours suivant la demande&nbsp;&raquo;.",
        "3": "Changez-le pour &laquo;&nbsp;Renouveler le permis dans les 15 jours suivant la demande&nbsp;&raquo;."
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Étant donné l&rsquo;entrée en vigueur de la nouvelle politique, changez-l&rsquo;énoncé pour &laquo;&nbsp;Renouveler le permis dans les 15 jours suivant la demande&nbsp;&raquo;.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Avec l&rsquo;entrée en vigueur de la nouvelle politique, changez-l&rsquo;énoncé pour &laquo;&nbsp;Renouveler le permis dans les 15 jours suivant la demande&nbsp;&raquo;.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q3":
    {
      "text": "Avez-vous besoin d&rsquo;ajuster vos Ressources étant donné que l&rsquo;agent qui délivre les permis prend sa retraite?",
      "options":
      {
        "1": "Je dois ajouter du personnel.",
        "2": "Je peux laisser les ressources telles quelles.",
        "3": "Je dois enlever un employé du plan de travail."
      },
      "feedback":
      {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous n&rsquo;avez pas d&rsquo;employés supplémentaires à temps plein, vous ne pouvez donc pas ajouter d&rsquo;employés.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous avez un employé qui prend sa retraite, vous devrez donc enlever un employé à temps plein de votre plan de travail.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },

    "q4":
    {
      "text": "Avez-vous besoin d&rsquo;indiquer le besoin de formation des agents?",
      "options":
      {
        "1": "Oui, avec l&rsquo;activité &laquo;&nbsp;Gérer et administrer la direction&nbsp;&raquo; sous &laquo;&nbsp;Livrables&nbsp;&raquo;.",
        "2": "Oui, avec l&rsquo;activité &laquo;&nbsp;Délivrance de permis de pêche commerciale&nbsp;&raquo; sous &laquo;&nbsp;Atténuation&nbsp;&raquo;.",
        "3": "Oui, avec l&rsquo;activité &laquo;&nbsp;Renouvellement de permis de pêche commerciale&nbsp;&raquo; sous &laquo;&nbsp;Sous-activités&nbsp;&raquo;."
      },
      "feedback":
      {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Il devrait être inclus dans l&rsquo;activité &laquo;&nbsp;Gérer et administrer la direction&nbsp;&raquo; sous la rubrique &laquo;&nbsp;Livrables&nbsp;&raquo;.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Il devrait être inclus dans l&rsquo;activité &laquo;&nbsp;Gérer et administrer la direction&nbsp;&raquo; sous la rubrique &laquo;&nbsp;Livrables&nbsp;&raquo;."
      }
    }
  }
}
</i18n>
<script>
import radioQuiz from "~/components/radioQuiz"
export default {
  components: { radioQuiz },
  data() {
    return { tabIndex: 0, Q1: '', Q2: '', Q3: '', Q4: '' }
  },
  watch: {
    tabIndex: {
      immediate: true,
      handler(tab) {
        if (tab == 3) this.$scrollTo('#deliverableTab')
        if (tab == 2) this.$scrollTo('#resourcesTab')
        if (tab == 1) this.$scrollTo('#deliverableTab')
        if (tab == 0) this.$scrollTo('#subActTab')
      }
    }
  }
}
</script>
<style type="text/css" scoped>
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

td {
  vertical-align: top
}

.tableColoured td:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  font-weight: 600;
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

.striked{text-decoration: line-through}

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
  font-weight: 600;
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