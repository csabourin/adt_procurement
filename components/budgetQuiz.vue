<template>
  <span>
    <div class="pure-radiobutton pure-checkbox">
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><selectMatching :Question="$t('q1')" :matches="['2','3','1','4']"/></b-tab>
          <b-tab title="Question 2"><selectMatching :Question="$t('q2')" :matches='["3","4","1","2"]' /></b-tab>
          <b-tab title="Question 3"><radioQuiz :Question="$t('q3')" qId="3" /></b-tab>
          <b-tab title="Question 4"><radioQuiz :Question="$t('q4')" qId="4" /></b-tab>
          <b-tab title="Question 5"><checkboxQuiz :Question="$t('q5')" qId="5" :Answer="['1','2','3']"/></b-tab>
          <b-tab title="Question 6"><radioQuiz :Question="$t('q6')" qId="6" /></b-tab>
          <b-tab title="Question 7"><radioQuiz :Question="$t('q7')" qId="7" /></b-tab>
          <b-tab title="Question 8"><radioQuiz :Question="$t('q8')" qId="8" /></b-tab>
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
      Quest1: '',
      answers1: ['q1.a1', 'q1.a2', 'q1.a3', 'q1.a4', 'q1.a5', 'q1.a6', 'q1.a7', 'q1.a8', 'q1.a9', 'q1.a10', 'q1.a11'],
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
      options11: '',

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
    "q1": {
      "text": "Match the item to the budget in which it belongs. ",
      "options": {
        "1": "A contract with an agency for temp staff",
        "2": "Funds provided to a university to study fish habitat",
        "3": "Casual positions or leave cash-outs",
        "4": "Purchase a new fleet of trucks"
      },
      "matching": {
        "1": "Operating - Salary ",
        "2": "Operating - O&M ",
        "3": "Grants & Contributions",
        "4": "Capital "
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answers are: <table border='1'> <tbody> <tr> <td> <p>A contract with an agency for temp staff</p> </td> <td> <p>Operating - O&amp;M</p> </td> </tr> <tr> <td> <p>Funds provided to a university to study fish habitat</p> </td> <td> <p>Gs&amp;Cs</p> </td> </tr> <tr> <td> <p>Casual positions or leave cash-outs&nbsp;</p> </td> <td> <p>Operating - Salary</p> </td> </tr> <tr> <td> <p>Purchase a new fleet of trucks&nbsp;</p> </td> <td> <p>Capital</p> </td> </tr> </tbody> </table>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
     "q2": {
      "text": "Match the activity to it’s status. ",
      "options": {
        "1": "Issuing fishing licenses.",
        "2": "Next year, you are going to purchase software to replace a paper process.",
        "3": "Costs for an office move that was completed last year.",
        "4": "Consultations across Canada were stopped earlier this year."
      },
      "matching": {
        "1": "Sunsetted",
        "2": "Cancelled",
        "3": "Continuing",
        "4": "New"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <p>The correct answers are:&nbsp;</p> <table border='1'> <tbody> <tr> <td> <p>Issuing fishing licenses.</p> </td> <td> <p>Continuing</p> </td> </tr> <tr> <td> <p>Next year, you are going to purchase software to replace a paper process.</p> </td> <td> <p>New</p> </td> </tr> <tr> <td> <p>Costs for an office move that was completed last year.</p> </td> <td> <p>Sunsetted</p> </td> </tr> <tr> <td> <p>Consultations across Canada were stopped earlier this year.</p> </td> <td> <p>Cancelled</p> </td> </tr> </tbody> </table>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
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
      "text": "To find your department’s core responsibilities, expected results and indicators, you would look to:",
      "options": {
        "1": "The budget for travel has increased year over year by a factor of 3%. ",
        "2": "An activity related to renewing fishing licenses was delayed due to Arctic weather. ",
        "3": "Less was spent on conferences last year because an employee left part way through the year, so they didn’t attend a conference as planned. ",
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
        "1": "Use last year’s actual expenditures as a starting point to create my budget requirements.",
        "2": "Use last year’s budget as a starting point to create my budget requirements. ",
        "3": "Add last year’s numbers plus the projected increase in next year’s budget requirements."
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
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is a surplus in the relocation budget of $10,000, as $10,000 is the difference between budget and actual expenditures."
      }
    },
    "q7": {
      "text": "Last year’s travel variance was due to a new departmental priority to conduct a 3-year cross-Canada consultation which resulted in more trips. Will you put this in your budget requirements for next year?",
      "options": {
        "1": "Yes.",
        "2": "No."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is Yes. Consultations started last year, are continuing in the current year, and should end next year."
      }
    },
    "q8": {
      "text": "Non-discretionary costs are: ",
      "options": {
        "1": "Costs that are not directly linked to your activities and therefore are less likely to have a negative impact on them.",
        "2": "Costs you planned for at the beginning of the fiscal year and that were incurred over the year.",
        "3": "Costs that are essential for delivering on your activities and if cut may result in not being able to deliver on them. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is Costs that are essential for delivering on your activities and if cut may result in not being able to deliver on them. Non-Discretionary costs, if reduced or cut, will seriously affect your ability to deliver your priorities. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is Costs that are essential for delivering on your activities and if cut may result in not being able to deliver on them. Non-Discretionary costs, if reduced or cut, will seriously affect your ability to deliver your priorities. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    }
  },
  "fr": {
    "qDisabled": "Choisissez",
   "q1": {
      "text": "Faites correspondre le poste au budget auquel il appartient.",
      "options": {
        "1": "Un contrat avec une agence d'intérim",
        "2": "Fonds versés à une université pour étudier l'habitat du poisson",
        "3": "Les postes occasionnels ou les encaissements de congés",
        "4": "Achat d’une nouvelle flotte de camions"
      },
      "matching": {
        "1": "Fonctionnement - Salaire",
        "2": "Exploitation - F et E",
        "3": "Subventions et contributions",
        "4": "Capital"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> <p>&nbsp;Les bonnes r&eacute;ponses sont :&nbsp;</p> <table border='1'> <tbody> <tr> <td> <p>Un contrat avec une agence d'int&eacute;rim</p> </td> <td> <p>Exploitation - F et E</p> </td> </tr> <tr> <td> <p>Fonds vers&eacute;s &agrave; une universit&eacute; pour &eacute;tudier l'habitat du poisson</p> </td> <td> <p>Subventions et contribution</p> </td> </tr> <tr> <td> <p>Les postes occasionnels ou les encaissements de cong&eacute;s&nbsp;</p> </td> <td> <p>Fonctionnement - Salaire</p> </td> </tr> <tr> <td> <p>Achat d&rsquo;une nouvelle flotte de camions</p> </td> <td> <p>Capitale</p> </td> </tr> </tbody> </table>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q2": {
      "text": "Faites correspondre l'activité à son statut.",
      "options": {
        "1": "Délivrance des permis de pêche.",
        "2": "L'année prochaine, vous allez acheter un logiciel pour remplacer un processus papier.",
        "3": "Les coûts d’un déménagement de bureaux a été terminé l'an dernier.",
        "4": "Les consultations à l'échelle du Canada ont été interrompues plus tôt cette année"
      },
      "matching": {
        "1": "Caduque",
        "2": "Annulée",
        "3": "Se poursuivant",
        "4": "Nouvelle"
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> <p>Les bonnes r&eacute;ponses sont :&nbsp;</p> <table border='1'> <tbody> <tr> <td> <p>D&eacute;livrance des permis de p&ecirc;che.</p> </td> <td> <p>Se poursuivant</p> </td> </tr> <tr> <td> <p>L'ann&eacute;e prochaine, vous allez acheter un logiciel pour remplacer un processus papier.</p> </td> <td> <p>Nouvelle</p> </td> </tr> <tr> <td> <p>Les co&ucirc;ts d&rsquo;un d&eacute;m&eacute;nagement de bureaux a &eacute;t&eacute; termin&eacute; l'an dernier.</p> </td> <td> <p>Retir&eacute;e</p> </td> </tr> <tr> <td> <p>Les consultations &agrave; l'&eacute;chelle du Canada ont &eacute;t&eacute; interrompues plus t&ocirc;t cette ann&eacute;e.</p> </td> <td> <p>Annul&eacute;e</p> </td> </tr> </tbody> </table>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q3": {
      "text": "Un employé prendra sa retraite après 8 mois l'année prochaine, donc vous estimez son salaire comme :",
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
        "1": "Le budget des voyages a augmenté d'année en année d'un facteur de 3 %.",
        "2": "Une activité liée au renouvellement des permis de pêche a été retardée en raison des conditions météorologiques dans l'Arctique.",
        "3": "L'an dernier, on a consacré moins d'argent aux conférences parce qu'un employé est parti au milieu de l'année, de sorte qu'il n'a pas assisté à une conférence comme prévu.",
        "4": "Le budget de formation a été dépassé de 6 000 $ l'an dernier."
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Le budget des voyages a augmenté d'année en année d'un facteur de 3 %. Il s'agit d'une tendance parce que l'augmentation est la même depuis quelques années.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Le budget des voyages a augmenté d'année en année d'un facteur de 3 %. Il s'agit d'une tendance parce que l'augmentation est la même depuis quelques années.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Le budget des voyages a augmenté d'année en année d'un facteur de 3 %. Il s'agit d'une tendance parce que l'augmentation est la même depuis quelques années."
      }
    },
    "q5": {
      "text": "Comment utiliseriez-vous l'information tirée des tendances de vos besoins budgétaires?",
      "options": {
        "1": "Utiliser les dépenses réelles de l'année dernière comme point de départ pour créer mes besoins budgétaires.",
        "2": "Utiliser le budget de l'année dernière comme point de départ pour créer mes besoins budgétaires.",
        "3": "Ajoutez les chiffres de l'an dernier et l'augmentation prévue des besoins budgétaires de l'an prochain."
      },
      "feedback": {
        "wrong": "<span class='v-wrong' /> <strong>Incorrect.</strong> Tous sont corrects. Les tendances que vous voyez peuvent varier, de sorte que la façon dont vous les utilisez dans vos besoins budgétaires peut varier. ",
        "right": "<span class='v-right' /> <strong>Correct!</strong> Les tendances que vous voyez peuvent varier, de sorte que la façon dont vous les utilisez dans vos besoins budgétaires peut varier."
      
      }
    },
    "q6": {
      "text": "Un exemple d'écart est …",
      "options": {
        "1": "1 500 $ par employé est utilisé pour calculer le budget total de formation.",
        "2": "Un surplus de 10 000 $ dans le budget de réinstallation.",
        "3": "Délivrance des permis de pêche en 15 jours. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Un surplus de 10 000 $ dans le budget de réinstallation, car 10 000 $ est la différence entre le budget et les dépenses réelles.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Un surplus de 10 000 $ dans le budget de réinstallation, car 10 000 $ est la différence entre le budget et les dépenses réelles."
      }
    },
    "q7": {
      "text": "L'écart par rapport à l'an dernier s'explique par une nouvelle priorité ministérielle, soit la tenue d'une consultation de trois ans à l'échelle du Canada, qui a entraîné un plus grand nombre de déplacements. En ferez-vous état dans votre budget de l'année prochaine ?",
      "options": {
        "1": "Oui",
        "2": "Non"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong>",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est Oui. Les consultations ont commencé l'année dernière, se poursuivent pendant l'année en cours et devraient se terminer l'année prochaine."
      }
    },
    "q8": {
      "text": "Les coûts non discrétionnaires sont :",
      "options": {
        "1": "Les coûts qui ne sont pas directement liés à vos activités et qui sont donc moins susceptibles d'avoir un impact négatif sur celles-ci.",
        "2": "Coûts que vous avez pré-budgétés au début de l'exercice et qui ont été induits au cours de l'exercice.",
        "3": "Les coûts qui sont essentiels à la réalisation de vos activités et qui, s'ils sont réduits, pourraient vous empêcher de les réaliser. "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est Les coûts qui sont essentiels à la réalisation de vos activités et qui, s'ils sont réduits, pourraient vous empêcher de les réaliser. Les coûts non discrétionnaires, s'ils sont réduits ou éliminés, affecteront sérieusement votre capacité à respecter vos priorités.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> La bonne réponse est Les coûts qui sont essentiels à la réalisation de vos activités et qui, s'ils sont réduits, pourraient vous empêcher de les réaliser. Les coûts non discrétionnaires, s'ils sont réduits ou éliminés, affecteront sérieusement votre capacité à respecter vos priorités.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
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