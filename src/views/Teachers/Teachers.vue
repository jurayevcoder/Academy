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
        class="flex justify-center items-center bg-[#4D44B5] text-white rounded-[40px] w-[207px] h-[60px] focus:ring-4 focus:ring-blue-300 hover:text-[#4D44B5] hover:bg-white hover:border-[#4D44B5] hover:border-2 border-2 border-[#4D44B5]"
      >
        <i class="bx bx-plus text-[50px]"></i>
      </button>
    </div>
  </section>
</template>

<style scoped></style>
