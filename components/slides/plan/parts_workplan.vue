<template>
  <span>
    <div style="float:right">
      <!--<download :filename="$t('fileName.WorkPlanTemplate')" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" iconStyle="planBackground" size="64" :title="$t('downloadPlan')" name="WorkPlanTemplate" />-->
    </div>
    <h2 v-html="$t('pwpTitle')"></h2>

    <b-container class="workplan-table wp-table-1">
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpGovtPriTitle')"></h3>
          <p v-html="$t('pwpGovtPri')"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpDeptPriTitle')"></h3>
          <p v-html="$t('pwpDeptPri')"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage">
          <h3 v-html="$t('pwpDirPriTitle')"></h3>
          <p v-html="$t('pwpDirPri')"></p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="encadrage" sm="12">
          <h3 v-html="$t('titleActivities')"></h3>
          <!--p v-html="$t('pwpPlanAct')"></p-->
          <p v-html="$t('pwpPlanAct')" style="margin-left: 10px; margin-top: 10px;"></p>

          <h4 v-html="$t('titleSubActivities')">Sous activités</h4>
          <p v-html="$t('pwpPlanSubAct')" style="margin-left: 5px;">
          <ul>
            <li>Superviser, surveiller et former le personnel</li>
            <li>Planifier le travail</li>
            <li>Fournir du soutien administratif</li>
            <li>Déménagement des bureaux dans de nouveaux locaux</li>
          </ul>
          </p>
          <h4 v-html="$t('titleDeliverables')">Livrables</h4>
          <p v-html="$t('pwpPlanDelivs')" style="margin-left: 5px;">
            <ul>
              <li>Gestion des activités de délivrance de permis</li>
              <li>Réception ouverte de 9 h à 17 h</li>
            </ul>
          </p>
          
          <h4 v-html="$t('titleRisk')">Risque</h4>
          <p v-html="$t('pwpPlanRisk')" style="margin-left: 5px;">Roulement du personnel</p>
          <h4 v-html="$t('titleLikelihood')">Probabilité</h4>
          <p v-html="$t('pwpPlanLikely')" style="margin-left: 5px;">Faible</p>
          <h4 v-html="$t('titleImpact')">Impact</h4>
          <p v-html="$t('pwpPlanImpact')" style="margin-left: 5px;">Élevé</p>
          <h4 v-html="$t('titleMitigation')">Atténuation</h4>
          <p v-html="$t('pwpPlanMitigat')" style="margin-left: 5px;">
            <ul>
              <li>Établir un plan de relève</li>
              <li>Établir des bassins de dotation collective</li>
              <li>Reconnaître l'excellence du travail</li>
              <li>Célébrer les succès</li>
              <li>Impliquer les employés dans la prise de décision</li>
              <li>Horaires de travail flexibles</li>
            </ul>
           </p>
          <h4 v-html="$t('titleResources')">Resources</h4>
          <p v-html="$t('pwpPlanRes')" style="margin-left: 5px;">
            <ul>
              <li>1 adjoint administratif</li>
              <li>gestionnaire</li>
            </ul>
          </p>
        </b-col>
        
      </b-row>
    </b-container>
    <!--table class='tableColoured'>
      <tr>
        <td colspan='8' class='govtPri'>
          <p>
            <strong v-html="$t('pwpGovtPriTitle')"></strong> - 
            <span v-html="$t('pwpGovtPri')"></span>
        </p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='deptPri'>

          <p>
            <strong v-html="$t('pwpDeptPriTitle')"></strong> - 
            <span v-html="$t('pwpDeptPri')"></span>
        </p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='dirPri'>

          <p>
            <strong v-html="$t('pwpDirPriTitle')"></strong> - 
            <span v-html="$t('pwpDirPri')"></span>
        </p>
        </td>
      </tr>
    </table-->




    <!--div>
      <b-card no-body>
        <b-tabs class="thNumbered" card fill>
          <b-tab class='planAct thNumbered' :title="$t('titleActivities')" active>
            <b-card-text>
              <p v-html="$t('pwpPlanAct')"></p>
            </b-card-text>
          </b-tab>
          <b-tab class='planSubAct thNumbered' :title="$t('titleSubActivities')">
            <b-card-text>
              <p v-html="$t('pwpPlanSubAct')"></p>
            </b-card-text>
          </b-tab>
          <b-tab class='planDelivs thNumbered' :title="$t('titleDeliverables')">
            <b-card-text>
              <p v-html="$t('pwpPlanDelivs')"></p>
            </b-card-text>
          </b-tab>
          <b-tab class='planRisk thNumbered' :title="$t('titleRisk')">
            <b-card-text>
              <p v-html="$t('pwpPlanRisk')"></p>
            </b-card-text>
          </b-tab>
          <b-tab class='planLikely thNumbered' :title="$t('titleLikelihood')">
            <b-card-text>
              <p v-html="$t('pwpPlanLikely')"></p>
            </b-card-text>
          </b-tab>
          <b-tab class='planImpact thNumbered' :title="$t('titleImpact')">
            <b-card-text>
              <p v-html="$t('pwpPlanImpact')"></p>
            </b-card-text>
          </b-tab>
          <b-tab class='planMitigat thNumbered' :title="$t('titleMitigation')">
            <b-card-text>
              <p v-html="$t('pwpPlanMitigat')"></p>
            </b-card-text>
          </b-tab>
          <b-tab class='planRes thNumbered' :title="$t('titleResources')">
            <b-card-text>
              <p v-html="$t('pwpPlanRes')"></p>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div-->
  </span>
