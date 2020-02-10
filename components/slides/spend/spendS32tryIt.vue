<template>
  <div>
    <span v-if="$i18n.locale=='en'">
      <p>To deliver on your work plan, one of your activities requires you to purchase 10 microscopes for your team. Each microscope costs $200.</p>
      <p>First, let&rsquo;s check your budget.</p>
      <table border='1'>
        <tbody>
          <tr style="background-color: #d9d2e9;">
            <th>
              <p>Budget</p>
            </th>
            <th>
              <p>Commitment</p>
            </th>
            <th>
              <p>Year to Date Actuals</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>$44,900</p>
            </td>
            <td>
              <p>$15,000</p>
            </td>
            <td>
              <p>$29,000</p>
            </td>
          </tr>
        </tbody>
      </table>
    </span>
    <span v-if="$i18n.locale=='fr'">
      <p>Pour réaliser votre plan de travail, l&rsquo;une de vos activités exige que vous achetiez dix microscopes pour votre équipe. Chaque microscope coûte 200 $.</p>
      <p>D&rsquo;abord, vérifions votre budget.</p>
      <table border='1'>
        <tbody>
          <tr style="background-color: #d9d2e9;">
            <th>
              <p>Budget</p>
            </th>
            <th>
              <p>Engagements </p>
            </th>
            <th>
              <p>Dépenses réelles à ce jour</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>44&nbsp;900$</p>
            </td>
            <td>
              <p>15&nbsp;000$</p>
            </td>
            <td>
              <p>29&nbsp;000$</p>
            </td>
          </tr>
        </tbody>
      </table>
    </span>
    <b-card>
      <b-tabs content v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1" />
        </b-tab>
        <b-tab title="Question 2">
          <radioQuiz :question="$t('q2')" qId="2" />
          <br>
          <br>
          <SignatureCard />
        </b-tab>
        <b-tab title="Question 3">
          <radioQuiz :question="$t('q3')" qId="3" />
        </b-tab>
        <b-tab title="Question 4">
          <radioQuiz :question="$t('q4')" qId="4" />
        </b-tab>
      </b-tabs>
        <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++" :disabled="tabIndex>=3">{{$t('nextPage')}}</b-button>
        </b-button-group>
      </div>
    </b-card>
  </div>
</template>
<script type="text/javascript">
import checkboxQuiz from "~/components/checkboxQuiz"
import radioQuiz from "~/components/radioQuiz"
import SignatureCard from "~/components/delegationChart/signatureCard"
export default {
  components: {
    checkboxQuiz,
    radioQuiz,
    SignatureCard
  },
  data(){
    return {
      tabIndex:0
    }
  }
}
</script>
<i18n>{
  "en": {
  "q1": {
  "text": "Do you have enough funds to cover the cost of the microscopes?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "Of your $44,900 budget, you have already committed $15,000 and spent $29,000. So, $44,000 is already accounted for, meaning there is only $900 left in your budget."
  },
  "q2": {
  "text": "If there had been enough funds in the budget, looking at the provided specimen signature card, does the manager have the required delegated authority to initiate and commit the funds?",
  "options": {
  "1": "Yes",
  "2": "No"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "The manager has the authority to initiate and commit the funds needed for the microscopes."
  },
  "q3": {
  "text": "What is the best spending mechanism to use to purchase the microscopes?",
  "options": {
  "1": "Acquisition Card",
  "2": "Competitive Contract",
  "3": "Standing Offer",
  "4": "Supply Arrangement"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Given that it is only $2,000 for 10 microscopes, the acquisition card is the best spending mechanism."
  },
  "q4": {
  "text": "What is the nature of this financial transaction (microscopes)?",
  "options": {
  "1": "Revenue ",
  "2": "Expenditure",
  "3": "Asset",
  "4": "Liability"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Given that it is only $2,000 for 10 microscopes, it is an expenditure. If you had purchased more microscopes and/or at a higher unit price, it may be considered an asset. Consult your department to find out your limits."
  }
  },
  "fr": {
  "q1": {
  "text": "Avez-vous assez d&rsquo;argent pour couvrir le coût des microscopes?",
  "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "De votre budget de 44&nbsp;900&nbsp;$, vous avez déjà engagé 15&nbsp;000&nbsp;$ et dépensé 29&nbsp;000&nbsp;$. Donc, 44&nbsp;000&nbsp;$ sont déjà comptabilisés, ce qui signifie qu&rsquo;il ne reste que 900 $ dans votre budget."
  },
  "q2": {
  "text": "S&rsquo;il y avait eu suffisamment de fonds dans le budget, en examinant la carte de signature fournie, le gestionnaire a-t-il le pouvoir délégué nécessaire pour engager les fonds?",
 "options": {
  "1": "Oui",
  "2": "Non"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Le gestionnaire a l&rsquo;autorité d&rsquo;initier et d&rsquo;engager les fonds nécessaires pour les microscopes."
  },
  "q3": {
  "text": "Quel est le meilleur mécanisme de dépense à utiliser pour acheter les microscopes ?",
  "options": {
  "1": "Carte d&rsquo;achat",
  "2": "Contrat concurrentiel",
  "3": "Offre à commandes",
  "4": "Arrangement en matière d&rsquo;approvisionnement"
  },
  "feedback": {
  "1": "<span class='v-right' /> <strong>Correct!</strong>",
  "2": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Étant donné qu&rsquo;il ne s&rsquo;agit que de 2&nbsp;000&nbsp;$ pour 10 microscopes, la carte d&rsquo;achat est le meilleur mécanisme de dépense."
  },
  "q4": {
  "text": "Quelle est la nature de cette transaction financière (microscopes)?",
  "options": {
  "1": "Revenu",
  "2": "Dépense",
  "3": "Actif",
  "4": "Passif"
  },
  "feedback": {
  "1": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "2": "<span class='v-right' /> <strong>Correct!</strong>",
  "3": "<span class='v-wrong' /> <strong>Incorrect</strong>.",
  "4": "<span class='v-wrong' /> <strong>Incorrect</strong>."
  },
  "conclusion": "Étant donné qu&rsquo;il ne s&rsquo;agit que de 2&nbsp;000&nbsp;$ pour 10 microscopes, c&rsquo;est une dépense. Si vous aviez acheté plus de microscopes et/ou à un prix unitaire plus élevé, cela pourrait être considéré comme un actif. Consultez votre ministère pour connaître vos limites."
  }
  }
  }</i18n>