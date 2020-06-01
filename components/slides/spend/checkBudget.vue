<template>
  <div>
    <div class="tableScrollLTL"><!-- *CSABOURIN* : scrollMe should only be doing its thing when the screen is narrow no? Hard to adapt to content for now... -->
      <table border=1 class="qTable">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th v-html="$t('lines[0][0]')" id="0-0" scope="col" />
            <th v-html="$t('lines[0][1]')" id="0-1" scope="col" />
            <th v-html="$t('lines[0][2]')" id="0-2" scope="col" />
            <th v-html="$t('lines[0][3]')" id="0-3" scope="col" />
            <th v-html="$t('lines[0][4]')" id="0-4" scope="col" />
            <th v-html="$t('lines[0][5]')" id="0-5" scope="col" />
          </tr>
        </thead>
        <thead>
          <!--<tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>-->
          <tr>
            <th v-html="$t('salary')" colspan="6" id="salary" scope="col" />
            <!--<th v-for="i in 5">&nbsp;</th>-->
          </tr>
    </thead>
        <tbody>
          <!--<tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>-->
          <tr>
            <th v-html="$t('lines[1][0]')" id="1-0" scope="row" headers="0-0 salary" />
            <td v-html="$t('lines[1][1]')" headers="0-1 salary 1-0" />
            <td v-html="$t('lines[1][2]')" headers="0-2 salary 1-0" />
            <td v-html="$t('lines[1][3]')" headers="0-3 salary 1-0" />
            <td v-html="$t('lines[1][4]')" headers="0-4 salary 1-0" />
            <td v-html="$t('lines[1][5]')" headers="0-5 salary 1-0" />
          </tr>
          <tr style="font-weight: bold">
            <th v-html="$t('lines[2][0]')" id="2-0" scope="row" headers="0-0 salary" />
            <td v-html="$t('lines[2][1]')" headers="0-1 salary 2-0" />
            <td v-html="$t('lines[2][2]')" headers="0-2 salary 2-0" />
            <td v-html="$t('lines[2][3]')" headers="0-3 salary 2-0" />
            <td v-html="$t('lines[2][4]')" headers="0-4 salary 2-0" />
            <td v-html="$t('lines[2][5]')" headers="0-5 salary 2-0" />
          </tr>
          <!--<tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>-->
        </tbody>
        <thead>
          <tr>
            <th v-html="$t('oAndm')" colspan="6" id="om" scope="col" />
            <!--<th v-for="i in 5">&nbsp;</th>-->
          </tr>
        </thead>
        <tbody>
          <!--<tr>
            <td v-for="i in 6">&nbsp;</td>
          </tr>-->
          <tr>
            <th v-html="$t('lines[3][0]')" id="3-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[3][1]')" header="0-1 om 3-0" />
            <td v-html="$t('lines[3][2]')" header="0-2 om 3-0" />
            <td v-html="$t('lines[3][3]')" header="0-3 om 3-0" />
            <td v-html="$t('lines[3][4]')" header="0-4 om 3-0" />
            <td v-html="$t('lines[3][5]')" header="0-5 om 3-0" />
          </tr>
          <tr>
            <th v-html="$t('lines[4][0]')" id="4-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[4][1]')" header="0-1 om 4-0" />
            <td v-html="$t('lines[4][2]')" header="0-2 om 4-0" />
            <td v-html="$t('lines[4][3]')" header="0-3 om 4-0" />
            <td v-html="$t('lines[4][4]')" header="0-4 om 4-0" />
            <td v-html="$t('lines[4][5]')" header="0-5 om 4-0" />
          </tr>
          <tr>
            <th v-html="$t('lines[5][0]')" id="5-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[5][1]')" header="0-1 om 5-0" />
            <td v-html="$t('lines[5][2]')" header="0-2 om 5-0" />
            <td v-html="$t('lines[5][3]')" header="0-3 om 5-0" />
            <td v-html="$t('lines[5][4]')" header="0-4 om 5-0" />
            <td v-html="$t('lines[5][5]')" header="0-5 om 5-0" />
          </tr>
          <tr>
            <th v-html="$t('lines[6][0]')" id="6-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[6][1]')" header="0-1 om 6-0" />
            <td v-html="$t('lines[6][2]')" header="0-2 om 6-0" />
            <td v-html="$t('lines[6][3]')" header="0-3 om 6-0" />
            <td v-html="$t('lines[6][4]')" header="0-4 om 6-0" />
            <td v-html="$t('lines[6][5]')" header="0-5 om 6-0" />
          </tr>
          <tr>
            <th v-html="$t('lines[7][0]')" id="7-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[7][1]')" header="0-1 om 7-0" />
            <td v-html="$t('lines[7][2]')" header="0-2 om 7-0" />
            <td v-html="$t('lines[7][3]')" header="0-3 om 7-0" />
            <td v-html="$t('lines[7][4]')" header="0-4 om 7-0" />
            <td v-html="$t('lines[7][5]')" header="0-5 om 7-0" />
          </tr>
          <tr>
            <th v-html="$t('lines[8][0]')" id="8-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[8][1]')" header="0-1 om 8-0" />
            <td v-html="$t('lines[8][2]')" header="0-2 om 8-0" />
            <td v-html="$t('lines[8][3]')" header="0-3 om 8-0" />
            <td v-html="$t('lines[8][4]')" header="0-4 om 8-0" />
            <td v-html="$t('lines[8][5]')" header="0-5 om 8-0" />
          </tr>
          <tr>
            <th v-html="$t('lines[9][0]')" id="9-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[9][1]')" header="0-1 om 9-0" />
            <td v-html="$t('lines[9][2]')" header="0-2 om 9-0" />
            <td v-html="$t('lines[9][3]')" header="0-3 om 9-0" />
            <td v-html="$t('lines[9][4]')" header="0-4 om 9-0" />
            <td v-html="$t('lines[9][5]')" header="0-5 om 9-0" />
          </tr>
          <tr>
            <th v-html="$t('lines[10][0]')" id="10-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[10][1]')" header="01- om 10-0" />
            <td v-html="$t('lines[10][2]')" header="02- om 10-0" />
            <td v-html="$t('lines[10][3]')" header="03- om 10-0" />
            <td v-html="$t('lines[10][4]')" header="04- om 10-0" />
            <td v-html="$t('lines[10][5]')" header="05- om 10-0" />
          </tr>
          <tr style="font-weight: bold">
            <th v-html="$t('lines[11][0]')" id="11-0" scope="row" headers="0-0 om" />
            <td v-html="$t('lines[11][1]')" header="0-1 om 11-0" />
            <td v-html="$t('lines[11][2]')" header="0-2 om 11-0" />
            <td v-html="$t('lines[11][3]')" header="0-3 om 11-0" />
            <td v-html="$t('lines[11][4]')" header="0-4 om 11-0" />
            <td v-html="$t('lines[11][5]')" header="0-5 om 11-0" />
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <b-card>
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><br><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><br><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><br><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
    </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
