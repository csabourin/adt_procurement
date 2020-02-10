<template>
  <span>
    <div class="pure-radiobutton pure-checkbox">
  <b-card>
    <b-tabs v-model="tabIndex">
      <b-tab title="Question 1">
        <!-- <p><strong v-html="$t('q1a.text')" /></p> -->
        <selectMatching :question="$t('q1a')" match="2" @response="Q1a=$event" />
        <selectMatching :question="$t('q1b')" match="3" @response="Q1b=$event" />
        <selectMatching :question="$t('q1c')" match="1" @response="Q1c=$event" />
        <selectMatching :question="$t('q1d')" match="4" @response="Q1d=$event" />
        <p v-if="Q1a && Q1b && Q1c && Q1d" v-html="$t('q1.conclusion')" />
      </b-tab>
      <b-tab title="Question 2">
        <selectMatching :question="$t('q2a')" match='3' @response="Q2a=$event" />
        <selectMatching :question="$t('q2b')" match='4' @response="Q2b=$event" />
        <selectMatching :question="$t('q2c')" match='1' @response="Q2c=$event" />
        <selectMatching :question="$t('q2d')" match='2' @response="Q2d=$event" />
        <p v-if="Q2a && Q2b && Q2c && Q2d" v-html="$t('q2.conclusion')" />
      </b-tab>
      <b-tab title="Question 3">
        <radioQuiz :question="$t('q3')" qId="3" />
      </b-tab>
      <b-tab title="Question 4">
        <radioQuiz :question="$t('q4')" qId="4" />
      </b-tab>
      <b-tab title="Question 5">
        <checkboxQuiz :question="$t('q5')" qId="5" :Answer="['1','2','3']" />
      </b-tab>
      <b-tab title="Question 6">
        <radioQuiz :question="$t('q6')" qId="6" />
      </b-tab>
      <b-tab title="Question 7">
        <radioQuiz :question="$t('q7')" qId="7" />
      </b-tab>
      <b-tab title="Question 8">
        <radioQuiz :question="$t('q8')" qId="8" />
      </b-tab>
    </b-tabs>
  </b-card>
  <!-- Control buttons-->
  <div class="text-center">
    <b-button-group class="mt-2">
      <b-button @click="tabIndex--" :disabled="tabIndex<=0">{{$t('previousPage')}}</b-button>
      <b-button @click="tabIndex++" :disabled="tabIndex>=7">{{$t('nextPage')}}</b-button>
    </b-button-group>
  </div>
