<template>
  <div>
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
    <h3>What do you get?</h3>
    <openDoor>You get texted</openDoor> &nbsp; <openDoor><span class="floatMiddle">You get nothing!</span></openDoor> &nbsp; <openDoor><img src='~/assets/Roz.png' width="200"></openDoor>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import openDoor from "~/components/openDoor"
export default {
  components: {
    radioQuiz,
    checkboxQuiz,
    openDoor
  },
  data() {
    return {
      lala: "",
      land: "",
      doorOpened: false
    }
  }
}

</script>
<i18n>{
  "en":
  {
  "q1":
  {
  "text": "What number comes second?",
  "options":
  {
  "1": "One",
  "2": "Two",
  "3": "Three"
  },
  "feedback":
  {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  }
  },
  "q2":
  {
  "text": "What numbers are prime?",
  "options":
  {
  "1": "One",
  "2": "Two",
  "3": "Three"
  },
  "feedback":
  {
  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "right": "<span class='v-right' /> <strong>Correct!</strong>"
  }
  }
  },
  "fr":
  {
  "q1":
  {
  "text": "Quel numéro arrive en deuxième?",
  "options":
  {
  "1": "Un",
  "2": "Deux",
  "3": "Trois"
  },
  "feedback":
  {
  "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
  }
  },
  "q2":
  {
  "text": "Quel nombres sont premiers?",
  "options":
  {
  "1": "Un",
  "2": "Deux",
  "3": "Trois"
  },
  "feedback":
  {
  "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
  "right": "<span class='v-right' /> <strong>Correct!</strong>"
  }
  }
  }
  }</i18n>
<style type="text/css" scoped>
.floatMiddle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  text-align: center;
  width: 200px;
}

</style>
