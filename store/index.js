export const state = () => ({
  seeInputImage: true,
})

export const mutations = {
  isOkayPreload(state, payload) {
    state.seeInputImage = payload
  }
}