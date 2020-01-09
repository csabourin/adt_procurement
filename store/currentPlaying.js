export const state = () => ({
  // score: {},
  showCC: window.localStorage.getItem("showCC") || false,
  volume: window.localStorage.getItem("volume") || 100,
  homepage: parseInt(window.localStorage.getItem("homepage"),10) || 0,
  buildWP: parseInt(window.localStorage.getItem("buildWP"),10) || 0,
  createBudget: parseInt(window.localStorage.getItem("createBudget"),10) || 0,
  spendPart1: parseInt(window.localStorage.getItem("spendPart1"),10) || 0,
  spendPart2: parseInt(window.localStorage.getItem("spendPart2"),10) || 0,
  spendPart3: parseInt(window.localStorage.getItem("spendPart3"),10) || 0,
  reportPart1: parseInt(window.localStorage.getItem("reportPart1"),10) || 0,
  reportPart2: parseInt(window.localStorage.getItem("reportPart2"),10) || 0
})

export const mutations = {
  setShowCC(state, showCC) {
    window.localStorage.setItem("showCC", showCC)
    state.showCC = showCC
  },
  setVolume(state, volume) {
    window.localStorage.setItem("volume", volume)
    state.volume = volume
  },
  setHomepage(state, playing) {
    window.localStorage.setItem("homepage", playing)
    state.homepage = playing
  },
  setBuildWP(state, playing) {
    window.localStorage.setItem("buildWP", playing)
    state.buildWP = playing
  },
  setCreateBudget(state, playing) {
    window.localStorage.setItem("createBudget", playing)
    state.createBudget = playing
  },
  setSpendPart1(state, playing) {
    window.localStorage.setItem("spendPart1", playing)
    state.spendPart1 = playing
  },
  setSpendPart2(state, playing) {
    window.localStorage.setItem("spendPart2", playing)
    state.spendPart2 = playing
  },
  setSpendPart3(state, playing) {
    window.localStorage.setItem("spendPart3", playing)
    state.spendPart3 = playing
  },
  setReportPart1(state, playing) {
    window.localStorage.setItem("reportPart1", playing)
    state.reportPart1 = playing
  },
  setReportPart2(state, playing) {
    window.localStorage.setItem("reportPart2", playing)
    state.reportPart2 = playing
  }
}