<template>
  <span>
    <fieldset>
      <legend>
        <p><strong class="question">{{question.text}}</strong></p>
      </legend>
      <b-container>
        <b-row v-for="(option,index) in question.options">
          <b-col>
            <label v-html="option" :for="exId + '_q' + index"></label>
          </b-col>
          <b-col>
            <select v-model="selectId[index - 1]" @change="submitted[index - 1] = false" :id="exId + '_q' + index">
              <option disabled value="">{{$t('qDisabled')}}</option>
              <option :value="oIndex" v-for="(match, oIndex) in question.matching">{{match}}</option>
            </select>
          </b-col>
          <b-col>
            <b-button @click="submitAnswer(index - 1)" :disabled="!selectId[index - 1] || submitted[index - 1]">{{$t('submit')}}</b-button>
          </b-col>
          <b-col>
            <span>
              <div v-if="selectId[index - 1] == match[index - 1] && submitted[index - 1]" v-html="question.feedback.right"/>
              <div v-else-if="submitted[index - 1]" v-html="question.feedback.wrong" />
            </span>
          </b-col>
        </b-row>
      </b-container>
      <div></div>
    </fieldset>
  </span>
</template>
<script type="text/javascript">
export default {
  props: {
    question: {
      type: Object,
      default: {
      	text:"Question",
        options: { "1": "option" },
        matching: { "1": "option" },
        feedback: { "wrong": "<span class='v-wrong' />", "right": "<span class='v-right' />" },
      }
    },
    match: {
      type: Array,
      default: []
    },
    exId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      submitted: [],
      selectId: []
    }
  },
  
  methods: {
    submitAnswer(index){
      this.$set(this.submitted, index, true);
      
      var allResponded = true;
      for (var i = 0; i < Object.keys(this.question.options).length; i++){
        if(!this.selectId[i]){
          allResponded = false;
        }
      }
      if(!Object.keys(this.question.options).length){
        allResponded = false;
      }
      
      if(allResponded){
        this.$emit('response', this.selectId);
      }
    },
  }
}

</script>
<i18n>
  {"en":{"qDisabled":"Select matching value"},"fr":{"qDisabled":"Sélectionner la valeur correspondante"}}
</i18n>
<style type="text/css" scoped>
  .row{
    margin-bottom: 1em;
  }
  .question{
    margin-top: 1em;
    position: relative;
    display: inline-block;
  }
</style>
