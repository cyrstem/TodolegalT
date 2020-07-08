<template>
<div class ="container">
  <div class="row">
     <div v-for="pData in pDatas" :key="pData.id" class="col text-left">
        <div ></div>
      <small>Passanger</small>
      <p><b>{{pData.id}}</b></p>
  </div>
   <div class="col text-right">
      <button type="button" class="btn btn-primary">  Add-os  </button>
    </div>

  </div>
  <div class="row text-center">
      <div v-for="pData in pDatas" :key="pData.terminal" class="col">
                <small>Terminal</small> 
                <p>{{pData.terminal}}</p> 
        </div>
         <div v-for="pData in pDatas" :key="pData.checking" class="col">
                <small>Checking</small> 
                <p>{{pData.checking}}</p> 
            </div>
           <div v-for="pData in pDatas" :key="pData.gate"  class="col">
                <small>Gate</small> 
                <p>{{pData.gate}}</p> 
            </div>
            <div v-for="pData in pDatas" :key="pData.boarding"  class="col">
                <small>Boarding</small> 
                <p>{{pData.boarding}}</p> 
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

export default {
  name: 'PassangerData',
 data() {
    return {
      pDatas: [
        {
          id: "Mr. Gavin Alfons",
          terminal: "T3",
          checking: "D5",
          gate: "C",
          boarding: "6:55"
        }
      ]
    };
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
