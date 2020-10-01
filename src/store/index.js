import { createStore } from 'vuex';
import uid from 'uid';

export default createStore({
  state: {
    projects: [
      {
        id: 0,
        type: "quiz",
        description: "",
        questions: [
          {
            id: 0,
            text: "How much is 1+1?",
            answers: [
              {
                id: 0,
                text: 0
              },
              {
                id: 1,
                text: 1
              },
              {
                id: 2,
                text: 2
              },
              {
                id: 3,
                text: 3
              }
            ],
            description: "Just 1+1 = 2!"
          },
          {
            id: 1,
            text: "How much is 1+1?",
            answers: [
              {
                id: 0,
                text: 0
              },
              {
                id: 1,
                text: 1
              },
              {
                id: 2,
                text: 2
              },
              {
                id: 3,
                text: 3
              }
            ],
            description: "Just 1+1 = 2!"
          }
        ]
      }
    ]
  },
  getters: {
    getProjects: state => {
      return state.projects;
    },
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    },
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    addProject: (state, project) => {
      state.projects.push(project);
    },
    removeProject: (state, project) => {
      state.projects = state.projects.filter(p => p.id !== project.id)
    },
    addQuestionToProject: (state, project, question) => {
      let selectedProject = state.projects.find(p => p.i === project.id);
      let id = uid(16);
      selectedProject.questions.push({...question, id: id})
      state = state.map(p => selectedProject.id === p.id ? selectedProject : p);
    },
    removeQuestionFromProject: (state,project,question) => {
      let selectedProject = state.projects.find(p => p.i === project.id);
      selectedProject.questions = selectedProject.questions.filter(q => q.id !== question.id);
      state = state.map(p => selectedProject.id === p.id ? selectedProject : p);
    },

  },
  actions: {
    // to be implemented
  },
  modules: {
  }
})
