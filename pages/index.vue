<template>
  <div class="mainWindow">
    <p>&nbsp;</p>
      <videoplayer enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_a9sopjk0/flavorId/0_xwd6dtx5/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0olxxf6u/flavorId/0_ynuanlxw/name/a.mp4" posterFile="video_poster.PNG" ccFile="intro_captions.vtt" toResume="setHomepage" :restartAt="thatPoint" />
       <div role="tablist" class="transcriptionBox">
    <b-card no-body class="mb-1 text-left">
      <b-card-header header-tag="p" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.translationbox variant="light" class="text-left" >{{$t('transcript')}}</b-button>
      </b-card-header>
      <b-collapse id="translationbox" accordion="translation-box" role="tabpanel">
        <b-card-body>
          <b-card-text ><span v-html="$t('transcriptText')"></span></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
<p>&nbsp;</p>
  <b-alert show="true">
        <div v-if="$i18n.locale=='en'">
          <p>Thank you for following this new course “Responsible Use of Public Funds.” As this is a work in progress, we are seeking your feedback on the learning experience. We appreciate you taking a few minutes to tell us what worked well, any issues you faced and what we can fix to make it better. It will take you 5-10 minutes to complete the questionnaire.</p>
          <p><a href="https://csps-efpc.sondage-survey.ca/f/s.aspx?s=f594eb12-9bd2-4cde-bed9-5d3220a7113b&lang=EN" target="_blank">Questionnaire</a></p>
          
        </div>
        <div v-if="$i18n.locale=='fr'">
          <p>Merci de suivre le nouveau produit d&rsquo;apprentissage intitulé « La saine gestion des fonds publics ». Comme celui-ci est dans une phase test, nous aimerions obtenir vos commentaires sur votre expérience d&rsquo;apprentissage, particulièrement en ce qui a trait à ce qui a bien été, les défis que vous avez rencontrés et vos suggestions pour améliorer l&rsquo;expérience. Remplir le questionnaire devrait vous prendre entre 5 et 10 minutes.</p>
          <p><a href="https://csps-efpc.sondage-survey.ca/f/s.aspx?s=f594eb12-9bd2-4cde-bed9-5d3220a7113b&lang=FR" target="_blank">Questionnaire</a></p>
          
        </div>
      </b-alert>
    
     <p>&nbsp;</p>
    <h2 class="sideTitle planTitle">{{$t('plan')}}</h2>
    <section role="navigation" class="courseSection planSection" :style="{ backgroundImage: `url(${planbgBarUrl})` }">
      <microlearning path="planKey" time="2" imagePath="KeyMessP.svg" :text="$t('KeyMessages')"  :completion="$store.state.currentPlaying.kmPlan"/>
      <microlearning path="buildWP" time="20"  imagePath="BuildWP.svg" :text="$t('BuildWorkPlan')" :completion="$store.state.currentPlaying.buildWP_player"  />
      <microlearning time="20" path="createBudget" imagePath="CreateBud.svg" :text="$t('CreateBudget')" :completion="$store.state.currentPlaying.createBudget_player" />
      <microlearning time="15" path="exam1" imagePath="P-Test.svg" :text="$t('Test')" :completion="parseInt(planCompleted)" />
    </section>
    <hr class="planHr">
    <h2 class="sideTitle spendTitle">{{$t('spend')}}</h2>
    <section role="navigation" class="courseSection spendSection" :style="{ backgroundImage: `url(${spendbgBarUrl})` }">
      <microlearning path="spendKey" time="5" imagePath="KeyMessS.png" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmSpend"/>
      <microlearning imagePath="InitiateAuthSpending.svg" path="spendPart1" time="20" :text="$t('InitiateAuthorizeSpending')"  :completion="$store.state.currentPlaying.spendPart1_player" />
      <microlearning imagePath="ExerciseFinancialAuthority.svg" path="spendPart2" time="20" :text="$t('ExerciseFinancialAuthority')"  :completion="$store.state.currentPlaying.spendPart2_player" />
      <microlearning time="20" path="spendPart3" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')"  :completion="$store.state.currentPlaying.spendPart3_player" />
      <microlearning time="15" path="exam2"  imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt(spendCompleted)"/>
    </section>
    <hr class="spendHr">
    <h2 class="sideTitle reportTitle">{{$t('report')}}</h2>
    <section role="navigation" class="courseSection reportSection" :style="{ backgroundImage: `url(${reportbgBarUrl})` }">
      <microlearning imagePath="KeyMessR.png" path="reportKey" time="5" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmReport" />
      <microlearning imagePath="R-Conduct.svg" path="reportPart1" time="20" :text="$t('ConductPeriodicVarianceReporting')" :completion="$store.state.currentPlaying.reportPart1_player"/>
      <microlearning imagePath="R-Contribute.svg"  path="reportPart2" time="20" :text="$t('ContributeReporting')" :completion="$store.state.currentPlaying.reportPart2_player" />
      <microlearning imagePath="R-Test.svg" path="exam3" time="15" :text="$t('Test')" :completion="parseInt(reportCompleted)" />
    </section>
    <hr class="reportHr">
  </div>
