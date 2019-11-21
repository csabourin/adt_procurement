<template>
  <span>
    <p><span>Click on any question marks and answer the question that appears</span></p>
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
          <td v-b-modal.question1>
            <strong v-if="q1Answer" v-html="$t('budgetTableFill33')"></strong><a v-else href="javascript:" class="questionMark" >?</a>
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
          <td v-b-modal.question2 ><strong v-if="q2Answer" v-html="$t('budgetTableFill63')">$3,000</strong><a v-else href="javascript:" class="questionMark">?</a></td>
          <td v-b-modal.question2 v-html="$t('budgetTableFill64')"></td>
          <td v-html="$t('budgetTableFill65')"></td>
        </tr>
        <tr>
          <td v-html="$t('budgetTableFill66')"></td>
          <td v-html="$t('budgetTableFill67')"></td>
          <td v-html="$t('budgetTableFill68')"></td>
          <td v-b-modal.question3><strong v-if="q3Answer" v-html="$t('budgetTableFill69')"/><a v-else href="javascript:" class="questionMark" >?</a></td>
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
          <td v-html="$t('budgetTableFill90')"></td>
          <td v-html="$t('budgetTableFill91')"></td>
          <td v-html="$t('budgetTableFill92')"></td>
          <td v-html="$t('budgetTableFill93')"></td>
          <td v-html="$t('budgetTableFill94')"></td>
          <td v-html="$t('budgetTableFill95')"></td>
        </tr>
      </tbody>
    </table>
    <b-modal id="question1" okOnly size="lg" title="Salary">
     <radioQuiz :Question="$t('q1')" @response="q1Answer=$event" qId="1" />
    </b-modal>
    <b-modal id="question2" title="Software License" size="lg" okOnly>
     <radioQuiz :Question="$t('q2')" qId="2" @response="q2Answer=$event" />
          </b-modal>
    <b-modal id="question3" okOnly size="lg" title="Material and Supplies">
    <p><strong>Trends</strong> <span>are costs in your budget that are either constant, or show a similar pattern year after year.&nbsp;</span></p>
    <table border=1>
      <tbody>
        <tr>
          <td>
            <p><span v-html="$t('refTab11')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab12')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab13')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab14')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab15')"></span></p>
          </td>
        </tr>
        <tr>
          <td>
            <p><span v-html="$t('refTab16')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab17')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab18')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab19')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab110')"></span></p>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <p><span v-html="$t('refTab111')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab112')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab113')"></span></p>
          </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <p><span v-html="$t('refTab114')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab115')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab116')"></span></p>
          </td>
          <td>
            <p><span v-html="$t('refTab117')"></span></p>
          </td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <br>
    <radioQuiz :Question="$t('q3')" qId="3" @response="q3Answer=$event" />
  </b-modal>
  </span>
</template>
<script type="text/javascript">
  import radioQuiz from "~/components/radioQuiz"
