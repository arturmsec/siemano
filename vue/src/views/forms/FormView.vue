<script>
export default {
  data() {
    return {
      firstName: 'Tomek',
      lastName: 'Kowalski',
      phoneNumber: '123456789',
      email: 'Tom.kowal69@o2.pl',
      productType: '3',
    }
  },
  methods: {
    async saveData () {
      const response = await FormService.saveData( {
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      productType: this.productType,
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
        type="text"
        placeholder="Imię *"  
        required 
        pattern="[a-zA-ZÀ-ž]{57}+"
        v-model = "firstName">
        <input 
        type="text"
        placeholder="Nazwisko *"  
        pattern="[a-zA-ZÀ-ž]{27}+"
        required 
        v-model = "lastName">
      <input 
        type="tel" 
        placeholder="Podaj nr telefonu *" 
        required 
        pattern="[0-9]{9}"
        v-model = "phoneNumber">
      <input 
        type="email" 
        placeholder="Podaj adres e-mail *" 
        required 
        v-model = "email">
      <select 
        v-model = "productType" 
        required
        id='product_options'>
        <option value="" disabled selected hidden> Wybierz typ produktu *> </option>
        <option value="1"> Osłony wewnętrzne </option>
        <option value="2"> Osłony zewnętrzne</option>
        <option value="3"> Ogród</option>
      </select>
      <button @click="saveData, $router.push('/formularz2')">
        Dalej
      </button>
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