</template>
<script type="text/javascript">
import planbgBarUrl from "~/components/plan_phase_bar.svg"
import spendbgBarUrl from "~/components/spend_phase_bar.svg"
import reportbgBarUrl from "~/components/report_phase_bar.svg"
import microlearning from "~/components/microlearning"
import hamburger from "~/components/hamburger"
import videoplayer from "~/components/interface/videoPlayer"
export default {
  data() {
    return {
      planbgBarUrl,
      spendbgBarUrl,
      reportbgBarUrl
    }
  },
  components: {
    microlearning,
    hamburger,
    videoplayer
  },
  computed:{
    thatPoint(){
      return parseInt(this.$store.state.currentPlaying.homepage)
    },
    planCompleted(){
      return this.$store.getters['plan/getScore']
    },
    reportCompleted(){
      return this.$store.getters['report/getScore']
    },
    spendCompleted(){
      return this.$store.getters['spend/getScore']
    },
    courseComplete(){
      if(this.planCompleted>=80 && this.spendCompleted>=80&&this.reportCompleted>=80){
        return true
      }
    }
  }
}

</script>
<style scoped>
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
  "transcriptText":"<p>Welcome! You&rsquo;re in the right place if you&rsquo;re a Manager looking to learn about how to make responsible use of public funds - to plan, spend and report. There are many reasons why Managers like you come to this course.</p><p><br />As a new Manager, I am new at all things related to Financial Delegation and I need to learn everything there is to know about my financial responsibilities.</p><p><br />I&rsquo;ve been a Manager for most of my career but I am new to government. I want to leverage my experience by connecting what I already know about finance to government.</p><p>&nbsp;<br />I just came back from a parental leave and I could really use a refresher on my financial responsibilities and find out what might have changed since I left.</p><p>&nbsp;<br />I&rsquo;m an experienced Manager in government. As per the policy, I need to recertify every 5 years in order to be able to continue to exercise my financial delegation. I really just want to get to the test please. <br />Boxes merge back into a single one</p><p>&nbsp;<br />Whatever the reason that brought you here, you&rsquo;re in charge of your learning.Think of this as &ldquo;a choose your own adventure&rdquo; kind of experience and take what you need in order to succeed. If all you need is to take the test because you&rsquo;re already pretty familiar with the content, then, by all means, start with that.</p><p>&nbsp;</p><p>If you just need an overview or a refresher, then simply review the intro sections of each phase to get the key highlights and tools.</p><p>Also, you will find nifty features on your screen - like the file section on the top right, where you can find tools and reference materials to help you on the job. <br />Show intro sections path</p><p>&nbsp;<br />If you&rsquo;re learning this for the first time, then take the time to go through the sections and do the in-depth learning activities, as well as the tools and resources. We promise it&rsquo;s worth the effort and that you&rsquo;ll be well prepared to take the test.</p><p>&nbsp;<br />You&rsquo;re probably wondering about the test, so here&rsquo;s how it works.</p><p>As per Treasury Board requirements, succeeding the test for this course is mandatory before you can exercise financial deletion.</p><p>There are three parts to the test - one at the end of each phase - plan, spend and report.</p><p>The passing grade is 80%, per part.</p><p>Each part should take you around 15-20 minutes.</p><p>You may access the course materials during the test and you may challenge the test as many times as you need.</p><p>&nbsp;<br />In the end, how you use this course is up to you! This course will remain accessible to you so you can come back and consult the different sections and tools when you need to on the job!</p><p>&nbsp;<br />We are rooting for you to succeed because when you steward public funds well, you succeed in your career. And, perhaps even more importantly, you serve Canadians well, with transparency and accountability. And that&rsquo;s the bottom line.</p>",
  "objectives":"Objectives",
  "HowTo":"How to Navigate"

  },
  "fr":
  {
  "welcomeText": "Bienvenue",
  "letsbegin": "Commençons",

  "transcriptText":"<p>Bienvenue! Vous &ecirc;tes au bon endroit si vous &ecirc;tes un gestionnaire qui cherche à apprendre comment utiliser de fa&ccedil;on responsable les fonds publics - pour la <strong>planification</strong>, les <strong>dépenses </strong>et les <strong>rapports</strong>. Il y a plusieurs raisons pour lesquelles des gestionnaires comme vous pourraient suivre ce cours.</p> <ul>   <li>En tant que nouveau gestionnaire, je suis nouveau à la délégation financi&egrave;re et j&rsquo;ai besoin d&rsquo;apprendre tout ce qu&rsquo;il y à savoir sur mes responsabilités financi&egrave;res.</li> </ul> <ul>   <li>J&rsquo;ai été gestionnaire pendant la majeure partie de ma carri&egrave;re, mais je suis nouveau au gouvernement. Je veux mettre à profit mon expérience en faisant le lien entre ce que je sais déjà au sujet des finances et le gouvernement.</li> </ul> <ul>   <li>Je reviens tout juste d&rsquo;un congé parental et j&rsquo;aurais vraiment besoin d&rsquo;un rappel de mes responsabilités financi&egrave;res et de ce qui aurait pu changer depuis mon départ.&nbsp;</li> </ul> <ul>   <li>Je suis un gestionnaire d&rsquo;expérience au gouvernement. Conformément à la politique, je dois renouveler ma certification tous les 5 ans afin de pouvoir continuer à exercer ma délégation financi&egrave;re. Je veux juste faire le test, s&rsquo;il vous pla&icirc;t.</li> </ul> <p>Quelle que soit la raison qui vous a amené ici, vous &ecirc;tes responsable de votre apprentissage, considérez cela comme une expérience de type &ldquo;choisissez votre propre aventure&rdquo; et prenez ce dont vous avez besoin pour réussir. Si tout ce dont vous avez besoin, c&rsquo;est de passer le test parce que vous &ecirc;tes déjà assez familier avec le contenu, alors, sentez-vous libre de commencer par là.</p> <p>Si vous n&rsquo;avez besoin que d&rsquo;une vue d&rsquo;ensemble ou d&rsquo;un rafra&icirc;chissement, passez simplement en revue les sections d&rsquo;introduction de chaque phase pour obtenir les points saillants et les outils clés.</p> <p>De plus, vous trouverez d&rsquo;astucieuses fonctions à l&rsquo;écran - comme la <strong>bo&icirc;te à outils en haut à droite</strong>, o&ugrave; vous trouverez des outils et des documents de référence pour vous aider dans votre travail.</p> <p>Si vous apprenez cela pour la premi&egrave;re fois, prenez le temps de <strong>parcourir les sections,</strong> de <strong>faire les activités d&rsquo;apprentissage en profondeur</strong>, et d&rsquo;<strong>examiner les outils et les ressources</strong>. Nous vous promettons que cela en vaut la peine!</p> <p>Vous vous posez probablement des questions au sujet du test, alors voici comment &ccedil;a marche.</p> <p>Conformément aux exigences du Conseil du Trésor, il est obligatoire de réussir l&rsquo;examen pour ce cours avant de pouvoir exercer la délégation financi&egrave;re.</p> <p>Le test comporte<strong> trois parties</strong> - une à la fin de chaque phase - <strong>planification</strong>, <strong>dépenses</strong> et <strong>rapports</strong>.&nbsp;</p> <p>La note de passage est de<strong> 80%, par partie</strong>.&nbsp;</p> <p>Chaque partie devrait vous prendre environ <strong>15-20 minutes</strong>.&nbsp;</p> <p>Vous pouvez accéder au matériel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le désirez.</p> <p>En fin de compte, c&rsquo;est à vous de décider comment vous allez utiliser ce cours! Ce cours vous restera accessible pour que vous puissiez revenir et consulter les différentes sections et outils lorsque vous en aurez besoin pour vos fonctions!&nbsp;</p> <p>Nous vous encourageons à réussir parce que lorsque vous gérez bien les fonds publics, vous réussissez dans votre carri&egrave;re. Et, ce qui est peut-&ecirc;tre encore plus important, vous servez bien les Canadiens, avec transparence et responsabilité. Et c&rsquo;est là l&rsquo;essentiel.</p>",
  "objectives":"Objectifs",
  "HowTo":"Comment naviguer ce cours"
    }
  }
</i18n>
