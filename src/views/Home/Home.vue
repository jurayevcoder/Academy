<script setup>
import { ref } from "vue";
import { navLinks } from "../../constants/navLInk.js";
import { useRouter } from "vue-router";
import SidebarChaild from "../../components/SidebarChaild.vue";
import { teacherStore } from "../../stores/teacher/teacherStore";
import { studentStore } from "../../stores/student/studentStore";

const navlinks = ref(navLinks);

const props = defineProps(["title"]);

const router = useRouter();

const store = teacherStore();

const stores = studentStore()
</script>
<template>
  <header class="bg-[#F3F4FF]">
    <div class="pl-14 pr-10 pt-11">
      <nav class="flex justify-between items-center">
        <span class="text-[#303972] text-[36px] font-['Poppins'] font-bold"
          >Dashboard</span
        >
        <i class="bx bx-search absolute right-80 mr-96 text-[25px] text-[#4D44B5]"></i>
        <input
          type="text"
          placeholder="Izlash.."
          class="mr-96 w-[350px] h-[60px] rounded-[40px] pl-20 text-[20px] hover:border-[#4D44B5] hover:border-2 border-2 border-white"
        />
      </nav>
    </div>
  </header>
  <main class="pl-20 bg-[#F3F4FF] pt-10 pb-10">
    <section>
      <SidebarChaild />
      <div class="w-[1080px] h-[172px] bg-white rounded-[20px] shadow-lg flex justify-between items-center px-10">
      <div class="flex items-center gap-6">
        <i class='bx bxs-graduation bg-[#4D44B5] text-white w-[72px] h-[72px] rounded-[40px] flex justify-center items-center text-[40px]' ></i>
        <div class=" text-left">
        <p class="text-[#A098AE] text-[18px] font-normal font-['Poppins']">O'quvchilar</p>
        <p class="text-[#303972] text-[36px] font-bold font-['Poppins']">{{ stores.LIST.length }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <i class='bx bxs-user-badge bg-[#FB7D5B] text-white w-[72px] h-[72px] rounded-[40px] flex justify-center items-center text-[40px]' ></i>
        <div class=" text-left">
        <p class="text-[#A098AE] text-[18px] font-normal font-['Poppins']">O'qituvchilar</p>
        <p class="text-[#303972] text-[36px] font-bold font-['Poppins']">{{ store.LIST.length }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <i class='bx bxs-group bg-[#FCC43E] text-white w-[72px] h-[72px] rounded-[40px] flex justify-center items-center text-[40px]' ></i>
        <div class=" text-left">
        <p class="text-[#A098AE] text-[18px] font-normal font-['Poppins']">Guruhlar</p>
        <p class="text-[#303972] text-[36px] font-bold font-['Poppins']">40</p>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <i class='bx bx-book-open bg-[#303972] text-white w-[72px] h-[72px] rounded-[40px] flex justify-center items-center text-[40px]' ></i>
        <div class=" text-left">
        <p class="text-[#A098AE] text-[18px] font-normal font-['Poppins']">Fanlar</p>
        <p class="text-[#303972] text-[36px] font-bold font-['Poppins']">16</p>
        </div>
      </div>
      </div>

      <div class="overflow-auto bg-white rounded-[20px] shadow-lg mt-10 pt-20 mr-[455px] w-[1080px]">
        <table class="w-[1080px] text-left">
          <thead class="text-gray-700">
          <span class=" absolute font-['Poppins'] text-[#303972] font-semibold ml-10 top-0 mt-96 text-[24px]">O’qituvchilar:</span>
          </thead>
          <tbody class="bg-white">
            <tr v-for="(el, i) in store.LIST" :key="i" class="border-b">
              <th scope="row" class="px-4 py-3 flex items-center gap-5 ml-6">
                <img class="w-[48px] h-[48px] rounded-full" :src="el.image" alt="" />
                  <p class="text-[#303972] font-['Poppins'] font-bold">
                    {{ el.first_name }} {{ el.last_name }}
                  </p>
              </th>
              <td class="px-4 py-3 text-[#4D44B5] font-['Poppins'] font-bold">
                ID 1234567
              </td>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">
              <div class="flex items-center gap-3">
                <i class='bx bx-user w-[48px] h-[48px] bg-[#FB7D5B] text-[25px] text-white rounded-[40px] flex justify-center items-center' ></i>
                <div class=" text-left font-['Poppins'] font-bold">
                <p class="text-[#A098AE] text-[14px]">Class</p>
                <p class="text-[#303972] text-[18px]">VII A</p>
                </div>
              </div>
              </td>
              <td class="px-4 py-3 text-[#303972] font-['Poppins'] font-semibold">
                12 soat
              </td>
              <td class="px-4 py-3 text-[#A098AE] text-[25px]">
                <button
                  class="w-[40px] focus:ring-4 focus:ring-blue-300 border-white border-2 hover:border-2 hover:border-[#4D44B5] rounded-[8px] mr-3"
                >
                <i class='bx bx-printer'></i>
                </button>
                <button
                  class="w-[40px] focus:ring-4 focus:ring-blue-300 border-white border-2 hover:border-2 hover:border-[#4D44B5] rounded-[8px]"
                >
                <i class="bx bx-dots-horizontal-rounded"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <nav class="border-b bg-white px-4 py-3" aria-label="Table navigation">
          <ul class="flex justify-between items-center">
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-[8px] border border-gray-300 hover:border-[#4D44B5] hover:text-[#4D44B5] focus:ring-2 focus:ring-blue-300"
              >
                <span>avvalgisi</span>
              </a>
            </li>

            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
              Sahifa
              <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
              dan
              <span class="font-semibold text-gray-900 dark:text-white">1000</span>
            </span>

            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-[8px] border border-gray-300 hover:border-[#4D44B5] hover:text-[#4D44B5] focus:ring-2 focus:ring-blue-300"
              >
                <span>keyingisi</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
