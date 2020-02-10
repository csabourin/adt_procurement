<template>
  <div>
    <b-card>
      <b-tabs v-model="tabIndex">
        <b-tab title="Question 1">
          <radioQuiz :question="$t('q1')" qId="1" />
        </b-tab>
        <b-tab title="Question 2">
          <radioQuiz :question="$t('q2')" qId="2" />
        </b-tab>
        <b-tab title="Question 3">
          <radioQuiz :question="$t('q3')" qId="3" />
        </b-tab>
        <b-tab title="Question 4">
          <radioQuiz :question="$t('q4')" qId="4" />
        </b-tab>
        <b-tab title="Question 5">
          <radioQuiz :question="$t('q5')" qId="5" />
        </b-tab>
        <b-tab title="Question 6">
          <radioQuiz :question="$t('q6')" qId="6" />
        </b-tab>
        <b-tab title="Question 7">
          <div v-if="$i18n.locale=='en'">
            <p>Using the P5 Annual Forecast column as a reference, complete the P6 Annual Forecast column in the provided financial situation report.&nbsp;</p>
            <table border="1">
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td>
                    <p><strong>P6 Budget</strong></p>
                  </td>
                  <td>
                    <p><strong>P6 Commitments</strong></p>
                  </td>
                  <td>
                    <p><strong>P6 Year-To-Date Actuals</strong></p>
                  </td>
                  <td>
                    <p><strong>P5 Annual Forecast</strong></p>
                  </td>
                  <td>
                    <p><strong>P6 Annual Forecast</strong></p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Travel</p>
                  </td>
                  <td>
                    <p>$8,000</p>
                  </td>
                  <td>
                    <p>$4,000</p>
                  </td>
                  <td>
                    <p>$1,700</p>
                  </td>
                  <td>
                    <p>$7,800</p>
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <p><br /><br /></p>
          </div>
          <div v-if="$i18n.locale=='fr'">
          	<p>En utilisant la colonne P5 Prévisions annuelles comme référence, remplissez la colonne P6 Prévisions annuelles dans le rapport sur la situation financière fourni.&nbsp;</p>
<table border="1">
<tbody>
<tr>
<td>&nbsp;</td>
<td>
<p><strong>P6 Budget</strong></p>
</td>
<td>
<p><strong>P6 Engagements</strong></p>
</td>
<td>
<p><strong>P6 Dépenses réelles depuis le début de l&rsquo;année</strong></p>
</td>
<td>
<p><strong>P5 Prévisions annuelles</strong></p>
</td>
<td>
<p><strong>P6 Prévisions annuelles</strong></p>
</td>
</tr>
<tr>
<td>
<p>Voyage</p>
</td>
<td>
<p>8&nbsp;000&nbsp;$</p>
</td>
<td>
<p>4&nbsp;000&nbsp;$</p>
</td>
<td>
<p>1&nbsp;700&nbsp;$</p>
</td>
<td>
<p>7&nbsp;800&nbsp;$</p>
</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
          </div>
          <radioQuiz :question="$t('q7')" qId="7" />
        </b-tab>
      </b-tabs>
    </b-card>
    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
        <b-button @click="tabIndex++" :disabled="tabIndex>=6">{{$t('nextPage')}}</b-button>
      </b-button-group>
    </div>
  </div>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  data() {
    return {
      tabIndex: 0
    }
  },
  components: {
    radioQuiz,
    checkboxQuiz
  }
}

