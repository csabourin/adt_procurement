<template>
	<span>
		<span v-if="$i18n.locale=='fr'"><frenchDelegation /></span>
		<span v-if="$i18n.locale=='en'"><englishDelegation /></span>
	</span>
</template>
<script type="text/javascript">
	import frenchDelegation from "~/components/delegationChart/delegchart_fr"
	import englishDelegation from "~/components/delegationChart/delegchart_en"
	export default{
		components:{
			frenchDelegation,
			englishDelegation
		}
	}
</script>