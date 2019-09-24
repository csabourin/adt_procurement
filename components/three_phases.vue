<template>
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 792">
    <defs>
      <linearGradient id="linear-gradient" x1="-677.81" y1="1129.77" x2="-678.32" y2="1130.37" gradientTransform="matrix(397.02, 0, 0, -327.52, 269574.36, 370393.27)" gradientUnits="userSpaceOnUse">
        <stop offset="0" />
        <stop offset="0.01" stop-color="#000101" />
        <stop offset="0.19" stop-color="#101a22" />
        <stop offset="0.38" stop-color="#1d2d3c" />
        <stop offset="0.57" stop-color="#253b4e" />
        <stop offset="0.78" stop-color="#2b4459" />
        <stop offset="1" stop-color="#2d475d" />
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="-677.62" y1="1130.3" x2="-677.9" y2="1129.67" gradientTransform="matrix(246.92, 0, 0, -442.78, 167559.07, 500677.35)" gradientUnits="userSpaceOnUse">
        <stop offset="0" />
        <stop offset="0.02" stop-color="#020404" />
        <stop offset="0.19" stop-color="#173036" />
        <stop offset="0.37" stop-color="#29555f" />
        <stop offset="0.54" stop-color="#37727e" />
        <stop offset="0.71" stop-color="#418695" />
        <stop offset="0.86" stop-color="#4792a3" />
        <stop offset="1" stop-color="#4a97a8" />
      </linearGradient>
      <linearGradient id="linear-gradient-3" x1="-678.48" y1="1130.11" x2="-677.79" y2="1130.36" gradientTransform="matrix(401.74, 0, 0, -281.78, 272771.43, 318919.06)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#b44141" />
        <stop offset="0.18" stop-color="#993737" />
        <stop offset="0.56" stop-color="#551e1e" />
        <stop offset="1" />
      </linearGradient>
    </defs>
    <title>{{plan}} {{spend}} {{report}}</title>
    <g id="_3_phase_graphic" data-name=" 3 phase graphic">
      <g id="Group_6879" data-name="Group 6879">
        <ellipse id="Ellipse_259-2" data-name="Ellipse 259-2" class="cls-1" cx="306" cy="357.33" rx="179.93" ry="181.2" />
        <g id="Group_6878" data-name="Group 6878">
          <g id="Group_6877" data-name="Group 6877">
            <path id="Path_13817" data-name="Path 13817" class="cls-2" d="M260.93,208.2c29.65,6.44,45.07,35.31,45.07,35.31l98.58,170.74h0s32.7,1.08,53.1-21.38c23.84-26.25,20.95-60.16,20.95-60.16h0A174.39,174.39,0,0,0,198.36,220.14h0S226.29,200.68,260.93,208.2Z" />
            <path id="Path_13818" data-name="Path 13818" class="cls-3" d="M199.39,470.93c-9.25-28.9,8-56.68,8-56.68h0L306,243.51s-15.42-28.87-45.07-35.31c-34.64-7.52-62.57,11.94-62.57,11.94h0a174.41,174.41,0,0,0,42.62,299l0,0S210.19,504.7,199.39,470.93Z" />
            <path id="Path_13819" data-name="Path 13819" class="cls-4" d="M478.63,332.71s2.89,33.91-20.95,60.15c-20.4,22.47-53.1,21.38-53.1,21.38H207.42s-17.29,27.79-8,56.69c10.8,33.76,41.61,48.22,41.61,48.22l0,0A174.47,174.47,0,0,0,480.37,357.33a176.35,176.35,0,0,0-1.73-24.62Z" />
          </g>
          <g id="PLAN" class="cls-5"><text class="cls-6" transform="matrix(0.5, -0.87, 0.87, 0.5, 190.27, 360.92)">{{$t('plan')}}</text></g>
          <g id="SPEND" class="cls-5"><text class="cls-7" transform="matrix(0.51, 0.86, -0.86, 0.51, 360.71, 244.83)">{{$t('spend')}}</text></g>
          <g id="REPORT" class="cls-5"><text class="cls-8" transform="translate(239.35 483.7)">{{$t('report')}}</text></g>
        </g>
      </g>
    </g>
  </svg>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      plan: "Plan",
      spend: "Spend",
      report: "Report"
    }
  }
}

</script>
<i18n>
  {
  "en":{
  "plan":"Plan",
  "spend":"Spend",
  "report":"Report"
  },
  "fr":{
  "plan":"Planification",
  "spend":"Dépenses",
  "report":"Rapports"
  }
  }
</i18n>
<style type="text/css" scoped>
.cls-1,
.cls-6,
.cls-7,
.cls-8 {
  fill: #fff;
}

.cls-2 {
  fill: url(#linear-gradient);
}

.cls-3 {
  fill: url(#linear-gradient-2);
}

.cls-4 {
  fill: url(#linear-gradient-3);
}

.cls-5,
.cls-6,
.cls-7,
.cls-8 {
  isolation: isolate;
}

.cls-6 {
  font-size: 34.6px;
}

.cls-6,
.cls-7,
.cls-8 {
  font-family: Helvetica;
}

.cls-7 {
  font-size: 31.08px;
}

.cls-8 {
  font-size: 34.6px;
}

.cls-9 {
  letter-spacing: -0.02em;
}

</style>
