<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <div class="header">
          Flight Reassignment
        </div>
        <div class="content">
          <div class="chart">
            <img src="../assets/barchart.PNG" alt="Bar Chart">
          </div>
          <div class="data-section">
            <div class="search">
              <select v-model="availabilityFilter">
                <option value="">All Availabilities</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
              <select v-model="typeFilter">
                <option value="">All Types</option>
                <option value="Boeing 737-800">Boeing 737-800</option>
                <option value="Boeing 737 MAX 8">Boeing 737 MAX 8</option>
                <option value="Boeing 737-700">Boeing 737-700</option>
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
              <!-- <input type="text" placeholder="Search crews and airplanes..." v-model="searchQuery"> -->
            </div>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Airplane</th>
                    <th>Type</th>
                    <th>Availability</th>
                    <th>Destination</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(airplane, index) in airplanes" :key="index">
                    <td>{{ airplane.name }}</td>
                    <td>{{ airplane.type }}</td>
                    <td>{{ airplane.availability }}</td>
                    <td>{{ airplane.destination }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      availabilityFilter: '',
      typeFilter: '',
      destinationFilter: '',
      airplanes: Array.from({ length: 100 }, (_, i) => {
        const states = ["Florida", "Arizona", "Texas", "Washington", "Illinois", "Nevada", "Colorado", "California", "New York", "Georgia"];
        const aircraftTypes = ["Boeing 737-800", "Boeing 737 MAX 8", "Boeing 737-700"];
        return {
          name: `SW Airplane ${i + 1}`,
          type: aircraftTypes[Math.floor(Math.random() * aircraftTypes.length)],
          availability: Math.random() > 0.5 ? "Available" : "Unavailable",
          destination: states[Math.floor(Math.random() * states.length)],
        };
      }),
    };
  },
  computed: {
    filteredAirplanes() {
      return this.airplanes.filter(airplane => {
        const matchesType = this.typeFilter === '' || airplane.type.includes(this.typeFilter);
        const matchesAvailability = this.availabilityFilter === '' || airplane.availability.includes(this.availabilityFilter);
        const matchesDestination = this.destinationFilter === '' || airplane.destination.includes(this.destinationFilter);
        return matchesType && matchesAvailability && matchesDestination;
      });
    },
  },
};
</script>


<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: space-around; /* Adjusted for space between chart and table */
  padding: 0 20px;
}

.chart, .data-section {
  width: 50%; /* Adjust width as needed */
}

.chart img {
  width: 100%;
}

.table-container {
  max-height: 60vh; /* Adjust based on your needs */
  overflow-y: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

.search {
  margin-bottom: 20px;
}
</style>
