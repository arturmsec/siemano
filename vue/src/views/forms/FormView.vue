<script>
  import FormService from '@/services/FormService'
  export default {
    data() {
      return {
        firstName: 'Tomasz Bobek',
        phone: '531531531',
        mail: 'Tomasz.Bobek@gmail.com',
        product: '',
      }
  },
    methods: {
      async saveClientInfo () {
        const response = await FormService.saveClientInfo( {
        name: this.name,
        phone: this.phone,
        mail: this.mail,
        product: this.product,
      })
      }
    }
  }
</script>

<template>
  <div>
    <form>
      <p>Twoje dane kontaktowe</p>
      <input
        class="name"
        type="text"
        placeholder="Imię *"
        required
        pattern="[a-zA-ZÀ-ž]{57}+"
        v-model="name"
      />
      <input
        class="telNumb"
        type="tel"
        placeholder="Podaj nr telefonu *"
        required
        pattern="[0-9]{9}"
        v-model="phone"
      />
      <input 
      class="mail" 
      type="email" 
      placeholder="Podaj adres e-mail *" 
      required 
      v-model="mail" />
      <select 
      v-model="product" 
      required 
      id="product">
        <option value disabled selected hidden>Wybierz typ produktu *></option>
        <option value="1">Osłony wewnętrzne</option>
        <option value="2">Osłony zewnętrzne</option>
        <option value="3">Ogród</option>
      </select>
      <button type = "button" @click="saveClientInfo">Dalej</button>
    </form>
  </div>
</template>

<style>
.mail {
  width: 50%;
  display: inline;
  left: 1px;
}
.telNumb {
  width: 50%;
  display: inline;
}

.surname {
  width: 100%;
  display: block;
}

.name {
  width: 100%;
}

p {
  font-size: large;
  font-style: bold;
  font-weight: bold;
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
select#product_options {
  display: block;
  padding: 10px 6px;
  margin: 20px auto;
  width: 100%;
  box-sizing: borrder-box;
  border-style: solid;
  border-color: rgba(180, 180, 180, 0.829);
  border-width: 2px;
  color: #555;
}
button {
  color: rgb(256, 212, 4);
  background-color: black;
  border-width: 2px;
  border-color: black;
  padding: 10px;
  width: 200px;
  margin-left: 140px;
  font-weight: 850;
}
</style>