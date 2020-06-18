<template>
  <span>
    <i18n path="genSentence">
      <span v-for="(hole,index) in numHoles" :key="index">
        <label class="v-inv" :for="'q'+hole"> {{$t('label')}}</label>
        <select v-model="Q[index]" :id="'q'+hole" @change="q1Submit=false">
          <option disabled value=''>{{$t('disabledOption')}}</option>
          <option v-for="(term,index) in termList" :key="index" :value="index" v-html="term" />
        </select>
      </span>
    </i18n>
    <p>
      <b-button @click="q1Submit=true" :disabled="q1Submit || answerArray.length < numHoles">{{$t('submit')}}</b-button>
    </p>
    <p v-if="isAcceptable(answerArray)">
      <span class="v-right" v-if="arraysMatch(answerArray,answer) && q1Submit"><strong>Correct!</strong> {{feedback.right}}</span>
      <span v-else-if="q1Submit" class="v-wrong"><strong>Incorrect.</strong> {{feedback.wrong}}</span></p>
      {{switchLocale}}
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      answerArray: [],
      q1Submit: false,
      index: 0,
      Quest3: false
    }
  },
  computed: {
    switchLocale() {
      this.$i18n.setLocaleMessage(this.$i18n.locale, { genSentence: this.sentence })
    }
  },
  props: {
    answer: {
      type: Array,
      default: () => { return [] }
    },
    numHoles: {
      type: Number,
      default: 1
    },
    sentence: {
      type: String,
      default: `Empty {0}{1} and {2}{3} here`
    },
    termList: {
      type: Object,
      default: () => { return { "0": "Empty" } }
    },
    feedback: {
      type: Object,
      default: () => { return { "right": "Ok","wrong":"Nope" } }
    }
  },
  methods: {
    arraysMatch(arr1, arr2) {
      if (arr1.length !== arr2.length) return false
      const arrayOne = arr1.concat().sort()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) return false
      }
      return true
    },
    isAcceptable(arr1) {
      return ((Array.isArray(arr1) && arr1.length))
    },
    submitAnswer() {
      this.q1Submit = true
      this.$emit('response', this.Quest3)
    }
  }
}

</script>
<style type="text/css" scoped>
select {
  border: 0;
  border-bottom: 1px solid black;
}
</style>
<i18n>
  {
  "en": {
  "label": "Select an option to complete the sentence",
  "disabledOption": "Choose"
  },
  "fr": {
  "label": "Sélectionnez une option pour compléter la phrase",
  "disabledOption": "Choisissez"
  }
  }
</i18n>
