<template>
  <NavBar></NavBar>
  <div>
    <div class="wrapper">
      <div class="container-fluid">
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
          <div class="col">
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="search">
          <button v-on:click="scheduleFlight">Schedule</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="flightsAssigned" class="popup">
    <div class="popup-content">
      <p>Flights have been assigned successfully!</p>
      <button @click="closePopup">Close</button>
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
      <button @click="closeMsg">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOriginalImage: true,
    };
  },

  methods: {
    scheduleFlight() {
      // this.flightsAssigned = true;
      this.$router.push({ path: "/CrewList" });
    },

  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
  color: #333; /* Darker font color for better readability */
  font-weight: bold; /* Make title font bolder */
}

.container-fluid {
  max-width: 90%; /* Restrict maximum width to avoid overly wide table */
  margin: auto; /* Center the container */
  padding: 20px;

  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Soft shadow around the container */
}

table {
  width: 100%;
  background: white;
  border-collapse: collapse; /* Remove gaps between table cells */
  margin-top: 20px; /* Space between title and table */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for the table */
}

th,
td {
  border: 1px solid #ddd; /* Lighter border color */
  padding: 12px 15px; /* More padding for table cells */
  text-align: left; /* Align text to the left */
  font-size: 18px; /* Slightly larger font-size for better readability */
}

th {
  background-color: #007bff; /* Use a solid color for header background */
  color: white; /* White text color for the header */
  text-transform: uppercase; /* Make header texts uppercase */
}

tr:nth-child(even) {
  background-color: #f2f2f2; /* Zebra striping for rows */
}

button {
  background-color: #007bff; /* Bootstrap primary color */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px; /* Rounded corners for buttons */
  font-size: 18px; /* Larger font-size for better readability */
  transition: background-color 0.3s ease; /* Smooth transition for mouse hover */
}

button:hover {
  background-color: #0056b3; /* Darker shade for hover effect */
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px; /* Rounded corners for popup */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* More pronounced shadow for popup */
}

.popup-content {
  text-align: center;
}

.popup button {
  margin-top: 10px;
}

/* Add additional styles here for other elements as needed */
</style>
