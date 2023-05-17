<script setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);

toggleModal();
</script>

<template>
  <!------------------------------------------------ Modal Start - ----------------------------------->

  <div
    tabindex="-1"
    aria-hidden="true"
    :class="
      modal
        ? 'flex bg-[#F3F4FF] fixed z-50 justify-center items-center md:inset-8 ml-[290px] mt-[80px]'
        : 'hidden'
    "
  >
    <div class="relative p-4 w-[1475px] h-[753px]">
      <div class="relative bg-white rounded-[20px] shadow">
        <div
          class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#4D44B5] rounded-t-[20px]"
        >
          <h3 class="text-[24px] font-semibold text-white">O’quvchi ma’lumotlari</h3>
          <button
            @click="toggleModal"
            type="button"
            class="text-white bg-transparent hover:bg-white hover:text-[#4D44B5] rounded-lg p-1.5"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form action="#" @submit.prevent>
          <div class="grid gap-4 m-4 sm:grid-cols-2 mt-10 pb-[200px]">
            <div class="mb-5">
              <label for="name" class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Ism *</label
              >
              <input
                type="name"
                name="name"
                id="name"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="Jahon"
                required=""
              />
            </div>
            <div>
              <label
                for="sharif"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Sharif *</label
              >
              <input
                type="text"
                name="sharif"
                id="sharif"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="Jalilov"
                required=""
              />
            </div>
            <div class="mb-5">
              <label
                for="cart number"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Tug'ilgan sana *</label
              >
              <input
                type="text"
                name="cart number"
                id="cart number"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[276.5px] h-[48px] p-2.5"
                placeholder="24 Februari 1997"
                required=""
              />
            </div>
            <div>
              <label for="guruh" class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Guruhni tanlang *</label
              >
              <input
                type="text"
                name="guruh"
                id="guruh"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="Guruhni tanlang"
                required=""
              />
            </div>
            <div>
              <label for="login" class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Login *</label
              >
              <input
                type="username"
                name="login"
                id="login"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="username"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Parol *</label
              >
              <input
                type="password"
                name="password"
                id="password"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="******************"
                required=""
              />
            </div>
          </div>
          <button
            type="submit"
            class="text-white bg-[#4D44B5] font-['Poppins'] hover:bg-white hover:text-[#4D44B5] border-2 border-[#4D44B5] focus:ring-4 focus:ring-blue-300 font-medium rounded-[40px] text-[18px] px-5 py-3 mb-10 ml-[1250px]"
          >
            QO'SHISH
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- --------------------------------------------- Model End ------------------------------------ -->

  <!-- --------------------------------------------- Students Start ------------------------------- -->

  <section class="bg-[#F3F4FF] h-[100vh]">
    <div class="pt-11 pl-3">
      <Header :title="`O'quvchilar`" />
    </div>

    <div class="pl-3 flex justify-between items-center m-10">
      <i class="bx bx-search absolute ml-10 text-[25px] text-[#4D44B5]"></i>
      <input
        type="text"
        placeholder="Izlash.."
        class="w-[350px] h-[60px] rounded-[40px] pl-20 text-[20px] hover:border-[#4D44B5] hover:border-2 border-2 border-white"
      />
      <button
        @click="toggleModal"
        type="button"
        class="flex justify-center items-center bg-[#4D44B5] text-white rounded-[40px] w-[207px] h-[60px] focus:ring-4 focus:ring-blue-300 hover:text-[#4D44B5] hover:bg-white hover:border-2 border-2 border-[#4D44B5]"
      >
        <i class="bx bx-plus text-[50px]"></i>
      </button>
    </div>

    <div>
      <div class="ml-12 mr-10 overflow-auto rounded-xl">
        <table class="w-full text-left text-gray-500">
          <p>Frame</p>
          <thead class="text-xs text-gray-700 bg-white">
            <tr class="border-b font-['Abhaya Libre'] text-[#8A92A6]">
              <th scope="col" class="px-4 py-3">
                <input class="w-[20px] h-[20px]" type="checkbox" />
              </th>
              <th scope="col" class="px-4 py-3">
                I.F.O <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="px-4 py-3">
                Guruh raqami <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="px-4 py-3">
                Bosqich <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="px-4 py-3">
                Qo'shilgan sana <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="px-4 py-3">
                ID raqami <i class="bx bx-down-arrow-alt text-[20px]"></i>
              </th>
              <th scope="col" class="px-4 py-3"></th>
              <th scope="col" class="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="border-b">
              <td class="px-4 py-3">
                <input class="w-[20px] h-[20px]" type="checkbox" />
              </td>
              <th scope="row" class="px-4 py-3 flex items-center gap-5">
                <img class="w-[40px] rounded-full" src="../../img/myLogo.png" alt="" />
                <div class="w-[150px] h-[38px]">
                  <p class="text-[#101828] font-['Abhaya Libre']">Davlat Jo'rayev</p>
                  <p>jurayevcoder@gmail.com</p>
                </div>
              </th>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">233</td>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">Developer</td>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">2023.05.17</td>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">1202</td>
              <td class="px-4 py-3 text-gray-500 text-[25px]">
                <button
                  class="w-[40px] focus:ring-4 focus:ring-blue-300 border-white border-2 hover:border-2 hover:border-[#4D44B5] rounded-[8px]"
                >
                  <i class="bx bx-trash"></i>
                </button>
              </td>
              <td class="px-4 py-3 text-gray-500 text-[25px]">
                <button
                  class="w-[40px] focus:ring-4 focus:ring-blue-300 border-white border-2 hover:border-2 hover:border-[#4D44B5] rounded-[8px]"
                >
                  <i class="bx bxs-edit"></i>
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
    </div>
  </section>

  <!-- --------------------------------------------- Students End --------------------------------- -->
</template>

<style scoped></style>
