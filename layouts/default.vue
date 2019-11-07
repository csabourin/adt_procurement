<template>
  <b-container fluid style="overflow:hidden;">
    <b-row class="navBar">
      <b-col cols="5" sm="3" class="text-left">
        <hamburger @menu-toggle="ShowMenu" />
        <nuxt-link :to="localePath('index')">
          <homebutton v-bind:iconWidth="50" v-bind:iconTitle="$t('homePage')" />
        </nuxt-link>
      </b-col>
      <b-col cols="2" sm="6" />
      <b-col cols="5" sm="3" class="text-right">
        <fileMenu />
        <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          <langswitch v-bind:iconWidth="60" v-bind:displayLang="locale.code" v-bind:iconTitle="locale.name" />
        </nuxt-link>
      </b-col>
    </b-row>
    </b-row>
    <b-row>
      <b-col class="col-md-3" v-if="MenuShowing" key="99">
        <transition appear name="fade" mode="out-in" key="100">
          <content-map v-if="MenuShowing" />
        </transition>
      </b-col>
      <b-col>
        <nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>
<script type="text/javascript">
import langswitch from "~/components/icons/language_icon"
import hamburger from "~/components/hamburger"
import contentMap from "~/components/contentMap"
import homebutton from "~/components/icons/home_icon"
import fileMenu from "~/components/fileMenu"
export default {
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
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    ShowMenu() {
      this.MenuShowing = !this.MenuShowing
    }
  }

}

</script>
<style>
html {
  width: 100%;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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

.v-right:before{
  content:"\1f600";
  font-size: larger;
}
.v-wrong:before{
  content:"\1f61e";
  font-size: larger;
}

body {
  background-color: #fff;
  width: calc(100vw - (100vw - 100%));
  margin: 0;
  padding: 0;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height:0;
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

.bottomNav.planSection:before {
  content: "PLAN";
  background-color: #d1dfe1;
}

.bottomNav.spendSection:before {
  content: "SPEND";
  background-color: #cac1ca;
}

.bottomNav.reportSection:before {
  content: "REPORT";
  background-color: #d6c5c1;
}

[lang="fr"] .bottomNav.planSection:before {
  content: "PLANIFICATION";
}

[lang="fr"] .bottomNav.spendSection:before {
  content: "DÉPENSES";
}

[lang="fr"] .bottomNav.reportSection:before {
  content: "RAPPORTS";
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

.rightSide {
  display: flex;
  align-content: flex-end;
}

.container-fluid {
  padding: 0;
}

.pageTitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  display: block;
  font-weight: 300;
  font-size: 75px;
  color: #4D4D4D;
  letter-spacing: -4px;
  text-align: center;
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

.contentMap .nuxt-link-exact-active {
  border-bottom: 2px solid #b54142;
}

</style>
