<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      product_type: '',
    }
  }
}
</script>

<template>
  <div>
    <form>
      <p> Twoje dane kontaktowe</p>
      <label>Imię:</label>
      <input type="text" required v-model = "first_name">
      <label>Nazwisko:</label>
      <input type="text" required v-model = "last_name">
      <label>email:</label>
      <input type="email" required v-model = "email">
      <select v-model = "product_type" id='product_options'>
        <option value="1"> Osłony wewnętrzne </option>
        <option value="2"> Osłony zewnętrzne</option>
        <option value="3"> Ogród</option>
      </select>
      <!-- TO DO: Opcja if która wyświetli kolejeny button
      na kolejne wybory
      lub
      slider który otwiera kolejny slider
      -->
      <div><button id="sendBtn">Dalej</button></div>
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