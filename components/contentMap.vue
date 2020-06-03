<template>
  <nav :class="currentState ? 'contentMap' : ['contentMap', 'closed']" role="navigation" :aria-label="currentState ? $t('navMenuExpanded') : $t('navMenuCollapsed')">
    <transition appear mode="out-in" name="fade">
      <div>
        <div v-show="currentState">
          <span ref="item"><h4 class="colorBar1">{{$t('plan')}}</h4></span>    
          <menu style="list-style: none">
            <li role="menuitem">
              <nuxt-link :to="localePath('planKey')" v-html="$t('KeyMessagesPlan')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('buildWP')" v-html="$t('BuildWorkPlan')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('createBudget')" v-html="$t('CreateBudget')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('exam1')" v-html="$t('TestPlan')" />
            </li>
          </menu>
          <h4 class="colorBar2">{{$t('spend')}}</h4>
          <menu style="list-style: none">
            <li role="menuitem">
              <nuxt-link :to="localePath('spendKey')" v-html="$t('KeyMessagesSpend')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('spendPart1')" v-html="$t('InitiateAuthorizeSpending')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('spendPart2')" v-html="$t('ExerciseFinancialAuthority')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('spendPart3')" v-html="$t('MonitorControlFinances')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('exam2')" v-html="$t('TestSpend')" />
            </li>
          </menu>
          <h4 class="colorBar3">{{$t('report')}}</h4>
          <menu style="list-style: none">
            <li role="menuitem">
              <nuxt-link :to="localePath('reportKey')" v-html="$t('KeyMessagesReport')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('reportPart1')" v-html="$t('ConductPeriodicVarianceReporting')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('reportPart2')" v-html="$t('ContributeReporting')" />
            </li>
            <li role="menuitem">
              <nuxt-link :to="localePath('exam3')" v-html="$t('TestReport')" />
            </li>
          </menu>
        </div>
        <div v-show="!currentState" class="clickMe" @click="setParentOpen">
          <div class="color1">
            <h4>{{$t('plan')}}</h4>
          </div>
          <div class="color2">
            <h4>{{$t('spend')}}</h4>
          </div>
          <div class="color3">
            <h4>{{$t('report')}}</h4>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>
<script type="text/javascript">
  export default{
    props:{
      currentState: { type: Boolean, default: false }
    },
    data(){
      return{
        currentModule: ""
      }
    },
    methods:{
      setParentOpen(){
        this.$emit('menu-toggle')
      },
      setAriaCurrent() {
        this.$nextTick(function() {
          let app = this.$el,
            currents = app.querySelectorAll("[aria-current]");
          if (currents) {
            currents.forEach(current => {
              current.removeAttribute("aria-current");
            });
          }
          app.querySelectorAll(".contentMap .nuxt-link-exact-active").forEach(current => {
            current.setAttribute("aria-current", "page");
          });
        });
      },
      setClosedMenuHeight(){
        if(this.currentState == false){
          this.$nextTick(function() {
            var that = this;
            this.$el.querySelectorAll(".color1, .color2, .color3").forEach(el => {
              el.style.height = ((window.innerHeight - document.querySelector(".navBar").offsetHeight) / 3) + "px";
            });
            this.$el.querySelectorAll(".color1 h4, .color2 h4, .color3 h4").forEach(el => {
              el.style.width = ((window.innerHeight - document.querySelector(".navBar").offsetHeight) / 3) + "px";
            });
          });
        }
      },
      setClosedMenuHighlight(newModule){
        if(this.currentState == false){
          this.$nextTick(function() {
            
            var that = this;
            
            document.querySelectorAll(".color1, .color2, .color3").forEach(el => {
              el.className = el.className.replace(/\bhighlighted\b/g, "");
            });
            
            switch(newModule){
              case "plan":
                that.$el.querySelector(".color1").classList.add("highlighted");
                break;
              case "spend":
                that.$el.querySelector(".color2").classList.add("highlighted");
                break;
              case "report":
                that.$el.querySelector(".color3").classList.add("highlighted");
                break;
            }
          });
        }
      },
      findModule(page){
        var module = "";
        this.$el.querySelectorAll("menu")[0].querySelectorAll("a").forEach(el => {
          if(page.path == el.getAttribute("href")){
            module = "plan";
          }
        }); 
        this.$el.querySelectorAll("menu")[1].querySelectorAll("a").forEach(el => {
          if(page.path == el.getAttribute("href")){
            module = "spend";
          }
        }); 
        this.$el.querySelectorAll("menu")[2].querySelectorAll("a").forEach(el => {
          if(page.path == el.getAttribute("href")){
            module = "report";
          }
        });  
        
        return module;
      }
    },
    mounted(){
      this.setAriaCurrent();
      
      this.setClosedMenuHeight();
      this.setClosedMenuHighlight();
      window.onresize = this.setClosedMenuHeight;
      
      this.setClosedMenuHighlight(this.findModule(this.$route));
    },
    watch: {
      currentState: function(newVal){
        if(newVal == false){
          this.setClosedMenuHeight();
          this.setClosedMenuHighlight(this.currentModule);
        }
      },
      $route: function(to) {
        this.currentModule = this.findModule(to);
      }, 
      currentModule: function(newModule) {
        this.$nextTick(function() {
          this.setClosedMenuHighlight(newModule);
        });
      },
    }
  }
