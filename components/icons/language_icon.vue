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
    <g id="Group_8566" data-name="Group 8566" transform="translate(5.958 5.958)">
      <g id="Group_8565" data-name="Group 8565" transform="translate(0 0)">
        <ellipse id="Ellipse_353" data-name="Ellipse 353" cx="33.609" cy="34.109" rx="33.609" ry="34.109" fill="#2d475d"/>
        <path id="Path_18899" data-name="Path 18899" d="M41.2-79.332,62.541-61.275a33.291,33.291,0,0,0,28.917-33c0-.168,0-.335-.006-.5L66.6-109.673Z" transform="translate(-24.533 128.917)" fill="#122631"/>
        <path id="Path_18900" data-name="Path 18900" d="M50.556-79.223H69.775l7.988,6.241.5-6.241h2.246a2,2,0,0,0,2-2v-19.219a2,2,0,0,0-2-2H50.556a2,2,0,0,0-2,2V-81.22A2,2,0,0,0,50.556-79.223Z" transform="translate(-26.411 126.696)" fill="#ef9a31"/>
        <path id="Path_18901" data-name="Path 18901" d="M70.892-102.923H56.321L48.559-87.777v.709l14.363,7.359h6.853l7.988,6.24.5-6.24h2.246a2,2,0,0,0,2-2V-96.973Z" transform="translate(-26.411 126.811)" fill="#ef9a31"/>
        <path id="Path_18902" data-name="Path 18902" d="M67.773-87.6H48.553l-7.987,6.24-.5-6.24H37.821a2,2,0,0,1-2-2v-19.22a2,2,0,0,1,2-2H67.773a2,2,0,0,1,2,2V-89.6A2,2,0,0,1,67.773-87.6Z" transform="translate(-23.161 128.669)" fill="#3e96b0"/>
      </g>
      <text style="text-transform: uppercase;" id="FR" transform="translate(18.107 23.312)" fill="#fff" font-size="18" font-family="Arial-BoldMT, Arial" font-weight="700"><tspan x="0" y="16">{{displayLang}}</tspan></text>
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
