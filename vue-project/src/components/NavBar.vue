<template>
    <nav class="navbar navbar-expand-lg py-3 navbar-white bg-white border rounded-2 border-2 shadow-sm fixed-top">
      <div class="container">
        <router-link to="/home" class="navbar-brand">
          <img src="../assets/Southwest-Airlines-Logo.png" width="100" alt="" class="d-inline-block align-middle mr-2">
        </router-link>
  
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item btn nav-link navbar-btn-hover" :class="{ 'navbar-btn-active': activeButton === 'Flight Reassignment' }" @click="handleFlightReassignment">Flight Reassignment</li>
            <li class="nav-item btn nav-link navbar-btn-hover" :class="{ 'navbar-btn-active': activeButton === 'Passenger Reassignment' }" @click="handlePassengerReassignment">Passenger Reassignment</li>
            <li class="nav-item btn nav-link navbar-btn-hover" :class="{ 'navbar-btn-active': activeButton === 'Dashboards Analysis' }" @click="handleDashboards">Dashboard</li>
           
            <li class="nav-item btn ml-3 nav-link navbar-btn" @click="handleLogin">Logout</li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { onMounted, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  // import useLogout from '../composables/useLogout';
  // import getUser from '../composables/getUser';
  
  export default {
    name: 'NavBar',
    setup() {
      // const { logout, error } = useLogout();
      // const { user } = getUser();
      const router = useRouter();
      const activeButton = ref(null);
      const isBootstrapLoaded = ref(false);
  
      const handleFlightReassignment = () => {
        router.push('/flightreassignment');
        activeButton.value = 'Flight Reassignment';
      };
  
      const handlePassengerReassignment = () => {
        router.push('/passengerreassignment');
        activeButton.value = 'Passenger Reassignment';
      };
  
      const handleDashboards = () => {
        router.push('/dashboards');
        activeButton.value = 'Dashboards Analysis';
      };
  
      const handleLogin = async () => {
        // Implement your login logic here
        router.push('/')
      };
  
      onMounted(() => {
        // Check if Bootstrap is loaded
        if (window.bootstrap && window.bootstrap.Collapse) {
          isBootstrapLoaded.value = true;
        }
        console.log('Bootstrap loaded:', isBootstrapLoaded.value);
      });
  
      watch(isBootstrapLoaded, (loaded) => {
        if (loaded) {
          const collapseElements = document.querySelectorAll('[data-bs-toggle="collapse"]');
          collapseElements.forEach((element) => {
            new window.bootstrap.Collapse(element);
          });
          console.log('Bootstrap collapse initialized');
        }
      });
  
      return { handleFlightReassignment, handlePassengerReassignment, handleDashboards, handleLogin, activeButton };
    },
  };
  </script>
  
  <style scoped>
  .nav-link.aria-current {
    background-color: #f5f5f5; 
    border-bottom: 2px solid #000;
  }
  .nav-item {
    margin: 10px;
  }
  
  .navbar-btn-hover:hover, .navbar-btn-active {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    font-weight: bold;
  }
  .navbar-btn:hover {
    background-color: #ffffff;
    color: red;
    font-weight: bold;
  }
  
  
  .navbar-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .navbar-nav .nav-item {
    flex: 1;
    text-align: center;
  }
  .navbar-brand:hover {
    background-color: transparent; /* Change to the desired background color or none */
  }
  </style>