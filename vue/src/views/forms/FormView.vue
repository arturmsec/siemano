<script>
  import FormService from '@/services/FormService'
  export default {
    data() {
      return {
        firstName: 'Tomasz Bobek',
        phone: '531531531',
        mail: 'Tomasz.Bobek@gmail.com',
        product: 'A co Cie to?',
      }
  },
    methods: {
      async saveClientInfo () {
        const response = await FormService.saveClientInfo( {
        name: this.firstName,
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
      <p> Twoje dane kontaktowe</p>
      <input 
        v-model = "firstName"
        type="text"
        placeholder="Imię *">
      <input 
        v-model = "phone"
        type="tel" 
        placeholder="Podaj nr telefonu *">
      <input 
        v-model = "mail"
        type="email" 
        placeholder="Podaj adres e-mail *" >
      <select 
        v-model = "product"
        id='product_options'>
        <option value="" disabled selected hidden> Wybierz typ produktu *> </option>
        <option value="1"> Osłony wewnętrzne </option>
        <option value="2"> Osłony zewnętrzne</option>
        <option value="3"> Ogród</option>
      </select>
      <button type = "button" @click = "saveClientInfo"> Dalej </button>
    </form>
  </div>
</template>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: gray;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: borrder-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
select#product_options {
  display: block;
  padding: 10px 6px;
  margin: 20px auto;
  width: 100%;
  box-sizing: borrder-box;
  border-radius: nope;
  color: #555;
}

</style>