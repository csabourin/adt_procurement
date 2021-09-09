<template>
  <fieldset>
    <legend>
      <p v-html="$t('instructions')" />
    </legend>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['4']" :feedback="$t('q1.feedback')" qid="q1" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['3']" :feedback="$t('q2.feedback')" qid="q2" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['1']" :feedback="$t('q3.feedback')" qid="q3" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['6']" :feedback="$t('q4.feedback')" qid="q4" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q5.sentence')" :termList="$t('q5.choices')" :answer="['5']" :feedback="$t('q5.feedback')" qid="q5" /><hr>
          <fillTheBlanks :blanks="1" :sentence="$t('q6.sentence')" :termList="$t('q6.choices')" :answer="['2']" :feedback="$t('q6.feedback')" qid="q6" /><hr>
        </b-tab>
      </b-tabs>
      <!-- Control buttons-->
      <!--<div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div> -->
    </b-card>
  </fieldset>
</template>
<script type="text/javascript">
  import fillTheBlanks from "~/components/interface/fillTheBlanks"
export default {
  components: {
    fillTheBlanks
  },
  data(){
    return{
      tabIndex:0
    }
  },
  methods:{
    focus(){
      setTimeout(function(){
        document.querySelector(".tab-pane.active").setAttribute("tabindex", 0);
        document.querySelector(".tab-pane.active").focus();
      }, 300);
    }
  }
}
</script>
<i18n>
  {
  "en": {
    "instructions": "<p><b>Identify potential existing sources for the following list of goods or services.</b></p><p>Select the best choice to fill in the blanks. </p>",
    "q1": {
      "sentence": "All your pens have run dry. A trip to one of your unit’s {0} is a good place to look for replacements.  ",
      "choices": {
        "1": "Accommodations Services ",
        "2": "boardrooms ",
        "3": "Information Technology Services",
        "4": "office supplies cabinets",
        "5": "unassigned vacant work desks",
        "6": "workstation supply closets"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "An employee requires an extra computer monitor so you send an email to {0} requesting one.",
      "choices": {
        "1": "Accommodations Services ",
        "2": "boardrooms ",
        "3": "Information Technology Services",
        "4": "office supplies cabinets",
        "5": "unassigned vacant work desks",
        "6": "workstation supply closets"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q3": {
      "sentence": "To find a new workspace for your new employee, you reach out to the {0} team.",
      "choices": {
        "1": "Accommodations Services ",
        "2": "boardrooms ",
        "3": "Information Technology Services",
        "4": "office supplies cabinets",
        "5": "unassigned vacant work desks",
        "6": "workstation supply closets"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q4": {
      "sentence": "When your keyboard tray breaks, you decide to visit one of the {0} for a replacement.",
      "choices": {
        "1": "Accommodations Services ",
        "2": "boardrooms ",
        "3": "Information Technology Services",
        "4": "office supplies cabinets",
        "5": "unassigned vacant work desks",
        "6": "workstation supply closets"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q5": {
      "sentence": "Your employee’s chair is too big, so you go to other {0} to see if you can trade it for a smaller one.",
      "choices": {
       "1": "Accommodations Services ",
        "2": "boardrooms ",
        "3": "Information Technology Services",
        "4": "office supplies cabinets",
        "5": "unassigned vacant work desks",
        "6": "workstation supply closets"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q6": {
      "sentence": "You need a flip chart stand for a few days. The easiest way to get one is to see if you can borrow one from the {0}.",
      "choices": {
        "1": "Accommodations Services ",
        "2": "boardrooms ",
        "3": "Information Technology Services",
        "4": "office supplies cabinets",
        "5": "unassigned vacant work desks",
        "6": "workstation supply closets"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    }
  },
  "fr": {
    "instructions": "<p><b>Identifiez les sources potentielles existantes pour la liste de biens ou de services suivante.</b></p><p>Sélectionnez le meilleur choix pour remplir les blancs.</p>",
    "q1": {
      "sentence": "Tous vos stylos n’ont plus d’encre. Un passage à l’un(e) des {0} de votre unité est un bon endroit pour trouver des remplaçants.",
      "choices": {
        "1": "Services d’aménagement",
        "2": "salles de conférence",
        "3": "Services des technologies de l'information",
        "4": "armoires à fournitures de bureau",
        "5": "bureaux de travail vacants non attribués",
        "6": "placards de rangement d’équipements de postes de travail"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q2": {
      "sentence": "Un employé a besoin d’un écran d’ordinateur supplémentaire, si bien que vous envoyez un courriel aux {0} pour en demander un.",
      "choices": {
        "1": "Services d’aménagement",
        "2": "salles de conférence",
        "3": "Services des technologies de l'information",
        "4": "armoires à fournitures de bureau",
        "5": "bureaux de travail vacants non attribués",
        "6": "placards de rangement d’équipements de postes de travail"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q3": {
      "sentence": "Pour trouver un espace de travail pour votre nouvel employé, vous vous adressez à l’équipe des {0} .",
      "choices": {
        "1": "Services d’aménagement",
        "2": "salles de conférence",
        "3": "Services des technologies de l'information",
        "4": "armoires à fournitures de bureau",
        "5": "bureaux de travail vacants non attribués",
        "6": "placards de rangement d’équipements de postes de travail"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q4": {
      "sentence": "Votre plateau à clavier s’est brisé et vous vous rendez à l’un des {0} pour le remplacer.",
      "choices": {
        "1": "Services d’aménagement",
        "2": "salles de conférence",
        "3": "Services des technologies de l'information",
        "4": "armoires à fournitures de bureau",
        "5": "bureaux de travail vacants non attribués",
        "6": "placards de rangement d’équipements de postes de travail"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q5": {
      "sentence": "La chaise de votre employé est trop grande, si bien que vous passez devant d’autres {0} pour voir si vous pouvez échanger la chaise contre une plus petite.",
      "choices": {
       "1": "Services d’aménagement",
        "2": "salles de conférence",
        "3": "Services des technologies de l'information",
        "4": "armoires à fournitures de bureau",
        "5": "bureaux de travail vacants non attribués",
        "6": "placards de rangement d’équipements de postes de travail"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    },
    "q6": {
      "sentence": "Vous avez besoin d’un support pour votre tableau de papier pendant quelques jours. La solution la plus simple est de voir si vous pouvez en emprunter un dans les {0} .",
      "choices": {
       "1": "Services d’aménagement",
        "2": "salles de conférence",
        "3": "Services des technologies de l'information",
        "4": "armoires à fournitures de bureau",
        "5": "bureaux de travail vacants non attribués",
        "6": "placards de rangement d’équipements de postes de travail"
      },
      "feedback": {
        "right": "",
        "wrong": ""
      }
    }
  }
}
</i18n>
<style type="text/css" scoped>
select {
  border: 0;
  border-bottom: 1px solid black;
}
</style>