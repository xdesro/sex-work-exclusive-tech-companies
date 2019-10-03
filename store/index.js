import _ from 'lodash'
import * as matter from 'gray-matter'
import Markdownit from 'markdown-it'
const md = new Markdownit()

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
      const parsedRes = matter(res.default)
      // parsedRes.content = md.render(parsedRes.content)
      parsedRes.data.id = _.uniqueId()

      return {
        content: parsedRes.content,
        title: parsedRes.data.title,
        id: parsedRes.data.id,
        link: parsedRes.data.link
      }
    })
    await commit('setCompanies', companies)
  },
  activateCompany({ commit }, index) {
    commit('setActiveCompany', index)
  }
}
