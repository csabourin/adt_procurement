<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="iconWidth" viewBox="0 0 97 97">
  <defs>
    <filter id="Ellipse_363" x="0" y="0" width="97" height="97" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.302"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Language_icon" data-name="Language icon" transform="translate(8.826 5.526)">
    <g transform="matrix(1, 0, 0, 1, -8.83, -5.53)" filter="url(#Ellipse_363)">
      <circle id="Ellipse_363-2" data-name="Ellipse 363" cx="39.5" cy="39.5" r="39.5" transform="translate(9 6)" fill="#fff"/>
    </g>
      <text style="text-transform: uppercase;" id="FR" transform="translate(18.107 23.312)" fill="#000" font-size="24" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="5" y="28">{{displayLang}}</tspan></text>
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
<style scoped>
.cls-1 {
  fill: #2d475d;
}

.cls-2 {
  fill: #122631;
}

.cls-4 {
  fill: #ef9a31;
}

.cls-3 {
  fill: #3e96b0;
}

.cls-5 {
  font-size: 24px;
  fill: #fff;
  font-family: Helvetica-Bold, Helvetica;
  font-weight: 700;
}

</style>
