<template>
    <div class="card">
        <h3 class="id">{{ order.id }}</h3>
        <h4 class="pri">{{ order.priority }}</h4>
        <h5 class="dat">{{ order.date }}</h5>
        <h2 class="type">{{ order.orderType }}</h2>
        <h4 class="address">{{ order.address }}</h4>
        <h4 class="code">{{ order.postCode }}</h4>
        <h4 class="city">{{ order.city }}</h4>
        <hr>
        <h3 class="name">{{ order.name }}</h3>
        <h3 class="tel">{{ order.nrtel }}</h3>
        <h4 class="desc">{{ order.description }}</h4>
        <button>Zleć</button>
        <button class="buttonTwo">Zaplanuj</button>
    </div>
  
</template>

<script>
export default {
    props: ['order'],


}
</script>

<style>
button {
  display: inline-block;
  color: black;
  background-color: white;
  border-width: 2px;
  border-color: black;
  padding: 8px;
  width: 150px;
  font-weight: 850;
  margin-top: 20px;
}

.city {
    display: inline-block;
    left: 5px;
    position: relative;

}
.code {
    display: inline-block;
    
}
.type {
    text-align: left;
}
.pri {
    display: inline-block;
    text-align: left;
    
}
.dat {
    display: inline-block;
    margin-left: 70%;
}
.buttonTwo {
    margin-left: 20px;
}
.card {
    background: white;
    border: solid;
    border-radius: 3%;
    padding: 5%;
    margin: 10px;

}


</style>