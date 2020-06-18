<template>
  <div>
    <h1>Test Page</h1>
      <fillTheBlanks :termList="$t('q1.choices')" :sentence="$t('q1.sentence')" :numHoles="2" :answer="[ '1', '2' ]" :feedback="$t('q1.feedback')" />
    <hr>
  </div>
</template>
<script type="text/javascript">
import fillTheBlanks from "~/components/interface/fillTheBlanks"
export default {
  components: {
    fillTheBlanks
  }
}
</script>
<i18n>
	{
    "en":
    {
        "q1":
        {
            "sentence": "The operating budget consists of both {0} and {1}.",
            "choices":
            {
                "1": "Operating &amp; Maintenance (O&amp;M)",
                "2": "Salary",
                "3": "Grants and Contributions (Gs&amp;Cs)",
                "4": "Capital"
            },
            "feedback":
            {
                "wrong": "The Salary budget contains these items.",
                "right": "The Salary budget contains these items."
            }
        }
    },
    "fr":
    {
        "q1":
        {
            "sentence": "Le budget de fonctionnement comprend {0} et {1}.",
            "choices":
            {
                "1": "Fonctionnement et entretien (F et E)",
                "2": "Salaires",
                "3": "Subventions et contributions (S et C)",
                "4": "Immobilisations"
            },
            "feedback":
            {
                "wrong": "Le budget salarial comprend ces postes.",
                "right": "Le budget salarial comprend ces postes."
            }
        }
    }
}
</i18n>
