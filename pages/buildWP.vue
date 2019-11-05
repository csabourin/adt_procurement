<template>
  <div>
    <h1 class="pageTitle">
      {{ $t('BuildWorkPlan')}}
    </h1>
    <section>
      <video ref="videoplayer" id="mainPlayer" :poster="require('~/assets/'+ $i18n.locale +'/buildwp.jpg')" :src="require('~/assets/'+ $i18n.locale +'/buildworkplan.mp4')" controls playsinline @loadeddata="resumePosition" @timeupdate="update" @canplaythrough="isReady">
        <track :src="require('~/assets/'+ $i18n.locale +'/chapters.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div role="tablist" class="transcriptionBox">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{$t('transcript')}}</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <button class="accessibilityButton" v-for="(tracks, index) in navBarTracks" :key="index" @click="accessibleModal(index)">{{$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]}}</button>
              <span v-html="$t('transcriptText')"></span>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
      <div id="bar" ref="linkBar">
        <a href='#mainPlayer' v-for="(item,index) in navBarTracks" :key="index" :class="'chaptersLink '+ isItPlaying(index)" :data-start="Math.ceil(startTime[index]+0.5)+.01" :data-end="endTime[index]" @click="seek">
          {{ item }}<br>
          <a href="javascript:" class="plusButton" variant="light" pill @click.stop="accessibleModal(index)" :title="$t('jumpModalPartsWP') + ' - ' +navBarTracks[index]"> <plusIcon iconWidth="28"/> </a>
        </a>
      </div>
      <div v-if="false"><span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
        <span>endTime : {{endTime}}</span><br>
        <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
        <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span></div>
    </section>
    <section>
      <b-modal no-stacking id="purpose" @hide="resumePlay()" okOnly>{{ $t('gotIt') }}</b-modal>
      <b-modal no-stacking id="alignworkplan" @hide="resumePlay()"  size="xl" okOnly><planLinks /><!-- {{ $t('gotIt') }} --></b-modal>
      <b-modal no-stacking id="partsofwp" @hide="resumePlay()" size="xl" okOnly>
        <partsOfWorkPlan />
      </b-modal>
      <b-modal no-stacking id="threesixty" @hide="resumePlay()" size="lg" okOnly>
        <test360 />
      </b-modal>
      <b-modal no-stacking id="completedraft" @hide="resumePlay()" size="xl" okOnly>
        <prepareWorkPlan />
      </b-modal>
      <b-modal no-stacking id="completewp" @hide="resumePlay()" size="xl" okOnly :title="$t('completewptitle')">
        <completeWorkplan />
          
        </b-modal>
      <b-modal no-stacking id="adjustwp" @hide="resumePlay()"  size="xl" okOnly :title="$t('adjustwptitle')">
<adjustWorkplan />
      </b-modal>
      <b-modal no-stacking id="reallife" @hide="resumePlay()" :title="$t('InRealLife')" okOnly><span v-html="$t('IRLText')"></span></b-modal>
      <b-modal no-stacking id="quiz" @hide="resumePlay()" :title="$t('TakeTheQuiz')" size="xl" okOnly ><planQuiz /></b-modal>
    </section>
    <div class="bottomNav planSection">
      <microlearning path="planKey" size="140" completion="100" imagePath="KeyMessP.png">
        {{ $t('KeyMessages') }}
      </microlearning>
      <microlearning path="buildWP" youAreHere imagePath="KeyMessR.png" size="140" time="20" completion="80">
        {{ $t('BuildWorkPlan') }}
      </microlearning>
      <microlearning size="140" time="20" completion="10" tmp_imagePath="CreateBud.png">
        {{ $t('CreateBudget') }}
      </microlearning>
      <microlearning size="140" time="15" tmp_imagePath="TestPlan.png">
        Test
      </microlearning>
    </div>
  </div>
