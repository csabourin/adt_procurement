<template>
	<div>
    <b-card>
       <p v-html="$t('instructions')" />
       <windowPortal :open="openChart" @close="openChart = false">
        <delegAutorityEn v-if="$i18n.locale=='en'" />
        <delegAutorityFr v-if="$i18n.locale=='fr'" />
      </windowPortal>
      <p><b-button role="link" @click="openChart = true">{{$t('openChartButton')}}</b-button></p>
      <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
        <b-tab title="Question 2"><checkboxQuiz :question="$t('q2')" qId="2" :Answer='["3","4"]' /></b-tab>
        <b-tab title="Question 3"><radioQuiz :question="$t('q3')" qId="3" /></b-tab>
      </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group :aria-label="$t('questionNav')" class="mt-2">
          <b-button @click="[tabIndex--, focus()]" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="[tabIndex++, focus()]" :disabled="tabIndex>=2">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
    <!--<p class="scrollMe" v-if="$i18n.locale=='en'"><delegAutorityEn /></p>
    <p class="scrollMe" v-if="$i18n.locale=='fr'"><delegAutorityFr /></p>-->
	</div>
</template>

<script type="text/javascript">
	import radioQuiz from "~/components/radioQuiz"
  import checkboxQuiz from "~/components/checkboxQuiz"
  import delegAutorityEn from "~/components/delegationChart/delegchart_en"
  import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
  import windowPortal from "~/components/newWindow"
  import download from "~/components/fileDownload"
  import HTMLJobaidLink from "~/components/HTMLJobaidLink"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
      delegAutorityEn,
      delegAutorityFr,
      windowPortal,
      download,
      HTMLJobaidLink
		},
    data(){
      return{
        tabIndex:0,
        openChart: false
      }
    },
    methods:{
      focus(){
        setTimeout(function(){
          document.querySelector(".tab-pane.active .pure-radiobutton fieldset, .tab-pane.active .pure-checkbox fieldset").focus();
        }, 300);
      },
    }
	}
</script>
<i18n>{
  "en": {
    "instructions": "Answer the following questions. You will need to consult the Delegation of Spending and Financial Signing Authorities Chart.",
    "openChartButton": "Open the delegation of spending and financial signing authorities chart",
    "q1": {
      "text": "Using the delegation of financial signing authority chart provided, identify the maximum amount that a director could approve for a Non-competitive - Services transaction.",
      "options": {
        "1": "$0",
        "2": "$5,000",
        "3": "$25,000",
        "4": "$80,000"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> A director could approve a Non-competitive - Services transaction of up to $5,000.",
        "2": "<span class='v-right' /><strong>Correct!</strong> A director could approve a Non-competitive - Services transaction of up to $5,000.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> A director could approve a Non-competitive - Services transaction of up to $5,000.",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> A director could approve a Non-competitive - Services transaction of up to $5,000."
      }
    },
    "q2": {
      "text": "Using the delegation of financial signing authority chart provided, who can approve a $2 million Electronic Bidding - Services transaction?",
      "options": {
        "1": "Manager",
        "2": "Director",
        "3": "Assistant Deputy Minister",
        "4": "Deputy Head"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> A Deputy Head and an Assistant Deputy Minister are the positions than can approve a $2 million Electronic Bidding – Services transaction.",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> A Deputy Head and an Assistant Deputy Minister are the positions than can approve a $2 million Electronic Bidding – Services transaction. "
      }
    },
    "q3": {
      "text": "Using the delegation of financial signing authority chart provided, what is the lowest position that could approve a $175,000 Competitive - Services transaction?",
      "options": {
        "1": "Deputy Head",
        "2": "Assistant Deputy Minister",
        "3": "Designated Procurement Officer ",
        "4": "Director General"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> A Designated Procurement Officer is the lowest position that can approve a $175,000 Competitive - Services transaction.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> A Designated Procurement Officer is the lowest position that can approve a $175,000 Competitive - Services transaction.",
        "3": "<span class='v-right' /><strong>Correct!</strong> A Designated Procurement Officer is the lowest position that can approve a $175,000 Competitive - Services transaction.",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> A Designated Procurement Officer is the lowest position that can approve a $175,000 Competitive - Services transaction."
      }
    }
  },
  "fr": {
    "instructions": "Répondez aux questions suivantes. Veuillez consulter le Tableau de délégation des pouvoirs de dépenser et de signer des documents financiers.",
    "openChartButton": "Ouvrir le tableau de délégation de pouvoirs",
    "q1": {
      "text": "À l’aide du tableau de délégation des pouvoirs de signature en matière financière fourni, identifiez le montant maximum qu’un directeur pourrait approuver pour une transaction Non concurrentiels - Services. ",
      "options": {
        "1": "0 $",
        "2": "5 000 $",
        "3": "25 000 $",
        "4": "80 000 $"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Un directeur peut approuver une transaction Non concurrentiels – Services jusqu’à 5 000 $.",
        "2": "<span class='v-right' /><strong>Correct!</strong> Un directeur peut approuver une transaction Non concurrentiels – Services jusqu’à 5 000 $.",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Un directeur peut approuver une transaction Non concurrentiels – Services jusqu’à 5 000 $.",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Un directeur peut approuver une transaction Non concurrentiels – Services jusqu’à 5 000 $."
      }
    },
    "q2": {
      "text": "À l’aide du tableau de délégation des pouvoirs de signature en matière financière fourni, qui peut approuver une transaction de 2 millions de dollars pour une transaction Soumission électronique - Services?  ",
      "options": {
        "1": "Gestionnaire",
        "2": "Directeur",
        "3": "Sous-ministre adjoint",
        "4": "Administrateur général"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong> Un administrateur général et un sous-ministre adjoint sont ceux qui peuvent approuver une transaction Soumission électronique - Services de 2 millions de dollars. ",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Un administrateur général et un sous-ministre adjoint sont ceux qui peuvent approuver une transaction Soumission électronique - Services de 2 millions de dollars. "
      }
    },
    "q3": {
      "text": "En utilisant le tableau de délégation des pouvoirs de signature en matière financière fourni, quel est le poste le plus bas qui pourrait approuver une transaction de 175 000 $ pour une transaction Concurrentiels - Services? ",
      "options": {
        "1": "Administrateur général",
        "2": "Sous-ministre adjoint",
        "3": "Agent d’acquisition désigné",
        "4": "Directeur général"
      },
      "feedback": {
        "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Un agent d’acquisition désigné est le poste le plus bas dont le titulaire peut approuver une transaction de 175 000 $ pour une transaction Concurrentiels – Services.",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Un agent d’acquisition désigné est le poste le plus bas dont le titulaire peut approuver une transaction de 175 000 $ pour une transaction Concurrentiels – Services.",
        "3": "<span class='v-right' /><strong>Correct!</strong> Un agent d’acquisition désigné est le poste le plus bas dont le titulaire peut approuver une transaction de 175 000 $ pour une transaction Concurrentiels – Services.",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong> Un agent d’acquisition désigné est le poste le plus bas dont le titulaire peut approuver une transaction de 175 000 $ pour une transaction Concurrentiels – Services."
      }
    }
  }
}</i18n>