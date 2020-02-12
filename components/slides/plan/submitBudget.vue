<template>
	<span>
		<checkboxQuiz :question="$t('q1')" qId="1" :Answer='["1","2","3"]'/>
		<hr>
		<checkboxQuiz :question="$t('q2')" qId="2" :Answer='["1","2"]'/>
	</span>
</template>
<script type="text/javascript">
	import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: { checkboxQuiz }}
</script>
<i18n>{
  "en": {
    "q1": {
      "text": "How would you adjust your travel budget if you received $9,000 instead of the $11,600 you proposed?",
      "options": {
        "1": "Review your travel inspection plan.",
        "2": "Encourage your employees to attend conferences or events virtually.",
        "3": "Review other areas of your budget to compensate for the reduced travel budget."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect</strong>"
      },
      "conclusion":"All of these are possible adjustments you could make. Solutions can be diverse - it depends on your situation."
    },
    "q2": {
      "text": "You find out during the proposed budget review meeting that you&rsquo;re getting three employees and their workload from another team that is being split up among a few managers. What would you do?",
      "options": {
        "1": "Add their activities to your work plan.",
        "2": "Add their salaries and O&M to your budget requirements.",
        "3": "Look into converting funds from O&M to Salary to cover the added salaries."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect</strong>"
      },
      "conclusion":"The correct answers are Add their activities to your work plan and Add their salaries and O&M to your budget requirements. Converting funds from O&M to Salary is not a solution as your resource requirement is increasing for which you need the funding."
    }
  },
  "fr": {
    "q1": {
      "text": "Comment ajusteriez-vous votre budget de voyage si vous receviez 9&nbsp;000&nbsp;$ au lieu des 11&nbsp;600&nbsp;$ proposés? ",
      "options": {
        "1": "Passez en revue votre plan d&rsquo;inspection de voyage.",
        "2": "Encouragez vos employés à assister virtuellement à des conférences ou à des événements.",
        "3": "Passez en revue d&rsquo;autres secteurs de votre budget pour compenser la réduction du budget de voyage."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect</strong>"
      },
      "conclusion":"Ce sont tous des ajustements possibles que vous pourriez faire. Les solutions peuvent être diverses - cela dépend de votre situation."
    },
    "q2": {
      "text": "Au cours de la réunion d&rsquo;examen du budget proposé, vous découvrez que vous obtenez 3 employés et leur charge de travail d&rsquo;une autre équipe qui est répartie entre quelques gestionnaires. Que feriez-vous?",
      "options": {
        "1": "Ajoutez leurs activités à votre plan de travail. ",
        "2": "Ajoutez leurs salaires et les frais de F et E à votre budget.",
        "3": "Envisagez de convertir les fonds de F et E en salaires pour couvrir les salaires supplémentaires."
      },
      "feedback": {
        "right": "<span class='v-right' /><strong>Correct!</strong>",
        "wrong": "<span class='v-wrong' /><strong>Incorrect</strong> "
      },"conclusion":"Les bonnes réponses sont &laquo; Ajoutez leurs activités à votre plan de travail &raquo; et &laquo; Ajoutez leurs salaires et F et E à votre budget &raquo;. La conversion des fonds de F et E en salaires n&rsquo;est pas une solution, car vos besoins en ressources augmentent et vous avez donc besoin de ces fonds."
    }
  }
}</i18n>