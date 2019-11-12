<template>
  <span>
    <p><strong>Activity</strong></p>
    <p><span>Click on any question marks and answer the question that appears.&nbsp;</span></p>
    <p><span>Salary</span></p><br>
    <table dir="ltr" border="1" cellspacing="0" cellpadding="5">
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
          <td>Line Item</td>
          <td>Previous Budget</td>
          <td>Current Budget</td>
          <td colspan="2" rowspan="1">Proposed Budget</td>
          <td>Notes for Proposed Budget</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>Non-Discretionary</td>
          <td>Discretionary</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>$460,000</td>
          <td>$475,000</td>
          <td v-b-modal.question1>
            <strong v-if="q1Answer">$430,000</strong><span class="questionMark" v-else></span>
          </td>
          <td v-b-modal.question1><strong v-if="q1Answer">$13,333</strong><span v-else></span>
          </td>
          <td>manager, 2 officers, 2 analysts, 1 jr. officer, 1 jr. analyst, admin, 1 officer retiring July 1, casual 4 months</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td>$460,000</td>
          <td>$475,000</td>
          <td><span v-if="q1Answer">$430,000</span></td>
          <td><span v-if="q1Answer">$13,333</span></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>O&amp;M</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Software License</td>
          <td>$0</td>
          <td>$0</td>
          <td>$3,000</td>
          <td> </td>
          <td>new software, annual cost $1,000 X 3 FTEs</td>
        </tr>
        <tr>
          <td>Material and Supplies</td>
          <td>$1,961</td>
          <td>$2,000</td>
          <td>$1,500</td>
          <td> </td>
          <td>historical spend is $1,500</td>
        </tr>
        <tr>
          <td>Training</td>
          <td>$2,000</td>
          <td>$2,000</td>
          <td>$2,400</td>
          <td>$2,000</td>
          <td>3 FTEs at $800 each for training, 4 FTEs at $500 each for general training</td>
        </tr>
        <tr>
          <td>Travel</td>
          <td>$18,000</td>
          <td>$18,000</td>
          <td>$10,000</td>
          <td>$1,600</td>
          <td>$10K to conduct inspections, $1.6K for general travel</td>
        </tr>
        <tr>
          <td>Temp Help</td>
          <td>$10,000</td>
          <td>$5,000</td>
          <td>$4,000</td>
          <td>$2,000</td>
          <td>to help conduct remote inspections</td>
        </tr>
        <tr>
          <td>TOTAL</td>
          <td>$31,961</td>
          <td>$27,000</td>
          <td>$20,900</td>
          <td>$5,600</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
    <b-modal id="question1" okOnly>
      <ul>
        <li><span>An employee&rsquo;s annual salary is $60,000 per year. You know that they will retire on July 1 of next year and won&rsquo;t be replaced, and&nbsp;</span></li>
        <li><span>You plan on getting a casual employee for 4 months for a total of $13,333.</span></li>
      </ul>
      <p><span>What budget will you propose for the next fiscal year?&nbsp;</span></p>
      <select v-model="q1Answer">
        <option disabled value="">Please select an answer</option>
        <option value=3>$415,000 Non-Discretionary and $13,333 Discretionary&nbsp;</option>
        <option value=2>$430,000 Non-Discretionary and $13,333 Discretionary</option>
        <option value=1>$445,000 Non-Discretionary and $13,333 Discretionary</option>
        <option value=0>$475,000 Non-Discretionary&nbsp;</option>
      </select><br>
      <span v-if="q1Answer"><p>
          <transition name="fade" mode="out-in"><span v-if="q1Answer==2" class="v-right" ><strong>Correct Answer!</strong></span><span v-else class="v-wrong"><strong>Wrong Answer!</strong></span></transition>
          The correct answer is <strong>$430,000 Non-Discretionary</strong> and <strong>$13,333 Discretionary</strong>.</p><p> Your starting point is the current year&rsquo;s budget of $475,000. For the employee that is retiring and not being replaced, you need to subtract nine months (July to March) of the $60,000 in annual salary ($475,000-$45,000=$430,000). Since casual employees are not part of the org chart, they are considered discretionary.&nbsp;</p> <br>
            <p><span>It is important to analyze any variances so the figures in your proposed budget are accurate. To discover the reason for a variance, you could speak with the previous manager, your admin, or your director. A report from Finance may provide the variance explanation.&nbsp;</span></p>
