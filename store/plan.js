export const state = () => ({
  score: {}
})

export const mutations = {
  setScore(state, qId) {
  	console.log(qId)
  	let thatThing=new Object
  	thatThing[qId[0]]=[qId[1],qId[2]]
  	state.score=Object.assign({},state.score,thatThing)
  }
}
