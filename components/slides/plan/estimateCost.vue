<template>
  <fieldset>
    <legend>
      <p v-html="$t('instructions')" />
    </legend>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <fillTheBlanks :blanks="1" :sentence="$t('q1.sentence')" :termList="$t('q1.choices')" :answer="['2']" :feedback="$t('q1.feedback')" qid="q1" />
        </b-tab>
        <b-tab title="Question 2">
          <fillTheBlanks :blanks="1" :sentence="$t('q2.sentence')" :termList="$t('q2.choices')" :answer="['5']" :feedback="$t('q2.feedback')" qid="q2" />
        </b-tab>
        <b-tab title="Question 3">
          <fillTheBlanks :blanks="1" :sentence="$t('q3.sentence')" :termList="$t('q3.choices')" :answer="['4']" :feedback="$t('q3.feedback')" qid="q3" />
        </b-tab>
        <b-tab title="Question 4">
          <fillTheBlanks :blanks="1" :sentence="$t('q4.sentence')" :termList="$t('q4.choices')" :answer="['6']" :feedback="$t('q4.feedback')" qid="q4" />
        </b-tab>
        <b-tab title="Question 5">
          <fillTheBlanks :blanks="1" :sentence="$t('q5.sentence')" :termList="$t('q5.choices')" :answer="['9']" :feedback="$t('q5.feedback')" qid="q5" />
        </b-tab>
        <b-tab title="Question 6">
          <fillTheBlanks :blanks="1" :sentence="$t('q6.sentence')" :termList="$t('q6.choices')" :answer="['3']" :feedback="$t('q6.feedback')" qid="q6" />
        </b-tab>
        <b-tab title="Question 7">
          <fillTheBlanks :blanks="1" :sentence="$t('q7.sentence')" :termList="$t('q7.choices')" :answer="['13']" :feedback="$t('q7.feedback')" qid="q7" />
        </b-tab>
        <b-tab title="Question 8">
          <fillTheBlanks :blanks="1" :sentence="$t('q8.sentence')" :termList="$t('q8.choices')" :answer="['10']" :feedback="$t('q8.feedback')" qid="q8" />
        </b-tab>
        <b-tab title="Question 9">
          <fillTheBlanks :blanks="1" :sentence="$t('q9.sentence')" :termList="$t('q9.choices')" :answer="['1']" :feedback="$t('q9.feedback')" qid="q11" />
        </b-tab>
        <b-tab title="Question 10">
          <fillTheBlanks :blanks="1" :sentence="$t('q10.sentence')" :termList="$t('q10.choices')" :answer="['8']" :feedback="$t('q10.feedback')" qid="q10" />
        </b-tab>
        <b-tab title="Question 11">
          <fillTheBlanks :blanks="1" :sentence="$t('q11.sentence')" :termList="$t('q11.choices')" :answer="['7']" :feedback="$t('q11.feedback')" qid="q11" />
        </b-tab>
        <b-tab title="Question 12">
          <fillTheBlanks :blanks="1" :sentence="$t('q12.sentence')" :termList="$t('q12.choices')" :answer="['11']" :feedback="$t('q12.feedback')" qid="q12" />
        </b-tab>
        <b-tab title="Question 13">
          <fillTheBlanks :blanks="1" :sentence="$t('q13.sentence')" :termList="$t('q13.choices')" :answer="['12']" :feedback="$t('q13.feedback')" qid="q13" />
        </b-tab>
      </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=12">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
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
    "instructions": "Here’s a chance for you to confirm your knowledge of various types of costs related to procurement. Select the best choice to fill in the blanks.",
    "q1": {
      "sentence": "These are the costs necessary to transport goods from their place of production to their place of consumption: {0} .",
      "choices": {
        "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Delivery costs are the costs necessary to transport goods from their place of production to their place of consumption.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Delivery costs are the costs necessary to transport goods from their place of production to their place of consumption."
      }
    },
    "q2": {
      "sentence": "These are the costs linked to a measure, often economic, that encourages or discourages a person or an organization to act in a particular way, such as a bonus for finishing a project before schedule or a penalty for a project that is overdue: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Incentive costs are the costs linked to a measure, often economic, that encourages a person or an organization to act in a particular way, such as finishing a project before schedule.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Incentive costs are the costs linked to a measure, often economic, that encourages a person or an organization to act in a particular way, such as finishing a project before schedule."
      }
    },
    "q3": {
      "sentence": "These are the costs associated with the production, distribution and use of power sources such as electricity or natural gas: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Energy costs are the costs associated with the production, distribution and use of power sources such as electricity or natural gas.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Energy costs are the costs associated with the production, distribution and use of power sources such as electricity or natural gas."
      }
    },
    "q4": {
      "sentence": "These are the costs associated with setting up something, such as a complex piece of equipment: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Installation costs are the costs associated with setting up something, such as a complex piece of equipment.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Installation costs are the costs associated with setting up something, such as a complex piece of equipment."
      }
    },
    "q5": {
      "sentence": "These are the costs associated with using, maintaining and repairing a product throughout its useful life, less its estimated residual value at the time of disposal: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Operating costs are the costs associated with using, maintaining and repairing a product throughout its useful life, less its estimated residual value at the time of disposal.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Operating costs are the costs associated with using, maintaining and repairing a product throughout its useful life, less its estimated residual value at the time of disposal."
      }
    },
    "q6": {
      "sentence": "These are the costs associated with getting rid of something, such as a broken and unrepairable chair that will end up as solid waste: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Disposal costs are the costs associated with getting rid of something, such as a broken and unrepairable chair that will end up as solid waste.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Disposal costs are the costs associated with getting rid of something, such as a broken and unrepairable chair that will end up as solid waste. "
      }
    },
    "q7": {
      "sentence": "These are the costs associated with a period of change, such as a switch between a new and an old supplier, where one ramps up while the other ramps down: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Transitional costs are the costs associated with a period of change, such as a switch between a new and an old supplier, where ones ramps up while the other ramps down.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Transitional costs are the costs associated with a period of change, such as a switch between a new and an old supplier, where ones ramps up while the other ramps down."
      }
    },
    "q8": {
      "sentence": "These are the costs associated with moving something to a new area or location, such as when one group transfers an asset to another group: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Reallocation costs are the costs associated with moving something to a new area or location, such as when one group transfers an asset to another group.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Reallocation costs are the costs associated with moving something to a new area or location, such as when one group transfers an asset to another group."
      }
    },
    "q9": {
      "sentence": "These are the costs associated with the amount of goods and services used, such as the cost of energy consumed by households: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Consumption costs are the costs associated with the amount of goods and services used, such as the cost of energy consumed by households.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Consumption costs are the costs associated with the amount of goods and services used, such as the cost of energy consumed by households."
      }
    },
    "q10": {
      "sentence": "These are the costs associated with the regular surveillance or the progress accomplished over time of an activity, such as checking the progress of a construction project: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Monitoring costs are the costs associated with the regular surveillance or the progress accomplished over time of an activity, such as checking the progress of a construction project.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Consumption costs are the costs associated with the regular surveillance or the progress accomplished over time of an activity, such as checking the progress of a construction project."
      }
    },
    "q11": {
      "sentence": "These are the costs associated with keeping a resource in good condition, such as a road, a building, a vehicle, or a machine, by regularly checking it and repairing it when needed: {0}. ",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Maintenance costs are the costs associated with keeping a resource in good condition, such as a road, a building, a vehicle, or a machine, by regularly checking it and repairing it when needed.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Maintenance costs are the costs associated with keeping a resource in good condition, such as a road, a building, a vehicle, or a machine, by regularly checking it and repairing it when needed."
      }
    },
    "q12": {
      "sentence": "These are costs associated with restoring an asset to a previous operating condition: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Repair costs are the costs associated with restoring an asset to a previous operating condition.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Repair costs are the costs associated with restoring an asset to a previous operating condition."
      }
    },
    "q13": {
      "sentence": "These are the costs associated with protecting something from harm or damage with an appropriate measure: {0}.",
      "choices": {
         "1": "consumption costs",
        "2": "delivery costs",
        "3": "disposal costs",
        "4": "energy costs",
        "5": "incentive costs",
        "6": "installation costs",
        "7": "maintenance costs",
        "8": "monitoring costs",
        "9": "operating costs",
        "10": "reallocation costs",
        "11": "repair costs",
        "12": "safeguarding costs",
        "13": "transitional costs"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Safeguarding costs are the costs associated with protecting something from harm or damage with an appropriate measure.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Safeguarding costs are the costs associated with protecting something from harm or damage with an appropriate measure."
      }
    }
  },
  "fr": {
    "instructions": "Voici l’occasion pour vous de confirmer votre connaissance des types de coûts liés à l’approvisionnement. Sélectionnez le meilleur choix pour remplir les blancs.",
    "q1": {
      "sentence": "Il s’agit des coûts nécessaires pour transporter les marchandises de leur lieu de production à leur lieu de consommation : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coûts de livraison sont les coûts nécessaires pour transporter les marchandises de leur lieu de production à leur lieu de consommation.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coûts de livraison sont les coûts nécessaires pour transporter les marchandises de leur lieu de production à leur lieu de consommation."
      }
    },
    "q2": {
      "sentence": "Il s’agit des coûts liés à une mesure, souvent économique, qui encourage ou décourage une personne ou une organisation à agir dans une direction particulière, telle qu’une prime pour avoir terminé un projet avant la date prévue ou une pénalité pour un projet en retard : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coûts des mesures d’encouragement sont des coûts liés à une mesure, souvent économique, qui encourage ou décourage une personne ou une organisation à agir dans une direction particulière, telle qu’une prime pour avoir terminé un projet avant la date prévue ou une pénalité pour un projet en retard.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coûts des mesures d’encouragement sont des coûts liés à une mesure, souvent économique, qui encourage ou décourage une personne ou une organisation à agir dans une direction particulière, telle qu’une prime pour avoir terminé un projet avant la date prévue ou une pénalité pour un projet en retard."
      }
    },
    "q3": {
      "sentence": "Il s’agit des coûts liés à la production, à la distribution et à l’utilisation de sources d’énergie telles que l’électricité ou le gaz naturel : {0}.",
      "choices": {
       "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coûts énergétiques sont des coûts liés à la production, à la distribution et à l’utilisation de sources d’énergie telles que l’électricité ou le gaz naturel.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coûts énergétiques sont des coûts liés à la production, à la distribution et à l’utilisation de sources d’énergie telles que l’électricité ou le gaz naturel."
      }
    },
    "q4": {
      "sentence": "Il s’agit des coûts liés à la mise en place de quelque chose, comme une pièce d’équipement complexe : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les frais d’installation sont coûts liés à la mise en place de quelque chose, comme une pièce d’équipement complexe.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les frais d’installation sont coûts liés à la mise en place de quelque chose, comme une pièce d’équipement complexe."
      }
    },
    "q5": {
      "sentence": "Il s’agit des coûts liés à l’utilisation, à l’entretien et à la réparation d'un produit tout au long de sa vie utile, déduction faite de sa valeur résiduelle estimée au moment de son aliénation : {0}.",
      "choices": {
       "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coût d’exploitation sont coûts liés à l’utilisation, à l’entretien et à la réparation d’un produit tout au long de sa vie utile, déduction faite de sa valeur résiduelle estimée au moment de son aliénation.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coût d’exploitation sont coûts liés à l’utilisation, à l’entretien et à la réparation d’un produit tout au long de sa vie utile, déduction faite de sa valeur résiduelle estimée au moment de son aliénation."
      }
    },
    "q6": {
      "sentence": "Il s’agit des coûts liés à la mise au rebus d’un article quelconque, comme une chaise cassée et irréparable qui finira comme déchet solide : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coût d’aliénation sont coûts liés à la mise au rebus d’un article quelconque, comme une chaise cassée et irréparable qui finira comme déchet solide.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coût d’aliénation sont coûts liés à la mise au rebus d’un article quelconque, comme une chaise cassée et irréparable qui finira comme déchet solide."
      }
    },
    "q7": {
      "sentence": "Il s’agit des coûts liés à une période de changement, comme le passage d’un nouveau fournisseur à un ancien, où l’un débute ses opérations tandis que l’autre termine ses opérations : {0}.",
      "choices": {
       "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les frais de transition sont coûts liés à une période de changement, comme le passage d’un nouveau fournisseur à un ancien, où l’un débute ses opérations tandis que l’autre termine ses opérations.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les frais de transition sont coûts liés à une période de changement, comme le passage d’un nouveau fournisseur à un ancien, où l’un débute ses opérations tandis que l’autre termine ses opérations."
      }
    },
    "q8": {
      "sentence": "Il s’agit des coûts liés au déplacement d’un bien vers un nouvel endroit ou un nouveau lieu, par exemple lorsqu’un groupe transfère un actif à un autre groupe : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les frais de répartition sont des coûts liés au déplacement d’un bien vers un nouvel endroit ou un nouveau lieu, par exemple lorsqu’un groupe transfère un actif à un autre groupe.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les frais de répartition sont des coûts liés au déplacement d’un bien vers un nouvel endroit ou un nouveau lieu, par exemple lorsqu’un groupe transfère un actif à un autre groupe."
      }
    },
    "q9": {
      "sentence": "Il s’agit des coûts associés à la quantité de biens et de services utilisés, tels que le coût de l’énergie consommée par les ménages : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coûts de consommation sont des coûts associés à la quantité de biens et de services utilisés, tels que le coût de l’énergie consommée par les ménages.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coûts de consommation sont des coûts associés à la quantité de biens et de services utilisés, tels que le coût de l’énergie consommée par les ménages."
      }
    },
    "q10": {
      "sentence": "Il s’agit des coûts liés à la surveillance régulière ou aux progrès accomplis au fil du temps d’une activité telle que la vérification de l’avancement d’un projet de construction : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coûts de contrôle sont des coûts liés à la surveillance régulière ou aux progrès accomplis au fil du temps d’une activité telle que la vérification de l’avancement d’un projet de construction.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coûts de contrôle sont des coûts liés à la surveillance régulière ou aux progrès accomplis au fil du temps d’une activité telle que la vérification de l’avancement d’un projet de construction."
      }
    },
    "q11": {
      "sentence": "Il s’agit des coûts liés au maintien en bon état d’une ressource, telle qu’une route, un bâtiment, un véhicule ou une machine, en la contrôlant régulièrement et en la réparant si nécessaire : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les frais d’entretien sont des coûts liés au maintien en bon état d’une ressource, telle qu’une route, un bâtiment, un véhicule ou une machine, en la contrôlant régulièrement et en la réparant si nécessaire.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les frais d’entretien sont des coûts liés au maintien en bon état d’une ressource, telle qu’une route, un bâtiment, un véhicule ou une machine, en la contrôlant régulièrement et en la réparant si nécessaire."
      }
    },
    "q12": {
      "sentence": "Il s’agit des coûts liés à la remise en état d’un bien dans un état de fonctionnement antérieur : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les coûts de réparation sont des coûts liés à la remise en état d’un bien dans un état de fonctionnement antérieur.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coûts de réparation sont des coûts liés à la remise en état d’un bien dans un état de fonctionnement antérieur."
      }
    },
    "q13": {
      "sentence": "Il s’agit des coûts associés à la protection d’un bien contre les préjudices ou les dommages par une mesure appropriée : {0}.",
      "choices": {
        "1": "coûts de consommation",
        "2": "coûts de livraison",
        "3": "coûts d’aliénation",
        "4": "coûts énergétiques",
        "5": "coûts des mesures d’encouragement",
        "6": "frais d’installation",
        "7": "frais d’entretien",
        "8": "coûts de contrôle",
        "9": "coûts d’exploitation",
        "10": "frais de répartition",
        "11": "coûts de réparation",
        "12": "coûts de sauvegarde",
        "13": "frais de transition"
      },
      "feedback": {
       "right": "<span class='v-right' /> <strong>Correct!</strong> Les coûts de sauvegarde sont des coûts associés à la protection d’un bien contre les préjudices ou les dommages par une mesure appropriée.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les coûts de sauvegarde sont des coûts associés à la protection d’un bien contre les préjudices ou les dommages par une mesure appropriée."
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