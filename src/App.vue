<template>
  <div id="app">
    <div class="container">
      <div class="row b">
        <div class="col text-left" style=" font-size: 1.5em; height: 1px;">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>
        <div class="col text-right" style=" font-size: 1.2em; height: 1px;">
             <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
            <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
            </svg>
        </div>
        <div class="w-100"></div>
        <div class="col text-left">
            <h2>CGK</h2>
            <small>Jakarta ID</small>
        </div>
           <div class="col text-right">
            <h2>LHR</h2>
            <small>London, UK</small>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
            <div class="card" style="width: 100%">
              <TripData />
            </div>
        </div>
         <div class="col-sm">
            <div class="card" style="width: 100%;margin-top:15px;">
                <PassangerData />
            </div>
        </div>
      </div>
    </div> 
    <div class="end">
      <!-- <button @click="getLanguage">Get Language</button> -->
       <button  type="button" class="btn btn-warning">
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M18 3H6v4h12m1 5a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-3 7H8v-5h8m3-6H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3z" fill="#626262"/></svg>
         Print Ticket</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import TripData from './components/TripData.vue'
import PassangerData from './components/PassangerData.vue'
export default {
  name: 'App',
  components:{
   PassangerData,
   TripData
  }

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.b{
  height: 30vh;
  background-color:#0060d7;
  color:white;
}
  .card{
    padding: 2px;
    margin-top: -45px;
    border-radius: 0.8rem;
    -webkit-box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.79);
    -moz-box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.79);
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.79);
}
.end{
  margin-top: 15px;
  text-align: center;
}

</style>
