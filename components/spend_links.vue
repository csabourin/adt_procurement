<template>
	<span>
		<div v-if="1i18n.locale=='fr'">
			<h2>Liens externes et descriptions</h2>
			<dl>
				<dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32504" target="_blank">Directive sur les paiements</a></dt>
		        <dd>Lien vers la Directive sur les paiements</dd>
		        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=32502" target="_blank">Directive sur l&rsquo;imputation et les autorisations financi&egrave;res sp&eacute;ciales</a></dt>
		        <dd>Lien vers la Directive sur l&rsquo;imputation et les autorisations financi&egrave;res sp&eacute;ciales</dd>
		        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=27228" target="_blank">Directive sur l&rsquo;engagement des d&eacute;penses et le contr&ocirc;le des engagements</a></dt>
		        <dd>Lien vers la directive sur l&rsquo;engagement des d&eacute;penses et le contr&ocirc;le des engagements</dd>
		        <dt><a href="https://ouvert.canada.ca/fr/divulgation-proactive" target="_blank">&Eacute;tablissement de rapports &agrave; l&rsquo;&eacute;chelle du gouvernement&nbsp;&ndash; Divulgation proactive</a></dt>
		        <dd>Lien vers la &eacute;tablissement de rapports &agrave; l&rsquo;&eacute;chelle du gouvernement&nbsp;&ndash; divulgation proactive</dd>
			</dl>
		</div>
		<div v-if="1i18n.locale=='en'">
			<h2>External Links and Descriptions</h2>
			<dl>
				<dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32504" target="_blank">The Directive on Payments</a></dt>
		        <dd>Link to The Directive on Payments</dd>
		        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32502" target="_blank">The Directive on Charging and Special Financial Authorities</a></dt>
		        <dd>Link to The Directive on Charging and Special Financial Authorities</dd>
		        <dt><a href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27228" target="_blank">The Directive on Travel, Hospitality, Conference and Event Expenditures</a></dt>
		        <dd>Link to The Directive on Travel, Hospitality, Conference and Event Expenditures</dd>
		        <dt><a href="https://www.canada.ca/en/treasury-board-secretariat/services/reporting-government-spending/proactive-disclosure-department-agency.html" target="_blank">Government-wide Reporting&nbsp;&ndash; Proactive Disclosure</a></dt>
		        <dd>Link to the Government-wide Reporting&nbsp;&ndash; Proactive Disclosure</dd>
			</dl>	
		</div>
	</span>
</template>