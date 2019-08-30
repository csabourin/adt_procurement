<template>
  <div>
    <div class="lobby">
      <div class="lobbyBox row">
        <div class="col-3 phaseCard">
          <div class="phaseCardEnds">{{$t('plan')}}</div>
          <div class="phaseCardInside">
            <div class="iconBoard"><img src="../assets/1-plan-icon.svg"></div>
          </div>
        </div>
        <div class="col-3 phaseCard">
          <div class="phaseCardEnds">{{$t('spend')}}</div>
          <div class="phaseCardInside">
            <div class="iconBoard"><img src="../assets/2-spend-icon.svg"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.</p>
          </div>
        </div>
        <div class="col-3 phaseCard">
          <div class="phaseCardEnds">{{$t('report')}}</div>
          <div class="phaseCardInside">
            <div class="iconBoard"><img src="../assets/3-report-icon.svg"></div>
          </div>
        </div>
        <div class="testButton">
          <nuxt-link to="meetingRoom" class="btn"></nuxt-link></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style type="text/css" scoped>
.lobby {
  background-image: url('../assets/Background_scene.png');
  background-size: cover;
  height: 92vh;
}

.testButton>.btn {
	background-color: #c00;
	box-shadow:rgb(255, 255, 255) 2px 3px 10px 1px inset;

  padding: 25px;
  border-radius: 50px;
}

.lobbyBox {
  background-color: rgba(255, 255, 255, 0.85);
  border: 2px solid #000;
  padding: 1em;
  align-self: center;
  border-radius: 80px;
  margin: 2em;

}

.phaseCard {
  border: 1px solid #000;
  background-color: #185360;
  height: 70vh;
  margin: 2.5em;
  border-radius: 33px;
  padding: 0;
}


.phaseCard:nth-of-type(2) {
  margin: 2em .5em 2em .5em;
}

.phaseCardInside {
  background-color: #fff;
  margin: 0;
  padding: 1em;
  min-height: 55vh;
}

.phaseCardEnds {
  text-align: center;
  background-color: #185360;
  font-size: 40px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 33px 33px 0 0;
  width: 100%;
  display: block;
  padding: .5em 2em 0 2em;
  margin: 0;
}

.iconBoard {
  background-color: #494b4b;
  border: 1px solid #777;
  margin: 0 2em 0 2em;
  padding: 1em;
  border-radius: 11px;

}

</style>
<i18n>
  {
  "en":{
  "plan":"Plan",
  "spend":"Spend",
  "report":"Report"
  },
  "fr":
  {
  "plan":"Planifier",
  "spend":"Dépenser",
  "report":"Rapports"
  ,
  "home":"Accueil"}
  }
</i18n>
