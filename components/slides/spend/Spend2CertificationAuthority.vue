<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <b-tabs content>
              <b-tab title="Question">
                <radioQuiz :question="$t('q1')" qId="1" />
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col>
          <signatureCard />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script type="text/javascript">
import checkboxQuiz from "~/components/checkboxQuiz"
import radioQuiz from "~/components/radioQuiz"
import signatureCard from "~/components/delegationChart/signatureCard"
export default {
  components: {
    checkboxQuiz,
    radioQuiz,
    signatureCard
  }
}

</script>
<i18n>{
  "en": {
  "q1": {
  "text": "Looking at the provided specimen signature card, what is the maximum amount that a manager could approve to certify an award (section 34)?",
  "options": {
  "1": "$0",
  "2": "$300",
  "3": "$10,000",
  "4": "Full"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": "As per the Certification - Section 34 column in the specimen signature card, the manager has full certification authority for salary and all other expenditures."
  }
  },
  "fr": {
  "q1": {
  "text": "En examinant la carte de signature fournie, quel est le montant maximal qu&rsquo;un gestionnaire pourrait approuver pour attester un prix (article 34)?",
  "options": {
  "1": "0$",
  "2": "300$",
  "3": "10&nbsp;000$",
  "4": "Plein"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "4": "<span class='v-right' /><strong>Correct!</strong>"
  },
  "conclusion": " Conformément à la colonne Attestation - Article 34 de la carte de spécimen de signature, le gestionnaire a le plein pouvoir d&rsquo;attestation pour le salaire et toutes les autres dépenses."
  }
  }
  }</i18n>
<style type="text/css" scoped>
.scrollMe {
  width: 50%;
  white-space: nowrap;
  overflow-x: auto;
}

</style>
