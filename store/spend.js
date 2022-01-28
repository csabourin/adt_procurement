export const state = () => ({
  // score: {}
  score: JSON.parse(window.localStorage.getItem("ProcurementExam3Score")) || {},
  tabIndex: 0,
  AlertIsDismissed: JSON.parse(window.localStorage.getItem("ProcurementExam3NoteDismissed")) || false,
  quizLocked: JSON.parse(window.localStorage.getItem("ProcurementExam3quizLocked")) || false,
  allDone: window.localStorage.getItem("ProcurementExam3AllDone") || undefined
})

export const getters = {
  getScore: (state) => {
    try{
      atob(state.allDone)
    return atob(state.allDone)
  }
  catch(e){
    return undefined
  }

  }
}

export const mutations = {
  setComplete(state, score) {
    state.allDone = btoa(score)
    window.localStorage.setItem("ProcurementExam3AllDone", btoa(score))
  },
  lockQuiz(state) {
    state.quizLocked = true
    window.localStorage.setItem("ProcurementExam3quizLocked", true)
  },
  resetQuiz(state) {
    state.quizLocked = false
    window.localStorage.setItem("ProcurementExam3quizLocked", false)
    state.score = {}
    state.tabIndex = 0
    window.localStorage.setItem("ProcurementExam3AllDone", '')
    state.allDone = undefined
    window.localStorage.setItem("ProcurementExam3Score", '{}')
  },
  setScore(state, qId) {
    let thatThing = new Object
    thatThing[qId[0]] = [qId[1], qId[2]]
    state.score = Object.assign({}, state.score, thatThing)
    let toStore = JSON.stringify(Object.assign({}, state.score, thatThing))
    window.localStorage.setItem("ProcurementExam3Score", toStore)
  },
  setCurrentTab(state, currentTab) {
    state.tabIndex = currentTab
  },
  dismissAlert(state) {
    state.AlertIsDismissed = true
    window.localStorage.setItem("ProcurementExam3NoteDismissed", true)
  },
  undismissAlert(state) {
    state.AlertIsDismissed = false
    window.localStorage.setItem("ProcurementExam3NoteDismissed", false)
  }
}