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
      }
    }
  }
</script>

<template>
  <div>
    <h2>This is Registry View</h2>
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
        @click="register">
        Register
      </button>
  </div>
</template>

<style>
</style>>