</span>
    </b-modal>
    <b-modal id="question2" okOnly>
      <br>
      <p><span>Software License&nbsp;</span></p>
      <p><span>You will have to estimate costs for new activities for your budget requirements. If an activity was completed last year, it won&rsquo;t appear. Look for cancelled or delayed activities as well, to be sure your budget requirements are complete.</span></p><br>
      <p><span>You did not have software in last year&rsquo;s or the current year&rsquo;s budget. Looking at your work plan, you know that your plan is to purchase new software next year for issuing fishing licenses. You do some research and find out that the software license costs $1,000 annually per officer (you will have 3 officers using it). Online training will cost $800.00 per officer. What budget for new software will you propose for the next fiscal year?&nbsp;</span></p><br>
      <ol>
        <li><span>$1,000</span></li>
        <li><span>$3,000</span></li>
        <li><span>$5,400</span></li>
      </ol><br>
      <p><span>Feedback: The correct answer is b. $3,000. The new software will cost $1,000 per officer for 3 officers (3 X $1,000=$3,000). Training would be covered in a separate line item.&nbsp;</span></p>
    </b-modal>
    <br>
    <p><span>Material and Supplies&nbsp;</span></p>
    <p><strong>Trends</strong> <span>are costs in your budget that are either constant, or show a similar pattern year after year.&nbsp;</span></p><br>
    <table border=1>
      <tbody>
        <tr>
          <td>
            <p><span>Material and Supplies</span></p>
          </td>
          <td>
            <p><span>Budget (A)</span></p>
          </td>
          <td>
            <p><span>Actual (B)</span></p>
          </td>
          <td>
            <p><span>Variance (C=B-A)</span></p>
          </td>
          <td>
            <p><span>Variance Explanation</span></p>
          </td>
        </tr>
        <tr>
          <td>
            <p><span>Previous year&nbsp;</span></p>
          </td>
          <td>
            <p><span>$1,961</span></p>
          </td>
          <td>
            <p><span>$1,500</span></p>
          </td>
          <td>
            <p><span>($461)</span></p>
          </td>
          <td>
            <p><span>Prices were lower than planned.</span></p>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <p><span>Budget&nbsp;</span></p>
          </td>
          <td>
            <p><span>YTD Actual</span></p>
          </td>
          <td>
            <p><span>Annual Forecast</span></p>
          </td>
          <td v-b-modal.question2>?</td>
        </tr>
        <tr>
          <td>
            <p><span>Current year at P6</span></p>
          </td>
          <td>
            <p><span>$2,000</span></p>
          </td>
          <td>
            <p><span>$100</span></p>
          </td>
          <td>
            <p><span>$1,500</span></p>
          </td>
          <td v-b-modal.question2>?</td>
        </tr>
      </tbody>
    </table><br>
    <p><span>If you do not plan a significant change in your spending patterns for Material and Supplies, what should you budget for?&nbsp;</span></p>
    <ol>
      <li><span>$1,500</span></li>
      <li><span>$2,000&nbsp;</span></li>
      <li><span>$2,040&nbsp;</span></li>
    </ol><br>
    <p><span>Feedback: The correct answer is a. $1,500. This amount was spent last year, and also forecasted for the current year; therefore, you would request a budget equal to your spending patterns.&nbsp;</span></p>
  </span>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      q1Answer: "",
      q2Answer: "",
      q1aAnswer: "?",
      q1bAnswer: "?"
    }
  }
}

</script>
<style type="text/css">
td{position: relative;}
	.questionMark:after{
		display: block;
		font-family: Roboto Medium;
		font-size: 48px;
		position: absolute;
		background-color: #d0d2ec;
		border: 2px solid #eee;
		border-radius: 50px;
		text-align: center;
		content:"?";
		width:75px;
		height:75px;
		left:70%;
		top:0;
		z-index: 9999;
		cursor: pointer;

	}
</style>
