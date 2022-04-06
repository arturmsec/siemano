<script>
export default {
  data() {
    return {
      postalCode: this.postalCode,
      city: this.city,
      street: this.street,
      homeNumber: this.homeNumber,
      localNumber: this.localNumber,
      clientMessage: this.clientMessage
    }

  }
}
</script>

<template>
  <div>
    <form>
      <p> Adres pomiaru</p>
      <input 
        type="text" 
        required 
        v-model = "postalCode"
        placeholder="Kod pocztowy *">
      <input 
        type="text" 
        required 
        v-model = "city"
        placeholder="Miasto *">
      <input 
        type="text" 
        required 
        v-model = "street"
        placeholder="Ulica *">
      <input 
        type="text" 
        required 
        v-model = "homeNumber"
        placeholder="Nr lokalu *">
      <input 
        type="text" 
        required 
        v-model = "localNumber"
        placeholder="Nr mieszkania *">
      <input 
        type="text" 
        required 
        v-model = "clientMessage"
        placeholder="Napisz wiadomość">
        
      <button type = "button" @click="$router.push('/formularz')">
        Poprzedni krok
      </button>
      <button type = "button" @click="$router.push('/')">
        Zamów pomiar
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