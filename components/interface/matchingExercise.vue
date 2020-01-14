<template>
  <fieldset>
  	<legend><strong v-html="$t('instructions')"></strong></legend>
    <b-container fluid>
    	<p>&nbsp;</p>
      <b-row v-for="(item,index) in this.questionList" :key="'row0'+index">
        <b-col cols="5" >
          <ul>
            <li class="questions" >
              <p><label :for="'select'+index">{{item[0]}}</label> <select :id="'select'+index" v-model="Answered[item[1]]">
                  <option v-for="(option,index) in AnswerList" :aria-labelledby="'AnswerKey'+(index)" :value="index" :disabled="!index" :selected="index===0">{{option}}</option>
                </select></p>
            </li>
          </ul>
        </b-col>
        <b-col cols="4">
          <ol class="AnswerNums" type="A" :start="index+1">
            <li class="answers"><p :id="'AnswerKey'+parseInt(index+1)">{{question.dotsRight[index]}}</p></li>
          </ol>
        </b-col>
        <b-col>
        	<b-button style="float:left" :disabled="!Answered[item[1]]" @click="submitAnswer(item[1])">{{(exam)?$t('submitTo'):$t('submit')}}</b-button>
        	<p v-if="Submitted[item[1]]"> <span class="v-right" v-if="Answered[item[1]]==parseInt(item[1])+1" > Correct!</span>
    	<span class="v-wrong" v-if="Answered[item[1]]!=parseInt(item[1])+1" > Incorrect </span>
    </p>
        </b-col>
      </b-row>
    </b-container>
  </fieldset>
</template>
<script type="text/javascript">

	// Generate an array the same amount of answers with letters
function genCharArray(charA, num) {  var a = [" "],    i = charA.charCodeAt(0),    j = charA.charCodeAt(0) + num
  for (; i <= j; ++i) {    a.push(String.fromCharCode(i))  }
  return a
}
export default {
  data() {
    return {
      Answered: {},
      Submitted: {}
    }
  },
  props: {
    qId: {      type: String,      default: Math.random() * 10    },
    exam: { type: Boolean, default: false },
    question: {
      type: Object,
      default: function() { return { "dotsLeft": ["q1", "q2", "q3"], "dotsRight": ["a1", "a2", "a3"] } }
    },
    correctAnswer: {
      type: Array,
      default: function() {
        var tmpArray = []
        for (let i in this.question.dotsLeft) {
          let j = String(Number(i) + 1)
          tmpArray.push(j)
        }
        return tmpArray
      }
    }
  },
  computed: {
    AnswerList() {
      const quant = this.correctAnswer.length - 1
      return genCharArray('A', quant)
    },
    questionList() {
      var list = []
      for (let a in this.question.dotsLeft) {
        list.push([this.question.dotsLeft[a], a])
      }
      return list.sort(() => Math.random() - 0.5)
    }
  },
  methods:{
  	submitAnswer(item){
  		this.Submitted[item]=true
  		this.$forceUpdate()
  	}
  }
}

</script>
<i18n>
  {
  "en":{
  "instructions":"Match the items on the left with the corresponding answer to the right.",
  "incomplete":"Please answer every questions"
  },
  "fr":{
  "instructions":"Associez les items de gauche avec leur réponse correspondante à droite.",
  "incomplete":"Veuillez répondre à chaque question."
  }
  }
</i18n>
<style type="text/css" scoped>
label {
  display: inline
}

ul,
ol {
  /*display: flex;*/
  height: 100%;
  /*justify-content: space-around;*/
  /*flex-direction: column;*/
}

.questions,
.answers {
  margin-bottom: 1em;
}

.questions {
  text-align: right;
  list-style: none;
}

.answer {
  text-align: left;
}

.AnswerNums {}

</style>
