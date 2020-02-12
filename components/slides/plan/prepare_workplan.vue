<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
    <p><strong v-html="$t('pwpTitle')"></strong></p>
    <table class='tableColoured'>
      <tr>
        <td colspan='8' class='govtPri'>
          <p><span v-html="$t('pwpGovtPri')" />
            <select v-model='govtPri' @change="q1Submit=false">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option v-for="(answer, index) in $t('q1')" :value="index">{{answer}}</option>
            </select> <b-button @click="q1Submit=true">{{$t('submit')}}</b-button>
          </p>
          <p v-if="govtPri && q1Submit"> <span v-html="$t('q1a.'+govtPri)" /></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='deptPri'>
          <p><span v-html="$t('pwpDeptPri')" />
            <select v-model='deptPri' @change="q2Submit=false">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option value="1">{{$t('q2-1')}}</option>
              <option value="2">{{$t('q2-2')}}</option>
              <option value="3">{{$t('q2-3')}}</option>
            </select> <b-button @click="q2Submit=true">{{$t('submit')}}</b-button>
          </p>
          <p v-if="deptPri && q2Submit"> <span v-html="$t('a2-'+deptPri)" /></p>
        </td>
      </tr>
      <tr>
        <td colspan='8' class='dirPri'>
          <p><span v-html="$t('pwpDirPri')" />
            <select v-model='dirPri' @change="q3Submit=false">
              <option disabled value=''>{{$t('qDisabled')}}</option>
              <option value="1">{{$t('q3-1')}}</option>
              <option value="2">{{$t('q3-2')}}</option>
              <option value="3">{{$t('q3-3')}}</option>
            </select> <b-button @click="q3Submit=true">{{$t('submit')}}</b-button>
          </p>
          <p v-if="dirPri && q3Submit"><span v-html="$t('a3-'+dirPri)" /></p>
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
<i18n>{
    "en":
    {
        "pwpInstructions": "Your director shares with you this coming year&rsquo;s priorities for your directorate: “Protect aquatic ecosystems, sustain fisheries and manage the issuing of licenses.”",
        "pwpTitle": "Select the best answer.",
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
        "q1":
        {
            "1": "To make Canada a leader of international efforts to combat climate change and reduce greenhouse emissions.",
            "2": "To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations",
            "3": "To implement and further develop the Oceans Protection Plan and restore annual federal funding for freshwater research."
        },
        "q1a":
        {
            "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority for the government, our scope is more about fisheries, not climate change.",
            "2": "<span class='v-right' /> <strong>Correct!</strong> Our priority is to protect the fisheries so they are still around in 40 years for our grandchildren!",
            "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority for the government, your unit&rsquo;s scope is more about fisheries, not protecting the oceans."
        },
        "q2-1": "To contribute to an environmentally, economically and socially sustainable Canadian aquaculture sector by developing new federal legislation",
        "q2-2": "To ensure access to safe harbours, respond to on-water incidents and minimize or avoid negative impacts of environmental disasters on Canada&rsquo;s oceans",
        "q2-3": "To support prosperous and sustainable commercial, Indigenous and recreational fisheries, aquaculture and other oceans industries",
        "a2-1": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority, our scope is more about fisheries.",
        "a2-2": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority, our scope is more about fisheries.",
        "a2-3": "<span class='v-right' /> <strong>Correct!</strong> Our scope is about fisheries",
        "q3-1": "To manage the commercial domestic fisheries",
        "q3-2": "To protect endangered species in the great lakes",
        "q3-3": "To eliminate the encroachment of invasive species",
        "a3-1": "<span class='v-right' /> <strong>Correct!</strong>",
        "a3-2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  While this is a great priority, our scope is more about fisheries.",
        "a3-3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  While this is a great priority, our scope is more about fisheries."
    },
    "fr":
    {
        "pwpInstructions": "Votre directeur partage avec vous les priorités de la prochaine année pour votre direction : « Protéger les écosystèmes aquatiques, soutenir les pêches et gérer la délivrance des permis. »",
        "pwpTitle": "Sélectionnez la meilleure réponse. ",
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
        "q1":
        {
            "1": "Faire du Canada un chef de file international de lutte contre les changements climatiques et réduire les émissions de gaz à effet de serre.",
            "2": "Servir les Canadiens en assurant l&rsquo;utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
            "3": "Mettre en œuvre et développer davantage le Plan de protection des océans et rétablir le financement fédéral annuel pour la recherche sur l&rsquo;eau douce."
        },
        "q1a":
        {
            "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu&rsquo;il s&rsquo;agisse d&rsquo;une priorité importante pour le gouvernement, notre responsabilité porte davantage sur la pêche que sur les changements climatiques.",
            "2": "<span class='v-right' /> <strong>Correct!</strong> Notre priorité est de protéger la pêche pour qu&rsquo;elle existe encore dans 40 ans pour nos petits-enfants!",
            "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu&rsquo;il s&rsquo;agisse d&rsquo;une priorité importante pour le gouvernement, votre unité s&rsquo;occupe davantage de la pêche que de la protection des océans."
        },
        "q2-1": "Contribuer à la durabilité environnementale, économique et sociale du secteur de l&rsquo;aquaculture canadien en élaborant de nouvelles lois fédérales.",
        "q2-2": "Garantir l&rsquo;accès à des ports sûrs, intervenir en cas d&rsquo;incident sur l&rsquo;eau et minimiser ou éviter les impacts négatifs sur les océans du Canada suite à des catastrophes environnementales.",
        "q2-3": "Soutenir une pêche commerciale, autochtone et récréative qui soit productive et durable, l&rsquo;aquaculture, et d&rsquo;autres industries maritimes.",
        "a2-1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu&rsquo;il s&rsquo;agisse d&rsquo;une priorité importante, notre responsabilité porte davantage sur les pêches.",
        "a2-2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu&rsquo;il s&rsquo;agisse d&rsquo;une priorité importante, notre responsabilité porte davantage sur les pêches.",
        "a2-3": "<span class='v-right' /> <strong>Correct!</strong> La portée de notre travail concerne les pêches.",
        "q3-1": "Gérer les pêches commerciales.",
        "q3-2": "Protéger les espèces en voie de disparition dans les Grands Lacs.",
        "q3-3": "Éliminer la prolifération des espèces envahissantes.",
        "a3-1": "<span class='v-right' /> <strong>Correct!</strong>",
        "a3-2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu&rsquo;il s&rsquo;agisse d&rsquo;une priorité importante, notre responsabilité porte davantage sur les pêches.",
        "a3-3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu&rsquo;il s&rsquo;agisse d&rsquo;une priorité importante, notre responsabilité porte davantage sur les pêches."
    }
}</i18n>
<script>
  export default {
  data() {
    return {
      govtPri: '',
      deptPri: '',
      dirPri: '',
      q1Submit:false,q2Submit:false,q3Submit:false
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
  font-weight: bolder;
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
  max-width: 90%;
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
