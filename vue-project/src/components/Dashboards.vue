<script setup>
import NavBar from "./NavBar.vue";
import Weather from "./Weather.vue";
import Flight from "./Flight.vue";
</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <NavBar></NavBar>
    <div class="container-fluid">
      <!-- Tabs -->
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#weatherTab"
            >Weather Analysis</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#flightTab"
            >Flight Operations Analysis</a
          >
        </li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane fade show active" id="weatherTab">
          <Weather></Weather>
        </div>
        <div class="tab-pane fade" id="flightTab">
          <Flight></Flight>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
