<template>
  <span>
    <p><span v-html="$t('actInstructions')"></span></p>
    <table dir="ltr" border="1" cellspacing="0" cellpadding="5" width="100%" class="AnalyzeBudgetTable">
      <colgroup>
        <col width="132" />
        <col width="70" />
        <col width="70" />
        <col width="120" />
        <col width="90" />
        <col width="351" />
      </colgroup>
      <tbody>
        <tr>
          <td v-html="$t('budgetTableFill1')"></td>
          <td v-html="$t('budgetTableFill2')"></td>
          <td v-html="$t('budgetTableFill3')"></td>
          <td colspan="2" rowspan="1" v-html="$t('budgetTableFill4')"></td>
          <td v-html="$t('budgetTableFill5')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill6')"></td>
          <td v-html="$t('budgetTableFill7')"></td>
          <td v-html="$t('budgetTableFill8')"></td>
          <td v-html="$t('budgetTableFill9')"></td>
          <td v-html="$t('budgetTableFill10')"></td>
          <td v-html="$t('budgetTableFill11')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill12')"></td>
          <td v-html="$t('budgetTableFill13')"></td>
          <td v-html="$t('budgetTableFill14')"></td>
          <td v-html="$t('budgetTableFill15')"></td>
          <td v-html="$t('budgetTableFill16')"></td>
          <td v-html="$t('budgetTableFill17')"></td>
        </tr>
        <tr style="background-color:#8e7cc3">
          <td v-html="$t('budgetTableFill18')"></td>
          <td v-html="$t('budgetTableFill19')"></td>
          <td v-html="$t('budgetTableFill20')"></td>
          <td v-html="$t('budgetTableFill21')"></td>
          <td v-html="$t('budgetTableFill22')"></td>
          <td v-html="$t('budgetTableFill23')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill24')"></td>
          <td v-html="$t('budgetTableFill25')"></td>
          <td v-html="$t('budgetTableFill26')"></td>
          <td v-html="$t('budgetTableFill27')"></td>
          <td v-html="$t('budgetTableFill28')"></td>
          <td v-html="$t('budgetTableFill29')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill30')"></td>
          <td v-html="$t('budgetTableFill31')"></td>
          <td v-html="$t('budgetTableFill32')"></td>
          <td>
            <span v-html="$t('budgetTableFill33')" />
          </td>
          <td><span v-html="$t('budgetTableFill34')" />
          </td>
          <td v-html="$t('budgetTableFill35')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill36')"></td>
          <td v-html="$t('budgetTableFill37')"></td>
          <td v-html="$t('budgetTableFill38')"></td>
          <td><span v-html="$t('budgetTableFill39')" /></td>
          <td><span v-html="$t('budgetTableFill40')" /></td>
          <td v-html="$t('budgetTableFill41')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill42')"></td>
          <td v-html="$t('budgetTableFill43')"></td>
          <td v-html="$t('budgetTableFill44')"></td>
          <td v-html="$t('budgetTableFill45')"></td>
          <td v-html="$t('budgetTableFill46')"></td>
          <td v-html="$t('budgetTableFill47')"></td>
        </tr>
        <tr style="background-color:#8e7cc3">
          <td v-html="$t('budgetTableFill48')"></td>
          <td v-html="$t('budgetTableFill49')"></td>
          <td v-html="$t('budgetTableFill50')"></td>
          <td v-html="$t('budgetTableFill51')"></td>
          <td v-html="$t('budgetTableFill52')"></td>
          <td v-html="$t('budgetTableFill53')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill54')"></td>
          <td v-html="$t('budgetTableFill55')"></td>
          <td v-html="$t('budgetTableFill56')"></td>
          <td v-html="$t('budgetTableFill57')"></td>
          <td v-html="$t('budgetTableFill58')"></td>
          <td v-html="$t('budgetTableFill59')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill60')"></td>
          <td v-html="$t('budgetTableFill61')"></td>
          <td v-html="$t('budgetTableFill62')"></td>
          <td><span v-html="$t('budgetTableFill63')">$3,000</span></td>
          <td><span v-html="$t('budgetTableFill64')" /></td>
          <td v-html="$t('budgetTableFill65')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill66')"></td>
          <td v-html="$t('budgetTableFill67')"></td>
          <td v-html="$t('budgetTableFill68')"></td>
          <td><span v-html="$t('budgetTableFill69')" /></td>
          <td v-html="$t('budgetTableFill70')"></td>
          <td v-html="$t('budgetTableFill71')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill72')"></td>
          <td v-html="$t('budgetTableFill73')"></td>
          <td v-html="$t('budgetTableFill74')"></td>
          <td v-b-modal.question4><span v-if="q1Answer" v-html="$t('budgetTableFill75')"></span><a v-else href="javascript:" class="questionMark">?</a></td>
          <td v-b-modal.question4><span v-if="q1Answer" v-html="$t('budgetTableFill76')"></span></td>
          <td v-html="$t('budgetTableFill77')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill78')"></td>
          <td v-html="$t('budgetTableFill79')"></td>
          <td v-html="$t('budgetTableFill80')"></td>
          <td v-b-modal.question5><span v-if="q2Answer" v-html="$t('budgetTableFill81')"></span></td>
          <td v-b-modal.question5><span v-if="q2Answer" v-html="$t('budgetTableFill82')"></span><a v-else href="javascript:" class="questionMark">?</a></td>
          <td v-html="$t('budgetTableFill83')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill84')"></td>
          <td v-html="$t('budgetTableFill85')"></td>
          <td v-html="$t('budgetTableFill86')"></td>
          <td v-html="$t('budgetTableFill87')"></td>
          <td v-html="$t('budgetTableFill88')"></td>
          <td v-html="$t('budgetTableFill89')"></td>
        </tr>
        <tr>
          <td><strong v-html="$t('budgetTableFill90')"></strong></td>
          <td v-html="$t('budgetTableFill91')"></td>
          <td v-html="$t('budgetTableFill92')"></td>
          <td>
            <p v-if="q1Answer && q2Answer" v-html="$t('budgetTableFill93')" />
          </td>
          <td>
            <p v-if="q1Answer && q2Answer" v-html="$t('budgetTableFill94')" />
          </td>
          <td v-html="$t('budgetTableFill95')"></td>
        </tr>
      </tbody>
    </table>
    <b-modal id="question4" okOnly size="lg" :title="$t('q1.title')">
      <p v-html="$t('q1.introduction')"></p>
      <radioQuiz :question="$t('q1')" @response="q1Answer=$event" qId="1" />
    </b-modal>
    <b-modal id="question5" :title="$t('q2.title')" size="lg" okOnly>
      <p v-html="$t('q2.introduction')"></p>
      <checkboxQuiz :question="$t('q2')" qId="2" @response="q2Answer=$event" :Answer="['3','4']" />
    </b-modal>
  </span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
