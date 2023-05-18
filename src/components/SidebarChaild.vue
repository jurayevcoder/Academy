<script setup>
import { ref } from "vue";
import { navLinks } from "../constants/navLInk";
import { useRouter } from "vue-router";

const navlinks = ref(navLinks);

const router = useRouter();
</script>
<template>
  <div>
    <aside
      id="default-sidebar"
      class="fixed top-0 right-0 z-40 w-[395px] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
      aria-label="Sidebar"
    >
      <div class="flex gap-5 items-center justify-center pt-11">
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
    </aside>
  </div>
</template>

<style lang="scss" scoped></style>
