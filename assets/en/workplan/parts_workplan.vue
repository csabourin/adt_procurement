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
content: "0"counter(wpParts);
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
	border-top: 2px solid #C3C67F;
	background-color: #f0f1df;

}
.planDelivs:before{
	background-color: #C3C67F;
}

.planRisk{}
.planRisk:before{}
.planLikely{}
.planLikely:before{}
.planImpact{}
.planImpact:before{}
.planMitigat{}
.planMitigat:before{}
.planRes{}
.planRes:before{}
</style>
<i18n>
  {
  "en":{
  "wpTable":"<h1>Take a moment now to explore the different sections.</h1><table class='tableColoured'><tr><td colspan='8' class='govtPri'><strong>Government priorities</strong> –<br> In the Speech from the throne, a new government sets out its agenda. This includes its broad goals and commitments and how it will reach them.</td></tr>  <tr><td colspan='8' class='deptPri'><strong>Departmental priorities</strong> –<br> What your department sets out to do to support the government’s priorities.</td></tr>  <tr><td colspan='8'  class='dirPri'><strong>Directorate priorities</strong> –<br> What your directorate sets out to do to support the departmental priorities.</td></tr>  <tr>   <td class='planAct'><strong>Activities</strong> –<br> The work tasks to be accomplished to support your directorate’s priorities. This includes performance indicators and service standards for each work task.</td>   <td class='planSubAct'><strong>Sub-activities</strong> –<br> The work tasks broken down into smaller parts.</td>   <td class='planDelivs'><strong>Deliverables</strong> –<br> Specific and tangible items you should be able to check off your list when you accomplish them.</td>   <td class='planRisk'><strong>Risk</strong> –<br> Potential events that may affect the activity and its ability to meet and accomplish its objectives and expected results.</td>   <td class='planLikely'><strong>Likelihood</strong> –<br> An educated guess at whether or not the risk will happen.</td>   <td><strong>Impact</strong> –<br> The potential loss associated with a risk.</td><td><strong>Mitigation</strong> – Actions to counteract the potential risks.</td><td><strong>Resources</strong> –<br> The budget, personnel, consultants, buildings and materials required to carry out the directorate activities.</td></tr></table>"
  },
  "fr":{
  "wpTable":"Allo"
  }
  }
</i18n>
