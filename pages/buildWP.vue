<template>
  <div>
    <h2 class="pageTitle">
      {{ $t('BuildWorkPlan')}}
    </h2>
    <section>
      <videoPlayer ref="vp" videoFile="buildworkplan.mp4" chapterFile="chapters.vtt" posterFile="buildwp.jpg" :modalArray="modalArray" />
      <div role="tablist" class="transcriptionBox">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{$t('transcript')}}</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <span v-if="$i18n.locale=='en'">
                  <h2>The Purpose of a Work Plan</h2>
                  <p>A work plan is a living document in which you define and prioritize your unit&rsquo;s activities. Think of it as a to-do list for the upcoming year. It helps communicate how you assign resources and set timelines. It is the cornerstone of your planning process because it supports your budget and reporting activities.&nbsp;</p>
                  <p>Typically you wouldn&rsquo;t start from scratch. You would simply review last year's work plan, budget and reports to identify what needs to be kept, added or removed for the new year.</p>
                  <p>But even before putting together your work plan, it&rsquo;s useful to step out of your role and to look at the big picture.</p>
                  <hr>
                  <h2>Your Work Plan and Government Priorities</h2>
                  <p>&ldquo;It all starts with the Speech from the Throne, which outlines the government priorities.</p>
                  <p>These priorities will trickle down all the way to you as a Manager, and will need to be reflected in your work plan. Let&rsquo;s look at how that happens.<br /> <br />After the Speech from the Throne, the Prime Minister addresses a &ldquo;Mandate Letter&rdquo; to each department&rsquo;s Minister.</p>
                  <p>In it, the Prime Minister sets out their overall expectations and policy objectives for each department.</p>
                  <p>Every year, there is a Federal Budget, which sets the economic agenda for Canada for the year. Departments will have priorities and objectives which align to this agenda in addition to other core mandates.</p>
                  <p>The organization&rsquo;s objectives are outlined in a Departmental Results Framework &ndash; or &ldquo;DRF&rdquo;.</p>
                  <p>Then you have the Departmental Plan, which describes the core responsibilities of the department, the results the department wants to achieve, and indicators of those results.</p>
                  <p>Then you may have plans per Sector -&nbsp;Branch&nbsp;- and Directorate.</p>
                  <p>This is where your work plan comes in! You build your work plan around the activities for which you are responsible within your unit and this naturally ties back into the Departmental Plan.&rdquo;</p>
                  <hr>
                  <h2>Parts of a Work Plan</h2>
                  <p>At this point, you might be wondering what a work plan looks like. Not all units use the same model. By talking to your colleagues and to folks in corporate planning and finance, you can find out which one is used in your office. Here is a typical work plan structure. Have a look! Also, look in the Files section on the top right to find work plan examples.</p>
                  <hr>
                  <h2>Make a 360 Scan</h2>
                  <p>To build a work plan, it helps to understand the historical and cultural context of your unit by asking yourself a series of questions. This is what we call the 360 Scan.<br />Here is a fictional example of last year&rsquo;s work plan, budget and report. Try to apply the questions in the 360 Scan document to this fictional example. <br />You may access the 360 Scan document at any time from the File icon at the top right.</p>
                  <hr>
                  <h2>Prepare a Work Plan</h2>
                  <p>At this point, you understand the context, both historically and culturally and are in a position to craft this year&rsquo;s work plan! Imagine that your director shares with you this coming year&rsquo;s priorities for your directorate: protect aquatic ecosystems, sustain fisheries and manage the issuing of licenses.</p>
                  <hr>
                  <h2>Complete the Work Plan</h2>
                  <p>To help you wrap your mind around how to fill out the other sections of the work plan, let&rsquo;s continue with the fisheries scenario. Looking at your draft, you notice that some items may have been dropped into the wrong location or may be missing. Update your draft accordingly.</p>
                  <hr>
                  <h2>Adjust the Work Plan</h2>
                  <p>Alright. Your director tells you that they have been to a steering committee and that they now have new information that should be reflected in your work plan. Three things: new software implementation to speed up the issuing of licenses; new policy that now requires licenses to be issued in 15 days, not 30 days, starting November 1; a decision to not replace a retiring employee. The following exercise will help you adjust your work plan according to this new information.</p>
                  <hr>
                  <h2>In Real Life</h2>
                  <p>Let&rsquo;s take what you have learned into real life. Your organization will have their own ways of doing things. Take a time out from the course to scan your intranet to see which templates are used. Connect with your colleagues, your director, or financial officer to have a chat about work plans.</p>
                  <hr>
                  <h2>Take a Quiz</h2>
                  <p>So now that you know how to examine, prepare and adjust a work plan, let&rsquo;s see what you remember by taking this short quiz.</p>
                  <h2>Section Completed</h2>
                  <!-- Used to generate buttons to jump to activity

                   <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button> -->
                </span>
                <span v-if="$i18n.locale=='fr'">
                  <h2>Le but d'un plan de travail</h2>
                  <p>&laquo; Un plan de travail est un document &eacute;volutif dans lequel vous d&eacute;finissez et hi&eacute;rarchisez les activit&eacute;s de votre unit&eacute;. Consid&eacute;rez-le comme une liste de choses &agrave; faire pour l'ann&eacute;e &agrave; venir. Il vous aide &agrave; communiquer la fa&ccedil;on dont vous affectez les ressources et fixez des &eacute;ch&eacute;ances. C'est la pierre angulaire de votre processus de planification, car elle soutient votre budget et vos activit&eacute;s de production de rapports.&nbsp;</p>
                  <p>D'habitude, on ne part pas de z&eacute;ro. Vous n'auriez qu'&agrave; examiner le plan de travail, le budget et les rapports de l'ann&eacute;e derni&egrave;re pour d&eacute;terminer ce qui doit &ecirc;tre conserv&eacute;, ajout&eacute; ou supprim&eacute; pour la nouvelle ann&eacute;e.</p>
                  <p>Mais avant m&ecirc;me d'&eacute;laborer votre plan de travail, il est utile de s&rsquo;arr&ecirc;ter pour regarder la situation dans son ensemble. &raquo;</p>
                  <hr>
                  <h2>Lier le plan avec les priorités du gouvernement</h2>
                  <p>&laquo; Tout commence avec le discours du Tr&ocirc;ne, qui &eacute;nonce les priorit&eacute;s du gouvernement.&nbsp;</p>
                  <p>Ces priorit&eacute;s se r&eacute;percuteront jusqu'&agrave; vous en tant que gestionnaire et devront se refl&eacute;ter dans votre plan de travail. Regardons comment cela se produit.</p>
                  <p>Apr&egrave;s le discours du Tr&ocirc;ne, le premier ministre adresse une &laquo; lettre de mandat &raquo; au ministre de chaque minist&egrave;re.&nbsp;</p>
                  <p>Le premier ministre y &eacute;nonce ses attentes globales et ses objectifs strat&eacute;giques pour chaque minist&egrave;re.&nbsp;</p>
                  <p>Chaque ann&eacute;e, il y a un budget f&eacute;d&eacute;ral qui &eacute;tablit le programme &eacute;conomique du Canada pour l'ann&eacute;e. Les minist&egrave;res auront des priorit&eacute;s et des objectifs qui s'aligneront sur ce programme en plus d'autres mandats de base.</p>
                  <p>Les objectifs de l'organisation sont d&eacute;crits dans un Cadre minist&eacute;riel des r&eacute;sultats - ou &laquo; CMR &raquo;.</p>
                  <p>Il y a ensuite le Plan minist&eacute;riel, qui d&eacute;crit les principales responsabilit&eacute;s du minist&egrave;re, les r&eacute;sultats que le minist&egrave;re veut atteindre et les indicateurs de ces r&eacute;sultats.&nbsp;</p>
                  <p>Ensuite, vous pouvez avoir des plans par secteur&nbsp;- direction g&eacute;n&eacute;rale&nbsp;- et direction.</p>
                  <p>C'est l&agrave; qu'intervient votre plan de travail! Vous construisez votre plan de travail autour des activit&eacute;s dont vous &ecirc;tes responsables au sein de votre unit&eacute; et cela se rattache naturellement au Plan minist&eacute;riel. &raquo;</p>
                  <hr>
                  <h2>Parties d'un plan de travail</h2>
                  <p>&laquo; &Agrave; ce stade, vous vous demandez peut-&ecirc;tre &agrave; quoi ressemble un plan de travail. Toutes les unit&eacute;s n'utilisent pas le m&ecirc;me mod&egrave;le. En parlant &agrave; vos coll&egrave;gues et aux gens de la planification d'entreprise et des finances, vous pouvez savoir lequel est utilis&eacute; dans votre bureau. Voici une structure de plan de travail typique. Jetez y un coup d'oeil! Aussi, regardez dans la section Fichiers en haut &agrave; droite pour trouver des exemples de plans de travail. &raquo;<br />Prenez maintenant un moment pour explorer les diff&eacute;rentes sections d'un plan de travail.</p>
                  <hr>
                  <h2>Effectuer une analyse 360</h2>
                  <p>&laquo; Pour &eacute;laborer un plan de travail, il est utile de comprendre le contexte historique et culturel de votre unit&eacute; en vous posant une s&eacute;rie de questions. C'est ce que nous appelons l&rsquo;aper&ccedil;u &agrave; 360 degr&eacute;s.</p>
                  <p>Voici un exemple fictif du plan de travail, du budget et du rapport de l'an dernier. Essayez d'appliquer les questions du document d&rsquo;aper&ccedil;u &agrave; 360 degr&eacute;s &agrave; cet exemple fictif.&nbsp;</p>
                  <p>Vous pouvez acc&eacute;der au document d&rsquo;aper&ccedil;u &agrave; 360 degr&eacute;s &agrave; tout moment &agrave; partir de l'ic&ocirc;ne Fichier en haut &agrave; droite. &raquo;</p>
                  <hr>
                  <h2>Préparer un plan de travail</h2>
                  <p>&laquo; &Agrave; ce stade, vous comprenez le contexte, tant historique que culturel, et vous &ecirc;tes en mesure d'&eacute;laborer le plan de travail de cette ann&eacute;e! Imaginez que votre directeur partage avec vous les priorit&eacute;s de la prochaine ann&eacute;e pour votre direction : prot&eacute;ger les &eacute;cosyst&egrave;mes aquatiques, soutenir les p&ecirc;ches et g&eacute;rer la d&eacute;livrance des permis. &raquo;</p>
                  <hr>
                  <h2>Compléter le plan de travail</h2>
                  <p>&laquo; Pour vous aider &agrave; vous faire une id&eacute;e de la fa&ccedil;on de remplir les autres sections du plan de travail, continuons avec le sc&eacute;nario des p&ecirc;ches. En regardant votre brouillon, vous remarquez que certains items peuvent avoir &eacute;t&eacute; d&eacute;pos&eacute;s au mauvais endroit ou manquer. Mettez &agrave; jour votre brouillon en cons&eacute;quence. &raquo;</p>
                  <hr>
                  <h2>Ajuster le plan de travail</h2>
                  <p>&laquo; D'accord. Votre directeur vous dit qu'il a si&eacute;g&eacute; &agrave; un comit&eacute; directeur et qu'il dispose maintenant de nouveaux renseignements qui devraient se refl&eacute;ter dans votre plan de travail. Trois choses : la mise en &oelig;uvre d'un nouveau logiciel pour acc&eacute;l&eacute;rer l'&eacute;mission de licences; une nouvelle politique qui exige maintenant que les licences soient &eacute;mises en 15 jours, et non plus en 30 jours, &agrave; compter du 1er novembre; une d&eacute;cision de ne pas remplacer un employ&eacute; qui prend sa retraite. L'exercice suivant vous aidera &agrave; ajuster votre plan de travail en fonction de ces nouvelles informations. &raquo;</p>
                  <hr>
                  <h2>Dans la vraie vie</h2>
                  <p>&laquo; Appliquez ce que vous avez appris dans la vraie vie. Votre organisation aura sa propre fa&ccedil;on de faire les choses. Prenez le temps de consulter votre intranet pour voir quels mod&egrave;les sont utilis&eacute;s. Communiquez avec vos coll&egrave;gues, votre directeur ou votre agent financier pour discuter des plans de travail. &raquo;</p>
                  <hr>
                  <h2>Répondez à un questionnaire rapide</h2>
                  <p>&laquo; Maintenant que vous savez comment examiner, pr&eacute;parer et ajuster un plan de travail, voyons ce dont vous vous souvenez en r&eacute;pondant &agrave; ce petit quiz. &raquo;<h2>Section complétée</h2>
                  </p>
                </span>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      </ul>
    </section>
    <section>
      <b-modal no-stacking id="purpose" @hide="resumePlay()" okOnly>{{ $t('gotIt') }}</b-modal>
      <b-modal no-stacking id="alignworkplan" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('activityLinks')}}</template>
        <p>{{$t('gotoLinks')}}</p>
        <planLinks /><!-- {{ $t('gotIt') }} -->
      </b-modal>
      <b-modal no-stacking id="partsofwp" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('partsofWPTitle')}}</template>
        <partsOfWorkPlan />
      </b-modal>
      <b-modal no-stacking id="threesixty" @hide="resumePlay()" size="lg" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('scan360Title')}}</template>
        <test360 />
      </b-modal>
      <b-modal no-stacking id="completedraft" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('completewpDrafttitle')}}</template>
        <prepareWorkPlan />
      </b-modal>
      <b-modal no-stacking id="completewp" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('completewptitle')}}</template>
        <completeWorkplan />
      </b-modal>
      <b-modal no-stacking id="adjustwp" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('adjustwptitle')}}</template>
        <adjustWorkplan />
      </b-modal>
      <b-modal no-stacking id="reallife" @hide="resumePlay()" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('InRealLife')}}</template>
        <span v-html="$t('IRLText')"></span>
      </b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" size="xl" okOnly>
        <template v-slot:modal-title><img src="~/assets/ActivityIcon.svg" :alt="$t('pencilIcon')" width="32" height="32"> {{$t('TakeTheQuiz')}}</template>
        <planQuiz />
      </b-modal>
    </section>
    <div class="bottomNav planSection">
      <div class="planSectionBar"><span>{{$t('planSectionBar')}}</span></div>
      <microlearning path="planKey" size="140" completion="100" imagePath="KeyMessP.png" :text="$t('KeyMessages')" />
      <microlearning path="buildWP" youAreHere imagePath="BuildWP.svg" size="140" time="20" completion="80" :text="$t('BuildWorkPlan')" />
      <microlearning size="140" path="createBudget" time="20" completion="10" imagePath="CreateBud.svg" :text="$t('CreateBudget')" />
      <microlearning size="140" path="exam1" time="15" imagePath="P-Test.svg" :text="$t('Test')" />
    </div>
  </div>
