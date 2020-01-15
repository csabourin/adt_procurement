<template>
  <div>
    <b-container fluid style="overflow:hidden;">
      <b-row class="navBar">
        <b-col cols="5" sm="3" class="text-left">
          <hamburger @menu-toggle="ShowMenu" />
          <nuxt-link :to="localePath('index')">
            <homebutton v-bind:iconWidth="50" v-bind:iconTitle="$t('homePage')" />
          </nuxt-link>
          <button class="successIcon" v-b-modal.completionModal v-if="courseComplete"><img src="~/assets/successIcon.png" width="50" height="50"><strong class="completeCaption" v-html="$t('courseComplete')" /></button>
        </b-col>
        <b-col cols="2" sm="6">
          <h1 class="mainTitle"><img src="../components/SymbolicIdentifier.svg" width="55" :alt="$t('symbolicIdentifier')"> {{$t('finRoles')}}</h1>
        </b-col>
        <b-col cols="5" sm="3" class="text-right">
          <fileMenu />
          <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
            <langswitch v-bind:iconWidth="60" v-bind:displayLang="locale.code" :lang="locale.code" v-bind:iconTitle="locale.name" />
          </nuxt-link>
        </b-col>
      </b-row>
      </b-row>
      <b-row>
        <!-- <transition-group tag="div" name="fade" class="grid"> -->
        <b-col class="col-md-3" v-if="MenuShowing">
          <transition appear mode="in-out" name="fade">
            <content-map />
          </transition>
        </b-col>
        <b-col>
          <nuxt role="main" />
        </b-col>
        <!-- </transition-group> -->
      </b-row>
    </b-container>
    <b-modal OkOnly centered okOnly id="completionModal" modal-class="successModal" body-class="successBody" header-class="successHeadFoot" footer-class="successHeadFoot" content-class="successContent">
        <div class="successImage" /><div v-html="$t('congratulations')"></div>
    </b-modal>
  </div>
</template>
<script type="text/javascript">
import langswitch from "~/components/icons/language_icon"
import hamburger from "~/components/hamburger"
import contentMap from "~/components/contentMap"
import homebutton from "~/components/icons/home_icon"
import fileMenu from "~/components/fileMenu"
export default {
  name:"mainPage",
  head() {
    return {
      htmlAttrs: { lang: this.$i18n.locale }
    }
  },
  data() {
    return {
      MenuShowing: false
    }
  },
  components: {
    langswitch,
    homebutton,
    hamburger,
    fileMenu,
    contentMap

  },
  computed: {
    thatPoint() {
      return parseInt(this.$store.state.currentPlaying.homepage)
    },
    planCompleted() {
      return this.$store.getters['plan/getScore']
    },
    reportCompleted() {
      return this.$store.getters['report/getScore']
    },
    spendCompleted() {
      return this.$store.getters['spend/getScore']
    },
    courseComplete() {
      if (parseInt(this.planCompleted,10) >= 80 && parseInt(this.spendCompleted,10) >= 80 && parseInt(this.reportCompleted,10) >= 80) {
        this.$store.dispatch('scorm/setSuccess')
        return true
      }
    },
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    ShowMenu() {
      this.MenuShowing = !this.MenuShowing
    }
  },
  watch: {
    courseComplete: {
      immediate:true,
      handler(isCompleted){
        if(isCompleted){
          this.$bvModal.show('completionModal')
        }
      }

    }
  }

}

