export const state = () => ({
  preloader: true,
})

export const mutations = {
  isOkayPreload(state, payload) {
    state.preloader = payload
  }
}