<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <radioQuiz :question="$t('q1')" qId="1" @response="lala=$event" />
        </b-col>
        <b-col>
          <checkboxQuiz :question="$t('q2')" qId="2" :Answer='["1","2","3"]' @response="land = $event" />
        </b-col>
      </b-row>
    </b-container>
    <transition name="fade"><span v-if="lala==2">Yay parent</span></transition>
    <ul>
      <transition name="bounce">
        <li v-if="lala==1">Bounce me in!</li>
      </transition>
    </ul>
    <hr style="clear: both;">
    <selectMatching :question="$t('q3')" match="2" />
    <hr style="clear: both;">
    <h3>What do you get when you open the door?</h3>
    <openDoor><span class="floatMiddle">You get texted</span></openDoor> &nbsp;
    <openDoor><span class="floatMiddle">You get nothing!</span></openDoor> &nbsp;
    <openDoor><img src='~/assets/Roz.png' width="200"></openDoor>
    <hr>
    <gauge :angle="gaugeRange" />
    <input type="range" v-model="gaugeRange" min="-120" max="120">
    <hr style="clear:both">
       <connectDots :question="$t('q4')" qId="1" :correctAnswer='[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"]]' />
       <connectDots :question="$t('q4')" qId="2" :correctAnswer='[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"]]' />
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import openDoor from "~/components/openDoor"
import gauge from "~/components/gauge"
import connectDots from "~/components/interface/connectDots"
import selectMatching from "~/components/selectMatching"
export default {
  components: {
    radioQuiz,
    checkboxQuiz,
    openDoor,
    gauge,
    selectMatching,
    connectDots
  },
  data() {
    return {
      lala: "",
      land: "",
      doorOpened: false,
      gaugeRange: "0"
    }
  }
}

</script>
<i18n>{
  "en": {
  "q1": {
  "text": "What number comes second?",
  "options": {
  "1": "One",
  "2": "Two",
  "3": "Three"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  }
  },
  "q2": {
  "text": "What numbers are prime?",
  "options": {
  "1": "One",
  "2": "Two",
  "3": "Three",
  "4": "Four"
  },
  "feedback": {
  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "right": "<span class='v-right' /> <strong>Correct!</strong>"
  }
  },
  "q3": {
  "text": "Match the item to the budget in which it belongs. ",
  "options": {
  "1": "A contract with an agency for temp staff"
  },
  "matching": {
  "1": "Operating - Salary ",
  "2": "Operating - O&M ",
  "3": "Grants & Contributions",
  "4": "Capital "
  },
  "feedback": {
  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "right": "<span class='v-right' /> <strong>Correct!</strong>"
  }
  },
  "q4":{
  "dotsRight":[
  "Budget",
  "Commitments",
  "Year-To-Date Actuals",
  "Annual Forecast",
  "Surplus/Deficit",
  "Surplus/Deficit Notes",
  "Notes on Risks"
  ],
  "dotsLeft":[
  "Funds allocated for the fiscal year. ",
  "Funds set aside for a specific purpose.",
  "What you have spent up to now.",
  "What you plan on spending for the full fiscal year.",
  "Budget leftover or shortfall. ",
  "Provides details on the budget leftover or shortfall",
  "Situations that may change the results you&rsquo;ve reported. "
  ]}
  },
  "fr": {
  "q1": {
  "text": "Quel numéro arrive en deuxième?",
  "options": {
  "1": "Un",
  "2": "Deux",
  "3": "Trois"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  }
  },
  "q2": {
  "text": "Quel nombres sont premiers?",
  "options": {
  "1": "Un",
  "2": "Deux",
  "3": "Trois",
  "4": "Quatre"
  },
  "feedback": {
  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "right": "<span class='v-right' /> <strong>Correct!</strong>"
  }
  },
  "q3": {
  "text": "Faites correspondre le poste au budget auquel il appartient.",
  "options": {
  "1": "Un contrat avec une agence d&rsquo;intérim"
  },
  "matching": {
  "1": "Fonctionnement - Salaire",
  "2": "Exploitation - F&E",
  "3": "Subventions et contributions",
  "4": "Capital"
  },
  "feedback": {
  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "right": "<span class='v-right' /> <strong>Correct!</strong>"
  }
  },
  "q4":{"dotsRight":[
  "Budget",
  "Engagements",
  "Dépenses réelles depuis le début de l&rsquo;année",
  "Prévisions annuelles",
  "Excédent/déficit",
  "Notes sur les excédents ou déficits",
  "Notes sur les risques"
  ],
  "dotsLeft":[
  "Fonds alloués pour l&rsquo;exercice financier. ",
  "Fonds mis de côté à des fins précises.",
  "Ce que vous avez dépensé jusqu&rsquo;à présent.",
  "Ce que vous prévoyez dépenser pour l&rsquo;ensemble de l&rsquo;exercice financier.",
  "Reste ou manque à gagner dans le budget. ",
  "Fournit des détails sur le reliquat ou le manque à gagner du budget. ",
  "Les situations qui peuvent changer les résultats que vous avez rapportés. "
  ]}
  }
  }
</i18n>
<style type="text/css" scoped="">
.floatMiddle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  text-align: center;
  width: 200px;
}

/**{border:1px solid red;}*/

</style>
