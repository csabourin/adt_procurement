<template>
  <div>
  	<table border=1>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <td v-html="$t('lines[0][0]')" />
            <td v-html="$t('lines[0][1]')" />
            <td v-html="$t('lines[0][2]')" />
            <td v-html="$t('lines[0][3]')" />
            <td v-html="$t('lines[0][4]')" />
            <td v-html="$t('lines[0][5]')" />
          </tr>
          <tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>
          <tr>
            <td v-html="$t('salary')" />
            <td v-for="i in 5">&nbsp;</td>
          </tr>
          <tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>
          <tr>
            <td v-html="$t('lines[1][0]')" />
            <td v-html="$t('lines[1][1]')" />
            <td v-html="$t('lines[1][2]')" />
            <td v-html="$t('lines[1][3]')" />
            <td v-html="$t('lines[1][4]')" />
            <td v-html="$t('lines[1][5]')" />
          </tr>
          <tr>
            <td v-html="$t('lines[2][0]')" />
            <td v-html="$t('lines[2][1]')" />
            <td v-html="$t('lines[2][2]')" />
            <td v-html="$t('lines[2][3]')" />
            <td v-html="$t('lines[2][4]')" />
            <td v-html="$t('lines[2][5]')" />
          </tr>
          <tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>
          <tr>
            <td v-html="$t('oAndm')" />
            <td v-for="i in 5">&nbsp;</td>
          </tr>
          <tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>
          <tr>
            <td v-html="$t('lines[3][0]')" />
            <td v-html="$t('lines[3][1]')" />
            <td v-html="$t('lines[3][2]')" />
            <td v-html="$t('lines[3][3]')" />
            <td v-html="$t('lines[3][4]')" />
            <td v-html="$t('lines[3][5]')" />
          </tr>
          <tr>
            <td v-html="$t('lines[4][0]')" />
            <td v-html="$t('lines[4][1]')" />
            <td v-html="$t('lines[4][2]')" />
            <td v-html="$t('lines[4][3]')" />
            <td v-html="$t('lines[4][4]')" />
            <td v-html="$t('lines[4][5]')" />
          </tr>
          <tr>
            <td v-html="$t('lines[5][0]')" />
            <td v-html="$t('lines[5][1]')" />
            <td v-html="$t('lines[5][2]')" />
            <td v-html="$t('lines[5][3]')" />
            <td v-html="$t('lines[5][4]')" />
            <td v-html="$t('lines[5][5]')" />
          </tr>
          <tr>
            <td v-html="$t('lines[6][0]')" />
            <td v-html="$t('lines[6][1]')" />
            <td v-html="$t('lines[6][2]')" />
            <td v-html="$t('lines[6][3]')" />
            <td v-html="$t('lines[6][4]')" />
            <td v-html="$t('lines[6][5]')" />
          </tr>
          <tr>
            <td v-html="$t('lines[7][0]')" />
            <td v-html="$t('lines[7][1]')" />
            <td v-html="$t('lines[7][2]')" />
            <td v-html="$t('lines[7][3]')" />
            <td v-html="$t('lines[7][4]')" />
            <td v-html="$t('lines[7][5]')" />
          </tr>
          <tr>
           <td v-html="$t('lines[8][0]')" />
            <td v-html="$t('lines[8][1]')" />
            <td v-html="$t('lines[8][2]')" />
            <td v-html="$t('lines[8][3]')" />
            <td v-html="$t('lines[8][4]')" />
            <td v-html="$t('lines[8][5]')" />
          </tr>
          <tr>
            <td v-html="$t('lines[9][0]')" />
            <td v-html="$t('lines[9][1]')" />
            <td v-html="$t('lines[9][2]')" />
            <td v-html="$t('lines[9][3]')" />
            <td v-html="$t('lines[9][4]')" />
            <td v-html="$t('lines[9][5]')" />
          </tr>
          <tr>
           <td v-html="$t('lines[10][0]')" />
            <td v-html="$t('lines[10][1]')" />
            <td v-html="$t('lines[10][2]')" />
            <td v-html="$t('lines[10][3]')" />
            <td v-html="$t('lines[10][4]')" />
            <td v-html="$t('lines[10][5]')" />
          </tr>
          <tr>
           <td v-html="$t('lines[11][0]')" />
            <td v-html="$t('lines[11][1]')" />
            <td v-html="$t('lines[11][2]')" />
            <td v-html="$t('lines[11][3]')" />
            <td v-html="$t('lines[11][4]')" />
            <td v-html="$t('lines[11][5]')" />
          </tr>
        </tbody>
      </table>
    <span v-if="$i18n.locale=='en'">
      
    </span>
    <span v-if="$i18n.locale=='fr'"></span>
  </div>
