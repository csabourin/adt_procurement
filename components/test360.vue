<template>
  <div>
    <h3>{{$t('Test360')}}</h3>
    <b-container>
      <b-row>
        <b-col><a href="ADT_Ressources_360.pdf" download>
            <genericFile :title="$t('Test360')" /></a><br>{{$t('Test360')}}</b-col>
        <b-col>
          <p><genericFile :title="$t('wpExample')" /><br>{{$t('wpExample')}}</p>
        </b-col>
        <b-col>
          <p>{{$t('bExample')}}</p>
        </b-col>
        <b-col>
          <p>{{$t('rExample')}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<i18n>
  {
  "en":{
  "Test360":"360 Scan",
  "wpExample":"Work Plan",
  "bExample":"Last years's Budget",
  "rExample":"Last years's Reports"
  },
  "fr":{
  "Test360":"Aperçu 360",
  "wpExample":"Plan de travail",
  "bExample":"Budget de l'année passée",
  "rExample":"Plan de travail de l'année passée"
  }
  }
</i18n>
<script type="text/javascript">
	import Scan360 from "~/components/icons/360scan"
  import genericFile from "~/components/icons/genFileIcon"
	export default {
		data(){
			return Scan360
		},
		components:{
			Scan360,
      genericFile
		}
	}
</script>