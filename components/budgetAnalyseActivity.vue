<template>
	<span>
	<p><strong>Activity</strong></p>
	<p><span>Click on any question marks and answer the question that appears.&nbsp;</span></p>
	<p><span>Salary</span></p><br>
	<table border=1>
		<tbody>
			<tr>
				<td>
					<p><span>Salary</span></p>
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
					<p><span>$460,000</span></p>
				</td>
				<td>
					<p><span>$450,000</span></p>
				</td>
				<td>
					<p><span v-b-modal.question1>($10,000)</span></p>
				</td>
				<td>
					<p><span>An employee was on leave without pay.</span></p>
				</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
				<td>
					<p><span>Budget</span></p>
				</td>
				<td>
					<p><span>YTD Actual</span></p>
				</td>
				<td>
					<p><span>Annual Forecast</span></p>
				</td>
				<td v-b-modal.question1>{{ q1aAnswer }}</td>
			</tr>
			<tr>
				<td>
					<p><span>Current year at P6</span></p>
				</td>
				<td>
					<p><span>$475,000</span></p>
				</td>
				<td>
					<p><span>$237,500</span></p>
				</td>
				<td>
					<p><span>$475,000</span></p>
				</td>
				<td v-b-modal.question1>{{ q1bAnswer }}</td>
			</tr>
		</tbody>
	</table>

	<b-modal id="question1" okOnly>
	<ul>
		<li><span>An employee&rsquo;s annual salary is $60,000 per year. You know that they will retire on July 1 of next year and won&rsquo;t be replaced, and&nbsp;</span></li>
		<li><span>You plan on getting a casual employee for 4 months for a total of $13,333.</span></li>
	</ul>
	<p><span>What budget will you propose for the next fiscal year?&nbsp;</span></p>
	<select>
		<option>$415,000 Non-Discretionary and $13,333 Discretionary&nbsp;</option>
		<option>$430,000 Non-Discretionary and $13,333 Discretionary</option>
		<option>$445,000 Non-Discretionary and $13,333 Discretionary</option>
		<option>$475,000 Non-Discretionary&nbsp;</option>
	</select><br>
	<p><span>Feedback: The correct answer is b. $430,000 Non-Discretionary and $13,333 Discretionary. Your starting point is the current year&rsquo;s budget of $475,000. For the employee that is retiring and not being replaced, you need to subtract nine months (July to March) of the $60,000 in annual salary ($475,000-$45,000=$430,000). Since casual employees are not part of the org chart, they are considered discretionary.&nbsp;</span></p><br>
	<p><span>It is important to analyze any variances so the figures in your proposed budget are accurate. To discover the reason for a variance, you could speak with the previous manager, your admin, or your director. A report from Finance may provide the variance explanation.&nbsp;</span></p>
</b-modal>
<b-modal  id="question2" okOnly>
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
	export default{
		data(){
			return{
				q1aAnswer:"?",
				q1bAnswer:"?"
			}
		}
	}
</script>