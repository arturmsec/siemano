<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/formularz">Formularz</RouterLink>
        <RouterLink to="/adminpanel">Panel admina</RouterLink>
        <RouterLink to="/login">Logowanie</RouterLink>
        <RouterLink to="/register">Rejestracja</RouterLink>
        <span @click="logout()">Logout</span>
      </nav>
    </div>
   
    <RouterView />

     <div class="bottomPanel">
  
    </div>
  </header> 
</template>

<style>
@import '@/assets/base.css';
</style>
