<script setup>
import { ref } from 'vue'
import { navLinks } from '../constants/navLInk'
import { useRouter } from 'vue-router'

const navlinks = ref(navLinks)

const props = defineProps(['title'])

const router = useRouter()
</script>

<template>
  <header>
    <div class= " pl-10 pr-10">
      <nav class="flex justify-between items-center">
        <span class="text-[#303972] text-[36px] font-['Poppins'] font-bold">{{ title }}</span>
        <div class="flex gap-5 items-center">
          <button
            class="bg-[#FFFFFF] w-[60px] h-[60px] text-[32px] rounded-full text-[#A098AE] flex justify-center items-center hover:text-white hover:bg-[#4D44B5] focus:ring-4 focus:ring-blue-300"
          >
            <i class="bx bx-bell"></i>
          </button>
          <button
            class="bg-[#FFFFFF] w-[60px] h-[60px] text-[32px] rounded-full text-[#A098AE] flex justify-center items-center hover:text-white hover:bg-[#4D44B5] focus:ring-4 focus:ring-blue-300"
          >
            <i class="bx bx-cog"></i>
          </button>
          <div class="ml-5">
            <p class="text-[#303972]">Jo'rayev.D</p>
            <p class="ml-3 text-[#A098AE]">Admin</p>
          </div>
          <img class="w-[60px] rounded-full" src="../img/myLogo.png" alt="" />
        </div>
      </nav>
    </div>
  </header>
</template>
;

<style lang="scss" scoped></style>
