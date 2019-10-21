<template>
  <div>
    <h1 class="pageTitle">
      {{ $t('BuildWorkPlan')}}
    </h1>
    <section>
      <video ref="videoplayer" id="mainPlayer" width="800" height="600" :poster="require('~/assets/'+ $i18n.locale +'/buildwp.jpg')" :src="require('~/assets/'+ $i18n.locale +'/buildworkplan.mp4')" controls @timeupdate="update">
        <track :src="require('~/assets/'+ $i18n.locale +'/chapters.vtt')" kind="chapters" default="" @load="generate">
      </video>
      <div id="bar" ref="linkBar">
        <a href='javascript:' v-for="(item,index) in navBarTracks" :key="index" :class="'chaptersLink '+ isItPlaying(index)" :data-start="startTime[index]" @click="seek">
          {{ item }}
        </a>
        <span class="chaptersLink"><input type="checkbox" id="completion"><label for="completion">{{$t('MarkCompleted')}}</label></span>
      </div>
      <div v-if="false"><span>currentFrame :{{currentFrame}}</span><br><span>startTime : {{startTime}}</span><br>
        <span>endTime : {{endTime}}</span><br>
        <span>isPlayingNow : {{ isPlayingNow}}</span> FPS: <span>{{ byFrame }}</span><br>
        <span v-for="(segments, index) in hasPlayed">HP {{ hasPlayed }}P: {{ segments }}</span></div>
    </section>
    <section>
      <b-modal id="purpose" @hide="resumePlay()" okOnly>{{ $t('gotIt') }}</b-modal>
      <b-modal id="alignworkplan" @hide="resumePlay()" okOnly>{{ $t('gotIt') }}</b-modal>
      <b-modal id="partsofwp"  @hide="resumePlay()" size="xl" okOnly>
        <partsOfWorkPlan />
      </b-modal>
      <b-modal id="threesixty" @hide="resumePlay()" size="lg" okOnly>
        <test360 />
      </b-modal>
      <b-modal id="completedraft" @hide="resumePlay()">Complete Draft</b-modal>
      <b-modal id="completewp" @hide="resumePlay()" :title="$t('completewptitle')">Complete WP</b-modal>
      <b-modal id="adjustwp" @hide="resumePlay()" title="Activity: Adjust the Work plan">Adjust WP</b-modal>
      <b-modal id="reallife" @hide="resumePlay()" :title="$t('InRealLife')" okOnly><span v-html="$t('IRLText')"></span></b-modal>
      <b-modal id="quiz" @hide="">Take the quiz</b-modal>
    </section>
    <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion-1 variant="light">{{$t('transcript')}}</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text><button @click="accessibleModal(2)">{{$t('jumpModalPartsWP')}}</button><span v-html="$t('transcriptText')"></span>
            </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
    <div class="bottomNav planSection">
      <microlearning path="planKey" size="140" completion="100" imagePath="KeyMessP.png">
        {{ $t('KeyMessages') }}
      </microlearning>
      <microlearning path="buildWP" size="140" time="20" completion="80">
        {{ $t('BuildWorkPlan') }}
      </microlearning>
      <microlearning size="140" time="20" completion="10" imagePath="CreateBud.png">
        {{ $t('CreateBudget') }}
      </microlearning>
      <microlearning size="140" time="15" imagePath="TestPlan.png">
        Test
      </microlearning>
    </div>
  </div>
