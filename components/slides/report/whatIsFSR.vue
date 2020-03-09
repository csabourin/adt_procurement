<template>
  <div>
  <p><strong>{{$t('header')}}</strong></p>
  <matchingExercise :question="$t('q1')" qId="1" />
</div>
</template>
<script type="text/javascript">
import matchingExercise from "~/components/interface/matchingExercise"
export default {
    components: {
        matchingExercise
    }
}
</script>
<i18n>{
  "en": {
  "header":"Let’s see what you already know about financial situation reports.",
    "q1": {
      "dotsRight": [
        "Budget",
        "Commitments",
        "Year-To-Date Actuals",
        "Annual Forecast",
        "Surplus/Deficit",
        "Surplus/Deficit Notes",
        "Notes on Risks"
      ],
      "dotsLeft": [
        "Funds allocated for the fiscal year. ",
        "Funds set aside for a specific purpose.",
        "What you have spent up to now.",
        "What you plan on spending for the full fiscal year.",
        "Budget leftover or shortfall. ",
        "Provides details on the budget leftover or shortfall",
        "Situations that may change the results you’ve reported. "
      ]
    }
  },
  "fr": {
    "q1": {
    "header":"Voyons ce que vous savez déjà au sujet de rapports sur la situation financière.",
      "dotsRight": [
        "Budget",
        "Engagements",
        "Dépenses réelles depuis le début de l’année",
        "Prévisions annuelles",
        "Excédent ou déficit",
        "Notes sur les excédents ou déficits",
        "Notes sur les risques"
      ],
      "dotsLeft": [
        "Fonds alloués pour l’exercice financier. ",
        "Fonds mis de côté à des fins précises.",
        "Ce que vous avez dépensé jusqu’à présent.",
        "Ce que vous prévoyez dépenser pour l’ensemble de l’exercice financier.",
        "Reste ou manque à gagner dans le budget. ",
        "Fournit des détails sur le reliquat ou le manque à gagner du budget. ",
        "Les situations qui peuvent changer les résultats que vous avez rapportés. "
      ]
    }
  }
}</i18n>