import checkboxQuiz from "~/components/checkboxQuiz"
export default {
  components: {
    radioQuiz,
    checkboxQuiz
  },
  data() {
    return {
      q1Answer: "",
      q2Answer: ""
    }
  }
}

</script>
<style type="text/css">
.AnalyzeBudgetTable td {
  position: relative;
}

.questionMark {
  display: block;
  font-family: Roboto Medium, Sans Serif;
  font-size: 36px;
  position: absolute;
  background-color: #dfe49e;
  color: #4d4d4d;
  border: 2px solid #eee;
  border-radius: 50px;
  text-align: center;
  content: "?";
  box-shadow: 3px 3px 3px rgba(50, 50, 51, .3);
  width: 60px;
  height: 60px;
  left: 30%;
  top: -.25em;
  z-index: 9999;
  cursor: pointer;
}

</style>
<i18n>
  {
  "en": {
    "q1": {
      "introduction": "You have three employees that need training to implement the new software at $800 per employee. It has been common practice to send four employees on training of their choice at $500 per employee. ",
      "text": "What will your budget requirements be?",
      "options": {
        "1": "$4,400 Non-Discretionary ",
        "2": "$2,400 Non-Discretionary and $2,000 Discretionary",
        "3": "$2,000 Non-Discretionary and $2,400 Discretionary"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is $2,400 Non-Discretionary and $2,000 Discretionary.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is $2,400 Non-Discretionary and $2,000 Discretionary."
      },
      "conclusion": "<p>Training to implement the new software is non-discretionary and the other employee training is discretionary.</p>",
      "title": "Training"
    },
    "q2": {
      "text": "What will your budget requirements be?",
      "options": {
        "1": "$18,000 Discretionary ",
        "2": "$10,000 Non-Discretionary and $8,000 Discretionary",
        "3": "$10,000 Non-Discretionary and $1,600 Discretionary",
        "4": "$11,600 Non-Discretionary"
      },
      "feedback": {
        "right": "<span class='v-right'/> <strong>Correct!</strong> ",
        "wrong": "<span class='v-wrong'/> <strong>Incorrect.</strong> The correct answers are $10,000 Non-Discretionary and $1,600 Discretionary or $11,600 Non-Discretionary."
      },
      "title": "Travel ",
      "introduction": "<table border='1'> <tbody> <tr> <td> <p>Travel</p> </td> <td> <p>Budget (A)</p> </td> <td> <p>Actual (B)</p> </td> <td> <p>Variance (C=B-A)</p> </td> <td> <p>Variance Explanation</p> </td> </tr> <tr> <td> <p>Previous year&nbsp;</p> </td> <td> <p>$18,000</p> </td> <td> <p>$16,000</p> </td> <td> <p>($2,000)</p> </td> <td> <p>Employee on leave without pay, and another did not travel.</p> </td> </tr> <tr> <td>&nbsp;</td> <td> <p>Budget</p> </td> <td> <p>YTD Actual</p> </td> <td> <p>Annual Forecast</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Current year at P6</p> </td> <td> <p>$18,000</p> </td> <td> <p>$9,000</p> </td> <td> <p>$18,000</p> </td> <td>&nbsp;</td> </tr> </tbody> </table> <p>Historically, you have&nbsp;</p> <ul> <li>spent $10,000 on travel to conduct inspections, and</li> <li>budgeted a total of $8,000 for general travel. However, you know that 80% of work can now be done virtually.</li> </ul>",
      "conclusion": "<p>We need to conduct inspections as part of our business, hence $10,000 is non-discretionary. As per the Directive on Travel, Hospitality, Conference, and Event Expenditures, travel should be avoided where appropriate. We will not request a budget for the 80% that can be done virtually. Since there is no indication of what the remaining general travel is for, it could be non-discretionary or discretionary.&nbsp;</p> <p><a href='https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228'>Directive</a></p>"
    },
    "actInstructions": "Select any question marks and answer the question that appears",
    "budgetTableFill1": "Line Item",
    "budgetTableFill2": "Previous Budget",
    "budgetTableFill3": "Current Budget",
    "budgetTableFill4": "Proposed Budget",
    "budgetTableFill5": "Notes for Proposed Budget",
    "budgetTableFill6": "&nbsp;",
    "budgetTableFill7": "&nbsp;",
    "budgetTableFill8": "&nbsp;",
    "budgetTableFill9": "Non-Discretionary",
    "budgetTableFill10": "Discretionary",
    "budgetTableFill11": "&nbsp;",
    "budgetTableFill12": "&nbsp;",
    "budgetTableFill13": "&nbsp;",
    "budgetTableFill14": "&nbsp;",
    "budgetTableFill15": "&nbsp;",
    "budgetTableFill16": "&nbsp;",
    "budgetTableFill17": "&nbsp;",
    "budgetTableFill18": "Salary",
    "budgetTableFill19": "&nbsp;",
    "budgetTableFill20": "&nbsp;",
    "budgetTableFill21": "&nbsp;",
    "budgetTableFill22": "&nbsp;",
    "budgetTableFill23": "&nbsp;",
    "budgetTableFill24": "&nbsp;",
    "budgetTableFill25": "&nbsp;",
    "budgetTableFill26": "&nbsp;",
    "budgetTableFill27": "&nbsp;",
    "budgetTableFill28": "&nbsp;",
    "budgetTableFill29": "&nbsp;",
    "budgetTableFill30": "Salary",
    "budgetTableFill31": "$460,000",
    "budgetTableFill32": "$475,000",
    "budgetTableFill33": "$430,000",
    "budgetTableFill34": "$13,333",
    "budgetTableFill35": "manager, 2 officers, 2 analysts, 1 jr. officer, 1 jr. analyst, admin, 1 officer retiring July 1, casual 4 months",
    "budgetTableFill36": "TOTAL",
    "budgetTableFill37": "$460,000",
    "budgetTableFill38": "$475,000",
    "budgetTableFill39": "$430,000",
    "budgetTableFill40": "$13,333",
    "budgetTableFill41": "&nbsp;",
    "budgetTableFill42": "&nbsp;",
    "budgetTableFill43": " ",
    "budgetTableFill44": " ",
    "budgetTableFill45": " ",
    "budgetTableFill46": " ",
    "budgetTableFill47": "&nbsp;",
    "budgetTableFill48": "O&amp;M",
    "budgetTableFill49": " ",
    "budgetTableFill50": " ",
    "budgetTableFill51": " ",
    "budgetTableFill52": " ",
    "budgetTableFill53": "&nbsp;",
    "budgetTableFill54": "&nbsp;",
    "budgetTableFill55": " ",
    "budgetTableFill56": " ",
    "budgetTableFill57": " ",
    "budgetTableFill58": " ",
    "budgetTableFill59": "&nbsp;",
    "budgetTableFill60": "Software License",
    "budgetTableFill61": "$0",
    "budgetTableFill62": "$0",
    "budgetTableFill63": "$3,000",
    "budgetTableFill64": " ",
    "budgetTableFill65": "new software, annual cost $1,000 X 3 FTEs",
    "budgetTableFill66": "Material and Supplies",
    "budgetTableFill67": "$1,961",
    "budgetTableFill68": "$2,000",
    "budgetTableFill69": "$1,500",
    "budgetTableFill70": " ",
    "budgetTableFill71": "historical spend is $1,500",
    "budgetTableFill72": "Training",
    "budgetTableFill73": "$2,000",
    "budgetTableFill74": "$2,000",
    "budgetTableFill75": "$2,400",
    "budgetTableFill76": "$2,000",
    "budgetTableFill77": "3 FTEs at $800 each for training, 4 FTEs at $500 each for general training",
    "budgetTableFill78": "Travel",
    "budgetTableFill79": "$18,000",
    "budgetTableFill80": "$18,000",
    "budgetTableFill81": "$10,000",
    "budgetTableFill82": "$1,600",
    "budgetTableFill83": "$10K to conduct inspections, $1.6K for general travel",
    "budgetTableFill84": "Temp Help",
    "budgetTableFill85": "$10,000",
    "budgetTableFill86": "$5,000",
    "budgetTableFill87": "$4,000",
    "budgetTableFill88": "$2,000",
    "budgetTableFill89": "to help conduct remote inspections",
    "budgetTableFill90": "TOTAL",
    "budgetTableFill91": "$31,961",
    "budgetTableFill92": "$27,000",
    "budgetTableFill93": "$20,900",
    "budgetTableFill94": "$5,600",
    "budgetTableFill95": "&nbsp;"
  },
  "fr": {
    "q1": {
      "conclusion": "La formation pour la mise en œuvre du nouveau logiciel est non discrétionnaire et la formation des autres employés est discrétionnaire.",
      "introduction": "Vous avez trois employés qui ont besoin de formation pour mettre en œuvre le nouveau logiciel à 800 $ par employé. Il est courant d'envoyer quatre employés suivre la formation de leur choix au coût de 500 $ par employé.",
      "text": "Quels seront vos besoins budgétaires ?",
      "options": {
        "1": "4 400 $ Non discrétionnaire",
        "2": "2 400 $ non discrétionnaire et 2 000 $ discrétionnaire",
        "3": "2 000 $ non discrétionnaire et 2 400 $ discrétionnaire"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est 2 400 $ non discrétionnaire et 2 000 $ discrétionnaire.</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est 2 400 $ non discrétionnaire et 2 000 $ discrétionnaire."
      },
      "title": "Formation"
    },
    "q2": {
      "introduction": "<table border='1'> <tbody> <tr> <td> <p>Voyage</p> </td> <td> <p>Budget (A)</p> </td> <td> <p>R&eacute;el (B)</p> </td> <td> <p>Variance (C=B-A)</p> </td> <td> <p>Variance Explication</p> </td> </tr> <tr> <td> <p>Ann&eacute;e pr&eacute;c&eacute;dente&nbsp;</p> </td> <td> <p>18 000 $</p> </td> <td> <p>16 000 $</p> </td> <td> <p>(2 000 $)</p> </td> <td> <p>en cong&eacute; non pay&eacute;, et un autre n'a pas voyag&eacute;.</p> </td> </tr> <tr> <td>&nbsp;</td> <td> <p>Budget</p> </td> <td> <p>YTD R&eacute;el&nbsp;</p> </td> <td> <p>Pr&eacute;visions annuelles</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Ann&eacute;e en cours &agrave; P6</p> </td> <td> <p>18 000 $</p> </td> <td> <p>9 000 $</p> </td> <td> <p>18 000 $</p> </td> <td>&nbsp;</td> </tr> </tbody> </table> <p>Historiquement, vous avez&nbsp;</p> <ul> <li>d&eacute;pens&eacute; 10 000 $ en frais de d&eacute;placement pour effectuer des inspections, et</li> <li>a pr&eacute;vu au budget un montant total de 8 000 dollars pour les voyages g&eacute;n&eacute;raux. Cependant, vous savez que 80 % des d&eacute;placements g&eacute;n&eacute;raux peuvent se faire virtuellement.</li> </ul>",
      "text": "Quels seront vos besoins budgétaires ?",
      "options": {
        "1": "18 000 $ Pouvoir discrétionnaire ",
        "2": "10 000 $ non discrétionnaire et 8 000 $ discrétionnaire",
        "3": "10 000 $ non discrétionnaire et 1 600 $ discrétionnaire",
        "4": "11 600 $ Non discrétionnaire"
      },
      "feedback": {
        "wrong": "<span class='v-wrong'/> <strong>Incorrect.</strong> Les bonnes réponses sont 10 000 $ non discrétionnaire et 1 600 $ discrétionnaire ou 11 600 $ non discrétionnaire. ",
        "right": "<span class='v-right'/> <strong>Correct!</strong> "
      },
      "title": "Voyage",
      "conclusion": "<p>Nous devons effectuer des inspections dans le cadre de nos activités, de sorte que 10 000 $ ne sont pas discrétionnaires. Conformément à la Directive sur les dépenses de voyage, d'accueil, de conférence et d'événement, les déplacements devraient être évités au besoin. Nous ne demanderons pas un budget pour les 80 p. 100 qui peuvent être réalisés virtuellement. Étant donné qu'il n'y a aucune indication de la raison pour laquelle les déplacements généraux restants sont effectués, ils pourraient être non discrétionnaires ou discrétionnaires.</p> <a href='https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228' target='_blank'>Directive</a>"
    },
    "actInstructions": "Sélectionnez les points d'interrogation et répondez à la question qui apparaît. ",
    "budgetTableFill1": "Poste individuel",
    "budgetTableFill2": "Budget Précédent",
    "budgetTableFill3": "Budget Actuel",
    "budgetTableFill4": "Budget proposé",
    "budgetTableFill5": "Notes pour le budget proposé",
    "budgetTableFill6": "&nbsp;",
    "budgetTableFill7": "&nbsp;",
    "budgetTableFill8": "&nbsp;",
    "budgetTableFill9": "Non discrétionnaire",
    "budgetTableFill10": "Discrétionnaire",
    "budgetTableFill11": " ",
    "budgetTableFill12": "&nbsp;",
    "budgetTableFill13": "&nbsp;",
    "budgetTableFill14": "&nbsp;",
    "budgetTableFill15": "&nbsp;",
    "budgetTableFill16": "&nbsp;",
    "budgetTableFill17": "&nbsp;",
    "budgetTableFill18": "Salaire",
    "budgetTableFill19": "&nbsp;",
    "budgetTableFill20": "&nbsp;",
    "budgetTableFill21": "&nbsp;",
    "budgetTableFill22": "&nbsp;",
    "budgetTableFill23": "&nbsp;",
    "budgetTableFill24": "&nbsp;",
    "budgetTableFill25": "&nbsp;",
    "budgetTableFill26": "&nbsp;",
    "budgetTableFill27": "&nbsp;",
    "budgetTableFill28": "&nbsp;",
    "budgetTableFill29": "&nbsp;",
    "budgetTableFill30": "Salaire",
    "budgetTableFill31": "460 000$",
    "budgetTableFill32": "475 000$",
    "budgetTableFill33": "430 000$",
    "budgetTableFill34": "13 333$",
    "budgetTableFill35": "gestionnaire, 2 agents, 2 analystes, 1 agent jr., 1 analyste jr., 1 administrateur, 1 agent prenant sa retraite le 1er juillet, occasionnel 4 mois",
    "budgetTableFill36": "TOTAL",
    "budgetTableFill37": "460 000$",
    "budgetTableFill38": "475 000$",
    "budgetTableFill39": "430 000$",
    "budgetTableFill40": "13 333$",
    "budgetTableFill41": "&nbsp;",
    "budgetTableFill42": "&nbsp;",
    "budgetTableFill43": " ",
    "budgetTableFill44": " ",
    "budgetTableFill45": " ",
    "budgetTableFill46": " ",
    "budgetTableFill47": "&nbsp;",
    "budgetTableFill48": "F et E",
    "budgetTableFill49": " ",
    "budgetTableFill50": " ",
    "budgetTableFill51": " ",
    "budgetTableFill52": " ",
    "budgetTableFill53": "&nbsp;",
    "budgetTableFill54": "&nbsp;",
    "budgetTableFill55": " ",
    "budgetTableFill56": " ",
    "budgetTableFill57": " ",
    "budgetTableFill58": " ",
    "budgetTableFill59": "&nbsp;",
    "budgetTableFill60": "Licence de logiciel ",
    "budgetTableFill61": "0$",
    "budgetTableFill62": "0$",
    "budgetTableFill63": "3 000$",
    "budgetTableFill64": " ",
    "budgetTableFill65": "nouveau logiciel, coût annuel 1 000 $ X 3 ETP",
    "budgetTableFill66": "Fournitures de bureau",
    "budgetTableFill67": "1 961$",
    "budgetTableFill68": "2 000$",
    "budgetTableFill69": "1 500$",
    "budgetTableFill70": " ",
    "budgetTableFill71": "les dépenses historiques sont de 1 500$.",
    "budgetTableFill72": "Formation",
    "budgetTableFill73": "2 000$",
    "budgetTableFill74": "2 000$",
    "budgetTableFill75": "2 400$",
    "budgetTableFill76": "2 000$",
    "budgetTableFill77": "3 ETP à 800$ chacun pour la formation, 4 ETP à 500$ chacun pour la formation générale",
    "budgetTableFill78": "Voyage",
    "budgetTableFill79": "18 000$",
    "budgetTableFill80": "18 000$",
    "budgetTableFill81": "10 000$",
    "budgetTableFill82": "1 600$",
    "budgetTableFill83": "10 000$ pour effectuer des inspections, 1600$ pour les déplacements généraux",
    "budgetTableFill84": "Aide temporaire",
    "budgetTableFill85": "$10,000",
    "budgetTableFill86": "5 000$",
    "budgetTableFill87": "4 000$",
    "budgetTableFill88": "2 000$",
    "budgetTableFill89": "pour aider à effectuer des inspections à distance",
    "budgetTableFill90": "TOTAL",
    "budgetTableFill91": "31 961$",
    "budgetTableFill92": "27 000$",
    "budgetTableFill93": "20 900$",
    "budgetTableFill94": "5 600$",
    "budgetTableFill95": "&nbsp;"
  }
}
</i18n>
