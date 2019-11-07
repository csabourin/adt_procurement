<template>
  <span>
    <p>{{ $t('pwpInstructions') }}</p>
    <ul style="list-style: none">
    <li><input type="checkbox" name="things" disabled id="things1" v-model="Q1"> <label for="things1">{{$t('thing1')}}</label></li>
    <li><input type="checkbox" name="things" disabled id="things2" v-model="Q2"> <label for="things2">{{$t('thing2')}}</label></li>
    <li><input type="checkbox" name="things" disabled id="things3" v-model="Q4"> <label for="things3">{{$t('thing3')}}</label></li>
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
    <div class="scrollMe">
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
          <td class='planAct' v-html="$t('pA1')"></td>
          <td class='planSubAct' v-html="$t('psA1')"></td>
          <td class='planDelivs' v-html="$t('pD1')"></td>
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
              <li v-html="$t('pD2_1')"></li>
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
    <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold">
    <b-tab title="Question 1">
      <p v-html="$t('q1Text')"></p>
      <ol type="a">
        <li><input type="radio" name="q1" id="quest1-1" v-model="Q1" value="1"> <label for="quest1-1" v-html="$t('q1a')"></label></li>
        <li><input type="radio" name="q1" id="quest1-2" v-model="Q1" value="2"> <label for="quest1-2" v-html="$t('q1b')"></label></li>
        <li><input type="radio" name="q1" id="quest1-3" v-model="Q1" value="3"> <label for="quest1-3" v-html="$t('q1c')"></label></li>
        <li><input type="radio" name="q1" id="quest1-4" v-model="Q1" value="4"> <label for="quest1-4" v-html="$t('q1d')"></label></li>
        <li><input type="radio" name="q1" id="quest1-5" v-model="Q1" value="5"> <label for="quest1-5" v-html="$t('q1e')"></label></li>
      </ol>
      <p v-if="Q1==1" v-html="$t('q1aF')"></p>
      <p v-if="Q1==2" v-html="$t('q1bF')"></p>
      <p v-if="Q1==3" v-html="$t('q1cF')"></p>
      <p v-if="Q1==4" v-html="$t('q1dF')"></p>
      <p v-if="Q1==5" v-html="$t('q1eF')"></p>
    </b-tab>
    <b-tab title="Question 2">
      <p v-html="$t('q2Text')"></p>
      <ol type="a">
        <li><input type="radio" name="q2" id="quest2-1" v-model="Q2" value="1"> <label for="quest2-1" v-html="$t('q2a')"></label></li>
        <li><input type="radio" name="q2" id="quest2-2" v-model="Q2" value="2"> <label for="quest2-2" v-html="$t('q2b')"></label></li>
        <li><input type="radio" name="q2" id="quest2-3" v-model="Q2" value="3"> <label for="quest2-3" v-html="$t('q2c')"></label></li>
        <li><input type="radio" name="q2" id="quest2-4" v-model="Q2" value="4"> <label for="quest2-4" v-html="$t('q2d')"></label></li>
      </ol>
      <p v-if="Q2==1" v-html="$t('q2aF')"></p>
      <p v-if="Q2==2" v-html="$t('q2bF')"></p>
      <p v-if="Q2==3" v-html="$t('q2cF')"></p>
      <p v-if="Q2==4" v-html="$t('q2dF')"></p>
    </b-tab>
    <b-tab title="Question 3">
      <p  v-html="$t('q3Text')"></p>
      <ol type="a">
        <li><input type="radio" name="q3" id="quest3-1" v-model="Q3" value="1"> <label for="quest3-1" v-html="$t('q3a')"></label></li>
        <li><input type="radio" name="q3" id="quest3-2" v-model="Q3" value="2"> <label for="quest3-2" v-html="$t('q3b')"></label></li>
        <li><input type="radio" name="q3" id="quest3-3" v-model="Q3" value="3"> <label for="quest3-3" v-html="$t('q3c')"></label></li>
        <li><input type="radio" name="q3" id="quest3-4" v-model="Q3" value="4"> <label for="quest3-4" v-html="$t('q3d')"></label></li>
      </ol>
      <p v-if="Q3==1" v-html="$t('q3aF')"></p>
      <p v-if="Q3==2" v-html="$t('q3bF')"></p>
      <p v-if="Q3==3" v-html="$t('q3cF')"></p>
      <p v-if="Q3==4" v-html="$t('q3dF')"></p>
    </b-tab>
    <b-tab title="Question 4">    
      <p  v-html="$t('q4Text')"></p>
      <ol type="a">
        <li><input type="radio" name="q4" id="quest4-1" v-model="Q4" value="1"> <label for="quest4-1" v-html="$t('q4a')"></label></li>
        <li><input type="radio" name="q4" id="quest4-2" v-model="Q4" value="2"> <label for="quest4-2" v-html="$t('q4b')"></label></li>
        <li><input type="radio" name="q4" id="quest4-3" v-model="Q4" value="3"> <label for="quest4-3" v-html="$t('q4c')"></label></li>
        <li><input type="radio" name="q4" id="quest4-4" v-model="Q4" value="4"> <label for="quest4-4" v-html="$t('q4d')"></label></li>
        <li><input type="radio" name="q4" id="quest4-5" v-model="Q4" value="5"> <label for="quest4-5" v-html="$t('q4e')"></label></li>
      </ol>
      <p v-if="Q4==1" v-html="$t('q4aF')"></p>
      <p v-if="Q4==2" v-html="$t('q4bF')"></p>
      <p v-if="Q4==3" v-html="$t('q4cF')"></p>
      <p v-if="Q4==4" v-html="$t('q4dF')"></p>
      <p v-if="Q4==5" v-html="$t('q4eF')"></p>
    </b-tab>
  </b-tabs>
  </span>
