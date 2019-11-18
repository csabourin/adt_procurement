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
    <div class="scrollMe" id="scrollableElement">
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
             <transition name="bounce"><li v-if="Q1==2" v-html="'<strong>'+$t('pM1_1')+'</strong>'" /></transition>
            </ul>
          </td>
          <td class='planRes'>
            <ul>
              <li>{{ $t('pR1_1')}}</li>
              <transition name="bounce"><li v-if="Q3==1"><strong>{{ $t('pR1_2')}}</strong></li></transition>
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
              <transition name="bounce">    <li v-if="Q2==2" v-html="'<strong>'+$t('pD2_2')+'</strong>'"></li></transition>
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
    <b-tab ref="cWTabA" @click="fScrollEl(this)" title="Question 1">
      <radioQuiz :Question="$t('q1')" qId="1" @response="Q1=$event"/>
    </b-tab>
    <b-tab ref="cWTabB" @click="fScrollEl(this)" title="Question 2">
      <radioQuiz :Question="$t('q2')" qId="2" @response="Q2=$event"/>
    </b-tab>
    <b-tab ref="cWTabC" @click="fScrollEl(this)" title="Question 3">
      <radioQuiz :Question="$t('q3')" qId="3" @response="Q3=$event"/>
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
          "pRes3": "<li>1 officer</li><li>1 junior analyst<</li>",
          "q1":
          {
              "text": "Currently, “Implement flexible work hours” is a <strong>mitigation</strong> strategy for the following risks: overfishing, habitat degradation, environmental disaster, climate change. Where should it appear in the work plan?",
              "options":
              {
                  "1": "Keep it as a mitigation strategy for “Overfishing”",
                  "2": "It should be a mitigation strategy for “Staff turnover”.",
                  "3": "Remove “Implement flexible work hours” completely."
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Actually, flexible work hours relates better to the “Management and administration of the directorate”.",
                  "2": "<span class='v-right' /> <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Actually, “Implement flexible work hours” is a valid strategy to attract and retain employees."
              }
          },
          "q2":
          {
              "text": "The following <strong>deliverable</strong> is missing from your work plan: “Issue 500 licenses per year”. With which activity should you place it?",
              "options":
              {
                  "1": "Manage and administer the directorate",
                  "2": "Issue commercial fishing licenses",
                  "3": "Renew commercial fishing licenses"
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> This deliverable relates to issuing commercial fishing licenses.",
                  "2": "<span class='v-right' /> <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> This deliverable relates to issuing commercial fishing licenses."
              }
          },
          "q3":
          {
              "text": "Looking under the <strong>resources</strong> column, you notice that the manager position is missing. Under which activity should you place it?",
              "options":
              {
                  "1": "Manage and administer the directorate",
                  "2": "Issue commercial fishing licenses",
                  "3": "Renew commercial fishing licenses"
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> A manager position would be reflected under “Manage and administer the directorate”.",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  A manager position would be reflected under “Manage and administer the directorate”."
              }
          }
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
          "pRes3": "<li>1 agent</strong></li><li>1 analyste subalterne</li>",
          "q1":
          {
              "text": "Actuellement, &laquo;&nbsp;Mettre en &oelig;uvre des horaires de travail flexibles&nbsp;&raquo; est une strat&eacute;gie d'att&eacute;nuation de la surp&ecirc;che. O&ugrave; devrait-il appara&icirc;tre dans le plan de travail?",
              "options":
              {
                  "1": "Garde-le comme strat&eacute;gie d&rsquo;att&eacute;nuation pour la &laquo; Surp&ecirc;che &raquo;.",
                  "2": "Il devrait faire partie de la strat&eacute;gie d'att&eacute;nuation &laquo; Roulement du personnel &raquo;.",
                  "3": "Enlever &laquo; Mettre en &oelig;uvre des horaires de travail flexibles &raquo; compl&egrave;tement."
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> En fait, les heures de travail flexibles se rapportent mieux &agrave; la &laquo; Gestion et &agrave; l'administration de la direction &raquo;.",
                  "2": "<span class='v-right' />  <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  En fait, &laquo; Mettre en place des horaires de travail flexibles &raquo; est une strat&eacute;gie valable pour attirer et retenir les employ&eacute;s."
              }
          },
          "q2":
          {
              "text": "Le <strong>livrable</strong> suivant ne figure pas dans votre plan de travail : &laquo; D&eacute;livrer 500 licences par an &raquo;. Avec quelle activit&eacute; devriez-vous le placer?",
              "options":
              {
                  "1": "G&eacute;rer et administrer la direction",
                  "2": "D&eacute;livrer des permis de p&ecirc;che commerciale",
                  "3": "Renouveler les permis de p&ecirc;che commerciale"
              },
              "feedback":
              {
                  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce livrable concerne la d&eacute;livrance de permis de p&ecirc;che commerciale.",
                  "2": "<span class='v-right' />  <strong>Correct!</strong>",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Ce livrable concerne la d&eacute;livrance de permis de p&ecirc;che commerciale."
              }
          },
          "q3":
          {
              "text": "En regardant sous la colonne <strong>ressources</strong>, vous remarquez que le poste de gestionnaire est manquant. Sous quelle activit&eacute; devez-vous le placer?",
              "options":
              {
                  "1": "G&eacute;rer et administrer la direction",
                  "2": "D&eacute;livrer des permis de p&ecirc;che commerciale",
                  "3": "Renouveler les permis de p&ecirc;che commerciale"
              },
              "feedback":
              {
                  "1": "<span class='v-right' /> <strong>Correct!</strong>",
                  "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un poste de gestionnaire serait refl&eacute;t&eacute; sous la rubrique &laquo; G&eacute;rer et administrer la direction &raquo;.",
                  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  Un poste de gestionnaire serait refl&eacute;t&eacute; sous la rubrique &laquo; G&eacute;rer et administrer la direction &raquo;."

              }
          }
      }
  }
</i18n>
<script>
  import radioQuiz from "~/components/radioQuiz"
  export default {
    components:{
      radioQuiz
    },
  data() {
   return {
     govtPri: '',
     deptPri: '',
     dirPri: '',
     Q1:'',
     Q2:'',
     Q3:''
   }
  },
  methods: {
    fScrollEl(elementID,targetID,offset){
      console.log('fScrollEl('+elementID+','+targetID+','+offset+')');
      // console.log($('div#__BVID__64.tab-pane'));
      // console.dir(evInfo);
      
      console.dir(this.$refs);

      // console.log(document.querySelectorAll);

      //elementID[STRING] (ex: #scrollableElement)
      //targetID[STRING] (ex: #deliverable)
      //offset[NUM] (ex: 500)

      // Solution #1
      /*
      1. Get targetID position in table (px)
      2. ScrollLeft by result
      */

      //Solution #2
      /*
      1. Get targetID previous sibblings widths
      2. ScrollLeft by result
      */

      //Solution #3
      /*
      1. Grab tabs -> this.$refs
      2. Loop through tabs and find .active
      3. 
      */

      //document.getElementById(elementID).scrollLeft(offset);
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
  padding-left: 32px;
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