</template>
<script type="text/javascript">
import microlearning from '~/components/microlearning'
import partsOfWorkPlan from '~/components/parts_workplan'
import planLinks from '~/components/plan_links'
import prepareWorkPlan from '~/components/prepare_workplan'
import completeWorkplan from '~/components/complete_workplan'
import adjustWorkplan from '~/components/adjust_workplan'
import test360 from '~/components/test360'
import planQuiz from '~/components/planQuiz'
import plusIcon from '~/components/icons/PlusSign'
export default {
  data() {
    return {
      currentFrame: 0,
      accessiblePopup: false,
      modalArray: ["purpose", "alignworkplan", "partsofwp", "threesixty", "completedraft", "completewp", "adjustwp", "reallife", "quiz"],
      startTime: [],
      endTime: [],
      hasPlayed: {},
      navBarTracks: [],
      isPlayingNow: 0,
      isPlayingSoon: 0,
      byFrame: 0,
      justSeeked:false,
      isItReady:false
    }
  },
  components: {
    microlearning,
    planLinks,
    test360,
    partsOfWorkPlan,
    prepareWorkPlan,
    completeWorkplan,
    adjustWorkplan,
    planQuiz,
    plusIcon
  },
  methods: {
    isReady(){this.isItReady=true},
    generate() {
      const c = this.$refs.videoplayer.textTracks[0].cues
      for (let i = 0; i < c.length; i++) {
        this.navBarTracks.push(c[i].text)
        this.startTime[i] = c[i].startTime
        this.endTime[i] = Math.floor(c[i].endTime)
      }
      this.startTime.push(this.startTime[this.startTime.length - 1])
    },
    resumePlay() {
      if (!this.accessiblePopup) {
        const videoPlayer = this.$refs.videoplayer
        setTimeout(function() { videoPlayer.play(); }, 250)
      }
    },
    accessibleModal(i) {
      this.accessiblePopup = true
      this.$refs.videoplayer.pause()
      this.$bvModal.show(this.modalArray[i])
      // this.$refs.videoplayer.currentTime = this.startTime[i + 1]
    },
    showModal(i) {

      if (!this.$refs.videoplayer.paused) {
        this.$refs.videoplayer.pause()
        if (this.startTime[i + 1]) {
          this.$refs.videoplayer.currentTime = this.startTime[i + 1]
        }
        this.$bvModal.show(this.modalArray[i])
      }

    },
    seek(e) {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      this.accessiblePopup = false
      this.justSeeked = true
      const videoPlayer = this.$refs.videoplayer
      const timeData = e.target.getAttribute('data-start')
      videoPlayer.pause()
      this.isPlayingSoon = timeData
      if (!iOS) {videoPlayer.currentTime = timeData} else {videoPlayer.currentTime = timeData +2 }
      
      this.isPlayingNow = videoPlayer.currentTime
      const isNow = this.isPlayingNow
      this.currentFrame = this.startTime.findIndex(element => element === isNow)
      localStorage.setItem("WPCurrentPlaying", this.currentFrame)
      this.$nextTick(function () {
        setTimeout(function() { videoPlayer.play()}, 250)
        this.justSeeked=false
      })
    },
    resumePosition() {
      const savedPosition = this.startTime[localStorage.getItem("WPCurrentPlaying")]
      if (savedPosition){
      this.$refs.videoplayer.currentTime = savedPosition}
    },
    update(e) {
      if (!this.justSeeked){
      const v = e.target
      this.isPlayingNow = v.currentTime
      const isNow = this.isPlayingNow
      this.hasPlayed = v.played.length
      this.currentFrame = this.endTime.findIndex(element => element > isNow)
      localStorage.setItem("WPCurrentPlaying", this.currentFrame)
      this.byFrame = (this.isPlayingNow - this.isPlayingSoon)
      if ((this.isPlayingNow + this.byFrame) > this.endTime[this.currentFrame]) this.showModal(this.currentFrame)
      this.isPlayingSoon = v.currentTime
  } else {window.alert("seeking")}
    },
    isItPlaying(i) {
      const isNow = this.isPlayingNow
      if (i === this.endTime.findIndex(element => element > isNow)) {
        return 'isPlaying'
      } else { return '' }
    }
  }
}

</script>
<style>
body {
  counter-reset: episode;
}

video {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: #000;
  cursor: pointer;
}

#mainPlayer {
  width: 60vw;
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
  position: relative;
  cursor: pointer;
  color: #CCC;
  justify-content: space-evenly;
}

