<template>
<svg
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 658 655"
   :width="size"
   :height="size"
   id="svg6855"
>
  <defs
     id="defs6859">
    <filter
       style="color-interpolation-filters:sRGB;"
       inkscape:label="Drop Shadow"
       id="DropShadow">
      <feFlood
         flood-opacity="0.498039"
         flood-color="rgb(0,0,0)"
         result="flood"
         id="feFlood8307" />
      <feComposite
         in="flood"
         in2="SourceGraphic"
         operator="in"
         result="composite1"
         id="feComposite8309" />
      <feGaussianBlur
         in="composite1"
         stdDeviation="4"
         result="blur"
         id="feGaussianBlur8311" />
      <feOffset
         dx="7"
         dy="7"
         result="offset"
         id="feOffset8313" />
      <feComposite
         in="SourceGraphic"
         in2="offset"
         operator="over"
         result="composite2"
         id="feComposite8315" />
    </filter>
      <filter
       inkscape:menu-tooltip="In and out glow with a possible offset and colorizable flood"
       inkscape:menu="Shadows and Glows"
       inkscape:label="Cutout Glow"
       style="color-interpolation-filters:sRGB;"
       id="InsetFilter">
      <feOffset
         dy="3"
         dx="3"
         id="feOffset8355" />
      <feGaussianBlur
         stdDeviation="3"
         result="blur"
         id="feGaussianBlur8357" />
      <feFlood
         flood-color="rgb(0,0,0)"
         flood-opacity="1"
         result="flood"
         id="feFlood8359" />
      <feComposite
         in="flood"
         in2="SourceGraphic"
         operator="in"
         result="composite"
         id="feComposite8361" />
      <feBlend
         in="blur"
         in2="composite"
         mode="normal"
         id="feBlend8363" />
    </filter>
  </defs>

  <circle
     style="fill:#f4f4f4;"
     id="path8010"
     cx="327.7"
     cy="327.69"
     r="328.68" />
  <path
     d="M -1,-1 H 2157 V 1397 H -1 Z"
     id="path6839"
     inkscape:connector-curvature="0"
     style="fill:none"
     transform="translate(-28.317,-22.931)" />
  <g
     id="g6853"
     transform="translate(-28.317,-22.931)">
    <g
       id="g8008">
      <path
         style="fill:#ff0000;filter:url(#InsetFilter)"
         d="M 216.83,66.111 C 149.43,99.627 96.124,156.04 66.473,225.23 l 84.297,36.12 c 21.09,-49.2 58.96,-89.29 106.9,-113.12 z"
         id="path6841"
         inkscape:connector-curvature="0"
         transform="rotate(3.9858,358.09,350.6)" />
      <path
         style="fill:#ffcc00;filter:url(#InsetFilter)"
         d="m 364.03,32.984 c -48.44,-0.903 -96.85,9.29 -141.36,30.297 l 39.14,82.939 C 312.46,122.31 370.15,118.1 423.74,134.4 L 450.42,46.656 C 422.17,38.063 393.09,33.527 364.03,32.984 Z"
         id="path6843"
         inkscape:connector-curvature="0"
         transform="rotate(3.9858,358.09,350.6)" />
      <path
         style="fill:#44aa00;filter:url(#InsetFilter)"
         d="M 455.16,48.129 427.1,135.44 c 51.52,16.56 95.35,51.05 123.54,97.24 L 628.92,184.9 C 589.28,119.96 527.6,71.404 455.16,48.129 Z"
         id="path6845"
         inkscape:connector-curvature="0"
         transform="rotate(3.9858,358.09,350.6)" />
      <path
         style="fill:none;stroke:#4d4d4d;stroke-width:3.78;stroke-linejoin:round"
         transform="rotate(3.4681,357.63,337.77)"
         inkscape:connector-curvature="0"
         id="path6847"
         d="M 65.825,225.76 C 8.203,362.18 52.989,520.98 173.39,607.19 a 316.68,316.68 0 0 0 47.05,27.89 c 113.71,54.73 251.95,37.24 348.71,-48.95 110.58,-98.5 138.26,-261.16 66.49,-390.7" />
    </g>
      <g
       id="g8219"
       style="filter:url(#DropShadow)"><path
    style="fill:#4d4d4d;"
       d="m 360,150 -20.85,68.43 17.48,-16.88 -2.74,156.6 c -3.97,1.01 -6.95,4.57 -7.02,8.87 -0.1,5.14 4.01,9.39 9.16,9.48 5.15,0.1 9.39,-4.02 9.48,-9.16 0.1,-4.29 -2.77,-7.95 -6.7,-9.1 l 2.73,-156.61 16.9,17.49 z"
       :transform="'rotate('+angle+',356,368)'"
       id="gaugeArrow"
        />
      </g>
  </g>
</svg>
</template>
<script>
  export default{
    props:{
      angle:{type:Number,default:0},
      size:{type:String,default:"200px"}
    }
  }
  
</script>