</template>
<i18n>
  {
  "en":{
  "pwpTitle":"Take a moment now to explore the different sections of a work plan.",
  "downloadPlan":"Download a Word template of the work plan",
  "dwnPlanLine1":"Work Plan",
  "dwnPlanLine2":"Template",
  "pwpGovtPriTitle":"Government priorities",
  "pwpGovtPri":"In the Speech from the throne, a newly elected government sets out its agenda. This includes its broad goals and commitments and how it will reach them.",
  "pwpDeptPriTitle":"Departmental priorities",
  "pwpDeptPri":"What your department sets out to do to support the government’s priorities.",
  "pwpDirPriTitle":"Directorate priorities",
  "pwpDirPri":"What your directorate sets out to do to support the departmental priorities.",
  "titleActivities":"Activities",
  "pwpPlanAct":"The work tasks to be accomplished to support your directorate’s priorities. This includes performance indicators and service standards for each work task.",
  "titleSubActivities":"Sub-activities",
  "pwpPlanSubAct":"The work tasks broken down into smaller parts.",
  "titleDeliverables":"Deliverables",
  "pwpPlanDelivs":"Specific and tangible items you should be able to check off your list when you accomplish them.",
  "titleRisk":"Risk",
  "pwpPlanRisk":"Potential events that may affect the activity and its ability to meet and accomplish its objectives and expected results.",
  "titleLikelihood":"Likelihood",
  "pwpPlanLikely":"An educated guess at whether or not the risk will happen.",
  "titleImpact":"Impact",
  "pwpPlanImpact":"The potential loss associated with a risk.",
  "titleMitigation":"Mitigation",
  "pwpPlanMitigat":"Actions to counteract the potential risks.",
  "titleResources":"Resources",
  "pwpPlanRes":"The budget, personnel (full time equivalent “FTE”), consultants, buildings and materials required to carry out the directorate activities."
  },
  "fr":{
  "pwpTitle":"Prenez un moment pour explorer les différentes sections d’un plan de travail.",
  "downloadPlan":"Télécharger un modèle Word du plan de travail",
  "dwnPlanLine1":"Plan de",
  "dwnPlanLine2":"travail",
  "pwpGovtPriTitle":"Priorités du gouvernement",
  "pwpGovtPri":"Dans le discours du Trône, un nouveau gouvernement établit son programme. Il s’agit de ses objectifs généraux et de ses engagements, et de la façon dont il les atteindra.",
  "pwpDeptPriTitle":"Priorités ministérielles",
  "pwpDeptPri":"Ce que votre ministère entend faire pour appuyer les priorités du gouvernement.",
  "pwpDirPriTitle":"Priorités de la direction",
  "titleActivities":"Activités",
  "pwpDirPri":"Ce que votre direction entend faire pour appuyer les priorités ministérielles.",
  "titleActivities":"Activités",
  "pwpPlanAct":"Les tâches à accomplir pour appuyer les priorités de votre direction. Cela comprend des indicateurs de rendement et des normes de service pour chaque tâche.",
  "titleSubActivities":"Sous-activités",
  "pwpPlanSubAct":"La tâche est divisée en plus petites parties.",
  "titleDeliverables":"Livrables",
  "pwpPlanDelivs":"Les éléments spécifiques et tangibles que vous devriez être en mesure de cocher sur votre liste lorsque vous les avez terminés.","titleRisk":"Risque",
  "pwpPlanRisk":"Événements potentiels susceptibles d’influer sur l’activité et sur sa capacité d’atteindre et de réaliser ses objectifs et les résultats attendus.",
  "titleLikelihood":"Probabilité",
  "pwpPlanLikely":"Un jugement approximatif permettant de déterminer si le risque se concrétisera ou pas.",
  "titleImpact":"Impact",
  "pwpPlanImpact":"La perte potentielle associée à un risque.",
  "titleMitigation":"Atténuation",
  "pwpPlanMitigat":"Actions pour contrer les risques potentiels.",
  "titleResources":"Ressources",
  "pwpPlanRes":"Le budget, le personnel (équivalent temps plein (ETP)), les consultants, les bâtiments et le matériel nécessaire à la réalisation des activités de la direction."
  }
  }
