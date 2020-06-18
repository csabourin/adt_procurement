<template>
  <span>
    <i18n path="genSentence">
    <span v-for="hole in numHoles">
    <label class="v-inv" :for="'q'+hole"> {{$t('label')}}</label>
    <select v-model="Q[hole]" :id="'q'+hole">
      <option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(term,index) in termList" :key="index" :value="index" v-html="term" />
    </select>
    </span>
    </i18n>
    <p>{{Q}}</p>
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
	mounted(){
		this.$i18n.setLocaleMessage(this.$i18n.locale, {genSentence:this.sentence})
	},
  props: {
    numHoles:{type:Number,
    	default:4},
    sentence: {
      type: String,
      default: `Empty {0}{1} and {2}{3} here`
    },
    termList: {
      type: Object,
      default: () => { return { "0": "Empty" } }
    }
  },
  data() {
    return {
      var1: "blue",
      Q: [],
      q1Submit: true
    }
  }
}

</script>
<i18n>
  {
  "en": {
  "qDisabled": "Choose",
  "label": "Select an option to complete the sentence"
  },
  "fr": {
  "qDisabled": "Choisissez",
  "label": "Sélectionnez une option pour compléter la phrase"
  }
  }
</i18n>
