<template>
	<span v-html="$t('wpTable')">
  </span>
</template>
<style type="text/css">
.tableColoured{
table-layout: fixed ;
width: 100% ;
counter-reset: wpParts
}
.tableColoured td:before {
counter-increment: wpParts;
content:counter(wpParts);
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
position:relative;
padding-left: 35px;
}
.deptPri:before{
background-color: #167777;
}
.deptPri{
border-top: 2px solid #167777;
background-color: #c7e0e0
}
.govtPri{
border-top: 2px solid #6C076C;
background-color: #e1c8e1}
.govtPri:before{
background-color: #6C076C;
}
.dirPri{
border-top: 2px solid #6F1E0D;
background-color: #e2ceca
}
.dirPri:before{
background-color: #6F1E0D;
}
.planAct{
border-top: 2px solid #718EA0;
background-color:#E2E8EC;
}
.planAct:before{
background-color: #718EA0;
}
.planSubAct{ border-top: 2px solid #7FC69A;
background-color: #dcefe3;}
.planSubAct:before{
background-color: #7FC69A;
}
.planDelivs{
border-top: 2px solid #7F8AC6;
background-color: #dfe2f1;
}
.planDelivs:before{
background-color: #7F8AC6;
}
.planRisk{ border-top: 2px solid #C3C67F;
background-color: #f0f1df;}
.planRisk:before{background-color: #C3C67F;}
.planLikely{ border-top: 2px solid #775F75;
background-color: #E1DCE1;}
.planLikely:before{background-color: #775F75;}
.planImpact{ border-top: 2px solid #607293;
background-color: hsl(219, 21%, 91%);}
.planImpact:before{background-color: #607293;}
.planMitigat{ border-top: 2px solid #c67fa3;
background-color: #f1dfe8;}
.planMitigat:before{background-color: #c67fa3;}
.planRes{ border-top: 2px solid #c6957f;
background-color: #f1e5df;}
.planRes:before{background-color: #c6957f;}
</style>
<i18n>
  {
  "en":{
  "wpTable":"<h1>Take a moment now to explore the different sections.</h1><table class='tableColoured'><tr><td colspan='8' class='govtPri'><strong>Government priorities</strong> –<br> In the Speech from the throne, a new government sets out its agenda. This includes its broad goals and commitments and how it will reach them.</td></tr>  <tr><td colspan='8' class='deptPri'><strong>Departmental priorities</strong> –<br> What your department sets out to do to support the government’s priorities.</td></tr>  <tr><td colspan='8'  class='dirPri'><strong>Directorate priorities</strong> –<br> What your directorate sets out to do to support the departmental priorities.</td></tr>  <tr>   <td class='planAct'><strong>Activities</strong> –<br> The work tasks to be accomplished to support your directorate’s priorities. This includes performance indicators and service standards for each work task.</td>   <td class='planSubAct'><strong>Sub-activities</strong> –<br> The work tasks broken down into smaller parts.</td>   <td class='planDelivs'><strong>Deliverables</strong> –<br> Specific and tangible items you should be able to check off your list when you accomplish them.</td>   <td class='planRisk'><strong>Risk</strong> –<br> Potential events that may affect the activity and its ability to meet and accomplish its objectives and expected results.</td>   <td class='planLikely'><strong>Likelihood</strong> –<br> An educated guess at whether or not the risk will happen.</td>   <td class='planImpact'><strong>Impact</strong> –<br> The potential loss associated with a risk.</td><td class='planMitigat'><strong>Mitigation</strong> – Actions to counteract the potential risks.</td><td class='planRes'><strong>Resources</strong> –<br> The budget, personnel, consultants, buildings and materials required to carry out the directorate activities.</td></tr></table>"
  },
  "fr":{
    "wpTable":"<h1>Prenez un moment pour explorer les différentes sections.</h1><table class='tableColoured'><tr><td colspan='8' class='govtPri'><strong>Priorités du gouvernement</strong> –<br> Dans le discours du Trône, un nouveau gouvernement présente son programme. Il s'agit notamment de ses objectifs généraux et de ses engagements et de la façon dont il les atteindra.</td></tr>  <tr><td colspan='8' class='deptPri'><strong>Priorités ministérielles</strong> –<br> Ce que votre ministère entend faire pour appuyer les priorités du gouvernement.</td></tr>  <tr><td colspan='8'  class='dirPri'><strong>Priorités de la Direction</strong> –<br> Ce que votre direction générale entend faire pour appuyer les priorités ministérielles.</td></tr>  <tr>   <td class='planAct'><strong>Activités </strong> –<br> Les tâches à accomplir pour appuyer les priorités de votre direction. Cela comprend des indicateurs de rendement et des normes de service pour chaque tâche de travail.</td>   <td class='planSubAct'><strong>Sous-activités</strong> –<br> Les tâches de travail divisées en parties plus petites.</td>   <td class='planDelivs'><strong>Produits livrables</strong> –<br>Les éléments spécifiques et tangibles que vous devriez être en mesure de cocher sur votre liste lorsque vous les accomplissez.</td>   <td class='planRisk'><strong>Risque </strong> –<br> Événements susceptibles d'influer sur l'activité et sur sa capacité d'atteindre et d'atteindre ses objectifs et les résultats escomptés.</td>   <td class='planLikely'><strong>Probabilité </strong> –<br> Une estimation éclairée pour savoir si le risque se concrétisera ou non.</td>   <td class='planImpact'><strong>Impact</strong> –<br> La perte potentielle associée à un risque.</td><td class='planMitigat'><strong>Atténuation </strong> – Mesures pour contrer les risques potentiels.</td><td class='planRes'><strong>Resources</strong> –<br> Le budget, le personnel, les consultants, les bâtiments et le matériel nécessaires à l'exécution des activités de la direction.</td></tr></table>"
  }
  }
</i18n>
