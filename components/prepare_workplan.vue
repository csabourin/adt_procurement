<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
    <p><strong v-html="$t('pwpTitle')"></strong></p>
    <table class='tableColoured'>
      <tr>
        <td colspan='8' class='govtPri'>
          <p><span v-html="$t('pwpGovtPri')" />
            <select v-model='govtPri'>
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option value="1">{{$t('q1-1')}}</option>
              <option value="2">{{$t('q1-2')}}</option>
              <option value="3">{{$t('q1-3')}}</option>
              <option value="4">{{$t('q1-4')}}</option>
              <option value="5">{{$t('q1-5')}}</option>
            </select>
          </p>
          <p v-if="govtPri"> <span v-html="$t('a1-'+govtPri)" /></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='deptPri'>
          <p><span v-html="$t('pwpDeptPri')" /><select v-model='deptPri'>
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option value="1">{{$t('q2-1')}}</option>
              <option value="2">{{$t('q2-2')}}</option>
              <option value="3">{{$t('q2-3')}}</option>
              <option value="4">{{$t('q2-4')}}</option>
              <option value="5">{{$t('q2-5')}}</option>
            </select>
          </p>
          <p v-if="deptPri"> <span v-html="$t('a2-'+deptPri)" /></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='dirPri'>
          <p><span v-html="$t('pwpDirPri')" /> <select v-model='dirPri'>
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option value="1">{{$t('q3-1')}}</option>
              <option value="2">{{$t('q3-2')}}</option>
              <option value="3">{{$t('q3-3')}}</option>
              <option value="4">{{$t('q3-4')}}</option>
              <option value="5">{{$t('q3-5')}}</option>
            </select>
          </p>
          <p v-if="dirPri"><span v-html="$t('a3-'+dirPri)" /></p>
        </td>
      </tr>
    </table>
    <div class="scrollMe">      
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr>
          <th class='planAct thNumbered'><span >{{$t('titleActivities')}}</span></th>
          <th class='planSubAct thNumbered'><span >{{$t('titleSubActivities')}}</span></th>
          <th class='planDelivs thNumbered'><span >{{$t('titleDeliverables')}}</span></th>
          <th class='planRisk thNumbered'><span >{{$t('titleRisk')}}</span></th>
          <th class='planLikely thNumbered'><span >{{$t('titleLikelihood')}}</span></th>
          <th class='planImpact thNumbered'><span >{{$t('titleImpact')}}</span></th>
          <th class='planMitigat thNumbered'><span >{{$t('titleMitigation')}}</span></th>
          <th class='planRes thNumbered'><span >{{$t('titleResources')}}</span></th>
        </tr>
      </table>
    </div>
  </span>
