export const state = () => ({
	score: {}
})

export const mutations = {
  define (state, name) {
    state.name = name;
    state.pic = name
  }
}