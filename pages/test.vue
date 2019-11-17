<template>
  <span>
    <radioQuiz :Question="$t('q1')" Number="1" />
  </span> </template>
  <script type="text/javascript">
    import radioQuiz from "~/components/radioQuiz"
    export default {
      components:{
        radioQuiz
      }
    }
  </script>
<i18n>
  {
  "en":
  {
  "q1":
  {
  "text":"What number comes second?",
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
  }
  },
  "fr":
  {
  "q1":
  {
  "text":"Quel numéro arrive en deuxième?",
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
  }
  }
  }
</i18n>