<template>
  <NavBar></NavBar>
  <div>
    <div class="wrapper">

      <div class="container">

      <div class="container border border-4 rounded-3 bg-white bg-gradient p-5"> 


        <div class="row content">
          <div class="row">
            <div class="col chart">
              <div class="title">
                Real-time monitoring on the number of flight requests
              </div>
              <img
                v-if="showOriginalImage"
                src="../assets/barchart.PNG"
                alt="Original Bar Chart"
              />
              <img v-else src="../assets/barchart2.PNG" alt="New Bar Chart" />
            </div>

            <!-- <div class="col chart">
              <div class="title">Forcast data</div>

            <div class="col chart">
              <div class="title">
                Forecast data
              </div>

              <img
                src="../assets/regression model.PNG"
                alt="Original Bar Chart"
              />
            </div> -->
          </div>

          <div class="row">
            <div class="data-section">
              <div class="search">
                <button v-on:click="scheduleFlight">Schedule</button>
              </div>
              <div class="table-container">
                <table border="1">
                  <thead>
                    <tr>
                      <th>Flight Number</th>
                      <th>Origin</th>
                      <th>Destination</th>
                      <th>Date</th>
                      <th>Scheduled Departure</th>
                      <th>Departure</th>
                      <th>Scheduled Arrival</th>
                      <th>Arrival</th>
                      <th>Flight Status</th>
                      <th>Aircraft Type</th>
                      <th>Crew ID (Cabin Crew)</th>
                      <th>Distance (miles)</th>
                      <th>Scheduled Departure Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SW1009</td>
                      <td>SEA</td>
                      <td>DEN</td>
                      <td>2024-07-01</td>
                      <td>2024-07-04</td>
                      <td>09:15:00</td>
                      <td>2024-07-07</td>
                      <td>09:00</td>
                      <td>Delayed</td>
                      <td>Boeing 737-700</td>
                      <td>FA209, FA309</td>
                      <td>1022</td>
                      <td>2024-07-04</td>
                    </tr>
                    <tr>
                      <td>SW1010</td>
                      <td>GEG</td>
                      <td>MDW</td>
                      <td>2024-09-01</td>
                      <td>2024-09-02</td>
                      <td>09:15:00</td>
                      <td>2024-09-05</td>
                      <td>09:00</td>
                      <td>Cancelled</td>
                      <td>Boeing 737 MAX 8</td>
                      <td>FA210, FA310</td>
                      <td>1507</td>
                      <td>2024-09-02</td>
                    </tr>
                    <tr>
                      <td>SW1011</td>
                      <td>ATL</td>
                      <td>SFO</td>
                      <td>2024-05-25</td>
                      <td>2024-05-27</td>
                      <td>09:15:00</td>
                      <td>2024-05-30</td>
                      <td>09:00</td>
                      <td>Cancelled</td>
                      <td>Boeing 737 MAX 7</td>
                      <td>FA211, FA311</td>
                      <td>2134</td>
                      <td>2024-05-27</td>
                    </tr>
                    <tr>
                      <td>SW1012</td>
                      <td>AUS</td>
                      <td>GEG</td>
                      <td>2024-02-17</td>
                      <td>2024-02-19</td>
                      <td>09:15:00</td>
                      <td>2024-02-22</td>
                      <td>09:00</td>
                      <td>Delayed</td>
                      <td>Boeing 737-800</td>
                      <td>FA212, FA312</td>
                      <td>1600</td>
                      <td>2024-02-19</td>
                    </tr>
                    <tr>
                      <td>SW1013</td>
                      <td>JFK</td>
                      <td>TPA</td>
                      <td>2024-11-26</td>
                      <td>2024-11-28</td>
                      <td>09:15:00</td>
                      <td>2024-11-30</td>
                      <td>09:00</td>
                      <td>Delayed</td>
                      <td>Boeing 737-800</td>
                      <td>FA213, FA313</td>
                      <td>1006</td>
                      <td>2024-11-28</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="flightsAssigned" class="popup">
    <div class="popup-content">
      <h4>Available Flights</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Select</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Aircraft Availability</th>
            <th>Crew Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" v-model="selectedFlights['SEA-DEN']" />
            </td>
            <td>SEA</td>
            <td>DEN</td>
            <td>09:20:00</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="selectedFlights['GEG-MDW']" />
            </td>
            <td>GEG</td>
            <td>MDW</td>
            <td>09:20:00</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="selectedFlights['ATL-SFO']" />
            </td>
            <td>ATL</td>
            <td>SFO</td>
            <td>09:20:00</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="selectedFlights['AUS-GEG']" />
            </td>
            <td>AUS</td>
            <td>GEG</td>
            <td>09:20:00</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" v-model="selectedFlights['JFK-TPA']" />
            </td>
            <td>JFK</td>
            <td>TPA</td>
            <td>09:20:00</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <button @click="closePopup">Send</button>
    </div>
    
  </div>
  <div v-if="flightsScheduled" class="popup">
  <div class="popup-content">
    <p>Flights have been successfully assigned !</p>
    <button  @click="closeMsg">Close</button>
  </div>
</div>
  
</template>


<script setup>
  import NavBar from './NavBar.vue';
</script>


<script>
export default {
  data() {
    return {
      showOriginalImage: true,
      flightsAssigned: false,
      selectedFlights: {},
      flightsScheduled: false,
    

    };
  },

  methods: {
    closePopup() {
      const hasSelectedFlights = Object.values(this.selectedFlights).some(selected => selected);
      if (hasSelectedFlights) {
        this.flightsAssigned = false; 
        this.flightsScheduled = true; 
        this.showOriginalImage = !this.showOriginalImage; 
    
      } else {
        alert('Please select at least one flight to schedule.'); // Simple validation feedback.
      }
    },
    closeMsg(){

      this.flightsScheduled= false;
    },
    scheduleFlight(){
      this.flightsAssigned = true;
    },
    sendData() {
      
      this.flightsScheduled = true;
      
      
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.wrapper {
  display: flex;
  align-items: left;
  height: 70vh;
  width: 70vw;
}

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 20px 0;
}

.content {
  flex: 1;
  display: flex;
  padding: 0 20px;
}

.chart {
  flex: 1;
}

.data-section {
  flex: 1;
}

.chart img {
  width: 100%;
  max-width: 800px;
}

.table-container {
max-height: 80vh;

  max-height: 50vh;

  overflow-y: auto;
  overflow-x: auto;
  
}

table {
  width: auto;
  margin-left: 10px;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

.search {
  margin-bottom: 20px;
  text-align: center;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.popup-content {
  text-align: center;
}

.popup button {
  margin-top: 10px;
}
</style>
