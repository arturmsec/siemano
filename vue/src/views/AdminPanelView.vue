<template>
  <div class="adminPanel">
    <div class="viewChange">
      Zmiana widoku
    </div>
    <div class="topPanel">
      Panel górny
    </div>
   <div class="row">

      <div class="col">
        <div class="orders"> 
          <OrderCard
            v-for="order in orders"
            :key="order.id"
            :order="order"
          />
        </div>
      </div>

      <div class="col">
        <div class="map">
          Mapa
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import orders from '../data/orders.js'    //import danych testowych
import OrderCard from './components/OrderCard.vue'

export default{
  name: 'AdminPanelView',
  components: {
    OrderCard 
  },
  data (){
    return {
      orders: orders
    }
  }
}
</script>


<style>
.viewChange {
  height: 50px;
  background: rgb(230, 207, 173);
}
.topPanel {
  height: 80px;
  background: lightblue;
}
.orders {
  height: 60vh;
  width: 30%;
  float: left;
  background: rgb(210, 181, 181);
}
.map {
  height: 60vh;
  width: 70%;
  float: right;
  background: rgb(149, 199, 119);
}
</style>








