<template>
  
  <div class="container-fluid">
  
    <div class="row">
      <h1 style="text-align: center;">Flights that Need Reassignment</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Crew</th>
            <th>Flight to Reassign to</th>
            <th>Crews to Assign to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              SW1009
             
            </td>
            <td>FA209, FA309</td>
            <td>SW0098</td>
            <td>FA511, FA854</td>
            <td> <input type="checkbox" v-model="selectedFlights['SEA-DEN']" /></td>
          </tr>
          <tr>
            <td>
              SW1010
              
            </td>
            <td>FA210, FA310</td>
            <td>SW0001</td>
            <td>FA124, FA321</td>
            <td><input type="checkbox" v-model="selectedFlights['GEG-MDW']" /></td>
          </tr>
          <tr>
            <td>
              SW1011
             
            </td>
            <td>FA211, FA311</td>
            <td>SW0078</td>
            <td>FA101, FA200</td>
            <td><input type="checkbox" v-model="selectedFlights['ATL-SFO']" /></td>
          </tr>
          <tr>
            <td>
              SW1012

            </td>
            <td>FA212, FA312</td>
            <td>SW1600</td>
            <td>FA184, FA345</td>
            <td><input type="checkbox" v-model="selectedFlights['AUS-GEG']" /></td>
          </tr>
          <tr>
            <td>
              SW1013
            </td>
            <td>FA213, FA313</td>
            <td>SW3524</td>
            <td>FA211, FA223</td>
            <td><input type="checkbox" v-model="selectedFlights['JFK-TPA']" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <button @click="sendData">Send</button>
  <div v-if="showMessage" class="popup">
      <div v-html="popupMessage"></div>
    <button @click="closeMessagePopup">Close</button>
  </div>

</template>

<script>
export default {
  name: "CrewList",

  data() {
    return {
      showOriginalImage: true,
      flightsAssigned: false,
      selectedFlights: {},
      flightsScheduled: false,
      popupMessage: '', // For storing the message to display in the popup
      showMessage: false, // For controlling the visibility of the message popup
    };
  },

  methods: {
    sendData() {
      const flights = [
        { key: 'SEA-DEN', flightNum: 'SW1009', crew: 'FA209, FA309' },
        { key: 'GEG-MDW', flightNum: 'SW1010', crew: 'FA210, FA310' },
        { key: 'ATL-SFO', flightNum: 'SW1011', crew: 'FA211, FA311' },
        { key: 'AUS-GEG', flightNum: 'SW1012', crew: 'FA212, FA312' },
        { key: 'JFK-TPA', flightNum: 'SW1013', crew: 'FA213, FA313' }
      ];

      const selectedFlights = flights.filter(flight => this.selectedFlights[flight.key]);

      if (selectedFlights.length > 1) {
    // Construct a message for multiple flights using HTML list for better formatting
    this.popupMessage = "The following flights and crews have been successfully assigned:<ul>" +
                    selectedFlights.map(flight => `<li>Flight number ${flight.flightNum} with crew ${flight.crew}</li>`).join('') +
                    "</ul>";

  } else if (selectedFlights.length === 1) {
    // Construct a message for a single flight
    const flight = selectedFlights[0];
    this.popupMessage = `Flight number ${flight.flightNum} with crew ${flight.crew} has been newly assigned.`;
  } else {
    // No flights selected
    this.popupMessage = "Please select at least one flight to schedule." // Simple validation feedback
    return; 
  }


      this.showMessage = true; 
    },


    closeMessagePopup(){
      
      this.showMessage=false;
      this.$router.push({ path: '/UpdatedFlightReassignment' });
    }
  },
};
</script>


<style scoped>
.title {
  text-align: center;
  font-size: 24px; /* Slightly larger title font */
  margin-bottom: 30px;
}

.container-fluid {
  margin-top: 10px;
  max-width: 90%; /* Restrict maximum width to avoid overly wide table */
  margin: auto; /* Center the container */
  padding: 20px;
}

table {
  width: 100%;
  background: white;
  border-collapse: collapse; /* Remove gaps between table cells */
  margin-top: 20px; /* Space between title and table */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for the table */
}

th, td {
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


input[type="checkbox"] {
  width: 25px;
  height: 25px;
  cursor: pointer;

}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f9f9f9; /* Softer background color */
  border: none; /* Remove border */
  padding: 40px; /* More padding for better spacing */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* More pronounced shadow */
  max-width: 600px; /* Maximum width to avoid overly wide pop-ups */
  width: 90%; /* Ensure it doesn't stretch too far on smaller screens */
  
}

.popup-content {
  text-align: center;
  font-size: 20px; /* Larger font size for better readability */
  /* color: #333; Darker text for better contrast */
}

.popup button {
  background-color: #007bff; /* Primary button color */
  color: white; /* Text color */
  border: none;
  padding: 12px 24px; /* Larger padding for bigger buttons */
  cursor: pointer;
  border-radius: 5px; /* Rounded button corners */
  font-size: 18px; /* Larger button text */
  margin-top: 20px; /* Space above the button */
  transition: background-color 0.3s; /* Smooth background transition */
}

.popup button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>

