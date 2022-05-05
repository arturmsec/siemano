<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/formularz">Formularz</RouterLink>
          <RouterLink to="/adminpanel">Panel admina</RouterLink>
          <RouterLink to="/login">Logowanie</RouterLink>
          <RouterLink to="/register">Rejestracja</RouterLink>
        </div>
        <div class="logout" @click="logout()">
          Logout
        </div>
      </nav>
    </div>
   
  </header> 
  <RouterView />
  <footer></footer>
</template>

<style>
@import '@/assets/base.css';
</style>
