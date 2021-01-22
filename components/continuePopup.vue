<template>
  <b-modal no-stacking :id="id" okOnly>
    <template v-slot:modal-header="{ close }">
        <h3 class="h5">
            <img src="~/assets/InfoIcon.svg" :alt="$t('infoIcon')" width="32" height="32">
            {{ $t('title') }}
        </h3>
        <button type="button" aria-label="Close" class="close" @click="close()">×</button>
    </template>
    <b-row align-h="center">
      <b-col cols="12" md="9">
        <img src="~/assets/continuePopup.svg" alt="" class="img-fluid" style="margin-bottom: 15px; margin-top: 10px;">
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="text-center" v-html="$t('content')"></p>
      </b-col>
    </b-row>
    <template v-slot:modal-ok>{{$t('close')}}</template>
</b-modal>
</template>

<script>
export default {
  name: 'continue-popup',
  props: {
    id: {
      type: String,
      default: "continue",
    }
  },
  data() {
    return {
      
    }
  },
  watch: {
    
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>

<i18n>
  {
    "en":{
      "title": "Continue to next segment",
      "content": "You completed this section, continue to the next one!"
    },
    "fr":{
      "title": "Continuer au segment suivant.",
      "content": "Vous avez complété cette section, continuez à la prochaine!"
    }
  }
</i18n>