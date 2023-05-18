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
      aria-label="SidebarChaild"
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
      <div>
        <div class="flex justify-between items-center mx-9 my-8">
          <h1 class="text-[#303972] text-[24px] font-bold font-['Poppins']">Guruhlar</h1>
          <button
            class="bg-[#4D44B5] w-[48px] h-[48px] rounded-[40px] flex justify-center items-center border-2 text-white border-[#4D44B5] hover:bg-white hover:text-[#4D44B5]"
          >
            <i class="bx bx-plus text-[28px]"></i>
          </button>
        </div>
        <div class="flex gap-5 items-center mx-8 my-7">
          <img class="w-[48px] h-[48px] rounded-[40px]" src="../img/myLogo.png" alt="" />
          <div class="text-left mr-[83px]">
            <h1 class="text-[#303972] text-[14px] font-bold font-['Poppins']">
              Dasturi injinering
            </h1>
            <p class="text-[#A098AE] text-[14px]">Class VII A</p>
          </div>
          <button
            class="bg-white w-[48px] h-[48px] rounded-[40px] flex justify-center items-center border-2 text-[#A098AE] border-[#A098AE] hover:border-[#4D44B5] hover:text-[#4D44B5]"
          >
            <i class="bx bx-envelope text-[28px]"></i>
          </button>
        </div>
        <div class="flex gap-5 items-center mx-8 my-7">
          <img class="w-[48px] h-[48px] rounded-[40px]" src="../img/myLogo.png" alt="" />
          <div class="text-left mr-[83px]">
            <h1 class="text-[#303972] text-[14px] font-bold font-['Poppins']">
              Dasturi injinering
            </h1>
            <p class="text-[#A098AE] text-[14px]">Class VII A</p>
          </div>
          <button
            class="bg-white w-[48px] h-[48px] rounded-[40px] flex justify-center items-center border-2 text-[#A098AE] border-[#A098AE] hover:border-[#4D44B5] hover:text-[#4D44B5]"
          >
            <i class="bx bx-envelope text-[28px]"></i>
          </button>
        </div>
        <div class="flex gap-5 items-center mx-8 my-7">
          <img class="w-[48px] h-[48px] rounded-[40px]" src="../img/myLogo.png" alt="" />
          <div class="text-left mr-[83px]">
            <h1 class="text-[#303972] text-[14px] font-bold font-['Poppins']">
              Dasturi injinering
            </h1>
            <p class="text-[#A098AE] text-[14px]">Class VII A</p>
          </div>
          <button
            class="bg-white w-[48px] h-[48px] rounded-[40px] flex justify-center items-center border-2 text-[#A098AE] border-[#A098AE] hover:border-[#4D44B5] hover:text-[#4D44B5]"
          >
            <i class="bx bx-envelope text-[28px]"></i>
          </button>
        </div>
        <button
          class="ml-12 w-[312px] h-[61px] rounded-[40px] bg-[#F3F4FF] text-center text-[#4D44B5] border-2 border-[#F3F4FF] hover:border-[#4D44B5] hover:border-2"
        >
          Barchasi
        </button>
      </div>

      <div class="relative">
        <div class="flex justify-between items-center mx-9 my-8">
          <h1 class="text-[#303972] text-[24px] font-bold font-['Poppins']">Xabarlar</h1>
        </div>
        <div class="flex gap-5 items-center mx-8 border-b">
          <img
            class="w-[48px] h-[48px] rounded-[40px] mb-2"
            src="../img/myLogo.png"
            alt=""
          />
          <div class="text-left mb-2">
            <h1 class="text-[#303972] text-[14px] font-bold font-['Poppins']">
              Salimjon Sheraliyev
            </h1>
            <p class="text-[#A098AE] text-[14px]">Lorem ipsum dolor sit amet...</p>
          </div>
          <span class="absolute text-[14px] text-[#A098AE] font-normal font-['Poppins'] right-0 mb-14 mr-8"
            >12:45 PM</span
          >
        </div>
        <span class="absolute text-[14px] text-[#A098AE] font-normal font-['Poppins'] right-0 mt-5 mr-8"
            >12:45 PM</span
          >
        <div class="flex gap-5 items-center mx-8 my-7 border-b">
          <img
            class="w-[48px] h-[48px] rounded-[40px] mb-2"
            src="../img/myLogo.png"
            alt=""
          />
          <div class="text-left mb-2">
            <h1 class="text-[#303972] text-[14px] font-bold font-['Poppins']">
              Salimjon Sheraliyev
            </h1>
            <p class="text-[#A098AE] text-[14px]">Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <span class="absolute text-[14px] text-[#A098AE] font-normal font-['Poppins'] right-0 mr-8"
            >12:45 PM</span
          >
        <div class="flex gap-5 items-center mx-8 my-7 border-b">
          <img
            class="w-[48px] h-[48px] rounded-[40px] mb-2"
            src="../img/myLogo.png"
            alt=""
          />
          <div class="text-left mb-2">
            <h1 class="text-[#303972] text-[14px] font-bold font-['Poppins']">
              Salimjon Sheraliyev
            </h1>
            <p class="text-[#A098AE] text-[14px]">Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <button
          class="ml-12 w-[312px] h-[61px] rounded-[40px] bg-[#F3F4FF] text-center text-[#4D44B5] border-2 border-[#F3F4FF] hover:border-[#4D44B5] hover:border-2"
        >
          Barchasi
        </button>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped></style>
