<script setup>
import { ref } from "vue";
import { navLinks } from "../constants/navLInk";
import { useRouter } from "vue-router";

const navlinks = ref(navLinks);

const router = useRouter();
</script>
<template>
  <div>
    <!-- <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-purple-500 rounded-lg sm:hidden hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-200 dark:text-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button> -->

    <aside
      id="default-sidebar"
      class="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full w-[300px] pl-10 py-4 bg-[#4D44B5] dark:bg-[#4D44B5]">
        <div class="flex gap-3 items-center justify-center text-[36px] m-4 mb-10 mr-[50px] font-['Poppins']">
            <h1 class="flex items-center bg-[#FB7D5B] w-11 h-11 pl-2 rounded-lg text-white">A</h1>
          <h1 class="flex items-center text-white">Academy</h1>
        </div>
        <ul class="space-y-2 font-medium">
          <li v-for="link in navlinks" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center gap-1 p-3 text-white rounded-l-full hover:bg-white hover:text-[#4D44B5] dark:hover:bg-[#4D44B5]"
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
.router-link-active {
  background-color: white;
  color: #4d44b5;
}
</style>
