<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 139.9 169.33" :width="iconWidth" :height="iconWidth">
    <title>{{title}}</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <rect id="Rectangle_5194" data-name="Rectangle 5194" class="cls-1" y="12.42" width="131.57" height="156.9" />
        <polyline class="cls-2" points="96.19 1.84 96.19 50.25 138.02 50.25" />
        <polygon class="cls-2" points="96.62 1.84 5.72 1.84 5.72 161.38 138.06 161.38 138.06 49.18 96.62 1.84" />
        <rect class="cls-3" x="8.08" y="75.36" width="126.15" height="42" />
        <text class="cls-4" transform="translate(10 104.29)">
          <tspan class="cls-5">{{title}}</tspan>
        </text></g>
    </g>
  </svg>
</template>
<script type="text/javascript">
export default {
  props: {
    title: { type: String, default: "" },
    iconWidth: { type: String, default: "128" }
  }
}

</script>
<style scoped>
.cls-1 {
  fill: #608a93;
  opacity: 0.7;
}

.cls-2 {
  fill: none;
  stroke: #666;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3.67px;
}

.cls-3 {
  fill: #fff;
}

.cls-4 {
  font-size: 20px;
  font-family: Roboto-Bold, Roboto;
  font-weight: 700;
}

.cls-5 {
  letter-spacing: -0.02em;
}

</style>
