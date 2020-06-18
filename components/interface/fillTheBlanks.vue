<template>
  <span>
    <label class="v-inv" for="q1"> {{$t('label')}}</label>
    <select v-model="Q1" @change="$emit('selected',Q1)" id="q1">
      <option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in termList" :key="index" :value="index" v-html="term" />
    </select>
    <p>
      <b-button @click="q1Submit=true" :disabled="!Q1 || q1Submit">{{$t('submit')}}</b-button>
    </p>
    <p v-if="Q1">
      <span class="v-right" v-if="Q1=='1' && q1Submit"><strong>Correct!</strong></span>
      <span v-else-if="q1Submit" class="v-wrong"><strong>Incorrect.</strong></span></p>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      Q1: 0,
      q1Submit: true
    }
  },
  props: {
    sentence: {
      type: String,
      default: `Empty {0}{1} and {2}{3} here`
    },
    termList: {
      type: Object,
      default: () => { return { "0": "Empty" } }
    }
  },
  i18n: {
    messages: {
      en: { passed: "sentence {0}{1}" },
      fr: { passed: "phrase {0}{1}" }
    }
  }
}

</script>
<i18n>
  {
  "en": {
  "qDisabled": "Choose",
  "label": "Select an option to complete the sentence",
  "sentence":" Empty {0}{1} sentence"
  },
  "fr": {
  "qDisabled": "Choisissez",
  "label": "Sélectionnez une option pour compléter la phrase",
  "sentence":"{0}{1} Phrase vide"
  }
  }
</i18n>
