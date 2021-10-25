import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SampleEventCard: [
      {EventTitle: "Title1", CoverPhoto:"stock-1", EventDate:'Oct 15, 2021'},
      {EventTitle: "Title2", CoverPhoto:"stock-2", EventDate:'Oct 15, 2021'},
      {EventTitle: "Title3", CoverPhoto:"stock-3", EventDate:'Oct 15, 2021'},
      {EventTitle: "Title4", CoverPhoto:"stock-4", EventDate:'Oct 15, 2021'},
    ],
    editEvent: null,
  },
  mutations: {
    toggleEditEvent(state, payload){
      state.editEvent = payload;
      console.log(state.editEvent);
    }
  },
  actions: {
  },
  modules: {
  }
})
