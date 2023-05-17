<script setup>
import { ref } from "vue";
import Header from '../../components/Header.vue'

const modal = ref(false);
const toggleModal = () => (modal.value = !modal.value);

toggleModal();
</script>

<template>
  <section class="bg-[#F3F4FF] h-[100vh]">
    <div class="pt-11 pl-3">
        <Header :title="`O'quvchilar`"/>
    </div>
  </section>
</template>

<style scoped></style>
