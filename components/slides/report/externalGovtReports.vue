<template>
    <matchingExercise :question="$t('q1')" qId="1" />
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
    "en":
    {
        "q1":
        {
            "dotsRight": [
                "Departmental Results Report",
                "Quarterly Financial Reporting (QFR)",
                "Proactive disclosure ",
                "Management Accountability Framework (MAF)",
                "Internal Audit ",
                "Program Evaluation"
            ],
            "dotsLeft": [
                "This is what was accomplished against what was planned to be done during the fiscal year in terms of priorities and expected results.",
                "A comparison between planned and actual expenditures published three times a year.",
                "Publishing information on the departments&rsquo; websites related to travel, hospitality, contracts, position reclassifications, wrongdoing, grants and contributions.",
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
                "C&rsquo;est ce qui a été accompli par rapport à ce qui était prévu au cours de l&rsquo;exercice financier en termes de priorités et de résultats attendus.",
                "Une comparaison entre les dépenses prévues et les dépenses réelles publiées trois fois par année.",
                "Publier de l&rsquo;information sur les sites Web des ministères concernant les voyages, l&rsquo;accueil, les contrats, les reclassifications de postes, les actes fautifs, les subventions et les contributions.",
                "Une évaluation annuelle des pratiques de gestion et du rendement dans des domaines comme les finances, les ressources humaines et la TI. ",
                "Examine la conformité aux processus de gouvernance, de gestion des risques et de contrôle et formule des recommandations pour améliorer le rendement, l&rsquo;efficacité et l&rsquo;efficience des opérations gouvernementales.",
                "Évalue le rendement des programmes, des initiatives et des politiques en termes d&rsquo;efficience, d&rsquo;efficacité et de pertinence."
            ]
        }
    }
}</i18n>