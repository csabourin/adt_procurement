<template>
  <div>
    <matchingExercise :question="$t('q1')" qId="1" />
    <b-row>
      <b-col cols="3" lg="2" class="text-center">
          <download :texts="$t('extReports')" size=128 iconColor="reportBackground" :fileSize="this.$i18n.locale == 'en' ? '138' : '124'" name="extReports" />
        </b-col>
     </b-row>
  </div>
</template>
<script type="text/javascript">
import matchingExercise from "~/components/interface/matchingExercise"
import download from "~/components/fileDownload"
import HTMLJobaidLink from "~/components/HTMLJobaidLink"
export default {
  components: {
    matchingExercise,
    download,
    HTMLJobaidLink
  }
}
</script>
<i18n>{
    "en":
    {
        "q1":
        {
            "dotsRight": [
                "Departmental Results Report",
                "Quarterly financial reporting (QFR)",
                "Proactive disclosure ",
                "Management Accountability Framework (MAF)",
                "Internal audit ",
                "Program Evaluation"
            ],
            "dotsLeft": [
                "A report on what was accomplished against what was planned to be done during the fiscal year in terms of priorities and expected results.",
                "A comparison between planned and actual expenditures, published three times a year.",
                "Published information on departments’ websites related to travel, hospitality, contracts, position reclassifications, wrongdoing, and grants and contributions.",
                "An annual assessment of management practices and performance, in areas such as finance, people, and IT. ",
                "Examines compliance relating to governance, risk management, and control processes and makes recommendations to improve performance, effectiveness, and efficiency of government operations.",
                "Assesses the performance of programs, initiatives and policies in terms of efficiency, effectiveness, and relevance."
            ]
        }
    },
    "fr":
    {
        "q1":
        {
            "dotsRight": [
                "Rapport ministériel sur les résultats",
                "Rapports financiers trimestriels (RFT)",
                "Divulgation proactive ",
                "Cadre de responsabilisation de gestion (CRG)",
                "Vérification interne ",
                "Évaluation des programmes"
            ],
            "dotsLeft": [
                "C’est ce qui a été accompli par rapport à ce qui était prévu au cours de l’exercice financier pour ce qui est des priorités et des résultats attendus.",
                "Une comparaison entre les dépenses prévues et les dépenses réelles publiées 3 fois par an.",
                "Publier de l’information sur les sites Web des ministères concernant les voyages, l’accueil, les contrats, les reclassifications de postes, les actes répréhensibles, les subventions et les contributions.",
                "Une évaluation annuelle des pratiques de gestion et du rendement dans des domaines tels que les finances, les ressources humaines et la TI. ",
                "Examine la conformité aux processus de gouvernance, de gestion des risques et de contrôle et formule des recommandations pour améliorer le rendement, l’efficacité et l’efficience des opérations gouvernementales.",
                "Évalue le rendement des programmes, des initiatives et des politiques en termes d’efficience, d’efficacité et de pertinence."
            ]
        }
    }
}</i18n>