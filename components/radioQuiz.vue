<template>
	<span>
		<strong v-html="Question.text" />
		<p v-html="$t('selectRight')" />
    <ol type="1">
      <li v-for="(item,index) in Question.options"><input @click="q1Submitted=false" type="radio" v-model="Quest1" :name="'q'+qId" :id="'radioq'+qId+index" :value="index"> <label :for="'radioq'+qId+index">{{item}}</label></li>
    </ol>
    <p v-if="!Quest1 && q1Submitted" v-html="$t('pleaseAnswer')"></p>
    <p v-if="Quest1 && q1Submitted" v-html="Question.feedback[Quest1]" />
    <b-button @click="q1Submitted=true">{{$t('submit')}}</b-button>
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
				default:{
					text:"Question",
					options:{"1":"Option"},
					feedback:{"1":"Feedback"}
				}
			},
			qId:{
				type:String,
				default:"0"
			}
		}
	}
</script>