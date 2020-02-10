<template>
	<div>
		 <b-card>
    <b-tabs content v-model="tabIndex">
      <b-tab title="Question 1"><radioQuiz :question="$t('q1')" qId="1"/></b-tab>
      <b-tab title="Question 2"><radioQuiz :question="$t('q2')" qId="2" /></b-tab>
      <b-tab title="Question 3"><checkboxQuiz :question="$t('q3')" qId="3" :Answer="['3']"/></b-tab>
      <b-tab title="Question 4"><radioQuiz :question="$t('q4')" qId="4" /></b-tab>
    </b-tabs>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
  </b-card>
    <p class="scrollMe" v-if="$i18n.locale=='en'"><delegAutorityEn /></p>
<p class="scrollMe" v-if="$i18n.locale=='fr'"><delegAutorityFr /></p>

	</div>
</template>
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
	import radioQuiz from "~/components/radioQuiz"
  import delegAutorityEn from "~/components/delegationChart/delegchart_en"
  import delegAutorityFr from "~/components/delegationChart/delegchart_fr"
	export default{
		components:{
			checkboxQuiz,
			radioQuiz,
      delegAutorityEn,
      delegAutorityFr
		},
    data(){
      return{
        tabIndex:0
      }
    }
	}
</script>
<i18n>{
  "en": {
    "q1": {
      "text": "After looking at the following delegation of authority chart, what is the maximum amount that a manager could approve to initiate hospitality (section 32)?",
      "options": {
        "1": "$0",
        "2": "$300",
        "3": "$3,000",
        "4": "$10,000"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": "As per the signed delegation of authority chart, the manager does not have authority to initiate hospitality, so the correct answer is $0. For more information on hospitality, visit the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228' target='_blank'>Directive on Travel, Hospitality, Conference and Event Expenditures</a>."
    },
    "q2": {
      "text": "What is the lowest position that could approve the hospitality?",
      "options": {
        "1": "Director",
        "2": "Director General",
        "3": "Assistant Deputy Minister",
        "4": "Deputy Minister"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> The lowest position that could approve the hospitality is the Director.",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>. The Director is the lowest position who has the authority to approve hospitality according to this delegation chart.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>. The Director is the lowest position who has the authority to approve hospitality according to this delegation chart.",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>. The Director is the lowest position who has the authority to approve hospitality according to this delegation chart."
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Multiple departmental employees are travelling to an event. Consulting the provided departmental financial delegation chart, who would you ask to approve (section 32) a $23,000 amount made up of travel and event registration costs?",
      "options": {
        "1": "Director",
        "2": "Director General",
        "3": "Assistant Deputy Minister ",
        "4": "Deputy Head"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "You would need to consult the Assistant Deputy Minister (ADM). Only the ADM has the authority to approve departmental costs for an event of more than $20,000, and up to $25,000. Don&rsquo;t forget to consult with your Director and your Director General before approaching your ADM!<p>For more information on events, visit the <a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228'>Directive on Travel, Hospitality, Conference and Event Expenditures</a>.</p>"
    },
    "q4": {
      "text": "What does “F” or “Full” mean in the chart provided?",
      "options": {
        "1": "The sky's the limit! You may approve any amount you wish.",
        "2": "You can only approve a predefined amount. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "You are limited to the extent of your allocated budget. For more information on the authorities, visit the <a target='_blank' href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32584#'>Guide to Delegating and Applying Spending and Financial Authorities</a>."
    }
  },
  "fr": {
    "q1": {
      "text": "Après avoir examiné le tableau de délégation de pouvoirs suivant, quel est le montant maximal qu&rsquo;un gestionnaire pourrait approuver pour entreprendre des activités d&rsquo;accueil (article 32)?",
      "options": {
        "1": "0$",
        "2": "300$",
        "3": "3&nbsp;000&nbsp;$",
        "4": "10&nbsp;000&nbsp;$"
      },
      "feedback": {
        "1": "<span class='v-right' /><strong>Correct!</strong>",
        "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
        "4": "<span class='v-wrong' /><strong>Incorrect.</strong>"
      },
      "conclusion": " Selon le tableau de délégation signé, le gestionnaire n&rsquo;a pas le pouvoir d&rsquo;entreprendre des activités d&rsquo;accueil; la bonne réponse est donc 0 $. Pour de plus amples renseignements sur l&rsquo;accueil, visitez la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228' target='_blank'>Directive sur les dépenses de voyages, d&rsquo;accueil, de conférences et d&rsquo;événements</a>."
    },
    "q2": {
      "text": "Quel est le poste le moins élevé qui aurait l&rsquo;autorité d&rsquo;approuver l&rsquo;accueil?",
      "options": {
        "1": "Directeur",
        "2": "Directeur général",
        "3": "Sous-ministre adjoint",
        "4": "Sous-ministre"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>  Le poste le moins élevé qui aurait l&rsquo;autorité d&rsquo;approuver l&rsquo;accueil est celui de directeur. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.   Le directeur est le poste le moins élevé qui a le pouvoir d&rsquo;approuver l&rsquo;accueil conformément à ce tableau de délégation.",
        "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.   Le directeur est le poste le moins élevé qui a le pouvoir d&rsquo;approuver l&rsquo;accueil conformément à ce tableau de délégation. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect</strong>.   Le directeur est le poste le moins élevé qui a le pouvoir d&rsquo;approuver l&rsquo;accueil conformément à ce tableau de délégation. "
      },
      "conclusion": ""
    },
    "q3": {
      "text": "Plusieurs employés du ministère se déplacent pour assister à un événement. En consultant le tableau de délégation financière ministériel fourni, à qui demanderiez-vous d&rsquo;approuver (article 32) un montant de 23&nbsp;000&nbsp;$ pour des frais de déplacement et d&rsquo;inscription aux événements?",
      "options": {
        "1": "Directeur",
        "2": "Directeur général",
        "3": "Sous-ministre adjoint ",
        "4": "Administrateur général"
      },
      "feedback": {
        "right": "<span class='v-right' /> <strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /> <strong>Incorrect</strong>."
      },
      "conclusion": "Vous devriez consulter le sous-ministre adjoint (SMA). Seul le SMA a le pouvoir d&rsquo;approuver les coûts ministériels pour un événement de plus de 20&nbsp;000&nbsp;$ et jusqu&rsquo;à 25&nbsp;000&nbsp;$. N&rsquo;oubliez pas de consulter votre directeur et votre directeur général avant d&rsquo;approcher votre SMA! <p> Pour plus d&rsquo;information sur les événements, visiter la <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228' target='_blank'>Directive sur les dépenses de voyages, d&rsquo;accueil, de conférences et d&rsquo;événements.</a>.</p>"
    },
    "q4": {
      "text": "Que signifie 'P' ou 'Plein' dans le tableau fourni?",
      "options": {
        "1": "Tout est possible Vous pouvez approuver le montant de votre choix.",
        "2": "Vous ne pouvez approuver qu&rsquo;un montant prédéfini. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>"
      },
      "conclusion": "Vous êtes limité dans la mesure de votre budget alloué. Pour plus d&rsquo;informations sur les autorités, visitez le <a target='_blank' href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32584'>Guide de délégation et de mise en œuvre des pouvoirs de dépenser et des pouvoirs financiers</a>"
    }
  }
}</i18n>