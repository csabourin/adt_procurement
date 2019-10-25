<template>
  <b-container fluid>
    <b-row class="navBar">
      <b-col class="text-left">
        <hamburger @menu-toggle="ShowMenu" />
      </b-col>
      <b-col class="text-left">
        <nuxt-link :to="localePath('index')">
          <homebutton v-bind:iconWidth="50" v-bind:iconTitle="$t('homePage')" />
        </nuxt-link>
      </b-col>
      <b-col cols="6" />
      <b-col class="text-right">
        <fileMenu />
      </b-col>
      <b-col class="text-right">
        <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          <langswitch v-bind:iconWidth="60" v-bind:displayLang="locale.code" v-bind:iconTitle="locale.name" />
        </nuxt-link>
      </b-col>
    </b-row>
    </b-row>
    <b-row>
      <transition name="expand">
      <b-col class="col-md-3" v-if="MenuShowing">
        <content-map />
      </b-col>
      <b-col>
        <nuxt />
      </b-col>
  </transition>
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
  width:100%;
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

body {
  background-color: #fff;
  width: calc(100vw - (100vw - 100%));
  margin:0;
  padding: 0;
}
.row.navBar {
  background-color: #fff;
  color: #000;
  text-align: right;
  box-shadow: rgba(0, 0, 0, .5) 0px 3px 8px;
  align-items: flex-start;
  width:100%;
  margin:0;
}

.transcriptionBox {
  width: 70vw;
  margin:auto;
}
.transcriptionBox .btn{
  text-align: left;
}

.planSection .timeEstimate {
  background-color: #608a93;
}


.spendSection .timeEstimate {
  background-color: #7d677d;
}


.reportSection .timeEstimate {
  background-color: #986e65;
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

.container-fluid{padding: 0;}
.pageTitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  display: block;
  font-weight: 300;
  font-size: 75px;
  color: #35495e;
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

.avatarIcon>.btn {

  border-radius: 50%;
  background-color: white;
  padding: 10px;
  overflow: hidden;

  margin: 0;
}

footer.pageFooter {
  background-color: white;
  position: fixed;
  bottom: 0px;
  height: 60px;
  display: flex;
  width: 100%;
}


.pageHeader {
  width: 100%;
  background-color: #4D4D4D;
  color: white;
  padding: 2em;
  display: block;
  vertical-align: center;

}

.bottomNav>.learningElement {}

.contentMap .nuxt-link-exact-active {
  border-bottom: 2px solid #b54142;
}

</style>