export default {
  components:{
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
<style type="text/css">
.AnalyzeBudgetTable td {
  position: relative;
}

.questionMark {
  display: block;
  font-family: Roboto Medium;
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
  left: 70%;
  top: -.5em;
  z-index: 9999;
  cursor: pointer;
}

</style>
<i18n>{
  "en": {
    "refTab11": "Material and Supplies",
    "refTab12": "Budget (A)",
    "refTab13": "Actual (B)",
    "refTab14": "Variance (C=B-A)",
    "refTab15": "Variance Explanation",
    "refTab16": "Previous year&nbsp;",
    "refTab17": "$1,961",
    "refTab18": "$1,500",
    "refTab19": "($461)",
    "refTab110": "Prices were lower than planned.",
    "refTab111": "Budget&nbsp;",
    "refTab112": "YTD Actual",
    "refTab113": "Annual Forecast",
    "refTab114": "Current year at P6",
    "refTab115": "$2,000",
    "refTab116": "$100",
    "refTab117": "$1,500",
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
    "budgetTableFill95": "&nbsp;",
    "q1":{
"text":"<ul><li><span>An employee&rsquo;s annual salary is $60,000 per year. You know that they will retire on July 1 of next year and won&rsquo;t be replaced, and&nbsp;</span></li><li><span>You plan on getting a casual employee for 4 months for a total of $13,333.</span></li> </ul> <p><span>What budget will you propose for the next fiscal year?&nbsp;</span></p>","options":{
  "1":"$415,000 Non-Discretionary and $13,333 Discretionary",
  "2":"$430,000 Non-Discretionary and $13,333 Discretionary",
  "3":"$445,000 Non-Discretionary and $13,333 Discretionary",
  "4":"$475,000 Non-Discretionary&nbsp;"
},
  "feedback":{
    "1":"<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>.",
    "2":"<span class='v-right' /> <strong>Correct!</strong>",
    "3":"<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>.",
    "4":"<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>."
  },
  "conclusion":"<p> Your starting point is the current year&rsquo;s budget of $475,000. For the employee that is retiring and not being replaced, you need to subtract nine months (July to March) of the $60,000 in annual salary ($475,000-$45,000=$430,000). Since casual employees are not part of the org chart, they are considered discretionary.&nbsp;</p><p><span>It is important to analyze any variances so the figures in your proposed budget are accurate. To discover the reason for a variance, you could speak with the previous manager, your admin, or your director. A report from Finance may provide the variance explanation.&nbsp;</span></p>"
},
"q2":
{
    "text": "<p>You will have to estimate costs for new activities for your budget requirements. If an activity was completed last year, it won&rsquo;t appear. Look for cancelled or delayed activities as well, to be sure your budget requirements are complete.</p><p>You did not have software in last year&rsquo;s or the current year&rsquo;s budget. Looking at your work plan, you know that your plan is to purchase new software next year for issuing fishing licenses. You do some research and find out that the software license costs $1,000 annually per officer (you will have 3 officers using it). Online training will cost $800.00 per officer.<strong> What budget for new software will you propose for the next fiscal year?&nbsp;</p>",
    "options":
    {
        "1": "$1,000",
        "2": "$3,000",
        "3": "$5,400"
    },
    "feedback":
    {
        "1": "<span class='v-wrong'/> <strong>Incorrect.</strong> The correct answer is $3,000. The new software will cost $1,000 per officer for 3 officers (3 X $1,000=$3,000). Training would be covered in a separate line item.",
        "2": "<span class='v-right'/> <strong>Correct!</strong> ",
        "3": "<span class='v-wrong'/> <strong>Incorrect.</strong> The correct answer is $3,000. The new software will cost $1,000 per officer for 3 officers (3 X $1,000=$3,000). Training would be covered in a separate line item."
    }
},
"q3":
{
    "text": "If you do not plan a significant change in your spending patterns for Material and Supplies, what should you budget for?",
    "options":
    {
        "1": "$1,500",
        "2": "$2,000",
        "3": "$2,040"
    },
    "feedback":
    {
      "1":"<span class='v-right' /> <strong>Correct!</strong> ",
        "2": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is a. $1,500. This amount was spent last year, and also forecasted for the current year; therefore, you would request a budget equal to your spending patterns.",
        "3": "<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is a. $1,500. This amount was spent last year, and also forecasted for the current year; therefore, you would request a budget equal to your spending patterns."
    }
}
  },
  "fr": {
    "refTab11": "Material and Supplies",
    "refTab12": "Budget (A)",
    "refTab13": "Actual (B)",
    "refTab14": "Variance (C=B-A)",
    "refTab15": "Variance Explanation",
    "refTab16": "Previous year&nbsp;",
    "refTab17": "$1,961",
    "refTab18": "$1,500",
    "refTab19": "($461)",
    "refTab110": "Prices were lower than planned.",
    "refTab111": "Budget",
    "refTab112": "YTD Actual",
    "refTab113": "Annual Forecast",
    "refTab114": "Current year at P6",
    "refTab115": "$2,000",
    "refTab116": "$100",
    "refTab117": "$1,500",
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
    "budgetTableFill95": "&nbsp;",
     "q1":{
"text":"<ul><li><span>An employee&rsquo;s annual salary is $60,000 per year. You know that they will retire on July 1 of next year and won&rsquo;t be replaced, and&nbsp;</span></li><li><span>You plan on getting a casual employee for 4 months for a total of $13,333.</span></li> </ul> <p><span>What budget will you propose for the next fiscal year?&nbsp;</span></p>","options":{
  "1":"$415,000 Non-Discretionary and $13,333 Discretionary",
  "2":"$430,000 Non-Discretionary and $13,333 Discretionary",
  "3":"$445,000 Non-Discretionary and $13,333 Discretionary",
  "4":"$475,000 Non-Discretionary&nbsp;"
},
  "feedback":{
    "1":"<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>.",
    "2":"<span class='v-right' /> <strong>Correct!</strong>",
    "3":"<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>.",
    "4":"<span class='v-wrong' /> <strong>Incorrect.</strong> The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>."
  },
  "conclusion":"<p> Your starting point is the current year&rsquo;s budget of $475,000. For the employee that is retiring and not being replaced, you need to subtract nine months (July to March) of the $60,000 in annual salary ($475,000-$45,000=$430,000). Since casual employees are not part of the org chart, they are considered discretionary.&nbsp;</p><p><span>It is important to analyze any variances so the figures in your proposed budget are accurate. To discover the reason for a variance, you could speak with the previous manager, your admin, or your director. A report from Finance may provide the variance explanation.&nbsp;</span></p>"
}
}
}</i18n>
