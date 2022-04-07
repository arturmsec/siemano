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
      <p class="mainParagraph">Twoje dane kontaktowe</p>
      <input
        type="text"
        class="postalCode"
        placeholder="Kod pocztowy *"
        required
        v-model="postal_code"
      />

      <input type="text" class="city" placeholder="Miasto *" required v-model="city" />

      <input type="text" class="street" placeholder="Ulica *" required v-model="street" />

      <input
        type="text"
        class="houseNumber"
        placeholder="Nr lokalu *"
        required
        v-model="apartment_Number1"
      />

      <input
        type="text"
        class="flatNumber"
        placeholder="Nr mieszkania *"
        required
        v-model="apartment_Number12"
      />

      <button class="backButton" @click="$router.push('/formularz')">Poprzedni krok</button>
      <button class="placeOrderButton" @click="$router.push('/')">Zamów pomiar</button>
    </form>
    <p>{{ first_name }}</p>
    <p>{{ last_name }}</p>
    <p>{{ email }}</p>
    <p>{{ product_type }}</p>
  </div>
</template>

<style>
.flatNumber {
  width: 33%;
  display: inline;
  box-sizing: border-box;
  left: 2px;
}

.houseNumber {
  width: 24%;
  display: inline;
  left: 1px;
}

.street {
  width: 43%;
  display: inline-block;
}
.city {
  width: 65%;
  display: inline;
  left: 2px;
}

.postalCode {
  width: 35%;
  display: inline;
}
.mainParagraph {
  font-size: large;
  font-style: bold;
  font-weight: bold;
}
.placeOrderButton {
  margin-right: 0px;
  margin-left: 20px;
}
.backButton {
  margin-right: 20px;
  margin-left: 0px;
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
  border-radius: nope;
  color: #555;
}
button {
  color: rgb(256, 212, 4);
  background-color: black;
  border-width: 2px;
  border-color: black;
  padding: 10px;
  width: 150px;
  margin: 10px;
  font-weight: 850;
}
</style>