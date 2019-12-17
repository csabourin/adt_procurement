<template>
	<h1 class="text-center">{{ $t('sorry') }} {{user}} {{ $t('notFound') }}</h1>
</template>
<script type="text/javascript">
	export default{
		computed:{
			user(){
				return this.$store.state.scorm.name
			}
		}
	}
</script>
<i18n>
{
	"en":{"notFound":"This part is not yet ready!","sorry":"Sorry"},
	"fr":{"notFound":"Cette partie n'est pas encore prête!","sorry":"Désolé"}
}
</i18n>