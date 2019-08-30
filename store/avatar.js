export const state = () => ({
  name: localStorage.getItem("avatarName"),
  pic: localStorage.getItem("avatarPic")
})

export const mutations = {
  define (state, name) {
    state.name = name;
    state.pic = name
  }
}