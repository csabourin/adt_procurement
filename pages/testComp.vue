<template>
  <div>
    <h1>Test Page</h1>
      <fillTheBlanks :termList="$t('q1.choices')" :sentence="$t('q1.sentence')" />
    <hr>
  </div>
</template>
<script type="text/javascript">
import fillTheBlanks from "~/components/interface/fillTheBlanks"
export default {
  components: {
    fillTheBlanks
  },
  data(){return
  	var1:"someting"}
}

</script>
<i18n>
	{
    "en":
    {
        "q1":
        {
            "sentence": "The train is {0} when the moon is {1}",
            "choices":
            {
                "1": "Operating &amp; Maintenance (O&amp;M)",
                "2": "Salary",
                "3": "Grants and Contributions (Gs&amp;Cs)",
                "4": "Capital"
            },
            "feedback":
            {
                "wrong": "Incorrect",
                "right": "Correct"
            }
        }
    },
    "fr":
    {
        "q1":
        {
            "sentence": "Le train est {0} quand la lune est {1}",
            "choices":
            {
                "1": "Fonctionnement et entretien (F et E)",
                "2": "Salaires",
                "3": "Subventions et contributions (S et C)",
                "4": "Immobilisations"
            },
            "feedback":
            {
                "wrong": "Incorrect",
                "right": "Correct"
            }
        }
    }
}
</i18n>
