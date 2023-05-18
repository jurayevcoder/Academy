<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <main>
    <section id="main" class="">
      <Sidebar />
      <div class="pl-72">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>
