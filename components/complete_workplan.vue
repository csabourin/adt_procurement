<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
    <p><strong v-html="$t('pwpTitle')"></strong></p>
    <table class='tableColoured'>
      <tr>
        <td colspan='8' class='govtPri'>
          <p><span v-html="$t('pwpGovtPri')" /> {{$t('q1-2')}}
          </p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='deptPri'>
          <p><span v-html="$t('pwpDeptPri')" /> {{$t('q2-3')}}
          </p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='dirPri'>
          <p><span v-html="$t('pwpDirPri')" /> {{$t('q3-1')}}
          </p>
        </td>
      </tr>
    </table>
    <div class="scrollMe">
      <table border="1" cellspacing="0" cellpadding="1">
        <tr>
          <td class='planAct nav-item'>
            <p align="center"><strong>{{$t('titleActivities')}}</strong></p>
          </td>
          <td class='planSubAct nav-item'>
            <p align="center"><strong>{{$t('titleSubActivities')}}</strong></p>
          </td>
          <td class='planDelivs nav-item'>
            <p align="center"><strong>{{$t('titleDeliverables')}}</strong></p>
          </td>
          <td class='planRisk nav-item'>
            <p align="center"><strong>{{$t('titleRisk')}}</strong></p>
          </td>
          <td class='planLikely nav-item'>
            <p align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{$t('titleLikelihood')}}</strong>&nbsp;</p>
          </td>
          <td class='planImpact nav-item'>
            <p align="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{$t('titleImpact')}}</strong>&nbsp;</p>
          </td>
          <td class='planMitigat nav-item'>
            <p align="center"><strong>{{$t('titleMitigation')}}</strong></p>
          </td>
          <td class='planRes nav-item'>
            <p align="center"><strong>{{$t('titleResources')}}</strong></p>
          </td>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th class='planAct thNumbered'>{{$t('titleActivities')}}</th>
          <th class='planSubAct thNumbered'>{{$t('titleSubActivities')}}</th>
          <th class='planDelivs thNumbered'>{{$t('titleDeliverables')}}</th>
          <th class='planRisk thNumbered'>{{$t('titleRisk')}}</th>
          <th class='planLikely thNumbered'>{{$t('titleLikelihood')}}</th>
          <th class='planImpact thNumbered'>{{$t('titleImpact')}}</th>
          <th class='planMitigat thNumbered'>{{$t('titleMitigation')}}</th>
          <th class='planRes thNumbered'>{{$t('titleResources')}}</th>
        </tr>
        <tr>
          <td class='planAct'>Manage and administer the directorate</td>
          <td class='planSubAct'>
            <ul>
              <li>Supervise, monitor and train staff&nbsp;</li>
              <li>Schedule work&nbsp;</li>
              <li>Provide clerical support&nbsp;</li>
              <li>Move office to new location </li>
            </ul>
          </td>
          <td class='planDelivs'>
            <ul>
              <li>Management of licencing activities</li>
              <li>Reception covered from 9 to 5</li>
            </ul>
          </td>
          <td class='planRisk'>
            <p>Staff turnover </p>
          </td>
          <td class='planLikely'>
            <p>Low </p>
          </td>
          <td class='planImpact'>
            <p>High </p>
          </td>
          <td class='planMitigat'>
            <ul>
              <li>Establish succession plan</li>
              <li>Establish collective staffing pools</li>
              <li>Recognize excellent work</li>
              <li>Celebrate successes</li>
              <li>Involve employees in decision-making</li>
              <li>Implement flexible work hours {should be here}</li>
            </ul>
          </td>
          <td class='planRes'>
            <ul>
              <li>1 Admin Assistant</li>
              <li>Missing &ldquo;Manager&rdquo;</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td rowspan="2" class='planAct'>
            <p>Issue commercial fishing licenses&nbsp; </p>
          </td>
          <td rowspan="2" class='planSubAct'>
            <ul>
              <li>Review applicant requests</li>
              <li>Check reliability</li>
              <li>Issue licenses</li>
              <li>Conduct inspections</li>
            </ul>
          </td>
          <td rowspan="2" class='planDelivs'>
            <ul>
              <li>Issue license within 30 days of request </li>
              <transition name="fade">    <li v-if="Q2==2" >Issue 500 licenses per year</li></transition>
              <li>Missing &ldquo;Issue 500 licenses per year&rdquo;</li>
            </ul>
          </td>
          <td rowspan="4" class='planRisk'>
            Overfishing
          </td>
          <td rowspan="4" class='planLikely'>
            <p>Low </p>
          </td>
          <td rowspan="4" class='planImpact'>
            <p>High </p>
          </td>
          <td rowspan="4" class='planMitigat'>
            <ul>
              <li>Protect habitat</li>
              <li>Place catching limits</li>
              <li>Implement fishing seasons</li>
            </ul>
            <p>&nbsp;</p>
            <ul>
              <transition name="fade"><li v-if="Q1==''">Implement flexible work hours</li></transition>
            </ul>
          </td>
          <td rowspan="2" class='planRes'>
            <ul>
              <li>1 officer</li>
              <li>2 analysts</li>
              <li>1 junior officer</li>
            </ul>
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td rowspan="2" class='planAct'>
            <p>Renew commercial fishing licenses&nbsp; </p>
          </td>
          <td rowspan="2" class='planSubAct'>
            <ul>
              <li>Review applicant renewal requests</li>
              <li>Issue renewal license</li>
            </ul>
          </td>
          <td rowspan="2" class='planDelivs'>
            <ul>
              <li>Issue license renewal within 30 days of request</li>
              <li>Issue 300 license renewals per year </li>
            </ul>
          </td>
          <td rowspan="2" class='planRes'>
            <ul>
              <li><strong>1 officer</strong></li>
              <li><strong>1 junior analyst</strong></li>
            </ul>
          </td>
        </tr>
        <tr> </tr>
      </table>
    </div>
    <div><strong>Question 1</strong>
      <p>Currently, “Implement flexible work hours” is a mitigation strategy for the following risks: overfishing, habitat degradation, environmental disaster, climate change. Is this the right location in the work plan?</p>
      <ol type="a">
        <li><input type="radio" name="q1" id="quest1-1" v-model="Q1" value="1"><label for="quest1-1">Yes. Keep it there.</label></li>
        <li><input type="radio" name="q1" id="quest1-2" v-model="Q1" value="2"><label for="quest1-2">No. It should be under the mitigation category for risk “Staff turnover”.</label></li>
        <li><input type="radio" name="q1" id="quest1-3" v-model="Q1" value="3"><label for="quest1-3">No. It should be removed completely.</label></li>
      </ol>
      <p v-if="Q1==1">{{ "You have chosen: “Yes. Keep it there”. Actually, flexible work hours relates better to the “Management and administration of the directorate”." }}</p>
      <p v-if="Q1==2">{{ "You have chosen: “No. It should be under the mitigation category for risk “Staff turnover”. This is the best answer!" }}</p>
      <p v-if="Q1==3">{{ "You have chosen: “No. It should be removed completely.” Actually, “Implement flexible work hours” is a valid strategy to attract and retain employees." }}</p>
    </div>
    </div>
    <div><strong>Question 2</strong>
      <p>The following deliverable is missing from your work plan: “Issue 500 licenses per year”. With which activity should you place it?</p>
      <ol type="a">
        <li><input type="radio" name="q2" id="quest2-1" v-model="Q2" value="1"><label for="quest2-1">Manage and administer the directorate</label></li>
        <li><input type="radio" name="q2" id="quest2-2" v-model="Q2" value="2"><label for="quest2-2">Issue commercial fishing licenses</label></li>
        <li><input type="radio" name="q2" id="quest2-3" v-model="Q2" value="3"><label for="quest2-3">Renew commercial fishing licenses</label></li>
      </ol>
      <p v-if="Q2==1">{{ "You have chosen: “Manage and administer the directorate”. This deliverable relates to issuing commercial fishing licenses." }}</p>
      <p v-if="Q2==2">{{ "You have chosen: “Issue commercial fishing licenses”. This is the best answer!" }}</p>
      <p v-if="Q2==3">{{ "You have chosen: “Renew commercial fishing licenses”. This deliverable relates to issuing commercial fishing licenses." }}</p>
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "pwpInstructions":"Looking at your draft, you notice that some items may have been dropped into the wrong location or may be missing. Update your draft accordingly.",
  "pwpTitle":"Choose the best option for each section of this work plan by using the pull down menus.",
  "pwpGovtPri":"<strong>Government priorities</strong>",
  "pwpDeptPri":"<strong>Departmental priorities</strong>",
  "pwpDirPri":"<strong>Directorate priorities</strong>",
  "titleActivities":"Activities",
  "pwpPlanAct":"<strong>Activities</strong>",
  "titleSubActivities":"Sub-activities",
  "titleDeliverables":"Deliverables",
  "titleRisk":"Risk",
  "titleLikelihood":"Likelihood",
  "titleImpact":"Impact",
  "titleMitigation":"Mitigation",
  "titleResources":"Resources",
  "qDisabled":"Please select one",
  "q1-2":"To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations",
  "q2-3":"To support prosperous and sustainable commercial, Aboriginal and recreational fisheries, aquaculture and other oceans industries",
  "q3-1":"To manage the commercial domestic fisheries"
  },
  "fr":{
  "pwpInstructions":"En regardant votre brouillon, vous remarquez que certains items peuvent avoir été placés au mauvais endroit ou manquer. Mettez à jour votre brouillon en conséquence. ",
  "pwpTitle":"Choisissez la meilleure option pour chaque section de ce plan de travail en utilisant les menus déroulants.",
  "pwpGovtPri":"<strong>Priorités du gouvernement</strong>",
  "pwpDeptPri":"<strong>Priorités ministérielles</strong>",
  "pwpDirPri":"<strong>Priorités de la direction</strong>",
  "titleActivities":"Activités",
  "titleSubActivities":"Sous-activités",
  "titleDeliverables":"Livrables",
  "titleRisk":"Risque",
  "titleLikelihood":"Probabilité",
  "titleImpact":"Impact",
  "titleMitigation":"Atténuation",
  "titleResources":"Resources",
  "qDisabled":"Veuillez faire un choix",
  "q1-2":"Servir les Canadiens en assurant l'utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
  "q2-3":"Soutenir des pêches commerciales, autochtones et récréatives prospères et durables, l'aquaculture et d'autres industries océaniques.",
  "q3-1":"Gérer les pêches commerciales intérieures"
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
   Q2:''
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