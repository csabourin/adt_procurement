<template>
  <span>
    <div>
      <b-card>
        <b-tabs v-model="tabIndex">
          <b-tab title="Question 1"><selectMatching :Question="$t('q1')" :matches="['2','3','1','4']"/></b-tab>
          <b-tab title="Question 2"><selectMatching :Question="$t('q2')" :matches='["3","4","1","2"]' /></b-tab>
          <b-tab title="Question 3"><radioQuiz :Question="$t('q3')" qId="3" /></b-tab>
          <b-tab title="Question 4"><radioQuiz :Question="$t('q4')" qId="4" /></b-tab>
          <b-tab title="Question 5"><radioQuiz :Question="$t('q5')" qId="5" /></b-tab>
          <b-tab title="Question 6"><radioQuiz :Question="$t('q6')" qId="6" /></b-tab>
          <b-tab title="Question 7"><radioQuiz :Question="$t('q7')" qId="7" /></b-tab>
          <b-tab title="Question 8"><radioQuiz :Question="$t('q8')" qId="8" /></b-tab>
        </b-tabs>
      </b-card>
      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-button @click="tabIndex--">{{$t('previousPage')}}</b-button>
          <b-button @click="tabIndex++">{{$t('nextPage')}}</b-button>
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
      "text": "A departmental priority in your work plan originates all the way back to:",
      "options": {
        "1": "The Directorate’s plan",
        "2": "The Departmental plan",
        "3": "The Speech from the Throne"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the government lays out its priorities. ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Departmental priorities flow from the Speech from the Throne, where the government lays out its priorities. ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  It’s a good idea to start your view of the big picture with the Speech from the Throne."
      }
    },
    "q4": {
      "text": "To find your department’s core responsibilities, expected results and indicators, you would look to:",
      "options": {
        "1": "The directorate’s plan",
        "2": "The Departmental plan",
        "3": "The Speech from the Throne",
        "4": "The sector’s plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Your department’s core responsibilities, expected results and indicators are found within the Departmental Plan."
      }
    },
    "q5": {
      "text": "The Prime Minister sets out his expectations and objectives for your department in: ",
      "options": {
        "1": "The Speech from the Throne",
        "2": "The Departmental Results Framework",
        "3": "The Mandate Letter",
        "4": "The Departmental Plan"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The Prime Minister outlines his expectations and objectives in the Mandate letter to the Minister responsible for the department."
      }
    },
    "q6": {
      "text": "How often does a manager need to recertify in order to be able to continue to exercise their financial authority?",
      "options": {
        "1": "Every year",
        "2": "Every 2 years",
        "3": "Every 5 years"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Managers need to recertify every 5 years.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Managers need to recertify every 5 years.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    },
    "q7": {
      "text": "To conduct a 360 scan, you must do the following.",
      "options": {
        "1": "Get a sense of the current situation by examining what was done in the recent past.",
        "2": "Look at previous work plans, budgets and reports.",
        "3": "Identify challenges from the previous years.",
        "4": "Get a sense of the cultural context in your department/branch/directorate.",
        "5": "All of the above."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> You must do all these activities to conduct a 360 review.",
        "5": "<span class='v-right' /> <strong>Correct!</strong>  You must do all these activities to conduct a 360 review."
      }
    },
    "q8": {
      "text": "Choose the priorities to which your work plan activities should link, starting with the top.",
      "options": {
        "1": "Departmental priorities, directorate priorities, government priorities",
        "2": "Government priorities, departmental priorities, directorate priorities",
        "3": "Directorate priorities, government priorities, departmental priorities"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The priorities starting from the top are: Government priorities, departmental priorities, directorate priorities."
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
        "wrong": "<span class='v-wrong' /> <p>Les bonnes r&eacute;ponses sont :&nbsp;</p> <table border='1'> <tbody> <tr> <td> <p>D&eacute;livrance des permis de p&ecirc;che.</p> </td> <td> <p>Se poursuivant</p> </td> </tr> <tr> <td> <p>L'ann&eacute;e prochaine, vous allez acheter un logiciel pour remplacer un processus papier.</p> </td> <td> <p>Nouvelle</p> </td> </tr> <tr> <td> <p>Les co&ucirc;ts d&rsquo;un d&eacute;m&eacute;nagement de bureaux a &eacute;t&eacute; termin&eacute; l'an dernier.</p> </td> <td> <p>Retir&eacute;e</p> </td> </tr> <tr> <td> <p>Les consultations &agrave; l'&eacute;chelle du Canada ont &eacute;t&eacute; interrompues plus t&ocirc;t cette ann&eacute;e.</p> </td> <td> <p>Annul&eacute;e</p> </td> </tr> </tbody> </table>",
        "right": "<span class='v-right' /> <strong>Correct!</strong>"
      }
    },
    "q3": {
      "text": "Une priorité ministérielle de votre plan de travail remonte à l'origine:",
      "options": {
        "1": "du plan de la direction ",
        "2": "du plan ministériel",
        "3": "du discours du Trône"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités ministérielles découlent du discours du Trône, dans lequel le gouvernement énonce ses priorités.  ",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  C'est une bonne idée de commencer votre vision d'ensemble avec le discours du Trône."
      }
    },
    "q4": {
      "text": "Pour trouver les principales responsabilités de votre ministère, les résultats escomptés et les indicateurs, vous devriez vous tourner vers :",
      "options": {
        "1": "Le plan de la Direction ",
        "2": "Le Plan ministériel",
        "3": "Le discours du Trône",
        "4": "Le plan du secteur"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. ",
        "2": "<span class='v-right' /> <strong>Correct!</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. ",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les responsabilités fondamentales, les résultats escomptés et les indicateurs de votre ministère se trouvent dans le Plan ministériel. "
      }
    },
    "q5": {
      "text": "Le premier ministre énonce ses attentes et ses objectifs pour votre ministère dans : ",
      "options": {
        "1": "Le discours du Trône",
        "2": "Le Cadre ministériel des résultats ",
        "3": "La lettre de mandat",
        "4": "Le plan ministériel\n"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère.",
        "3": "<span class='v-right' /> <strong>Correct!</strong>  Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Le premier ministre décrit ses attentes et ses objectifs dans la lettre de mandat adressée au ministre responsable du ministère."
      }
    },
    "q6": {
      "text": "À quelle fréquence un gestionnaire doit-il renouveler son attestation pour pouvoir continuer à exercer ses pouvoirs financiers ?",
      "options": {
        "1": "Chaque année",
        "2": "Tous les 2 ans",
        "3": "Tous les 5 ans"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les cinq ans.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les gestionnaires doivent renouveler leur accréditation tous les cinq ans.",
        "3": "<span class='v-right' /> <strong>Correct!</strong> "
      }
    },
    "q7": {
      "text": "Pour effectuer un aperçu à 360 degrés, vous devez procéder comme suit.",
      "options": {
        "1": "Se faire une idée de la situation actuelle en examinant ce qui a été fait dans un passé récent.",
        "2": "Examinez les plans de travail, budgets et rapports antérieurs.",
        "3": "Identifier les défis des années précédentes.",
        "4": "Se faire une idée du contexte culturel de son ministère, de sa direction générale ou de sa direction.",
        "5": "Toutes ces réponses."
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés.",
        "5": "<span class='v-right' /> <strong>Correct!</strong>  Vous devez faire toutes ces activités pour effectuer un aperçu à 360 degrés."
      }
    },
    "q8": {
      "text": "Choisissez les priorités auxquelles les activités de votre plan de travail devraient se rattacher, en commençant par le sommet.",
      "options": {
        "1": "Priorités ministérielles, priorités de la Direction, priorités du gouvernement",
        "2": "Priorités gouvernementales, priorités ministérielles, priorités de la Direction",
        "3": "Priorités de la Direction, priorités gouvernementales, priorités ministérielles"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités à partir du sommet sont : Priorités gouvernementales, priorités ministérielles, priorités de la Direction.",
        "2": "<span class='v-right' /> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> Les priorités à partir du sommet sont : Priorités gouvernementales, priorités ministérielles, priorités de la Direction."
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