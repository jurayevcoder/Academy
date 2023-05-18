import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { list } from 'postcss'

export const studentStore = defineStore('student', () => {
  const state = reactive(
    {
      list: [{
        id: '0',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '1',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '2',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '3',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '4',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '5',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '6',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '7',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '8',
        first_name: 'Davlat',
        last_name: "Jo'rayev",
        birthday: "09 sentyabr 2003",
        group: "7",
        login: "jurayevcoder",
        password: "qwerty",
        image: "https://avatars.githubusercontent.com/u/129625436?v=4"
      },
      {
        id: '9',
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
    console.log(state,list);
  }

  const LIST = computed(() => state.list)

  const DEL = (id) => {
    for (let i in state.list){
      if(id === state.list[i].id){
        let n = Number(i)
        state.list.splice(n, 1)
      }
    }
  }

  return { LIST, ADD, DEL }
})
