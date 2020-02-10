<template>
  <span>
    <div style="float:right">
      <download filename="WorkPlan_Template.docx" :line1="$t('dwnPlanLine1')" :line2="$t('dwnPlanLine2')" iconStyle="planBackground" size="64" :title="$t('downloadPlan')" />
    </div>
    <h2 v-html="$t('pwpTitle')"></h2>
    <p>&nbsp;</p>
    <table class='tableColoured'>
      <tr>
        <td colspan='8' class='govtPri'>
          <p v-html="$t('pwpGovtPri')"></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='deptPri'>
          <p v-html="$t('pwpDeptPri')"></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='dirPri'>
          <p v-html="$t('pwpDirPri')"></p>
        </td>
      </tr>
    </table>
    <div>
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
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "pwpTitle":"Take a moment now to explore the different sections of a work plan.",
  "downloadPlan":"Download a Word template of the work plan",
  "dwnPlanLine1":"Work Plan",
  "dwnPlanLine2":"Template",
  "pwpGovtPri":"<strong>Government priorities -</strong> In the Speech from the throne, a new government sets out its agenda. This includes its broad goals and commitments and how it will reach them.",
  "pwpDeptPri":"<strong>Departmental priorities -</strong> What your department sets out to do to support the government&rsquo;s priorities.",
  "pwpDirPri":"<strong>Directorate priorities -</strong> What your directorate sets out to do to support the departmental priorities.",
  "titleActivities":"Activities",
  "pwpPlanAct":"<strong>Activities -</strong> The work tasks to be accomplished to support your directorate&rsquo;s priorities. This includes performance indicators and service standards for each work task.",
  "titleSubActivities":"Sub-activities",
  "pwpPlanSubAct":"<strong>Sub-activities -</strong> The work tasks broken down into smaller parts.",
  "titleDeliverables":"Deliverables",
  "pwpPlanDelivs":"<strong>Deliverables -</strong> Specific and tangible items you should be able to check off your list when you accomplish them.",
  "titleRisk":"Risk",
  "pwpPlanRisk":"<strong>Risk -</strong> Potential events that may affect the activity and its ability to meet and accomplish its objectives and expected results.",
  "titleLikelihood":"Likelihood",
  "pwpPlanLikely":"<strong>Likelihood -</strong> An educated guess at whether or not the risk will happen.",
  "titleImpact":"Impact",
  "pwpPlanImpact":"<strong>Impact -</strong> The potential loss associated with a risk.",
  "titleMitigation":"Mitigation",
  "pwpPlanMitigat":"<strong>Mitigation -</strong> Actions to counteract the potential risks.",
  "titleResources":"Resources",
  "pwpPlanRes":"<strong>Resources -</strong> The budget, personnel, consultants, buildings and materials required to carry out the directorate activities."
  },
  "fr":{
  "pwpTitle":"Prenez un moment pour explorer les différentes sections d&rsquo;un plan de travail.",
  "downloadPlan":"Télécharger un modèle Word du plan de travail",
  "dwnPlanLine1":"Plan de",
  "dwnPlanLine2":"travail",
  "pwpGovtPri":"<strong>Priorités du gouvernement -</strong> Dans le discours du Trône, un nouveau gouvernement présente son programme. Il s&rsquo;agit notamment de ses objectifs généraux et de ses engagements et de la façon dont il les atteindra.",
  "pwpDeptPri":"<strong>Priorités ministérielles -</strong> Ce que votre ministère entend faire pour appuyer les priorités du gouvernement.",
  "pwpDirPri":"<strong>Priorités de la direction -</strong> Ce que votre direction générale entend faire pour appuyer les priorités ministérielles.","titleActivities":"Activités",
  "pwpPlanAct":"<strong>Activités -</strong> Les tâches de travail à accomplir pour appuyer les priorités de votre direction. Cela comprend des indicateurs de rendement et des normes de service pour chaque tâche de travail.","titleSubActivities":"Sous-activités",
  "pwpPlanSubAct":"<strong>Sous-activités -</strong> La tâche de travail est divisée en parties plus petites.","titleDeliverables":"Livrables",
  "pwpPlanDelivs":"<strong>Livrables -</strong>Les éléments spécifiques et tangibles que vous devriez être en mesure de cocher sur votre liste lorsque vous les accomplissez.","titleRisk":"Risque",
  "pwpPlanRisk":"<strong>Risque  -</strong> Événements susceptibles d&rsquo;influer sur l&rsquo;activité et sur sa capacité d&rsquo;atteindre et d&rsquo;atteindre ses objectifs et les résultats escomptés.","titleLikelihood":"Probabilité",
  "pwpPlanLikely":"<strong>Probabilité  -</strong> Un jugement approximatif permettant de déterminer si le risque se concrétisera ou non.","titleImpact":"Impact",
  "pwpPlanImpact":"<strong>Impact -</strong> La perte potentielle associée à un risque.","titleMitigation":"Atténuation",
  "pwpPlanMitigat":"<strong>Atténuation -</strong> Actions pour contrer les risques potentiels.","titleResources":"Resources",
  "pwpPlanRes":"<strong>Resources -</strong> Le budget, le personnel (équivalent temps plein «&nbsp;ETP&nbsp;»), les consultants, les bâtiments et le matériel nécessaires à la réalisation des activités de la direction."
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
