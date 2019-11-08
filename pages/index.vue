<template>
  <div class="mainWindow">
    <h1 class="pageTitle"><img src="~/static/symbolic_identifier.png" width=50px> {{$t('finRoles')}}</h1>
    <div class="videoContain">
      <video id="introVideo" :src="require('~/assets/'+ $i18n.locale +'/IntroVideoPrototype.mp4')" controls :poster="require('~/assets/'+ $i18n.locale +'/video_poster.PNG')">
      </video>
       <div role="tablist" class="transcriptionBox">
    <b-card no-body class="mb-1 text-left">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="light" class="text-left" >{{$t('transcript')}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text ><span v-html="$t('transcriptText')"></span></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
    </div>
     <p>&nbsp;</p>
    <div class="sideTitle planTitle">{{$t('plan')}}</div>
    <section class="courseSection planSection" :style="{ backgroundImage: `url(${planbgBarUrl})` }">
      <microlearning path="planKey" time="2" completion=100 imagePath="KeyMessP.png">{{$t('KeyMessages')}}</microlearning>
      <microlearning path="buildWP" time="20"  imagePath="KeyMessR.png" completion=80>{{$t('BuildWorkPlan')}}</microlearning>
      <microlearning time="20" path="createBudget" completion=10 tmp_imagePath="CreateBud.png">{{$t('CreateBudget')}}</microlearning>
      <microlearning time="15" tmp_imagePath="TestPlan.png">{{$t('Test')}}</microlearning>
    </section>
    <hr class="planHr">
    <div class="sideTitle spendTitle">{{$t('spend')}}</div>
    <section class="courseSection spendSection" :style="{ backgroundImage: `url(${spendbgBarUrl})` }">
      <microlearning time="5" tmp_imagePath="KeyMessS.png">{{$t('KeyMessages')}}</microlearning>
      <microlearning time="20">{{$t('InitiateAuthorizeSpending')}}</microlearning>
      <microlearning time="20">{{$t('ExerciseFinancialAuthority')}}</microlearning>
      <microlearning time="20">{{$t('MonitorControlFinances')}}</microlearning>
      <microlearning time="15">{{$t('Test')}}</microlearning>
    </section>
    <hr class="spendHr">
    <div class="sideTitle reportTitle">{{$t('report')}}</div>
    <section class="courseSection reportSection" :style="{ backgroundImage: `url(${reportbgBarUrl})` }">
      <microlearning time="5">{{$t('KeyMessages')}}</microlearning>
      <microlearning time="20">{{$t('ConductPeriodicVarianceReporting')}}</microlearning>
      <microlearning time="20">{{$t('ContributeReporting')}}</microlearning>
      <microlearning time="15">{{$t('Test')}}</microlearning>
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
.pageTitle {
  font-size: 50px;
  margin-top: 1em;
}

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
  font-size: 35px;
  font-family: 'Roboto Medium', sans-serif;
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

#introVideo {
  width: 60vw;
}

.videoContain {
  width: 60vw;
  margin: auto;
}

.courseSection {
  clear: left;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background-position-y: 9em;
  background-position-x: 12em;
  background-repeat: no-repeat;
}

.planTitle {
  color: #587C84;
}

.spendTitle {
  color: #7d677d;
}

.reportTitle {
  color: #865F56;
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

details {
  text-align: left
}

</style>

<i18n>
  {
  "en":{
  "welcomeText": "Investing money is the process of committing resources in a strategic way to accomplish a specific objective.” ― Alan Gotthardt",
  "letsbegin": "Let's Begin",
  "finRoles":"Responsible Use of Public Funds",
  "transcriptText":"<p>Welcome! You&rsquo;re in the right place if you&rsquo;re a Manager looking to learn about how to make responsible use of public funds - to plan, spend and report. There are many reasons why Managers like you come to this course. <br />A box with four coloured boxes appears and break off from one another. We zoom into one at a time, once for each of the following vignettes</p><p><br />As a new Manager, I am new at all things related to Financial Delegation and I need to learn everything there is to know about my financial responsibilities.</p><p><br />I&rsquo;ve been a Manager for most of my career but I am new to government. I want to leverage my experience by connecting what I already know about finance to government.</p><p>&nbsp;<br />I just came back from a parental leave and I could really use a refresher on my financial responsibilities and find out what might have changed since I left.</p><p>&nbsp;<br />I&rsquo;m an experienced Manager in government. As per the policy, I need to recertify every 5 years in order to be able to continue to exercise my financial delegation. I really just want to get to the test please. <br />Boxes merge back into a single one</p><p>&nbsp;<br />Whatever the reason that brought you here, you&rsquo;re in charge of your learning.Think of this as &ldquo;a choose your own adventure&rdquo; kind of experience and take what you need in order to succeed. If all you need is to take the test because you&rsquo;re already pretty familiar with the content, then, by all means, start with that.</p><p>&nbsp;</p><p>If you just need an overview or a refresher, then simply review the intro sections of each phase to get the key highlights and tools.</p><p>Also, you will find nifty features on your screen - like the file section on the top right, where you can find tools and reference materials to help you on the job. <br />Show intro sections path</p><p>&nbsp;<br />If you&rsquo;re learning this for the first time, then take the time to go through the sections and do the in-depth learning activities, as well as the tools and resources. We promise it&rsquo;s worth the effort and that you&rsquo;ll be well prepared to take the test.</p><p>&nbsp;<br />You&rsquo;re probably wondering about the test, so here&rsquo;s how it works.</p><p>As per Treasury Board requirements, succeeding the test for this course is mandatory before you can exercise financial deletion.</p><p>There are three parts to the test - one at the end of each phase - plan, spend and report.</p><p>The passing grade is 80%, per part.</p><p>Each part should take you around 15-20 minutes.</p><p>You may access the course materials during the test and you may challenge the test as many times as you need.</p><p>&nbsp;<br />In the end, how you use this course is up to you! This course will remain accessible to you so you can come back and consult the different sections and tools when you need to on the job!</p><p>&nbsp;<br />We are rooting for you to succeed because when you steward public funds well, you succeed in your career. And, perhaps even more importantly, you serve Canadians well, with transparency and accountability. And that&rsquo;s the bottom line.</p>",
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
