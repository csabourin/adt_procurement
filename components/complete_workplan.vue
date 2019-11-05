<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
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
    <div class="scrollMe">
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th class='planAct thNumbered'>{{$t('titleActivities')}}</th>
          <th class='planSubAct thNumbered'>{{$t('titleSubActivities')}}</th>
          <th id="deliverable" class='planDelivs thNumbered'>{{$t('titleDeliverables')}}</th>
          <th class='planRisk thNumbered'>{{$t('titleRisk')}}</th>
          <th class='planLikely thNumbered'>{{$t('titleLikelihood')}}</th>
          <th class='planImpact thNumbered'>{{$t('titleImpact')}}</th>
          <th class='planMitigat thNumbered'>{{$t('titleMitigation')}}</th>
          <th id="resources" class='planRes thNumbered'>{{$t('titleResources')}}</th>
        </tr>
        <tr>
          <td class='planAct' v-html="$t('pA1')"></td>
          <td class='planSubAct' v-html="$t('psA1')"></td>
          <td class='planDelivs' v-html="$t('pD1')"></td>
          <td class='planRisk' v-html="$t('pR1')"></td>
          <td class='planLikely' v-html="$t('low')"></td>
          <td class='planImpact' v-html="$t('high')"></td>
          <td class='planMitigat'>
            <ul>
              <li v-html="$t('pM1')"></li>
             <transition name="fade"><li v-if="Q1==2" v-html="'<strong>'+$t('pM1_1')+'</strong>'" /></transition>
            </ul>
          </td>
          <td class='planRes'>
            <ul>
              <li>{{ $t('pR1_1')}}</li>
              <transition name="fade"><li v-if="Q3==1"><strong>{{ $t('pR1_2')}}</strong></li></transition>
            </ul>
          </td>
        </tr>
        <tr>
          <td rowspan="2" class='planAct' v-html="$t('pA2')"></td>
          <td rowspan="2" class='planSubAct' v-html="$t('pSA2')">
          </td>
          <td rowspan="2" class='planDelivs'>
            <ul>
              <li v-html="$t('pD2_1')"></li>
              <transition name="fade">    <li v-if="Q2==2" v-html="'<strong>'+$t('pD2_2')+'</strong>'"></li></transition>
            </ul>
          </td>
          <td rowspan="4" class='planRisk' v-html="$t('pR2')"></td>
          <td rowspan="4" class='planLikely' v-html="$t('low')"></td>
          <td rowspan="4" class='planImpact'  v-html="$t('high')"></td>
          <td rowspan="4" class='planMitigat'>
            <ul v-html="$t('pM2')" />
            <p>&nbsp;</p>
            <ul>
              <transition name="fade"><li v-if="Q1==''||Q1==1" :class="{striked:Q1==1}" v-html="$t('pM1_1')" /></transition>
            </ul>
          </td>
          <td rowspan="2" class='planRes'>
            <ul v-html="$t('pRes2')" />
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
    <div>
    <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold">
    <b-tab title="Question 1">
      <p v-html="$t('q1Text')"></p>
      <ol type="a">
        <li><input type="radio" name="q1" id="quest1-1" v-model="Q1" value="1"> <label for="quest1-1" v-html="$t('q1a')"></label></li>
        <li><input type="radio" name="q1" id="quest1-2" v-model="Q1" value="2"> <label for="quest1-2" v-html="$t('q1b')"></label></li>
        <li><input type="radio" name="q1" id="quest1-3" v-model="Q1" value="3"> <label for="quest1-3" v-html="$t('q1c')"></label></li>
      </ol>
      <p v-if="Q1==1" v-html="$t('q1aF')"></p>
      <p v-if="Q1==2" v-html="$t('q1bF')"></p>
      <p v-if="Q1==3" v-html="$t('q1cF')"></p>
    </b-tab>
    <b-tab title="Question 2">
      <p v-html="$t('q2Text')"></p>
      <ol type="a">
        <li><input type="radio" name="q2" id="quest2-1" v-model="Q2" value="1"> <label for="quest2-1" v-html="$t('q2a')"></label></li>
        <li><input type="radio" name="q2" id="quest2-2" v-model="Q2" value="2"> <label for="quest2-2" v-html="$t('q2b')"></label></li>
        <li><input type="radio" name="q2" id="quest2-3" v-model="Q2" value="3"> <label for="quest2-3" v-html="$t('q2c')"></label></li>
      </ol>
      <p v-if="Q2==1 "v-html="$t('q2aF')"></p>
      <p v-if="Q2==2 "v-html="$t('q2bF')"></p>
      <p v-if="Q2==3 "v-html="$t('q2cF')"></p>
    </b-tab>
    <b-tab title="Question 3">
      <p  v-html="$t('q3Text')"></p>
      <ol type="a">
        <li><input type="radio" name="q3" id="quest3-1" v-model="Q3" value="1"> <label for="quest3-1" v-html="$t('q3a')"></label></li>
        <li><input type="radio" name="q3" id="quest3-2" v-model="Q3" value="2"> <label for="quest3-2" v-html="$t('q3b')"></label></li>
        <li><input type="radio" name="q3" id="quest3-3" v-model="Q3" value="3"> <label for="quest3-3" v-html="$t('q3c')"></label></li>
      </ol>
      <p v-if="Q3==1" v-html="$t('q3aF')"></p>
      <p v-if="Q3==2" v-html="$t('q3bF')"></p>
      <p v-if="Q3==3" v-html="$t('q3cF')"></p>
    </b-tab>
  </b-tabs>
  </div>
  </span>
