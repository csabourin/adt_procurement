export const state = () => ({
  // score: {}
  score: JSON.parse(window.localStorage.getItem("planScore")) || {},
  tabIndex: 0,
  AlertIsDismissed: JSON.parse(window.localStorage.getItem("planNoteDismissed")) || false,
  quizLocked: JSON.parse(window.localStorage.getItem("planquizLocked")) || false,
  allDone: window.localStorage.getItem("planAllDone") || undefined
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
    window.localStorage.setItem("planAllDone", btoa(score))
  },
  lockQuiz(state) {
    state.quizLocked = true
    window.localStorage.setItem("planquizLocked", true)
  },
  resetQuiz(state) {
    state.quizLocked = false
    window.localStorage.setItem("planquizLocked", false)
    state.score = {}
    state.tabIndex = 0
    window.localStorage.setItem("planAllDone", '')
    state.allDone = undefined
    window.localStorage.setItem("planScore", '{}')
  },
  setScore(state, qId) {
    let thatThing = new Object
    thatThing[qId[0]] = [qId[1], qId[2]]
    state.score = Object.assign({}, state.score, thatThing)
    let toStore = JSON.stringify(Object.assign({}, state.score, thatThing))
    window.localStorage.setItem("planScore", toStore)
  },
  setCurrentTab(state, currentTab) {
    state.tabIndex = currentTab
  },
  dismissAlert(state) {
    state.AlertIsDismissed = true
    window.localStorage.setItem("planNoteDismissed", true)
  }
}