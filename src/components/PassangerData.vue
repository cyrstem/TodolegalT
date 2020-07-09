<template>
<div class ="container">
  <div class="row">
     <div  class="col text-left">
      <small>Passenger</small>
      <p><b></b></p>
  </div>
   <div class="col text-right">
      <button type="button" class="btn btn-primary">  Add-os  </button>
    </div>
  </div>
  <div class="row text-center">
      <div v-for="flight in flights" :key="flight.terminalNumber" class="col">
                <small>Terminal</small> 
                <p>{{flight.terminalNumber}}</p> 
        </div>
         <div v-for="flight in flights" :key="flight.checkIn" class="col">
                <small>Checking</small> 
                <p>{{flight.checkIn}}</p> 
            </div>
           <div v-for="flight in flights" :key="flight.gate" class="col">
                <small>Gate</small> 
                <p>{{flight.gate}}</p> 
            </div>
            <div v-for="flight in flights" :key="flight.boarding" class="col">
                <small>Boarding</small> 
                <p>{{flight.boarding}}</p> 
            </div>
  </div>
  <hr>
    <div class="row">
      <div class="col">
                <small>Barcode</small> 
                <p>result</p> 
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PassangerData',
  data() {
    return {
      flights:[]
    }
  },async mounted() {
    try{
      const res = await axios.post(
        'http://localhost:4000/graphql',{
          query:'{fData{flightNumber,terminalNumber,checkIn,gate,boarding,passenger{passengerName}}}'
        })
        this.flights =res.data.data.fData
    }catch(e){
      console.log('err',e)
    }
  }
}

</script>
<style scoped>
.btn{
  margin-top: 15px;
  border-radius: 1.95rem;
}
.btn-primary{
  width: 120px;
}
</style>
