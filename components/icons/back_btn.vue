<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 106 106":width="iconWidth">
        <title>{{iconTitle}}</title>
  <defs>
    <filter id="Ellipse_366" x="0" y="0" width="106" height="106" filterUnits="userSpaceOnUse">
      <feOffset dx="6" dy="6" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="4.5" result="blur"/>
      <feFlood flood-opacity="0.302"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Back_btn" data-name="Back btn" transform="translate(7.907 7.026)">
    <g transform="matrix(1, 0, 0, 1, -7.91, -7.03)" filter="url(#Ellipse_366)">
      <circle id="Ellipse_366-2" data-name="Ellipse 366" cx="39.5" cy="39.5" r="39.5" transform="translate(7.5 7.5)" fill="#fff"/>
    </g>
    <g id="Home_icon" data-name="Home icon" transform="translate(5.958 5.958)">
      <g id="Group_2798" data-name="Group 2798" transform="translate(0 0)">
        <g id="Group_2788" data-name="Group 2788">
          <g id="Group_8531" data-name="Group 8531">
            <ellipse id="Ellipse_181-2" data-name="Ellipse 181-2" cx="33.607" cy="34.107" rx="33.607" ry="34.107" fill="#4a97a8"/>
          </g>
          <path id="Path_9829" data-name="Path 9829" d="M74.035-255.093l-15.985,5.448.725,13.761-14.81,6.439,30.859,18.329c10.908-3.679,19.014-15.033,20.293-26.844Z" transform="translate(-28.22 276.133)" fill="#317077"/>
        </g>
      </g>
    </g>
    <g id="Group_8572" data-name="Group 8572" transform="translate(10.586 18.331)">
      <path id="Path_18903" data-name="Path 18903" d="M335.616,37.411h21.472v.014c.1-.007.2-.014.3-.014a4.054,4.054,0,0,1,4.131,3.973V68.4h-.029a4.059,4.059,0,0,0-3.747-3.5v-.016H335.616v7.492L313.658,51.033l21.958-21.341Z" transform="translate(-313.658 -29.692)" fill="#c47606" stroke="#fff" stroke-width="2"/>
      <path id="Path_18904" data-name="Path 18904" d="M377.211,88.213a3.973,3.973,0,0,1-3.973,3.973h-7.946V84.24h7.946A3.973,3.973,0,0,1,377.211,88.213Z" transform="translate(-329.353 -48.633)" fill="#955c1f" stroke="#fff" stroke-width="2"/>
    </g>
  </g>
</svg>
</template>
<script type="text/javascript">
export default {
  data() {
    return { HomeBottomButton: "String" }
  },
  props:{
    iconWidth:Number,
    iconTitle:String
  }
}

</script>