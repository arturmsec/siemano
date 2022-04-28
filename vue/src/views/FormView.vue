<script>
import FormService from '@/services/FormService'
export default {
  data() {
    return {
      name: this.name,
      phone: this.phone,
      mail: this.mail,
      product: this.product,
      postalCode: this.postalCode,
      city: this.city,
      street: this.street,
      homeNumber: this.homeNumber,
      localNumber: this.localNumber,
      clientMessage: this.clientMessage,
      state: 1
    }
  },
  methods: {
    async saveClientInfo() {
      const response = await FormService.saveClientInfo({
        name: this.name,
        phone: this.phone,
        mail: this.mail,
        product: this.product,
        postCode: this.postalCode,
        city: this.city,
        street: this.street,
        homeNumber: this.homeNumber,
        localNumber: this.localNumber,
        message: this.clientMessage
      })
      if (response.error){
        this.$toast.error("Błąd: " + response.error);        
      }
      else{
        this.$toast.success("Przyjęto zamówienie pomiaru!")
      }
    },
    changeState() {
      if (this.state === 1) {
        this.state++
      }
      else {
        this.state--
      }
    }
  }
}
</script>

<template>
  <div>
    <form v-if="state === 1">
      <p>Umówienie pomiaru krok {{ state }} z {{ state + 1 }}</p>
      <p class="mainParagraph">Twoje dane kontaktowe</p>
      <input
        class="name"
        type="text"
        placeholder="Imię i nazwisko*"
        required
        pattern="[a-zA-Z]{57}"
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

      <select v-model="product" required id="product">
        <option value disabled selected hidden>Wybierz typ produktu *</option>
        <option value="Osłony wewnętrzne">Osłony wewnętrzne</option>
        <option value="Osłony zewnętrzne">Osłony zewnętrzne</option>
        <option value="Ogród">Ogród</option>
      </select>
      <button type="button" class="buttonForm1" @click="changeState">Dalej</button>
    </form>

    <form v-else>
      <p>Umówienie pomiaru krok {{ state }} z {{ state }}</p>
      <p class="mainParagraph">Adres pomiaru</p>
      <input
        type="text"
        class="postalCode"
        placeholder="Kod pocztowy *"
        required
        v-model="postalCode"
      />
      <input 
        type="text" 
        class="city" 
        placeholder="Miasto *" 
        required 
        v-model="city" />

      <input 
      type="text"
      class="street" 
      placeholder="Ulica *" 
      required 
      v-model="street" />

      <input
        type="text"
        class="houseNumber"
        placeholder="Nr lokalu *"
        required
        v-model="homeNumber"
      />

      <input
        type="text"
        class="flatNumber"
        placeholder="Nr mieszkania *"
        required
        v-model="localNumber"
      />
      <textarea
        type="text"
        class="message"
        placeholder="Zostaw nam wiadomość! ;>"
        required
        v-model="clientMessage">
      </textarea>

      <button 
        type="button" 
        class="backButton buttonForm2" 
        @click="changeState">
        Poprzedni krok
      </button>
      <button
        type="button"
        class="placeOrderButton buttonForm2"
        @click="saveClientInfo">
        Zamów pomiar
      </button>
    </form>
  </div>
</template>

<style>
@import '@/assets/form.css';
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

select#product {
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
.buttonForm2 {
  color: rgb(256, 212, 4);
  background-color: black;
  border-width: 2px;
  border-color: black;
  padding: 10px;
  width: 150px;
  font-weight: 850;
  margin-top: 10px;
}
.buttonForm1 {
  color: rgb(256, 212, 4);
  background-color: black;
  border-width: 2px;
  border-color: black;
  padding: 10px;
  width: 200px;
  margin-left: 140px;
  font-weight: 850;
}
.message {
  width: 100%;
  height: 100px;
  display: block;
}
</style>