export const state = () => ({
  threeSixty: JSON.parse(window.localStorage.getItem("threeSixty")) || false,
  WorkPlanTemplate: JSON.parse(window.localStorage.getItem("WorkPlanTemplate")) || false,
  buildWPProcessMap: JSON.parse(window.localStorage.getItem("buildWPProcessMap")) || false,
  newBudget: JSON.parse(window.localStorage.getItem("newBudget")) || false,
  cycle: JSON.parse(window.localStorage.getItem("cycle")) || false,
  procurementInstruments: JSON.parse(window.localStorage.getItem("procurementInstruments")) || false,
  s32s34: JSON.parse(window.localStorage.getItem("s32s34")) || false,
  FSRRoadmap: JSON.parse(window.localStorage.getItem("FSRRoadmap")) || false,
  prepareFSR: JSON.parse(window.localStorage.getItem("prepareFSR")) || false,
  extReports: JSON.parse(window.localStorage.getItem("extReports")) || false,
  WorkPlan_lastYear: JSON.parse(window.localStorage.getItem("WorkPlan_lastYear")) || false,
  Budget_lastYear: JSON.parse(window.localStorage.getItem("Budget_lastYear")) || false,
  ReportLast: JSON.parse(window.localStorage.getItem("ReportLast")) || false,
})

export const mutations = {
  setOpenFile(state, name) {
    switch(name){
      case "threeSixty":
        state.threeSixty = true;
        window.localStorage.setItem("threeSixty", true);
        break;
      case "WorkPlanTemplate":
        state.WorkPlanTemplate = true;
        window.localStorage.setItem("WorkPlanTemplate", true);
        break;
      case "buildWPProcessMap":
        state.buildWPProcessMap = true;
        window.localStorage.setItem("buildWPProcessMap", true);
        break;
      case "newBudget":
        state.newBudget = true;
        window.localStorage.setItem("newBudget", true);
        break;
      case "cycle":
        state.cycle = true;
        window.localStorage.setItem("cycle", true);
        break;
      case "procurementInstruments":
        state.procurementInstruments = true;
        window.localStorage.setItem("procurementInstruments", true);
        break;
      case "s32s34":
        state.s32s34 = true;
        window.localStorage.setItem("s32s34", true);
        break;
      case "FSRRoadmap":
        state.FSRRoadmap = true;
        window.localStorage.setItem("FSRRoadmap", true);
        break;
      case "prepareFSR":
        state.prepareFSR = true;
        window.localStorage.setItem("prepareFSR", true);
        break;
      case "extReports":
        state.extReports = true;
        window.localStorage.setItem("extReports", true);
        break;
      case "WorkPlan_lastYear":
        state.WorkPlan_lastYear = true;
        window.localStorage.setItem("WorkPlan_lastYear", true);
        break;
      case "Budget_lastYear":
        state.Budget_lastYear = true;
        window.localStorage.setItem("Budget_lastYear", true);
        break;
      case "ReportLast":
        state.ReportLast = true;
        window.localStorage.setItem("ReportLast", true);
        break;
    }
  },
}