</i18n>
<script>
  import download from "~/components/fileDownload"
export default {
  components: {
    download
  }
}

</script>
<style type="text/css" scoped>
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

</style>
<style>
.thNumbered .nav-item {
  position: relative;
  /*padding-left: 30px;*/
  border-top:4px solid #fff;
  border-left:2px solid #fff;
  margin-right:4px;
  margin-left:1px;
  min-height:45px;
}

.thNumbered .nav-item:before {
  font-family:"Roboto";
  position: absolute;
  counter-increment: wpParts;
  content: counter(wpParts);
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  /*padding: .1em .5em 0 .5em;*/
  padding: 0em .3em 0 .5em;
  color: white;
  font-weight: bold;
}
.thNumbered .nav-item:nth-of-type(-n+6):before {
  content: "0"counter(wpParts);
}
.thNumbered .nav-item:nth-of-type(1):before {
  background-color: #577a90;
}

.thNumbered .nav-item:nth-of-type(2):before {
  background-color: #3A8251;
}

.thNumbered .nav-item:nth-of-type(3):before {
  background-color: #616EB8;
}

.thNumbered .nav-item:nth-of-type(4):before {
  background-color: #8D9245;
}

.thNumbered .nav-item:nth-of-type(5):before {
  background-color: #775F75;
}

.thNumbered .nav-item:nth-of-type(6):before {
  background-color: #607293;
}

.thNumbered .nav-item:nth-of-type(7):before {
  background-color: #B35685;
}

.thNumbered .nav-item:nth-of-type(8):before {
  background-color: #C35522;
}

.thNumbered .nav-item:nth-of-type(1) {
  border-color:#577a90;
  background-color: #e2e8ec;
}

.thNumbered .nav-item:nth-of-type(2) {
  border-color:#3A8251;
  background-color: #dcefe3;
}

.thNumbered .nav-item:nth-of-type(3) {
  border-color:#616EB8;
  background-color: #dfe2f1;
}

.thNumbered .nav-item:nth-of-type(4) {
  border-color:#8D9245;
  background-color: #f0f1df;
}

.thNumbered .nav-item:nth-of-type(5) {
  border-color:#775F75;
  background-color: #e1dce1;
}

.thNumbered .nav-item:nth-of-type(6) {
  border-color:#607293;
  background-color: #e3e7ed;
}

.thNumbered .nav-item:nth-of-type(7) {
  border-color:#B35685;
  background-color: #f1dfe8;
}

.thNumbered .nav-item:nth-of-type(8) {
  border-color:#C35522;
  background-color: #f1e5df;
}

.thNumbered .card-header {
  padding: 0px 9px;
  border:0;
}
.thNumbered .card-header a {
  padding-left:6px;
  text-align:left;
  font-weight:bold;
  /*min-height:45px;*/
  height:100%;
  vertical-align: middle;
}
.tabs.thNumbered {
  border-top:4px solid #fff;
}
/*Overriding BSVue (to centralize once tested & approved)*/
.tab-pane.thNumbered.card-body {
  padding:15px;
  margin-top:12px;
}
.card {
  border:0
}

</style>
