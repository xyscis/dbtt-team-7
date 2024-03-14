<template>
    <div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="flightNumber" placeholder="Flight Number" aria-label="Flight Number" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" @click="displayFlight">Button</button>
    </div>
    <div class="container">
      <button type="button" class="outputFlight btn btn-primary" v-if="outputButtonVisible" data-bs-toggle="modal" data-bs-target="#flightdetails">{{ flightNumber }}</button>
      <!-- <router-link to="/flightrebooking" type="button" class="outputFlight btn btn-primary" v-if="outputButtonVisible" >{{ flightNumber }}</router-link>-->
     <!-- <router-link :to="{ name: 'FlightRebooking', params: { flightNumber: flightNumber }}" type="button" class="outputFlight btn btn-primary" v-if="outputButtonVisible">{{ flightNumber }}</router-link> -->

    </div>

    <!-- Popup Modal -->
    <div class="modal fade modal-xl" id="flightdetails"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Flight Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3><strong>Flight {{ flightNumber }}</strong></h3>
                    <h4>Status:</h4><h4 class="text-danger">Cancelled</h4>
                    <h4>Departure Time: 9.00 a.m.</h4>
                    <h4>Arrival Time: 10.00 a.m.</h4>

                    <h3>Passenger List</h3>
                    <div class="btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-outline-primary">
                            <input type="checkbox" autocomplete="off"> John
                        </label> <br> 
                        <label class="btn btn-outline-primary">
                            <input type="checkbox" autocomplete="off"> Tim
                        </label> <br>
                        <label class="btn btn-outline-primary">
                            <input type="checkbox" autocomplete="off"> Tam
                        </label> <br>
                        <label class="btn btn-outline-primary">
                            <input type="checkbox" autocomplete="off"> Joe
                        </label> <br>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#flightrebooking" >Make Booking</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-xl" id="flightrebooking"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Choose Flight to Rebook</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-outline-primary">
                            <input type="checkbox" autocomplete="off"> <h3>Flight 1112</h3>
                                <p>Destination: San Juan<br> 
                                    Departure Date: 5 April 2024<br>
                                    Departure Time: 2pm<br>
                                </p>
                                
                        </label> <br> 
                        <label class="btn btn-outline-primary">
                            <input type="checkbox" autocomplete="off"> <h3>Flight 1234</h3>
                                <p>Destination: San Andreas<br> 
                                    Departure Date: 6 April 2024<br>
                                    Departure Time: 4pm<br>
                                </p>
                        </label> <br>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingsuccess" >Confirm Booking</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-xl" id="bookingsuccess"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Booking Successful!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <h3>Booking has been created!</h3>
                        <p>Please alert the customer of the newly created booking!
                        </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    
  </div>
</template>


<script>


export default {
    name: 'PassengerManagement',
    data() {
    return {
      flightNumber: '',
      outputButtonVisible: false
    }
  },
  watch: {
    flightNumber() {
      this.outputButtonVisible = false;
    }
  },
  methods: {
    displayFlight() {
      this.outputButtonVisible = true;
    },
    
    
  }
}
</script>

<style scoped>
.btn-group-toggle .btn {
  width: 90%;
  text-align: left;
}
</style>

