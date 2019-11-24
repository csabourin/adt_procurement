<template>
  <div class="pure-radiobutton pure-checkbox">
    <b-container>
      <b-row>
        <b-col>
          <radioQuiz :Question="$t('q1')" qId="1" @response="lala=$event" />
        </b-col>
        <b-col>
          <checkboxQuiz :Question="$t('q2')" qId="2" :Answer='["1","2","3"]' @response="land = $event" />
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
    <input type="range" v-model="gaugeRange" min="-60" max="60">
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
      gaugeRange: 0
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
  "1": "Un contrat avec une agence d'intérim"
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
  }
  }
  }</i18n>
<style type="text/css">
.floatMiddle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  text-align: center;
  width: 200px;
}
</style>