</template>
<i18n>
  {
  "en":{
  "lines":[["Line Item","Budget","Commitments","YTD Actuals","Annual Forecast <br />Expenditures","Budget Notes"],
  ["Salary","$443,333","$240,139","$203,194","$443,333","manager, 2 officers, 2 analysts, 1 jr. officer, 1 jr. analyst, admin, 1 officer retiring July 1, casual 4 months"],
  ["TOTAL","$443,333","$240,139","$203,194","$443,333","&nbsp;"],
  ["Software License","$3,000","$1,500","$1,500","$3,000","new software, annual cost $1,000 X 3 FTEs"],
  ["Hospitality &amp; Conferences","$15,000","$2,500","$8,000","$15,000","&nbsp;"],
  ["Furniture","$1,000","$0","$900","$900","&nbsp;"],
  ["Office Supplies","$6,000","$4,553","$1,100","$6,000","&nbsp;"],
  ["Training","$4,400","$0","$2,400","$4,400","3 FTEs at $800 each for training, 4 FTEs at $500 each for general training"],
  ["Translation Services","$2,500","$500","$1,200","$2,000","&nbsp;"],
  ["Travel","$8,000","$4,000","$1,700","$7,800","Trip 1 - $1,700 Claimed of $1,800 approved<br />Trip 2 - $2,000 Committed<br />Trip 3 - $2,000 Committed<br />Trip 4 - $2,000 Not yet approved"],
  ["Temp Help","$5,000","$2,000","$1,000","$5,000","to help conduct remote inspections"],
  ["TOTAL","$44,900","$15,053","$17,800","$44,100","&nbsp;"]
  ],
  "salary":"Salary",
  "oAndm":"O&M"
},
  "fr":{"lines":[["Poste individuel","Budget","Engagements","CDA&nbsp;Réel","Dépenses annuelles prévues","Notes budgétaires"],
["Salaire","443&nbsp;333&nbsp;$","240&nbsp;139&nbsp;$","203&nbsp;194&nbsp;$","443&nbsp;333&nbsp;$","gestionnaire, 2 agents, 2 analystes, 1 agent jr., 1 analyste jr., 1 administrateur, 1 agent prenant sa retraite le 1er juillet, occasionnel 4 mois"],
["TOTAL","443&nbsp;333&nbsp;$","240&nbsp;139&nbsp;$","203&nbsp;194&nbsp;$","443&nbsp;333&nbsp;$","&nbsp;"],
["Licence de logiciel","3&nbsp;000&nbsp;$","1&nbsp;500&nbsp;$","1&nbsp;500&nbsp;$","3&nbsp;000&nbsp;$","nouveau logiciel, coût annuel 1&nbsp;000&nbsp;$ X 3 ETP"],
["Accueil et conférences","15&nbsp;000&nbsp;$","2&nbsp;500&nbsp;$","8&nbsp;000&nbsp;$","15&nbsp;000&nbsp;$","&nbsp;"],
["Meubles","1&nbsp;000&nbsp;$","0&nbsp;$","900&nbsp;$","900&nbsp;$","&nbsp;"],
["Fournitures de bureau","6&nbsp;000&nbsp;$","4&nbsp;553&nbsp;$","1&nbsp;100&nbsp;$","6&nbsp;000&nbsp;$","&nbsp;"],
["Formation","4&nbsp;400&nbsp;$","0&nbsp;$","2&nbsp;400&nbsp;$","4&nbsp;400&nbsp;$","3 ETP à 800&nbsp;$ chacun pour la formation, 4 ETP à 500&nbsp;$ chacun pour la formation générale"],
["Services de traduction","2&nbsp;500&nbsp;$","500&nbsp;$","1&nbsp;200&nbsp;$","2&nbsp;000&nbsp;$","&nbsp;"],
["Voyage","8&nbsp;000&nbsp;$","4&nbsp;000&nbsp;$","1&nbsp;700&nbsp;$","7&nbsp;800&nbsp;$","Voyage 1 - 1&nbsp;700&nbsp;$ réclamés de 2&nbsp;000&nbsp;$ approuvés <br>Voyage 2 - 2&nbsp;000&nbsp;$ engagés<br>Voyage 3 - 2&nbsp;000&nbsp;$ engagés<br>Voyage 4 - 2&nbsp;000&nbsp;$ Non encore approuvé"],
["Aide temporaire","5&nbsp;000&nbsp;$","2&nbsp;000&nbsp;$","1&nbsp;000&nbsp;$","5&nbsp;000&nbsp;$","pour aider à effectuer des inspections à distance"],
["TOTAL","44&nbsp;900&nbsp;$","15&nbsp;053&nbsp;$","17&nbsp;800&nbsp;$","44&nbsp;100&nbsp;$","&nbsp;"]
  ],
  "salary":"Salaire",
  "oAndm":"F et E"}
  }
</i18n> }

				
	
