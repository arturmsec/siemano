<script>
export default {
  data() {
  }
}
</script>

<template>
  <div>
    <form>
      <p> Twoje dane kontaktowe</p>
      <label>Kod pocztowy:</label>
      <input type="text" required v-model = "postal_code">

      <label>Miasto:</label>
      <input type="text" required v-model = "city">

      <label>ulica:</label>
      <input type="text" required v-model = "street">

      <label>nr lokalu:</label>
      <input type="text" required v-model = "apartment_Number1">

      <label>nr mieszkania:</label>
      <input type="text" required v-model = "apartment_Number12">
    
      <button @click="$router.push('/formularz')">
      Poprzedni krok
      </button>
      <button @click="$router.push('/')">
      Zamów pomiar
      </button>
    </form>
    <p> {{first_name}} </p>
    <p> {{last_name}} </p>
    <p> {{email}} </p>
    <p> {{product_type}} </p>
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