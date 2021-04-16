import { createStore } from 'vuex'

const STORAGE_KEY = 'todo-storage';

export default createStore({
  state: {
    todos: [],
    STORAGE_KEY
  },
  getters: {
  
  },
  mutations: {
    addTodo: function(state, payload) {
      if(payload) {
        state.todos.push(payload),
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
      }
    },
    deleteTodo: function(state, payload) {
      state.todos.splice(payload, 1),
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    }
  },
  actions: {
    addTodo: (context, payload) => {
      return context.commit('addTodo', payload);
    },
    deleteTodo: (context, payload) => {
      return context.commit('deleteTodo', payload);
    }
  },

  modules: {
  }
})
