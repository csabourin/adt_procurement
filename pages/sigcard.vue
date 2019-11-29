<template>
	<span><frenchSignatureCard />
	
	</span>
</template>
<script type="text/javascript">
	import frenchSignatureCard from "~/components/delegationChart/signatureCard_fr"
	import englishSignatureCard from "~/components/delegationChart/signatureCard_en"
	export default{
		components:{
			frenchSignatureCard,
			englishSignatureCard
		}
	}
</script>