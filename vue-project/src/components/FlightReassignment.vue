<template>
    <div>
      <div class="container">
        <div class="header">
          Flight Reassignment
        </div>
        <div class="content">
          <div class="chart">
            <img src="../assets/barchart.PNG" alt="Bar Chart">
          </div>
          <div>
            <div class="search">
              <input type="text" placeholder="Search crews and airplanes..." v-model="searchQuery">
            </div>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Airplane</th>
                    <th>Type</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(airplane, index) in airplanes" :key="index">
                    <td>{{ airplane.name }}</td>
                    <td>{{ airplane.type }}</td>
                    <td>{{ airplane.availability }}</td>
                  </tr>
                </tbody>
              </table>
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
        airplanes: Array.from({ length: 100 }, (_, i) => ({
          name: `Airplane ${i + 1}`,
          type: Math.random() > 0.5 ? "Commercial" : "Private",
          availability: Math.random() > 0.5 ? "Available" : "Unavailable",
        })),
      };
    },
  };
  </script>
  
  <style scoped>
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
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .search {
    margin-bottom: 20px;
  }
  
  .chart {
    width: 50%;
  }
  
  .chart img {
    width: 100%;
  }
  
  .table-container {
    max-height: calc(100vh - 200px);
    width: 45%;
    overflow-y: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  </style>
  