</template>
<script type="text/javascript">
import microlearning from '~/components/microlearning'
import partsOfWorkPlan from '~/components/parts_workplan'
import test360 from '~/components/test360'
export default {
  data() {
    return {
      currentFrame: 0,
      modalArray: ["purpose", "alignworkplan", "partsofwp", "threesixty", "completedraft", "completewp", "adjustwp", "reallife", "quiz"],
      startTime: [],
      endTime: [],
      hasPlayed: {},
      navBarTracks: [],
      isPlayingNow: 0,
      isPlayingSoon: 0,
      byFrame: 0
    }
  },
  components: {
    microlearning,
    test360,
    partsOfWorkPlan
  },
  methods: {
    generate() {
      const c = this.$refs.videoplayer.textTracks[0].cues
      for (let i = 0; i < c.length; i++) {
        this.navBarTracks.push(c[i].text)
        this.startTime[i] = c[i].startTime
        this.endTime[i] = c[i].endTime
      }
    },
    resumePlay() {
      const videoPlayer = this.$refs.videoplayer
      setTimeout(function() { videoPlayer.play(); }, 500)
    },
    accessibleModal(i){
      this.$bvModal.show(this.modalArray[i])
      this.$refs.videoplayer.currentTime = this.startTime[i + 1]
    },
    showModal(i) {

      if (!this.$refs.videoplayer.paused) {
        this.$refs.videoplayer.pause()
        this.$refs.videoplayer.currentTime = this.startTime[i + 1]
        this.$bvModal.show(this.modalArray[i])
      }

    },
    seek(e) {
      const videoPlayer = this.$refs.videoplayer
      this.isPlayingSoon = e.target.getAttribute('data-start')
      this.$refs.videoplayer.currentTime = e.target.getAttribute('data-start')
      videoPlayer.play()
    },
    update(e) {
      const v = e.target
      this.isPlayingNow = v.currentTime
      const isNow = this.isPlayingNow
      this.hasPlayed = v.played.length
      this.currentFrame = this.endTime.findIndex(element => element > isNow)
      this.byFrame = (this.isPlayingNow - this.isPlayingSoon)
      if ((this.isPlayingNow + this.byFrame) > this.endTime[this.currentFrame]) this.showModal(this.currentFrame)
      this.isPlayingSoon = v.currentTime
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
  margin: auto;
  display: block;
}

#bar {
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin: auto;
  position: relative;
  cursor: pointer;
  color: #CCC;
  width: 800px;
}

.chaptersLink {
  position: relative;
  align-content: middle;
  text-align: center;
  height: 8em;
  overflow: hidden;
  padding: 1.5em;
  line-height: 17px;
  color: #575757;
  background-color: #ebebeb;
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
  height: 15px;
  background-color: #b54142;
}

</style>
<i18n>{
  "en":{"completewptitle":"Activity: Complete the Work plan",
  "InRealLife":"In Real Life",
  "IRLText":"<strong>Go ahead!</strong> Talk to your colleagues about work plans. Go <strong>now</strong>. ",
  "gotIt":"Got it!",
  "jumpModalPartsWP":"Jump to parts of a work plan",
  "transcriptText":"The purpose of a work plan.<br> A work plan is a living document in which you define and prioritize your unit activities think of it as a to-do list for the upcoming year it helps communicate how you assign resources and set timelines it is the cornerstone of your planning process because it supports your budget and reporting activities typically you wouldn't start from scratch you would simply review last year's work plan budget and report and identify what needs to be kept added or removed the next year but even before putting together your work plan it's useful to step out of your role and to look at the big picture it all starts with this speech from the throne which outlines government priorities these priorities will trickle down all the way to you as a manager and will need to be reflected in your work plan let's look at how that happens after the speech from the throne the Prime Minister addresses a mandate letter to each departments Minister in it the Prime Minister sets out their overall expectations and policy objectives for each department every year there is a federal budget which sets the economic agenda for Canada for the year departments will have priorities and objectives which will align to this agenda in addition to other core mandates the organization's objectives are outline and a departmental results framework or DRF the DRF is very high-level broke into strategic outcomes then you have the departmental plan which describes the core responsibilities apartment the results the department wants to achieve and lead indicators for these results the departmental plan is then broken down into plans per sector branch and directorate this is where your work plan comes in you build your work plan around the activities for which you are responsible within your unit and this naturally ties back to the departmental plan at this point you might be wondering what a work plan looks like not all units use the same model by talking to colleagues you can find out which one is used in your office here is a typical work plan structure have a look also look in the file section on the top right to find work plan examples to build a work plan it helps to understand the historical and cultural context of your unit by asking yourself a series of questions this is what we call the 360 scan here is a fictional example of last year's work plan budget and report try to apply the questions in the 360 scan document to this fictional example you may access the 360 stand document at any time from the file icon at the top right at this point you understand the context both historically and culturally and are in a position to craft this year's work plan let's continue to build on the fishing licenses scenario imagine that your director shares with you this coming years priorities for your Directorate protect aquatic ecosystems sustain fisheries and manage the issuing of life to help you wrap your mind around how to fill the other sections of the work plan let's continue with the fisheries scenario looking at your draft you notice that some items may have been dropped in the wrong location or may be missing update your draft accordingly all right your director tells you that they have been to a steering committee and now they have new information that should be reflected in your work plan three things new software implementation to speed up the issuing of licenses new policy that now requires licenses to be issued in 15 days in all 30 days starting November 1st and a decision not to replace a retiring employee the following exercise will help you adjust your work plan according to this new information let's take what you've learned into real life your organization will have their own ways of doing things take a time out from this course to scan your intranet to see which templates are used connect with your colleagues your director your financial officer to have a chat about work life so now that you know how to examine prepare and adjust a work plan let's see what you remember by taking this short quiz."
  },
  "fr":{"completewptitle":"Activité: Compléter le plan de travail",
  "InRealLife":"Dans la vraie vie",
  "IRLText":"<strong>Allez-y!</strong> Parlez à vos collègues des plans de travail. Allez-y <strong>maintenant</strong>.",
  "gotIt":"Bien compris!",
  "jumpModalPartsWP":"Sauter aux parties d'un plan de travail",
  "transcriptText":"Un plan de travail est un document   évolutif dans lequel les activités de  votre unité sont définies et placé dans l'ordre d'importance. c'est comme une liste de choses à faire pour l'année à   venir et vous allez à communiquer   comment vous savez les sources et il   fixe et les géants.   C'est la pierre angulaire de votre   processus de planification   car elles soutiennent votre budget et   éventuellement vos rapports d'habitude   on ne part pas de zéro   on examine le plan de travail le budget   et les rapports de l'année dernière pour   déterminer ce qui doit être conservé   ajouter ou supprimer pour l'amiral   mais avant même d'élaborer votre plan de   travail et les tutsis de s'arrêter pour   regarder la situation dans son enfant   tout commence avec le discours du trône   qui énonce les priorités du gouvernement   ces priorités décembre jusqu'à votre une   prime et doivent se refléter dans votre   plan de travail   regardons comment cela se produit après   le discours semble le premier ministre   adresse une lettre de monde à chaque   mise et lou aliénant ses attentes   globale et ses objectifs stratégiques   pour chaque ministère chaque année le   budget fédéral établi le programme   économique du canada pour l'année   les ministères se voit attribuer des   priorités et les objectifs qui   s'aligneront avec la priorité économique   en plus d'autres mandats de mme à chaque   année le budget fédéral établi le   programme économique du canada pour la   nuit la ligne star se voir attribuer   priorités et les objectifs qui   s'aligneront sur ce programme en plus   d'autres mandats devant les objectifs de   l'organisation sont décrits dans un   cadre ministériel de résultat ou cmr   élit ensuite le plan ministériel qui   décrit les principales responsabilités   du ministère les résultats que le   ministère veut d'affaires et les   indicateurs de ce résultat   ensuite vous obtiendrez des plans par   secteurs directions générales et   directions et celle là qu'intervient   notre plan de travail vous le   construisez autour des activités dont   vous êtes responsables au sein de votre   unité est ce bien se rattache   naturellement ou plan ministériel   à ce stade vous vous demandez pas à quoi   ressemble un plan de travail toutes les   unités n'utilise pas le mot d en parler   aux collègues les gens de la   planification financière des finances   vous pouvez savoir lequel est utilisé   dans votre bureau   voici une structure de plan de travail   typique   j'étais bien trop d'oeil aussi regarder   dans la section fichiers en haut à   droite pour trouver des exemples de plan   de travail   prenez maintenant un moment pour   explorer les différentes sections d'un   plan de travail   pour élaborer un plan de travail il est   utile de comprendre le contexte   historique et culturel de votre unité en   nous posant une série de questions c'est   ce que nous appelons l'analyse 3 soit   famille   voici un exemple fictif du plan de   travail du budget et du rafale de l'an   dernier essayait d'appliquer les   questions du document analyse 3,60 à cet   exemple vous pouvez accéder aux   documents d'analysé 3,64 figé en haut à   droite   à ce stade vous comprenez le contexte   historique et culturel et où vous êtes   en mesure d'élaborer le plan de travail   de ces ballons   imaginez que votre directeur ou   directrice partage avec vous les   priorités de la prochaine année pour   votre direction   c'est à dire protéger les écosystèmes   aquatiques soutenir les pêches et gérer   la délivrance du permis pour vous aider   à vous faire une idée sur la façon de   remplir les autres sections du plan de   travail continueront avec le scénario   d'une pêche en regardant votre bouillon   vous remarqué que certains items peuvent   avoir été placé au mauvais endroit où   sont maintenant car les ajustements   nécessaires   votre directrice qu'elle revient d'une   réunion et qu'elle dispose maintenant de   nouveaux renseignements qui devrait se   refléter dans votre plan de travail   trois choses la mise en oeuvre d'un   nouveau logiciel pour accélérer une   sorte de licence une nouvelle politique   qui exige maintenant que les licences   optimisant quelques jours et non plus en   trente jours à compter du 1er novembre   et une décision de ne pas remplacer un   employé qui prend sa retraite   l'exercice suivant vous aidera à ajuster   votre plan de travail en fonction de ces   nouvelles informations   appliquer maintenant ce que vous avez   appris dans la vraie vie   votre organisation aura sa propre façon   de faire les choses   prenez le temps de consulter votre   intranet pour voir quels modèles sont   utilisés comme nous qui avec vos   collègues directeurs ou votre agent   financier pour discuter des plans de   travail   maintenant que vous savez comment   examiner préparer les agissements plan   de travail   voyons ce dont vous souvenez à répondre   un petit quiz    "
  }
  }</i18n>
