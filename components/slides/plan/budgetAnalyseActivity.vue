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
        <tr class="qTable">
          <th v-html="$t('budgetTableFill1')"></th>
          <th v-html="$t('budgetTableFill2')"></th>
          <th v-html="$t('budgetTableFill3')"></th>
          <th colspan="2" rowspan="1" v-html="$t('budgetTableFill4')"></th>
          <th v-html="$t('budgetTableFill5')"></th>
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
        <tr class="qTable">
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
          <td v-b-modal.question1>
            <strong v-if="q1Answer" v-html="$t('budgetTableFill33')"></strong><a v-else href="javascript:" class="questionMark">?</a>
          </td>
          <td v-b-modal.question1><strong v-if="q1Answer" v-html="$t('budgetTableFill34')"></strong><span v-else></span>
          </td>
          <td v-html="$t('budgetTableFill35')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill36')"></td>
          <td v-html="$t('budgetTableFill37')"></td>
          <td v-html="$t('budgetTableFill38')"></td>
          <td><span v-if="q1Answer" v-html="$t('budgetTableFill39')"></span></td>
          <td><span v-if="q1Answer" v-html="$t('budgetTableFill40')"></span></td>
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
        <tr class="qTable">
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
          <td v-b-modal.question2><strong v-if="q2Answer" v-html="$t('budgetTableFill63')">$3,000</strong></td>
          <td v-b-modal.question2><strong v-if="q2Answer" v-html="$t('budgetTableFill64')"></strong><a v-else href="javascript:" class="questionMark">?</a></td>
          <td v-html="$t('budgetTableFill65')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill66')"></td>
          <td v-html="$t('budgetTableFill67')"></td>
          <td v-html="$t('budgetTableFill68')"></td>
          <td v-b-modal.question3><strong v-if="q3Answer" v-html="$t('budgetTableFill69')" /><a v-else href="javascript:" class="questionMark">?</a></td>
          <td v-b-modal.question3 v-html="$t('budgetTableFill70')"></td>
          <td v-html="$t('budgetTableFill71')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill72')"></td>
          <td v-html="$t('budgetTableFill73')"></td>
          <td v-html="$t('budgetTableFill74')"></td>
          <td v-html="$t('budgetTableFill75')"></td>
          <td v-html="$t('budgetTableFill76')"></td>
          <td v-html="$t('budgetTableFill77')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill78')"></td>
          <td v-html="$t('budgetTableFill79')"></td>
          <td v-html="$t('budgetTableFill80')"></td>
          <td v-html="$t('budgetTableFill81')"></td>
          <td v-html="$t('budgetTableFill82')"></td>
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
    <b-modal id="question1" okOnly size="lg" :title="$t('q1.title')">
      <p v-html="$t('q1.introduction')"></p>
      <radioQuiz :question="$t('q1')" @response="q1Answer=$event" qId="1" />
    </b-modal>
    <b-modal id="question2" :title="$t('q2.title')" size="lg" okOnly>
      <p v-html="$t('q2.introduction')"></p>
      <radioQuiz :question="$t('q2')" qId="2" @response="q2Answer=$event" />
    </b-modal>
    <b-modal id="question3" okOnly size="lg" :title="$t('q3.title')">
      <p v-html="$t('q3.introduction')" />
      <radioQuiz :question="$t('q3')" qId="3" @response="q3Answer=$event" />
    </b-modal>
  </span>
</template>
<script type="text/javascript">
import radioQuiz from "~/components/radioQuiz"
export default {
  components: {
    radioQuiz
  },
  data() {
    return {
      q1Answer: "",
      q2Answer: "",
      q3Answer: ""
    }
  }
}

</script>
<style type="text/css" scoped>
>>> .finTable tr:nth-child(odd){ 
background-color: #8e7cc3;
color:#fff;
text-align: center;}

>>> .finTable tr:nth-child(even) td:nth-child(n+2):nth-child(-n+4){
text-align: right;
} 

>>> .qTable td{ 
  padding:.5em;

}

