<template>
	<div id="app">
  <i18n-n :value="100"></i18n-n>
  <i18n-n :value="100" format="currency"></i18n-n>
  <i18n-n :value="100" format="currency" locale="ca-FR"></i18n-n>
</div>
    <table dir="ltr" border="1" cellspacing="0" cellpadding="0">
        <colgroup>
            <col width="157" />
            <col width="61" />
            <col width="94" />
            <col width="86" />
            <col width="71" />
            <col width="71" />
            <col width="63" />
        </colgroup>
        <tbody>
            <tr>
                <th>&nbsp;</th>
                <th>P6 Budget<br /><br />A</th>
                <th>P6 Commitments<br /><br />B</th>
                <th>P6 Year-To-Date Actuals<br />C</th>
                <th>P5 Annual Forecast<br /><br />D</th>
                <th>P6 Annual Forecast<br /><br />E</th>
                <th>Surplus / Deficit<br /><br />F=E-A</th>
            </tr>
            <tr>
                <td>Salary</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Salary</td>
                <td>$443,333</td>
                <td>$240,139</td>
                <td>$203,194</td>
                <td>$443,333</td>
                <td>&nbsp;</td>
                <td>$443,333</td>
            </tr>
            <tr>
                <td>TOTAL</td>
                <td>$443,333</td>
                <td>$240,139</td>
                <td>$203,194</td>
                <td>$443,333</td>
                <td>$0</td>
                <td>$443,333</td>
            </tr>
            <tr>
                <td>O&amp;M</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td>Software License</td>
                <td>$3,000</td>
                <td>$1,500</td>
                <td>$1,500</td>
                <td>$3,000</td>
                <td>&nbsp;</td>
                <td>$3,000</td>
            </tr>
            <tr>
                <td>Hospitality &amp; Conferences</td>
                <td>$15,000</td>
                <td>$2,500</td>
                <td>$8,000</td>
                <td>$15,000</td>
                <td>&nbsp;</td>
                <td>$15,000</td>
            </tr>
            <tr>
                <td>Furniture</td>
                <td>$1,000</td>
                <td>$0</td>
                <td>$900</td>
                <td>$900</td>
                <td>&nbsp;</td>
                <td>$1,000</td>
            </tr>
            <tr>
                <td>Training</td>
                <td>$4,400</td>
                <td>$0</td>
                <td>$2,400</td>
                <td>$4,400</td>
                <td>&nbsp;</td>
                <td>$4,400</td>
            </tr>
            <tr>
                <td>Office Supplies</td>
                <td>$6,000</td>
                <td>$4,553</td>
                <td>$1,100</td>
                <td>$6,000</td>
                <td>&nbsp;</td>
                <td>$6,000</td>
            </tr>
            <tr>
                <td>Translation Services</td>
                <td>$2,500</td>
                <td>$500</td>
                <td>$1,200</td>
                <td>$2,000</td>
                <td>&nbsp;</td>
                <td>$2,500</td>
            </tr>
            <tr>
                <td>Travel</td>
                <td>$8,000</td>
                <td>$4,000</td>
                <td>$1,700</td>
                <td>$7,800</td>
                <td>&nbsp;</td>
                <td>$8,000</td>
            </tr>
            <tr>
                <td>Temp Help</td>
                <td>$5,000</td>
                <td>$2,000</td>
                <td>$1,000</td>
                <td>$5,000</td>
                <td>&nbsp;</td>
                <td>$5,000</td>
            </tr>
            <tr>
                <td>TOTAL</td>
                <td>$44,900</td>
                <td>$15,053</td>
                <td>$17,800</td>
                <td>$44,100</td>
                <td>$0</td>
                <td>$44,900</td>
            </tr>
            <tr>
                <td>Notes on Risks</td>
                <td colspan="6" rowspan="1">&nbsp;</td>
            </tr>
        </tbody>
    </table>
</template>
<script type="text/javascript">
	export default{

	}
</script>