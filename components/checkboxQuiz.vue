<template>
  <span class="pure-checkbox">
    <strong class="question" v-html="question.text" />
    <fieldset tabindex="0">
      <legend v-html="$t('checkAll')" />
      <ol type="1">
        <li v-for="(item,index) in question.options" :key="index">
          <input :disabled="lock" @click="q2Submitted=false" type="checkbox" v-model="Quest2" :name="'q'+qId" :id="'checkboxq'+qId+index" :value="index"> <label :for="'checkboxq'+qId+index" v-html="item" />
        </li>
      </ol>
      <b-button :disabled="q2Submitted" @click="submitAnswer">{{(exam)?$t('submitTo'):$t('submit')}}</b-button>
    </fieldset>
    <p>&nbsp;</p>
    <p v-if="!isAcceptable(Quest2) && q2Submitted" v-html="$t('pleaseAnswer')"></p>
    <span v-if="isAcceptable(Quest2) && q2Submitted">
      <p v-if="arraysMatch(Quest2,Answer)"><span v-html="question.feedback.right" /></p>
      <p v-else> <span v-html="question.feedback.wrong" /></p>
      <p v-if="Quest2 && q2Submitted && question.conclusion" v-html="question.conclusion" />
    </span>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      q2Submitted: false,
      Quest2: this.refill
    }
  },
  props: {
    forceEmpty: { type: Boolean, default: false },
    lock: { type: Boolean, default: false },
    refill: { type: Array, default () { return [] } },
    exam: { type: Boolean, default: false },
    question: {
      type: Object,
      default: {
        text: "Question",
        options: { "1": "Option" },
        feedback: {
          right: "<span class='v-right> <strong>Correct!</strong>",
          wrong: "<span class='v-wrong> <strong>Incorrect.</strong>"
        }
      }
    },
    qId: {
      type: String,
      default: "0"
    },
    Answer: {
      type: Array,
      default: function() { return [] }
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
      this.q2Submitted = true
      this.$emit('response', this.Quest2)
    }
  },
  watch: {
    forceEmpty() {
      this.q2Submitted = false
      this.Quest2 = []
    }
  }
}
</script>
<style type="text/css" scoped>
.question {
  margin-top: 1em;
  position: relative;
  display: inline-block;
}
</style>