</div>
</span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
import selectMatching from "~/components/selectMatching"
export default {
  components: { radioQuiz, checkboxQuiz, selectMatching },
  data() {
    return {
      tabIndex: 0,
      Q1a:false,Q1b:false,Q1c:false,Q1d:false,
      Q2a:false,Q2b:false,Q2c:false,Q2d:false
    }
  }
}
</script>
<i18n>{
  "en": {
    "qDisabled": "Choose",
    "pwpGovtPri": "<strong>Government priorities</strong>",
    "pwpDeptPri": "<strong>Departmental priorities</strong>",
    "pwpDirPri": "<strong>Directorate priorities</strong>",
    "titleActivities": "Activities",
    "pwpPlanAct": "<strong>Activities</strong>",
    "titleSubActivities": "Sub-activities",
    "titleDeliverables": "Deliverables",
    "titleRisk": "Risk",
    "titleLikelihood": "Likelihood",
    "titleImpact": "Impact",
    "titleMitigation": "Mitigation",
    "titleResources": "Resources",
    "q1a": {
      "text": "Match the item to the budget in which it belongs. ",
      "options": {
        "1": "A contract with an agency for temp staff"
      },
      "matching": {
        "1": "Operating - Salary ",
        "2": "Operating - O&M ",
        "3": "Grants & Contributions",
        "4": "Capital "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> ",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1b": {
      "text": " ",
      "options": {
        "2": "Funds provided to a university to study fish habitat"
      },
      "matching": {
        "1": "Operating - Salary ",
        "2": "Operating - O&M ",
        "3": "Grants & Contributions",
        "4": "Capital "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> ",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1c": {
      "text": " ",
      "options": {
        "3": "Casual positions or leave cash-outs"
      },
      "matching": {
        "1": "Operating - Salary ",
        "2": "Operating - O&M ",
        "3": "Grants & Contributions",
        "4": "Capital "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> ",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1d": {
      "text": " ",
      "options": {
        "4": "Purchase a new fleet of trucks"
      },
      "matching": {
        "1": "Operating - Salary ",
        "2": "Operating - O&M ",
        "3": "Grants & Contributions",
        "4": "Capital "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> ",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1": {
      "conclusion": "<p><strong>A contract with an agency for temp staff</strong> would be in <strong>Operating - O&amp;M</strong>, and not Operating - Salary, because temp staff are not employees, and contracts are not paid out of Salary.&nbsp;</p><p><strong>Funds provided to a university to study fish habitat </strong>would be in <strong>Grants and Contributions</strong>. The nature of this transaction is such that it is a one-way payment of money for which the government will not receive any good or service.</p><p><strong>Casual positions or leave cash-outs</strong> would be in <strong>Operating - Salary</strong> because they concern employees.&nbsp;</p><p><strong>Purchase a new fleet of trucks</strong> would be in <strong>Capital </strong>because they are assets that would depreciate over time.</p>"
    },
    "q2a": {
      "text": "Match the activity to it&rsquo;s status. ",
      "options": {
        "1": "Issuing fishing licenses."
      },
      "matching": {
        "1": "Sunsetted",
        "2": "Cancelled",
        "3": "Continuing",
        "4": "New"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2b": {
      "text": " ",
      "options": {
        "2": "Next year, you are going to purchase software to replace a paper process."
      },
      "matching": {
        "1": "Sunsetted",
        "2": "Cancelled",
        "3": "Continuing",
        "4": "New"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2c": {
      "text": " ",
      "options": {
        "3": "Costs for an office move that was completed last year."
      },
      "matching": {
        "1": "Sunsetted",
        "2": "Cancelled",
        "3": "Continuing",
        "4": "New"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2d": {
      "text": " ",
      "options": {
        "4": "Consultations across Canada were stopped earlier this year."
      },
      "matching": {
        "1": "Sunsetted",
        "2": "Cancelled",
        "3": "Continuing",
        "4": "New"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2": {
      "conclusion": "<p><strong>Issuing fishing licenses</strong> is a <strong>Continuing </strong>activity; it&rsquo;s one of your main activities each year.&nbsp;</p><p><strong>Next year, you are going to purchase software to replace a paper process</strong> is a <strong>New </strong>activity, as you did not have this activity in previous plans.</p><p><strong>Costs for an office move that was completed last year</strong> is a <strong>Sunsetted </strong>activity because it finished last year.&nbsp;</p><p><strong>Consultations across Canada were stopped earlier this year</strong> is a <strong>Cancelled </strong>activity as the consultations were stopped and not completed.</p>"
    },
    "q3": {
      "text": "An employee will be retiring after 8 months next year, so you estimate their salary as:",
      "options": {
        "1": "Full salary",
        "2": "¾ of their salary",
        "3": "⅔ of their salary "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is ⅔ of their salary. They will earn 8/12 of their salary or ⅔. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is ⅔ of their salary. They will earn 8/12 of their salary or ⅔. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  They will earn 8/12 of their salary or ⅔."
      }
    },
    "q4": {
      "text": "An example of a trend is …",
      "options": {
        "1": "The budget for travel has increased year over year by a factor of 3%. ",
        "2": "An activity related to renewing fishing licenses was delayed due to Arctic weather. ",
        "3": "Less was spent on conferences last year because an employee didn&rsquo;t attend a conference as planned. ",
        "4": "The training budget was overspent by $6,000 last year."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> This is a trend because the increase has been the same percentage for a few years",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is The budget for travel has increased year over year by a factor of 3%. This is a trend because the increase has been the same percentage for a few years.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is The budget for travel has increased year over year by a factor of 3%. This is a trend because the increase has been the same percentage for a few years.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is The budget for travel has increased year over year by a factor of 3%. This is a trend because the increase has been the same percentage for a few years."
      }
    },
    "q5": {
      "text": "How would you use the information from trends in your budget requirements?",
      "options": {
        "1": "Use last year&rsquo;s actual expenditures as a starting point to create my budget requirements.",
        "2": "Use last year&rsquo;s budget as a starting point to create my budget requirements. ",
        "3": "Add last year&rsquo;s numbers plus the projected increase in next year&rsquo;s budget requirements."
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> All are correct. The trends you see may vary so how you use them in your budget requirements will differ.",
        "right": "<span class='v-right' /> <strong>Correct!</strong> The trends you see may vary so how you use them in your budget requirements will differ."
      }
    },
    "q6": {
      "text": "An example of a financial variance is …",
      "options": {
        "1": "$1,500 per employee used to calculate total training budget.",
        "2": "A surplus in the relocation budget of $10,000.",
        "3": "Issuing fishing licenses in 15 days."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is a surplus in the relocation budget of $10,000, as $10,000 is the difference between budget and actual expenditures. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> $10,000 is the difference between budget and actual expenditures.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is a surplus in the relocation budget of $10,000, as $10,000 is the difference between budget and actual expenditures."
      }
    },
    "q7": {
      "text": "Last year&rsquo;s travel variance was due to a new departmental priority to conduct a 3-year cross-Canada consultation which resulted in more trips. Will you put this in your budget requirements for next year?",
      "options": {
        "1": "Yes.",
        "2": "No."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is Yes."
      },
      "conclusion":" Consultations started last year, are continuing in the current year, and should end next year."
    },
    "q8": {
      "text": "Non-discretionary costs are: ",
      "options": {
        "1": "Costs that are not directly linked to your activities and therefore are less likely to have a negative impact on them.",
        "2": "Costs you planned for at the beginning of the fiscal year and that were incurred over the year.",
        "3": "Costs that are essential for delivering on your activities and if cut may result in not being able to deliver on them. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is Costs that are essential for delivering on your activities and if cut may result in not being able to deliver on them.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is Costs that are essential for delivering on your activities and if cut may result in not being able to deliver on them. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      },
      "conclusion":"Non-Discretionary costs, if reduced or cut, will seriously affect your ability to deliver your priorities."
    }
  },
  "fr": {
    "qDisabled": "Choisissez",
    "q1a": {
      "text": "Faites correspondre le poste au budget auquel il appartient.",
      "options": {
        "1": "Un contrat avec une agence d&rsquo;intérim"
      },
      "matching": {
        "1": "Fonctionnement - Salaire",
        "2": "Exploitation - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1b": {
      "text": " ",
      "options": {
        "2": "Fonds versés à une université pour étudier l'habitat du poisson"
      },
      "matching": {
        "1": "Fonctionnement - Salaire",
        "2": "Exploitation - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1c": {
      "text": " ",
      "options": {
        "3": "Les postes occasionnels ou les encaissements de congés"
      },
      "matching": {
        "1": "Fonctionnement - Salaire",
        "2": "Exploitation - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1d": {
      "text": " ",
      "options": {
        "4": "Achat d&rsquo;une nouvelle flotte de camions"
      },
      "matching": {
        "1": "Fonctionnement - Salaire",
        "2": "Exploitation - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q1": {
      "conclusion": "<p><strong>Un contrat avec une agence pour le personnel temporaire</strong> serait en <strong>Fonctionnement - F&amp;E</strong>, et non en Fonctionnement - Salaire, parce que le personnel temporaire n&rsquo;est pas un employé et que les contrats ne sont pas payés à m&ecirc;me le salaire.&nbsp;</p><p><strong>Les fonds fournis à une université pour étudier l'habitat du poisson</strong> seraient sous forme de <strong>subventions et de contributions</strong>. La nature de cette transaction est telle qu&rsquo;il s&rsquo;agit d&rsquo;un paiement à sens unique pour lequel le gouvernement ne recevra aucun bien ou service.</p><p><strong>Les postes occasionnels ou les encaissements de congés</strong> seraient dans la catégorie <strong>Fonctionnement - Salaire</strong> parce qu&rsquo;ils concernent des employés.&nbsp;</p><p><strong>L&rsquo;achat d&rsquo;une nouvelle flotte de camions</strong> serait dans le <strong>Capital </strong>parce que ce sont des biens qui se déprécieraient avec le temps.</p>"
    },
    "q2a": {
      "text": "Faites correspondre l&rsquo;activité à son statut.",
      "options": {
        "1": "Délivrance des permis de pêche."
      },
      "matching": {
        "1": "Caduque",
        "2": "Annulée",
        "3": "Se poursuivant",
        "4": "Nouvelle"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2b": {
      "text": " ",
      "options": {
        "2": "L&rsquo;année prochaine, vous allez acheter un logiciel pour remplacer un processus papier."
      },
      "matching": {
        "1": "Caduque",
        "2": "Annulée",
        "3": "Se poursuivant",
        "4": "Nouvelle"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2c": {
      "text": " ",
      "options": {
        "3": "Les coûts d&rsquo;un déménagement de bureaux a été terminé l&rsquo;an dernier."
      },
      "matching": {
        "1": "Caduque",
        "2": "Annulée",
        "3": "Se poursuivant",
        "4": "Nouvelle"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2d": {
      "text": " ",
      "options": {
        "4": "Les consultations à l&rsquo;échelle du Canada ont été interrompues plus tôt cette année"
      },
      "matching": {
        "1": "Caduque",
        "2": "Annulée",
        "3": "Se poursuivant",
        "4": "Nouvelle"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2":{"conclusion":"<p><strong>L'émission de permis de p&ecirc;che</strong> est une activité se&nbsp;<strong>Poursuivant</strong>; c&rsquo;est l&rsquo;une de vos principales activités chaque année.&nbsp;</p><p><strong>L&rsquo;année prochaine, vous allez acheter un logiciel pour remplacer un processus papier</strong> est une <strong>Nouvelle </strong>activité, car vous n&rsquo;aviez pas cette activité dans les plans précédents.</p><p><strong>Les co&ucirc;ts d&rsquo;un déménagement de bureau qui a été effectué l&rsquo;an dernier</strong> sont des activités&nbsp;<strong>Caduques </strong>parce qu&rsquo;elles se sont terminées l&rsquo;an dernier.&nbsp;</p><p><strong>Les consultations à travers le Canada ont été interrompues plus t&ocirc;t cette année</strong> est une activité <strong>Annulée </strong>car les consultations ont été interrompues et non terminées.</p>"},
    "q3": {
      "text": "Un employé prendra sa retraite après 8 mois l&rsquo;année prochaine, donc vous estimez son salaire comme :",
      "options": {
        "1": "Salaire complet",
        "2": "¾ de leur salaire",
        "3": "⅔ de leur salaire"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est ⅔ de leur salaire. Ils gagneront 8/12 de leur salaire ou ⅔.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est ⅔ de leur salaire. Ils gagneront 8/12 de leur salaire ou ⅔.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  Ils gagneront 8/12 de leur salaire ou ⅔."
      }
    },
    "q4": {
      "text": "Un exemple de tendance est ...",
      "options": {
        "1": "Le budget des voyages a augmenté d&rsquo;année en année d&rsquo;un facteur de 3 %.",
        "2": "Une activité liée au renouvellement des permis de pêche a été retardée en raison des conditions météorologiques dans l'Arctique.",
        "3": "L&rsquo;an dernier, on a consacré moins d&rsquo;argent aux conférences parce qu&rsquo;un employé n&rsquo;a pas assisté à une conférence comme prévu.",
        "4": "Le budget de formation a été dépassé de 6&nbsp;000&nbsp;$ l&rsquo;an dernier."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Le budget des voyages a augmenté d&rsquo;année en année d&rsquo;un facteur de 3 %. Il s&rsquo;agit d&rsquo;une tendance parce que l&rsquo;augmentation est la même depuis quelques années.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Le budget des voyages a augmenté d&rsquo;année en année d&rsquo;un facteur de 3 %. Il s&rsquo;agit d&rsquo;une tendance parce que l&rsquo;augmentation est la même depuis quelques années.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Le budget des voyages a augmenté d&rsquo;année en année d&rsquo;un facteur de 3 %. Il s&rsquo;agit d&rsquo;une tendance parce que l&rsquo;augmentation est la même depuis quelques années."
      }
    },
    "q5": {
      "text": "Comment utiliseriez-vous l&rsquo;information tirée des tendances de vos besoins budgétaires?",
      "options": {
        "1": "Utiliser les dépenses réelles de l&rsquo;année dernière comme point de départ pour créer mes besoins budgétaires.",
        "2": "Utiliser le budget de l&rsquo;année dernière comme point de départ pour créer mes besoins budgétaires.",
        "3": "Ajoutez les chiffres de l&rsquo;an dernier et l&rsquo;augmentation prévue des besoins budgétaires de l&rsquo;an prochain."
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Tous sont corrects. Les tendances que vous voyez peuvent varier, de sorte que la façon dont vous les utilisez dans vos besoins budgétaires peut varier. ",
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les tendances que vous voyez peuvent varier, de sorte que la façon dont vous les utilisez dans vos besoins budgétaires peut varier."
      }
    },
    "q6": {
      "text": "Un exemple d&rsquo;écart est …",
      "options": {
        "1": "1&nbsp;500&nbsp;$ par employé est utilisé pour calculer le budget total de formation.",
        "2": "Un surplus de 10&nbsp;000&nbsp;$ dans le budget de réinstallation.",
        "3": "Délivrance des permis de pêche en 15 jours. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Un surplus de 10&nbsp;000&nbsp;$ dans le budget de réinstallation, car 10&nbsp;000&nbsp;$ est la différence entre le budget et les dépenses réelles.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> 10&nbsp;000&nbsp;$ est la différence entre le budget et les dépenses réelles. ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Un surplus de 10&nbsp;000&nbsp;$ dans le budget de réinstallation, car 10&nbsp;000&nbsp;$ est la différence entre le budget et les dépenses réelles."
      }
    },
    "q7": {
      "text": "L'écart par rapport à l&rsquo;an dernier s&rsquo;explique par une nouvelle priorité ministérielle, soit la tenue d&rsquo;une consultation de trois ans à l&rsquo;échelle du Canada, qui a entraîné un plus grand nombre de déplacements. En ferez-vous état dans votre budget de l&rsquo;année prochaine ?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Oui. "
      },
      "conclusion":"Les consultations ont commencé l&rsquo;année dernière, se poursuivent pendant l&rsquo;année en cours et devraient se terminer l&rsquo;année prochaine."
    },
    "q8": {
      "text": "Les coûts non discrétionnaires sont :",
      "options": {
        "1": "Les coûts qui ne sont pas directement liés à vos activités et qui sont donc moins susceptibles d&rsquo;avoir un impact négatif sur celles-ci.",
        "2": "Coûts que vous avez pré-budgétés au début de l&rsquo;exercice et qui ont été induits au cours de l&rsquo;exercice.",
        "3": "Les coûts qui sont essentiels à la réalisation de vos activités et qui, s&rsquo;ils sont réduits, pourraient vous empêcher de les réaliser. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est Les coûts qui sont essentiels à la réalisation de vos activités et qui, s&rsquo;ils sont réduits, pourraient vous empêcher de les réaliser.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est Les coûts qui sont essentiels à la réalisation de vos activités et qui, s&rsquo;ils sont réduits, pourraient vous empêcher de les réaliser.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      },
      "conclusion":" Les coûts non discrétionnaires, s&rsquo;ils sont réduits ou éliminés, affecteront sérieusement votre capacité à respecter vos priorités."
    }
  }
}</i18n>
<style type="text/css" scoped>
select {
  width: 100%;
}

.scrollMe {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.tableColoured {
  table-layout: fixed;
  width: 100%;
  counter-reset: wpParts
}

.tableColoured td:before {
  counter-increment: wpParts;
  content: counter(wpParts);
  position: absolute;
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}

.tableColoured td {
  vertical-align: top;
  position: relative;
  padding-left: 35px;
}

.tableColoured select {
  max-width: 100%;
}

.vertical {
  transform: rotate(90deg);
}

.deptPri:before {
  background-color: #167777;
}

.deptPri {
  border-top: 2px solid #167777;
  background-color: #c7e0e0
}

.govtPri {
  border-top: 2px solid #6C076C;
  background-color: #e1c8e1
}

.govtPri:before {
  background-color: #6C076C;
}

.dirPri {
  border-top: 2px solid #6F1E0D;
  background-color: #e2ceca
}

.dirPri:before {
  background-color: #6F1E0D;
}

.planAct {
  border-top: 2px solid #577a90;
  background-color: #E2E8EC;
}

.planAct:before {
  background-color: #577a90;
}

.planSubAct {
  border-top: 2px solid #3A8251;
  background-color: #dcefe3;
}

.planSubAct:before {
  background-color: #3A8251;
}

.planDelivs {
  border-top: 2px solid #616EB8;
  background-color: #dfe2f1;
}

.planDelivs:before {
  background-color: #616EB8;
}

.planRisk {
  border-top: 2px solid #8D9245;
  background-color: #f0f1df;
}

.planRisk:before {
  background-color: #8D9245;
}

.planLikely {
  border-top: 2px solid #775F75;
  background-color: #E1DCE1;
}

.planLikely:before {
  background-color: #775F75;
}

.planImpact {
  border-top: 2px solid #607293;
  background-color: hsl(219, 21%, 91%);
}

.planImpact:before {
  background-color: #607293;
}

.planMitigat {
  border-top: 2px solid #B35685;
  background-color: #f1dfe8;
}

.planMitigat:before {
  background-color: #B35685;
}

.planRes {
  border-top: 2px solid #C35522;
  background-color: #f1e5df;
}

.planRes:before {
  background-color: #C35522;
}

.thNumbered {
  position: relative;
  text-align: center;
  padding-left: 25px;
}

.thNumbered:before {
  position: absolute;
  counter-increment: wpParts;
  content: counter(wpParts);
  height: 2em;
  left: 0px;
  top: 0px;
  border-radius: 0 0 30px 0;
  padding: .1em .5em 0 .5em;
  color: white;
}
</style>