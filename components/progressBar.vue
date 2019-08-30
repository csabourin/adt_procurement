<template>
  <div class="progressBar">
    <div>
      <p class="avatarIcon">
        <b-button variant="light" v-b-modal.modal-1><img :src="avatarPic" width="32"></b-button>
      </p>
      <Star />
      <Star completed="done" />
      <Star />
    </div>
    <div>
      <b-modal v-if="isNotAvatarPage" id="modal-1" title="Avatar">
        <changeavatar />
      </b-modal>
    </div>
  </div>
</template>
<script type="text/javascript">
import Star from '~/components/icons/Star';
import changeavatar from "~/components/avatars_component";
export default {
  components: {
    Star,
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
  float: left;
}

.progressBar {
  padding: 0px 10px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2D475D;
  box-shadow: 0px 3px 6px #000000;
  border-radius: 36px;


}

</style>
