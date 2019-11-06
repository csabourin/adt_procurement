<template>
  <span>
    <div style="float:right"><a href="WorkPlan_Template.docx" :title="$t('downloadPlan')">
      <genericFile       :line1="$t('dwnPlanLine1')"      :line2="$t('dwnPlanLine2')"      iconStyle="planBackground"      iconWidth="64"      :title="$t('downloadPlan')" />
    </a>
    </div><h2 v-html="$t('pwpTitle')"></h2>
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
      <b-card no-body >
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
  "pwpTitle":"Take a moment now to explore the different sections.",
  "downloadPlan":"Download a Word template of the work plan",
  "dwnPlanLine1":"Work Plan",
  "dwnPlanLine2":"Template",
  "pwpGovtPri":"<strong>Government priorities</strong> –<br> In the Speech from the throne, a new government sets out its agenda. This includes its broad goals and commitments and how it will reach them.",
  "pwpDeptPri":"<strong>Departmental priorities</strong> –<br> What your department sets out to do to support the government’s priorities.",
  "pwpDirPri":"<strong>Directorate priorities</strong> –<br> What your directorate sets out to do to support the departmental priorities.",
  "titleActivities":"Activities",
  "pwpPlanAct":"<strong>Activities</strong> –<br> The work tasks to be accomplished to support your directorate’s priorities. This includes performance indicators and service standards for each work task.",
  "titleSubActivities":"Sub-activities",
  "pwpPlanSubAct":"<strong>Sub-activities</strong> –<br> The work tasks broken down into smaller parts.",
  "titleDeliverables":"Deliverables",
  "pwpPlanDelivs":"<strong>Deliverables</strong> –<br> Specific and tangible items you should be able to check off your list when you accomplish them.",
  "titleRisk":"Risk",
  "pwpPlanRisk":"<strong>Risk</strong> –<br> Potential events that may affect the activity and its ability to meet and accomplish its objectives and expected results.",
  "titleLikelihood":"Likelihood",
  "pwpPlanLikely":"<strong>Likelihood</strong> –<br> An educated guess at whether or not the risk will happen.",
  "titleImpact":"Impact",
  "pwpPlanImpact":"<strong>Impact</strong> –<br> The potential loss associated with a risk.",
  "titleMitigation":"Mitigation",
  "pwpPlanMitigat":"<strong>Mitigation</strong> – Actions to counteract the potential risks.",
  "titleResources":"Resources",
  "pwpPlanRes":"<strong>Resources</strong> –<br> The budget, personnel, consultants, buildings and materials required to carry out the directorate activities."
  },
  "fr":{
  "pwpTitle":"Prenez un moment pour explorer les différentes sections.",
  "downloadPlan":"Télécharger un modèle Word du plan de travail",
  "dwnPlanLine1":"Plan de",
  "dwnPlanLine2":"travail",
  "pwpGovtPri":"<strong>Priorités du gouvernement</strong> –<br> Dans le discours du Trône, un nouveau gouvernement présente son programme. Il s'agit notamment de ses objectifs généraux et de ses engagements et de la façon dont il les atteindra.",
  "pwpDeptPri":"<strong>Priorités ministérielles</strong> –<br> Ce que votre ministère entend faire pour appuyer les priorités du gouvernement.",
  "pwpDirPri":"<strong>Priorités de la direction</strong> –<br> Ce que votre direction générale entend faire pour appuyer les priorités ministérielles.","titleActivities":"Activités",
  "pwpPlanAct":"<strong>Activités </strong> –<br> Les tâches de travail à accomplir pour appuyer les priorités de votre direction. Cela comprend des indicateurs de rendement et des normes de service pour chaque tâche de travail.","titleSubActivities":"Sous-activités",
  "pwpPlanSubAct":"<strong>Sous-activités</strong> –<br> La tâche de travail est divisée en parties plus petites.","titleDeliverables":"Livrables",
  "pwpPlanDelivs":"<strong>Livrables</strong> –<br>Les éléments spécifiques et tangibles que vous devriez être en mesure de cocher sur votre liste lorsque vous les accomplissez.","titleRisk":"Risque",
  "pwpPlanRisk":"<strong>Risque </strong> –<br> Événements susceptibles d'influer sur l'activité et sur sa capacité d'atteindre et d'atteindre ses objectifs et les résultats escomptés.","titleLikelihood":"Probabilité",
  "pwpPlanLikely":"<strong>Probabilité </strong> –<br> Déterminer si le risque se concrétisera ou non.","titleImpact":"Impact",
  "pwpPlanImpact":"<strong>Impact</strong> –<br> La perte potentielle associée à un risque.","titleMitigation":"Atténuation",
  "pwpPlanMitigat":"<strong>Atténuation </strong> – Actions pour contrer les risques potentiels.","titleResources":"Resources",
  "pwpPlanRes":"<strong>Resources</strong> –<br> Le budget, le personnel (équivalent temps plein «&nbsp;ETP&nbsp;»), les consultants, les bâtiments et le matériel nécessaires à la réalisation des activités de la direction."
  }
  }
</i18n>
<script>
  import genericFile from "~/components/icons/genFileIcon"
  export default {
  data() {
    return {
      focusOn: 1
    }
  },
  methods: {
    makeLarge(e) {
      this.focusOn = 8
    }
  },
  components:{
    genericFile
  }
}

</script>
<style type="text/css" scoped>
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
</style>
<style>
.thNumbered .nav-item{position:relative;}
.thNumbered .nav-item:before{
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

.thNumbered .nav-item:nth-of-type(1):before {background-color: #718EA0}
.thNumbered .nav-item:nth-of-type(2):before {background-color: #7fc69a}
.thNumbered .nav-item:nth-of-type(3):before {background-color: #7F8AC6;}
.thNumbered .nav-item:nth-of-type(4):before {background-color: #C3C67F;}
.thNumbered .nav-item:nth-of-type(5):before {background-color: #775F75;}
.thNumbered .nav-item:nth-of-type(6):before {background-color: #607293;}
.thNumbered .nav-item:nth-of-type(7):before {background-color: #c67fa3;}
.thNumbered .nav-item:nth-of-type(8):before {background-color: #c6957f;}
.thNumbered .nav-item:nth-of-type(1) {    background-color: #e2e8ec;}
.thNumbered .nav-item:nth-of-type(2) {    background-color: #dcefe3;}
.thNumbered .nav-item:nth-of-type(3) {    background-color: #dfe2f1;}
.thNumbered .nav-item:nth-of-type(4) {    background-color: #f0f1df;}
.thNumbered .nav-item:nth-of-type(5) {    background-color: #e1dce1;}
.thNumbered .nav-item:nth-of-type(6) {    background-color: #e3e7ed;}
.thNumbered .nav-item:nth-of-type(7) {    background-color: #f1dfe8;}
.thNumbered .nav-item:nth-of-type(8) {    background-color: #f1e5df;}

.thNumbered .card-header {
    padding: 0px 9px;
}

</style>
