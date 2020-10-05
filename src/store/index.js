import { createStore } from 'vuex';
import uid from 'uid';

export default createStore({
  state: {
    projects: [
      {
        id: 0,
        name: "Numberquiz",
        description: "",
        items: [
          {
            id: 0,
            text: "How much is 1+1?",
            type: 'quiz',
            answers: [
              {
                id: 0,
                text: 0,
                right: false
              },
              {
                id: 1,
                text: 1,
                right: false
              },
              {
                id: 2,
                text: 2,
                right: true
              },
              {
                id: 3,
                text: 3,
                right: false
              }
            ],
            description: "Just 1+1 = 2!"
          },
          {
            id: 1,
            text: "How much is 2+2?",
            type: 'quiz',
            answers: [
              {
                id: 0,
                text: 5,
                right: false
              },
              {
                id: 1,
                text: 0,
                right: false
              },
              {
                id: 2,
                text: 2,
                right: false
              },
              {
                id: 3,
                text: 4,
                right: true
              }
            ],
            description: "Just 2+2 = 4!"
          }
        ]
      },
      {
        id: 1,
        name: "Register One",
        description: "I am an example register",
        items: [
          {
            id: 0,
            text: "How much is 1+1?",
            type: 'quiz',
            answers: [
              {
                id: 0,
                text: 0,
                right: false
              },
              {
                id: 1,
                text: 1,
                right: false
              },
              {
                id: 2,
                text: 2,
                right: true
              },
              {
                id: 3,
                text: 3,
                right: false
              }
            ],
            description: "Just 1+1 = 2!"
          },
          {
            id: 1,
            text: "How much is 2+2?",
            type: 'quiz',
            answers: [
              {
                id: 0,
                text: 5,
                right: false
              },
              {
                id: 1,
                text: 0,
                right: false
              },
              {
                id: 2,
                text: 2,
                right: false
              },
              {
                id: 3,
                text: 4,
                right: true
              }
            ],
            description: "Just 2+2 = 4!"
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
      return state.projects.find(project => project.id === parseInt(id))
    },
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    addProject: (state, {title, description}) => {
      title = title || "New Project"
      let project = {
        name: title,
        description,
        id: uid(16),
        items: []
      }
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
