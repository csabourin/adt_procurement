<template>
  <div class="mainWindow">
    <p>&nbsp;</p>
    <div class="videoContain">
      <video id="introVideo" :src="require('~/assets/'+ $i18n.locale +'/IntroVideoPrototype.mp4')" controls :poster="require('~/assets/'+ $i18n.locale +'/video_poster.PNG')">
      </video>
       <div role="tablist" class="transcriptionBox">
    <b-card no-body class="mb-1 text-left">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.translationbox variant="light" class="text-left" >{{$t('transcript')}}</b-button>
      </b-card-header>
      <b-collapse id="translationbox" accordion="translation-box" role="tabpanel">
        <b-card-body>
          <b-card-text ><span v-html="$t('transcriptText')"></span></b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
    </div>
     <p>&nbsp;</p>
    <h2 class="sideTitle planTitle">{{$t('plan')}}</h2>
    <section role="navigation" class="courseSection planSection" :style="{ backgroundImage: `url(${planbgBarUrl})` }">
      <microlearning path="planKey" time="2" completion=100 imagePath="KeyMessP.svg" :text="$t('KeyMessages')" />
      <microlearning path="buildWP" time="20"  imagePath="BuildWP.svg" completion=80 :text="$t('BuildWorkPlan')" />
      <microlearning time="20" path="createBudget" completion=10 imagePath="CreateBud.svg" :text="$t('CreateBudget')" />
      <microlearning time="15" tmp_imagePath="TestPlan.png" :text="$t('Test')" />
    </section>
    <hr class="planHr">
    <h2 class="sideTitle spendTitle">{{$t('spend')}}</h2>
    <section role="navigation" class="courseSection spendSection" :style="{ backgroundImage: `url(${spendbgBarUrl})` }">
      <microlearning path="spendKey" time="5" imagePath="KeyMessS.png" :text="$t('KeyMessages')" />
      <microlearning imagePath="InitiateAuthSpending.svg" path="spendPart1" time="20" :text="$t('InitiateAuthorizeSpending')" />
      <microlearning imagePath="ExerciseFinancialAuthority.svg" path="spendPart2" time="20" :text="$t('ExerciseFinancialAuthority')" />
      <microlearning time="20" path="spendPart3" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" />
      <microlearning time="15" :text="$t('Test')" />
    </section>
    <hr class="spendHr">
    <h2 class="sideTitle reportTitle">{{$t('report')}}</h2>
    <section role="navigation" class="courseSection reportSection" :style="{ backgroundImage: `url(${reportbgBarUrl})` }">
      <microlearning imagePath="KeyMessR.png" path="reportKey" time="5" :text="$t('KeyMessages')" />
      <microlearning imagePath="R-Conduct.svg" path="reportPart1" time="20" :text="$t('ConductPeriodicVarianceReporting')" />
      <microlearning imagePath="R-Contribute.svg"  path="reportPart2" time="20" :text="$t('ContributeReporting')" />
      <microlearning time="15" :text="$t('Test')" />
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

  "transcriptText":"<p>Bienvenue! Vous &ecirc;tes au bon endroit si vous &ecirc;tes un gestionnaire qui cherche &agrave; apprendre comment utiliser de fa&ccedil;on responsable les fonds publics - pour la <strong>planification</strong>, les <strong>d&eacute;penses </strong>et les <strong>rapports</strong>. Il y a plusieurs raisons pour lesquelles des gestionnaires comme vous pourraient suivre ce cours.</p> <ul>   <li>En tant que nouveau gestionnaire, je suis nouveau &agrave; la d&eacute;l&eacute;gation financi&egrave;re et j'ai besoin d'apprendre tout ce qu'il y &agrave; savoir sur mes responsabilit&eacute;s financi&egrave;res.</li> </ul> <ul>   <li>J'ai &eacute;t&eacute; gestionnaire pendant la majeure partie de ma carri&egrave;re, mais je suis nouveau au gouvernement. Je veux mettre &agrave; profit mon exp&eacute;rience en faisant le lien entre ce que je sais d&eacute;j&agrave; au sujet des finances et le gouvernement.</li> </ul> <ul>   <li>Je reviens tout juste d'un cong&eacute; parental et j'aurais vraiment besoin d'un rappel de mes responsabilit&eacute;s financi&egrave;res et de ce qui aurait pu changer depuis mon d&eacute;part.&nbsp;</li> </ul> <ul>   <li>Je suis un gestionnaire d'exp&eacute;rience au gouvernement. Conform&eacute;ment &agrave; la politique, je dois renouveler ma certification tous les 5 ans afin de pouvoir continuer &agrave; exercer ma d&eacute;l&eacute;gation financi&egrave;re. Je veux juste faire le test, s'il vous pla&icirc;t.</li> </ul> <p>Quelle que soit la raison qui vous a amen&eacute; ici, vous &ecirc;tes responsable de votre apprentissage, consid&eacute;rez cela comme une exp&eacute;rience de type &ldquo;choisissez votre propre aventure&rdquo; et prenez ce dont vous avez besoin pour r&eacute;ussir. Si tout ce dont vous avez besoin, c'est de passer le test parce que vous &ecirc;tes d&eacute;j&agrave; assez familier avec le contenu, alors, sentez-vous libre de commencer par l&agrave;.</p> <p>Si vous n'avez besoin que d'une vue d'ensemble ou d'un rafra&icirc;chissement, passez simplement en revue les sections d'introduction de chaque phase pour obtenir les points saillants et les outils cl&eacute;s.</p> <p>De plus, vous trouverez d'astucieuses fonctions &agrave; l'&eacute;cran - comme la <strong>bo&icirc;te &agrave; outils en haut &agrave; droite</strong>, o&ugrave; vous trouverez des outils et des documents de r&eacute;f&eacute;rence pour vous aider dans votre travail.</p> <p>Si vous apprenez cela pour la premi&egrave;re fois, prenez le temps de <strong>parcourir les sections,</strong> de <strong>faire les activit&eacute;s d'apprentissage en profondeur</strong>, et d&rsquo;<strong>examiner les outils et les ressources</strong>. Nous vous promettons que cela en vaut la peine!</p> <p>Vous vous posez probablement des questions au sujet du test, alors voici comment &ccedil;a marche.</p> <p>Conform&eacute;ment aux exigences du Conseil du Tr&eacute;sor, il est obligatoire de r&eacute;ussir l'examen pour ce cours avant de pouvoir exercer la d&eacute;l&eacute;gation financi&egrave;re.</p> <p>Le test comporte<strong> trois parties</strong> - une &agrave; la fin de chaque phase - <strong>planification</strong>, <strong>d&eacute;penses</strong> et <strong>rapports</strong>.&nbsp;</p> <p>La note de passage est de<strong> 80%, par partie</strong>.&nbsp;</p> <p>Chaque partie devrait vous prendre environ <strong>15-20 minutes</strong>.&nbsp;</p> <p>Vous pouvez acc&eacute;der au mat&eacute;riel de cours pendant le test et vous pouvez le reprendre autant de fois que vous le d&eacute;sirez.</p> <p>En fin de compte, c'est &agrave; vous de d&eacute;cider comment vous allez utiliser ce cours! Ce cours vous restera accessible pour que vous puissiez revenir et consulter les diff&eacute;rentes sections et outils lorsque vous en aurez besoin pour vos fonctions!&nbsp;</p> <p>Nous vous encourageons &agrave; r&eacute;ussir parce que lorsque vous g&eacute;rez bien les fonds publics, vous r&eacute;ussissez dans votre carri&egrave;re. Et, ce qui est peut-&ecirc;tre encore plus important, vous servez bien les Canadiens, avec transparence et responsabilit&eacute;. Et c'est l&agrave; l'essentiel.</p>",
  "objectives":"Objectifs",
  "HowTo":"Comment naviguer ce cours"
    }
  }
</i18n>
