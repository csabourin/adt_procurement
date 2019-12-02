<template>
  <span>
  <input id="openMe" type="checkbox" v-model="open" /> <LABEL for="openMe">Check me to open the chart</LABEL>
  <WindowPortal v-model="open">
     <delegChart />
  </WindowPortal>

  </span>
</template>

<script>
  import WindowPortal from "~/components/newWindow"
  import delegChart from "~/components/delegationChart/delegchart_en"
export default {
 data(){
  return{
    open:false
  }
 },
 components:{
  WindowPortal,
  delegChart
 }
}
</script>
<style scoped>
/*! CSS Used from: https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/WET/css/theme.css */
.wb-inv,
.wb-sl {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
}

body {
  margin: 0;
}

footer,
header,
main {
  display: block;
}

a {
  background-color: transparent;
}

a:active,
a:hover {
  outline: 0;
}

strong {
  font-weight: bold;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

img {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

@media print {

  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: " ("attr(href) ")";
  }

  a[href^="#"]:after {
    content: "";
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  img {
    max-width: 100% !important;
  }

  p {
    orphans: 3;
    widows: 3;
  }
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.4375;
  color: #333333;
  background-color: #FFF;
}

a {
  color: #295376;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #0535d2;
  text-decoration: underline;
}

a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

img {
  vertical-align: middle;
}

h1 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

h1 {
  margin-top: 23px;
  margin-bottom: 11.5px;
}

h1 {
  font-size: 34px;
}

p {
  margin: 0 0 11.5px;
}

.text-left {
  text-align: left;
}

.text-uppercase {
  text-transform: uppercase;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 11.5px;
}

ol ol {
  margin-bottom: 0;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.container:before,
.container:after {
  content: " ";
}

/*! CSS Used from: https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/theme/theme.css */
body {
  background-color: white;
}

header {
  background-color: #B9E5FB;
}

header .container {
  position: relative;
  min-height: 100px;
}

header .container img {
  position: absolute;
  bottom: -65px;
  right: 0;
}

@media (max-width: 767px) {
  header .container img {
    width: 100px;
    height: 100px;
    bottom: -50px;
  }
}

main {
  margin-top: 37px;
  margin-bottom: 40px;
}

footer {
  position: fixed;
  display: block;
  height: 40px;
  width: 100%;
  bottom: 0;
  background-color: white;
}

footer .container {
  display: block;
  margin-top: 7px;
  background: white;
}

footer .container .fip {
  margin-top: 2px;
}

@media (max-width: 767px) {
  footer .container {
    width: calc(100% - 30px);
  }
}

@media (max-width: 767px) {
  footer {
    border-top: thin solid #eee;
  }
}

@media print {

  body,
  #dynamic_content {
    height: 100%;
  }

  body {
    position: relative;
  }

  header {
    background-color: #B9E5FB !important;
  }

  header .container {
    min-height: 75px;
  }

  main {
    margin-top: 15px;
  }

  header .container img {
    width: 75px;
    height: 75px;
    bottom: unset;
    top: 37.5px;
  }

  footer {
    border-top: none;
    bottom: 0;
    position: static;
  }
}

body {
  background-color: #fff;
  color: #231f20;
  font-family: "Gotham Book", "Helvetica Neue", "Helvetica", "Myriad Pro", "Arial", "sans-serif";
  font-size: 14px;
  line-height: 1.4375;
  overflow-y: auto;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-collapse: collapse;
  border-spacing: 0;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.vertical-align {
  vertical-align: middle !important;
}

strong {
  font-family: "Gotham Bold", "Gill Sans", "Gill Sans MT", "Calibri", "sans-serif";
}

body {
  width: 100% !important;
}

.grey {
  background-color: #eee !important;
}

.green {
  background-color: #dee6c5 !important;
}

.green span {
  font-family: Gotham Bold;
}

.blue {
  background-color: #dcefec !important;
}

#auth_matrix {
  max-width: 1152pt;
}

.title {
  padding-left: 15px;
  font-size: 24pt;
  font-weight: 700;
}

td,
th {
  padding: .5em 0 .5em 0;
  text-align: center;
}

.DelegChart p {
  margin: 1.5px;
}

.DelegChart td,
.DelegChart th {
  border-style: solid;
  border-width: 1pt;
}

.large-font {
  font-size: 1.15em;
}

.small-font {
  font-size: 1em;
  line-height: 1.1em;
}

.xsmall-font {
  font-size: 0.85em;
}

td.c35-noleft {
  border-width: 0pt 1pt 1pt 0pt;
  vertical-align: bottom;
}

td.c35-noright {
  border-width: 0pt 0pt 1pt 1pt;
  vertical-align: bottom;
  border-top: 1px solid #eee;
}

td.c41 {
  border-width: 1pt 1pt 0;
  vertical-align: bottom;
}

td.c41-noleft {
  border-width: 1pt 1pt 1pt 0pt;
  vertical-align: bottom;
}

td.c41-noright {
  border-width: 1pt 0pt 1pt 0pt;
  vertical-align: bottom;
}

td.c35,
th.c35 {
  border-width: 0 1pt 1pt;
  vertical-align: bottom;
}

.c49 {
  border-collapse: collapse;
  border-spacing: 0;
  border-color: #000;
  margin-right: auto;
}

.c93 {
  font-size: 14pt;
  font-weight: 700;
}

.chrtRotate {
  vertical-align: bottom;
}

.chrtRotate p {
  display: inline-block;
  line-height: 1.1;
  overflow: hidden;
  width: 2.1em;
  margin-left: .1em;
  margin-right: .1em;
}

.chrtRotate span {
  display: inline-block;
  text-align: left;
  transform: translate(0, 100%) rotate(-90deg);
  transform-origin: 0 0;
  white-space: nowrap;
}

.chrtRotate span:after {
  content: "";
  float: left;
  margin-top: 100%;
}

.fn-rtn {
  line-height: 1.15;
  padding-bottom: 0;
  padding-top: 0;
  text-align: left;
}

@media print {

  h1,
  p,
  strong,
  body,
  span {
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  h1 {
    margin-top: 0;
  }

  .large-font {
    font-size: 10px;
  }

  p,
  strong,
  .small-font,
  .xsmall-font,
  li {
    font-size: 8.5px;
  }

  h1,
  .title {
    font-size: 16px;
  }
}

/*! CSS Used fontfaces */
@font-face {
  font-family: "Gotham Book";
  src: url(https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/theme/fonts/Gotham/Gotham-Book.woff) format("woff"), url(https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/theme/fonts/Gotham/Gotham_TrueType/Gotham-Book.ttf) format("truetype");
}

@font-face {
  font-family: "Gotham Bold";
  src: url(https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/theme/fonts/Gotham/Gotham-Bold.woff) format("woff"), url(https://papp.csps-efpc.gc.ca/ProdContent/cninv000000000015255/theme/fonts/Gotham/Gotham_TrueType/Gotham-Bold.ttf) format("truetype");
}

</style>