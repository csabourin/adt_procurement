<template>
  <span>
  	<p><strong>{{Question.text}}</strong></p>
    <b-container>
      <b-row v-for="(option,index) in Question.options" :key="index">
        <b-col v-html="option" />
        <b-col><select v-model="selectId" @change="submitted=false">
            <option disabled value="">{{$t('qDisabled')}}</option>
            <option :value="oIndex" v-for="(match, oIndex) in Question.matching">{{match}}</option>
          </select></b-col>
          <b-col><b-button @click="submitAnswer">{{$t('submit')}}</b-button></b-col><b-col>
      <span v-if="submitted">
        <div v-if="selectId == match" v-html="Question.feedback.right"/>
        <div v-else v-html="Question.feedback.wrong" />
      </span>
    </b-col>
      </b-row>
    </b-container>
    <div></div>
  </span>
</template>
<script type="text/javascript">
export default {
  props: {
    Question: {
      type: Object,
      default: {
      	text:"Question",
        options: { "1": "option" },
        matching: { "1": "option" },
        feedback: { "wrong": "<span class='v-wrong' />", "right": "<span class='v-right' />" },
      }
    },
    match: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      submitted: false,
      selectId: ""
      

    }
  },
  
  methods: {
     submitAnswer(){
      this.submitted=true
      this.$emit('response',this.selectId)
    }

  }
}

</script>
<i18n>
  {"en":{"qDisabled":"Select matching value"},"fr":{"qDisabled":"Sélectionner la valeur correspondante"}}
</i18n>
<style type="text/css" scoped>
  .row{
    margin:1em;
  }
</style>
