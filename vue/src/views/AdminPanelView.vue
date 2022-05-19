<template>
  <div class="adminPanel">
    <div class="viewChange">
      Zmiana widoku
    </div>
    <div class="topPanel">
      Panel górny
    </div>    
   
    <div class="orders"> 
          <OrderCard
            v-for="order in orders"
            :key="order.id"
            :order="order"
          />
    </div> 
    <div class="map">
      <GMapMap class="map"
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      
      ></GMapMap>
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
  position: fixed;
  display: inline-block;
  z-index: 1;
  margin-top: 40px;
  width: 100%;
  height: 80px;
  background: rgb(230, 207, 173);
}
.topPanel {
  position: fixed;
  z-index: 1;
  margin-top: 120px;
  width: 100%;
  height: 80px;
  background: lightblue;
}
.orders {
  margin-top: 200px;
  height: 60vh;
  width: 30%;
  float: left;
}
.map {
  position: fixed;
  display: inline-block;
  margin-top: 100px;
  height: 79%;
  width: 70%;
 
} 
.wrapper{
  position:fixed;
  top: 0px;
  z-index: 2;
}

</style>








