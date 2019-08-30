<template>
  <div class="stairway container">
    <h1>Hello</h1>
    <h1>{{$t('meetTeam')}}</h1>
    <p class="speech-bubble">Hello from {{pickedAvatar}}</p><img :src="avatarPic"><br>
    <!-- <nuxt-link to="setAvatars" class="btn btn-secondary float-left">{{$t('previousPage')}}</nuxt-link> -->
    
    <nuxt-link to="setAvatars" class="btn btn-secondary float-left">{{ $t("goBack") }}</nuxt-link>
  </div>
</template>
<style type="text/css">
.stairway {
  display: block
}

</style>
<script type="text/javascript">
export default {
  data() {
    return {
      pickedAvatar: localStorage.getItem("bossName"),
      avatarPic: localStorage.getItem("AvatarPic")
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "meetTeam":"Meet your team",
  "goBack":"Previous"
  },
  "fr":{
  "meetTeam":"Rencontrez votre équipe",
  "goBack":"Précédent"
  }
  }
</i18n>
