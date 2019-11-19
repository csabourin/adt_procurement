<template functionnal>
  <a :href="require('~/assets/'+ $i18n.locale +'/'+ filename)" :download="filename" target="_blank">
    <genericFile :iconStyle="iconColor" :iconWidth=size :title="$t(title)" :line1="$t(line1)" :line2="$t(line2)" />
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
    line2: { type: String, default: "" }
  },

  components: {
    genericFile
  }
}

</script>
