<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.24 169.33" :width="iconWidth" :height="iconWidth">
    <title>{{ title }}</title>
    <rect data-name="Rectangle 5194" :class="iconStyle" y="12.42" width="131.57" height="156.9" />
    <rect fill="#fff" x="6.85" y="68.36" width="126.15" height="56" />
    <polyline class="icon3" points="96.19 1.84 96.19 50.25 138.02 50.25" />
    <polygon class="icon3" points="96.62 1.84 5.72 1.84 5.72 161.38 138.06 161.38 138.06 49.18 96.62 1.84" />
    <text class="icon5" transform="translate(20.44 91.92)">{{line1}}</text>
    <text class="icon4" transform="translate(35.4 112.12)">{{line2}}</text>
  </svg>
</template>
<script type="text/javascript">
export default {
  props: {
    line1: {
      type: String,
      default: "Download"
    },
    line2: {
      type: String,
      default: "Télécharger"
    },
    iconStyle: {
      type: String,
      default: "planBackground"
    },
    title: { type: String, default: "" },
    iconWidth: { type: String, default: "50" }

  }
}

</script>
<style scoped>
.Scan360Background {
  fill: #607293;
  opacity: 0.7;
}
.planBackground {
  fill: #608a93;
  opacity: 0.7;
}

.spendBackground {
  fill: #7d677d;
  opacity: 0.7;
}

.reportBackground {
  fill: #986e65;
  opacity: 0.7;
}

.icon3 {
  fill: none;
  stroke: #666;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3.67px;
}

.icon4,
.icon9 {
  font-size: 22px;
}

.icon4,
.icon5 {
  font-family: Roboto-Bold, Roboto;
  font-weight: 700;
}

.icon5 {
  font-size: 20px;
}

.icon6 {
  letter-spacing: -0.01em;
}

.icon7 {
  letter-spacing: 0.01em;
}

.icon8 {
  letter-spacing: -0.11em;
}

</style>