.chaptersLink {
  position: relative;
  align-content: flex-start;
  text-align: center;
  height: 150px;
  overflow: hidden;
  padding: 1.5em 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
  background-image: url('~assets/Film_strip.svg');
  background-size: cover;
  border-radius:2px;
  border: 1px solid #c3bfb6;
  margin: 5px 5px 10px;
  font-weight: bolder;
  width: 150px;
}

.chaptersLink:hover {
  color: #06f;
}

.chaptersLink:before {
  counter-increment: episode;
  content: "0"counter(episode);
  position: absolute;
  background-color: #608993;
  height: 2em;
  right: 0px;
  top: 0px;
  border-radius: 0 0 0 30px;
  padding: .5em .25em 0 1em;
  color: white;

}

.chaptersLink.isPlaying:before {
  background-color: #b54142;
}

.chaptersLink.isPlaying:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #b54142;
}

.plusButton{
  position:absolute;
  left:60px;
  bottom:1.6em;
  width: 36px;
}

button.accessibilityButton {
  margin: 5px;
  border-radius: 5px;
}

</style>
<i18n>{
  "en":{
  "TakeTheQuiz":"Take the Quiz",
  "completewptitle":"Activity: Complete the Work plan",
  "adjustwptitle":"Activity: Adjust the Work plan",
  "InRealLife":"In Real Life",
  "IRLText":"<strong>Go ahead!</strong> Talk to your colleagues about work plans. Go <strong>now</strong>. ",
  "gotIt":"Continue to next segment",
  "jumpModalPartsWP":"Jump to activity",
  "transcriptText":"<p>A work plan is a living document in which you define and prioritize your unit&rsquo;s activities. Think of it as a to-do list for the upcoming year. It helps communicate how you assign resources and set timelines. It is the cornerstone of your planning process because it supports your budget and reporting activities.&nbsp;</p>  <p>Typically you wouldn&rsquo;t start from scratch. You would simply review last year's work plan, budget and reports to identify what needs to be kept, added or removed for the new year.</p>  <p>But even before putting together your work plan, it&rsquo;s useful to step out of your role and to look at the big picture.</p>  <hr>  <p>&ldquo;It all starts with the Speech from the Throne, which outlines the government priorities.</p>  <p>These priorities will trickle down all the way to you as a Manager, and will need to be reflected in your work plan. Let&rsquo;s look at how that happens.<br /> <br />After the Speech from the Throne, the Prime Minister addresses a &ldquo;Mandate Letter&rdquo; to each department&rsquo;s Minister.</p>  <p>In it, the Prime Minister sets out their overall expectations and policy objectives for each department.</p>  <p>Every year, there is a Federal Budget, which sets the economic agenda for Canada for the year. Departments will have priorities and objectives which align to this agenda in addition to other core mandates.</p>  <p>The organization&rsquo;s objectives are outlined in a Departmental Results Framework &ndash; or &ldquo;DRF&rdquo;.</p>  <p>Then you have the Departmental Plan, which describes the core responsibilities of the department, the results the department wants to achieve, and indicators of those results.</p>  <p>Then you may have plans per Sector -&nbsp;Branch&nbsp;- and Directorate.</p>  <p>This is where your work plan comes in! You build your work plan around the activities for which you are responsible within your unit and this naturally ties back into the Departmental Plan.&rdquo;</p><hr><p>At this point, you might be wondering what a work plan looks like. Not all units use the same model. By talking to your colleagues and to folks in corporate planning and finance, you can find out which one is used in your office. Here is a typical work plan structure. Have a look! Also, look in the Files section on the top right to find work plan examples.</p>  <p>To build a work plan, it helps to understand the historical and cultural context of your unit by asking yourself a series of questions. This is what we call the 360 Scan.<br />Here is a fictional example of last year&rsquo;s work plan, budget and report. Try to apply the questions in the 360 Scan document to this fictional example. <br />You may access the 360 Scan document at any time from the File icon at the top right.</p> <hr>  <p>At this point, you understand the context, both historically and culturally and are in a position to craft this year&rsquo;s work plan! Imagine that your director shares with you this coming year&rsquo;s priorities for your directorate: protect aquatic ecosystems, sustain fisheries and manage the issuing of licenses.</p>  <p>To help you wrap your mind around how to fill out the other sections of the work plan, let&rsquo;s continue with the fisheries scenario. Looking at your draft, you notice that some items may have been dropped into the wrong location or may be missing. Update your draft accordingly.</p><hr><p>Alright. Your director tells you that they have been to a steering committee and that they now have new information that should be reflected in your work plan. Three things: new software implementation to speed up the issuing of licenses; new policy that now requires licenses to be issued in 15 days, not 30 days, starting November 1; a decision to not replace a retiring employee. The following exercise will help you adjust your work plan according to this new information.</p>  <p>Let&rsquo;s take what you have learned into real life. Your organization will have their own ways of doing things. Take a time out from the course to scan your intranet to see which templates are used. Connect with your colleagues, your director, or financial officer to have a chat about work plans.</p><hr><p>So now that you know how to examine, prepare and adjust a work plan, let&rsquo;s see what you remember by taking this short quiz.</p>"
  },
  "fr":{
  "TakeTheQuiz":"Répondez au questionnaire",
  "completewptitle":"Activité: Compléter le plan de travail",
  "adjustwptitle":"Activité: Ajuster le plan de travail",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<strong>Allez-y!</strong> Parlez à vos collègues des plans de travail. Allez-y <strong>maintenant</strong>.",
  "gotIt":"Continuer au segment suivant.",
  "jumpModalPartsWP":"Sauter à l'activité",
  "transcriptText":"<p>&laquo; Un plan de travail est un document &eacute;volutif dans lequel vous d&eacute;finissez et hi&eacute;rarchisez les activit&eacute;s de votre unit&eacute;. Consid&eacute;rez-le comme une liste de choses &agrave; faire pour l'ann&eacute;e &agrave; venir. Il vous aide &agrave; communiquer la fa&ccedil;on dont vous affectez les ressources et fixez des &eacute;ch&eacute;ances. C'est la pierre angulaire de votre processus de planification, car elle soutient votre budget et vos activit&eacute;s de production de rapports.&nbsp;</p><p>D'habitude, on ne part pas de z&eacute;ro. Vous n'auriez qu'&agrave; examiner le plan de travail, le budget et les rapports de l'ann&eacute;e derni&egrave;re pour d&eacute;terminer ce qui doit &ecirc;tre conserv&eacute;, ajout&eacute; ou supprim&eacute; pour la nouvelle ann&eacute;e.</p><p>Mais avant m&ecirc;me d'&eacute;laborer votre plan de travail, il est utile de s&rsquo;arr&ecirc;ter pour regarder la situation dans son ensemble. &raquo;</p><hr><p>&laquo; Tout commence avec le discours du Tr&ocirc;ne, qui &eacute;nonce les priorit&eacute;s du gouvernement.&nbsp;</p><p>Ces priorit&eacute;s se r&eacute;percuteront jusqu'&agrave; vous en tant que gestionnaire et devront se refl&eacute;ter dans votre plan de travail. Regardons comment cela se produit.</p><p>Apr&egrave;s le discours du Tr&ocirc;ne, le premier ministre adresse une &laquo; lettre de mandat &raquo; au ministre de chaque minist&egrave;re.&nbsp;</p><p>Le premier ministre y &eacute;nonce ses attentes globales et ses objectifs strat&eacute;giques pour chaque minist&egrave;re.&nbsp;</p><p>Chaque ann&eacute;e, il y a un budget f&eacute;d&eacute;ral qui &eacute;tablit le programme &eacute;conomique du Canada pour l'ann&eacute;e. Les minist&egrave;res auront des priorit&eacute;s et des objectifs qui s'aligneront sur ce programme en plus d'autres mandats de base.</p><p>Les objectifs de l'organisation sont d&eacute;crits dans un Cadre minist&eacute;riel des r&eacute;sultats - ou &laquo; CMR &raquo;.</p><p>Il y a ensuite le Plan minist&eacute;riel, qui d&eacute;crit les principales responsabilit&eacute;s du minist&egrave;re, les r&eacute;sultats que le minist&egrave;re veut atteindre et les indicateurs de ces r&eacute;sultats.&nbsp;</p><p>Ensuite, vous pouvez avoir des plans par secteur&nbsp;- direction g&eacute;n&eacute;rale&nbsp;- et direction.</p><p>C'est l&agrave; qu'intervient votre plan de travail! Vous construisez votre plan de travail autour des activit&eacute;s dont vous &ecirc;tes responsables au sein de votre unit&eacute; et cela se rattache naturellement au Plan minist&eacute;riel. &raquo;</p><hr><p>&laquo; &Agrave; ce stade, vous vous demandez peut-&ecirc;tre &agrave; quoi ressemble un plan de travail. Toutes les unit&eacute;s n'utilisent pas le m&ecirc;me mod&egrave;le. En parlant &agrave; vos coll&egrave;gues et aux gens de la planification d'entreprise et des finances, vous pouvez savoir lequel est utilis&eacute; dans votre bureau. Voici une structure de plan de travail typique. Jetez y un coup d'oeil! Aussi, regardez dans la section Fichiers en haut &agrave; droite pour trouver des exemples de plans de travail. &raquo;<br />Prenez maintenant un moment pour explorer les diff&eacute;rentes sections d'un plan de travail.</p><hr><p>&laquo; Pour &eacute;laborer un plan de travail, il est utile de comprendre le contexte historique et culturel de votre unit&eacute; en vous posant une s&eacute;rie de questions. C'est ce que nous appelons l&rsquo;aper&ccedil;u &agrave; 360 degr&eacute;s.</p><p>Voici un exemple fictif du plan de travail, du budget et du rapport de l'an dernier. Essayez d'appliquer les questions du document d&rsquo;aper&ccedil;u &agrave; 360 degr&eacute;s &agrave; cet exemple fictif.&nbsp;</p><p>Vous pouvez acc&eacute;der au document d&rsquo;aper&ccedil;u &agrave; 360 degr&eacute;s &agrave; tout moment &agrave; partir de l'ic&ocirc;ne Fichier en haut &agrave; droite. &raquo;</p><hr><p>&laquo; &Agrave; ce stade, vous comprenez le contexte, tant historique que culturel, et vous &ecirc;tes en mesure d'&eacute;laborer le plan de travail de cette ann&eacute;e! Imaginez que votre directeur partage avec vous les priorit&eacute;s de la prochaine ann&eacute;e pour votre direction : prot&eacute;ger les &eacute;cosyst&egrave;mes aquatiques, soutenir les p&ecirc;ches et g&eacute;rer la d&eacute;livrance des permis. &raquo;</p><hr><p>&laquo; Pour vous aider &agrave; vous faire une id&eacute;e de la fa&ccedil;on de remplir les autres sections du plan de travail, continuons avec le sc&eacute;nario des p&ecirc;ches. En regardant votre brouillon, vous remarquez que certains items peuvent avoir &eacute;t&eacute; d&eacute;pos&eacute;s au mauvais endroit ou manquer. Mettez &agrave; jour votre brouillon en cons&eacute;quence. &raquo;</p><hr><p>&laquo; D'accord. Votre directeur vous dit qu'il a si&eacute;g&eacute; &agrave; un comit&eacute; directeur et qu'il dispose maintenant de nouveaux renseignements qui devraient se refl&eacute;ter dans votre plan de travail. Trois choses : la mise en &oelig;uvre d'un nouveau logiciel pour acc&eacute;l&eacute;rer l'&eacute;mission de licences; une nouvelle politique qui exige maintenant que les licences soient &eacute;mises en 15 jours, et non plus en 30 jours, &agrave; compter du 1er novembre; une d&eacute;cision de ne pas remplacer un employ&eacute; qui prend sa retraite. L'exercice suivant vous aidera &agrave; ajuster votre plan de travail en fonction de ces nouvelles informations. &raquo;</p><hr><p>&laquo; Appliquez ce que vous avez appris dans la vraie vie. Votre organisation aura sa propre fa&ccedil;on de faire les choses. Prenez le temps de consulter votre intranet pour voir quels mod&egrave;les sont utilis&eacute;s. Communiquez avec vos coll&egrave;gues, votre directeur ou votre agent financier pour discuter des plans de travail. &raquo;</p><hr><p>&laquo; Maintenant que vous savez comment examiner, pr&eacute;parer et ajuster un plan de travail, voyons ce dont vous vous souvenez en r&eacute;pondant &agrave; ce petit quiz. &raquo;</p>"
  }
  }
</i18n>
