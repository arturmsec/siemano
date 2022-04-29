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
          Zamówienia
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