</template>
<i18n>
  {
  "en":{
  "pwpInstructions":"Your director shares with you this coming year’s priorities for your directorate: “Protect aquatic ecosystems, sustain fisheries and manage the issuing of licenses.”",
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
  "q1-1":"To make Canada a leader of international efforts to combat climate change",
  "q1-2":"To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations",
  "q1-3":"To implement and further develop the Oceans Protection Plan",
  "q1-4":"To improve marine safety",
  "q1-5":"To restore annual federal funding for freshwater research",
  "a1-1":"<span class='v-wrong' /> You have chosen : “To make Canada a leader of international efforts to combat climate change” <br>- While this is a great priority for the government, our scope is more about fisheries, not climate change.",
  "a1-2":"<span class='v-right' /> You have chosen : “To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations”.<br><strong>This is correct!</strong> Our priority is to protect the fisheries so they are still around in 40 years for our grandchildren!",
  "a1-3":"<span class='v-wrong' />You have chosen : “To implement and further develop the Oceans Protection Plan” <br>- While this is a great priority for the government, your unit’s scope is more about fisheries, not protecting the oceans.",
  "a1-4":"<span class='v-wrong' /> You have chosen : “To improve marine safety” <br>- While this is a great priority for the government, our scope is more about fisheries, not improving marine safety.",
  "a1-5":"<span class='v-wrong' /> You have chosen : “To restore annual federal funding for freshwater research” <br>- While this is a great priority for the government, our scope is more about fisheries, not freshwater research.",
  "q2-1":"To sustainably manage Canadian aquaculture",
  "q2-2":"To respond to on-water incidents",
  "q2-3":"To support prosperous and sustainable commercial, Aboriginal and recreational fisheries, aquaculture and other oceans industries",
  "q2-4":"To ensure access to safe harbors",
  "q2-5":"To minimize or avoid negative impacts on Canada’s oceans",
  "a2-1":"<span class='v-wrong' /> You have chosen : “To sustainably manage Canadian aquaculture”.<br>- While this is a great priority, our scope is more about fisheries.",
  "a2-2":"<span class='v-wrong' /> You have chosen : “To respond to on-water incidents”. <br>- While this is a great priority, our scope is more about fisheries.",
  "a2-3":"<span class='v-right' /> You have chosen : “To support prosperous and sustainable commercial, Aboriginal and recreational fisheries, aquaculture and other oceans industries”.<br><strong>This is the correct answer</strong>. Our scope is about fisheries",
  "a2-4":"<span class='v-wrong' /> You have chosen : “To ensure access to safe harbors”.<br>- While this is a great priority, our scope is more about fisheries.",
  "a2-5":"<span class='v-wrong' /> You have chosen : “To minimize or avoid negative impacts on Canada’s oceans”.<br>- While this is a great priority, our scope is more about fisheries.",
  "q3-1":"To manage the commercial domestic fisheries",
  "q3-2":"To protect endangered species in the great lakes",
  "q3-3":"To eliminate the encroachment of invasive species",
  "q3-4":"To reintroduce endangered fish to their native habitat",
  "q3-5":"To repair large vessels",
  "a3-1":"<span class='v-right' /> You have chosen : “To manage the commercial domestic fisheries”, <strong>this is great!</strong>",
  "a3-2":"<span class='v-wrong' /> You have chosen : “To protect endangered species in the great lakes”. While this is a great priority, our scope is more about fisheries.",
  "a3-3":"<span class='v-wrong' /> You have chosen : “To eliminate the encroachment of invasive species”. While this is a great priority, our scope is more about fisheries.",
  "a3-4":"<span class='v-wrong' /> You have chosen : “To reintroduce endangered fish to their native habitat”. While this is a great priority, our scope is more about fisheries.",
  "a3-5":"<span class='v-wrong' /> You have chosen : “To repair large vessels”. That is not us! While this is a great priority, our scope is more about fisheries."
  },
  "fr":{
  "pwpInstructions":"Votre directeur partage avec vous les priorités de la prochaine année pour votre direction : « Protéger les écosystèmes aquatiques, soutenir les pêches et gérer la délivrance des permis. »",
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
  "q1-1":"Faire du Canada un chef de file des efforts internationaux de lutte contre les changements climatiques.",
  "q1-2":"Servir les Canadiens en assurant l'utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
  "q1-3":"Mettre en œuvre et développer davantage le Plan de protection des océans.",
  "q1-4":"Améliorer la sécurité maritime.",
  "q1-5":"Rétablir le financement fédéral annuel de la recherche sur l'eau douce.",
  "a1-1":"Vous avez choisi : « Faire du Canada un chef de file des efforts internationaux de lutte contre les changements climatiques » <br>- Bien qu'il s'agisse d'une grande priorité pour le gouvernement, notre portée porte davantage sur les pêches que sur les changements climatiques.",
  "a1-2":"Vous avez choisi : « Servir les Canadiens en assurant l'utilisation prospère et durable des écosystèmes aquatiques pour les générations futures ». <br><strong>Ceci est correct!</strong> Notre priorité est de protéger les pêches pour qu'elles soient encore là dans 40 ans pour nos petits-enfants!",
  "a1-3":"Vous avez choisi : « Mettre en œuvre et développer davantage le Plan de protection des océans&nbsp;» <br>- Bien qu'il s'agisse d'une grande priorité pour le gouvernement, votre unité s'occupe davantage des pêches que de la protection des océans.",
  "a1-4":"Vous avez choisi : « Améliorer la sécurité maritime » <br>- Bien qu'il s'agisse d'une grande priorité pour le gouvernement, notre objectif est davantage la pêche que l'amélioration de la sécurité maritime.",
  "a1-5":"Vous avez choisi : « Rétablir le financement fédéral annuel de la recherche sur l'eau douce » <br>- Bien qu'il s'agisse d'une grande priorité pour le gouvernement, notre portée concerne davantage les pêches que la recherche sur l'eau douce.",
  "q2-1":"Gérer de façon durable l'aquaculture canadienne",
  "q2-2":"Intervenir en cas d'incident sur l'eau ",
  "q2-3":"Soutenir des pêches commerciales, autochtones et récréatives prospères et durables, l'aquaculture et d'autres industries océaniques.",
  "q2-4":"Garantir l'accès aux ports sûrs ",
  "q2-5":"Minimiser ou éviter les impacts négatifs sur les océans du Canada",
  "a2-1":"Vous avez choisi : « Gérer de façon durable l'aquaculture canadienne ». <br>- Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches.",
  "a2-2":"Vous avez choisi : « Intervenir en cas d'incident sur l'eau ». <br>- Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches.",
  "a2-3":"Vous avez choisi : « Soutenir des pêches commerciales, autochtones et récréatives prospères et durables, l'aquaculture et d'autres industries maritimes ».<br>- <strong> Ceci est correct</strong>. Notre portée concerne les pêches.",
  "a2-4":"Vous avez choisi : « Assurer l'accès aux ports sûrs ». <br>- Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches.",
  "a2-5":"Vous avez choisi : « Minimiser ou éviter les impacts négatifs sur les océans du Canada ». <br>- Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches.",
  "q3-1":"Gérer les pêches commerciales intérieures",
  "q3-2":"Protéger les espèces en voie de disparition dans les Grands Lacs",
  "q3-3":"Éliminer l'empiètement d'espèces envahissantes",
  "q3-4":"Réintroduire les poissons en voie de disparition dans leur habitat d'origine",
  "q3-5":"Réparer de grands navires",
  "a3-1":"Vous avez choisi : « Gérer les pêches commerciales intérieures », <strong>c'est génial!</strong>",
  "a3-2":"Vous avez choisi : « Protéger les espèces en voie de disparition dans les Grands Lacs ». Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches.",
  "a3-3":"Vous avez choisi : « Éliminer l'empiètement des espèces envahissantes ». Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches.",
  "a3-4":"Vous avez choisi : « Réintroduire les poissons en voie de disparition dans leur habitat d’origine ». Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches.",
  "a3-5":"Vous avez choisi : « Réparer de grands navires ». Ce n'est pas nous! Bien qu'il s'agisse d'une grande priorité, notre portée concerne davantage les pêches."
  }
  }
</i18n>
<script>
  export default {
  data() {
    return {
      govtPri: '',
      deptPri: '',
      dirPri: ''
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

.tableColoured select{
  max-width: 100%;
}
.vertical{
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
