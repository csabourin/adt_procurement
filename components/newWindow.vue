<template>
  <div v-if="open">
    <slot />
  </div>
</template>

<script>
  

function copyStyles(sourceDoc, targetDoc) {
  var styles = Array.from(sourceDoc.styleSheets);
  for(var i = 0; i < styles.length; i++){
    if (styles[i].href) {
      // for <link> elements loading CSS from a URL
      const newLinkEl = sourceDoc.createElement("link");

      newLinkEl.rel = "stylesheet";
      newLinkEl.href = styles[i].href;
      targetDoc.head.appendChild(newLinkEl);
    }
    else if (styles[i].cssRules) {
      // for <style> elements
      const newStyleEl = sourceDoc.createElement("style");

      var rules = Array.from(styles[i].cssRules);
      for(var j = 0; j < rules.length; j++){
        // write the text of each rule into the body of the style element
        newStyleEl.appendChild(sourceDoc.createTextNode(rules[j].cssText));
      }

      targetDoc.head.appendChild(newStyleEl);
    }
  }
}
  
function changePaths(that){
  var imgs = that.windowRef.document.querySelectorAll("img");
  var src;
  for (var i = 0; i < imgs.length; i++){
    src = imgs[i].getAttribute("src");
    src = src.split("/_nuxt/static/").join(window.location.origin + that.$router.options.base); 
    imgs[i].setAttribute("src", src)
  }
  
  var styles = that.windowRef.document.querySelectorAll("style");
  var style;
  for (var i = 0; i < styles.length; i++){
    style = styles[i].innerHTML;    
    style = style.split("/_nuxt/static/").join(window.location.origin + that.$router.options.base); 
    styles[i].innerHTML = style;
  }
}

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
      this.windowRef = window.open("", "", "width=1000,height=700,left=200,top=200");
      this.windowRef.document.body.appendChild(this.$el);
      
      copyStyles(window.document, this.windowRef.document);
      
      var that = this
      this.windowRef.onload = function(){ changePaths(that); }
      
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