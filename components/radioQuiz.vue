<template>
	<span class="pure-radiobutton">
		<strong v-html="Question.text" />
		<p v-html="$t('selectRight')" />
    <ol type="1">
      <li v-for="(item,index) in Question.options" :key="index"><input @click="q1Submitted=false" type="radio" v-model="Quest1" :name="'q'+qId" :id="'radioq'+qId+index" :value="index">&nbsp;<label :for="'radioq'+qId+index" v-html="item" /></li>
    </ol>
    <p v-if="!Quest1 && q1Submitted" v-html="$t('pleaseAnswer')"></p>
    <p v-if="Quest1 && q1Submitted" v-html="Question.feedback[Quest1]" />
    <p v-if="Quest1 && q1Submitted && Question.conclusion" v-html="Question.conclusion" />
    <b-button @click="submitAnswer">{{$t('submit')}}</b-button>
	</span>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				Quest1:'',
				q1Submitted:false
			}
		},
		props:{
			Question:{
				type:Object,
				default: function(){ return{
					text:"Question",
					options:{"1":"Option"},
					feedback:{"1":"Feedback"},
					conclusion:""
				}}
			},
			qId:{
				type:String,
				default:"0"
			}
		},
		methods:{
        submitAnswer(){
      this.q1Submitted=true
      this.$emit('response',this.Quest1)
    }
		}
	}
</script>