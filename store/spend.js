export const state = () => ({
  // score: {}
  score: JSON.parse(window.localStorage.getItem("spendScore")) || {},
  tabIndex: 0,
  AlertIsDismissed: JSON.parse(window.localStorage.getItem("spendNoteDismissed")) || false,
  quizLocked: JSON.parse(window.localStorage.getItem("spendquizLocked")) || false,
  allDone: window.localStorage.getItem("spendAllDone") || undefined
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
    window.localStorage.setItem("spendAllDone", btoa(score))
  },
  lockQuiz(state) {
    state.quizLocked = true
    window.localStorage.setItem("spendquizLocked", true)
  },
  resetQuiz(state) {
    state.quizLocked = false
    window.localStorage.setItem("spendquizLocked", false)
    state.score = {}
    state.tabIndex = 0
    window.localStorage.setItem("spendAllDone", '')
    state.allDone = undefined
    window.localStorage.setItem("spendScore", '{}')
  },
  setScore(state, qId) {
    let thatThing = new Object
    thatThing[qId[0]] = [qId[1], qId[2]]
    state.score = Object.assign({}, state.score, thatThing)
    let toStore = JSON.stringify(Object.assign({}, state.score, thatThing))
    window.localStorage.setItem("spendScore", toStore)
  },
  setCurrentTab(state, currentTab) {
    state.tabIndex = currentTab
  },
  dismissAlert(state) {
    state.AlertIsDismissed = true
    window.localStorage.setItem("spendNoteDismissed", true)
  }
}