</script>

<i18n>
  {
    "en":{
    "navMenuCollapsed":"Navigation Menu (collapsed)",
    "navMenuExpanded":"Navigation Menu (expanded)"
  },
    "fr":{
    "navMenuCollapsed":"Menu de navigation (réduit)",
    "navMenuExpanded":"Menu de navigation (développé)"
  }
  }
</i18n>

<style type="text/css" scoped>
.clickMe{
  cursor: pointer;
}
.contentMap {
  background-color: #fff;
  box-shadow: 4px 9px 8px #888;
  padding: 0;

  height:100%;
  color:#4d4d4d;
  
  overflow: hidden;
  white-space: nowrap;
}

.contentMap a {
  color: #000;
  width:100%;
  display: inline-block;
  padding:4px 16px;
  border-left-width-width:0px;
  border-left-style: solid;
  border-left-color:transparent;
}
.contentMap a.nuxt-link-exact-active {
  background-color:#f0f0f0;
  border-left-width:4px;
  padding:4px 16px 4px 15px;
}
.contentMap menu:nth-of-type(1) a.nuxt-link-exact-active {border-left-color:#587C84;}
.contentMap menu:nth-of-type(2) a.nuxt-link-exact-active {border-left-color:#7D677D;}
.contentMap menu:nth-of-type(3) a.nuxt-link-exact-active {border-left-color:#865F56;}

.contentMap menu {
    padding:0;
}
.contentMap h4{
  text-align:center;
  padding:10px 0 10px;
  text-transform: uppercase;
  font-weight: 700;
}
.colorBar1{border-bottom:4px solid #b4c6ca;}
.colorBar2{border-bottom:4px solid #d3cad2;}
.colorBar3{border-bottom:4px solid #d6c7c3;}

contentMap.closed h4.colorBar1, contentMap.closed h4.colorBar2, contentMap.closed h4.colorBar3{
  padding-top:4em;
  text-transform: uppercase;
  border-bottom-width: 5em;
  transform: rotate(90deg);
}
  
  .color1, .color2, .color3{
    width: 100%;
    height: 200px;
    position: relative;
  }
  
  .color1{
    background-color: #b4c6ca;
  }
  .color2{
    background-color: #d3cad2;
  }
  .color3{
    background-color: #d6c7c3;
  }
  .color1.highlighted{
    background-color: #587C84;
    color: white;
  }
  .color2.highlighted{
    background-color: #7d677d;
    color: white;
  }
  .color3.highlighted{
    background-color: #865F56;
    color: white;
  }
  
  .color1 h4, .color2 h4, .color3 h4{
    transform: rotate(-90deg);
    transform-origin: right top;
    font-size: 0.95em;
    position: absolute;
    line-height: 60px;
    top: 0%;
    right: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
    display: block;
    width: 200px;
    
  }
  
</style>
