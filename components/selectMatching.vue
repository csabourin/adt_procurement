<template>
  <span>
  	<p><strong>{{Question.text}}</strong></p>
    <b-container>
      <b-row v-for="(option,index) in Question.options" :key="index">
        <b-col v-html="option" />
        <b-col><select v-model="form.selectId[index]" @change="submitted=false">
            <option disabled value="">{{$t('qDisabled')}}</option>
            <option :value="oIndex" v-for="(match, oIndex) in Question.matching">{{match}}</option>
          </select></b-col>
      </b-row>
    </b-container>
    <div>
      <span v-if="submitted">
        <div v-if="arraysMatch(form.selectId , adjustArray(matches))" v-html="Question.feedback.right"/>
        <div v-else v-html="Question.feedback.wrong" />
      </span>
    </div>
    <br>
    <b-button @click="submitted=true">{{$t('submit')}}</b-button>
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
    matches: {
      type: Array,
      default: function() { return [] }
    }
  },
  data() {
    return {
    	goodAnswer:["1","2","3","4"],
      submitted: false,
      form: {
        selectId: ["0"]
      }

    }
  },
  
  methods: {
    arraysMatch(arr1, arr2) {
      if (arr1.length !== arr2.length) return false
      const arrayOne = arr1.concat()
      for (let i in arrayOne) {
        if (arrayOne[i] !== arr2[i]) return false
      }
      return true


    },
    adjustArray(arr1){
  		const arr2=arr1.concat()
  		arr2.unshift("0")
  		return arr2
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