</template>
<i18n>
  {
    "en":
    {
        "pwpInstructions": "Looking at your draft, you notice that some items may have been dropped into the wrong location or may be missing. Update your draft accordingly.",
        "pwpTitle": "Choose the best option for each section of this work plan by selecting the most appropriate answer. You can scroll horizontally to view the whole plan.",
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
        "deptPriorities": "To support prosperous and sustainable commercial, Aboriginal and recreational fisheries, aquaculture and other oceans industries",
        "dirPriorities": "To manage the commercial domestic fisheries",
        "pA1": "Manage and administer the directorate",
        "psA1": "<ul><li>Supervise, monitor and train staff&nbsp;</li><li>Schedule work&nbsp;</li><li>Provide clerical support&nbsp;</li><li>Move office to new location </li></ul>",
        "pD1": "<ul><li>Management of licencing activities</li><li>Reception covered from 9 to 5</li></ul>",
        "pR1": "Staff turnover",
        "low": "Low",
        "high": "High",
        "pM1": " <li>Establish succession plan</li><li>Establish collective staffing pools</li><li>Recognize excellent work</li><li>Celebrate successes</li><li>Involve employees in decision-making</li>",
        "pM1_1": "Implement flexible work hours",
        "pR1_1": "1 Admin Assistant",
        "pR1_2": "Manager",
        "pA2": "Issue commercial fishing licenses",
        "pSA2": "<ul><li>Review applicant requests</li><li>Check reliability</li><li>Issue licenses</li><li>Conduct inspections</li></ul>",
        "pD2_1": "Issue license within 30 days of request",
        "pD2_2": "Issue 500 licenses per year",
        "pR2": "Overfishing",
        "pM2": "<li>Protect habitat</li><li>Place catching limits</li><li>Implement fishing seasons</li>",
        "pRes2": "<li>1 officer</li><li>2 analysts</li><li>1 junior officer</li>",
        "pA3": "Renew commercial fishing licenses",
        "pSA3": "<li>Review applicant renewal requests</li><li>Issue renewal license</li>",
        "pD3": "<li>Issue license renewal within 30 days of request</li><li>Issue 300 license renewals per year </li>",
        "pRes3": "<li><strong>1 officer</strong></li><li><strong>1 junior analyst</strong></li>",
        "q1Text": "Currently, “Implement flexible work hours” is a mitigation strategy for the following risks: overfishing, habitat degradation, environmental disaster, climate change. Is this the right location in the work plan?",
        "q1a": "Yes. Keep it there.",
        "q1b": "No. It should be under the mitigation category for risk “Staff turnover”.",
        "q1c": "No. It should be removed completely.",
        "q1aF": "<span class='v-wrong' /> You have chosen: “Yes. Keep it there”. Actually, flexible work hours relates better to the “Management and administration of the directorate”.",
        "q1bF": "<span class='v-right' /> You have chosen: “No. It should be under the mitigation category for risk “Staff turnover”. <strong>This is the best answer!</strong>",
        "q1cF": "<span class='v-wrong' />You have chosen: “No. It should be removed completely.” Actually, “Implement flexible work hours” is a valid strategy to attract and retain employees.",
        "q2Text": "The following deliverable is missing from your work plan: “Issue 500 licenses per year”. With which activity should you place it?",
        "q2a": "Manage and administer the directorate",
        "q2b": "Issue commercial fishing licenses",
        "q2c": "Renew commercial fishing licenses",
        "q2aF": "<span class='v-wrong' /> You have chosen: “Manage and administer the directorate”. This deliverable relates to issuing commercial fishing licenses.",
        "q2bF": "<span class='v-right' /> You have chosen: “Issue commercial fishing licenses”. <strong>This is the best answer!</strong>",
        "q2cF": "<span class='v-wrong' /> You have chosen: “Renew commercial fishing licenses”. This deliverable relates to issuing commercial fishing licenses.",
        "q3Text": "Looking under resources, you notice that the manager position is missing. Under which activity should you place it?",
        "q3a": "Manage and administer the directorate",
        "q3b": "Issue commercial fishing licenses",
        "q3c": "Renew commercial fishing licenses",
        "q3aF": "<span class='v-right' /> You have chosen: “Manage and administer the directorate”. <strong>This is the best answer!</strong>",
        "q3bF": "<span class='v-wrong' /> You have chosen: “Issue commercial fishing licenses”. A manager position would be reflected under “Manage and administer the directorate”.",
        "q3cF": "<span class='v-wrong' /> You have chosen: “Renew commercial fishing licenses”. A manager position would be reflected under “Manage and administer the directorate”."
    },
    "fr":
    {
        "pwpInstructions": "En regardant votre brouillon, vous remarquez que certains items peuvent avoir été placés au mauvais endroit ou manquer. Mettez à jour votre brouillon en conséquence. ",
        "pwpTitle": "Choisissez la meilleure option pour chaque section de ce plan de travail en utilisant les menus déroulants.",
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
        "govtPriorities": "Servir les Canadiens en assurant l'utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
        "deptPriorities": "Soutenir des pêches commerciales, autochtones et récréatives prospères et durables, l'aquaculture et d'autres industries océaniques.",
        "dirPriorities": "Gérer les pêches commerciales intérieures",
        "pA1": "G&eacute;rer et administrer la direction&nbsp;",
        "psA1": "<ul><li> Superviser, surveiller et former le personnel&nbsp;<li> Planifier le travail&nbsp;</li><li> Fournir un soutien administratif&nbsp;</li><li> D&eacute;m&eacute;nagement des bureaux dans de nouveaux locaux</li></ul>",
        "pD1": "<ul><li> Gestion des activit&eacute;s de d&eacute;livrance de permis</li><li> R&eacute;ception ouverte de 9 h &agrave; 17 h</li></ul>",
        "pR1": "Roulement du personnel",
        "low": "Faible",
        "high": "&Eacute;lev&eacute;",
        "pM1": "<li>&Eacute;tablir un plan de rel&egrave;ve</li><li> Reconna&icirc;tre l'excellent travail</li><li> C&eacute;l&eacute;brer les succ&egrave;s</li><li> Impliquer les employ&eacute;s dans la prise de d&eacute;cision</li>",
        "pM1_1": "Mettre en &oelig;uvre des horaires de travail flexibles",
        "pR1_1": "1 adjoint administratif",
        "pR1_2": "gestionnaire",
        "pA2": "D&eacute;livrer des permis de p&ecirc;che commerciale",
        "pSA2": "<ul><li>Examiner les demandes des requérants</li><li>V&eacute;rifier la fiabilit&eacute;</li><li>&Eacute;mettre des licences</li><li>Effectuer des inspections</li></ul>",
        "pD2_1": "D&eacute;livrer la licence dans les 30 jours suivant la demande",
        "pD2_2": "D&eacute;livrer 500 licences par an",
        "pR2": "Surp&ecirc;che",
        "pM2": "<li> Prot&eacute;ger l'habitat</li><li> Fixer des limites de capture</li><li> Mettre en &oelig;uvre les saisons de p&ecirc;che</li>",
        "pRes2": "<li> 1 agent</li><li> 2 analystes</li><li> 1 agent subalterne</li>",
        "pA3": "Renouveler les permis de p&ecirc;che commerciale",
        "pSA3": "<li> Examiner les demandes de renouvellement des demandeurs</li><li> &Eacute;mettre des renouvellements de licenses&nbsp;</li></li>",
        "pD3": "<li> &Eacute;mettre les renouvellements de licences dans les 30 jours suivant la demande</li><li> &Eacute;mettre 300 renouvellements de licences par ann&eacute;e</li>",
        "pRes3": "<li> <strong>1 agent</strong></li><li> <strong>1 analyste subalterne</strong></li>",
        "q1Text": "Actuellement, &laquo; Mettre en &oelig;uvre des horaires de travail flexibles &raquo; est une strat&eacute;gie d'att&eacute;nuation des risques suivants : surp&ecirc;che, d&eacute;gradation de l'habitat, catastrophe environnementale, changement climatique. Est-ce le bon endroit dans le plan de travail?",
        "q1a": "Oui. Garde-le l&agrave;.",
        "q1b": "Non. Il devrait faire partie de la cat&eacute;gorie d'att&eacute;nuation du risque &laquo; Roulement du personnel &raquo;.",
        "q1c": "Non. Il faut l'enlever compl&egrave;tement.",
        "q1aF": "<span class='v-wrong' /> Vous avez choisi : &laquo; Oui. Garde-le l&agrave; &raquo;. En fait, les heures de travail flexibles se rapportent mieux &agrave; la &laquo; Gestion et &agrave; l'administration de la direction &raquo;.",
        "q1bF": "<span class='v-right' /> Vous avez choisi : &laquo; Non. &raquo; Il devrait faire partie de la cat&eacute;gorie d'att&eacute;nuation du risque &laquo; Roulement du personnel &raquo;. <strong>C'est la meilleure r&eacute;ponse!</strong>",
        "q1cF": "<span class='v-wrong' /> Vous avez choisi : &laquo; Non. Il faut l'enlever compl&egrave;tement. &raquo; En fait, &laquo; Mettre en place des horaires de travail flexibles &raquo; est une strat&eacute;gie valable pour attirer et retenir les employ&eacute;s.",
        "q2Text": "Le livrable suivant ne figure pas dans votre plan de travail : &laquo; D&eacute;livrer 500 licences par an &raquo;. Avec quelle activit&eacute; devriez-vous le placer?",
        "q2a": "G&eacute;rer et administrer la direction",
        "q2b": "D&eacute;livrer des permis de p&ecirc;che commerciale",
        "q2c": "Renouveler les permis de p&ecirc;che commerciale",
        "q2aF": "<span class='v-wrong' /> Vous avez choisi : &laquo; G&eacute;rer et administrer la direction &raquo;. Ce livrable concerne la d&eacute;livrance de permis de p&ecirc;che commerciale.",
        "q2bF": "<span class='v-right' /> Vous avez choisi : &laquo; D&eacute;livrer des permis de p&ecirc;che commerciale &raquo;. <strong>C'est la meilleure r&eacute;ponse!</strong>",
        "q2cF": "<span class='v-wrong' /> Vous avez choisi : &laquo; Renouveler les permis de p&ecirc;che commerciale &raquo;. Ce livrable concerne la d&eacute;livrance de permis de p&ecirc;che commerciale.",
        "q3Text": "En regardant sous les ressources, vous remarquez que le poste de gestionnaire est manquant. Sous quelle activit&eacute; devez-vous le placer?",
        "q3a": "G&eacute;rer et administrer la direction",
        "q3b": "D&eacute;livrer des permis de p&ecirc;che commerciale",
        "q3c": "Renouveler les permis de p&ecirc;che commerciale",
        "q3aF": "<span class='v-right' /> Vous avez choisi : &laquo; G&eacute;rer et administrer la direction &raquo;. <strong>C'est la meilleure r&eacute;ponse!</strong>",
        "q3bF": "<span class='v-wrong' /> Vous avez choisi : &laquo; D&eacute;livrer des permis de p&ecirc;che commerciale &raquo;. Un poste de gestionnaire serait refl&eacute;t&eacute; sous la rubrique &laquo; G&eacute;rer et administrer la direction &raquo;.",
        "q3cF": "<span class='v-wrong' /> Vous avez choisi : &laquo; Renouveler les permis de p&ecirc;che commerciale &raquo;. Un poste de gestionnaire serait refl&eacute;t&eacute; sous la rubrique &laquo; G&eacute;rer et administrer la direction &raquo;."

    }
}
</i18n>
<script>
  export default {
  data() {
 return {
   govtPri: '',
   deptPri: '',
   dirPri: '',
   Q1:'',
   Q2:'',
   Q3:''
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
  font-weight: 400;
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
  border-top: 2px solid #718EA0;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #718EA0;
}

.planSubAct {
  border-top: 2px solid #7fc69a;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #7FC69A;
}

.planDelivs {
  border-top: 2px solid #7F8AC6;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #7F8AC6;
}

.planRisk {
  border-top: 2px solid #C3C67F;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #C3C67F;
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
  border-top: 2px solid #c67fa3;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #c67fa3;
}

.planRes {
  border-top: 2px solid #c6957f;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #c6957f;
}

.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 25px;
}

.thNumbered:before {
  position: absolute;
  font-weight: 400;
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