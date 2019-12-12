<template>
	<div id="app">
  <i18n-n :value="200"></i18n-n>
  <i18n-n :value="300" format="currency"></i18n-n>
  <i18n-n :value="100" format="currency" locale="ja-JP"></i18n-n>
  <p>{{$n(200,'currency','ca-FR')}}</p>
  <p>{{ $n(100, 'currency') }}</p>
  <p>{{ $n(100, 'currency', 'ja-JP') }}</p>
</div>
</template>
<script type="text/javascript">
	const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  'ca-FR': {
    currency: {
      style: 'currency', currency: 'CAD', currencyDisplay: 'symbol'
    }
  }
}
</script>