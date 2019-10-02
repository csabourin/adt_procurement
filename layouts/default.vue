<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
    <div class="navBar">
        <nuxt-link class="isLeft" :to="localePath('index')" >
          <homebutton v-bind:iconWidth="50" v-bind:iconTitle="$t('homePage')" />
        </nuxt-link>
<div class="rightSide">
            <avatarIcon />
            <!-- <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('searchBar')"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">{{$t('searchBar')}}</b-button> -->

          <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
            <langswitch v-bind:iconWidth="60" v-bind:displayLang="locale.code" v-bind:iconTitle="locale.name" />
          </nuxt-link>
          </div>

    </div>
    <nuxt />
  </div>
</template>
<script type="text/javascript">
import avatarIcon from "~/components/progressBar";
import langswitch from "~/components/icons/language_icon";
import homebutton from "~/components/icons/home_icon";
import changeavatar from "~/pages/setAvatars"
export default {
  components: {
    avatarIcon,
    langswitch,
    homebutton,
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

.navBar {
  display:flex;
  background-color: #fff;
  color: #000;
  text-align: right;
  box-shadow: rgba(0, 0, 0, .5) 0px 3px 8px;
  justify-content: flex-end;
}

.isLeft{
  position: absolute;
  left: 0;
}

.navBar>span {
  padding: 1.5em;
}

.rightSide{
  display:flex;
}

body {
  background-color: #fff;
}

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

.bottomNav > .learningElement{

}

</style>