</b-card>
  </div>
</template>
<i18n>
  {
  "en": {
    "q1": {
      "text": "Looking at the budget provided, do you have enough funds to cover a $500 translation request?",
      "options": {
        "1": "Yes",
        "2": "No"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "There is $2,500 in your budget for translation services, so you have enough money for the translation request."
    },
    "q2": {
      "text": "Do you have enough money in your budget to hire a consultant whose fee is $90,000?",
      "options": {
        "1": "Yes. I just need to add a row for the amount of the consultant’s fee to my approved budget.",
        "2": "No. There is not enough money in your approved budget."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "There is not enough money in your approved budget. Unless you are given more money, you cannot hire the consultant."
    },
    "q3": {
      "text": "You have purchased all the furniture that you will need for the year that costs $900. You would like to buy an extra $100 in office supplies. Can you use the money initially allocated in furniture?",
      "options": {
        "1": "Yes. Funds can be moved between line items.",
        "2": "No. Once they are allocated to furniture, the funds cannot be moved."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": " Funds can be moved between line items."
    },
    "lines": [
      [
        "Line Item",
        "Budget",
        "Commitments",
        "YTD Actuals",
        "Annual Forecast <br />Expenditures",
        "Budget Notes"
      ],
      [
        "Salary",
        "$443,333",
        "$240,139",
        "$203,194",
        "$443,333",
        "manager, 2 officers, 2 analysts, 1 jr. officer, 1 jr. analyst, admin, 1 officer retiring July 1, casual 4 months"
      ],
      [
        "TOTAL",
        "$443,333",
        "$240,139",
        "$203,194",
        "$443,333",
        "&nbsp;"
      ],
      [
        "Software License",
        "$3,000",
        "$1,500",
        "$1,500",
        "$3,000",
        "new software, annual cost $1,000&times;3 FTEs"
      ],
      [
        "Hospitality &amp; Conferences",
        "$15,000",
        "$2,500",
        "$8,000",
        "$15,000",
        "&nbsp;"
      ],
      [
        "Furniture",
        "$1,000",
        "$0",
        "$900",
        "$900",
        "&nbsp;"
      ],
      [
        "Office Supplies",
        "$6,000",
        "$4,553",
        "$1,100",
        "$6,000",
        "&nbsp;"
      ],
      [
        "Training",
        "$4,400",
        "$0",
        "$2,400",
        "$4,400",
        "3 FTEs at $800 each for training,<br>4 FTEs at $500 each for general training"
      ],
      [
        "Translation Services",
        "$2,500",
        "$500",
        "$1,200",
        "$2,000",
        "&nbsp;"
      ],
      [
        "Travel",
        "$8,000",
        "$4,000",
        "$1,700",
        "$7,800",
        "Trip 1 - $1,700 Claimed of $1,800 approved<br />Trip 2 - $2,000 Committed<br />Trip 3 - $2,000 Committed<br />Trip 4 - $2,000 Not yet approved"
      ],
      [
        "Temp Help",
        "$5,000",
        "$2,000",
        "$1,000",
        "$5,000",
        "to help conduct remote inspections"
      ],
      [
        "TOTAL",
        "$44,900",
        "$15,053",
        "$17,800",
        "$44,100",
        "&nbsp;"
      ]
    ],
    "salary": "Salary",
    "oAndm": "O&M"
  },
  "fr": {
    "q1": {
      "text": "En regardant le budget fourni, avez-vous assez de fonds pour couvrir une demande de traduction de 500&nbsp;$?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "Il y a 2&nbsp;500&nbsp;$ dans votre budget pour les demandes de traduction, donc vous avez assez d’argent pour la demande de traduction."
    },
    "q2": {
      "text": "Avez-vous assez d’argent dans votre budget pour embaucher un consultant dont les honoraires sont de 90&nbsp;000&nbsp;$?",
      "options": {
        "1": "Oui, j’ai juste besoin d’ajouter une ligne pour mettre le montant des honoraires du consultant à mon budget approuvé.",
        "2": "Non. Il n’y a pas assez d’argent dans mon budget approuvé."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "Il n’y a pas assez d’argent dans votre budget approuvé. Si on ne vous donne pas plus d’argent, vous ne pouvez pas embaucher le consultant."
    },
    "q3": {
      "text": "Vous avez acheté tous les meubles dont vous aurez besoin pour l’année au coût de 900&nbsp;$. Vous aimeriez acheter 100&nbsp;$ de plus en fournitures de bureau. Pouvez-vous utiliser l’argent initialement alloué pour le mobilier?",
      "options": {
        "1": "Oui. Les fonds peuvent être transférés d’un poste à l’autre.",
        "2": "Non. Une fois qu’ils sont affectés au mobilier, les fonds ne peuvent plus être déplacés."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Les fonds peuvent être transférés d’un poste à l’autre."
    },
    "lines": [
      [
        "Poste individuel",
        "Budget",
        "Engagements",
        "CDA&nbsp;Réel",
        "Dépenses annuelles prévues",
        "Notes budgétaires"
      ],
      [
        "Salaire",
        "443&nbsp;333&nbsp;$",
        "240&nbsp;139&nbsp;$",
        "203&nbsp;194&nbsp;$",
        "443&nbsp;333&nbsp;$",
        "gestionnaire, 2 agents, 2 analystes, 1 agent jr., 1 analyste jr., 1 administrateur, 1 agent prenant sa retraite le 1er juillet, occasionnel 4 mois"
      ],
      [
        "TOTAL",
        "443&nbsp;333&nbsp;$",
        "240&nbsp;139&nbsp;$",
        "203&nbsp;194&nbsp;$",
        "443&nbsp;333&nbsp;$",
        "&nbsp;"
      ],
      [
        "Licence de logiciel",
        "3&nbsp;000&nbsp;$",
        "1&nbsp;500&nbsp;$",
        "1&nbsp;500&nbsp;$",
        "3&nbsp;000&nbsp;$",
        "nouveau logiciel, coût annuel 1&nbsp;000&nbsp;$&times;3 ETP"
      ],
      [
        "Accueil et conférences",
        "15&nbsp;000&nbsp;$",
        "2&nbsp;500&nbsp;$",
        "8&nbsp;000&nbsp;$",
        "15&nbsp;000&nbsp;$",
        "&nbsp;"
      ],
      [
        "Meubles",
        "1&nbsp;000&nbsp;$",
        "0&nbsp;$",
        "900&nbsp;$",
        "900&nbsp;$",
        "&nbsp;"
      ],
      [
        "Fournitures de bureau",
        "6&nbsp;000&nbsp;$",
        "4&nbsp;553&nbsp;$",
        "1&nbsp;100&nbsp;$",
        "6&nbsp;000&nbsp;$",
        "&nbsp;"
      ],
      [
        "Formation",
        "4&nbsp;400&nbsp;$",
        "0&nbsp;$",
        "2&nbsp;400&nbsp;$",
        "4&nbsp;400&nbsp;$",
        "3 ETP à 800&nbsp;$ chacun pour la formation,<br>4 ETP à 500&nbsp;$ chacun pour la formation générale"
      ],
      [
        "Services de traduction",
        "2&nbsp;500&nbsp;$",
        "500&nbsp;$",
        "1&nbsp;200&nbsp;$",
        "2&nbsp;000&nbsp;$",
        "&nbsp;"
      ],
      [
        "Voyage",
        "8&nbsp;000&nbsp;$",
        "4&nbsp;000&nbsp;$",
        "1&nbsp;700&nbsp;$",
        "7&nbsp;800&nbsp;$",
        "Voyage 1 - 1&nbsp;700&nbsp;$ réclamés de 2&nbsp;000&nbsp;$ approuvés <br>Voyage 2 - 2&nbsp;000&nbsp;$ engagés<br>Voyage 3 - 2&nbsp;000&nbsp;$ engagés<br>Voyage 4 - 2&nbsp;000&nbsp;$ Non encore approuvé"
      ],
      [
        "Aide temporaire",
        "5&nbsp;000&nbsp;$",
        "2&nbsp;000&nbsp;$",
        "1&nbsp;000&nbsp;$",
        "5&nbsp;000&nbsp;$",
        "pour aider à effectuer des inspections à distance"
      ],
      [
        "TOTAL",
        "44&nbsp;900&nbsp;$",
        "15&nbsp;053&nbsp;$",
        "17&nbsp;800&nbsp;$",
        "44&nbsp;100&nbsp;$",
        "&nbsp;"
      ]
    ],
    "salary": "Salaire",
    "oAndm": "F et E"
  }
}</i18n> 
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz
		},
    data(){
      return{
        tabIndex:0
      }
    },
    methods:{
      focus(){
        setTimeout(function(){
          document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
        }, 300);
      }
    }
	}
</script>
<style type="text/css" scoped>
.qTable th[scope="col"]{
    text-align: center;
    background-color: #7D677D;
    color: #fff;
  }
  .qTable td:nth-child(n+2):nth-child(-n+5){
    text-align: right;
  }
  .qTable th[scope="row"]{
    text-align: right;
  }
  .qTable td:nth-child(odd), .qTable th[scope="row"]:nth-child(odd){
    /* background-color: hsl(255, 37%, 90%); */
    background-color: #CAC1CA;
  }
  .qTable td, .qTable th[scope="row"]{
    padding:.5em;
  }
  .scrollMe{ 
display: block;
position:relative;
    width:100%;
  overflow-x: auto;
  white-space: nowrap; }
  table{
    width:100%;
  }
</style>
