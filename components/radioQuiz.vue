<template>
  <span class="pure-radiobutton">
    <fieldset>
      <legend><strong class="question" v-html="Question.text" /></legend>
      <p v-html="$t('selectRight')" />
      <ol type="1">
        <li v-for="(item,index) in Question.options" :key="index">
          <input :disabled="lock" @click="q1Submitted=false" type="radio" v-model="Quest1" :name="'q'+qId" :id="'radioq'+qId+index" :value="index">&nbsp;<label :for="'radioq'+qId+index" v-html="item" /></li>
      </ol>
      <b-button :disabled="q1Submitted || lock" @click="submitAnswer">{{(exam)?$t('submitTo'):$t('submit')}}</b-button>
    </fieldset>
    <p>&nbsp;</p>
    <p v-if="!Quest1 && q1Submitted" v-html="$t('pleaseAnswer')"></p>
    <p v-if="Quest1 && q1Submitted" v-html="Question.feedback[Quest1]" />
    <p v-if="Quest1 && q1Submitted && Question.conclusion" v-html="Question.conclusion" />
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      q1Submitted: false,
      Quest1: this.refill

    }
  },

  props: {
    forceEmpty:{type:Boolean, default:false},
    lock:{type:Boolean, default:false},
    refill: {      type: String,      default: undefined    },
    exam: { type: Boolean, default: false },
    Question: {
      type: Object,
      default: function() {
        return {
          text: "Question",
          options: { "1": "Option" },
          feedback: { "1": "Feedback" },
          conclusion: ""
        }
      }
    },
    qId: {
      type: String,
      default: "0"
    }
  },
  methods: {
    submitAnswer() {
      this.q1Submitted = true
      if (this.Quest1 != '') {
        this.$emit('response', this.Quest1)
      }
    }
  },
  watch:{
    forceEmpty(){
      this.q1Submitted = false
      this.Quest1=undefined
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
