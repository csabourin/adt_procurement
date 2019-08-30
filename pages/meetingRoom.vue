<template>
  <div class="wallPaint container">
    <div class="avatarBlock">
    	<h2>{{$t('chooseAvatar')}}</h2>
      <div class="">{{$t('selected')}}: {{pickedAvatar}}</div>
      <div>
        <ul>
          <li :key="index" v-for="(pic,index) in avatarPicList" :class="isSame(pic.name)">
            <button @click="setAvatar" :name="pic.name" :value="getImgUrl(pic.pic)">{{pic.name}}</button>
            <img :src="getImgUrl(pic.pic)"><br></li>
        </ul>
        <nuxt-link to="stairway" class="btn btn-secondary float-right">{{$t('meetTeam')}}</nuxt-link>
      </div>
      <div class="Chat"></div>
    </div>
  </div>
</template>
<style type="text/css">
.wallPaint {
  background-color: #41383D;
  height: 90vh;
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
}

</style>
<script type="text/javascript">
export default {

  data() {
    return {
      pickedAvatar: localStorage.getItem("bossName"),
      avatarPicList: [{ name: `Charlie`, pic: `Charlie.png` }, { name: `Frïedrik`, pic: `Friedrik.png` }, { name: `Sidhi`, pic: `Sidhi.png` }]
    }

  },
  mounted: function() { return true },
  methods: {
    getImgUrl: function(pic) {
      return require('../assets/' + pic)
    },

    isSame: function(isIt) {
      let meKnow = "btn avatarPic";
      meKnow += (isIt == this.pickedAvatar) ? " thatSelected" : " notSelected";
      return meKnow
    },
    setAvatar: function(e) {
      localStorage.setItem("bossName", e.target.name);
      localStorage.setItem("bossPic",e.target.value);
      this.pickedAvatar = e.target.name;
      this.$parent.$parent.$parent.$forceUpdate()
    }
  }
}
</script>
<i18n>
  {
  "en":{
  "selected":"Selected",
  "chatGreet":"Hello! Please remind me your name?",
  "chooseAvatar":"Choose your boss",
  "meetTeam":"Next, meet your team"
  },
  "fr":{
  "selected":"Sélectionné",
  "chatGreet":"Bonjour! Pouvez-vous me rappeller votre nom?",
  "chooseAvatar":"Choisissez votre patron(ne)",
  "meetTeam":"Ensuite, rencontrez votre équipe"
  }
  }
</i18n>