</script>
<i18n>{
  "en": {
  "q1": {
  "text": "Commitments are:",
  "options": {
  "1": "Funds allocated for the fiscal year.",
  "2": "Funds set aside for a specific purpose.",
  "3": "What you have spent up to now."
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Funds allocated for the fiscal year is the Budget.",
  "2": "<span class='v-right' /><strong>Correct!</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong> What you have spent up to now are the Year-To-Date Actuals."
  },
  "conclusion": "Commitments are funds set aside in your budget for a specific purpose."
  },
  "q2": {
  "text": "Which reports are “individual department accounts of actual performance against their plans, priorities and expected results”? ",
  "options": {
  "1": "Departmental Plans",
  "2": "Proactive Disclosure reports",
  "3": "Departmental Results Reports"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> The correct answer is Departmental Results Reports. The plans, priorities and expected results are set out in Departmental Plans.",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong> The correct answer is Departmental Results Reports. Proactive Disclosure reports are information on the departments&rsquo; websites related to travel, hospitality, contracts, position reclassifications, wrongdoing, grants and contributions.",
  "3": "<span class='v-right' /><strong>Correct!</strong> Departmental Results Reports are individual department accounts of actual performance, for the most recently completed fiscal year, against the plans, priorities and expected results set out in their respective Departmental Plans."
  },
  "conclusion": ""
  },
  "q3": {
  "text": "The most important field for you to adjust in the financial situation report is: ",
  "options": {
  "1": "Annual Forecast",
  "2": "Commitments",
  "3": "Year-To-Date Actuals"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong> ",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "The primary purpose of the financial situation report is to provide your Annual Forecast. You should not adjust any of the other fields because they represent a snapshot at a point in time."
  },
  "q4": {
  "text": "The program performance indicators are outlined in the: ",
  "options": {
  "1": "Financial situation report ",
  "2": "Performance Information Profiles",
  "3": "Internal audit reports "
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> The financial situation report is a snapshot of a responsibility centre&rsquo;s finances.",
  "2": "<span class='v-right' /><strong>Correct!</strong> ",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Internal audit reports examine compliance relating to governance, risk management, and control processes and make recommendations to improve performance, effectiveness, and efficiency of government operations."
  },
  "conclusion": "Performance Information Profiles outline performance indicators and targets as well as core responsibility and program description."
  },
  "q5": {
  "text": "In addition to influencing year-end results, Treasury Board Secretariat uses which period&rsquo;s financials to inform the Department of Finance on planned spending throughout the government?",
  "options": {
  "1": "P6 September",
  "2": "P9 December",
  "3": "P12 Year-end"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> P9 reports are used by Treasury Board Secretariat. P6 September provides a good picture of the organization's finances as it is midway through the year, and allows management to make decisions to influence year-end results.",
  "2": "<span class='v-right' /><strong>Correct!</strong> P9 is used to influence year-end results, and Treasury Board Secretariat uses it to inform the Department of Finance on planned spending throughout the government.",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong> P9 reports are used by Treasury Board Secretariat. Year-end data is used by departments to report their overall financial results."
  },
  "conclusion": ""
  },
  "q6": {
  "text": "Which of the following is a valid target?",
  "options": {
  "1": "80 percent of departmental products updated in accordance with the product life cycle plan",
  "2": "Number of Canadian jobs created as a result of department initiatives",
  "3": "Investments by department in innovation projects"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong> This is a valid target as it includes a specific percentage. ",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>This statement is not specific enough for a target, but it is a performance indicator. The correct answer is &ldquo;80 percent of departmental products updated in accordance with the product life cycle plan&rdquo;, as it includes a specific percentage.",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong> This statement is neither a target nor a performance indicator as there is no measure for investments. The correct answer is &ldquo;80 percent of departmental products updated in accordance with the product life cycle plan&rdquo;, as it includes a specific percentage."
  },
  "conclusion": ""
  },
  "q7": {
  "text": "Travel has been pre-approved this morning by the ADM. The estimated cost for flight, accommodations, local transportation, and incidentals is $2,500. What amount will you put in the P6 Annual Forecast column? ",
  "options": {
  "1": "$10,300",
  "2": "$8,200 ",
  "3": "$7,800"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "The correct amount is $8,200. Commitments at $4,000 + Year-To-Date Actuals at $1,700 + $2,500 for the travel that was just approved = $8,200. Commitments will also increase by $2,500."
  }
  },
  "fr": {
  "q1": {
  "text": "Les engagements sont:",
  "options": {
  "1": "Fonds alloués pour l&rsquo;exercice financier.",
  "2": "Fonds mis de côté à des fins précises.",
  "3": "Ce que vous avez dépensé jusqu&rsquo;à présent."
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Les fonds alloués pour l&rsquo;exercice financier sont le budget.",
  "2": "<span class='v-right' /><strong>Correct!</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Ce que vous avez dépensé jusqu&rsquo;à présent, ce sont les dépenses réelles depuis le début de l&rsquo;année."
  },
  "conclusion": "Les engagements sont des fonds mis de côté dans votre budget à des fins précises."
  },
  "q2": {
  "text": "Quels sont les rapports qui sont &laquo; les comptes rendus des ministères sur le rendement réel par rapport à leurs plans, à leurs priorités et aux résultats attendus &raquo; ? ",
  "options": {
  "1": "Plans ministériels",
  "2": "Rapports de divulgation proactive ",
  "3": "Rapports ministériels sur les résultats"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> La bonne réponse est les rapports ministériels sur les résultats. Les plans, les priorités et les résultats attendus sont énoncés dans les plans ministériels.",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong> La bonne réponse est les rapports ministériels sur les résultats. Les rapports de divulgation proactive sont des renseignements sur les sites Web des ministères concernant les voyages, l&rsquo;accueil, les contrats, les reclassifications de postes, les actes fautifs, les subventions et les contributions.",
  "3": "<span class='v-right' /><strong>Correct!</strong> Les rapports ministériels sur les résultats sont des comptes rendus ministériels individuels du rendement réel, pour le dernier exercice terminé, par rapport aux plans, aux priorités et aux résultats attendus énoncés dans leurs plans ministériels respectifs."
  },
  "conclusion": ""
  },
  "q3": {
  "text": "Le champ le plus important que vous devez corriger dans l&rsquo;état de la situation financière est :",
  "options": {
  "1": "Prévisions annuelles",
  "2": "Engagements",
  "3": "Dépenses réelles depuis le début de l&rsquo;année"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong> ",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "L'objectif principal du rapport sur la situation financière est de fournir vos prévisions annuelles. Vous ne devez pas corriger les autres champs car ils représentent un instantané à un moment donné."
  },
  "q4": {
  "text": "Les indicateurs de rendement du programme sont décrits dans le:",
  "options": {
  "1": "Rapport sur la situation financière ",
  "2": "Profils d&rsquo;information sur le rendement ",
  "3": "Rapports d&rsquo;audit interne "
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Le rapport sur la situation financière est un instantané des finances d&rsquo;un centre de responsabilité.",
  "2": "<span class='v-right' /><strong>Correct!</strong> ",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>Les rapports de vérification interne examinent la conformité aux processus de gouvernance, de gestion des risques et de contrôle et font des recommandations pour améliorer le rendement, l&rsquo;efficacité et l&rsquo;efficience des opérations gouvernementales."
  },
  "conclusion": "Les profils d&rsquo;information sur le rendement décrivent les indicateurs et les cibles de rendement ainsi que la responsabilité fondamentale et la description du programme."
  },
  "q5": {
  "text": "En plus d&rsquo;influer sur les résultats de fin d&rsquo;exercice, le Secrétariat du Conseil du Trésor utilise les états financiers de quelle période pour informer le ministère des Finances des dépenses prévues dans l&rsquo;ensemble du gouvernement ?",
  "options": {
  "1": "P6 Septembre",
  "2": "P9 Décembre",
  "3": "P12 Fin d&rsquo;année"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong> Les rapports P9 sont utilisés par le Secrétariat du Conseil du Trésor. P6 Septembre donne une bonne image de la situation financière de l&rsquo;organisation à mi-parcours de l&rsquo;année et permet à la direction de prendre des décisions pour influencer les résultats de fin d&rsquo;année.",
  "2": "<span class='v-right' /><strong>Correct!</strong> P9 sert à influencer les résultats de fin d&rsquo;exercice, et le Secrétariat du Conseil du Trésor s&rsquo;en sert pour informer le ministère des Finances des dépenses prévues dans l&rsquo;ensemble du gouvernement.",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Les rapports P9 sont utilisés par le Secrétariat du Conseil du Trésor. Les données de fin d&rsquo;exercice sont utilisées par les ministères pour présenter leurs résultats financiers globaux."
  },
  "conclusion": ""
  },
  "q6": {
  "text": "Lequel des énoncés suivants est une cible valide ?",
  "options": {
  "1": "80 p. 100 des produits ministériels sont mis à jour conformément au plan du cycle de vie des produits.",
  "2": "Nombre d&rsquo;emplois canadiens créés grâce aux initiatives du Ministère",
  "3": "Investissements par département dans des projets d&rsquo;innovation"
  },
  "feedback": {
  "1": "<span class='v-right' /><strong>Correct!</strong> Il s&rsquo;agit d&rsquo;un objectif valide puisqu&rsquo;il comprend un pourcentage précis. ",
  "2": "<span class='v-wrong' /><strong>Incorrect.</strong> Cet énoncé n&rsquo;est pas assez précis pour une cible, mais c&rsquo;est un indicateur de rendement. La bonne réponse est &laquo;80 p. 100 des produits ministériels sont mis à jour conformément au plan du cycle de vie des produits.&raquo;, car elle inclut un pourcentage spécifique.",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong> Cet énoncé n&rsquo;est ni une cible ni un indicateur de rendement, car il n&rsquo;existe aucune mesure des investissements. La bonne réponse est &laquo;80 p. 100 des produits ministériels sont mis à jour conformément au plan du cycle de vie des produits.&raquo;, car elle inclut un pourcentage spécifique."
  },
  "conclusion": ""
  },
  "q7": {
  "text": "Les déplacements ont été préapprouvés ce matin par le SMA. Le coût estimatif du vol, de l'hébergement, du transport local et des faux frais est de 2&nbsp;500&nbsp;$. Quel montant inscrirez-vous dans la colonne P6 Prévisions annuelles ? ",
  "options": {
  "1": "10&nbsp;300&nbsp;$",
  "2": "8&nbsp;200&nbsp;$",
  "3": "7&nbsp;800&nbsp;$"
  },
  "feedback": {
  "1": "<span class='v-wrong' /><strong>Incorrect.</strong>",
  "2": "<span class='v-right' /><strong>Correct!</strong>",
  "3": "<span class='v-wrong' /><strong>Incorrect.</strong>"
  },
  "conclusion": "Le montant exact est de 8&nbsp;200&nbsp;$. Engagements de 4&nbsp;000&nbsp;$ + 1&nbsp;700&nbsp;$ pour les dépenses réelles depuis le début de l&rsquo;année + 2&nbsp;500&nbsp;$ pour le voyage qui vient d'être approuvé = 8&nbsp;200&nbsp;$. Les engagements augmenteront également de 2&nbsp;500&nbsp;$."
  }
  }
  }</i18n>
