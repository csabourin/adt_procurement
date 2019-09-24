<template>
  <div class="progressBar">
    <div>
      <span class="avatarIcon">
        <b-button variant="light" v-b-modal.modalone><img :src="avatarPic" width="32"></b-button>
      </span>
    </div>
    <div>
      <b-modal id="modalone" title="Avatar">
        <changeavatar />
      </b-modal>
    </div>
  </div>
</template>
<script type="text/javascript">
import changeavatar from "~/components/avatars_component";
export default {
  components: {
    changeavatar

  },
  computed: {
    avatar() { return this.$store.state.avatar.name },
    avatarPic() { return this.$store.state.avatar.pic },
    isNotAvatarPage() { const thisPath = this.$route.path; return thisPath.indexOf('setAvatars') < 0 }
  },


}

</script>
<style type="text/css" scoped>
.avatarIcon {
  padding: 0;
  overflow: hidden;
}

.progressBar {
  
  padding: 0px 0px 0px 0px;
  background-color: #fff;
  /*box-shadow: 0px 3px 6px rgba(0, 0, 0, .25);*/
  border-radius: 36px;


}

</style>
