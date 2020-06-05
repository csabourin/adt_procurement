<template functionnal>
  <a :href="require('~/assets/'+ $i18n.locale +'/'+ filename)" :download="filename" target="_blank" rel="external" aria-aspopup="true">
    <genericFile :iconStyle="iconColor" :iconWidth=size :title="$t(title)" :line1="$t(line1)" :line2="$t(line2)" />
    <span v-html="$t(lineTag)"></span>
  </a>
</template>
<script type="text/javascript">
import genericFile from "~/components/icons/genFileIcon"
export default {
  props: {
    size: { type: String, default: "64" },
    iconColor: { type: String, default: "planBackground" },
    filename: { type: String, default: "" },
    title: { type: String, default: "" },
    line1: { type: String, default: "" },
    line2: { type: String, default: "" },
    lineTag: { type: String, default: "" }
  },

  components: {
    genericFile
  }
}

</script>

<style scoped>

  a{
    text-decoration: underline;
    color: black;
  }
  
  a:hover, a:focus{
    text-decoration: none;
  }

</style>