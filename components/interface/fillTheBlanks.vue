<template>
  <span :id="qid+index+'label'">
  	<p>&nbsp;</p>
    <i18n path="genSentence">
      <span v-for="(hole,index) in blanks" :key="index">
        <label class="v-inv" :for="qid+index"> {{$t('labelled')}}</label>
        <select v-model="answerArray[index]" :id="qid+index" @change="q1Submit=false" :aria-describedby="qid+index+'label'">
          <option disabled value='' selected >{{$t('disabledOption')}}</option>
          <option v-for="(term,index) in termList" :key="index" :value="index" v-html="term" />
        </select>
      </span>
    </i18n>
    <p>
      <br/><b-button @click="submitAnswer" :disabled="q1Submit || answerArray.length < blanks">{{$t('submit')}}</b-button>
    </p>
    <div aria-live="polite">
      <p v-if="isAcceptable(answerArray)">
        <span class="v-right" v-if="arraysMatch(answerArray,answer) && q1Submit"><strong>Correct!</strong> {{feedback.right}}</span>
        <span v-else-if="q1Submit" class="v-wrong"><strong>Incorrect.</strong> {{feedback.wrong}}</span></p>
        {{getTheSentence}}
    </div>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      answerArray: [],
      q1Submit: false,
      index: 0
    }
  },
  computed: {
    getTheSentence() {
       this.$i18n.mergeLocaleMessage(this.$i18n.locale, { genSentence: this.sentence })
    }
  },
  props: {
  	qid:{type:String,
  		default:"q0"},
    answer: {
      type: Array,
      default: () => { return [] }
    },
    blanks: {
      type: Number,
      default: 1
    },
    sentence: {
      type: String,
      default: "Empty {0} here"
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
      this.$emit('response', this.arraysMatch(this.answerArray,this.answer))
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
  "fr": {
    "labelled": "Sélectionnez une option pour compléter la phrase",
    "disabledOption": "Choisissez",
    "genSentence":"Vide {0} ici"
  },
  "en": {
    "labelled": "Select an option to complete the sentence",
    "disabledOption": "Choose",
    "genSentence":"Empty {0} here"
  }
}
</i18n>