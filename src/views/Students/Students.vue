<script setup>
import { ref, reactive } from "vue";
import Header from "../../components/Header.vue";
import { studentStore } from "../../stores/student/studentStore";
import { toast } from "vue3-toastify";

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);


const store = studentStore();

const students = reactive({
  image: "",
  first_name: "",
  last_name: "",
  birthday: "",
  group: "",
  login: "",
  password: "",

});
const addStudent = () => {
  const student = {
    image: students.image,
    first_name: students.first_name,
    last_name: students.last_name,
    birthday: students.birthday,
    group: students.group,
    login: students.login,
    password: students.password,
  };

  store.ADD(student);

  toast.success("Successfully!", {
    autoClose: 1000,
    theme: "light",
    pauseOnHover: true,
  });

  // students.image = "";
  // students.first_name = "";
  // students.last_name = "";
  // students.birthday = "";
  // students.group = "";
  // students.login = "";
  // students.password = "";

  toggleModal();
};
</script>

<template>
  <!------------------------------------------------ Modal Start - ----------------------------------->

  <div
    tabindex="-1"
    aria-hidden="true"
    :class="
      modal
        ? 'overflow-y-auto flex bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full'
        : 'hidden'
    "
  >
    <div class="relative p-4">
      <div class="relative bg-white rounded-[20px] shadow-lg w-[1475px] h-[753px]">
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
              aria-hidden=""
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
        <form @submit.prevent="addStudent" class="flex justify-between">
          <div class="grid ml-[260px] sm:grid-cols-2 mt-10">
            <div class="ml-5 left-1 top-1 mt-[84px] absolute">
              <label
                for="image"
                class="block mb-2 mt-10 text-[18px] font-medium text-[#303972]"
                >Rasmi *</label
              >
              <input
                v-model="students.image"
                type="text"
                name="image"
                id="image"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] w-[200px] h-[200px] p-7"
                placeholder="Rasm"
                required=""
              />
            </div>
            <div class="mb-12">
              <label
                for="first_name"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Ism *</label
              >
              <input
                v-model="students.first_name"
                type="first_name"
                name="first_name"
                id="first_name"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="Jahon"
                required=""
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Sharif *</label
              >
              <input
                v-model="students.last_name"
                type="last_name"
                name="last_name"
                id="last_name"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="Jalilov"
                required=""
              />
            </div>
            <div class="mb-12">
              <label
                for="birthday"
                class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Tug'ilgan sana *</label
              >
              <input
                v-model="students.birthday"
                type="text"
                name="birthday"
                id="birthday"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[276.5px] h-[48px] p-2.5"
                placeholder="24 Februari 1997"
                required=""
              />
            </div>
            <div>
              <label for="group" class="block mb-2 text-[18px] font-medium text-[#303972]"
                >Guruhni tanlang *</label
              >
              <input
                v-model="students.group"
                type="text"
                name="group"
                id="group"
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
                v-model="students.login"
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
                v-model="students.password"
                type="password"
                name="password"
                id="password"
                class="bg-[#FFFFFF] border border-[#C1BBEB] text-[#A098AE] text-sm rounded-[5px] block w-[577px] h-[48px] p-2.5"
                placeholder="******************"
                required=""
              />
            </div>
            <button
              type="submit"
              class="py-3 w-[150px] ml-[1000px] mt-[150px] text-white bg-[#4D44B5] font-['Poppins'] hover:bg-white hover:text-[#4D44B5] border-2 border-[#4D44B5] focus:ring-4 focus:ring-blue-300 font-medium rounded-[40px] text-[18px]"
            >
              QO'SHISH
            </button>
          </div>
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

    <div class="bg-[#F3F4FF] pb-10">
      <p class="ml-12">Frame</p>
      <div class="ml-12 mr-10 overflow-auto bg-white rounded-xl shadow-lg">
        <table class="w-full text-left text-gray-500">
          <thead class="text-xs text-gray-700">
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
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr v-for="(el, i) in store.LIST" :key="i" class="border-b">
              <td class="px-4 py-3">
                <input class="w-[20px] h-[20px]" type="checkbox" />
              </td>
              <th scope="row" class="px-4 py-3 flex items-center gap-5">
                <img class="w-[40px] h-[40px] rounded-full" :src="el.image" alt="" />
                <div class="w-[150px] h-[38px]">
                  <p class="text-[#101828] font-['Abhaya Libre']">
                    {{ el.first_name }} {{ el.last_name }}
                  </p>
                  <p>jurayevcoder@gmail.com</p>
                </div>
              </th>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">
                {{ el.group }}
              </td>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">Developer</td>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">
                {{ new Date().getDate() }}.{{ new Date().getMonth() }}.{{
                  new Date().getFullYear()
                }}
              </td>
              <td class="px-4 py-3 text-[#232D42] font-['Abhaya Libre']">1234</td>
              <td class="px-4 py-3 text-gray-500 text-[25px]">
                <button @click="store.DEL(el.first_name)"
                  class="w-[40px] focus:ring-4 focus:ring-blue-300 border-white border-2 hover:border-2 hover:border-[#4D44B5] rounded-[8px] mr-3"
                >
                  <i class="bx bx-trash"></i>
                </button>
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
