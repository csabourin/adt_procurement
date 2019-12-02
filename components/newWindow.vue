<template>
  <div v-if="open">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'window-portal',
  model: {
    prop: 'open',
    event: 'close'
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      windowRef: null,
    }
  },
  watch: {
    open(newOpen) {
      if(newOpen) {
        this.openPortal();
      } else {
        this.closePortal();
      }
    }
  },
  methods: {
    openPortal() {
      this.windowRef = window.open("", "", "width=1080,height=800,left=200,top=200");
      this.windowRef.document.body.appendChild(this.$el);
      this.windowRef.addEventListener('beforeunload', this.closePortal);
    },
    closePortal() {
      if(this.windowRef) {
        this.windowRef.close();
        this.windowRef = null;
        this.$emit('close');
      }
    }
  },
  mounted() {
    if(this.open) {
      this.openPortal();
    }
  },
  beforeDestroy() {
    if (this.windowRef) {
      this.closePortal();
    }
  }
}
</script>