.AnalyzeBudgetTable td:nth-child(n+2):nth-child(-n+5){
  text-align: right;
}
>>> .qTable th{
  background-color:#8e7cc3;
  color:#fff;
  font-weight: bold;
  text-align: center;
}
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
<i18n>{
  "en": {
    "q1": {
      "title": "Salary",
      "introduction": "<table class='qTable finTable' border='1'> <tbody> <tr> <th> <p>Salary</p> </th> <th> <p>Budget (A)</p> </th> <th> <p>Actual (B)</p> </th> <th> <p>Variance (C=B-A)</p> </th> <th> <p>Variance Explanation</p> </th> </tr> <tr> <td> <p>Previous year&nbsp;</p> </td> <td> <p>$460,000</p> </td> <td> <p>$450,000</p> </td> <td> <p><span style='color: #ff0000;'>($10,000)</span></p> </td> <td> <p>An employee was on leave without pay.</p> </td> </tr> <tr> <td>&nbsp;</td> <th> <p>Budget</p> </th> <th> <p>YTD Actual</p> </th> <td> <p>Annual Forecast</p> </td> <td></td> </tr> <tr> <td> <p>Current year at P6</p> </td> <td> <p>$475,000</p> </td> <td> <p>$237,500</p> </td> <td> <p>$475,000</p> </td> <td>&nbsp;</td> </tr> </tbody> </table><br><ul> <li>An employee&rsquo;s annual salary is $60,000 per year. You know that they will retire on July 1 of next year and won&rsquo;t be replaced, and&nbsp;</li> <li>You plan on getting a casual employee for 4 months for a total of $13,333.</li> </ul>",
      "text": "What budget will you propose for the next fiscal year?",
      "options": {
        "1": "$415,000 Non-Discretionary and $13,333 Discretionary",
        "2": "$430,000 Non-Discretionary and $13,333 Discretionary",
        "3": "$445,000 Non-Discretionary and $13,333 Discretionary",
        "4": "$475,000 Non-Discretionary&nbsp;"
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>."
      },
      "conclusion": "<p> Your starting point is the current year&rsquo;s budget of $475,000. For the employee who is retiring and not being replaced, you need to subtract 9 months (July to March) of the $60,000 in annual salary ($475,000 - $45,000=$430,000). Since casual employees are not part of the org chart, they are considered discretionary.&nbsp;</p><p><span>It is important to analyze any variances so the figures in your proposed budget are accurate. To discover the reason for a variance, you could speak with the previous manager, your admin, or your director. A report from Finance may provide the variance explanation.&nbsp;</span></p>"
    },
    "q2": {
      "title": "Software License",
      "introduction": "<p>You will have to estimate costs for new activities for your budget requirements. If an activity was completed last year, it won&rsquo;t appear. Look for cancelled or delayed activities as well, to be sure your budget requirements are complete.</p><p>You did not have software in last year&rsquo;s or the current year&rsquo;s budget. Looking at your work plan, you know that your plan is to purchase new software next year for issuing fishing licenses. You do some research and find out that the software license costs $1,000 annually per officer (you will have 3 officers using it). Online training will cost $800.00 per officer.</p>",
      "text": "What budget for new software will you propose for the next fiscal year?",
      "options": {
        "1": "$1,000",
        "2": "$3,000",
        "3": "$5,400"
      },
      "feedback": {
        "1": "<span class='v-wrong'/> <strong>Incorrect.</strong>",
        "2": "<span class='v-right'/> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong'/> <strong>Incorrect.</strong> "
      },
      "conclusion": "The correct answer is $3,000. The new software will cost $1,000 per officer for 3 officers (3 X $1,000=$3,000). Training would be covered in a separate line item."
    },
    "q3": {
      "title": "Office Supplies",
      "introduction": "<p><strong>Trends </strong>are costs in your budget that are either constant, or show a similar pattern year after year.&nbsp;</p> <table class='qTable finTable' border='1'> <tbody> <tr> <td> <p>Office Supplies</p> </td> <td> <p>Budget (A)</p> </td> <td> <p>Actual (B)</p> </td> <td> <p>Variance (C=B-A)</p> </td> <td> <p>Variance Explanation</p> </td> </tr> <tr> <td> <p>Previous year</p> </td> <td> <p>$1,961</p> </td> <td> <p>$1,500</p> </td> <td> <p style='color:red'>($461)</p> </td> <td> <p>Costs were lower than planned.</p> </td> </tr> <tr> <td>&nbsp;</td> <td> <p>Budget&nbsp;</p> </td> <td> <p>YTD Actual</p> </td> <td> <p>Annual Forecast</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Current year at P6</p> </td> <td> <p>$2,000</p> </td> <td> <p>$100</p> </td> <td> <p>$1,500</p> </td> <td>&nbsp;</td> </tr> </tbody> </table>",
      "text": "If you do not plan a significant change in your spending patterns for office supplies, what should you budget for?",
      "options": {
        "1": "$1,500",
        "2": "$2,000",
        "3": "$2,040"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> ",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      },
      "conclusion": "The correct answer is $1,500. This amount was spent last year and also forecasted for the current year; therefore, you would request a budget equal to your spending patterns."
    },
    "actInstructions": "Select any question mark and answer the question that appears",
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
    "budgetTableFill66": "Office Supplies",
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
      "title": "Salaires",
      "introduction": "<table class='qTable finTable' border='1'> <th> <p>Salaires</p> </th> <th> <p>Budget (A)</p> </th> <th> <p>Réel (B)</p> </th> <th> <p>Variance (C=B-A)</p> </th> <th> <p>Explication de variance&nbsp;</p> </th> </tr> <tr> <td> <p>Année précédente&nbsp;</p> </td> <td> <p>460&nbsp;000&nbsp;$</p> </td> <td> <p>450&nbsp;000&nbsp;$</p> </td> <td> <p><span style='color: #ff0000;'>(10&nbsp;000&nbsp;$)</span></p> </td> <td> <p>Un employé était en congé sans solde.</p> </td> </tr> <tr> <td>&nbsp;</td> <td> <p>Budget</p> </td> <td> <p>CDA Réel&nbsp;</p> </td> <td> <p>Prévisions annuelles</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Année en cours à P6</p> </td> <td> <p>475&nbsp;000&nbsp;$</p> </td> <td> <p>237&nbsp;500&nbsp;$</p> </td> <td> <p>475&nbsp;000&nbsp;$</p> </td> <td>&nbsp;</td> </tr> </tbody> </table> <br> <ul> <li>Le salaire annuel d&rsquo;un employé est de 60&nbsp;000&nbsp;$ par année. Vous savez qu&rsquo;il prendra sa retraite le 1er juillet de l&rsquo;année prochaine et qu&rsquo;il ne sera pas remplacé.&nbsp;</li> <li>Vous prévoyez embaucher un employé occasionnel pendant 4 mois pour un coût total de 13&nbsp;333&nbsp;$.</li> </ul>",
      "text": "Quel budget proposez-vous pour l&rsquo;exercice financier suivant?",
      "options": {
        "1": "$415&nbsp;000&nbsp;$ non discrétionnaires et 13&nbsp;333&nbsp;$ discrétionnaires",
        "2": "430&nbsp;000&nbsp;$ non discrétionnaires et 13&nbsp;333&nbsp;$ discrétionnaires",
        "3": "445&nbsp;000&nbsp;$ non discrétionnaires et 13&nbsp;333&nbsp;$ discrétionnaires",
        "4": "475&nbsp;000&nbsp;$ Non discrétionnaires "
      },
      "feedback": {
        "1": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est 430&nbsp;000&nbsp;$ non discrétionnaires et 13&nbsp;333&nbsp;$ discrétionnaires.</strong>.",
        "2": "<span class='v-right' /> <strong>Correct!</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est 430&nbsp;000&nbsp;$ non discrétionnaires et 13&nbsp;333&nbsp;$ discrétionnaires.",
        "4": "<span class='v-wrong' /> <strong>Incorrect.</strong>  La bonne réponse est 430&nbsp;000&nbsp;$ non discrétionnaires et 13&nbsp;333&nbsp;$ discrétionnaires.</strong>."
      },
      "conclusion": "<p> Votre point de départ est le budget de 475&nbsp;000&nbsp;$ de l&rsquo;année en cours. Pour l&rsquo;employé qui prend sa retraite et qui n&rsquo;est pas remplacé, vous devez soustraire 9 mois (de juillet à mars) du salaire annuel de 60&nbsp;000&nbsp;$ (475&nbsp;000&nbsp;$ à 45&nbsp;000&nbsp;$ = 430&nbsp;000&nbsp;$). Comme les employés occasionnels ne font pas partie de l&rsquo;organigramme,  les dépenses les concernant sont considérées comme discrétionnaires.</p><p><span>Il est important d&rsquo;analyser tout écart afin que les chiffres du budget proposé soient exacts. Pour connaître la raison d&rsquo;un écart, vous pouvez parler avec l&rsquo;ancien gestionnaire, votre administrateur ou votre directeur. Un rapport du ministère des Finances peut aussi fournir cette explication. </span></p>"
    },
    "q2": {
      "title": "License de logiciel",
      "introduction": "<p>Vous devrez estimer les coûts des nouvelles activités en fonction de vos besoins budgétaires. Si une activité a été terminée l&rsquo;année dernière, elle n&rsquo;apparaîtra pas dans le budget. Cherchez les activités annulées ou retardées, ou toute nouvelle activité qui pourrait ne pas être incluse dans votre niveau de référence, pour vous assurer que vos besoins budgétaires sont exacts.</p><p>Vous n&rsquo;aviez pas de logiciel dans le budget de l&rsquo;année dernière ou de l&rsquo;année en cours. En examinant votre plan de travail, vous savez que vous avez l&rsquo;intention d&rsquo;acheter un nouveau logiciel l&rsquo;an prochain pour la délivrance des permis de pêche. Vous faites des recherches et découvrez que la licence du logiciel coûte 1&nbsp;000&nbsp;$ par an par agent (3 agents l&rsquo;utiliseront). La formation en ligne coûtera 800 $ par agent.</p>",
      "text": "Quel budget proposez-vous pour le nouveau logiciel pour l&rsquo;exercice financier suivant?",
      "conclusion": " La bonne réponse est 3&nbsp;000&nbsp;$. Le nouveau logiciel coûtera 1&nbsp;000&nbsp;$ par agent pour 3 agents (3 X 1&nbsp;000&nbsp;$ = 3&nbsp;000&nbsp;$). La formation ferait l&rsquo;objet d&rsquo;un poste distinct. ",
      "options": {
        "1": "1000$",
        "2": "3000$",
        "3": "5400$"
      },
      "feedback": {
        "1": "<span class='v-wrong'/> <strong>Incorrect.</strong>",
        "2": "<span class='v-right'/> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong'/> <strong>Incorrect.</strong>"
      }
    },
    "q3": {
      "title": "Fournitures de bureau",
      "introduction": "<p>Les <strong>tendances</strong> sont des co&ucirc;ts (dans votre budget) qui sont soit constants, soit semblables d&rsquo;année en année.</p> <table border='1' class='qTable finTable' border='1'> <tbody> <tr> <th> <p>Fournitures de bureau</p> </th> <th> <p>Budget (A)</p> </th> <th> <p>Réel (B)</p> </th> <th> <p>Variance (C=B-A)</p> </th> <th> <p>Explicationde la variance</p> </th> </tr> <tr> <td> <p>Année précédente&nbsp;</p> </td> <td> <p>1&nbsp;961&nbsp;$</p> </td> <td> <p>1&nbsp;500&nbsp;$</p> </td> <td> <p style='color:red'>(461 $)</p> </td> <td> <p>Les coûts ont été inférieurs aux prévisions.</p> </td> </tr> <tr> <td>&nbsp;</td> <td> <p>Budget</p> </td> <td> <p>CDA Réel&nbsp;</p> </td> <td> <p>Prévisions annuelles</p> </td> <td>&nbsp;</td> </tr> <tr> <td> <p>Année en cours à P6</p> </td> <td> <p>2&nbsp;000&nbsp;$</p> </td> <td> <p>100 $</p> </td> <td> <p>1&nbsp;500&nbsp;$</p> </td> <td>&nbsp;</td> </tr> </tbody> </table>",
      "text": "Si vous ne prévoyez pas de changement important dans vos habitudes de dépenses pour le matériel et les fournitures, que devriez-vous prévoir dans votre budget?",
      "options": {
        "1": "1500$",
        "2": "2000$",
        "3": "2040$"
      },
      "feedback": {
        "1": "<span class='v-right' /> <strong>Correct!</strong> ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong>",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong>"
      },
      "conclusion": "La bonne réponse est 1&nbsp;500&nbsp;$. Ce montant a été dépensé l&rsquo;an dernier et a également été prévu pour l&rsquo;année en cours; par conséquent, vous demandez un budget égal à vos habitudes de dépenses. "
    },
    "actInstructions": "Sélectionnez n&rsquo;importe quel point d&rsquo;interrogation et répondez à la question qui apparaît.",
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
    "budgetTableFill18": "Salaires",
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
    "budgetTableFill31": "460&nbsp;000&nbsp;$",
    "budgetTableFill32": "475&nbsp;000&nbsp;$",
    "budgetTableFill33": "430&nbsp;000&nbsp;$",
    "budgetTableFill34": "13&nbsp;333&nbsp;$",
    "budgetTableFill35": "gestionnaire, 2 agents, 2 analystes, 1 agent jr., 1 analyste jr., 1 administrateur, 1 agent prenant sa retraite le 1er juillet, occasionnel 4 mois",
    "budgetTableFill36": "TOTAL",
    "budgetTableFill37": "460&nbsp;000&nbsp;$",
    "budgetTableFill38": "475&nbsp;000&nbsp;$",
    "budgetTableFill39": "430&nbsp;000&nbsp;$",
    "budgetTableFill40": "13&nbsp;333&nbsp;$",
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
    "budgetTableFill63": "3&nbsp;000&nbsp;$",
    "budgetTableFill64": " ",
    "budgetTableFill65": "nouveau logiciel, coût annuel 1&nbsp;000&nbsp;$ X 3 ETP",
    "budgetTableFill66": "Fournitures de bureau",
    "budgetTableFill67": "1&nbsp;961&nbsp;$",
    "budgetTableFill68": "2&nbsp;000&nbsp;$",
    "budgetTableFill69": "1&nbsp;500&nbsp;$",
    "budgetTableFill70": " ",
    "budgetTableFill71": "les dépenses historiques sont de 1&nbsp;500&nbsp;$.",
    "budgetTableFill72": "Formation",
    "budgetTableFill73": "2&nbsp;000&nbsp;$",
    "budgetTableFill74": "2&nbsp;000&nbsp;$",
    "budgetTableFill75": "2&nbsp;400&nbsp;$",
    "budgetTableFill76": "2&nbsp;000&nbsp;$",
    "budgetTableFill77": "3 ETP à 800$ chacun pour la formation, 4 ETP à 500$ chacun pour la formation générale",
    "budgetTableFill78": "Voyage",
    "budgetTableFill79": "18&nbsp;000&nbsp;$",
    "budgetTableFill80": "18&nbsp;000&nbsp;$",
    "budgetTableFill81": "10&nbsp;000&nbsp;$",
    "budgetTableFill82": "1&nbsp;600&nbsp;$",
    "budgetTableFill83": "10&nbsp;000&nbsp;$ pour effectuer des inspections, 1600$ pour les déplacements généraux",
    "budgetTableFill84": "Aide temporaire",
    "budgetTableFill85": "$10,000",
    "budgetTableFill86": "5&nbsp;000&nbsp;$",
    "budgetTableFill87": "4&nbsp;000&nbsp;$",
    "budgetTableFill88": "2&nbsp;000&nbsp;$",
    "budgetTableFill89": "pour aider à effectuer des inspections à distance",
    "budgetTableFill90": "TOTAL",
    "budgetTableFill91": "31&nbsp;961&nbsp;$",
    "budgetTableFill92": "27&nbsp;000&nbsp;$",
    "budgetTableFill93": "20&nbsp;900&nbsp;$",
    "budgetTableFill94": "5&nbsp;600&nbsp;$",
    "budgetTableFill95": "&nbsp;"
  }
}
</i18n>