</template>
<i18n>
  {
    "en":
    {
        "pwpInstructions": "Your director tells you that they have been to a steering committee and that they now have new information that should be reflected in your work plan. Three things:",
        "thing1":"new software implementation to speed up the issuing of licenses;",
        "thing2":"new policy that now requires licenses to be issued in 15 days, not 30 days, starting November 1;",
        "thing3":"a decision to not replace a retiring employee.",
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
        "q1Text": "Should you add the “Implementation of the new software” to your work plan?",
        "q1a": "Yes, in the “Deliverables” column, next to the “Manage and administer directorate” activity",
        "q1b": "No, this is not needed in the work plan",
        "q1c": "Yes, in the “Mitigation” column, next to the “Issue commercial fishing licenses” activity",
        "q1d": "Yes, in the “Sub-activities”, next to the “Renew commercial fishing licenses” activity",
        "q1e": "I don’t know",
        "q1aF": "You have chosen: &ldquo;Yes, in the &ldquo;Deliverables&rdquo; column, next to the &ldquo;Manage and administer directorate&rdquo; activity&rdquo;. <strong>This is the best answer!</strong>",
        "q1bF": "You have chosen: &ldquo;No, this is not needed in the work plan&rdquo;. &ldquo;Implementation of the new software&rdquo; is a deliverable.",
        "q1cF": "You have chosen: &ldquo;Yes, in the &ldquo;Mitigation&rdquo; column, next to the &ldquo;Issue commercial fishing licenses&rdquo; activity&rdquo;. While &ldquo;Implementation of the new software&rdquo; could be a &ldquo;Mitigation&rdquo; strategy in certain cases, in this work plan, it is a &ldquo;Deliverable&rdquo;.",
        "q1dF": "You have chosen: &ldquo;Yes, in the &ldquo;Sub-activities&rdquo;, next to the &ldquo;Renew commercial fishing licenses&rdquo; activity&rdquo;. While &ldquo;Implementation of the new software&rdquo; could be a &ldquo;Sub-activity&rdquo; in certain cases, in this work plan, it is a &ldquo;Deliverable&rdquo;.",
        "q1eF": "You have chosen: &ldquo;I don&rsquo;t know&rdquo;. &ldquo;Implementation of the new software&rdquo; is a &ldquo;Deliverable&rdquo;.",
        "q2Text": "What would you do with the following statement &ldquo;Issue license renewal within 30 days of request&rdquo; in your work plan?",
        "q2a": "Nothing, leave it as is",
        "q2b": "Remove it - it is no longer true",
        "q2c": "Change it to &ldquo;Issue license renewal within 15 days of request&rdquo;",
        "q2d": "I don&rsquo;t know",
        "q2aF": "You have chosen: &ldquo;Nothing, leave it as is&rdquo;. With the implementation of the new policy, change it to &ldquo;Issue license renewal within 15 days of request&rdquo;.",
        "q2bF": "You have chosen: &ldquo;Remove it - it is no longer true&rdquo;. With the implementation of the new policy, change it to &ldquo;Issue license renewal within 15 days of request&rdquo;.",
        "q2cF": "You have chosen: &ldquo;Change it to &lsquo;Issue license renewal within 15 days of request&rsquo;&rdquo;. <strong>This is the best answer!</strong>",
        "q2dF": "You have chosen: &ldquo;I don&rsquo;t know&rdquo;. With the implementation of the new policy, change it to &ldquo;Issue license renewal within 15 days of request&rdquo;.",
        "q3Text": "Do you need to adjust your Resources?",
        "q3a": "Yes. I need to add more staff.",
        "q3b": "No. I can leave it as is.",
        "q3c": "Yes. I need to adjust my full time employees.",
        "q3d": "I don&rsquo;t know.",
        "q3aF": "You have chosen: &ldquo;Yes. I need to add more staff.&rdquo; You have not received any additional full time employees so you cannot add more staff.",
        "q3bF": "You have chosen: &ldquo;No. I can leave it as is.&rdquo; You have an employee that is retiring, so you will need to remove a full time employee from your work plan.",
        "q3cF": "You have chosen: &ldquo;Yes. I need to remove one employee.&rdquo; <strong>That is the best answer.</strong>",
        "q3dF": "You have chosen: &ldquo;I don&rsquo;t know.&rdquo; You have an employee that is retiring, so you will need to adjust a full time employee from your work plan.",
        "q4Text": "Do you need to indicate the need for training for the officers?&nbsp;",
        "q4a": "Yes, with the activity &ldquo;Manage and administer directorate&rdquo; under &ldquo;Deliverables&rdquo;",
        "q4b": "No, this is not needed in the work plan",
        "q4c": "Yes, with the activity &ldquo;Issue commercial fishing licenses&rdquo; under &ldquo;Mitigation&rdquo;",
        "q4d": "Yes, with the activity &ldquo;Renew commercial fishing licenses&rdquo; under &ldquo;Sub-activities&rdquo;",
        "q4e": "I don&rsquo;t know.",
        "q4aF": "You have chosen: &ldquo;Yes, with the activity &lsquo;Manage and administer directorate&rsquo; under &lsquo;Deliverables&rsquo;&rdquo;. <strong>This is correct.</strong>",
        "q4bF": "You have chosen: &ldquo;No, this is not needed in the work plan&rdquo;. It should be included with the activity &ldquo;Manage and administer directorate&rdquo; under &ldquo;Deliverables&rdquo;.",
        "q4cF": "You have chosen: &ldquo;Yes, with the activity &lsquo;Issue commercial fishing licenses&rsquo; under &lsquo;Mitigation&rsquo;&rdquo;. It should be included with the activity &ldquo;Manage and administer directorate&rdquo; under &ldquo;Deliverables&rdquo;.",
        "q4dF": "You have chosen: &ldquo;Yes, with the activity &lsquo;Renew commercial fishing licenses&rsquo; under &lsquo;Sub-activities&rsquo;&rdquo;. It should be included with the activity &ldquo;Manage and administer directorate&rdquo; under &ldquo;Deliverables&rdquo;.",
        "q4eF": "You have chosen: &ldquo;I don&rsquo;t know&rdquo;. It should be included with the activity &ldquo;Manage and administer directorate&rdquo; under &ldquo;Deliverables&rdquo;."
    },
    "fr":
    {
        "pwpInstructions": "Votre directeur vous dit qu'il a siégé à un comité directeur et qu'il dispose maintenant de nouveaux renseignements qui devraient se refléter dans votre plan de travail. Trois choses :",
        "thing1":" la mise en œuvre d'un nouveau logiciel pour accélérer l'émission de licences;",
        "thing2":" une nouvelle politique qui exige maintenant que les licences soient émises en 15 jours, et non plus en 30 jours, à compter du 1er novembre;",
        "thing3":" une décision de ne pas remplacer un employé qui prend sa retraite.",
        "pwpTitle": "Ajustez votre plan de travail en choisissant la meilleure réponse aux questions suivantes. Vous pouvez consulter le plan de travail en défilant horizontalement",
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
        "q1Text": "Devriez-vous ajouter la «&nbsp;Mise en œuvre du nouveau logiciel&nbsp;» à votre plan de travail?",
        "q1a": "Oui, dans la colonne «&nbsp;Livrables&nbsp;», à côté de l'activité «&nbsp;Gérer et administrer la direction&nbsp;». ",
        "q1b": "Non, ce n'est pas nécessaire dans le plan de travail.",
        "q1c": "Oui, dans la colonne «&nbsp;Atténuation&nbsp;», à côté de l'activité «&nbsp;Délivrance de permis de pêche commerciale&nbsp;» ",
        "q1d": "Oui, dans les «&nbsp;Sous-activités&nbsp;», à côté de l'activité «&nbsp;Renouvellement de permis de pêche commerciale&nbsp;». ",
        "q1e": "Je ne sais pas.",
        "q1aF": "Vous avez choisi : «&nbsp;Oui, dans la colonne «&nbsp;Livrables&nbsp;», à côté de l'activité «&nbsp;Gérer et administrer la direction&nbsp;». <strong>C'est la meilleure réponse!</strong>",
        "q1bF": "Vous avez choisi : «&nbsp;Non, ce n'est pas nécessaire dans le plan de travail&nbsp;». La «&nbsp;Mise en œuvre du nouveau logiciel&nbsp;» est un livrable.",
        "q1cF": "Vous avez choisi : «&nbsp;Oui, dans la colonne «&nbsp;Atténuation&nbsp;», à côté de l'activité «&nbsp;Délivrance de permis de pêche commerciale&nbsp;». Bien que la    «&nbsp;Mise en œuvre du nouveau logiciel&nbsp;» puisse être une stratégie d'atténuation dans certains cas, dans le présent plan de travail, il s'agit d'un «&nbsp;Livrable&nbsp;».",
        "q1dF": "Vous avez choisi : «&nbsp;Oui, dans les «Sous-activités&nbsp;», à côté de l'activité    «&nbsp;Renouveler les permis de pêche commerciale&nbsp;». Alors que la «&nbsp;Mise en œuvre du nouveau logiciel&nbsp;» pourrait être une «&nbsp;Sous-activité&nbsp;» dans certains cas, dans ce plan de travail, il s'agit d'un «&nbsp;Livrable&nbsp;».",
        "q1eF": "Vous avez choisi : «&nbsp;Je ne sais pas&nbsp;». La «&nbsp;mise en œuvre du nouveau logiciel&nbsp;» est un «&nbsp;Livrable&nbsp;».",
        "q2Text": "Que feriez-vous de l'énoncé suivant dans votre plan de travail : «&nbsp;Renouveler le permis dans les 30 jours suivant la demande&nbsp;»?",
        "q2a": "Rien, laissez-le tel quel.",
        "q2b": "Enlevez-le - ce n'est plus vrai.",
        "q2c": "Changez-le à «&nbsp;Renouveler la licence dans les 15 jours suivant la demande&nbsp;».",
        "q2d": "Je ne sais pas.",
        "q2aF": "Vous avez choisi : «&nbsp;Rien, laissez-le tel quel&nbsp;». Avec l'entrée en vigueur de la nouvelle politique, changez-la en «&nbsp;Renouveler la licence dans les 15 jours suivant la demande&nbsp;».",
        "q2bF": "Vous avez choisi : «&nbsp;Enlevez-le, ce n'est plus vrai&nbsp;» Avec l'entrée en vigueur de la nouvelle politique, changez-la en «&nbsp;Renouveler la licence dans les 15 jours suivant la demande&nbsp;».",
        "q2cF": "Vous avez choisi : Changez-le à «&nbsp;Renouveler la licence dans les 15 jours suivant la demande&nbsp;». <strong>C'est la meilleure réponse !</strong>",
        "q2dF": "Vous avez choisi : «&nbsp;Je ne sais pas&nbsp;». Avec l'entrée en vigueur de la nouvelle politique, changez-la en «&nbsp;Renouveler la licence dans les 15 jours suivant la demande&nbsp;».",
        "q3Text": "Avez-vous besoin d'ajuster vos Ressources ?",
        "q3a": "Oui. J'ai besoin de plus de personnel.",
        "q3b": "Non. Je peux le laisser tel quel.",
        "q3c": "Oui. J'ai besoin d'ajuster mes employés à plein temps.",
        "q3d": "Je ne sais pas.",
        "q3aF": "Vous avez choisi : «&nbsp;Oui. Je dois ajouter du personnel.&nbsp;» Vous n'avez pas reçu d'employés à temps plein supplémentaires, vous ne pouvez donc pas ajouter d'employés supplémentaires.",
        "q3bF": "Vous avez choisi : «&nbsp;Non. Je peux le laisser tel quel.&nbsp;» Vous avez un employé qui prend sa retraite, vous devrez donc ajuster un employé à temps plein de votre plan de travail.",
        "q3cF": "Vous avez choisi : «&nbsp;Oui. J'ai besoin d'ajuster mes employés à plein temps.&nbsp;» <strong>C'est la meilleure réponse!</strong>",
        "q3dF": "Vous avez choisi : «&nbsp;Je ne sais pas.&nbsp;» Vous avez un employé qui prend sa retraite, vous devrez donc ajuster un employé à temps plein de votre plan de travail.",
        "q4Text": "Avez-vous besoin d'indiquer le besoin de formation pour les agents?",
        "q4a": "Oui, avec l'activité «&nbsp;Gérer et administrer la direction&nbsp;» sous«&nbsp;Livrables&nbsp;».",
        "q4b": "Non, ce n'est pas nécessaire dans le plan de travail.",
        "q4c": "Oui, avec l'activité «&nbsp;Délivrance de permis de pêche commerciale&nbsp;» sous «&nbsp;Atténuation&nbsp;».",
        "q4d": "Oui, avec l'activité «&nbsp;Renouvellement de permis de pêche commerciale&nbsp;» sous «&nbsp;Sous-activités&nbsp;».",
        "q4e": "Je ne sais pas.",
        "q4aF": "Vous avez choisi : Oui, avec l'activité «&nbsp;Gérer et administrer la direction&nbsp;» sous la rubrique «&nbsp;Livrables&nbsp;». <strong>Il s’agit de la bonne réponse</strong>",
        "q4bF": "Vous avez choisi : «&nbsp;Non, ce n'est pas nécessaire dans le plan de travail&nbsp;». Il devrait être inclus dans l'activité «&nbsp;Gérer et administrer la direction&nbsp;» sous la rubrique «&nbsp;Livrables&nbsp;».",
        "q4cF": "Vous avez choisi : «&nbsp;Oui, avec l'activité Délivrance de permis de pêche commerciale&nbsp;» sous «&nbsp;Atténuation&nbsp;». Il devrait être inclus dans l'activité «&nbsp;Gérer et administrer la direction&nbsp;» sous la rubrique «&nbsp;Livrables&nbsp;».",
        "q4dF": "Vous avez choisi : Oui, avec l'activité «&nbsp;Renouvellement des permis de pêche commerciale&nbsp;» sous «&nbsp;Sous-activités&nbsp;». Il devrait être inclus dans l'activité «&nbsp;Gérer et administrer la direction&nbsp;» sous la rubrique «&nbsp;Livrables&nbsp;».",
        "q4eF": "Vous avez choisi : «&nbsp;Je ne sais pas&nbsp;». Il devrait être inclus dans l'activité  «&nbsp;Gérer et administrer la direction&nbsp;» sous la rubrique «&nbsp;Livrables&nbsp;»."
    }
}
</i18n>
<script>
  export default {
  data() {
 return {
   thing1done: '',
   thing2done: '',
   thing3done: '',
   Q1:'',
   Q2:'',
   Q3:'',
   Q4:''
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