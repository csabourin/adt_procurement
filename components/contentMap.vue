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
        <div v-show="!currentState" class="clickMe closedMenuBox" @click="setParentOpen" @mouseover="arrowVisible = true" @mouseout="arrowVisible = false">
          <div class="color1">
            <h4>{{$t('plan')}}</h4>
          </div>
          <div class="color2">
            <h4>{{$t('spend')}}</h4>
          </div>
          <div class="color3">
            <h4>{{$t('report')}}</h4>
          </div>
          <div class="open-indicator" v-show="arrowVisible"></div>
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
        arrowVisible: false
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
            for(var i = 0; i < currents.length; i++){
              currents[i].removeAttribute("aria-current");
            }
          }
          var actives = app.querySelectorAll(".contentMap .nuxt-link-exact-active")
          for(var j = 0; j < actives.length; j++){
            actives[j].setAttribute("aria-current", "page");
          }
        });
      },
      setClosedMenuHeight(){
        if(this.currentState == false){
          this.$nextTick(function() {
            var that = this;
            var colorBoxes = this.$el.querySelectorAll(".color1, .color2, .color3")
            for(var k = 0; k < colorBoxes.length; k++){
              colorBoxes[k].style.height = ((window.innerHeight - document.querySelector(".navBar").offsetHeight) / 3) + "px";
            }
            var hFours = this.$el.querySelectorAll(".color1 h4, .color2 h4, .color3 h4")
            for(var l = 0; l < hFours.length; l++){
              hFours[l].style.width = ((window.innerHeight - document.querySelector(".navBar").offsetHeight) / 3) + "px";
            }
          });
        }
      },
      setClosedMenuHighlight(newModule){
        this.$nextTick(function() { 
          var that = this;

          var colorBoxes2 = document.querySelectorAll(".color1, .color2, .color3")
          for(var m = 0; m < colorBoxes2.length; m++){
            colorBoxes2[m].className = colorBoxes2[m].className.replace(/\bhighlighted\b/g, "");
          }

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
      },
      findModule(page){
        var module = "home";
        var menu1Links = this.$el.querySelectorAll("menu")[0].querySelectorAll("a")
        for(var n = 0; n < menu1Links.length; n++){
          if(page.path == menu1Links[n].getAttribute("href")){
            module = "plan";
          }
        }
        var menu2Links = this.$el.querySelectorAll("menu")[1].querySelectorAll("a")
        for(var o = 0; o < menu2Links.length; o++){
          if(page.path == menu2Links[o].getAttribute("href")){
            module = "spend";
          }
        }
        var menu3Links = this.$el.querySelectorAll("menu")[2].querySelectorAll("a")
        for(var p = 0; p < menu3Links.length; p++){
          if(page.path == menu3Links[p].getAttribute("href")){
            module = "report";
          }
        } 
        
        this.$store.commit('currentPlaying/setCurrentModule', module);
        return module;
      }
    },
    mounted(){
      this.setAriaCurrent();
      
      this.setClosedMenuHeight();
      window.onresize = this.setClosedMenuHeight;
      
      this.setClosedMenuHighlight(this.findModule(this.$route));
    },
    watch: {
      currentState: function(newVal){
        if(newVal == false){
          this.setClosedMenuHeight();
          
          this.$el.style.whiteSpace = "nowrap";
          console.log(this.$el.style.whiteSpace)
        }
        else{
          var that = this;
          setTimeout(function(){
            that.$el.style.whiteSpace = "normal";
          }, 300)
        }
      },
      $route: function(to) {
        this.setClosedMenuHighlight(this.findModule(to));
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
  white-space: nowrap;
}
  
.contentMap:not(.closed){
  overflow: hidden;
}

.contentMap a {
  color: #212529;
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

li{
  /*line-height: 100%;*/
  margin-bottom: .25em;
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
  
  
  .closedMenuBox{
    position: relative;
  }
  .open-indicator {
    position: absolute;
    right: -40px;
    top: calc(50% - 35px);
    text-align: center;
    padding: 0px;
    height: 70px;
    width: 12px;
    animation: blink 3s linear infinite normal;
  }
  .open-indicator:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 51%;
    width: 100%;
    background: rgb(220, 220, 220);
    transform: skew(25deg, 0deg);
  }
  .open-indicator:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50%;
    width: 100%;
    background: rgb(220, 220, 220);
    transform: skew(-25deg, 0deg);
  }
  
  @keyframes blink {
    0%   { opacity: 0; right: -35px; }
    25%  { opacity: 1; right: -40px; }
    75%  { opacity: 1; right: -40px; }
    100% { opacity: 0; right: -45px; }
  }
  
</style>
