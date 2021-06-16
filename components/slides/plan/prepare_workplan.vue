<template>
  <span>
    <fieldset>
      <legend>
        <p>{{ $t('pwpInstructions') }}</p>
        <p><strong v-html="$t('pwpTitle')"></strong></p>
      </legend>
      <b-container class="workplan-table wp-table-1">
        <b-row>
          <b-col class="encadrage">
            <fieldset>
              <legend><h3 v-html="$t('pwpGovtPri')" id="pwpGovtPriLabel" style="margin-bottom: 10px;"></h3></legend>
              <!--<ol type="a">
                <li v-for="(answer, index) in $t('q1')" :id="index">{{answer}}</li>
              </ol>
              <p>
                <select v-model='govtPri' @change="q1Submit=false" aria-labelledby="pwpGovtPriLabel">
                  <option disabled value=''>{{$t('qDisabled')}}</option>
                  <option v-for="(answer, index) in $t('q1')" :value="index" :aria-labelledby="index" v-html="genCharArray('a', Object.keys($i18n.t('q1')).length)[index]"></option>
                </select> 
              </p>-->
              <p v-for="(answer, index) in $t('q1')" :key="index">
                <input type="radio" v-model="govtPri" name="govtPri" :id="'q1_' + index" :value="index" @click="q1Submit=false">
                <label :for="'q1_' + index" v-html="answer" aria-hidden="false" />
              </p> 
            </fieldset>
            <p style="display: block; margin-top: 10px; margin-bottom: 10px;"><b-button @click="q1Submit=true" :disabled="!govtPri || q1Submit">{{$t('submit')}}</b-button></p>
            <div aria-live="polite">
            <p v-if="govtPri && q1Submit"> <span v-html="$t('q1a.'+govtPri)" /></p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="encadrage">
            <fieldset>
              <legend><h3 v-html="$t('pwpDeptPri')" id="pwpDeptPriLabel" style="margin-bottom: 10px;"></h3></legend>
              <!--<ol type="a">
                <li v-for="(answer, index) in $t('q2')" :id="index">{{answer}}</li>
              </ol>
              <p>
                <select v-model='deptPri' @change="q2Submit=false" aria-labelledby="pwpDeptPriLabel">
                  <option disabled value=''>{{$t('qDisabled')}}</option>
                  <option v-for="(answer, index) in $t('q2')" :value="index" :aria-labelledby="index" v-html="genCharArray('a', Object.keys($i18n.t('q2')).length)[index]"></option>
                </select> 
              </p>-->
              <p v-for="(answer, index) in $t('q2')" :key="index">
                <input type="radio" v-model="deptPri" name="deptPri" :id="'q2_' + index" :value="index" @click="q2Submit=false">
                <label :for="'q2_' + index" v-html="answer" aria-hidden="false" />
              </p>
            </fieldset>
            <p style="display: block; margin-top: 10px; margin-bottom: 10px;"><b-button @click="q2Submit=true" :disabled="!deptPri || q2Submit">{{$t('submit')}}</b-button></p>
            <div aria-live="polite">
            <p v-if="deptPri && q2Submit"> <span v-html="$t('q2a.'+deptPri)" /></p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="encadrage">
            <fieldset>
              <legend><h3 v-html="$t('pwpDirPri')" id="pwpDirPriLabel" style="margin-bottom: 10px;"></h3></legend>
              <!--<ol type="a">
                <li v-for="(answer, index) in $t('q3')" :id="index">{{answer}}</li>
              </ol>
              <p>
                 <select v-model='dirPri' @change="q3Submit=false" aria-labelledby="pwpDirPriLabel">
                  <option disabled value=''>{{$t('qDisabled')}}</option>
                  <option v-for="(answer, index) in $t('q3')" :value="index" :aria-labelledby="index" v-html="genCharArray('a', Object.keys($i18n.t('q3')).length)[index]"></option>
                </select> 
              </p>-->
              <p v-for="(answer, index) in $t('q3')" :key="index">
                <input type="radio" v-model="dirPri" name="dirPri" :id="'q3_' + index" :value="index" @click="q3Submit=false">
                <label :for="'q3_' + index" v-html="answer" aria-hidden="false" />
              </p>
            </fieldset>
            <p style="display: block; margin-top: 10px; margin-bottom: 10px;"><b-button @click="q3Submit=true" :disabled="!dirPri || q3Submit">{{$t('submit')}}</b-button></p>
            <div aria-live="polite"> <!-- added a aria live polite to all the answers to make sure the screen-reader reads them first when they pop-up -->
            <p v-if="dirPri && q3Submit"><span v-html="$t('q3a.'+dirPri)" /></p>
            </div>
          </b-col>
        </b-row>
        <!--<b-row>
          <b-col class="encadrage">
            <h3 v-html="$t('titleActivities')"></h3>
          </b-col>
        </b-row>-->     
        <b-row>
          <b-col cols="6" md="4" lg="2" class="text-center" style="margin-top: 30px;">
            <download :texts="$t('buildWPProcessMap')" size=128 iconColor="planBackground" :fileSize="this.$i18n.locale == 'en' ? '121' : '114'" name="buildWPProcessMap" />
          </b-col>
        </b-row>
      </b-container>
    </fieldset>
    <!--table class='tableColoured'>
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
      </table-->
    </div>
  </span>
