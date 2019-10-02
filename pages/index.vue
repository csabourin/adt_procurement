<template>
  <div class="mainWindow">
    <hamburger />
    <h1 class="pageTitle">{{$t('finRoles')}}</h1>
    <div style="width:490px;margin:auto">
      <video src="~/assets/IntroVideoPrototype.mp4" controls poster="/_nuxt/assets/video_poster.PNG" width="600">
      </video>
      <details>
        <summary>{{$t('transcript')}}</summary>
        <span v-html="$t('transcriptText')"></span>
      </details>
    </div>
    <div class="sideTitle planTitle">{{$t('plan')}}</div>
    <section class="courseSection planSection" :style="{ backgroundImage: `url(${planbgBarUrl})` }">
      <microlearning path="planKey" time="5" completion=100>{{$t('KeyMessages')}}</microlearning>
      <microlearning path="buildWP" time="20" completion=80>{{$t('BuildWorkPlan')}}</microlearning>
      <microlearning time="20" completion=10>{{$t('CreateBudget')}}</microlearning>
      <microlearning time="15">Test</microlearning>
    </section>
    <hr class="planHr">
    <div class="sideTitle spendTitle">{{$t('spend')}}</div>
    <section class="courseSection spendSection" :style="{ backgroundImage: `url(${spendbgBarUrl})` }">
      <microlearning time="5">{{$t('KeyMessages')}}</microlearning>
      <microlearning time="20">{{$t('InitiateAuthorizeSpending')}}</microlearning>
      <microlearning time="20">{{$t('ExerciseFinancialAuthority')}}</microlearning>
      <microlearning time="15">Test</microlearning>
    </section>
    <hr class="spendHr">
    <div class="sideTitle reportTitle">{{$t('report')}}</div>
    <section class="courseSection reportSection" :style="{ backgroundImage: `url(${reportbgBarUrl})` }">
      <microlearning time="5">{{$t('KeyMessages')}}</microlearning>
      <microlearning time="20">{{$t('ConductPeriodicVarianceReporting')}}</microlearning>
      <microlearning time="20">{{$t('ContributeReporting')}}</microlearning>
      <microlearning time="15">Test</microlearning>
    </section>
    <hr class="reportHr">
  </div>
</template>
<script type="text/javascript">
import planbgBarUrl from "~/components/plan_phase_bar.svg"
import spendbgBarUrl from "~/components/spend_phase_bar.svg"
import reportbgBarUrl from "~/components/report_phase_bar.svg"
import courselogo from "~/components/three_phases";
import microlearning from "~/components/microlearning";
import hamburger from "~/components/hamburger";
export default {
  data() {
    return {
      planbgBarUrl,
      spendbgBarUrl,
      reportbgBarUrl
    }
  },
  components: {
    courselogo,
    microlearning,
    hamburger
  }
}

</script>
<style>
.planHr {
  border-top: 3px dashed #d1dfe1;
}

.spendHr {
  border-top: 3px dashed #cac1ca;
  ;
}

.reportHr {
  border-top: 3px dashed #d6c5c1;
}

.sideTitle {
  font-size: 48px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 800;
  clear: both;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: -1em;
  margin-left: 50px;
}

.mainWindow {
  text-align: center;
}

.introVideo {
  border: 4px solid #1A2F3D;
  border-radius: 35px;
  box-shadow: 6px 6px 9px #000000;
}

.courseSection {
  clear: left;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-position-y: 9em;
  background-position-x: 12em;
  background-repeat: no-repeat;
}

.planTitle {
  color: #608a93;
}


.spendTitle {
  color: #7d677d;
}


.reportTitle {
  color: #986e65;
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


.iconText {
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.sideText:before {
  content: "“";
  color: #fff;
  float: left;
  font-size: 60px;
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
  "transcriptText":"<p>Welcome! You’re in the right place if you’re a Manager looking to learn about how to make responsible use of public funds - to plan, spend and report. There are many reasons why Managers like you come to this course. </p>",
  "objectives":"Objectives",
  "HowTo":"How to Navigate"

  },
  "fr":
  {
  "welcomeText": "Bienvenue",
  "letsbegin": "Commençons",
  "finRoles":"Utilisation responsable des fonds publics",
  "transcriptText":"<p>Bienvenue ! Vous êtes au bon endroit si vous êtes un gestionnaire qui cherche à apprendre comment utiliser les fonds publics de façon responsable - pour planifier, dépenser et rendre compte. Il y a plusieurs raisons pour lesquelles les gestionnaires comme vous viennent à ce cours.</p>",
  "objectives":"Objectifs",
  "HowTo":"Comment naviguer ce cours"
    }
  }
</i18n>