</script>
<style>
html {
  width: 100%;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.v-right:before {
  content: "\1f600";
  font-size: larger;
}

.v-wrong:before {
  content: "\1f61e";
  font-size: larger;
}

.exam .card-header {
  display: none;
}

body {
  background-color: #fff;
  width: calc(100vw - (100vw - 100%));
  margin: 0;
  padding: 0;
}

legend {
  font-size: 1em;
}

a {
  color: #1000ff;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
.completeCaption{
font-size: 12px;
    width: 60px;
    display: inline-block;
    text-align: center;
    vertical-align: bottom;


}
.successImage{
    background-image: url('~assets/successIcon.svg');
    display: block;
    position:absolute;
    width:55px;
    height:55px;
    top:46px;
    left:-30px;
}

.successIcon{
  background-color: transparent;
  border:0;
}
.successModal
{
background-image: linear-gradient(135deg, #7a474e 45.45%, #8f5e65 45.45%, #8f5e65 50%, #7a474e 50%, #7a474e 95.45%, #8f5e65 95.45%, #8f5e65 100%);
background-size: 11.00px 11.00px;
  color:#fff;
}

.successHeadFoot{border:0;}
.successHeadFoot .close {color:#fff;}

.successBody{
  text-align:center;
  padding:1em;
  border: 2px solid #fff;
  border-radius:10px;
  /*background-image: url('~assets/successIcon.svg');*/
  background-repeat: no-repeat;
  background-size: 50px 50px;
}

.successContent{
  background-color: transparent;
  background-image: url('~assets/SuccessPaper.svg');
  background-size: contain;
  padding:.5em 3em;
  border:0;
}
.row.navBar {
  background-color: #fff;
  color: #000;
  text-align: right;
  box-shadow: rgba(0, 0, 0, .5) 0px 3px 8px;
  align-items: flex-start;
  width: 100%;
  margin: 0;
}

.row {
  margin: 0;
}

h2,
.h2 {
  font-size: 1.6em;
}

h3,
.h3 {
  font-size: 1.2em;
}

img {
  vertical-align: text-top;
}

.transcriptionBox {
  width: 60vw;
  margin: auto;
}

.transcriptionBox .btn {
  text-align: left;
}

.planSection .timeEstimate {
  background-color: #587C84;
}


.spendSection .timeEstimate {
  background-color: #7d677d;
}


.reportSection .timeEstimate {
  background-color: #865F56;
}

.bottomNav {
  position: relative;
}

.bottomNav:before {
  content: " ";
  color: #4d4d4d;
  text-align: left;
  font-weight: bold;
  padding-left: 1.5em;
  height: 30px;
  width: 100vw;
  position: absolute;
  z-index: -1;
  margin-top: 110px;
  right: 0;
}

.v-inv {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  margin: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
}

.leftSide {
  display: flex;
  align-content: flex-start;
}

.navBar>span {
  padding: 1.5em;
}

.bottomNav {
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-left: auto;
}

.spendSection {
  position: relative;
}

.spendSectionBar {
  position: absolute;
  background-color: #cac1ca;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.spendSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

.rightSide {
  display: flex;
  align-content: flex-end;
}

.container-fluid {
  padding: 0;
}

.pageTitle,
.mainTitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  display: block;
  font-size: 45px;
  color: #4D4D4D;
  letter-spacing: -1px;
  text-align: center;
  padding-top: 20px;
}

.mainTitle {
  font-size: 30px;
  margin-top: -0.15em
}

.scrollMe {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

@media only screen and (max-width: 720px) {
  .mainTitle {
    font-size: 18px;
    margin-top: -0.15em
  }

  h1 img {
    vertical-align: middle;
  }
}

/* always present */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

/* Transitions using the page hook */
page-enter-active,
.page-leave-active {
  transition: all .30s ease-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.pageHeader {
  width: 100%;
  background-color: #4D4D4D;
  color: white;
  padding: 2em;
  display: block;
  vertical-align: center;

}

.pure-checkbox input[type="checkbox"],
.pure-radiobutton input[type="checkbox"],
.pure-checkbox input[type="radio"],
.pure-radiobutton input[type="radio"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.pure-checkbox input[type="checkbox"]:focus+label:before,
.pure-radiobutton input[type="checkbox"]:focus+label:before,
.pure-checkbox input[type="radio"]:focus+label:before,
.pure-radiobutton input[type="radio"]:focus+label:before,
.pure-checkbox input[type="checkbox"]:hover+label:before,
.pure-radiobutton input[type="checkbox"]:hover+label:before,
.pure-checkbox input[type="radio"]:hover+label:before,
.pure-radiobutton input[type="radio"]:hover+label:before {
  border-color: #4d4d4d;
  background-color: #f2f2f2;
}

.pure-checkbox input[type="checkbox"]:active+label:before,
.pure-radiobutton input[type="checkbox"]:active+label:before,
.pure-checkbox input[type="radio"]:active+label:before,
.pure-radiobutton input[type="radio"]:active+label:before {
  transition-duration: 0s;
}

.pure-checkbox input[type="checkbox"]+label,
.pure-radiobutton input[type="checkbox"]+label,
.pure-checkbox input[type="radio"]+label,
.pure-radiobutton input[type="radio"]+label {
  position: relative;
  padding-left: 2em;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}

.pure-checkbox input[type="checkbox"]+label:before,
.pure-radiobutton input[type="checkbox"]+label:before,
.pure-checkbox input[type="radio"]+label:before,
.pure-radiobutton input[type="radio"]+label:before {
  box-sizing: content-box;
  content: '';
  color: #4d4d4d;
  position: absolute;
  top: 50%;
  left: 0;
  width: 14px;
  height: 14px;
  margin-top: -9px;
  border: 2px solid #4d4d4d;
  text-align: center;
  transition: all 0.4s ease;
}

.pure-checkbox input[type="checkbox"]+label:after,
.pure-radiobutton input[type="checkbox"]+label:after,
.pure-checkbox input[type="radio"]+label:after,
.pure-radiobutton input[type="radio"]+label:after {
  box-sizing: content-box;
  content: '';
  background-color: #4d4d4d;
  position: absolute;
  top: 50%;
  left: 4px;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  transform: scale(0);
  transform-origin: 50%;
  transition: transform 200ms ease-out;
}

.pure-checkbox input[type="checkbox"]:disabled+label:before,
.pure-radiobutton input[type="checkbox"]:disabled+label:before,
.pure-checkbox input[type="radio"]:disabled+label:before,
.pure-radiobutton input[type="radio"]:disabled+label:before {
  border-color: #cccccc;
}

.pure-checkbox input[type="checkbox"]:disabled:focus+label:before,
.pure-radiobutton input[type="checkbox"]:disabled:focus+label:before,
.pure-checkbox input[type="radio"]:disabled:focus+label:before,
.pure-radiobutton input[type="radio"]:disabled:focus+label:before,
.pure-checkbox input[type="checkbox"]:disabled:hover+label:before,
.pure-radiobutton input[type="checkbox"]:disabled:hover+label:before,
.pure-checkbox input[type="radio"]:disabled:hover+label:before,
.pure-radiobutton input[type="radio"]:disabled:hover+label:before {
  background-color: inherit;
}

.pure-checkbox input[type="checkbox"]:disabled:checked+label:before,
.pure-radiobutton input[type="checkbox"]:disabled:checked+label:before,
.pure-checkbox input[type="radio"]:disabled:checked+label:before,
.pure-radiobutton input[type="radio"]:disabled:checked+label:before {
  background-color: #cccccc;
}

.pure-checkbox input[type="checkbox"]+label:after,
.pure-radiobutton input[type="checkbox"]+label:after {
  background-color: transparent;
  top: 50%;
  left: 4px;
  width: 8px;
  height: 3px;
  margin-top: -4px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 0 0 3px 3px;
  border-image: none;
  transform: rotate(-45deg) scale(0);
}

.pure-checkbox input[type="checkbox"]:checked+label:after,
.pure-radiobutton input[type="checkbox"]:checked+label:after {
  content: '';
  transform: rotate(-45deg) scale(1);
  transition: transform 200ms ease-out;
}

.pure-checkbox input[type="radio"]:checked+label:before,
.pure-radiobutton input[type="radio"]:checked+label:before {
  animation: borderscale 300ms ease-in;
  background-color: white;
}

.pure-checkbox input[type="radio"]:checked+label:after,
.pure-radiobutton input[type="radio"]:checked+label:after {
  transform: scale(1);
}

.pure-checkbox input[type="radio"]+label:before,
.pure-radiobutton input[type="radio"]+label:before,
.pure-checkbox input[type="radio"]+label:after,
.pure-radiobutton input[type="radio"]+label:after {
  border-radius: 50%;
}

.pure-checkbox input[type="checkbox"]:checked+label:before,
.pure-radiobutton input[type="checkbox"]:checked+label:before {
  animation: borderscale 200ms ease-in;
  background: #4d4d4d;
}

.pure-checkbox input[type="checkbox"]:checked+label:after,
.pure-radiobutton input[type="checkbox"]:checked+label:after {
  transform: rotate(-45deg) scale(1);
}

@keyframes borderscale {
  50% {
    box-shadow: 0 0 0 2px #4d4d4d;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translateX(-100%);
  width: 0;
}

.btn-primary {
  background-color: #0051A8;
}

</style>
