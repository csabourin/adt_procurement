export const state = () => ({
  SOWSOR: JSON.parse(window.localStorage.getItem("SOWSOR")) || false,
  WorkPlanTemplate: JSON.parse(window.localStorage.getItem("WorkPlanTemplate")) || false,
  ComProcDoc: JSON.parse(window.localStorage.getItem("ComProcDoc")) || false,
  delegChart: JSON.parse(window.localStorage.getItem("delegChart")) || false,
  statementofwork: JSON.parse(window.localStorage.getItem("statementofwork")) || false,
  procurementInstruments: JSON.parse(window.localStorage.getItem("procurementInstruments")) || false,
  s32s34: JSON.parse(window.localStorage.getItem("s32s34")) || false,
  FSRRoadmap: JSON.parse(window.localStorage.getItem("FSRRoadmap")) || false,
  prepareFSR: JSON.parse(window.localStorage.getItem("prepareFSR")) || false,
  extReports: JSON.parse(window.localStorage.getItem("extReports")) || false,
  WorkPlan_lastYear: JSON.parse(window.localStorage.getItem("WorkPlan_lastYear")) || false,
  ProcureProcess: JSON.parse(window.localStorage.getItem("ProcureProcess")) || false,
  ReportLast: JSON.parse(window.localStorage.getItem("ReportLast")) || false,
  WhatNotToDo: JSON.parse(window.localStorage.getItem("WhatNotToDo")) || false,
  BidEval: JSON.parse(window.localStorage.getItem("BidEval")) || false,
  LegalFrame: JSON.parse(window.localStorage.getItem("LegalFrame")) || false,
  Oversight: JSON.parse(window.localStorage.getItem("Oversight")) || false,
})

export const mutations = {
  setOpenFile(state, name) {
    switch(name){
      case "SOWSOR":
        state.SOWSOR = true;
        window.localStorage.setItem("SOWSOR", true);
        break;
      case "WorkPlanTemplate":
        state.WorkPlanTemplate = true;
        window.localStorage.setItem("WorkPlanTemplate", true);
        break;
      case "ComProcDoc":
        state.ComProcDoc = true;
        window.localStorage.setItem("ComProcDoc", true);
        break;
      case "delegChart":
        state.delegChart = true;
        window.localStorage.setItem("delegChart", true);
        break;
      case "statementofwork":
        state.statementofwork = true;
        window.localStorage.setItem("statementofwork", true);
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
      case "ProcureProcess":
        state.ProcureProcess = true;
        window.localStorage.setItem("ProcureProcess", true);
        break;
      case "BidEval":
        state.BidEval = true;
        window.localStorage.setItem("BidEval", true);
        break;
      case "LegalFrame":
          state.LegalFrame = true;
          window.localStorage.setItem("LegalFrame", true);
          break;
      case "WhatNotToDo":
        state.WhatNotToDo = true;
        window.localStorage.setItem("WhatNotToDo", true);
        break;
      case "Oversight":
        state.Oversight = true;
        window.localStorage.setItem("Oversight", true);
        break;
    }
  },
}