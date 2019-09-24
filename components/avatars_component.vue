<template>
  <div class="wallPaint">
    	<div class="pageHeader"><h2>{{$t('chooseAvatar')}}</h2></div>
  	<div class="avatarBlock">
      <div class="">{{$t('selected')}}: {{pickedAvatar}}</div>
      <div>
        <ul>
          <li :key="index" v-for="(pic,index) in avatarPicList" :class="isSame(pic.name,pickedAvatar)">
            <input type="radio" @click="setAvatar" name="Avatar" :id="pic.name" :value="getImgUrl(pic.pic)"><label :for="pic.name"><img :src="getImgUrl(pic.pic)"></label></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style type="text/css">
.wallPaint {
  background-color: #41383D;
  background-size: cover;
  height: 70vh;
}

.avatarBlock {
  background-color: #576574;
  padding: 15px;
  border-radius: 65px;
  box-shadow: 9px 9px 9px hsla(0, 0%, 0%, 0.39);
}

.avatarPic {
  display: inline-block;
  height: 3em;
  background-color: #F0F0F0;
  margin: 1em;
  padding: 1vw 0vh 11vh 0vw;
  border-radius: 1em;
}

.thatSelected {
  box-shadow: 0px 0px 10px #ffdb00;
  background-color: 
}

</style>
<script type="text/javascript">
export default {

  data() {
    return {
      pickedAvatar: localStorage.getItem("avatarName"),
      pickedBoss: localStorage.getItem("bossName"),
      avatarPicList: [{ name: `Charlie`, pic: `Charlie.png` }, { name: `Friedrik`, pic: `Friedrik.png` }, { name: `Sidhi`, pic: `Sidhi.png` },{ name: `Simia`, pic: `Simia.png` }, { name: `Vincent`, pic: `Vincent.png` }, { name: `Kim`, pic: `Kim.png` }]
    }

  },
  mounted: function() { return true },
  methods: {
    getImgUrl: function(pic) {
      return require('../assets/' + pic)
    },

    isSame: function(isIt,avatar) {
      let meKnow = "btn avatarPic";
      meKnow += (isIt == avatar) ? " thatSelected" : " ";
      return meKnow
    },
    setAvatar: function(e) {
      localStorage.setItem("avatarName", e.target.id);
      localStorage.setItem("avatarPic", e.target.value);
      this.pickedAvatar = e.target.id;
      this.$store.commit('avatar/define', e.target.value);
    }, setBoss: function(e) {
      localStorage.setItem("bossName", e.target.innerText);
      localStorage.setItem("bossPic",e.target.value);
      this.pickedBoss = e.target.innerText;
    }
  }
}
</script>
<i18n>
  {
  "en":{
  "selected":"Selected",
  "chatGreet":"Hello! Could-you please remind me your name?",
  "chooseAvatar":"Choose your avatar",
  "chooseBoss":"Choose your boss",
  "diveBrief":"Dive into the brief!"
  },
  "fr":{
  "selected":"Sélectionné",
  "chatGreet":"Bonjour! Pouvez-vous me rappeller votre nom?",
  "chooseAvatar":"Choisissez votre avatar",
  "chooseBoss":"Choisissez votre patron(ne)",
  "diveBrief":"Plongez dans le contexte"
  }
  }
</i18n>
