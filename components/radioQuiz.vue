<template>
  <span class="pure-radiobutton">
    <fieldset tabindex="0" style="margin-bottom: 15px;">
      <legend><strong class="question" v-html="question.text" /></legend>
      <p v-html="$t('selectRight')" />
      <ol type="1">
        <li v-for="(item,index) in question.options" :key="index">
          <input :disabled="lock" @click="q1Submitted=false" type="radio" v-model="Quest1" :name="'q'+qId" :id="'radioq'+qId+index" :value="index"><label :for="'radioq'+qId+index" v-html="item" /></li>
      </ol>
      <b-button :disabled="q1Submitted || lock || !Quest1" @click="submitAnswer">{{(exam)?$t('submitTo'):$t('submit')}}</b-button>
    </fieldset>
    <!--<p aria-live="polite" v-if="!Quest1 && q1Submitted" v-html="$t('pleaseAnswer')"></p>--> <!-- What is that? @Davyd-Kristopher -->
    <div aria-live="polite">
      <p tabindex="0" v-if="Quest1 && q1Submitted" v-html="question.feedback[Quest1]" style="margin-bottom: 20px;" />
      <p tabindex="0" v-if="Quest1 && q1Submitted && question.conclusion" v-html="question.conclusion" style="margin-bottom: 20px;" />
    </div>
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
    question: {
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
  width: 100%;
}

</style>
