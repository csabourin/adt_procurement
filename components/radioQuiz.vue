<template>
	<span>
		<strong v-html="Question.text" />
    <ul class="list-unstyled">
      <li v-for="(item,index) in Question.options"><input type="radio" v-model="Quest1" :name="'q'+QNumber" :id="'radioq'+QNumber+index" :value="index"> <label :for="'radioq'+QNumber+index">{{item}}</label></li>
    </ul>
    <p v-if="Quest1" v-html="Question.feedback[Quest1]" />
	</span>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				Quest1:''
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
			QNumber:{
				type:String,
				default:"0"
			}
		}
	}
</script>