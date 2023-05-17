<script setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);

toggleModal();
</script>

<template>
  <section class="bg-[#F3F4FF] h-[100vh]">
    <div class="pt-11 pl-3">
      <Header :title="`O'quvchilar`" />
    </div>

    <div class="pl-3 flex justify-between items-center m-10">
      <i class="bx bx-search absolute ml-10 text-[25px] text-[#4D44B5]"></i>
      <input
        type="text"
        placeholder="Izlash.."
        class="w-[350px] h-[60px] rounded-[40px] pl-20 text-[20px]"
      />
      <button
        class="flex justify-center items-center bg-[#4D44B5] text-white rounded-[40px] w-[207px] h-[60px]"
      >
        <i class="bx bx-plus text-[50px]"></i>
      </button>
    </div>

    <div>
      <div class="overflow-auto ml-12 mr-10 rounded-xl">
        <table class="w-full text-left text-gray-500">
          <thead class="text-xs text-gray-700 bg-white">
            <tr>
              <th scope="col" class="px-4 py-3"><input type="checkbox" /></th>
              <th scope="col" class="px-4 py-3">I.F.O</th>
              <th scope="col" class="px-4 py-3">Guruh raqami</th>
              <th scope="col" class="px-4 py-3">Bosqich</th>
              <th scope="col" class="px-4 py-3">Qo'shilgan sana</th>
              <th scope="col" class="px-4 py-3">ID raqami</th>
              <th scope="col" class="px-4 py-3"></th>
              <th scope="col" class="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b bg-white">
              <td class="px-4 py-3"><input type="checkbox" /></td>
              <th
                scope="row"
                class="px-4 py-3 text-gray-900 whitespace-nowrap flex items-center gap-5"
              >
                <img class="w-[50px] rounded-full" src="../../img/myLogo.png" alt="" />
                <div>
                  <p>Davlat Jo'rayev</p>
                  <p>jurayevcoder@gmai.com</p>
                </div>
              </th>
              <td class="px-4 py-3">233</td>
              <td class="px-4 py-3">Developer</td>
              <td class="px-4 py-3">2023.05.17</td>
              <td class="px-4 py-3">1202</td>
              <td class="px-4 py-3">1202</td>
              <td class="px-4 py-3">1202</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <nav
        class="ml-12 mr-12 flex items-start"
        aria-label="Table navigation"
      >
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="#"
              class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
              class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span>keyingisi</span>
            </a>
          </li>
        </ul>
      </nav> -->
    </div>
  </section>
</template>

<style scoped></style>
