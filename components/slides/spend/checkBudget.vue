<template>
  <div>
    <div class="scrollMe">
    <table border=1 class="qTable">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <tbody>
        <tr >
          <th v-html="$t('lines[0][0]')" />
          <th v-html="$t('lines[0][1]')" />
          <th v-html="$t('lines[0][2]')" />
          <th v-html="$t('lines[0][3]')" />
          <th v-html="$t('lines[0][4]')" />
          <th v-html="$t('lines[0][5]')" />
        </tr>
        <tr>
          <td v-for="i in 6">&nbsp;</td>
        </tr>
        <tr>
          <th v-html="$t('salary')" />
          <th v-for="i in 5">&nbsp;</th>
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
        <tr style="font-weight: bold">
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
          <th v-html="$t('oAndm')" />
          <th v-for="i in 5">&nbsp;</th>
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
        <tr style="font-weight: bold">
          <td v-html="$t('lines[11][0]')" />
          <td v-html="$t('lines[11][1]')" />
          <td v-html="$t('lines[11][2]')" />
          <td v-html="$t('lines[11][3]')" />
          <td v-html="$t('lines[11][4]')" />
          <td v-html="$t('lines[11][5]')" />
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
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
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
        "1": "Yes. I just need to add a row for the amount of the consultant&rsquo;s fee to my approved budget.",
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
        "1": "Yes. Funds can be moved between line items. ",
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
        "manager,<br>2 officers,<br>2 analysts,<br>1 jr. officer,<br>1 jr. analyst,<br>admin,<br>1 officer retiring July 1,<br>casual 4 months"
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
        "new software, annual cost $1,000 X 3 FTEs"
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
      "conclusion": "Il y a 2&nbsp;500&nbsp;$ dans votre budget pour les demandes de traduction, donc vous avez assez d&rsquo;argent pour la demande de traduction."
    },
    "q2": {
      "text": "Avez-vous assez d&rsquo;argent dans votre budget pour embaucher un consultant dont les honoraires sont de 90&nbsp;000&nbsp;$?",
      "options": {
        "1": "Oui, j&rsquo;ai juste besoin d&rsquo;ajouter une ligne pour le montant des honoraires du consultant à mon budget approuvé.",
        "2": "Non. Il n&rsquo;y a pas assez d&rsquo;argent dans votre budget approuvé."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "Il n&rsquo;y a pas assez d&rsquo;argent dans votre budget approuvé. Si on ne vous donne pas plus d&rsquo;argent, vous ne pouvez pas embaucher le consultant."
    },
    "q3": {
      "text": "Vous avez acheté tous les meubles dont vous aurez besoin pour l&rsquo;année au coût de 900 $. Vous aimeriez acheter 100 $ de plus en fournitures de bureaux. Pouvez-vous utiliser l&rsquo;argent initialement alloué pour le mobilier?",
      "options": {
        "1": "Oui &mdash; Les fonds peuvent être transférés d&rsquo;un objet de dépenses à l&rsquo;autre.",
        "2": "Non &mdash; Une fois qu&rsquo;ils sont affectés au mobilier, les fonds ne peuvent plus être déplacés."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Les fonds peuvent être transférés d&rsquo;un poste à l&rsquo;autre."
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
        "gestionnaire,<br>2 agents,<br>2 analystes,<br>1 agent jr.,<br>1 analyste jr.,<br>1 administrateur,<br>1 agent prenant sa retraite le 1er juillet,<br>occasionnel 4 mois"
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
        "nouveau logiciel, coût annuel 1&nbsp;000&nbsp;$ X 3 ETP"
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
    }
	}
</script>
<style type="text/css" scoped>
.qTable th{
    text-align: center;
    background-color: #8e7cc3;
    color: #fff;
  }
  .qTable td:nth-child(n+2):nth-child(-n+5){
    text-align: right;
  }
  .qTable td:nth-child(odd){
    background-color: hsl(255, 37%, 90%);
  }
  .qTable td{
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
