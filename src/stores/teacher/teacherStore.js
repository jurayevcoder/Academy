import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const teacherStore = defineStore('teacher', () => {
  const state = reactive(
    {
      list: [{
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "NodeJs and VueJs",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      ],
      load: true,
      errorMessage: ''
    })

  const ADD = (data) => {
    state.list.push(data)
  }

  const LIST = computed(() => state.list)

  return { LIST, ADD }
})
