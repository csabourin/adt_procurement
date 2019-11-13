<template>
  <div>
    <p><strong>Question 1</strong></p>
    <p v-html="$t('q1.text')"></p>
    <select v-model="options1">
      <option disabled value=''>{{$t('qDisabled')}}</option>
      <option v-for="(statement,index) in answers1" value="index">{{$t(statement)}}</option>
    </select>
  </div>
</template>
<i18n>{
    "en":
    {
        "qDisabled": "Please select one",
        "q1":
        {
            "text": "Match the following statements to the appropriate sections of the work plan. Each section can only be populated with one statement.",
            "a11": "High",
            "a12": "Work with Canadians in all areas of the economy and all parts of the country to improve conditions for investment",
            "a13": "Tablets",
            "a14": "Keep original computers until tablets are up and running for 3 months",
            "a15": "Give employees new digital tools to promote mobility",
            "a16": "Modernize and renew the public service to better serve Canadians and foster a healthy, productive workforce",
            "a17": "Buy tablets ",
            "a18": "Technology is not compatible with existing network ",
            "a19": "Low",
            "a110": "Workplace Modernization",
            "a111": "Give employees tablets"
        }
    },
    "fr":
    {
        "qDisabled": "Veuillez faire un choix",
        "q1":
        {
            "text": "Faites correspondre les &eacute;nonc&eacute;s suivants aux sections appropri&eacute;es du plan de travail. Chaque section ne peut contenir qu'un seul &eacute;nonc&eacute;.",
            "a11": "Élevé ",
            "a12": "Travailler avec les Canadiens dans tous les secteurs de l'économie et dans toutes les régions du pays pour améliorer les conditions d'investissement.",
            "a13": "Tablettes",
            "a14": "Conservez les ordinateurs d'origine jusqu'à ce que les tablettes soient prêtes et à l'emploi pendant 3 mois. ",
            "a15": "Donner aux salariés de nouveaux outils numériques pour favoriser la mobilité ",
            "a16": "Moderniser et renouveler la fonction publique afin de mieux servir les Canadiens et de favoriser une main-d'œuvre saine et productive.",
            "a17": "Acheter des tablettes",
            "a18": "La technologie n'est pas compatible avec le réseau existant ",
            "a19": "Faible",
            "a110": "Modernisation du milieu de travail ",
            "a111": "Donner des tablettes aux employés"
        }
    }
}</i18n>
<script type="text/javascript">
export default {
  data() {
    return {
      answers1: ['q1.a11', 'q1.a12', 'q1.a13', 'q1.a14', 'q1.a15', 'q1.a16', 'q1.a17', 'q1.a18', 'q1.a19', 'q1.a110', 'q1.a111', ],
      options1: '',
      options2: '',
      options3: '',
      options4: '',
      options5: '',
      options6: '',
      options7: '',
      options8: '',
      options9: '',
      options10: '',
      options11: ''

    }
  }
}

</script>
