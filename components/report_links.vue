<template>
	<span>
		<div v-if="1i18n.locale=='fr'">
			<h2>Liens externes et descriptions</h2>
			<dl>
				<dt><a href="https://www.tbs-sct.gc.ca/pol/doc-fra.aspx?id=31300" target="_blank">Politique sur les r&eacute;sultats</a></dt>
		        <dd>Lien vers la Politique sur les r&eacute;sultats</dd>
		        
		        <dt><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-fra.html#start" target="_blank">InfoBase du GC</a></dt>
		        <dd>Lien vers l'InfoBase du GC</dd>
		        
			</dl>
		</div>
		<div v-if="1i18n.locale=='en'">
			<h2>External Links and Descriptions</h2>
			<dl>
				<dt><a href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=31300" target="_blank">Policy on Results</a></dt>
		        <dd>Link to the Policy on Results</dd>
		        
		        <dt><a href="https://www.tbs-sct.gc.ca/ems-sgd/edb-bdd/index-eng.html#start" target="_blank">GC InfoBase</a></dt>
		        <dd>Link to Departmental Results Report</dd>
		        
			</dl>	
		</div>
	</span>
</template>