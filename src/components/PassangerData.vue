<template>
<div class ="container">
  <div class="row">
     <div class="col text-left">
      <small>Passanger</small>
      <p><b>Mr. Gavin Alfons</b></p>
  </div>
   <div class="col text-right">
      <button type="button" class="btn btn-primary">  Add-os  </button>
    </div>

  </div>
  <div class="row text-center">
      <div class="col">
                <small>Terminal</small> 
                <p>T#</p> 
        </div>
         <div class="col">
                <small>Checking</small> 
                <p>D5</p> 
            </div>
           <div class="col">
                <small>Gate</small> 
                <p>C</p> 
            </div>
            <div class="col">
                <small>Boarding</small> 
                <p>6:55</p> 
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
  name: 'PassangerData'
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  margin-top: 15px;
  border-radius: 1.95rem;
}
.btn-primary{
  width: 120px;
}
</style>
