<template>
  <div>
    <div>
      <b-navbar class="topBar" toggleable="lg" type="light">
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('searchBar')"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">{{$t('searchBar')}}</b-button>
            </b-nav-form>
            <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
              <langswitch v-bind:iconWidth="60" v-bind:displayLang="locale.code" v-bind:iconTitle="locale.name"/>
            </nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
    <footer class="pageFooter">
      <progressBar />
      <button @click="goBack"><backbutton  v-bind:iconWidth="50" v-bind:iconTitle="$t('backButton')" /></button>
      <nuxt-link class="" :to="localePath('index')">
        <homebutton v-bind:iconWidth="50" v-bind:iconTitle="$t('homePage')"/>
      </nuxt-link>
    </footer>
  </div>
</template>
<script type="text/javascript">
import progressBar from "~/components/progressBar";
import langswitch from "~/components/icons/language_icon";
import homebutton from "~/components/icons/home_icon";
import backbutton from "~/components/icons/back_btn";
import changeavatar from "~/pages/setAvatars"
export default {
  components: {
    progressBar,
    langswitch,
    homebutton,
    backbutton,
    changeavatar

  },
  computed: {
    avatar() { return this.$store.state.avatar.name },
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }

}

</script>
<style>

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.topBar {
  background-color: #2D475D;
  color: white;
  text-align: right;
  box-shadow:rgb(29, 51, 66) 0px -13px 8px inset;
}

.topBar>span {
  padding: 1.5em;
}

body {
  background-color: #C6C6C6;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.speech-bubble {
  position: relative;
  background: #ffffff;
  border-radius: .4em;
  padding: 1em;
}

.speech-bubble:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 60%;
  width: 0;
  height: 0;
  border: 33px solid transparent;
  border-top-color: #ffffff;
  border-bottom: 0;
  border-left: 0;
  margin-left: -16.5px;
  margin-bottom: -33px;
}

.avatarIcon {
  display: inline-block;
  border-radius: 50px;
  background-color: white;
  color: grey;
  padding: 1em;
  overflow: hidden;
  float: left;
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

.redBar:before{
      width: 0px;
    height: 0px;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
    border-left: 60px solid white;
}

a.NextIcon{
  position:fixed;
  bottom: 3px;
  right:2em;
  z-index: 2;
  display: block;
  background-color: #2D475D;
  color:white;
  box-shadow:rgb(29, 51, 66) 0px -13px 8px inset;
  padding:1em;
  border-radius: 20px;
}

footer.pageFooter:before{
  content:"";
  position:fixed;
  bottom: 60px;
  height:10px;
  width:100%;
  background: transparent linear-gradient(270deg, rgba(150, 64, 64, 1) 0%, rgba(87, 31, 31, 1) 100%) 0% 0% no-repeat padding-box;

}

.pageHeader{
  width:100%;
  background-color: #4D4D4D;
  color:white;
  padding:2em;
  display: block;
  vertical-align: center;

}
</style>
