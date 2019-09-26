export const state = () => ({
  companies: []
})

export const mutations = {
  setCompanies(state, list) {
    state.companies = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      `~/assets/content/companies/`,
      false,
      /\.json$/
    )
    let companies = files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setCompanies', companies)
  }
}