</template>
<script type="text/javascript">
import videoPlayer from '~/components/interface/videoPlayer'
import microlearning from '~/components/microlearning'
import partsOfWorkPlan from '~/components/slides/plan/parts_workplan'
import planLinks from '~/components/plan_links'
import prepareWorkPlan from '~/components/slides/plan/prepare_workplan'
import completeWorkplan from '~/components/slides/plan/complete_workplan'
import adjustWorkplan from '~/components/slides/plan/adjust_workplan'
import test360 from '~/components/slides/plan/test360'
import planQuiz from '~/components/slides/plan/planQuiz'
export default {
  data() {
    return {
      modalArray: ["purpose", "alignworkplan", "partsofwp", "threesixty", "completedraft", "completewp", "adjustwp", "reallife", "quiz"],
    }
  },
  components: {
    microlearning,
    videoPlayer,
    planLinks,
    test360,
    partsOfWorkPlan,
    prepareWorkPlan,
    completeWorkplan,
    adjustWorkplan,
    planQuiz
  },
  methods: {
    resumePlay() {
      this.$refs.vp.resumePlay()
    },

    accessibleModal(i) {
      this.accessiblePopup = true
      this.$refs.videoplayer.pause()
      this.$bvModal.show(this.modalArray[i])
      // this.$refs.videoplayer.currentTime = this.startTime[i + 1]
    }
  }
}

