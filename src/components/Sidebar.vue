<script setup>
import { ref } from 'vue'
import { navLinks } from '../constants/navLInk'
import { useRouter } from 'vue-router'

const navlinks = ref(navLinks)

const router = useRouter()
</script>
<template>
  <div>
    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full w-[300px] pl-10 py-4 bg-[#4D44B5] dark:bg-[#4D44B5]">
        <div
          class="flex gap-3 items-center justify-center text-[36px] mt-8 mb-10 mr-[50px] font-['Poppins']"
        >
          <h1
            class="flex items-center justify-center bg-[#FB7D5B] w-11 h-11 rounded-[15px] text-white font-bold"
          >
            A
          </h1>
          <h1 class="flex items-center text-white font-bold">Academy</h1>
        </div>
        <ul class="space-y-2 font-medium">
          <li v-for="link in navlinks" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center gap-1 p-3 text-white rounded-l-full hover:bg-[#F3F4FF] hover:text-[#4D44B5] dark:hover:bg-[#4D44B5]"
            >
              <i :class="link.icon" class="text-[30px] ml-3"></i>
              <span class="ml-3 text-[18px]">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: #F3F4FF;
  color: #4d44b5;
}
</style>
