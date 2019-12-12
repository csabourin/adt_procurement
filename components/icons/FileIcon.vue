<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.5 41.75" :width="iconWidth" :height="iconWidth">
    <title>{{ title }}</title>
  <g >
      <rect class="cls-1" x="1.1" y="8.05" width="52" height="33" />
      <rect class="cls-2" x="1" y="7.75" width="52.5" height="33" />
      <path class="cls-2" d="M17.5,5.5V3.13A2.14,2.14,0,0,1,19.63,1H34.87A2.14,2.14,0,0,1,37,3.13V5.5" />
      <path class="cls-2" d="M35.92,20.5H47A9.47,9.47,0,0,0,53.43,18" />
      <path class="cls-2" d="M1.08,17.73h0A9.49,9.49,0,0,0,7.77,20.5H18.35" />
      <polygon class="cls-3" points="21.25 16 21.25 19.85 24.3 24.25 30.59 24.25 33.25 19.85 33.25 16 21.25 16" />
      <line class="cls-2" x1="25" y1="19.75" x2="29.5" y2="19.75" />
  </g>
</svg>
</template>
<script type="text/javascript">
export default {
  props: {

    title: { type: String, default: "" },
    iconWidth: { type: String, default: "50" }

  }
}

</script>
 <style scoped>
    .cls-1 {
      fill: #e0e0e0;
    }

    .cls-2 {
      fill: none;
    }

    .cls-2,
    .cls-3 {
      stroke: #666;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2px;
    }

    .cls-3 {
      fill: #fff;
    }

    </style>
