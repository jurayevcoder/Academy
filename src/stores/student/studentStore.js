import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const studentStore = defineStore('student', () => {
  const state = reactive(
    {
      list: [{
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
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
    console.log(state.list);
  }

  const LIST = computed(() => state.list)

  const DEL = (name) => {
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].first_name === name) {
        state.list.splice(i, 1)
        console.log(`delete - ${name}`);
      }
    }
    console.log(name);
  }

  return { LIST, ADD, DEL }
})
