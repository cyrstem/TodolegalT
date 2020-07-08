<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <p>Depart</p>
                <h3>12:45</h3>
            </div>
            <div class="col text-center">  
                 <img alt="logo" src="../assets/emirates.png">
            </div>
            <div class="col text-right">
                <p class="">Arrive</p> 
                <h3><b>17:55</b></h3> 
            </div>
            <div class="w-100"></div>

            <div class="col-md-auto text-center">
                <button type="button" class="btn btn-outline-success">10h 05m 0stop</button>
            </div>
            <div class="w-100"></div>
           
            <div class="col text-left">
                <p>Monday</p>
                <small>November 18</small>
            </div>
            <div class="col text-center">
                <p>ETA490</p>
                <small>eee</small>
            </div>
            <div class="col text-right">
                <p>Sunday</p> 
                <small>November 29</small> 
            </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TripData',
  data(){
      return {
          flight: []
      }
  },
  async mounted(){
      try{
          const res = await axios.post(
              'http://localhost:4000/graphql',{
                  query:`{ hello }`
              })
              this.flight = res.data.data.hello
        }catch (e){
            console.log('err',e)
        }
  }
}
</script>

