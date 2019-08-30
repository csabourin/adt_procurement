<template>
	<div>Hello
	<nuxt-link class="NextIcon" :to="localePath('setAvatars')">{{$t('chooseAvatar')}}</nuxt-link>
	</div>
</template>
<script type="text/javascript">
	
</script>

<i18n>
  {
  "en":{
  "chooseAvatar":"Choose your Avatar"
  },
  "fr":{
  "chooseAvatar":"Choisissez un avatar"
  }
  }
</i18n>