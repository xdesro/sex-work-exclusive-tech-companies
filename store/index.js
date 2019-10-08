import _ from 'lodash'

export const state = () => ({
  companies: [],
  activeCompany: null
})

export const mutations = {
  setCompanies(state, list) {
    state.companies = list
  },
  setActiveCompany(state, index) {
    state.activeCompany = index
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      `~/assets/content/companies/`,
      false,
      /\.md$/
    )
    let companies = files.keys().map(key => {
      let res = files(key)
      return res.default
    })
    await commit('setCompanies', companies)
  },
  activateCompany({ commit }, index) {
    commit('setActiveCompany', index)
  }
}
