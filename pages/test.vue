<template>
  <div class="pure-radiobutton pure-checkbox"  >
    <radioQuiz :Question="$t('q1')" qId="1" @response="lala=$event" />
    <br>
    <checkboxQuiz :Question="$t('q2')" qId="2" :Answer='["1","2","3"]' @response="land = $event" />
    <br>
    <b-container>
      <b-row>
        <b-col>Answer 1: {{ lala }}</b-col>
        <b-col>Answer 2: <span v-html="land"></span></b-col>
      </b-row>
    </b-container>
    <transition name="fade"><span v-if="lala==2">Yay parent</span></transition>
    <ul>
      <transition name="bounce">
        <li v-if="lala==1">Bounce me in!</li>
      </transition>
    </ul>
    <hr style="clear: both;">
    <selectMatching :question="$t('q3')" :matches="['2','3','1','4']"/>
    <hr style="clear: both;">
    <h3>What do you get when you open the door?</h3>
    <openDoor><span class="floatMiddle">You get texted</span></openDoor> &nbsp; 
    <openDoor><span class="floatMiddle">You get nothing!</span></openDoor> &nbsp; 
    <openDoor><img src='~/assets/Roz.png' width="200"></openDoor>
    <hr>
    <gauge :angle="gaugeRange"/>
    <input type="range" v-model="gaugeRange"  min="-52" max="52" >
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import openDoor from "~/components/openDoor"
import gauge from "~/components/gauge"
import selectMatching from "~/components/selectMatching"
export default {
  components: {
    radioQuiz,
    checkboxQuiz,
    openDoor,
    gauge,
    selectMatching
  },
  data() {
    return {
      lala: "",
      land: "",
      doorOpened: false,
      gaugeRange:0
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
        "1": "A contract with an agency for temp staff",
        "2": "Funds provided to a university to study fish habitat",
        "3": "Casual positions or leave cash-outs",
        "4": "Purchase a new fleet of trucks"
      },
      "matching": {
        "1": "Operating - Salary ",
        "2": "Operating - O&M ",
        "3": "Grants & Contributions",
        "4": "Capital "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answers are: <table border='1'> <tbody> <tr> <td> <p>A contract with an agency for temp staff</p> </td> <td> <p>Operating - O&amp;M</p> </td> </tr> <tr> <td> <p>Funds provided to a university to study fish habitat</p> </td> <td> <p>Gs&amp;Cs</p> </td> </tr> <tr> <td> <p>Casual positions or leave cash-outs&nbsp;</p> </td> <td> <p>Operating - Salary</p> </td> </tr> <tr> <td> <p>Purchase a new fleet of trucks&nbsp;</p> </td> <td> <p>Capital</p> </td> </tr> </tbody> </table>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    }
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
        "1": "Un contrat avec une agence d'intérim",
        "2": "Fonds versés à une université pour étudier l'habitat du poisson",
        "3": "Les postes occasionnels ou les encaissements de congés",
        "4": "Achat d’une nouvelle flotte de camions"
      },
      "matching": {
        "1": "Fonctionnement - Salaire",
        "2": "Exploitation - F&E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> <p>&nbsp;Les bonnes r&eacute;ponses sont :&nbsp;</p> <table border='1'> <tbody> <tr> <td> <p>Un contrat avec une agence d'int&eacute;rim</p> </td> <td> <p>Fonctionnement - F&amp;E</p> </td> </tr> <tr> <td> <p>Fonds vers&eacute;s &agrave; une universit&eacute; pour &eacute;tudier l'habitat du poisson</p> </td> <td> <p>Subventions et contribution</p> </td> </tr> <tr> <td> <p>Les postes occasionnels ou les encaissements de cong&eacute;s&nbsp;</p> </td> <td> <p>Fonctionnement - Salaire</p> </td> </tr> <tr> <td> <p>Achat d&rsquo;une nouvelle flotte de camions</p> </td> <td> <p>Capitale</p> </td> </tr> </tbody> </table>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    }
  }
}</i18n>
<style type="text/css" >
.floatMiddle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  text-align: center;
  width: 200px;
}

</style>
