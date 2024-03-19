<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
</script>


  

<template>
  <div id="app" class="container border border-4 rounded-3 bg-white bg-gradient bg-opacity-75 p-5">
  <div>
    <img alt="Vue logo" class="logo" src="../assets/home.png" width="400px" height="400px" />
  </div>
  <div >

    <WelcomeItem  >
    <template #icon>
      <DocumentationIcon />
    </template>
    <router-link to="/flightreassignment" type="button" class="btn btn-outline-dark">
      <div class=" text-start"><h3>Flight Reassignment</h3></div>
    

    <p class="text-start">Allows you to reassign planes and crews in response to flight cancellations or disruptions</p>
  </router-link>
  </WelcomeItem>

  
  <WelcomeItem>
    
      <template #icon>
        <ToolingIcon />
      </template>
      <router-link to="/passengermanagement" type="button" class="btn btn-outline-dark">
        <div class=" text-start"><h3>Passenger Management</h3></div>
    

      <p class="text-start">Allows you to manage passenger information to provide assistance to affected customers during flight disruptions</p>

      <br />
      </router-link>
    
  </WelcomeItem>

  
  

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <router-link to="/livechat" type="button" class="btn btn-outline-dark">
      <div class=" text-start"><h3>Live Chat</h3></div>
    

    <p class="text-start">Allows you to interact with the customers to know their details to help you in rescheduling their flight efficiently</p>
    </router-link>
  </WelcomeItem>
  </div>
</div>


  
</template>

<style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    
  }
  #app {
    grid-template-columns: 1fr 1fr;
  }
}
.img {
  background-image: url('../assets/94999.png');
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-size: contain;
}



</style>