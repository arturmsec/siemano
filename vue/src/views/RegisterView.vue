<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import useVuelidate from '@vuelidate/core'
  import { required, email, minLength, sameAs } from '@vuelidate/validators'
  export default {
    setup () {
    return { v$: useVuelidate() }
   },
    data() {
      return {
        email: '',
        password: '',
      }
    },
    validations() {
      return {
        email: {
          required, 
          email
        },
        password: {
          required,
          min: minLength(6)
        }
      }
    },
    methods: {
    async register () {
        const result = await this.v$.$validate()
        console.log(result)
        if (result) {
          try {
            const response = await AuthenticationService.register({
            login: this.email,
            password: this.password
            })
            if(response.error){
              alert(response.error);
            }
            else{
              alert("Rejestracja zakończona pomyślnie!");
            }
          } catch (error) {
            this.error = error.response.data.error;
            alert(error.response.data.error);
          }
        }
        

      }
    }
  }
</script>

<template>
  <form>
    <h3>Panel rejestracji użytkownika</h3>
    <input 
      type="email"
      placeholder="email" 
      v-model="email"
      />
      <input 
      type="password"
      placeholder="password" 
      v-model="password"
      required
      />
      <button
        type="button"
        @click="register"
        class = "userRegister">
        Register
      </button>
  </form>
</template>

<style>
@import '@/assets/form.css';
input {
  width: 100%;
}
.userRegister{
  color: rgb(256, 212, 4);
  background-color: black;
  border-width: 2px;
  border-color: black;
  margin-left: 240px;
  padding: 10px;
  width: 100px;
  font-weight: 850;
}

</style>