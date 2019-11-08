<template>
  <span>
    <p>Here’s a chance for you to confirm your knowledge of budgets and costs. Select the best choice to fill in the blanks. </p>
    <p><select v-model="Q1">
        <option disabled value=''>{{$t('qDisabled')}}</option>
        <option>Operating &amp; Maintenance (O&amp;M)</option>
        <option>Salary</option>
        <option>Grants and Contributions (Gs&amp;Cs)</option>
        <option>Capital</option>
      </select> includes Indeterminate, Term and Casual Positions, Overtime, Performance Pay and Leave Cashouts. [Salary]</p>
    <p><select  v-model="Q2">
        <option disabled value=''>{{$t('qDisabled')}}</option>
        <option>Operating &amp; Maintenance (O&amp;M)</option>
        <option>Salary</option>
        <option>Grants and Contributions (Gs&amp;Cs)</option>
        <option>Capital</option>
      </select> includes items such as Travel, Training, Translation, Office Supplies, etc. [Operating &amp; Maintenance (O&amp;M)]</p>
    <p>Temp Help is considered a contract and paid out of <select  v-model="Q3">
        <option disabled value=''>{{$t('qDisabled')}}</option>
        <option>Operating &amp; Maintenance (O&amp;M)</option>
        <option>Salary</option>
        <option>Grants and Contributions (Gs&amp;Cs)</option>
        <option>Capital</option>
      </select>. [O&amp;M]</p>
    Money given to non-governmental organizations for refugee settlement, like language classes, would come out of <p>the <select  v-model="Q4">
        <option disabled value=''>{{$t('qDisabled')}}</option>
        <option>Operating &amp; Maintenance (O&amp;M)</option>
        <option>Salary</option>
        <option>Grants and Contributions (Gs&amp;Cs)</option>
        <option>Capital</option>
      </select> budget. [Grants and Contributions (Gs&amp;Cs)]</p>
    <p>The Operating budget consists of both <select  v-model="Q5">
        <option disabled value=''>{{$t('qDisabled')}}</option>
        <option>Operating &amp; Maintenance (O&amp;M)</option>
        <option>Salary</option>
        <option>Grants and Contributions (Gs&amp;Cs)</option>
        <option>Capital</option>
      </select> and <select  v-model="Q6">
        <option disabled value=''>{{$t('qDisabled')}}</option>
        <option>Operating &amp; Maintenance (O&amp;M)</option>
        <option>Salary</option>
        <option>Grants and Contributions (Gs&amp;Cs)</option>
        <option>Capital</option>
      </select>. [O&amp;M / Salary in either order]</p>
    <p><select  v-model="Q7">
        <option disabled value=''>{{$t('qDisabled')}}</option>
        <option>Operating &amp; Maintenance (O&amp;M)</option>
        <option>Salary</option>
        <option>Grants and Contributions (Gs&amp;Cs)</option>
        <option>Capital</option>
      </select> is money that is provided to entities outside of the federal government to advance the department’s <p>mandate. [Grants and Contributions (Gs&amp;Cs)]</p>
      <p><select v-model="Q8">
          <option disabled value=''>{{$t('qDisabled')}}</option>
          <option>Operating &amp; Maintenance (O&amp;M)</option>
          <option>Salary</option>
          <option>Grants and Contributions (Gs&amp;Cs)</option>
          <option>Capital</option>
        </select> is for items that will depreciate over time, such as a new addition to an existing building, vehicles, etc. [Capital]</p>
      <p><select v-model="Q9">
          <option disabled value=''>{{$t('qDisabled')}}</option>
          <option>Non-Discretionary</option>
          <option>Discretionary</option>
        </select> costs are essential for delivering on your activities and if cut will result in you not being able to <p>deliver on them. [Non-Discretionary]</p>
        <p><select v-model="Q10">
            <option disabled value=''>{{$t('qDisabled')}}</option>
            <option>Non-Discretionary</option>
            <option>Discretionary</option>
          </select> costs are less likely to have a negative impact on delivering your activities. [Discretionary]</p>
  </span>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				Q1:'',
				Q2:'',
				Q3:'',
				Q4:'',
				Q5:'',
				Q6:'',
				Q7:'',
				Q8:'',
				Q9:'',
				Q10:''
			}
		}
	}
</script>
<i18n>
  {
  "en":{
  "qDisabled":"Please select one"
  },
  "fr":{
  "qDisabled":"Veuillez faire un choix"
  }
  }
</i18n>