</template>
<i18n>{
    "en":
    {
      "pwpInstructions": "Your director shares this coming year’s priorities for your directorate: “Protect aquatic ecosystems, sustain fisheries, and manage the issuing of licences.”",
      "pwpTitle": "Please select one",
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
      "qDisabled": "Please select one.",
      "q1": {
          "1": "To make Canada a leader of international efforts to combat climate change and reduce greenhouse emissions.",
          "2": "To serve Canadians by securing the prosperous and sustainable use of aquatic ecosystems for future generations.",
          "3": "To implement and further develop the Oceans Protection Plan and restore annual federal funding for freshwater research."
      },
      "q1a": {
          "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority for the government, our scope is more about fisheries, not climate change.",
          "2": "<span class='v-right' /> <strong>Correct!</strong> Our priority is to protect the fisheries so that they are still around in 40 years for the next generation!",
          "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority for the government, your unit’s scope is more about fisheries, not protecting the oceans."
      },
      "q2":{
        "1": "To contribute to an environmentally, economically and socially sustainable Canadian aquaculture sector by developing new federal legislation.",
        "2": "To ensure access to safe harbours, respond to on-water incidents and minimize or avoid negative impacts of environmental disasters on Canada’s oceans.",
        "3": "To support prosperous and sustainable commercial, Indigenous and recreational fisheries, aquaculture and other ocean industries."
      },
      "q2a": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority, our scope is more about fisheries.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> While this is a great priority, our scope is more about fisheries.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> Our scope is about fisheries"
      },
      "q3": {
        "1": "To manage the commercial domestic fisheries.",
        "2": "To protect endangered species in the Great Lakes.",
        "3": "To eliminate the encroachment of invasive species."
      },
      "q3a": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  While this is a great priority, our scope is more about fisheries.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  While this is a great priority, our scope is more about fisheries." 
      }  
    },
    "fr":
    {
      "pwpInstructions": "Votre directeur partage avec vous les priorités de la prochaine année pour votre direction : « Protéger les écosystèmes aquatiques, soutenir les pêches et gérer la délivrance des permis. »",
      "pwpTitle": "Choisissez la meilleure réponse. ",
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
      "q1": {
          "1": "Faire du Canada un chef de file international de lutte contre les changements climatiques et réduire les émissions de gaz à effet de serre.",
          "2": "Servir les Canadiens en assurant l’utilisation prospère et durable des écosystèmes aquatiques pour les générations futures.",
          "3": "Mettre en œuvre et développer davantage le Plan de protection des océans et rétablir le financement fédéral annuel pour la recherche sur l’eau douce."
      },
      "q1a": {
          "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu’il s’agisse d’une priorité importante pour le gouvernement, notre responsabilité porte davantage sur la pêche que sur les changements climatiques.",
          "2": "<span class='v-right' /> <strong>Correct!</strong> Notre priorité est de protéger la pêche pour qu'elle existe encore dans 40 ans pour la prochaine génération.",
          "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu’il s’agisse d’une priorité importante pour le gouvernement, votre unité s’occupe davantage de la pêche que de la protection des océans."
      },
      "q2":{
        "1": "Contribuer à la durabilité environnementale, économique et sociale du secteur de l’aquaculture canadien en élaborant de nouvelles lois fédérales.",
        "2": "Garantir l’accès à des ports sûrs, intervenir en cas d’incident sur l’eau et minimiser ou éviter les impacts négatifs sur les océans du Canada suite à des catastrophes environnementales.",
        "3": "Soutenir une pêche commerciale, autochtone et récréative qui soit productive et durable, l’aquaculture, et d’autres industries océaniques."
      },
      "q2a": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu’il s’agisse d’une priorité importante, notre responsabilité porte davantage sur les pêches.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu’il s’agisse d’une priorité importante, notre responsabilité porte davantage sur les pêches.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> Notre responsabilité est de nous occuper des pêches."
      },
      "q3": {
        "1": "Gérer les pêches commerciales intérieures.",
        "2": "Protéger les espèces en voie de disparition dans les Grands Lacs.",
        "3": "Éliminer la prolifération des espèces envahissantes."
      },
      "q3a": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu’il s’agisse d’une priorité importante, notre responsabilité porte davantage sur les pêches.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Bien qu’il s’agisse d’une priorité importante, notre responsabilité porte davantage sur les pêches."
      }
    }
}</i18n>
<script>
  import download from "~/components/fileDownload"
  import HTMLJobaidLink from "~/components/HTMLJobaidLink"
  
  export default {
    components: {
      download,
      HTMLJobaidLink
    },
    data() {
      return {
        govtPri: '',
        deptPri: '',
        dirPri: '',
        q1Submit:false,q2Submit:false,q3Submit:false
      }
    },
    methods:{
      genCharArray(charA, num) {
        var a = [" "], i = charA.charCodeAt(0), j = charA.charCodeAt(0) + num;
        for (; i <= j; ++i) {
          a.push(String.fromCharCode(i))
        }
        return a
      }
    }
  }

</script>
<style type="text/css" scoped>
  
  .workplan-table .row:nth-child(1) h3:after, .workplan-table .row:nth-child(2) h3:after, .workplan-table .row:nth-child(3) h3:after {
    display: none;
  }
  
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

.tableColoured select{
  /*max-width: 90%;*/
}
  
.workplan-table select{
  width: auto!important;
}
  
.workplan-table p{
  display: block!important;
  margin: 0;
  min-height: unset!important;
}
  
/*.workplan-table label{
  display: inline;
  margin: 0;
}*/

.vertical{
  transform: rotate(90deg);
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
  border-bottom: 4px solid #fff;
  background-color: #e2ceca
}

.dirPri:before {
  background-color: #6F1E0D;
}

.planAct {
  border-bottom:hidden; 
  border-left:2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-bottom:hidden;   
  border-left:2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-bottom:hidden; 
  border-left:2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-bottom:hidden;
  border-left:2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-bottom:hidden;
  border-left:2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planImpact {
  border-bottom:hidden;
  border-left:2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}

.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-bottom:hidden;
  border-left:2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-bottom:hidden;
  border-right:hidden;
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
