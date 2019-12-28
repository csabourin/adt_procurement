<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="iconWidth"  :height="iconWidth" viewBox="0 0 97 97">
<title :lang="displayLang">{{ iconTitle }}</title>
  <g data-name="Language icon" transform="translate(8.826 5.526)">
      <text style="text-transform: uppercase;" :lang="displayLang" transform="translate(18.107 23.312)" fill="#000" font-size="24" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="5" y="28">{{displayLang}}</tspan></text>
    </g>
  </g>
</svg>
</template>
<script type="text/javascript">
export default {
  props: {
    iconWidth: { type: [Number, String], default: 50 },
    iconTitle: String,
    displayLang: { type: String, default: "en" }
  }

}

</script>