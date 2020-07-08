<template>
<div class ="container">
  <div class="row">
     <div class="col text-left">
      <small>Passenger</small>
      <p><b>{{PassangerData}}</b></p>
  </div>
   <div class="col text-right">
      <button type="button" class="btn btn-primary">  Add-os  </button>
    </div>
      <p></p>
  </div>
  <div class="row text-center">
      <div class="col">
                <small>Terminal</small> 
                <p></p> 
        </div>
         <div class="col">
                <small>Checking</small> 
                <p></p> 
            </div>
           <div  class="col">
                <small>Gate</small> 
                <p></p> 
            </div>
            <div class="col">
                <small>Boarding</small> 
                <p></p> 
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
      flight:[]
    }
  },async mounted() {
    try{
      const res = await axios.post(
        'http://localhost:4000/graphql',{
          query:'{fData { flightNumber,terminalNumber,gate,checkIn,boarding}}'
        })
        this.flight =res.data.data.fData
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
