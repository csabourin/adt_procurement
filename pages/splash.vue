<template>
  <div>
    <br>
    <h1 class="mainHeader">{{$t("finRoles")}}</h1>
    <br>
    <div class="container">
      <div class="row">
        <div class="col">
        </div>
      </div>
      <div class="row intro">
        <div class="col-6">
          <div class="embed-responsive-item "><iframe width="560" height="315" src="https://www.youtube.com/embed/rh334hJGNNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope" allowfullscreen></iframe></div>
        </div>
        <div class="col sideText">
          <h2>{{$t('welcomeText')}}</h2>
          <p></p>
          <br>
          <nuxt-link :to="localePath('index')"><button class="btn" id="Begin">{{$t("letsbegin")}}</button></nuxt-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    layout:'splash'
  }
</script>
<style>
.introVideo {
  border: 4px solid #1A2F3D;
  border-radius: 35px;
  box-shadow: 6px 6px 9px #000000;
}

.iconText {
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#Begin {
  background-color: #185360;
  padding: .5em;
  color: #fff;
  font-size: 25px;
  border-radius: 14px;
  box-shadow: 6px 9px 9px rgba(0, 0, 0, 0.25);
}

.container {
  width: 100%;
  min-height: 90vh;
  display: block;
  text-align: center;
}

.mainHeader {
  color: #fff;
  text-align: center;
  padding: 0.5em;
  width: 100%;
  margin: 0;


  background: transparent linear-gradient(0deg, rgba(130, 47, 47, 1) 0%, rgba(73, 27, 27, 1) 76%, rgba(65, 24, 24, 1) 100%) 0% 0% no-repeat padding-box;
}

.sideText:before {
  content:"“";
  color: #fff;
  float:left;
  font-size:60px;
}

.intro {
  
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
<i18n>
  {
  "en":{
  "welcomeText": "Investing money is the process of committing resources in a strategic way to accomplish a specific objective.” ― Alan Gotthardt",
  "letsbegin": "Let's Begin",
  "finRoles":"Responsible Use of Public Funds",
  "objectives":"Objectives"
  },
  "fr":
  {
  "welcomeText": "Bienvenue",
  "letsbegin": "Commençons",
  "finRoles":"Rôles Financiers et Responsabilités",
  "objectives":"Objectifs"
  }
  }
</i18n>
