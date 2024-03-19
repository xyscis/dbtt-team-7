<template>
  <div>
    <div class="wrapper">
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
            <div class="col chart">
              <div class="title">
                Forcast data
              </div>
              <img
                src="../assets/regression model.PNG"
                alt="Original Bar Chart"
              />
            </div>
          </div>

          <div class="row">
            <div class="data-section">
              <div class="search">
                <select v-model="availabilityFilter">
                  <option value="">All Availabilities</option>
                  <option value="Available">Available</option>
                  <option value="Unavailable">Unavailable</option>
                </select>
                <select v-model="destinationFilter">
                  <option value="">All Destinations</option>
                  <option value="Florida">Florida</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Texas">Texas</option>
                  <option value="Washington">Washington</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Nevada">Nevada</option>
                  <option value="Colorado">Colorado</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Georgia">Georgia</option>
                </select>
                <button v-on:click="sendData">Send</button>
              </div>
              <div class="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Airplane</th>
                      <th>Type</th>
                      <th>Availability</th>
                      <th>Destination</th>
                      <th>Crew</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(flight, index) in filteredFlights" :key="index">
                      <td>{{ flight.airplane.name }}</td>
                      <td>{{ flight.airplane.type }}</td>
                      <td>{{ flight.airplane.availability }}</td>
                      <td>{{ flight.airplane.destination }}</td>
                      <td>{{ flight.crew }}</td>
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
      <p>Flights have been assigned successfully!</p>
      <button @click="flightsAssigned = false">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      availabilityFilter: "",
      typeFilter: "",
      destinationFilter: "",
      showOriginalImage: true,
      flights: Array.from({ length: 1000 }, (_, i) => {
        const states = [
          "Florida",
          "Arizona",
          "Texas",
          "Washington",
          "Illinois",
          "Nevada",
          "Colorado",
          "California",
          "New York",
          "Georgia",
        ];
        const aircraftTypes = [
          "Boeing 737-800",
          "Boeing 737 MAX 8",
          "Boeing 737-700",
        ];
        const crewMembers = [
          "Pilot 1",
          "Pilot 2",
          "Cabin Crew 1",
          "Cabin Crew 2",
        ];
        return {
          airplane: {
            name: `SW Airplane ${i + 1}`,
            type: aircraftTypes[
              Math.floor(Math.random() * aircraftTypes.length)
            ],
            availability: Math.random() > 0.5 ? "Available" : "Unavailable",
            destination: states[Math.floor(Math.random() * states.length)],
          },
          crew: crewMembers.join(", "),
        };
      }),
    };
  },
  computed: {
    filteredFlights() {
      return this.flights.filter((flight) => {
        const matchesType =
          this.typeFilter === "" ||
          flight.airplane.type.includes(this.typeFilter);
        const matchesAvailability =
          this.availabilityFilter === "" ||
          flight.airplane.availability.includes(this.availabilityFilter);
        const matchesDestination =
          this.destinationFilter === "" ||
          flight.airplane.destination.includes(this.destinationFilter);
        return matchesAvailability && matchesDestination;
      });
    },
  },
  methods: {
    sendData() {
      this.showOriginalImage = !this.showOriginalImage; // Toggle the image when 'Send' is clicked
      this.flightsAssigned = true;
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
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: auto;
  
}

table {
  width: 100%;
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
