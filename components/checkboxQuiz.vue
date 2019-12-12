<template>
  <span class="pure-checkbox">
    <strong class="question" v-html="Question.text" />
    <fieldset>
    <legend v-html="$t('checkAll')" />
    <ol type="1">
      <li v-for="(item,index) in Question.options" :key="index"><input @click="q2Submitted=false" type="checkbox" v-model="Quest2" :name="'q'+qId" :id="'checkboxq'+qId+index" :value="index"> <label :for="'checkboxq'+qId+index" v-html="item" /></li>
    </ol>
    <b-button @click="submitAnswer">{{$t('submit')}}</b-button>
    </fieldset>
    <p>&nbsp;</p>
    <p v-if="!isAcceptable(Quest2) && q2Submitted" v-html="$t('pleaseAnswer')"></p>
    <span v-if="isAcceptable(Quest2) && q2Submitted">
      <p v-if="arraysMatch(Quest2,Answer)"><span v-html="Question.feedback.right" /></p>
      <p v-else> <span v-html="Question.feedback.wrong" /></p>
      <p v-if="Quest2 && q2Submitted && Question.conclusion" v-html="Question.conclusion" />
    </span>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      Quest2: [],
      q2Submitted: false
    }
  },
  props: {
    Question: {
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
      default: function () { return [] }
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
        submitAnswer(){
      this.q2Submitted=true
      this.$emit('response',this.Quest2)
    }
  }
}
</script>
<style type="text/css" scoped>
  .question{
    margin-top:1em;
    position:relative;
    display:inline-block;
  }
</style>