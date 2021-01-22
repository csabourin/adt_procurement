<template>
  <fieldset>
  	<legend><strong v-html="$t('instructions')"></strong></legend>
    <b-container fluid style="margin-top: 30px;">
      <b-row>
        <b-col cols="7" lg="6">
          <ul>
            <li class="questions" v-for="(item,index) in this.questionList" :key="'question'+index">
              <div style="flex: 1 1 0;">
                <label :for="'select'+index">{{item[0]}}</label>
                <select :id="'select'+index" v-model="Answered[item[1]]" @change="Submitted[item[1]]=false">
                  <option v-for="(option,index) in AnswerList" :aria-labelledby="index !== 0 ? 'AnswerKey'+(index) : ''" :value="index" :disabled="!index" :selected="index===0">{{option}}</option>
                </select>
              </div>
              <div style="flex: 0 0 auto;">
                <b-button :disabled="!Answered[item[1]] || Submitted[item[1]]" @click="submitAnswer(item[1])">{{(exam)?$t('submitTo'):$t('submit')}}</b-button>
              </div>
              <div style="flex: 0 0 100%; margin-top: 15px;">
                <p v-if="Submitted[item[1]]">
                  <span aria-live="polite" class="v-right" v-if="Answered[item[1]]==parseInt(item[1])+1" > Correct!</span>
                  <span aria-live="polite" class="v-wrong" v-if="Answered[item[1]]!=parseInt(item[1])+1" > Incorrect </span>
                </p>
              </div>
            </li>
          </ul>
        </b-col>
        <b-col cols="5" lg="5" offset-lg="1">
          <ol class="AnswerNums" type="A" :start="index+1">
            <li class="answers" v-for="(item,index) in this.questionList" :key="'answer'+index">
              <p :id="'AnswerKey'+parseInt(index+1)">{{question.dotsRight[index]}}</p>
            </li>
          </ol>
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
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
}
  
.questions > div{
  padding-left: 10px;
  padding-right: 10px;
}
  
@media(max-width: 768px){
  .questions {
    text-align: left;
  }
}

.answer {
  text-align: left;
}

.AnswerNums {}

</style>
