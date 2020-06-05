<template>
  <p class="text-center">
    <a :href="'../jobaidHTML/' + $i18n.locale + '/' + filename" target="_blank" rel="external" aria-aspopup="true" class="external" :title="$t('title')">{{$t('HTMLVersion')}}</a>
  </p>
</template>

<script type="text/javascript">
  
  export default {

    props: {
      filename: { type: String, default: "" },
    },
  }

</script>

<i18n>

  {
    "en":{
      "HTMLVersion": "Web version",
      "title": "Open the web version of this document"
    },
    "fr":{
      "HTMLVersion": "Version web",
      "title": "Ouvrir la version web de ce document"
    }
  }

</i18n>