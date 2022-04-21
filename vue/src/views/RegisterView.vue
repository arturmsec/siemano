<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      if(response.error){
        alert(response.error);
      }
      else{
        alert("Zarejestrowano pomyślnie");
      }
      }
    }
  }
</script>

<template>
  <form>
    <h2>Hello! Please register yourself!</h2>
    <input 
      type="email"
      name="email"
      placeholder="email" 
      v-model="email"
      />
      <input 
      type="password"
      name="password"
      placeholder="password" 
      v-model="password"
      />
      <button
        type="button"
        @click="register"
        class = "button">
        Register
      </button>
  </form>
</template>

<style>
@import '@/assets/form.css';
</style>>