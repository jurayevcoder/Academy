<script setup>
import { ref } from "vue";
import Header from "../../components/Header.vue";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);

toggleModal();
</script>

<template>
  <!-- ----------------------------------------------- Modal Start ---------------------------------------------- -->

  <div
    tabindex="-1"
    aria-hidden="true"
    :class="
      modal
        ? 'flex bg-[#F3F4FF] fixed z-50 justify-center items-center  md:inset-8 ml-[290px] mt-[90px]'
        : 'hidden'
    "
  >
    <div class="relative p-4">
      <div class="relative bg-white rounded-[20px] shadow-lg w-[1475px] h-[753px]">
        <div
          class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-[#4D44B5] rounded-t-[20px]"
        >
          <h3 class="text-[24px] font-semibold text-white">O’qituvchi ma’lumotlari</h3>
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
          <div class="grid gap-4 m-4 sm:grid-cols-2 mt-10">
            <div class="mb-3">
              <label for="name" class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Ism *</label
              >
              <input
                type="name"
                name="name"
                id="name"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[48px] p-2.5"
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
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[48px] p-2.5"
                placeholder="Jalilov"
                required=""
              />
            </div>

            <div  class="mb-3">
              <label for="login" class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Login *</label
              >
              <input
                type="username"
                name="login"
                id="login"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[48px] p-2.5"
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
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[48px] p-2.5"
                placeholder="******************"
                required=""
              />
            </div>
            <div class="mb-3">
              <label
                for="malumot"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Ma'lumot *</label
              >
              <textarea
                name="malumot"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[175px] p-2.5"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              ></textarea>
            </div>
            <div class="">
              <label
                for="image"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Rasmi *</label
              >
              <input
                type="text"
                name="image"
                id="image"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[48px] p-2.5"
                placeholder="Rasm"
                required=""
              />
            </div>

            <div class="mb-3">
              <label
                for="birthday"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Tug'ilgan sana *</label
              >
              <input
                type="text"
                name="birthday"
                id="birthday"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[48px] p-2.5"
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
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[617px] h-[48px] p-2.5"
                placeholder="Guruhni tanlang"
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

  <!-- ----------------------------------------------- Modal End ------------------------------------------------ -->

  <!-- ----------------------------------------------- Teachers Start ------------------------------------------- -->

  <section class="bg-[#F3F4FF] h-[100vh]">
    <div class="pt-11 pl-3">
      <Header :title="`O'qituvchilar`" />
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
        class="flex justify-center items-center bg-[#4D44B5] text-white rounded-[40px] w-[207px] h-[60px] focus:ring-4 focus:ring-blue-300 hover:text-[#4D44B5] hover:bg-white hover:border-[#4D44B5] hover:border-2 border-2 border-[#4D44B5]"
      >
        <i class="bx bx-plus text-[50px]"></i>
      </button>
    </div>

    <div class="mx-12 flex gap-16">
      <div
        class="w-[338px] h-[352px] shadow-lg p-[16px] text-center bg-[#FFFFFF] rounded-[20px]"
      >
        <button
          class="absolute text-[#A098AE] ml-[250px] text-[30px] px-1 mt-2 flex focus:ring-4 focus:ring-blue-300"
        >
          <i class="bx bx-dots-horizontal-rounded"></i>
        </button>
        <img
          src="../../img/myLogo.png"
          alt=""
          class="w-[120px] rounded-full ml-[88px] mt-2"
        />

        <h1 class="text-[#303972] text-[24px] font-['Poppins'] font-normal mt-4">
          Davlat Jo'rayev
        </h1>
        <p class="text-[#A098AE] text-[18px] font-['Poppins'] font-normal mt-2">
          NodeJs and VueJs
        </p>
        <div class="flex justify-between items-center w-[90px] ml-[108px] mt-7">
          <button
            class="text-[20px] text-center bg-[#4D44B5] rounded-full text-white w-[40px] h-[40px] border-2 border-[#4D44B5] hover:bg-white hover:text-[#4D44B5] focus:ring-4 focus:ring-blue-300"
          >
            <i class="bx bx-phone"></i>
          </button>
          <button
            class="text-[20px] bg-[#4D44B5] rounded-full text-white w-[40px] h-[40px] border-2 border-[#4D44B5] hover:bg-white hover:text-[#4D44B5] focus:ring-4 focus:ring-blue-300"
          >
            <i class="bx bx-envelope"></i>
          </button>
        </div>
      </div>
    </div>

    <nav class="mr-20 mt-[250px] float-right" aria-label="Table navigation">
      <ul class="flex rounded-full gap-3 items-center">
        <li>
          <a
            href="#"
            class="flex items-center justify-center py-1 px-2 text-[#A098AE] hover:text-[#4D44B5] focus:ring-2 focus:ring-blue-300 focus:rounded-full"
          >
            <span class=""><i class="bx bxs-left-arrow"></i></span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="w-[50px] h-[50px] flex items-center justify-center text-[18px] bg-[#4D44B5] py-2 px-3 rounded-full leading-tight text-white"
            >1</a
          >
        </li>

        <li>
          <a
            href="#"
            class="flex items-center justify-center py-1 px-2 text-[#A098AE] hover:text-[#4D44B5] focus:ring-2 focus:ring-blue-300 focus:rounded-full"
          >
            <span class=""><i class="bx bxs-right-arrow"></i></span>
          </a>
        </li>
      </ul>
    </nav>
  </section>

  <!-- ----------------------------------------------- Teachers End --------------------------------------------- -->
</template>

<style scoped></style>
