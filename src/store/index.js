/**
 * @description The implementation of dashboard update feature for
 * when an event is booked was a significant challenge as it was
 * impossible to pass data between two separate components -  “BookTickets.vue” and “Dashboard.vue”,
 * this was overcome by incorporating the high-level state management pattern - Vuex
 * which stores event (state) whenever a payment is successful, and this list of events is then returned (dispatched)
 * upon a call inside dashboard.
 * @link https://photos.app.goo.gl/9unboNU7iJMW42fXA flow of store
 */

import Vue from 'vue'
import Vuex from 'vuex'

// uses vuex store
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // creates a state of event array
    reminderEvents: [],
  },
  mutations: {
    /**
     * @description adds event to the state (mutates state) and to local storage
     * @param state
     * @param payload
     */
    addEvent(state, payload) {
      state.reminderEvents.push(payload)
      localStorage.setItem('events', JSON.stringify(state.reminderEvents))
    },
    /**
     * @description re-place all events to the state
     * @param state
     * @param payload
     */
    setEvents(state, payload) {
      state.reminderEvents = payload
    },
  },
  getters: {
     /**
     * @description allowing access to state
     * @param state
     * @returns reminderEvents
     */
    getEvents(state) {
      return state.reminderEvents
    },
  },
  actions: {
    /**
     * @description gets events from local storage and push it to state
     * @param  commit
     */
    hydrateEvents({commit}) {
      if (localStorage.getItem('events')) {
        commit('setEvents', JSON.parse(localStorage.getItem('events')))
      }
    },
  },
  modules: {},
})
