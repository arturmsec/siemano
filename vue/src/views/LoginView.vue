<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data() {
      return {
        email: '',
        password:  ''
      }
    },
    methods: {
      async login () {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
      })
      if(response.error){
        this.$toast.error(response.error);
      }
      else{
        this.$toast.success('Zalogowano pomyślnie!');
      }
    }
  }
  
  }
</script>

<template>
  <div>
    <form>
      <h3 style="text-align:center">Panel logowania dla Użytkownika</h3>
      <input 
        class="email"
        type="email"
        name="email"
        placeholder="Podaj adres mailowy *"
        required
        v-model="email"
      />
      <input 
        class="password"
        type="password"
        name="password"
        placeholder="Podaj swoje hasło *"
        required
        pattern="[a-zA-Z]{57}"
        v-model="password"
      />
      <button
        type="button"
        class="userLogin"
        @click="login">
        Zaloguj
      </button>
    </form>
  </div>
</template>

<style>
.email {
  width: 100%; 
}

.password {
  width: 100%;
}

.userLogin{
  color: rgb(256, 212, 4);
  background-color: black;
  border-width: 2px;
  border-color: black;
  margin-left: 240px;
  padding: 10px;
  width: 100px;
  font-weight: 850;
}

form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
}

input {
  display: block;
  margin-top: 20px;
  padding: 10px 6px;
  box-sizing: borrder-box;
  border-style: solid;
  border-color: rgba(180, 180, 180, 0.829);
  border-width: 3px;
  color: #555;
}
</style>