</script>
<style scoped>
.planSection {
  position: relative;
}

.planSectionBar {
  position: absolute;
  background-color: #d1dfe1;
  width: 100vw;
  height: 30px;
  text-align: left;
  left: -15px;
  top: 38%;
}

.planSectionBar span {
  padding: 2px 10px 0;
  color: #4d4d4d;
  font-weight: bold;
  background-color: #fff;
  display: inline-block;
  height: 100%;
  margin-left: 15px;
}

</style>
<i18n>{
  "en":{
  "gotIt":"Continue to next segment",
  "activityLinks":"Activity: External Links",
  "gotoLinks":"These links are also available in the Toolbox",
  "partsofWPTitle":"Activity: Parts of a Work Plan",
  "completewpDrafttitle":"Activity: Prepare a Work Plan",
  "completewptitle":"Activity: Complete the Work plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "scan360Title":"Activity: Apply the 360 scan",
  "InRealLife":"In Real Life",
  "IRLText":"<p>Take what you have learned into real life!</p><p>Your organization will have their own ways of doing things. Take a time out from the course to scan your intranet to see which templates are used.</p><p>Connect with your colleagues, your director, or financial officer to have a chat about work plans.</p> ",
  "TakeTheQuiz":"Take the Quiz",
  "jumpModalPartsWP":"Jump to activity",
  "playSegment":"Play video segment",
  "transcriptText":"",
  "planSectionBar": "PLAN"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "activityLinks":"Activity: Liens externes",
  "gotoLinks":"Ces liens se retrouvent aussi dans la boite à outils",
  "partsofWPTitle":"Activité: Parties d'un plan de travail",
  "completewpDrafttitle":"Activité: Préparer un plan de travail",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "scan360Title":"Activité: Appliquez l'apperçu 360",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<p>Appliquez maintenant ce que vous avez appris - dans la vraie vie!</p>  <p>Votre organisation aura sa propre fa&ccedil;on de faire les choses. Prenez le temps de consulter votre intranet pour voir quels mod&egrave;les sont utilis&eacute;s.</p>  <p>Communiquez avec vos coll&egrave;gues, votre directeur ou votre agent financier pour discuter des plans de travail. </p>",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l'activité",
  "playSegment":"Faire jouer le segment vidéo",
  "transcriptText":"",
  "planSectionBar": "PLANIFICATION"
  }
  }
</i18n>
